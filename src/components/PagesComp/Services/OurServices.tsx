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
                    {renderAnimatedText("From blueprint to breakthrough,")}
                    {renderAnimatedText("explore how our most in-demand All", 0)}
                    {renderAnimatedText("capabilities are built to solve complex,", 8)}
                    {renderAnimatedText("real-world problems.", 16)}
                </div>
            </div>

        </div>

    );
};

export default OurServices;
