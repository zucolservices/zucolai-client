import HeadingPurple from "@/components/HeadingPurple";

export default function ServicesHeroSection() {
  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.5] md:scale-125 lg:scale-100"
        src="/backgrounds/Service_page.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-30 md:pb-60 lg:pb-0 lg:pt-32">
        <HeadingPurple title="[Transforming AI Services]" />

        <h1 className="  text-[32px] md:text-[32px] lg:text-[40px] font-light font-[300] leading-[40px] md:leading-[40px] lg:leading-[48px] text-[#FDFDFD] mb-4 md:mb-6 tracking-[-0.02em] max-w-4xl font-['Inter Display'] ">
          Striving on Innovation. Driven by Purpose.
        </h1>

        <p className="font-light text-base sm:text-[24px] md:text-[20px] leading-relaxed tracking-[-0.01em] text-gray-300 opacity-70 mb-8 md:mb-10 max-w-2xl">
          At Zucol AI, we deliver cutting-edge AI solutions designed to solve real-world business challenges. From conversational systems to intelligent personalization, our expertise spans across industries to help you innovate, scale, and thrive.
        </p>

      </div>

    </section>
  );
}