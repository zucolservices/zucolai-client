"use client";
import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import Image from "next/image";
import HeadingTitle from "./HeadingTitle";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const blackText = (pathname.includes("/use-cases") || pathname.startsWith("/blog/") || pathname.startsWith("/use-cases/"))

  const buttonColor = blackText ? "bg-[#000000]/15 text-[#000000]" : "bg-[#FFFFFF26] text-[#FFFFFF]"

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 bg-transparent">

        {/* --- Mobile Only: Logo icon on the left --- */}
        <div className="block md:hidden">
          <Image
            src="/logos/logoo.svg"
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
          <HeadingTitle title="Resources/Blogs" link="/blog" />
          <HeadingTitle title="Use Cases" link="/use-cases" />
          <HeadingTitle title="About Us" link="/about-us" />
          <HeadingTitle title="Contact" link="/contact-us" />

          <button className={`px-4 py-1 text-[16px] ${buttonColor} rounded-[8px] transition-colors`}>
            Get in touch
          </button>
        </nav>

        {/* --- Mobile & Tablet Menu Button --- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:block lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors ml-auto"
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
        <nav className="md:hidden px-6 py-4 bg-black/95 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <HeadingTitle title="Services" link="/services" />
            <HeadingTitle title="Resources" link="/resources" />
            <HeadingTitle title="Use Cases" link="/use-cases" />
            <HeadingTitle title="About Us" link="/about-us" />
            <HeadingTitle title="Contact" link="/contact" />
            <button className="px-4 py-2 text-sm text-white bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
              Get in touch
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
