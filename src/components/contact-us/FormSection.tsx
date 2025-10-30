"use client";
import HeadingPurple from "@/components/HeadingPurple";
import React, { useState } from "react";

export default function ContactFormSection() {
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;
        setStatus(null);
        setSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            full_name: String(formData.get('name') || ''),
            email: String(formData.get('email') || ''),
            phone: String(formData.get('phone') || ''),
            company: String(formData.get('company') || ''),
            job_title: String(formData.get('title') || ''),
            message: String(formData.get('message') || ''),
        };

        try {
            const res = await fetch('https://app.parmartham.org.in/api/send-mail/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || 'Failed to submit');
            }
            setStatus({ ok: true, message: "Thanks! We'll get back to you soon." });
            form.reset();
        } catch (err: any) {
            setStatus({ ok: false, message: err?.message || 'Something went wrong.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="min-h-[678px] relative lg:py-10  py-10 px-6 lg:px-0">
            <div className="bg-[#FDFDFD] rounded-[16px] min-h-[678px] max-w-6xl mx-auto border-[#0000001A] border-[1px] flex flex-col lg:flex-row overflow-hidden">

                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 lg:px-[96px] lg:py-[92px]">
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-light leading-[36px] sm:leading-[40px] lg:leading-[44px] text-[#0A0A0A] mb-6 tracking-[-0.02em] font-['Inter Display']">Get in touch</h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input name="name" required type="text" placeholder="Full Name" className="h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                            <input name="email" required type="email" placeholder="Email Address" className="h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        </div>
                        <input name="phone" type="tel" placeholder="Phone Number" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <input name="company" type="text" placeholder="Company / Organization" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <input name="title" type="text" placeholder="Job Title" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <textarea name="message" required placeholder="Message / Project Brief" rows={4} className="w-full rounded-[8px] border border-[#E0E0E0] px-4 py-3 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40 resize-none" />

                        <button disabled={submitting} type="submit" className="mt-2 inline-flex items-center gap-2 bg-black text-white px-5 h-10 rounded-[8px] hover:bg-black/90 transition disabled:opacity-60 disabled:cursor-not-allowed">
                            {submitting ? 'Submitting...' : 'Submit'}
                            <span className="inline-block translate-x-0 group-hover:translate-x-0">→</span>
                        </button>
                        {status && (
                            <div className={`text-sm mt-1 ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>
                        )}
                    </form>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <div className="bg-[url('/backgrounds/contact-form.png')] bg-no-repeat bg-cover bg-center h-full min-h-[360px] w-full">
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                            <div className="backdrop-blur-lg bg-white/50 rounded-[16px] border border-white/60 shadow-[0_8px_60px_rgba(186,141,255,0.25)] max-w-[520px] w-full p-6 sm:p-8">
                                <HeadingPurple title="[ Connect ]" />
                                <p className="mt-2 text-[22px] sm:text-[38px] leading-[32px] sm:leading-[48px] text-[#00000040] font-light">
                                    Every transformation starts with a conversation.
                                </p>
                                <p className="mt-2 text-[22px] sm:text-[38px] leading-[32px] sm:leading-[48px] text-[#050505B2] font-light">
                                    Let&apos;s shape the <span className="bg-gradient-to-r from-[#79E9FF] to-[#9D58FF] bg-clip-text text-transparent">future of AI</span> together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}