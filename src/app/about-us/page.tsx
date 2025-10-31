import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header';
import AboutUsHeroSection from '@/components/PagesComp/AboutUs/AboutUsHeroSection';
import MissionVission from '@/components/PagesComp/AboutUs/MissionVision';
import TeamSection from '@/components/PagesComp/AboutUs/TeamSection';
import ValuesGrid from '@/components/PagesComp/AboutUs/ValuesGrid';
import DarkFooter from '@/components/DarkFooter';


const page = () => {


    return (
        <div className="p-0 md:p-2">
            <main>
                <Header />
                <AboutUsHeroSection />
                <MissionVission />
                <TeamSection />
                <ValuesGrid />
            </main>
            <DarkFooter />
        </div>
    );
}

export default page

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Zucol AI — a team of data scientists, engineers, and strategists building production-ready AI solutions designed for adoption.',
  keywords: [
    'About Zucol AI',
    'AI team',
    'AI company',
    'data scientists',
    'machine learning engineers',
  ],
  openGraph: {
    title: 'About Us • Zucol AI',
    description:
      'Learn about our mission, team, and approach to delivering secure, adoption-focused AI solutions.',
    url: 'https://zucol.ai/about-us',
images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'Zucol AI' },
    ],
  },
};