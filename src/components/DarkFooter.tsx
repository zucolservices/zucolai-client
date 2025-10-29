"use client"
import RainbowSection from "./RainbowSection";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkFooter() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = {
    Menu: ["Solutions", "Resources", "Use Case", "About Us"],
    Additional: ["Cookie Policy", "Privacy Policy", "Terms of Use"],
  };

  return (
    <div className="relative" ref={footerRef}>
      <footer className="py-32 px-6 md:px-16 lg:px-24 pb-0 text-white bg-black relative overflow-hidden rounded-t-[2rem]">
        {/* Background Gradients */}
        <div className="absolute top-0 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#BA8DFF]/20 via-[#BA8DFF]/5 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#E5FFE8]/30 via-[#E5FFE8]/5 to-transparent rounded-full blur-3xl -z-10" />

        <div className="max-w-[90rem] mx-auto relative">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 space-y-8 lg:space-y-0">
            <div className="max-w-xl">
              <p className="text-[16px] font-light text-white/50">
                Unleash the innovative potential.
              </p>
              <p className="text-[16px] font-light text-white/100">
                Intelligence at your fingertips.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <p className="text-[16px] font-light text-white/50">Reach us at</p>
              <a
                href="mailto:info@zucol.ai"
                className="text-[16px] font-white/100 hover:text-white/100 transition-colors duration-300"
              >
                info@zucol.ai
              </a>
            </div>
          </div>

          {/* Center Button */}
          <div className="flex flex-col items-center mb-16 md:mb-24">
            <div
              className="group px-4 sm:px-8 py-6 sm:py-8 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 -mx-16 -my-16 md:-mx-32 md:-my-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(186,141,255,0.5),transparent_60%)] blur-[150px] md:blur-[250px]" />
              </div>
              {/* Noise image as top layer - appears only on hover */}
              <div className="absolute inset-0 -mx-16 -my-16 md:-mx-32 md:-my-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-contain transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url(/backgrounds/noise.png)",
                    WebkitMaskImage: `
                      radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 80%, transparent 100%),
                      linear-gradient(to top, rgba(0,0,0,1) 70%, transparent 100%),
                      linear-gradient(to bottom, rgba(0,0,0,1) 70%, transparent 100%)
                    `,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "cover",
                    WebkitMaskComposite: "destination-in",
                    maskImage: `
                      radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 80%, transparent 100%),
                      linear-gradient(to top, rgba(0,0,0,1) 70%, transparent 100%),
                      linear-gradient(to bottom, rgba(0,0,0,1) 70%, transparent 100%)
                    `,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "cover",
                    maskComposite: "intersect",
                  }}
                />
              </div>
              <button className="relative  rounded-[8px] px-12 sm:px-14 md:px-[40px]  bg-transparent border-2 border-[#BA8DFF] overflow-hidden transition-all duration-500 group-hover:border-[#BA8DFF] group-hover:shadow-[0_0_400px_40px_rgba(186,141,255,0.9)] group-hover:scale-105  h-[96px]">
                <span className="relative z-10 text-xl sm:text-[40px] font-light text-[#CEA8FF] group-hover:text-white transition-colors duration-500">
                  Let&apos;s Get Started
                </span>
              </button>
              {/* Animated subtitle text */}
              <AnimatePresence>
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 10 : 0,
                    scale: isHovered ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <motion.p className="text-white/60 text-sm font-light whitespace-nowrap">
                    [ Start Your Journey Today ]
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Navigation - Desktop & Tablet Layout */}
          <div className="hidden md:flex justify-between items-start pt-12">
            <div className="flex flex-col space-y-4">
              <p className="text-[16px] font-medium text-white/100">Menu</p>
              <div className="flex gap-x-8 lg:gap-x-12">
                {menuItems.Menu.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/50 text-[16px] hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-[16px] font-medium text-white/100 text-right">Additional</p>
              <div className="flex gap-x-8 lg:gap-x-12">
                {menuItems.Additional.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/50 text-[16px] hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation - Mobile Layout */}
          <div className="md:hidden pt-12">
            {/* Menu Section */}
            <div className="mb-8">
              <p className="text-sm font-medium text-white/40 mb-4">Menu</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {menuItems.Menu.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Section */}
            <div>
              <p className="text-sm font-medium text-white/40 mb-4">Additional</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {menuItems.Additional.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <RainbowSection />
    </div>
  );
}