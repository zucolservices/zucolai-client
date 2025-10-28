import HeadingPurple from "./HeadingPurple";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.5] md:scale-125 lg:scale-100"
        src="/backgrounds/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
<Image src="/backgrounds/TextureHero.png" alt="Hero" fill className="object-cover" />
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-16 max-w-[80rem] mx-auto pb-30 md:pb-[8px] lg:pb-0 lg:pt-32">
        <HeadingPurple title="[Transforming AI Services]" />

        <h1 className="text-[32px] md:text-[32px] lg:text-[40px] font-light font-[300] leading-[40px] md:leading-[40px] lg:leading-[48px] text-[#FDFDFD] mb-4 md:mb-[8px] tracking-[-0.02em] max-w-4xl font-['Inter Display']">
          Build for Impact. Designed for Adoption.
          <br className="hidden md:block" />
          <span className="font-light opacity-90">
            We create AI tools to solve real problems.
          </span>
        </h1>

        {/* Subheading */}
        <p className="font-light text-sm sm:text-base md:text-[16px] leading-relaxed tracking-[-0.01em] text-gray-300 opacity-70 mb-8 md:mb-10 max-w-2xl">
          AI services from LLMs, RAG, predictive analytics, and secure deployments
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-[8px]">
          <button className="bg-[#FFFFFF]/15 rounded-[10px] py-[5px] px-[15px] text-[#FFFFFF] text-[16px] font-light leading-[28px]">
          Explore Solutions
          </button>
          <button className="rounded-[10px] py-[5px] px-[15px] text-[#FFFFFF] text-[16px] font-light leading-[28px]">
          Join the Waitlist
          </button>
        </div>
      </div>

    </section>
  );
}