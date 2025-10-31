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

const page = () => {


  return (
    <div className="p-0 md:p-2">
      <main>
        <Header />
        <ServicesHeroSection />
        <OurServices />
        <TabsCards />
        <PowerSection />
        <OfferProcess />
        <CaseStudy />
      </main>
      <DarkFooter />
    </div>
  );
}

export default page

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Zucol AI services: conversational AI, chatbots, RAG, computer vision, and personalization engines—built for secure, production-ready adoption.',
  keywords: [
    'Zucol AI services',
    'conversational AI',
    'chatbots',
    'RAG',
    'computer vision',
    'personalization',
  ],
  openGraph: {
    title: 'Services • Zucol AI',
    description:
      'End-to-end AI solutions from ideation to production: voice agents, chatbots, RAG, CV, and more.',
    url: 'https://zucol.ai/services',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Zucol AI Services' },
    ],
  },
};