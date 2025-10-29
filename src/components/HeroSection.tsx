import HeadingPurple from "./HeadingPurple";
import Image from "next/image";

export default function HeroSection() {
  return (
  <section className="relative h-screen bg-black lg:h-[90vh] flex items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl">
  <video
    className="absolute object-cover rotate-[90deg]  right-[20%]  "
    src="/backgrounds/hero.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* ✅ Left-side fade overlay */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/100 via-black/0 to-black/0 z-[2]" />

  <Image src="/backgrounds/TextureHero.png" alt="Hero" fill className="object-cover opacity-[55%] z-[3]" />

  <div className="relative z-[10] w-full px-6 md:px-16 lg:px-16 max-w-[80rem] mx-auto pb-30 md:pb-[8px] lg:pb-0 lg:pt-32">
    <HeadingPurple title="[Transforming AI Services]" />

    <h1 className="text-[32px] md:text-[32px] lg:text-[40px] font-light leading-[40px] md:leading-[40px] lg:leading-[48px] text-[#FDFDFD] mb-4 tracking-[-0.02em] max-w-4xl font-['Inter Display']">
      Build for Impact. Designed for Adoption.
      <br className="hidden md:block" />
      <span className="opacity-90">
        We create AI tools to solve real problems.
      </span>
    </h1>

    <p className="font-light text-sm md:text-[16px] leading-relaxed tracking-[-0.01em] text-gray-300 opacity-70 mb-8 max-w-2xl">
      AI services from LLMs, RAG, predictive analytics, and secure deployments
    </p>

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