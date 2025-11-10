"use client";
import { motion } from "framer-motion";
import HeadingPurple from "./HeadingPurple";

export default function StatsComponent() {
  const stats = [
    {
      row: 1,
      items: [
        { value: "100%", label: "Secure AI Deployments", description: "Compliance-ready setups with\nzero-trust architecture." },
        { value: "200+", label: "Full-Stack AI Projects", description: "Across industries including BFSI,\nGovernment, EdTech." },
        { value: "4x Faster", label: "Model Accuracy", description: "Domain-trained AI reduces time to\ninsights & boosts precision." },
      ],
    },
    {
      row: 2,
      items: [
        { value: "2x Faster", label: "Build-to-Launch Time", description: "Agile pipelines accelerate MVP\nand enterprise deployments." },
        { value: "100%", label: "Secure Deployments", description: "Compliance-ready setups with\nzero-trust architecture." },
        { value: "200+", label: "Full-Stack AI Projects", description: "Across industries including BFSI,\nGovernment, EdTech." },
      ],
    },
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-[70rem] mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="w-full lg:w-[30%] mb-8 lg:mb-0 lg:sticky lg:top-32 text-left lg:text-left">
       <HeadingPurple title="[ Key Highlights ]" />

            <div className="space-y-1">
              <h2 className="text-heading-display-light">
                Numbers that
              </h2>
              <h2 className="text-heading-display-dark">
                Speak Volumes
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[70%] overflow-hidden relative">
            {/* Both left and right gradients for blur effects - responsive widths */}
            <div className="absolute left-0 top-0 w-[50px] h-full z-10 md:w-[100px] lg:w-[200px] bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 w-[50px] h-full z-10 md:w-[100px] lg:w-[200px] bg-gradient-to-l from-white to-transparent" />
            <div className="space-y-5 relative">
              {stats.map((row) => (
                <motion.div
                  key={row.row}
                  initial={{ x: row.row === 1 ? 0 : "-100%" }}
                  animate={{
                    x: row.row === 1 ? ["0%", "-100%"] : ["-100%", "0%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                  }}
                  style={{ willChange: "transform" }}
                  className="flex flex-nowrap gap-4"
                >
                  {/* Render items twice for seamless looping */}
                  {[...row.items, ...row.items].map((stat, index) => (
                    <div
                      key={`${row.row}-${index}`}
                      className="bg-[#F8F8F8]  rounded-[16px] lg:p-10 p-4 w-[350px] flex-shrink-0 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:brightness-[1.02]"
                    >
                      <h3 className="text-[#BA8DFF] text-[28.6px] lg:text-[40px] leading-[48px] tracking-[-2%] font-[600] lg:mb-4">
                        {stat.value}
                      </h3>
                      <h4 className="text-[#BA8DFF] text-[11.35px] lg:text-[16px] leading-[24px] lg:leading-[24px] tracking-[-2%] font-[300] lg:mb-2 opacity-80">
                        {stat.label}
                      </h4>
                      <p className="text-[#4B5563] text-[11.35px] lg:text-[16px] leading-[20px] lg:leading-[24px] tracking-[-2%] font-[300] whitespace-pre-line opacity-80">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extension area for cards to overflow to the right on web */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .w-full.lg\\:w-\\[70\\%\\] {
            width: calc(70% + 8rem); /* Extend beyond container more */
            margin-right: -8rem; /* Pull back to align */
          }
        }
      `}</style>
    </section>
  );
}