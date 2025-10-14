import Image from 'next/image'
import React from 'react'

const OfferProcess = () => {
    const RightIcons = () => {
        return (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 4.00004L3.58 6.83004L9.25 1.17004" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        <section className="w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-8">
            <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 gap-4'>
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
                    <div className="bg-[#FFF5FF] rounded-[16px] p-6 relative overflow-hidden">
                        <div className="md:flex justify-between items-center ">
                            <div>
                                {cardOneContent?.map((item, index) => (
                                    <div className="my-4 flex items-start gap-3 flex-shrink-0" key={index}>
                                        <div className="border rounded-full p-2 border-[#000]/60">
                                            <RightIcons />
                                        </div>
                                        <p className="text-[20px] leading-[28px] font-normal text-[#000]/60">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="">
                                <Image
                                    src="/images/image 1.png"
                                    alt="Verticalized AI Innovation"
                                    height={228}
                                    width={228}
                                    className=""
                                />
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
                        <div className="md:flex justify-between items-center ">
                            <div>
                                {cardTwoContent?.map((item, index) => (
                                    <div className="my-4 flex items-start gap-3 flex-shrink-0" key={index}>
                                        <div className="border rounded-full p-2 border-[#000]/60">
                                            <RightIcons />
                                        </div>
                                        <p className="text-[20px] leading-[28px] font-normal text-[#000]/60">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="">
                                <Image
                                    src="/images/Screenshot 2025-09-24 at 2.55.00 PM 1 (1).png"
                                    alt="Verticalized AI Innovation"
                                    height={259}
                                    width={259}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OfferProcess