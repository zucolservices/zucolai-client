
"use client";
import HeadingPurple from '@/components/HeadingPurple'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const TeamSection = () => {

    const teamMembersDetails = [
        {
            id: 1,
            name: "Name Here",
            position: "Founder & CEO",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 2,
            name: "Name Here",
            position: "UI Designer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 3,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 4,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 5,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 6,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
        {
            id: 7,
            name: "Name Here",
            position: "Developer",
            image: "/images/Frame 2147226918.png",

        },
    ]


    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [animatedWords, setAnimatedWords] = useState(new Set<number>());

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
        if (isInView) {
            const lines = [
                "We don't just build AI tools we design them to",
                "solve real problems at scale. Zucol AI brings",
                "together deep tech and business understanding.",
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
        }
    }, [isInView]);

    const renderAnimatedText = (text: string, startIndex: number = 0): React.JSX.Element[] => {
        return text.split("  ").map((word, i) => {
            const wordIndex = startIndex + i;
            const isAnimated = animatedWords.has(wordIndex);

            return (
                <span
                    key={wordIndex}
                    className={`inline-block transition-colors duration-300 ${isAnimated ? "text-black" : "text-gray-300"
                        }`}
                >
                    {word}{" "}
                </span>
            );
        });
    };

    return (
        <div className=" relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-16">
            <div ref={sectionRef}>
                <HeadingPurple title="{ Our Team }" />
                <p className="max-w-2xl text-[#00000066]/40 text-[32px] leading-[40px]">
                    {renderAnimatedText("We don't just build AI tools we design them to")}
                    {renderAnimatedText("solve real problems at scale. Zucol AI brings", 0)}
                    {renderAnimatedText("together deep tech and business understanding.", 8)}
                </p>
            </div>
            <div className='mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4'>
                {teamMembersDetails?.map((member) => (
                    <div key={member.id} className='relative'>
                        <div className='w-full h-[345px]'>
                            <Image src={member.image} alt={member.name} fill className='object-cover rounded-[14px]' />
                        </div>
                        <div className='absolute top-0 left-0 right-0 p-6'>
                            <h2 className='text-[#FDFDFD] text-[24px] leading-[32px]'>{member.name}</h2>
                            <p className='text-[#FDFDFD] text-[14px] leading-[20px]'>{member.position}</p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default TeamSection