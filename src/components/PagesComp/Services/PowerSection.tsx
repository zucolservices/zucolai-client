"use client";

import GradientsLeftRight from "@/components/GradientsLeftRight";
import { useEffect, useRef, useState } from "react";

const PowerSection = () => {

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
                "Generative AI reshapes how businesses",
                "create and innovate. It produces text,",
                "images, and videos, helping you move",
                "faster and deliver smarter solutions."
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
        <div className="relative z-10 ">

            <GradientsLeftRight />

            <div className="w-full px-6 md:px-16 lg:px-24 max-w-[60rem] mx-auto pb-8 md:pb-32 pt-16 lg:pt-32 text-center">
                <p
                    style={{
                        fontFamily: 'ChakraPetch, sans-serif',
                        fontWeight: 600,
                        fontStyle: 'SemiBold',
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: '#BA8DFF',
                    }}
                    className="tracking-wide mb-2 md:mb-4 max-w-xl mx-auto text-left"
                >
                    [ Power of Conversational AI ]
                </p>
                <div className=" " ref={sectionRef}>
                    <div className="max-w-xl mx-auto text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                        {renderAnimatedText("Generative AI reshapes how businesses", 0)}
                        {renderAnimatedText("create and innovate. It produces text,", 5)}
                        {renderAnimatedText("images, and videos, helping you move", 11)}
                        {renderAnimatedText("faster and deliver smarter solutions.", 17)}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PowerSection;
