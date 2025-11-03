import GradientsLeftRight from '@/components/GradientsLeftRight';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogs } from '@/data/blogs'

interface BlogCard {
    id: string;
    title: string;
    description: string;
    date?: string;
    image?: string;
}
interface BlogContentProps {
    cardData?: BlogCard[];
}

const BlogContent: React.FC<BlogContentProps> = ({ cardData = [] }) => {

    const items: BlogCard[] = (cardData && cardData.length > 0)
        ? cardData
        : blogs.map(b => {
            const plain = b.content.replace(/<[^>]+>/g, '');
            const lines = plain.split('\n').filter(Boolean);
            const firstTwo = lines.slice(0, 2).join(' ');
            return {
                id: b.id,
                title: b.title,
                description: firstTwo,
                date: b.date,
                image: b.image,
            };
        });

    return (
        <div className='relative z-10'>
            <GradientsLeftRight />
            <section className='max-w-[75rem] mx-auto my-[80px] px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        items.map((item: BlogCard, index: number) => (
                            <Link key={index} href={`/blog/${item.id}`} className='rounded-[8px] bg-[#ffffff] overflow-hidden shadow-sm hover:shadow-md transition-shadow block cursor-pointer'>
                                <div className='relative w-full h-[215px]'>
                                    <Image
                                        src={item.image || "/og-image.png"}
                                        alt={item.title}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <div className='p-4'>
                                    <h2 className='text-[#000000] text-[24px] leading-[32px] font-light mb-2'>{item.title}</h2>
                                    {item.date && (
                                        <p className='text-[#050505]/60 text-[12px] leading-[16px] mb-1'>{new Date(item.date).toLocaleDateString()}</p>
                                    )}
                                    <p className='text-[#050505]/70 text-[16px] leading-[24px] font-light'>{item.description}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default BlogContent