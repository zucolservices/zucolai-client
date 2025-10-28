import Image from 'next/image'
import React from 'react'

const OfferProcess = () => {
    const RightIcons = () => {
        return (
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9985 22C13.9763 22 15.9097 21.4135 17.5542 20.3147C19.1987 19.2159 20.4805 17.6541 21.2373 15.8268C21.9942 13.9996 22.1922 11.9889 21.8064 10.0491C21.4205 8.10929 20.4681 6.32746 19.0696 4.92894C17.6711 3.53041 15.8892 2.578 13.9494 2.19215C12.0096 1.8063 9.99896 2.00433 8.1717 2.76121C6.34444 3.51809 4.78265 4.79981 3.68384 6.4443C2.58502 8.08879 1.99854 10.0222 1.99854 12C2.00619 14.6498 3.06221 17.1889 4.93592 19.0626C6.80963 20.9363 9.34872 21.9924 11.9985 22V22Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.75244 12.0019L10.5824 14.8319L16.2524 9.17188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                    <div className="bg-[#FFF5FF] rounded-[16px] p-6 relative overflow-hidden md:min-h-[220px] max-h-[220px]">
                        <div className="md:flex justify-between items-center ">
                            <div>
                                {cardOneContent?.map((item, index) => (
                                    <div className="my-4 flex items-start gap-3 flex-shrink-0" key={index}>
                                        <div className="">
                                            <RightIcons />
                                        </div>
                                        <p style={{fontWeight:300}}  className="text-[16px] leading-[24px] font-normal  text-[#000000]">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="">
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
                                        <div className="">
                                            <RightIcons  />
                                        </div>
                                        <p style={{fontWeight:300}} className="text-[16px] leading-[24px]  text-[#000000]">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="">
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

        </section>
    )
}

export default OfferProcess