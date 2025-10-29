"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
  { name: "Dropbox", logo: "/icons/hubspot.svg", width: 140 },
  { name: "Netflix", logo: "/icons/framer.svg", width: 130 },
  { name: "Buffer", logo: "/icons/stripe.svg", width: 125 },
  { name: "Stripe", logo: "/icons/hubspot.svg", width: 135 },
  { name: "Framer", logo: "/icons/stripe.svg", width: 120 },
  { name: "Dropbox", logo: "/icons/hubspot.svg", width: 140 },
  { name: "Netflix", logo: "/icons/framer.svg", width: 130 },
  { name: "Buffer", logo: "/icons/stripe.svg", width: 125 },
];

export default function TrustedCompanies() {

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FFFFFF]">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2.75rem] leading-[1.2] tracking-[-0.03em]">
            <span className="text-heading-display-light">Trusted by top <br></br> companies</span>&nbsp;
            <span className="text-heading-display-dark">worldwide</span>
          </h2>
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 w-[100px] h-full z-10 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
          <div className="absolute right-0 top-0 w-[100px] h-full z-10 bg-gradient-to-l from-[#FAFAFA] to-transparent" />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={45}
                  className="h-auto transition-all duration-300 opacity-30"
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
