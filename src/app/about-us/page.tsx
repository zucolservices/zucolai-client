import React from 'react'
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