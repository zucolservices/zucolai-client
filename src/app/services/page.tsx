import Header from '@/components/Header';
import ServicesHeroSection from '@/components/PagesComp/Services/HeroSection';
import OurServices from '@/components/PagesComp/Services/OurServices';
import DarkFooter from '@/components/DarkFooter';

import React from 'react'
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