import Header from '@/components/Header';
import DarkFooter from '@/components/DarkFooter';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Read the terms governing your access to and use of Zucol AI websites, products, and services.',
  openGraph: {
    title: 'Terms of Use • Zucol AI',
    description:
      'The rules and conditions for using Zucol AI websites and services.',
    url: 'https://zucol.ai/terms-of-use',
  },
};

const Page = () => {
  return (
    <div className="p-0 md:p-2 lg:py-30 py-16">
      <main>
        <Header />
        <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 py-16">
          <h1 className="text-3xl md:text-4xl font-light text-[#0B0B0B] mb-6">Terms of Use</h1>
          <p className="text-[#0B0B0B]/80 mb-6">
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of Zucol AI websites and services. By using
            our services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">Use of services</h2>
          <ul className="list-disc pl-6 space-y-2 text-[#0B0B0B]/80">
            <li>Use our services in compliance with applicable laws and these Terms.</li>
            <li>Do not attempt to disrupt or compromise our systems.</li>
            <li>Respect intellectual property and third-party rights.</li>
          </ul>

          <h2 className="text-2xl font-light mt-10 mb-3">Accounts</h2>
          <p className="text-[#0B0B0B]/80 mb-4">
            You are responsible for the activity on your account. Keep your login credentials secure and notify us of
            unauthorized use.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">Disclaimers</h2>
          <p className="text-[#0B0B0B]/80 mb-4">
            Services are provided &quot;as is&quot; without warranties. To the extent permitted by law, we disclaim implied
            warranties and limit liability.
          </p>

          <h2 className="text-2xl font-light mt-10 mb-3">Changes</h2>
          <p className="text-[#0B0B0B]/80">We may update these Terms. Continued use after changes constitutes acceptance.</p>

          <p className="text-[#0B0B0B]/60 mt-8">Last updated: {new Date().getFullYear()}</p>
        </section>
      </main>
      <DarkFooter />
    </div>
  );
};

export default Page;
