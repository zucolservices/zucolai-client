// "use client";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// export default function GetInTouchSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
//   return (
//     <section className="relative py-20 md:py-32 flex flex-col justify-center items-center px-6 md:px-20 bg-white overflow-hidden min-h-[80vh]">
//       <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.05)_1px,_transparent_1px)] [background-size:20px_20px]" />

//       <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 opacity-40 blur-3xl rounded-full" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 opacity-40 blur-3xl rounded-full" />

//       <div className="relative max-w-3xl text-left" ref={sectionRef}>
//         <h1 className="font-normal text-[32px] md:text-[40px] leading-snug space-x-2">
//           {"Building AI tools to solve real problems.".split(" ").map((word, i) => (
//             <motion.span
//               key={i}
//               initial={{ color: "#9CA3AF" }}
//               animate={{ color: isInView ? "#111827" : "#9CA3AF" }}
//               transition={{ duration: 0.3, delay: i * 0.1 }}
//               className="inline-block"
//             >
//               {word}{" "}
//             </motion.span>
//           ))}
//           <br />
//           {"Zucol.ai combines tech and business to deliver effective systems.".split(" ").map((word, i) => (
//             <motion.span
//               key={i}
//               initial={{ color: "#9CA3AF" }}
//               animate={{ color: isInView ? "#111827" : "#9CA3AF" }}
//               transition={{ duration: 0.3, delay: (i + 8) * 0.1 }}
//               className="inline-block"
//             >
//               {word}{" "}
//             </motion.span>
//           ))}
//           <br />
//           {"We power great innovation across multiple industries.".split(" ").map((word, i) => (
//             <motion.span
//               key={i}
//               initial={{ color: "#9CA3AF" }}
//               animate={{ color: isInView ? "#111827" : "#9CA3AF" }}
//               transition={{ duration: 0.3, delay: (i + 16) * 0.1 }}
//               className="inline-block"
//             >
//               {word}{" "}
//             </motion.span>
//           ))}
//         </h1>

//         {/* Buttons */}
//         <div className="flex gap-6 mt-12">
//           <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:opacity-80 transition duration-200 ease-in-out cursor-pointer">
//             About us
//           </button>
//           <button className="text-black text-sm px-4 py-2 rounded-md border border-transparent hover:border-black transition duration-200 ease-in-out cursor-pointer focus:outline-none">
//             Get in touch
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState, useEffect, useRef } from "react";

// interface GetInTouchSectionProps {}

export default function GetInTouchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [animatedWords, setAnimatedWords] = useState(new Set<number>());

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          console.log("Section is in view!"); // Debug log
        }
      },
      { threshold: 0.1, rootMargin: "0px" } // More sensitive trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate all lines simultaneously - each line animates its words fast
  useEffect(() => {
    if (isInView) {
      console.log("Starting animation!"); // Debug log
      const lines = [
        "Building AI tools to solve real",
        "problems. Zucol.ai combines tech and",
        "business to deliver effective systems.",
        "We power great innovation across",
        "multiple industries."
      ];

      // Slower, sequential animation settings
      const perWordDelay = 120; // ms between words
      const lineGap = 200; // extra pause between lines

      let globalWordIndex = 0;
      let cumulativeDelay = 0;

      lines.forEach((line) => {
        const wordsInLine = line.split(" ");
        const lineStartDelay = cumulativeDelay;

        wordsInLine.forEach((_, wordIndexInLine) => {
          const currentWordIndex = globalWordIndex;
          setTimeout(() => {
            console.log(`Animating word ${currentWordIndex}`); // Debug log
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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-hidden min-h-[70vh] sm:min-h-[80vh]">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.05)_1px,_transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Floating gradient orbs - responsive sizes */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-emerald-200 to-green-300 opacity-30 blur-3xl rounded-full animate-pulse"
        style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-purple-200 to-indigo-300 opacity-30 blur-3xl rounded-full animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '2s' }} />

      <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-left z-10 w-full" ref={sectionRef}>
        <h1 className="font-normal text-2xl sm:text-3xl md:text-[40px] leading-[32px] sm:leading-[40px] md:leading-[48px]">
          <div className="mb-2 md:mb-0">
            {renderAnimatedText("Building AI tools to solve real", 0)}
          </div>
          <div className="mb-2 md:mb-0">
            {renderAnimatedText("problems. Zucol.ai combines tech and", 6)}
          </div>
          <div className="mb-2 md:mb-0">
            {renderAnimatedText("business to deliver effective systems.", 12)}
          </div>
          <div className="mb-2 md:mb-0">
            {renderAnimatedText("We power great innovation across", 17)}
          </div>
          <div className="mb-2 md:mb-0">
            {renderAnimatedText("multiple industries.", 21)}
          </div>
        </h1>

        {/* Buttons with enhanced hover effects - responsive */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
          <button onClick={() => window.location.href = "/about-us"} className="cursor-pointer bg-[#000000] rounded-[10px] py-[5px] px-[15px] text-[#FFFFFF] text-[16px] font-light leading-[28px]">
            About us
          </button>
          <button onClick={() => window.location.href = "/contact-us"} className="cursor-pointer rounded-[10px] py-[5px] px-[15px] text-[#000000] text-[16px] font-light leading-[28px]">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};