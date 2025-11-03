import Header from '@/components/Header';
import DarkFooter from '@/components/DarkFooter';
import React from 'react'
import BlogInternalHeroSection from '@/components/PagesComp/Blog/BlogInternalHeroSection';
import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogs.find(b => b.id === params.slug);
    if (!post) return {};

    const plain = post.content.replace(/<[^>]+>/g, '');
    const description = plain.split('\n').filter(Boolean).join(' ').slice(0, 160);
    const url = `https://zucol.ai/blog/${post.id}`;
    const images = [{ url: "/logos/zucolLogo.png", width: 1200, height: 630, alt: post.title }];

    return {
        title: post.title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            url,
            title: post.title,
            description,
            images,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description,
            images: ["/logos/zucolLogo.png"],
        },
    };
}

const page = ({ params }: { params: { slug: string } }) => {
    const post = blogs.find(b => b.id === params.slug);
    if (!post) return notFound();

    return (
        <div className="p-0 md:p-2">
            <main>
                <Header />
                <BlogInternalHeroSection post={post} />
               
            </main>
            <DarkFooter />
        </div>
    );
}

export default page