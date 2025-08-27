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

      {/* Overlay gradient + noise */}
      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[90rem] mx-auto pb-30 md:pb-60 lg:pb-0 lg:pt-32">
        {/* Top tagline */}
        <p
          style={{
            fontFamily: 'ChakraPetch, sans-serif',
            fontWeight: 600,
            fontStyle: 'SemiBold',
            fontSize: '14px',
            lineHeight: '24px',
            color: '#BA8DFF',
          }}
          className="tracking-wide mb-2 md:mb-4"
        >
          [Transforming AI Services]
        </p>

        {/* Heading */}
        <h1
          className="
            text-[32px] md:text-[32px] lg:text-[40px] 
            font-light font-[300] 
            leading-[40px] md:leading-[40px] lg:leading-[48px] 
            text-[#FDFDFD] 
            mb-4 md:mb-6 
            tracking-[-0.02em] 
            max-w-4xl 
            font-['Inter Display']
          "
        >
          Build for Impact. Designed for Adoption.
          <br className="hidden md:block" />
          <span className="font-light opacity-90">
            We create AI tools to solve real problems.
          </span>
        </h1>

        {/* Subheading */}
        <p className="font-light text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.01em] text-gray-300 opacity-70 mb-8 md:mb-10 max-w-2xl">
          AI services from LLMs, RAG, predictive analytics, and secure deployments
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-[8px]">
          <button className="w-[122px] h-[32px] bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-all duration-200 cursor-pointer">
            Explore
          </button>
          <button className="w-[122px] h-[32px] border border-gray-500 text-gray-200 text-sm rounded-lg hover:bg-gray-700/40 transition-all duration-200 cursor-pointer">
            Join
          </button>
        </div>
      </div>

    </section>
  );
}