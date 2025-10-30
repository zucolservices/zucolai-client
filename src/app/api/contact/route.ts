import { NextResponse } from "next/server";

// POST /api/contact
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, email, phone, company, title, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = "vidhitomar30@gmail.com"; // destination per request

    if (!RESEND_API_KEY) {
      console.warn("[contact] RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const subject = `New contact form submission from ${name}`;
    const html = `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:1.6;color:#0b0b0b">
        <h2 style="margin:0 0 12px">Zucol AI – Contact Form</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        ${title ? `<p><strong>Title:</strong> ${escapeHtml(title)}</p>` : ""}
        <p style="white-space:pre-wrap"><strong>Message:</strong><br/>${escapeHtml(message)}</p>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Zucol AI <noreply@mail.zucol.ai>",
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!resendRes.ok) {
      const text = await resendRes.text();
      console.error("[contact] Resend error", resendRes.status, text);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
