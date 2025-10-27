 import React from 'react'

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
                                className="rounded-[16px] space-y-4 p-6 border border-[#00000033]/60"
                                style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '300px' }}
                            >
                                <div className="rounded-[12px] space-y-4">
                                    <p className="text-[24px] font-normal text-[#000]">{item.title}</p>
                                    <p className="text-[16px] font-normal text-[#000]/60">{item.description}</p>
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