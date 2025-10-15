import Header from '@/components/Header';
import DarkFooter from '@/components/DarkFooter';
import React from 'react'
import BlogInternalHeroSection from '@/components/PagesComp/Blog/BlogInternalHeroSection';

const page = () => {


    return (
        <div className="p-0 md:p-2">
            <main>
                <Header />
                <BlogInternalHeroSection />
            </main>
            <DarkFooter />
        </div>
    );
}

export default page