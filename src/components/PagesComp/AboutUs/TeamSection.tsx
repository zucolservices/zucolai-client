
"use client";
import HeadingPurple from '@/components/HeadingPurple'
import React, { useEffect, useRef, useState } from 'react'

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
            image: "/images/TeamPhotos/ankush-sir.png",

        },
        {
            id: 2,
            name: "Arpit Aeron",
            position: "Vice-Chairman",
            image: "/images/TeamPhotos/arpit_aeron.png",

        },
        {
            id: 3,
            name: "Siddharth Jhanwar",
            position: "Director",
            image: "/images/TeamPhotos/siddhu_sir.png",

        },
        {
            id: 4,
            name: "Akshat Gupta",
            position: "Technology Advisor",
            image: "/images/TeamPhotos/akshat-gupta.png",

        },
        {
            id: 5,
            name: "Arunank Sharan",
            position: "Technology Advisor",
            image: "/images/TeamPhotos/Arunank-sir.png",

        },
        {
            id: 6,
            name: "Bhaumik Jain",
            position: "Strategic Advisor",
            image: "/images/TeamPhotos/bhaumya_sir.png",

        },

    ]


    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [animatedWords, setAnimatedWords] = useState(new Set<number>());
    const infoRef = useRef<HTMLDivElement>(null);
    const [infoInView, setInfoInView] = useState(false);

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
        const lines = [
            "We don't just build AI tools we design",
            "them to solve real problems at scale.",
            "Zucol AI brings together deep tech",
            "and business understanding.",
        ];

        let globalWordIndex = 0;

        lines.forEach((line) => {
            const wordsInLine = line.split(" ");

            wordsInLine.forEach((_, wordIndexInLine) => {
                const currentWordIndex = globalWordIndex;
                setTimeout(() => {
                    setAnimatedWords(prev => new Set([...prev, currentWordIndex]));
                }, wordIndexInLine * 80);
                globalWordIndex++;
            });
        });
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
        <div className=" relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-16">
            <div ref={sectionRef}>
                <HeadingPurple title="[ Our Team ]" />
                <p style={{ fontWeight: 300 }} className="max-w-2xl text-[#00000066]/40 text-[40px] leading-[48px]">
                    {renderAnimatedText("We don't just build AI tools we design", 0)}
                    <br />
                    {renderAnimatedText("them to solve real problems at scale.", 8)}
                    <br />
                    {renderAnimatedText("Zucol AI brings together deep tech", 15)}
                    <br />
                    {renderAnimatedText("and business understanding.", 21)}
                </p>
            </div>
            <div ref={infoRef} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-8`}>
                <div className={`transition-all duration-500 lg:duration-700 ${infoInView ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-2'}`}>
                    <h3 style={{ fontWeight: 300 }} className='text-[#0B0B0B] text-[18px] md:text-[40px] '>Who We Are:</h3>
                    <p className='text-[#0B0B0B] text-[14px] leading-[24px] md:text-[16px] font-light lg:max-w-[200px]'>A team of data scientists, engineers, and strategists with AI expertise.</p>
                </div>
                <div className={`transition-all duration-500 lg:duration-700 delay-100 ${infoInView ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-2'}`}>
                    <h3 style={{ fontWeight: 300 }} className='text-[#0B0B0B] text-[18px] md:text-[40px] '>How We Work:</h3>
                    <p className='text-[#0B0B0B] text-[14px] leading-[24px] md:text-[16px] font-light lg:max-w-[200px]'>Collaborative, research-driven, and focused on measurable outcomes.</p>
                </div>
                <div className={`transition-all duration-500 lg:duration-700 delay-200 ${infoInView ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-2'}`}>
                    <h3 style={{ fontWeight: 300 }} className='text-[#0B0B0B] text-[18px] md:text-[40px] '>Setting Us Apart:</h3>
                    <p className='text-[#0B0B0B] text-[14px] leading-[24px] md:text-[16px] font-light lg:max-w-[200px]'>Industry knowledge + cutting-edge AI R&D + customer-first approach.</p>
                </div>
            </div>
            <div className='mt-24 grid grid-cols-1 md:grid-cols-3 justify-center gap-4 lg:max-w-6xl mx-auto'>
                {teamMembersDetails?.map((member: TeamMember) => (
                    <div
                        key={member.id}
                        id={member.id.toString()}
                        className='group relative   rounded-[14.5px] flex flex-col justify-between lg:h-[400px] min-w-[228px] min-w-[300px] overflow-hidden'
                        style={{
                            background:
                                'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(180.06deg, #1C1F22 0.05%, #39516B 99.95%)'
                        }}
                    >
                        {/* Hover gradient overlay */}
                        <div
                            className='pointer-events-none absolute inset-0 z-0 opacity-100 md:opacity-0 transition-opacity duration-150 ease-out md:group-hover:opacity-100'
                            style={{
                                background:
                                    'linear-gradient(180.06deg, rgba(28,31,34,0.85) 0.05%, rgba(67,131,201,0.70) 99.95%)',
                                willChange: 'opacity'
                            }}
                        />

                        <div className='p-4 relative z-20 opacity-100 md:opacity-0 translate-y-0 md:translate-y-2 transition duration-150 ease-out md:group-hover:opacity-100 md:group-hover:translate-y-0' style={{ willChange: 'opacity, transform' }}>
                            <h2 className='text-[#FDFDFD] text-[24px] leading-[32px] font-light font-[300] m-0'>{member.name}</h2>
                            <p className='text-[#FFFFFFCC] text-[14px] p-0 font-light font-[300] m-0'>{member.position}</p>
                        </div>

                        <img src={member.image} alt={member.name} className='relative z-0 object-cover min-h-[320px] w-full grayscale-0 md:grayscale transition duration-150 ease-out md:group-hover:grayscale-0' style={{ willChange: 'filter' }} />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default TeamSection