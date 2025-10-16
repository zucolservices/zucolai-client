import GradientsLeftRight from '@/components/GradientsLeftRight';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BlogCard {
    id: string;
    title: string;
    description: string;
}
interface BlogContentProps {
    cardData?: BlogCard[];
}

const BlogContent: React.FC<BlogContentProps> = ({ cardData = [] }) => {

    return (
        <div className='relative z-10'>
            <GradientsLeftRight />
            <section className='max-w-[75rem] mx-auto my-[80px] px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        cardData.map((item: BlogCard, index: number) => (
                            <div key={index} className='rounded-[8px] bg-[#ffffff] overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                                <div className='relative w-full h-[215px]'>
                                    <Image
                                        src={"/images/image 1001978423.png"}
                                        alt={item.title}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                                <Link href={`/blog/${item.id}`}>
                                    <div className='p-4'>
                                        <h2 className='text-[#000000] text-[24px] leading-[32px] font-light mb-2'>{item.title}</h2>
                                        <p className='text-[#050505]/70 text-[16px] leading-[24px] font-light'>{item.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default BlogContent