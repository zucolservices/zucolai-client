export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  image?: string;
  content: string;
};

// Seed post: Who we are?
export const blogs: BlogPost[] = [
 {
  id: 'zucol-ai-is-here',
  title: 'Zucol AI is Here.',
  description:
    'Zucol AI is Here.\nWe are the specialized Artificial Intelligence and LLM department of Zucol Services Private Limited.',
  date: '2025-10-31',
  image: '/images/blogs/blog1.png',
  content: `
<p style="line-height: 1.7; margin-bottom: 12px;">We are the specialized Artificial Intelligence and LLM department of <strong>Zucol Services Private Limited</strong>.</p>

<p style="line-height: 1.7; margin-bottom: 12px;">Our mission is to deliver Cross-Industry AI & Digital Transformation Services that generate lasting change and measurable impact — moving past pilots to production-ready systems.</p>

<p style="line-height: 1.7; margin-bottom: 12px;">We build upon the established engineering foundation of Zucol Services, which has successfully launched and scaled products like Zoice and Desklib.</p>

<h2 style="margin-top: 24px; margin-bottom: 16px; font-size: 32px"><strong>Full-Stack Expertise in AI Production</strong></h2>

<p style="line-height: 1.7; margin-bottom: 12px;">We are a <strong>Full-Stack AI Partner</strong>, focused entirely on delivering solutions that scale and perform reliably in the real world.</p>

<p style="line-height: 1.7; margin-bottom: 12px;">Our technical expertise guarantees high-value results:</p>

<ul style="line-height: 1.8; ">
  <li style="margin-bottom: 10px;"><strong style="font-weight:600">Generative AI:</strong> We specialize in RAG Applications (Enterprise Search & Information Retrieval), Chatbots, and Voice Agents (Conversational AI).</li>
  <li style="margin-bottom: 10px;"><strong style="font-weight:600">AI Automation:</strong> We implement Intelligent Automation and Document Management Systems (Document Intelligence & Automation) to streamline complex workflows.</li>
</ul>

<p style="line-height: 1.7; margin-bottom: 12px;">Our solutions are <strong>Industrial-Grade and Secure by Design</strong>, implementing <strong>on-premise, air-gapped, and zero-trust deployments</strong> for highly regulated sectors.</p>

<p style="line-height: 1.7; margin-bottom: 12px;"><strong>Zucol AI:</strong> Engineered for adoption. We are ready to build the future with you.</p>
`
 }

];
