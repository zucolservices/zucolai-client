import GradientsLeftRight from '@/components/GradientsLeftRight'
import HeadingPurple from '@/components/HeadingPurple'
import Image from 'next/image'
import React from 'react'

const ValuesGrid = () => {

    return (
        <div className=" relative z-10 w-full">
            <GradientsLeftRight />
            <div className='relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-16'>
                <div className='hidden md:block'>
                    <HeadingPurple title="{ Our Values }" />
                    <p className="max-w-2xl text-[#00000066]/40 text-[32px] leading-[40px]">
                        Trusted AI.<br />Real Impact.
                    </p>
                    <div className='mt-24'>
                        <div className="w-full flex gap-2">
                            <div className='relative w-[60%] h-[228px]'
                                style={{
                                    backgroundImage: "url('/images/image 1001978370.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    borderRadius: "16px"

                                }}>
                                <div className='absolute top-[60%] left-[30%] -translate-x-[50%] -translate-y-[50%]'>
                                    <h2 className='text-[#E63EEA] text-[40px] leading-[48px] font-semibold'>Innovation First</h2>
                                    <p className='text-[#000000]/60 text-[16px] leading-[24px] font-light'>Always pushing boundaries with <br />research-led solutions.</p>
                                </div>
                            </div>
                            <div className='relative w-[40%] h-[386px]'
                                style={{
                                    backgroundImage: "url('/images/image 1001978375.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    borderRadius: "16px"
                                }}>
                                <div className='absolute top-[60%] left-[40%] -translate-x-[50%] -translate-y-[50%]'>
                                    <h2 className='text-[#6DD03F] text-[40px] leading-[48px] font-semibold'>Transparency & Trust</h2>
                                    <p className='text-[#000000]/60 text-[16px] leading-[24px] font-light'>Building AI that businesses <br />and their customers can rely on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative -mt-[150px] w-full flex gap-2 items-end">
                            <div className='absolute top-[20%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[201px] h-[146px]'>
                                <Image src={"/images/image 1001978373.png"} alt="" fill className='object-cover rounded-[16px]' />
                            </div>
                            <div className='relative w-[40%] h-[386px]'
                                style={{
                                    backgroundImage: "url('/images/image 1001978374.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    borderRadius: "16px"
                                }}>
                                <div className='absolute top-[70%] left-[40%] -translate-x-[50%] -translate-y-[50%]'>
                                    <h2 className='text-[#D98D53] text-[40px] leading-[48px] font-semibold'>Impact Focused</h2>
                                    <p className='text-[#000000]/60 text-[16px] leading-[24px] font-light'>Every project is tied to <br />measurable business outcomes</p>
                                </div>
                            </div>
                            <div className='relative w-[60%] h-[228px]'
                                style={{
                                    backgroundImage: "url('/images/image 1001978371.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    borderRadius: "16px"
                                }}
                            >
                                <div className='absolute top-[50%] left-[30%] -translate-x-[50%] -translate-y-[50%]'>
                                    <h2 className='text-[#5589EA] text-[40px] leading-[48px] font-semibold'>Collaboration</h2>
                                    <p className='text-[#000000]/60 text-[16px] leading-[24px] font-light'>Partnering closely with clients to <br /> ensure AI adoption success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet View */}
                <div className="block md:hidden">
                    <HeadingPurple title="{ Our Values }" />
                    <p className="max-w-2xl text-[#00000066]/40 text-[28px] leading-[36px]">
                        Trusted AI.<br />Real Impact.
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-4">
                        {/* Innovation First */}
                        <div
                            className="relative h-[260px] rounded-[16px] flex flex-col justify-center p-8"
                            style={{
                                backgroundImage: "url('/images/image 1001978370.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h2 className="text-[#E63EEA] text-[28px] leading-[36px] font-semibold mb-2">
                                Innovation First
                            </h2>
                            <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">
                                Always pushing boundaries with research-led solutions.
                            </p>
                        </div>

                        {/* Transparency & Trust */}
                        <div
                            className="relative h-[260px] rounded-[16px] flex flex-col justify-center p-8"
                            style={{
                                backgroundImage: "url('/images/image 1001978375.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h2 className="text-[#6DD03F] text-[28px] leading-[36px] font-semibold mb-2">
                                Transparency & Trust
                            </h2>
                            <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">
                                Building AI that businesses and their customers can rely on.
                            </p>
                        </div>

                        {/* Impact Focused */}
                        <div
                            className="relative h-[260px] rounded-[16px] flex flex-col justify-center p-8"
                            style={{
                                backgroundImage: "url('/images/image 1001978374.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h2 className="text-[#D98D53] text-[28px] leading-[36px] font-semibold mb-2">
                                Impact Focused
                            </h2>
                            <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">
                                Every project is tied to measurable business outcomes.
                            </p>
                        </div>

                        {/* Collaboration */}
                        <div
                            className="relative h-[260px] rounded-[16px] flex flex-col justify-center p-8"
                            style={{
                                backgroundImage: "url('/images/image 1001978371.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <h2 className="text-[#5589EA] text-[28px] leading-[36px] font-semibold mb-2">
                                Collaboration
                            </h2>
                            <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">
                                Partnering closely with clients to ensure AI adoption success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValuesGrid