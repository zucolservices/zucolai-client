"use client";

import { useEffect, useRef, useState } from "react";

const OurServices = () => {


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
                "From blueprint to breakthrough,",
                "explore how our most in-demand All",
                "capabilities are built to solve complex,",
                "real-world problems."
            ];

            // Match GetInTouchSection pacing
            const perWordDelay = 120; // ms between words
            const lineGap = 200; // pause between lines

            let globalWordIndex = 0;
            let cumulativeDelay = 0;

            lines.forEach((line) => {
                const wordsInLine = line.split(" ");
                const lineStartDelay = cumulativeDelay;

                wordsInLine.forEach((_, wordIndexInLine) => {
                    const currentWordIndex = globalWordIndex;
                    setTimeout(() => {
                        setAnimatedWords(prev => new Set([...prev, currentWordIndex]));
                    }, lineStartDelay + wordIndexInLine * perWordDelay);
                    globalWordIndex++;
                });

                cumulativeDelay += wordsInLine.length * perWordDelay + lineGap;
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
                    className={`inline transition-colors duration-500 ${isAnimated ? "text-black" : "text-gray-300"
                        }`}
                >
                    {word}{" "}
                </span>
            );
        });
    };


    return (
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto md:pb-16 pb-8 pt-8 md:pt-16 lg:pt-32">
            {/* Top tagline */}
            <p
                style={{
                    fontFamily: 'ChakraPetch, sans-serif',
                    fontWeight: 600,
                    fontStyle: 'SemiBold',
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#BA8DFF',
                }}
                className="tracking-wide mb-2 md:mb-4 hidden md:block"
            >
                [ Our Services ]
            </p>
            <div className="w-full border-b border-[#00000040]/25 hidden md:block"></div>
            <div className="flex justify-end w-full" ref={sectionRef}>
                <div className="max-w-xl p-4 text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                    {renderAnimatedText("From blueprint to breakthrough,", 0)}
                    {renderAnimatedText("explore how our most in-demand All", 4)}
                    {renderAnimatedText("capabilities are built to solve complex,", 10)}
                    {renderAnimatedText("real-world problems.", 16)}
                </div>
            </div>

        </div>

    );
};

export default OurServices;
