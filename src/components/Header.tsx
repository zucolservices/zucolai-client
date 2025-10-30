"use client";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import Image from "next/image";
import HeadingTitle from "./HeadingTitle";
import { usePathname } from "next/navigation";
import HeadingPurple from "@/components/HeadingPurple";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const pathname = usePathname();
  const blackText = (pathname.includes("/use-cases") || pathname.startsWith("/blog/") || pathname.startsWith("/use-cases/"))
  const logoMark = blackText ? "/logos/logo-dark.svg": "/logos/logoo.svg"

  const buttonColor = blackText ? "bg-[#000000]/15 text-[#000000]" : "bg-[#FFFFFF26] text-[#FFFFFF]"

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsContactOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 bg-transparent">

        {/* --- Mobile Only: Logo icon on the left --- */}
        <div className="block md:hidden">
          <Image
            src={logoMark}
            alt="Zucol.ai"
            width={40}
            height={40}
            priority
          />
        </div>

        {/* --- Tablet Only: Full Animated Logo centered --- */}
        <div className="hidden md:block lg:hidden absolute left-1/2 -translate-x-1/2">
          <AnimatedLogo />
        </div>

        {/* --- Desktop: Animated Logo aligned left --- */}
        <div className="hidden lg:block">
          <AnimatedLogo />
        </div>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          <HeadingTitle title="Services" link="/services" />
          {/* <HeadingTitle title="Resources/Blogs" link="/blog" /> */}
          <HeadingTitle title="Use Cases" link="/use-cases" />
          <HeadingTitle title="About Us" link="/about-us" />
          <HeadingTitle title="Contact" link="/contact-us" />

          <button onClick={() => setIsContactOpen(true)} className={`px-4 py-1 text-[16px] ${buttonColor} rounded-[8px] transition-colors`}>
            Get in touch
          </button>
        </nav>

        {/* --- Mobile & Tablet Menu Button --- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:block lg:hidden p-2 ${blackText ? "text-[#000]" : "text-[#FFFFFF]"} hover:bg-white/10 rounded-lg transition-colors ml-auto`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* --- Mobile/Tablet Menu --- */}
      {isMenuOpen && (
        <nav className="md:hidden px-6 py-4 bg-black/95 text-[#FFFFFF] border-t border-white/10">
          <div className="flex flex-col gap-4">
            <HeadingTitle title="Services" link="/services" />
            {/* <HeadingTitle title="Resources" link="/resources" /> */}
            <HeadingTitle title="Use Cases" link="/use-cases" />
            <HeadingTitle title="About Us" link="/about-us" />
            <HeadingTitle title="Contact" link="/contact-us" />
            <button onClick={() => { setIsContactOpen(true); setIsMenuOpen(false); }} className="px-4 py-2 text-sm text-white bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
          </div>
        </nav>
      )}

      {isContactOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsContactOpen(false)}
          />
          {/* Modal card */}
          <div className="relative min-h-full flex items-center justify-center p-4 sm:py-8">
            <div className="bg-[#FDFDFD] relative rounded-[16px] lg:min-h-[678px] lg:max-w-6xl mx-auto border-[#0000001A] border-[1px] flex flex-col lg:flex-row overflow-hidden">
    <button
                aria-label="Close"
                onClick={() => setIsContactOpen(false)}
                className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-black/70"
              >
                ×
              </button>
                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 lg:px-[96px] lg:py-[92px]">
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-light leading-[36px] sm:leading-[40px] lg:leading-[44px] text-[#0A0A0A] mb-6 tracking-[-0.02em] font-['Inter Display']">Get in touch</h2>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                            <input type="email" placeholder="Email Address" className="h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        </div>
                        <input type="tel" placeholder="Phone Number" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <input type="text" placeholder="Company / Organization" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <input type="text" placeholder="Job Title" className="w-full h-12 rounded-[8px] border border-[#E0E0E0] px-4 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40" />
                        <textarea placeholder="Message / Project Brief" rows={4} className="w-full rounded-[8px] border border-[#E0E0E0] px-4 py-3 text-[#0A0A0A] placeholder:text-[#999999] outline-none focus:border-black/40 resize-none" />

                        <button type="submit" className="mt-2 inline-flex items-center gap-2 bg-black text-white px-5 h-10 rounded-[8px] hover:bg-black/90 transition">
                            Submit
                            <span className="inline-block translate-x-0 group-hover:translate-x-0">→</span>
                        </button>
                    </form>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <div className="bg-[url('/backgrounds/contact-form.png')] bg-no-repeat bg-cover bg-center h-full min-h-[360px] w-full">
                        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                            <div className="backdrop-blur-lg bg-white/50 rounded-[16px] border border-white/60 shadow-[0_8px_60px_rgba(186,141,255,0.25)] max-w-[520px] w-full p-6 sm:p-8">
                                <HeadingPurple title="[ Connect ]" />
                                <p className="mt-2 text-[22px] sm:text-[38px] leading-[32px] sm:leading-[48px] text-[#00000040] font-light">
                                    Every transformation starts with a conversation.
                                </p>
                                <p className="mt-2 text-[22px] sm:text-[38px] leading-[32px] sm:leading-[48px] text-[#050505B2] font-light">
                                    Let&apos;s shape the <span className="bg-gradient-to-r from-[#79E9FF] to-[#9D58FF] bg-clip-text text-transparent">future of AI</span> together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
          </div>
        </div>
      )}
    </header>
  );
}
