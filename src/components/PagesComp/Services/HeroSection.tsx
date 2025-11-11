"use client";
import HeadingPurple from "@/components/HeadingPurple";

export default function ServicesHeroSection() {
  return (
    <>
      <section className="relative bg-black h-[90vh] flex flex-col items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl">
  
        {/* Layer 1: Background base */}
        <div className="absolute inset-0 z-0 bg-black" />

        {/* Layer 2: Video */}
        <video
          className="absolute z-[1] bottom-[-30%] left-[50%] translate-x-[-50%] w-full h-[60%] object-cover pointer-events-none"
          src="/backgrounds/Service_page.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
        />

        {/* Layer 3: Overlay with hue blend - Safari fix using canvas-like approach */}
        <div 
          className="absolute inset-0 z-2 pointer-events-none opacity-[0.96]"
          style={{ 
            mixBlendMode: "hue",
            // WebkitMixBlendMode: "hue",
            backgroundImage: "url(/backgrounds/services-overlay.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        />

        {/* Layer 4: Content on top */}
      <div className="relative z-[10] w-full h-full flex  pb-10 lg:pb-0 justify-center  flex-col px-6 md:px-16 lg:px-28 max-w-[80rem] mx-auto  lg:pb-0 ">
          <HeadingPurple title="[Transforming AI Services]" />

          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-light font-[300] leading-[32px] md:leading-[40px] lg:leading-[48px] text-[#FDFDFD] mb-4 md:mb-6 tracking-[-0.02em] max-w-4xl font-['Inter Display']">
            Striving on Innovation. Driven by Purpose.
          </h1>
 <p className="font-light text-base sm:text-[24px] md:text-[20px] leading-relaxed tracking-[-0.01em] text-gray-300 opacity-70 mb-8 md:mb-10 max-w-2xl">
            At Zucol AI, we deliver cutting-edge AI solutions designed to solve real-world business challenges. From conversational systems to intelligent personalization, our expertise spans across industries to help you innovate, scale, and thrive.
          </p>
        </div>
      </section>
    </>
  );
}