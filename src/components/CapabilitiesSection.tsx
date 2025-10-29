"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Generative AI\n& Generation",
    description: "Don’t just build AI tools we design them.",
    iconfilled: "/icons/starfilled.png",
    iconunfilled: "/icons/starunfilled.svg",
  },
  {
    title: "AI-Driven App\nDevelopment",
    description: "Don’t just build AI tools we design them.",
    iconfilled: "/icons/star2filled.svg",
    iconunfilled: "/icons/star2unfilled.svg",
  },
  {
    title: "Machine Learning\n& Analytics",
    description: "Don’t just build AI tools we design them.",
    iconfilled: "/icons/Polygonfilled.svg",
    iconunfilled: "/icons/Polygonunfilled.svg",
  },

  {
    title: "Enterprise Security\n& Deployment",
    description: "Don’t just build AI tools we design them.",
    iconfilled: "/icons/Polygon2filled.svg",
    iconunfilled: "/icons/Polygon2unfilled.svg",
  },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-black text-white overflow-hidden rounded-[1rem]">
      <div className="max-w-[90rem] mx-auto relative">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-50" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#BA8DFF]/20 via-[#BA8DFF]/5 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#BA8DFF]/10 via-[#BA8DFF]/5 to-transparent rounded-full blur-3xl -z-10" />
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 md:mb-16 lg:mb-24" ref={sectionRef}>
            <p className="text-sm tracking-wide mb-4 inline-block font-medium text-[#BA8DFF] py-1 bg-[#BA8DFF]/10 rounded-full">
              [ Our Capabilities ]
            </p>
            <div className="max-w-4xl">
              <h2 className="text-[20px] md:text-[24px] lg:text-[40px] xl:text-[48px] leading-[1.2] font-light flex flex-wrap gap-x-2">
                {/* First sentence */}
                {"We don't just build AI tools we design them to solve real problems at scale."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ color: "rgba(255, 255, 255, 0.2)" }}
                      animate={{
                        color: isInView
                          ? word === "build" ||
                            word === "AI" ||
                            word === "tools" ||
                            word === "we" ||
                            word === "design"
                            ? "rgba(255, 255, 255, 1)"
                            : "rgba(255, 255, 255, 0.6)"
                          : "rgba(255, 255, 255, 0.2)",
                      }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      className="inline-block"
                    >
                      {word}{" "}
                    </motion.span>
                  ))}

                {/* Second sentence */}
                {"Zucol AI brings together deep tech and business understanding."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={`s2-${i}`}
                      initial={{ color: "rgba(255, 255, 255, 0.2)" }}
                      animate={{
                        color: isInView
                          ? word === "deep" ||
                            word === "tech" ||
                            word === "business" ||
                            word === "understanding"
                            ? "rgba(255, 255, 255, 1)"
                            : "rgba(255, 255, 255, 0.6)"
                          : "rgba(255, 255, 255, 0.2)",
                      }}
                      transition={{ duration: 0.8, delay: (i + 15) * 0.15 }}
                      className="inline-block"
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
              </h2>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-3 lg:gap-x-4 gap-y-2 md:gap-y-3 lg:gap-y-4 mt-8 md:mt-12 lg:mt-16 -m-4 md:-m-6 lg:-m-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="
        group cursor-pointer p-4 md:p-6 lg:p-8 rounded-3xl relative  
        lg:opacity-25 lg:hover:opacity-100 lg:transition-opacity lg:duration-500
      "
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#BA8DFF]/0 to-transparent opacity-0 lg:group-hover:opacity-5 rounded-3xl transition-opacity duration-500" />

                {/* Purple Glow/Shadow Below Card */}
                <div className="absolute -bottom-24 left-1/4 transform -translate-x-1/4 w-56 h-16 bg-[#BA8DFF]/80 rounded-full blur-3xl opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Wrapper: Mobile flex row, Desktop stacked */}
                <div className="flex items-start gap-2 md:gap-3 lg:gap-4 lg:block md:items-start md:flex-col">
                  {/* Icon */}
                  <div className="relative z-10 mr-[10px] mt-[8px] lg:mr-0 lg:mt-0 mb-0 lg:mb-8 transform transition-all duration-500 lg:group-hover:-translate-y-2">
                    {/* Filled Icon (Default) */}
                    <Image
                      src={capability.iconfilled}
                      alt={capability.title}
                      width={32}
                      height={32}
                      className="
      w-[20px] h-[20px] lg:w-8 lg:h-8
      transition-all duration-500 transform-gpu
      lg:group-hover:opacity-0
      lg:group-hover:scale-125
      lg:group-hover:rotate-[15deg]
    "
                    />
                    {/* Unfilled Icon (Hover) */}
                    <Image
                      src={capability.iconunfilled}
                      alt={capability.title}
                      width={32}
                      height={32}
                      className="
      w-[20px] h-[20px] lg:w-8 lg:h-8
      transition-all duration-500 transform-gpu
      absolute top-0 left-0
      opacity-0
      lg:group-hover:opacity-100
      lg:group-hover:scale-125
      lg:group-hover:rotate-[15deg]
    "
                    />
                  </div>

                  {/* Title + Description */}
                  <div>
                    <div
                      className="
                    text-[20px] md:text-[30px]
                    leading-[1.33] font-light tracking-[-0.02em] 
                    text-[#FFFFFF]
                    lg:text-[#FFFFFF]/60 lg:group-hover:text-[#BA8DFF]
                     mb-1 md:mb-2 lg:mb-4 relative z-10 
                    transition-all duration-500 w-full
                    lg:text-glow
                  "
                    >
                      {capability.title}
                    </div>

                    <p
                      className={`
              text-[#FFFFFF]
              opacity-60
              lg:text-[#FFFFFF] lg:group-hover:text-[#FDFDFD]
              whitespace-pre-line relative z-10 
              transition-colors duration-500
              text-[14px] md:text-[15px] lg:text-[16px]
            `}
                    >
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
