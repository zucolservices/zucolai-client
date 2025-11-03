import HeadingPurple from "@/components/HeadingPurple";
import Image from "next/image";
import Link from "next/link";
import { blogs, type BlogPost } from "@/data/blogs";

interface BlogCard {
    id: string;
    title: string;
    description: string;
    image?: string;
    date?: string;
}

export default function BlogInternalHeroSection({ post }: { post: BlogPost }) {
    const fallbackImage = "/images/Rectangle 34625129.png";
    const leftImage = post.image || fallbackImage;

    const morePosts: BlogCard[] = blogs
        .filter(b => b.id !== post.id)
        .map(b => {
            const lines = b.content.split('\n').filter(Boolean);
            return {
                id: b.id,
                title: b.title,
                description: lines.slice(0, 2).join(' '),
                image: b.image,
                date: b.date,
            };
        });

    return (
        <section
            className="relative min-h-screen border border-[white]">
            <div className="absolute top-0 left-0 w-full h-full object-cover" style={{ backgroundColor: "#FFFFFF" }} />
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-8 lg:pb-0 mt-40">
                <div className="space-y-6">
                    <div>
                        <HeadingPurple title="By Anuprash Gupta" />
                        <h2 className="w-full text-[#000000] text-[40px] leading-[48px] font-light">
                            {post.title}
                        </h2>
                        {post.date && (
                            <p className="text-[#000000]/60 text-[12px] leading-[16px] mt-1 font-light">{new Date(post.date).toLocaleDateString()}</p>
                        )}
                        {/* Intro snippet (first paragraph without HTML tags) */}
                        {(() => {
                            const firstBlock = post.content.split('\n').filter(Boolean)[0] || '';
                            const plain = firstBlock.replace(/<[^>]+>/g, '');
                            return plain ? (
                                <p className="w-full text-[#000000]/70 text-[16px] leading-[24px] mt-2 font-light">{plain}</p>
                            ) : null;
                        })()}
                    </div>
                    <div>
                        <Image src={leftImage} alt={post.title} width={1000} height={300} className="object-cover" />
                    </div>
                    <div
                        className="w-full text-[#000000]/60 text-[16px] leading-[24px] mt-2 font-light prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
                <div className="mt-8">
                    {/* <h2 className="w-full text-[#000000] text-[40px] leading-[48px] font-light text-center">Read More Blogs</h2> */}
                    <section className='max-w-[75rem] mx-auto mt-8 mb-[80px] px-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                morePosts.map((item: BlogCard, index: number) => (
                                    <Link key={index} href={`/blog/${item.id}`} className='rounded-[8px] bg-[#ffffff] overflow-hidden shadow-sm hover:shadow-md transition-shadow block'>
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
            </div>
        </section>
    );
}