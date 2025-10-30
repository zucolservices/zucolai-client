import HeadingPurple from "@/components/HeadingPurple";
import Image from "next/image";

export default function ContactHeroSection() {
    return (
        <section className="relative bg-black lg:h-[90vh] flex flex-col items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none lg:rounded-t-2xl rounded-b-2xl">

            <div className="relative z-10 w-full h-screen">
                <div className="flex flex-col-reverse lg:flex-row w-full h-full">

                    {/* LEFT CONTENT */}
                    <div className="lg:w-[60%] lg:h-screen justify-center flex flex-col px-[16.5px] py-8 lg:py-0 lg:px-[80px]">
                        <HeadingPurple title="[ Contact Us ]" />
                        <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-light leading-[40px] md:leading-[48px] lg:leading-[52px] text-[#FDFDFD] mb-4 md:mb-6 tracking-[-0.02em] font-['Inter Display']">
                            Let&apos;s Build the Future of AI Together
                        </h1>
                        <p className="font-light text-base sm:text-[18px] lg:text-[18px] leading-relaxed tracking-[-0.01em] text-gray-300/80 max-w-[560px]">
                            Have a project in mind? Want to learn how our AI solutions can solve your business challenges? We&apos;d love to hear from you. Our experts are here to guide you every step of the way.
                        </p>
                    </div>

                    {/* RIGHT VISUAL AREA */}
                    <div className="relative w-full lg:w-[48%]  h-[80vh] lg:h-screen overflow-hidden">
                        <Image src="/backgrounds/TextureHero.png" alt="Hero" fill className="absolute inset-0 w-full h-full  object-cover opacity-[55%]" />


                        {/* GIF Background */}
                        <img
                            src="/backgrounds/contact.gif"
                            alt="Contact animation"
                            className="absolute inset-0 w-full h-full  object-cover mix-blend-color-dodge rotate-180 origin-[50%_50%]"
                        />

                        {/* Hue & Glow Overlay */}
                        <Image
                            src="/backgrounds/services-overlay.png"
                            alt="Overlay"
                            fill
                            className="object-cover mix-blend-hue pointer-events-none opacity-[94%]"
                        />

                        {/* Edge gradient to blend seam between columns */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-l  from-transparent to-black/100" />
                    </div>
                </div>
            </div>
        </section>

    );
}