import React from "react";
import Link from "next/link";
import CaseStudyDetailContent, { CaseStudyDetailData } from "@/components/case-studies/CaseStudyDetailContent";
import Header from '@/components/Header';
import DarkFooter from "@/components/DarkFooter";

const CASE_STUDIES: Record<string, CaseStudyDetailData> = {
  "loan-information-voice-agent-vridhi-home-finance": {
    title: "Conversational AI (Voice + Text)",
    subtitle: "Loan Information Voice Agent",
    client: "Vridhi Home Finance",
    industry: "Financial Services",
    heroImage: "/images/use-cases/1.png",
    backgroundImage: "/images/image_1001978347.png",

    // SectionOne content
    background:
      "Vridhi Home Finance needed a scalable solution to handle thousands of customer queries related to loan products and eligibility. Manual call centers were costly and often resulted in long wait times.",
    challenges: [
      "High volume of repetitive queries about loan information.",
      "Manual agents struggled to respond quickly and accurately.",
      "Lack of multilingual support.",
    ],
    solution:
      "We implemented a voice-enabled AI assistant capable of answering FAQs, collecting lead information, and routing complex queries. The assistant supports both voice and text channels, integrates with CRM, and provides analytics for continuous improvement.",
    results: [
      "Significant reduction in response latency.",
      "Higher lead capture with structured data collection.",
      "Lower support costs and improved customer experience.",
    ],
    featuresLead: "Turpis ultrices imperdiet in id. Diam dui purus blandit urna.",
    featuresPara1:
"",    featuresList1: [
      "High volume of repetitive queries about loan information.",
      "Manual agents struggled to respond quickly and accurately.",
      "Lack of multilingual",
    ],
    featuresPara2:"",
    featuresList2: [
      "High volume of repetitive queries about loan information.",
      "Manual agents struggled to respond quickly and accurately.",
      "Lack of multilingual",
    ],
    featuresPara3:"",
    featuresList3: [
      "High volume of repetitive queries about loan information.",
      "Manual agents struggled to respond quickly and accurately.",
      "Lack of multilingual",
    ],
    conclusion:""
  },
  "ai-learner-desklib": {
    title: "AI Learner",
    subtitle: "Interactive AI-Based Lecture Generator",
    client: "Desklib",
    industry: "EdTech",
    heroImage: "/images/use-cases/2.png", // replace with your actual image
    backgroundImage: "/images/use-cases/ai-learner-bg.png", // replace with your actual asset

    background:
      "Desklib wanted to enhance its learning platform by enabling interactive lectures based on uploaded study material.",

    challenges: [
      "A single, user-friendly platform was needed for both students and educators.",
      "The platform should allow easy access to academic materials.",
      "The platform needed to evaluate assignments using AI.",
      "It should provide meaningful and helpful feedback.",
      "The system had to support multiple languages.",
      "It needed to handle large numbers of users without slowing down.",
      "The platform should promote ethical academic practices.",
      "It must detect and prevent plagiarism effectively.",
    ],

    solution:
      "AI-powered tools for paraphrasing, plagiarism detection, and content summarization. Extensive document library with academic resources for students and educators. Scalable, fast, and user-friendly platform that performs well across all devices.",

    results: [
      "Improved learning engagement.",
      "Scalable personalized lecture delivery for thousands of students.",
    ],

    // Leaving features & conclusion blank since not present in source
    featuresLead: "",
    featuresPara1: "",
    featuresList1: [],
    featuresPara2: "",
    featuresList2: [],
    featuresPara3: "",
    featuresList3: [],
    conclusion: "",
  },
    "zoice-style-demo-use-cases": {
    title: "Training WhatsApp Bot",
    subtitle: "Chatbots & Virtual Assistants",
    client: "Vridhi Home Finance",
    industry: "Financial Services",
    heroImage: "/images/use-cases/2.png", // replace with your actual image
    backgroundImage: "/images/use-cases/training-bot-bg.png", // replace with your actual image

    background:
      "The client needed a scalable channel to provide training and gather customer scheme-related data.",

    challenges: [
      "Difficulty engaging customers consistently.",
      "Manual data collection was slow.",
    ],

    solution:
      "Created an AI chatbot integrated with WhatsApp that provides training material, answers scheme-related questions, and captures customer data in real time.",

    results: [
      "Faster and automated data collection.",
      "Increased engagement via a familiar messaging platform.",
    ],

    featuresLead: "",
    featuresPara1: "",
    featuresList1: [],
    featuresPara2: "",
    featuresList2: [],
    featuresPara3: "",
    featuresList3: [],
    conclusion: "",
  },

};

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];

  // Fallback: if unknown slug, show simple not found
  if (!data) {
    return (
      <section className="w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto py-16">
        <h1 className="text-2xl md:text-3xl font-light">Case Study Not Found</h1>
        <p className="mt-4 text-[#111]/60">The requested case study does not exist.</p>
        <Link href="/services" className="mt-6 inline-block text-[#2A71FF] underline">Back to Services</Link>
      </section>
    );
  }

  return (
  <div className="p-0 md:p-2">
    <main>
      <Header />
      <CaseStudyDetailContent slug={slug} data={data} />
  
    </main>
        <DarkFooter />
  </div>
  )
}
