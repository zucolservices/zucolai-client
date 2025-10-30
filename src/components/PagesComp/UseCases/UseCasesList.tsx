 import React from 'react'
 import Link from 'next/link'

const cardsContent = [
    {
        title: "Loan Information Voice Agent (Vridhi Home Finance)",
        description: "AI bot that gathers information related to loan from interested leads.",
        imageUrl: "/images/image_001978369.jpg"
    },
    {
        title: "AI Learner (Desklib)",
        description: "AI bot which provides lecture for uploaded study material.",
        imageUrl: "/images/image_001978368.jpg"
    },
    {
        title: "Zoice-style demo use cases",
        description: "lead qualification, loan eligibility, appointment booking.  ",
        imageUrl: "/images/image_001978367.jpg"
    },
];

const UseCasesList = () => {
    const toSlug = (title: string) =>
        title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    const borderColors = [' #BA8DFF', '#E52DE8', '#38A3F3'];
    return (
        <section className="w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto  py-[100px] lg:py-[140px]">
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
                                style={{ height: '300px' }}
                            >
                                {/* Hover background image layer */}
                                <div
                                  className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-100 lg:opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 z-0"
                                    style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '300px' }}
                                />
                                <div className="relative z-10 rounded-[12px] space-y-3">
                                    <p style={{ fontWeight: 300 }} className="md:text-[30px] text-[24px] leading-[1.2] font-normal text-[#000]">{item.title}</p>
                                    <p style={{ fontWeight: 300 }} className="text-[16px] font-normal text-[#000]/60">{item.description}</p>
                                </div>

                                {/* Know More button - slides up on hover */}
                                <div className="absolute left-6 right-6 bottom-6 z-10">
                                    <div className="opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-6 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300 ease-out">
                                        <Link
                                            href={`/use-cases/${toSlug(item.title)}`}
                                            className="flex items-center justify-between border text-[#000] bg-white/70 backdrop-blur rounded-[12px] w-[160px] h-[44px] px-4 text-[16px]"
                                            style={{ borderColor: borderColors[index] || '#2A71FF' }}
                                        >
                                            <span className="text-[16px]">Know More</span>
                                            <span className="inline-block transition-transform lg:group-hover:translate-x-1">→</span>
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

export default UseCasesList