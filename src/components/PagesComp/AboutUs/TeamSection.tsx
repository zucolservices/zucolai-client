
"use client";
import HeadingPurple from '@/components/HeadingPurple'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type TeamMember = {
    id: number;
    name: string;
    position: string;
    image: string;
};

const TeamSection: React.FC = () => {

    const teamMembersDetails: TeamMember[] = [
        {
            id: 1,
            name: "Ankush Tambi",
            position: "Chairman",
            image: "/images/TeamPhotos/ankush-sir.webp",

        },
        {
            id: 2,
            name: "Arpit Aeron",
            position: "Vice-Chairman",
            image: "/images/TeamPhotos/arpit_aeron.webp",

        },
        {
            id: 3,
            name: "Siddharth Jhanwar",
            position: "Director",
            image: "/images/TeamPhotos/siddhu_sir.webp",

        },
        {
            id: 4,
            name: "Akshat Gupta",
            position: "Technology Advisor",
            image: "/images/TeamPhotos/akshat-gupta.webp",

        },
        {
            id: 5,
            name: "Arunank Sharan",
            position: "Technology Advisor",
            image: "/images/TeamPhotos/Arunank-sir.webp",

        },
        {
            id: 6,
            name: "Bhaumik Jain",
            position: "Strategic Advisor",
            image: "/images/TeamPhotos/bhaumya_sir.webp",

        },

    ]


    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [animatedWords, setAnimatedWords] = useState(new Set<number>());
    const infoRef = useRef<HTMLDivElement>(null);
    const [infoInView, setInfoInView] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);

    // Lines to animate and their starting word offsets
    const lines = [
        "We don't just build AI tools we design",
        "them to solve real problems at scale.",
        "Zucol AI brings together deep tech",
        "and business understanding.",
    ];
    const lineOffsets: number[] = (() => {
        let acc = 0;
        return lines.map((l) => {
            const start = acc;
            acc += l.split(" ").length;
            return start;
        });
    })();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1, rootMargin: "0px" }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;
        let globalWordIndex = 0;
        const perWordDelay = 150; // slower animation
        const totalWords = lines.reduce((sum, l) => sum + l.split(" ").length, 0);

        lines.forEach((line) => {
            const wordsInLine = line.split(" ");
            wordsInLine.forEach((_, wordIndexInLine) => {
                const currentWordIndex = globalWordIndex;
                setTimeout(() => {
                    setAnimatedWords((prev) => new Set([...prev, currentWordIndex]));
                    if (currentWordIndex === totalWords - 1) {
                        setAnimationDone(true);
                    }
                }, (globalWordIndex) * perWordDelay);
                globalWordIndex++;
            });
        });

        // Fallback in case StrictMode double-invocation interferes
        const doneTimeout = setTimeout(() => setAnimationDone(true), totalWords * perWordDelay + 300);
        return () => clearTimeout(doneTimeout);
    }, [isInView]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInfoInView(true);
            },
            { threshold: 0.2 }
        );
        if (infoRef.current) observer.observe(infoRef.current);
        return () => observer.disconnect();
    }, []);

    // As a safety, if the heading animation finished, reveal the grid
    useEffect(() => {
        if (animationDone) setInfoInView(true);
    }, [animationDone]);

    const renderAnimatedText = (text: string, startIndex: number = 0): React.JSX.Element[] => {
        return text.split(" ").map((word, i) => {
            const wordIndex = startIndex + i;
            const isAnimated = animatedWords.has(wordIndex);

            return (
                <span
                    key={wordIndex}
                    className={`inline-block mr-1 transition-colors duration-300 ${isAnimated ? "text-black" : "text-gray-300"
                        }`}
                >
                    {word}
                </span>
            );
        });
    };

    return (
        <div className=" relative z-10 w-full px-6 lg:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-16">
            <div ref={sectionRef}>
                <HeadingPurple title="[ Our Team ]" />
                <p style={{ fontWeight: 300 }} className="max-w-2xl text-[#00000066]/40 text-[32px] leading-[48px] font-light">
                    {renderAnimatedText(lines[0], lineOffsets[0])}
                    <br />
                    {renderAnimatedText(lines[1], lineOffsets[1])}
                    <br />
                    {renderAnimatedText(lines[2], lineOffsets[2])}
                    <br />
                    {renderAnimatedText(lines[3], lineOffsets[3])}
                </p>
            </div>
            <div ref={infoRef} className={`mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${animationDone ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`transition-all duration-500 lg:duration-700 ${infoInView ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-2'}`}>
                    <h3 style={{ fontWeight: 300 }} className='text-[#0B0B0B] text-[24px] font-light lg:text-[40px] '>Who We Are:</h3>
                    <p className='text-[#0B0B0B] text-[16px] leading-[24px] lg:text-[16px] font-light lg:max-w-[200px]'>A team of data scientists, engineers, and strategists with AI expertise.</p>
                </div>
                <div className={`transition-all duration-500 lg:duration-700 delay-100 ${infoInView ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-2'}`}>
                    <h3 style={{ fontWeight: 300 }} className='text-[#0B0B0B] text-[24px] font-light lg:text-[40px] '>How We Work:</h3>
                    <p className='text-[#0B0B0B] text-[16px] leading-[24px] lg:text-[16px] font-light lg:max-w-[200px]'>Collaborative, research-driven, and focused on measurable outcomes.</p>
                </div>
                <div className={`transition-all duration-500 lg:duration-700 delay-200 ${infoInView ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-2'}`}>
                    <h3 style={{ fontWeight: 300 }} className='text-[#0B0B0B] text-[24px] font-light lg:text-[40px] '>Setting Us Apart:</h3>
                    <p className='text-[#0B0B0B] text-[16px] leading-[24px] lg:text-[16px] font-light lg:max-w-[200px]'>Industry knowledge + cutting-edge AI R&D + customer-first approach.</p>
                </div>
            </div>
          <div className="mt-24 grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-3 lg:max-w-6xl mx-auto w-full">
  {teamMembersDetails?.map((member: TeamMember) => (
    <div
      key={member.id}
      id={member.id.toString()}
      className="group relative rounded-[14.5px] flex flex-col justify-between w-full h-full overflow-hidden"
      style={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(180.06deg, #1C1F22 0.05%, #39516B 99.95%)',
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100 lg:opacity-0 transition-opacity duration-150 ease-out lg:group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(180.06deg, rgba(28,31,34,0.85) 0.05%, rgba(67,131,201,0.70) 99.95%)',
        }}
      />

      {/* Text */}
      <div className="p-3 sm:p-4 relative z-20 flex-shrink-0 transition-all duration-200 ease-out lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
        <h2 className="text-[#FDFDFD]  text-[18px] sm:text-[22px] font-light m-0">
          {member.name}
        </h2>
        <p className="text-[#FFFFFFCC] text-[12px] sm:text-[14px] font-light m-0">
          {member.position}
        </p>
      </div>

      {/* Image at bottom (fills remaining space) */}
      <div className="relative w-full flex-grow">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={500}
          className="object-cover w-full h-full grayscale-0 lg:grayscale transition duration-150 ease-out lg:group-hover:grayscale-0"
        />
      </div>
    </div>
  ))}
</div>



        </div>
    )
}

export default TeamSection