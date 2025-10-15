import HeadingPurple from "@/components/HeadingPurple";

export default function BlogMainHeroSection() {
    return (
        <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.5] md:scale-125 lg:scale-100"
                src="/backgrounds/Blog.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[90rem] mx-auto pb-30 md:pb-60 lg:pb-0 lg:pt-32">
                <HeadingPurple title="[Transforming AI Services]" />
                <h1 className="  text-[32px] md:text-[32px] lg:text-[40px] font-light font-[300] leading-[40px] md:leading-[40px] lg:leading-[48px] text-[#FDFDFD] mb-4 md:mb-6 tracking-[-0.02em] max-w-4xl font-['Inter Display'] ">
                    Read insights that help you understand
                    <br className="hidden md:block" />
                    <span className="font-light opacity-90">
                        where AI is headed.
                    </span>
                </h1>

                <p className="font-light text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.01em] text-gray-300 opacity-70 mb-8 md:mb-10 max-w-2xl">
                    Stay ahead in the world of AI with curated blogs, expert webinars, and the latest news. Our resources are designed to inform, inspire, and help you unlock the true potential of AI for your business.
                </p>

            </div>

        </section>
    );
}