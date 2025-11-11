"use client";
import HeadingPurple from "@/components/HeadingPurple";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative  bg-gradient-to-b from-[#00191c] via-[#00191c] to-[#00191c] h-[90vh] flex items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl">
      <video
        className="absolute object-cover mt-0 h-[100%] lg:h-auto  lg:rotate-[90deg] lg:mt-[1%] 2xl:mt-[8%]   lg:right-[10%]  "
        src="/backgrounds/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ✅ Left-side fade overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/100 via-black/0 to-black/0 z-[2]" />

      <Image src="/backgrounds/TextureHero.png" alt="Hero" fill className="object-cover opacity-[55%] z-[3]" />

      <div className="relative z-[10] w-full h-full flex justify-end pb-10 lg:pb-0 lg:justify-center  flex-col px-6 md:px-16 lg:px-28 max-w-[80rem] mx-auto  lg:pb-0 ">
        <HeadingPurple title="[Transforming AI Services]" />

        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-light leading-[32px] md:leading-[40px] lg:leading-[48px] text-[#FDFDFD] mb-2 tracking-[-0.02em] max-w-4xl font-['Inter Display']">
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
          <button onClick={() => router.push('/services')}  className="bg-[#FFFFFF]/15 cursor-pointer hover:bg-[#FFFFFF]/30 rounded-[10px] py-[5px] px-[15px] text-[#FFFFFF] text-[16px] font-light leading-[28px]">
            Explore Services
          </button>
          {/* <button className="rounded-[10px] py-[5px] px-[15px] text-[#FFFFFF] text-[16px] font-light leading-[28px]">
            Join the Waitlist
          </button> */}
        </div>
      </div>
    </section>

  );
}