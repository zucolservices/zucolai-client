"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const industries = [
  { name: "Retail", image: "/images/retail.png" },
  { name: "BFSI", image: "/images/bfsi.png" },
  { name: "Edtech", image: "/images/edtech.png" },
  { name: "Government", image: "/images/government.png" },
  { name: "Real Estate", image: "/images/realestate.png" },
];

const ROTATION_INTERVAL = 10000; // 10 seconds

export default function SolutionsSection() {
  const [selected, setSelected] = useState(industries[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = industries.findIndex(
        (i) => i.name === selected.name,
      );
      const nextIndex = (currentIndex + 1) % industries.length;
      setSelected(industries[nextIndex]);
      setProgress(0);
    }, ROTATION_INTERVAL);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, ROTATION_INTERVAL / 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [selected]);

  return (
    <section className="py-16 px-6 md:px-16 lg:px-40">
      <div className="max-w-[90rem] mx-auto">
        {/* Desktop Header Section */}

        {/* Mobile Header Section */}
        <div className="lg:hidden text-center md:text-left mb-8 space-y-6">
          <p className="text-sm tracking-wide inline-block font-medium text-[#BA8DFF] py-1 rounded-full">
            [ Our Solutions ]
          </p>
          <div className="space-y-2">
            <h2
              className="text-heading-display-light"
            >
              Engineered for Impact.
            </h2>
            <h2
              className="text-heading-display-dark"
            >
              Designed for Adoption.
            </h2>
          </div>
        </div>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Content - Desktop */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="space-y-1 mt-12">
              <p className="text-sm tracking-wide mb-4 inline-block font-medium text-[#BA8DFF] py-1 rounded-full">
                [ Our Solutions ]
              </p>
              <h2 className="text-heading-display-light">
                Engineered for Impact.
              </h2>
              <h2 className="text-heading-display-dark">
                Designed for Adoption.
              </h2>
              {industries.map((industry, index) => (
                <div key={index} className="relative mb-2 lg:mb-4">
                <div
                  onClick={() => {
                    setSelected(industry);
                    setProgress(0);
                  }}
                  className={`cursor-pointer transition-colors duration-300 py-4 ${
                    selected.name === industry.name
                      ? "text-[#BA8DFF]"
                      : "text-[#111827]/60 hover:text-[#BA8DFF]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {selected.name === industry.name && (
                      <span className="text-[#BA8DFF] text-3xl leading-none">•</span>
                    )}
              
                    <p className="text-[32px] sm:text-[24px] font-light tracking-[-0.02em] leading-none">
                      {industry.name}
                    </p>
                  </div>
                </div>
              
                {/* ✅ Always show separator */}
                <div className="relative w-full h-[2px]">
                  <div className="absolute inset-0 w-full h-[1px] bg-[#111827]/10"></div>
                  {selected.name === industry.name && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[#BA8DFF]/20 overflow-hidden">
                      <div
                        className="h-full bg-[#BA8DFF] transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
              
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden w-full">
            {/* Image Section for Mobile/Tablet */}
            <div className="mb-8 text-center md:text-left">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-6 min-w-max px-4 justify-center md:justify-start">
                  {industries.map((industry, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelected(industry);
                        setProgress(0);
                      }}
                      className={`text-lg font-light whitespace-nowrap transition-colors duration-300 ${
                        selected.name === industry.name
                          ? "text-[#BA8DFF]"
                          : "text-[#111827]/40"
                      }`}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="relative w-full aspect-[1.3] bg-[#F8F8FF] rounded-[2rem] overflow-hidden">
                {/* Image container */}
                <div className="absolute inset-0 flex items-center justify-center px-8 pt-8 pb-20">
                  <div className="relative w-full h-full">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      className="object-contain transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
              {/* Text moved outside the image container */}
              <div className="text-center px-6 mt-8">
                <p className="text-[#111827]/60 text-base">
                  ~AI services from LLMs, RAG, predictive analytics, and secure
                  deployments.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section - Desktop Only */}
          <div className="lg:col-span-7 hidden lg:block">
            <div className="relative w-full aspect-[1.4] flex flex-col items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-contain transition-all duration-500 p-0" // less padding -> bigger image
                />
              </div>
              <div className="mt-6 text-center">
                {" "}
                {/* gap between image & text */}
                <p className="text-[#111827]/60 text-base">
                  AI services from LLMs, RAG, predictive analytics, and secure
                  deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
