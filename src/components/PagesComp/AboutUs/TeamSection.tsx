
"use client";
import HeadingPurple from '@/components/HeadingPurple'
import image from 'next/image';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const TeamSection = () => {

    const teamMembersDetails = [
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
        }
    }, [isInView]);

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
                <HeadingPurple title="{ Our Team }" />
                <p style={{fontWeight:300}} className="max-w-2xl text-[#00000066]/40 text-[40px] leading-[48px]">
                    {renderAnimatedText("We don't just build AI tools we design", 0)}
                    <br />
                    {renderAnimatedText("them to solve real problems at scale.", 8)}
                    <br />
                    {renderAnimatedText("Zucol AI brings together deep tech", 15)}
                    <br />
                    {renderAnimatedText("and business understanding.", 21)}
                </p>
            </div>
            <div className='mt-24 grid grid-cols-2 md:grid-cols-3 justify-center gap-4 max-w-3xl mx-auto'>
                {teamMembersDetails?.map((member) => (
                  <div
                    key={member.id}
                    id={member.id.toString()}
                    className='group relative rounded-[14.5px] flex flex-col justify-between min-h-[314px] min-w-[228px] max-w-[228px] overflow-hidden'
                    style={{
                      background:
                        'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(180.06deg, #1C1F22 0.05%, #39516B 99.95%)'
                    }}
                  >
                    {/* Hover gradient overlay */}
                    <div
                      className='pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100'
                      style={{
                        background:
                          'linear-gradient(180.06deg, rgba(28,31,34,0.85) 0.05%, rgba(67,131,201,0.70) 99.95%)',
                        willChange: 'opacity'
                      }}
                    />

                    <div className='p-4 relative z-20 opacity-0 translate-y-2 transition duration-150 ease-out group-hover:opacity-100 group-hover:translate-y-0' style={{ willChange: 'opacity, transform' }}>
                      <h2 className='text-[#FDFDFD] text-[24px] leading-[32px] font-light font-[300] m-0'>{member.name}</h2>
                      <p className='text-[#FFFFFFCC] text-[14px] p-0 font-light font-[300] m-0'>{member.position}</p>
                    </div>

                    <img src={member.image} alt={member.name} className='relative z-0 object-cover h-[249px] w-full grayscale transition duration-150 ease-out group-hover:grayscale-0' style={{ willChange: 'filter' }} />
                  </div>
                ))}

            </div>

        </div>
    )
}

export default TeamSection