"use client";
import GradientsLeftRight from '@/components/GradientsLeftRight'
import HeadingPurple from '@/components/HeadingPurple'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const ValuesGrid = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [animatedWords, setAnimatedWords] = useState(new Set<number>());

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true);
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;
        const lines = [
            "Trusted AI.",
            "Real Impact.",
        ];
        let globalIndex = 0;
        lines.forEach((line) => {
            const words = line.split(" ");
            words.forEach((_, i) => {
                const idx = globalIndex;
                setTimeout(() => {
                    setAnimatedWords(prev => new Set([...prev, idx]));
                }, i * 90);
                globalIndex++;
            });
        });
    }, [isInView]);

    const renderAnimatedText = (text: string, startIndex: number = 0) => {
        return text.split(" ").map((word, i) => {
            const idx = startIndex + i;
            const isOn = animatedWords.has(idx);
            return (
                <span key={idx} className={`inline-block mr-1 transition-colors duration-300 ${isOn ? 'text-black' : 'text-gray-300'}`}>{word}</span>
            );
        });
    };

    return (
        <div className=" relative z-10 w-full">
            <GradientsLeftRight />
            <div className='relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-16'>
                <div className='hidden md:block' ref={sectionRef}>
                    <HeadingPurple title="{ Our Values }" />
                    <p style={{fontWeight:300}} className="max-w-2xl text-[40px] leading-[48px]">
                        {renderAnimatedText("Trusted AI.", 0)}
                        <br />
                        {renderAnimatedText("Real Impact.", 2)}
                    </p>
   <div className="mt-24">
  {/* Top row */}
  <div className="w-full flex flex-col md:flex-row gap-2">
    {/* Innovation First */}
    <div
      className="relative w-full md:w-[60%] h-[250px] md:h-[228px] lg:h-[228px]"
      style={{
        backgroundImage: "url('/images/image 1001978370.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "16px",
      }}
    >
      <div className="absolute top-[60%] left-[35%] -translate-x-[50%] -translate-y-[50%] text-center md:text-left">
        <h2 className="text-[#E63EEA] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] font-semibold">
          Innovation First
        </h2>
        <p className="text-[#000000]/60 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-light">
          Always pushing boundaries with <br /> research-led solutions.
        </p>
      </div>
    </div>

    {/* Transparency & Trust */}
    <div
      className="relative w-full md:w-[40%] h-[300px] md:h-[386px]"
      style={{
        backgroundImage: "url('/images/image 1001978375.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "16px",
      }}
    >
      <div className="absolute top-[60%] left-[50%] md:left-[40%] -translate-x-[50%] -translate-y-[50%]  md:text-center lg:text-left">
        <h2 className="text-[#6DD03F] text-[32px] lg:text-[40px] leading-[36px] md:leading-[48px] font-semibold">
          Transparency & Trust
        </h2>
        <p className="text-[#000000]/60 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-light">
          Building AI that businesses <br /> and their customers can rely on.
        </p>
      </div>
    </div>
  </div>

  {/* Bottom row */}
  <div className="relative -mt-[60px] md:-mt-[150px] w-full flex flex-col md:flex-row gap-2 items-end">
    {/* Center small box */}
    <div className="absolute hidden md:block top-[19%] left-[50%] -translate-x-[50%] -translate-y-[50%]  md:w-[128px] lg:w-[201px] h-[100px] ">
      <Image
        src="/images/image 1001978373.png"
        alt="icon"
        fill
        className="object-cover rounded-[16px]"
      />
    </div>

    {/* Impact Focused */}
    <div
      className="relative w-full md:w-[40%] h-[250px] md:h-[386px]"
      style={{
        backgroundImage: "url('/images/image 1001978374.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "16px",
      }}
    >
      <div className="absolute top-[70%] left-[50%] md:left-[40%] -translate-x-[50%] -translate-y-[50%] text-center md:text-left">
        <h2 className="text-[#D98D53] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] font-semibold">
          Impact Focused
        </h2>
        <p className="text-[#000000]/60 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-light">
          Every project is tied to <br /> measurable business outcomes
        </p>
      </div>
    </div>

    {/* Collaboration */}
    <div
      className="relative w-full md:w-[60%] h-[250px] md:h-[228px]"
      style={{
        backgroundImage: "url('/images/image 1001978371.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "16px",
      }}
    >
      <div className="absolute top-[50%] left-[35%] md:left-[30%] -translate-x-[50%] -translate-y-[50%] md:text-center lg:text-left">
        <h2 className="text-[#5589EA] text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] font-semibold">
          Collaboration
        </h2>
        <p className="text-[#000000]/60 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-light">
          Partnering closely with clients to <br /> ensure AI adoption success.
        </p>
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