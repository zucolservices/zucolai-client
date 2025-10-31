import Header from '@/components/Header';
import ServicesHeroSection from '@/components/PagesComp/Services/HeroSection';
import OurServices from '@/components/PagesComp/Services/OurServices';
import DarkFooter from '@/components/DarkFooter';

import React from 'react'
import type { Metadata } from 'next'
import TabsCards from '@/components/PagesComp/Services/TabsCards';
import PowerSection from '@/components/PagesComp/Services/PowerSection';
import OfferProcess from '@/components/PagesComp/Services/OfferProcess';
import CaseStudy from '@/components/PagesComp/Services/CaseStudy';
import ContactHeroSection from '@/components/contact-us/ContactHeroSection';
import ContactFormSection from '@/components/contact-us/FormSection';

const page = () => {


  return (
    <div className="p-0 md:p-2">
      <main>
        <Header />
        <ContactHeroSection />
      <ContactFormSection />
       
      </main>
      <DarkFooter />
    </div>
  );
}

export default page

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Zucol AI to discuss your AI project, request a demo, or talk to our team about solutions and pricing.",
  keywords: [
    'contact Zucol AI',
    'AI demo',
    'talk to sales',
    'AI consultation',
  ],
  openGraph: {
    title: 'Contact Us • Zucol AI',
    description:
      'Reach out to our team for demos, pricing, and implementation help.',
    url: 'https://zucol.ai/contact-us',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Zucol AI Contact' },
    ],
  },
};