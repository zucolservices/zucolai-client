import Header from '@/components/Header';
import DarkFooter from '@/components/DarkFooter';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Learn how Zucol AI uses cookies and similar technologies to improve your experience, analyze usage, and personalize content.',
  openGraph: {
    title: 'Cookie Policy • Zucol AI',
    description:
      'Details on cookies and similar technologies used on Zucol AI websites and apps.',
    url: 'https://zucol.ai/cookie-policy',
  },
};

const Page = () => {
  return (
    <div className="p-0 md:p-2 lg:py-30 py-16">
      <main>
        <Header />
        <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 py-16">
          <h1 className="text-3xl md:text-4xl font-light text-[#0B0B0B] mb-6">Cookie Policy</h1>
          <p className="text-[#0B0B0B]/80 mb-6">
            This Cookie Policy explains how Zucol AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
            technologies on our websites and services. It should be read together with our Privacy Policy.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">What are cookies?</h2>
          <p className="text-[#0B0B0B]/80 mb-4">
            Cookies are small text files stored on your device that help websites function, remember your
            preferences, and understand how you interact with pages and features.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">How we use cookies</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#0B0B0B]/80">
            <li>Essential: Enable core site features, security, and network management.</li>
            <li>Analytics: Measure usage, performance, and improve site experience.</li>
            <li>Preferences: Remember settings such as language and region.</li>
            <li>Marketing (if enabled): Help us deliver relevant content.</li>
          </ul>

          <h2 className="text-2xl font-light mt-10 mb-3">Managing cookies</h2>
          <p className="text-[#0B0B0B]/80 mb-4">
            You can control cookies via your browser settings and, where applicable, our cookie banner. Disabling
            some cookies may affect site functionality.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">Updates</h2>
          <p className="text-[#0B0B0B]/80">We may update this policy to reflect changes in technology, law, or our practices.</p>

          <p className="text-[#0B0B0B]/60 mt-8">Last updated: {new Date().getFullYear()}</p>
        </section>
      </main>
      <DarkFooter />
    </div>
  );
};

export default Page;
