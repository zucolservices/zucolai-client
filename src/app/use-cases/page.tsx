import Header from '@/components/Header';
import DarkFooter from '@/components/DarkFooter';
import React from 'react'
import type { Metadata } from 'next'
import CasesHeroSection from '@/components/PagesComp/UseCases/CasesHeroSection';
import SectionOne from '@/components/PagesComp/UseCases/SectionOne';
import UseCasesList from '@/components/PagesComp/UseCases/UseCasesList';

const page = () => {


    return (
        <div className="p-0 md:p-2">
            <main>
                <Header />
             <UseCasesList />
            </main>
            <DarkFooter />
        </div>
    );
}

export default page

export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'Discover real-world AI use cases delivered by Zucol AI—voice agents, chatbots, RAG workflows, and more across industries.',
  keywords: [
    'AI use cases',
    'case studies',
    'conversational AI examples',
    'RAG examples',
    'computer vision examples',
  ],
  openGraph: {
    title: 'Use Cases • Zucol AI',
    description:
      'Explore practical AI implementations and outcomes with Zucol AI.',
    url: 'https://zucol.ai/use-cases',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Zucol AI Use Cases' },
    ],
  },
};