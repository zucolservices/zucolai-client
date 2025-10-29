import React from 'react'
import Link from 'next/link'

const cardsContent = [
    {
        title: "Loan Information Voice Agent (Vridhi Home Finance)",
        description: "AI bot that gathers information related to loan from interested leads.",
        imageUrl: "/images/image_1001978369.png"
    },
    {
        title: "AI Learner (Desklib)",
        description: "AI bot which provides lecture for uploaded study material.",
        imageUrl: "/images/image_1001978368.png"
    },
    {
        title: "Zoice-style demo use cases",
        description: "lead qualification, loan eligibility, appointment booking.  ",
        imageUrl: "/images/image_1001978367.png"
    },
];

const CaseStudy = () => {
    const toSlug = (title: string) =>
        title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    return (
        <section className="w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-8">
            <div className='space-y-6'>
                <div className='space-y-6'>
                    <p
                        style={{
                            fontFamily: 'ChakraPetch, sans-serif',
                            fontWeight: 600,
                            fontStyle: 'SemiBold',
                            fontSize: '14px',
                            lineHeight: '24px',
                            color: '#BA8DFF',
                        }}
                        className="tracking-wide mb-2 md:mb-4"
                    >
                        [ Let&apos;s Build Your Success Story ]
                    </p>
                    <div className='text-[40px] leading-[48px] text-[#000000]/80'>Our <span className='text-[#000000] font-medium'>Case Studies</span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {cardsContent?.map((item, index) => (
                            <div
                                key={index}
                                className="group relative rounded-[16px] p-6 border border-[#00000033]/60 overflow-hidden"
                                style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '300px' }}
                            >
                                <div className="rounded-[12px] space-y-3">
                                    <p style={{ fontWeight: 300 }} className="md:text-[30px] text-[24px] leading-[1.2] font-normal text-[#000]">{item.title}</p>
                                    <p style={{ fontWeight: 300 }} className="text-[16px] font-normal text-[#000]/60">{item.description}</p>
                                </div>

                                {/* Know More button - slides up on hover */}
                                <div className="absolute left-6 right-6 bottom-6">
                                    <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                        <Link
                                            href={`/use-cases/${toSlug(item.title)}`}
                                            className="flex items-center justify-between border border-[#38A3F3] text-[#000] bg-[#FFFFFF] backdrop-blur rounded-[8px] w-[160px] h-[44px] px-4 text-[16px]"
                                        >
                                            <span className="text-[#000000] font-light text-[16px]">Know More</span>
                                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy