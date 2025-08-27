"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RainbowSection() {
  // Ref for desktop version
  const desktopContainerRef = useRef(null);

  // Ref for tablet version
  const tabletContainerRef = useRef(null);

  // Ref for mobile version
  const mobileContainerRef = useRef(null);

  // Scroll animations for desktop
  const { scrollYProgress: desktopScrollYProgress } = useScroll({
    target: desktopContainerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animations for tablet
  const { scrollYProgress: tabletScrollYProgress } = useScroll({
    target: tabletContainerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animations for mobile
  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start end", "end start"],
  });

  // Desktop animations (keep original)
  const desktopScaleY = useTransform(
    desktopScrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.1, 0.8, 2.0, 3.0]
  );
  const desktopOpacity = useTransform(
    desktopScrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0.3]
  );

  // Tablet animations (same as desktop)
  const tabletScaleY = useTransform(
    tabletScrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.1, 0.8, 2.0, 3.0]
  );
  const tabletOpacity = useTransform(
    tabletScrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0.3]
  );

  // Mobile animations (same as desktop)
  const mobileScaleY = useTransform(
    mobileScrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.1, 0.8, 2.0, 3.0]
  );
  const mobileOpacity = useTransform(
    mobileScrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0.3]
  );

  return (
    <>
      {/* Desktop Version - Keep Original (768px and above) */}
      <div
        ref={desktopContainerRef}
        className="relative w-full h-[500px] bg-black overflow-hidden hidden md:block"
      >
        {/* Background noise with soft top border */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/backgrounds/noise.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.8) 15%, black 25%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.8) 15%, black 25%)',
          }}
        />

        {/* Rainbow background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center bg-transparent">
          <motion.div
            className="origin-top w-full h-full relative"
            style={{ scaleY: desktopScaleY, opacity: desktopOpacity }}
          >
            {/* Background noise */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('/images/noice.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />

            {/* Rainbow */}
            <img
              src="/images/footer.png"
              alt="Rainbow"
              className="w-full h-full object-cover object-bottom block relative z-10"
              style={{ transformOrigin: "top center" }}
            />
          </motion.div>
        </div>

        {/* Centered Logo + Text */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-30 text-center gap-2">
          <img
            src="/images/footer-zucol-ai.svg"
            alt="Zucol AI Logo"
          />
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-30 text-center">
          <p className="text-white text-xs">
            © Zucol.ai, All Rights Reserved.
          </p>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/40 pointer-events-none z-20" />
      </div>

      {/* Tablet Version (481px to 767px) */}
      <div
        ref={tabletContainerRef}
        className="relative w-full h-[350px] bg-black overflow-hidden hidden sm:block md:hidden"
      >
        {/* Footer image for tablet with animation */}
        <motion.img
          src="/images/footer_image_tab.png"
          alt="Background"
          className="absolute w-full h-full object-cover object-bottom z-10"
          style={{ 
            scaleY: tabletScaleY,
            opacity: tabletOpacity,
            transformOrigin: "bottom center",
            minHeight: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom center'
          }}
        />
        
        {/* Centered content */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-30 text-center gap-2">
          <div className="text-white">
            <img
              src="/images/footer-zucol-ai.svg"
              alt="Zucol AI Logo"
              className="h-6 mx-auto mb-2"
            />
            <p className="text-xs opacity-80">
              © Zucol.ai, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Version (480px and below) */}
      <div
        ref={mobileContainerRef}
        className="relative w-full h-[350px] bg-black overflow-hidden block sm:hidden"
      >
        {/* Footer image for mobile with animation */}
        <motion.img
          src="/images/footer_image_mobile.png"
          alt="Background"
          className="absolute w-full h-full object-cover object-bottom z-10"
          style={{ 
            scaleY: mobileScaleY,
            opacity: mobileOpacity,
            transformOrigin: "bottom center",
            minHeight: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom center'
          }}
        />
        
        {/* Centered content */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-30 text-center gap-2">
          <div className="text-white">
            <img
              src="/images/footer-zucol-ai.svg"
              alt="Zucol AI Logo"
              className="h-5 mx-auto mb-2"
            />
            <p className="text-[10px] opacity-80">
              © Zucol.ai, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}