"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Hook to detect device type
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'web'>('web');

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < 481) {
        setDeviceType('mobile');
      } else if (width < 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('web');
      }
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return deviceType;
};

export default function ServicesSection() {
  const deviceType = useDeviceType();

  // Mobile View Render
  const renderMobileView = () => (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="mb-4 text-center">
          <p className="text-purple-label">
            [ Our Services ]
          </p>
          <h2 className="text-heading-display-light">
            Elevating AI Services.
          </h2>
          <h2 className="text-heading-display-dark">
            Best in class.
          </h2>
        </div>

        {/* Services Stack - Mobile optimized vertical layout */}
        <div className="space-y-3">
          {/* Industrial-Grade User Experience */}
          <div className="bg-[#FFF8F5] rounded-xl p-6 relative overflow-hidden h-40">
            <div className="flex justify-between items-start h-full">
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-card-title-mobile text-card-orange mb-2">
                  Industrial-Grade User Experience
                </h3>
                <p className="text-card-subtitle-mobile">
                  Seamless adoption powered by human-centered design.
                </p>
              </div>
              <div className="w-16 h-16 relative ml-4 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <Image
                  src="/images/svgs/userExperience.svg"
                  alt="Industrial-Grade User Experience"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Swift AI Collaboration */}
          <div className="bg-[#F5F9FF] rounded-xl p-6 relative overflow-hidden h-40">
            <div className="flex justify-between items-start h-full">
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-card-title-mobile text-card-blue mb-2">
                  Swift AI Collaboration
                </h3>
                <p className="text-card-subtitle-mobile">
                  Rapid iteration with AI-powered assistance.
                </p>
              </div>
              <div className="w-16 h-16 relative ml-4 flex-shrink-0 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 ease-out">
                <Image
                  src="/images/svgs/swiftaicollaboration.svg"
                  alt="Swift AI Collaboration"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Full-Stack AI Partner */}
          <div className="bg-[#F5F8FF] rounded-xl p-6 relative overflow-hidden h-40">
            <div className="flex justify-between items-start h-full">
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-card-title-mobile text-card-indigo mb-2">
                  Full-Stack AI Partner
                </h3>
                <p className="text-card-subtitle-mobile">
                  End-to-end AI solutions from ideation to production.
                </p>
              </div>
              <div className="w-16 h-16 relative ml-4 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <Image
                  src="/images/svgs/aipartner.svg"
                  alt="Full-Stack AI Partner"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Secure by Design */}
          <div className="bg-[#F5FFF5] rounded-xl p-6 relative overflow-hidden h-40">
            <div className="flex justify-between items-start h-full">
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-card-title-mobile text-card-green mb-2">
                  Secure by Design
                </h3>
                <p className="text-card-subtitle-mobile">
                  Enterprise-grade security from day one.
                </p>
              </div>
              <div className="w-16 h-16 relative ml-4 flex-shrink-0 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 ease-out">
                <Image
                  src="/images/svgs/secureDesign.svg"
                  alt="Secure by Design"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Verticalized AI Innovation */}
          <div className="bg-[#FFF5FF] rounded-xl p-6 relative overflow-hidden h-40">
            <div className="flex justify-between items-start h-full">
              <div className="flex-1 flex flex-col justify-end">
                <h3 className="text-card-title-mobile text-card-purple mb-2">
                  Verticalized AI Innovation
                </h3>
                <p className="text-card-subtitle-mobile">
                  Sector-specific AI tuned to solve real pain points.
                </p>
              </div>
              <div className="w-16 h-16 relative ml-4 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                <Image
                  src="/images/svgs/aiinnovation.svg"
                  alt="Verticalized AI Innovation"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Explore All Services */}
          <div className="bg-[#F5F9FF] rounded-xl p-6 relative overflow-hidden h-32">
            <div className="flex items-center justify-center h-full">
              <Link href="/services" className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg text-sm font-medium">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Tablet View Render
  const renderTabletView = () => (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <p className="text-purple-label">
            [ Our Services ]
          </p>
          <h2 className="text-heading-display-light">
            Elevating AI Services.
          </h2>
          <h2 className="text-display-dark">
            Best in class.
          </h2>
        </div>

        {/* Services Grid - Tablet optimized 2-column layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Row 1 */}
          <div className="bg-[#FFF8F5] rounded-2xl p-8 relative overflow-hidden h-64">
            <div className="flex flex-col h-full justify-between">
              <div className="absolute top-4 right-4 w-20 h-20">
                <Image
                  src="/images/svgs/userExperience.svg"
                  alt="Industrial-Grade User Experience"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[#FF7847] text-2xl font-light mb-3 leading-tight max-w-[70%]">
                  Industrial-Grade User Experience
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed opacity-80 max-w-[70%]">
                  Seamless adoption powered by human-centered design.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F9FF] rounded-2xl p-8 relative overflow-hidden h-64">
            <div className="flex flex-col h-full justify-between">
              <div className="absolute top-4 right-4 w-20 h-20">
                <Image
                  src="/images/svgs/swiftaicollaboration.svg"
                  alt="Swift AI Collaboration"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[#47B0FF] text-2xl font-light mb-3 leading-tight max-w-[70%]">
                  Swift AI Collaboration
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed opacity-80 max-w-[70%]">
                  Rapid iteration with AI-powered assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-[#F5F8FF] rounded-2xl p-8 relative overflow-hidden h-64">
            <div className="flex flex-col h-full justify-between">
              <div className="absolute top-4 right-4 w-20 h-20">
                <Image
                  src="/images/svgs/aipartner.svg"
                  alt="Full-Stack AI Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[#476CFF] text-2xl font-light mb-3 leading-tight max-w-[70%]">
                  Full-Stack AI Partner
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed opacity-80 max-w-[70%]">
                  End-to-end AI solutions from ideation to production.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5FFF5] rounded-2xl p-8 relative overflow-hidden h-64">
            <div className="flex flex-col h-full justify-between">
              <div className="absolute top-4 right-4 w-20 h-20">
                <Image
                  src="/images/svgs/secureDesign.svg"
                  alt="Secure by Design"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[#47C466] text-2xl font-light mb-3 leading-tight max-w-[70%]">
                  Secure by Design
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed opacity-80 max-w-[70%]">
                  Enterprise-grade security from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="bg-[#FFF5FF] rounded-2xl p-8 relative overflow-hidden h-64">
            <div className="flex flex-col h-full justify-between">
              <div className="absolute top-4 right-4 w-20 h-20">
                <Image
                  src="/images/svgs/aiinnovation.svg"
                  alt="Verticalized AI Innovation"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[#B347FF] text-2xl font-light mb-3 leading-tight max-w-[70%]">
                  Verticalized AI Innovation
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed opacity-80 max-w-[70%]">
                  Sector-specific AI tuned to solve real pain points.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F9FF] rounded-2xl p-8 relative overflow-hidden h-64">
            <div className="flex items-center justify-center h-full relative">
              <div className="absolute top-2 right-2 w-16 h-16">
                <Image
                  src="/images/svgs/start11.svg"
                  alt="Decorative star"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-2 left-2 w-16 h-16">
                <Image
                  src="/images/svgs/start12.svg"
                  alt="Decorative star"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <Link href="/services" className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg text-sm font-medium">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Web View Render (Original Complex Grid Layout)
  const renderWebView = () => (
    <section className="py-32 px-24 bg-white overflow-hidden">
      <div className="max-w-[70rem] mx-auto">
        <div className="mb-12">
          <p className="text-purple-label">
            [ Our Services ]
          </p>
          <div className="space-y-1">
            <h2 className="text-heading-display-light">
              Elevating AI Services.
            </h2>
            <h3 className="text-heading-display-dark">
              Best in class.
            </h3>
          </div>
        </div>

        {/* Services Grid - Original complex layout for web */}
        <div className="grid grid-cols-12 gap-6">

          {/* Industrial-Grade User Experience Card - Row 1 */}
          <div className="col-span-7 bg-[#FFF8F5] hover:border-[#FF7847] rounded-[2rem] p-12 group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-transparent h-[276px] relative overflow-hidden">
            <div className="flex flex-col h-full justify-end relative z-10">
              <div className="relative z-20 flex flex-col gap-[8px]">
                <h3 className="text-[#FF7847] text-[40px] leading-[1.2] tracking-[-0.02em] font-light whitespace-pre-line max-w-[60%]">
                  Industrial-Grade{'\n'}User Experience
                </h3>
                <p className="text-[#6B7280] text-base leading-[1.5] whitespace-pre-line opacity-80 max-w-[60%]">
                  Seamless adoption powered by{'\n'}human-centered design.
                </p>
              </div>
              <div className="absolute top-[50%] -translate-y-1/2 right-[10px] w-[40%] max-w-[250px] aspect-square transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                <Image
                  src="/images/svgs/userExperience.svg"
                  alt="Industrial-Grade User Experience"
                  fill
                  className="object-contain"
                  sizes="350px"
                />
              </div>
            </div>
          </div>

          {/* Swift AI Collaboration Card - Row 1 */}
          <div className="col-span-5 bg-[#F5F9FF] hover:border-[#47B0FF] rounded-[2rem] p-12 group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-transparent h-[276px] relative overflow-hidden">
            <div className="flex flex-col h-full justify-end relative z-10">
              <div className="relative z-20 flex flex-col gap-[8px]">
                <h3 className="text-[#47B0FF] text-[40px] leading-[1.2] tracking-[-0.02em] font-light whitespace-pre-line max-w-[60%]">
                  Swift AI{'\n'}Collaboration
                </h3>
                <p className="text-[#6B7280] text-base leading-[1.5] whitespace-pre-line opacity-80 max-w-[60%]">
                  Rapid iteration with{'\n'}AI-powered assistance.
                </p>
              </div>
              <div className="absolute top-[50%] -translate-y-1/2 right-[10px] w-[40%] max-w-[200px] aspect-square transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                <Image
                  src="/images/svgs/swiftaicollaboration.svg"
                  alt="Swift AI Collaboration"
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          </div>

          {/* Full-Stack AI Partner Card - Row 2 */}
          <div className="col-span-5 bg-[#F5F8FF] hover:border-[#476CFF] rounded-[2rem] p-12 group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-transparent h-[352px] relative overflow-hidden">
            <div className="flex flex-col h-full justify-end relative z-10">
              <div className="relative z-20 flex flex-col gap-[8px] ">
                <h3 className="text-[#476CFF] text-[40px] leading-[1.2] tracking-[-0.02em] font-light whitespace-pre-line max-w-[60%]">
                  Full-Stack AI{'\n'}Partner
                </h3>
                <p className="text-[#6B7280] text-base leading-[1.5] whitespace-pre-line opacity-80 max-w-[60%]">
                  End-to-end AI solutions{'\n'}from ideation to production.
                </p>
              </div>
              <div className="absolute top-[30%] -translate-y-1/2 right-[-20px] w-[50%] max-w-[300px] aspect-square transition-all duration-700 group-hover:scale-120 group-hover:rotate-12">
                <Image
                  src="/images/svgs/aipartner.svg"
                  alt="Full-Stack AI Partner"
                  fill
                  className="object-contain"
                  sizes="300px"
                />
              </div>
            </div>
          </div>

          {/* Secure by Design Card - Row 2 */}
          <div className="col-span-7 bg-[#F5FFF5] hover:border-[#47C466] rounded-[2rem] p-12 group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-transparent h-[352px] relative overflow-hidden">
            <div className="flex flex-col h-full justify-end relative z-10">
              <div className="relative z-20 flex flex-col gap-[8px]">
                <h3 className="text-[#47C466] text-[40px] leading-[1.2] tracking-[-0.02em] font-light whitespace-pre-line max-w-[60%]">
                  Secure by{'\n'}Design
                </h3>
                <p className="text-[#6B7280] text-base leading-[1.5] whitespace-pre-line opacity-80 max-w-[60%]">
                  Enterprise-grade security{'\n'}from day one.
                </p>
              </div>
              <div className="absolute top-[50%] -translate-y-1/2 right-[-20px] w-[50%] max-w-[300px] aspect-square transition-all duration-700 group-hover:scale-120 group-hover:rotate-13">
                <Image
                  src="/images/svgs/secureDesign.svg"
                  alt="Secure by Design"
                  fill
                  className="object-contain"
                  sizes="300px"
                />
              </div>
            </div>
          </div>

          {/* Verticalized AI Innovation Card - Row 3 */}
          <div className="col-span-8 bg-[#FFF5FF] hover:border-[#B347FF] rounded-[2rem] p-12 group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-transparent h-[276px] relative overflow-hidden">
            <div className="flex flex-col h-full relative z-10">
              <div className="relative z-20 flex flex-col gap-[8px] mt-auto">
                <h3 className="text-[#B347FF] text-[40px] leading-[1.2] tracking-[-0.02em] font-light whitespace-pre-line max-w-[60%]">
                  Verticalized AI{'\n'}Innovation
                </h3>
                <p className="text-[#6B7280] text-base leading-[1.5] whitespace-pre-line opacity-80 max-w-[60%]">
                  Sector-specific AI tuned to{'\n'}solve real pain points.
                </p>
              </div>
              <div className="absolute top-[50%] -translate-y-1/2 right-[10px] w-[40%] max-w-[200px] aspect-square transition-all duration-700 group-hover:scale-125 group-hover:rotate-12">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/svgs/aiinnovation.svg"
                    alt="Verticalized AI Innovation"
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Explore All Services Card - Row 3 */}
          <div className="col-span-4 bg-[#F5F9FF] hover:bg-[#F5F0FF] rounded-[2rem] p-12 group cursor-pointer transition-all duration-300 hover:-lg -[0_4px_20px_rgba(0,0,0,0.08)] h-[276px] relative overflow-hidden">
            <div className="flex flex-col h-full relative z-10">
              {/* First Star - Top Right */}
              <div className="absolute top-2 right-2 w-16 h-16 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                <Image
                  src="/images/svgs/start11.svg"
                  alt="Decorative star"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* Second Star - Bottom Left */}
              <div className="absolute bottom-2 left-2 w-16 h-16 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
                <Image
                  src="/images/svgs/start12.svg"
                  alt="Decorative star"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              {/* Explore Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="/services" className="cursor-pointer bg-black text-white px-7 py-4 rounded-xl text-base font-medium group-hover:bg-[#B347FF] transition-colors duration-300">
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

  // Render based on device type
  switch (deviceType) {
    case 'mobile':
      return renderMobileView();
    case 'tablet':
      return renderTabletView();
    case 'web':
    default:
      return renderWebView();
  }
}