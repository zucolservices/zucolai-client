"use client";
import GradientsLeftRight from "@/components/GradientsLeftRight";
import HeadingPurple from "@/components/HeadingPurple";
import { useEffect, useRef, useState } from "react";

const MissionVission = () => {


    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionRef2 = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isInView2, setIsInView2] = useState(false);
    const [animatedWords, setAnimatedWords] = useState(new Set<number>());
    const [animatedWords2, setAnimatedWords2] = useState(new Set<number>());

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
        const observer2 = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView2(true);
                }
            },
            { threshold: 0.1, rootMargin: "0px" }
        );

        if (sectionRef2.current) {
            observer2.observe(sectionRef2.current);
        }

        return () => observer2.disconnect();
    }, []);

    useEffect(() => {
        if (isInView) {
            const lines = [
                "To democratize AI by making it",
                "accessible, secure & outcome-driven",
                "for every industry."
            ];

            let globalWordIndex = 0;

            lines.forEach((line) => {
                const wordsInLine = line.split(" ");

                wordsInLine.forEach((_, wordIndexInLine) => {
                    const currentWordIndex = globalWordIndex;
                    setTimeout(() => {
                        setAnimatedWords(prev => new Set([...prev, currentWordIndex]));
                    }, wordIndexInLine * 140);
                    globalWordIndex++;
                });
            });
        }
    }, [isInView]);

    useEffect(() => {
        if (isInView2) {
            const lines = [
                "To be the global leader in responsible",
                "AI adoption, helping businesses thrive",
                "in a digital-first world."
            ];

            let globalWordIndex = 0;

            lines.forEach((line) => {
                const wordsInLine = line.split(" ");

                wordsInLine.forEach((_, wordIndexInLine) => {
                    const currentWordIndex = globalWordIndex;
                    setTimeout(() => {
                        setAnimatedWords2(prev => new Set([...prev, currentWordIndex]));
                    }, wordIndexInLine * 140);
                    globalWordIndex++;
                });
            });
        }
    }, [isInView2]);

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


    const renderAnimatedText2 = (text: string, startIndex: number = 0): React.JSX.Element[] => {
        return text.split("  ").map((word, i) => {
            const wordIndex = startIndex + i;
            const isAnimated = animatedWords2.has(wordIndex);

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
        <div className=" relative z-10 w-full">
            <GradientsLeftRight />
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-32">
                <div className="" ref={sectionRef}>
                    <HeadingPurple title="[ The Mission ]" />
                    <div className="w-full border-b border-[#00000040]/25 hidden md:block"></div>
                    <div className="flex justify-end w-full">
                        <div className="max-w-xl lg:px-4 py-4 text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                            {renderAnimatedText("To democratize AI by making it")}
                            {renderAnimatedText("accessible, secure & outcome-driven.", 0)}
                            {renderAnimatedText("for every industry", 8)}
                        </div>
                    </div>
                </div>
                <div className="mt-10" ref={sectionRef2}>
                    <HeadingPurple title="[ The Vission ]" />
                    <div className="w-full border-b border-[#00000040]/25 hidden md:block"></div>
                    <div className="flex justify-end w-full">
                        <div className="max-w-xl lg:px-4 py-4 text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                            {renderAnimatedText2("To be the global leader in responsible")}
                            {renderAnimatedText2("AI adoption, helping businesses thrive", 0)}
                            {renderAnimatedText2("in a digital-first world.", 8)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVission;
