import Header from '@/components/Header';
import DarkFooter from '@/components/DarkFooter';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Understand how Zucol AI collects, uses, and protects your personal information across our products and services.',
  openGraph: {
    title: 'Privacy Policy • Zucol AI',
    description:
      'Details on our data collection, usage, security practices, and your privacy rights.',
    url: 'https://zucol.ai/privacy-policy',
  },
};

const Page = () => {
  return (
    <div className="p-0 md:p-2 lg:py-30 py-16">
      <main>
        <Header />
        <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 py-16">
          <h1 className="text-3xl md:text-4xl font-light text-[#0B0B0B] mb-6">Privacy Policy</h1>
          <p className="text-[#0B0B0B]/80 mb-6">
            Zucol AI ("we", "us", or "our") is committed to protecting your privacy. This policy describes
            what information we collect, how we use it, and your rights.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">Information we collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#0B0B0B]/80">
            <li>Contact details (e.g., name, email, phone) when you reach out to us.</li>
            <li>Usage data (e.g., pages viewed, device, browser) to improve performance.</li>
            <li>Communications and content you submit via forms or support.</li>
          </ul>

          <h2 className="text-2xl font-light mt-10 mb-3">How we use information</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#0B0B0B]/80">
            <li>Provide and enhance our services and user experience.</li>
            <li>Respond to inquiries and provide support.</li>
            <li>Analyze trends and improve security.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-light mt-10 mb-3">Sharing</h2>
          <p className="text-[#0B0B0B]/80 mb-4">
            We do not sell personal data. We may share data with service providers under contract, or when required by
            law.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">Security</h2>
          <p className="text-[#0B0B0B]/80 mb-4">
            We implement administrative, technical, and physical safeguards to protect data. No system is 100% secure,
            but we strive to use industry best practices.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">Your rights</h2>
          <p className="text-[#0B0B0B]/80 mb-4">Depending on your region, you may have rights to access, correct, delete, or restrict processing of your data.</p>

          <h2 className="text-2xl font-light mt-10 mb-3">Contact</h2>
          <p className="text-[#0B0B0B]/80">Questions? Email us at info@zucol.ai.</p>

          <p className="text-[#0B0B0B]/60 mt-8">Last updated: {new Date().getFullYear()}</p>
        </section>
      </main>
      <DarkFooter />
    </div>
  );
};

export default Page;
