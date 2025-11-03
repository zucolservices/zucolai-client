import DarkFooter from '@/components/DarkFooter';
import Header from '@/components/Header';
import BlogContent from '@/components/PagesComp/Blog/BlogContent';
import BlogMainHeroSection from '@/components/PagesComp/Blog/BlogMainHeroSection';
import React from 'react'

const page = () => {

    return (
        <div className="p-0 md:p-2 bg-[#F2F2F8]">
            <main className=''>
                <Header />
                <BlogMainHeroSection />
                <BlogContent />
            </main>
            <DarkFooter />
        </div>
    );
}

export default page