import Header from '@/components/Header';
import DarkFooter from '@/components/DarkFooter';
import React from 'react'
import CasesHeroSection from '@/components/PagesComp/UseCases/CasesHeroSection';
import SectionOne from '@/components/PagesComp/UseCases/SectionOne';

const page = () => {


    return (
        <div className="p-0 md:p-2">
            <main>
                <Header />
                <CasesHeroSection />
                <SectionOne />

            </main>
            <DarkFooter />
        </div>
    );
}

export default page