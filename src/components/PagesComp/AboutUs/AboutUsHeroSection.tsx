import HeadingPurple from "@/components/HeadingPurple";
import Image from "next/image";
export default function AboutUsHeroSection() {
    return (
        <section className="relative h-screen bg-gradient-to-b from-[#000] via-[#000] to-[#000] lg:h-[90vh] flex items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/100 via-black/0 to-black/0 z-[2]" />

            <video
                className="absolute object-cover rotate-[180deg]  mt-[1%]  right-[0%]  "
                src="/backgrounds/AboutUs.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-30 md:pb-60 lg:pb-0 lg:pt-32">
                <HeadingPurple title="[ About Us ]" />
                <h1 className="  text-[32px] md:text-[32px] lg:text-[40px] font-light font-[300] leading-[40px] md:leading-[40px] lg:leading-[48px] text-[#FDFDFD] mb-4 md:mb-6 tracking-[-0.02em] max-w-4xl font-['Inter Display'] ">
                    Striving on Innovation.

                    <br className="hidden md:block" />
                    <span className="font-light opacity-90">
                        Driven by Purpose.
                    </span>
                </h1>

                <p className="font-light text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.01em] text-gray-300 opacity-70 mb-8 md:mb-10 max-w-2xl">
                    At Zucol AI, we’re shaping the future of intelligence one solution at a time. Our mission is to create AI that solves today’s toughest challenges while preparing businesses for tomorrow.
                </p>

            </div>
            <Image
                src="/backgrounds/services-overlay.png"
                alt="Overlay"
                fill
                className="object-cover mix-blend-hue pointer-events-none opacity-[96%]"
            />
        </section>
    );
}