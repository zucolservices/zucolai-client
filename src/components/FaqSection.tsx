"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a web design project take?",
    answer: "We provide comprehensive digital design services including website design and development, UX/UI design, presentations, and many other solutions tailored to your needs."
  },
  {
    question: "What technologies do you use for AI development?",
    answer: "We utilize cutting-edge technologies including TensorFlow, PyTorch, and custom LLM frameworks, along with cloud-native infrastructure for scalable AI solutions."
  },
  {
    question: "How do you ensure AI model security?",
    answer: "Our security framework includes data encryption, model validation, regular security audits, and compliance with industry standards to protect your AI assets."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise across retail, BFSI, edtech, government, and real estate sectors, delivering tailored AI solutions for each industry's unique challenges."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages including model maintenance, performance monitoring, and regular updates to ensure your AI solutions remain effective."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 bg-white overflow-hidden rounded-[2rem] relative">
      {/* Background Gradients */}
      <div className="absolute top-0 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#BA8DFF]/20 via-[#BA8DFF]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#E5FFE8]/30 via-[#E5FFE8]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#BA8DFF]/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-[#E5FFE8]/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
      
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-label">
            [ FAQ ]
          </p>
          <div className="space-y-2">
            <h2 className="text-heading-display-light">
              All Your Questions,
            </h2>
            <h2 className="text-heading-display-dark">
              Easy Answers
            </h2>
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-white group relative"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#BA8DFF]/0 via-[#BA8DFF]/0 to-[#BA8DFF]/0 group-hover:via-[#BA8DFF]/5 transition-all duration-500 rounded-2xl" />
              <div className="p-6 flex items-center justify-between relative z-10">
                <h3 className="text-[16px] font-light text-[#111827] group-hover:text-[#111827]/80 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className={`transform transition-all duration-300 ${openIndex === index ? 'rotate-180 text-[#BA8DFF]' : 'text-[#BA8DFF]/60 group-hover:text-[#BA8DFF]'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-4 text-[#111827]/60 relative z-10">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
