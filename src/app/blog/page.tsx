import DarkFooter from '@/components/DarkFooter';
import Header from '@/components/Header';
import BlogContent from '@/components/PagesComp/Blog/BlogContent';
import BlogMainHeroSection from '@/components/PagesComp/Blog/BlogMainHeroSection';
import React from 'react'

const page = () => {

    const cardData = [
        {
            id: "1",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "2",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "3",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "4",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "5",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "6",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "7",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "8",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        },
        {
            id: "9",
            title: "Generative AI for Marketing: Scale Creativity",
            description: "Lorem ipsum dolor sit amet conseIn feugiat in mi sit amet ",
        }
    ]

    return (
        <div className="p-0 md:p-2 bg-[#F2F2F8]">
            <main className=''>
                <Header />
                <BlogMainHeroSection />
                <BlogContent cardData={cardData} />
            </main>
            <DarkFooter />
        </div>
    );
}

export default page