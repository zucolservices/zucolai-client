import Image from 'next/image'
import React from 'react'

const OfferProcess = () => {
    const RightIcons = () => {
        return (
            <svg width="8.5" height="5.66" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 4.00004L3.58 6.83004L9.25 1.17004" stroke="#00000099" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        );
    };



    const cardOneContent = [
        "AI-powered inbound/outbound calling for sales, support, and reminders",
        "Multilingual smart IVR replacement for seamless self-service.",
    ];

    const cardTwoContent = [
        "AI-powered inbound/outbound calling for sales, support, and reminders",
        "Multilingual smart IVR replacement for seamless self-service.",
    ];


    return (
        <section className="w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-8 md:pb-16 pt-8">
            <div className='lg:flex flex-col md:flex-row space-y-6 lg:space-y-0 gap-4'>
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
                        className="tracking-wide mb-2 md:mb-4 "
                    >
                        [  Solutions We Provide  ]
                    </p>
                    <div className='text-[40px] leading-[48px] text-[#000000]/80'>Our <span className='text-[#000000] font-medium'>Offerings</span></div>
                    <div className="bg-[#FFF5FF] rounded-[16px] p-6 relative overflow-hidden md:min-h-[220px]">
                        <div className='group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-transparent relative overflow-hidden'>
                            <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
                                <div>
                                    {cardOneContent?.map((item, index) => (
                                        <div className="my-4 flex items-start gap-3 flex-shrink-0" key={index}>
                                            <div className="border rounded-full p-1 border-[1.5px] border-[#000000]/60 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                                <RightIcons />
                                            </div>
                                            <p style={{ fontWeight: 300 }} className="text-[16px] leading-[24px] font-normal  text-[#000000]">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="aspect-square transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:translate-y-4 w-32 md:w-auto">
                                    <Image
                                        src="/images/svgs/image 1.svg"
                                        alt="Verticalized AI Innovation"
                                        height={228}
                                        width={228}
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        className="tracking-wide mb-2 md:mb-4 "
                    >
                        [ Behind The Build ]
                    </p>
                    <div className='text-[40px] leading-[48px] text-[#000000]/80'>Our <span className='text-[#000000] font-medium'>Process</span>
                    </div>
                    <div className="bg-[#73BFFD26] rounded-[16px] p-6 relative overflow-hidden">
                        <div className='group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-transparent relative overflow-hidden'>
                            <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
                                <div>
                                    {cardTwoContent?.map((item, index) => (
                                        <div className="my-4 flex items-start gap-3 flex-shrink-0" key={index}>
                                            <div className="border rounded-full p-1 border-[1.5px] border-[#000000]/60 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                                <RightIcons />
                                            </div>
                                            <p style={{ fontWeight: 300 }} className="text-[16px] leading-[24px]  text-[#000000]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="aspect-square transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-4 w-32 md:w-auto">
                                    <Image
                                        src="/images/svgs/image2.svg"
                                        alt="Verticalized AI Innovation"
                                        height={259}
                                        width={259}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OfferProcess