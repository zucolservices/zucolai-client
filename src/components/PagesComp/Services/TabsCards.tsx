"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const tabsContent = [
    {
        id: 1,
        heading: "Conversational AI",
        points: [
            "AI-powered inbound/outbound calling for sales, support, and reminders.",
            "Multilingual smart IVR replacement for seamless self-service.",
            "Integrate AI agent with client CRM and telephony systems.",
            "Automate query handling and lead qualification with real-time reporting."
        ]
    },
    {
        id: 2,
        heading: "Chatbots & Virtual Assistants",
        points: [
            "Website/app chatbots for FAQs, order tracking, and status updates.",
            "Specialized bots for banking (balance, KYC, payments) and HR assistance.",
            "Deploy AI chatbot on website, app, or WhatsApp with backend integration.",
            "Capture and process customer queries automatically, providing instant responses."
        ]
    },
    {
        id: 3,
        heading: "Generative AI (Text, Image, Video, Code)",
        points: [
            "Marketing content generation including blogs, ads, and social media creatives.",
            "AI-powered avatars and agents for training, sales, or automation tasks.",
            "Train AI models using client prompts and datasets for content creation.",
            "Automatically generate outputs (videos, text, images) and deliver via API or platform."
        ]
    },
    {
        id: 4,
        heading: "Computer Vision",
        points: [
            "Quality inspection and defect detection in manufacturing.",
            "Facial recognition for KYC, access control, and media management.",
            "Implement AI vision models to analyze images or video streams in real time.",
            "Cluster, detect, or classify visual data and generate actionable reports."
        ]
    },
    {
        id: 5,
        heading: "Personalization Engines",
        points: [
            "Personalized learning journeys for EdTech platforms.",
            "AI agents for interview prep, career guidance, and adaptive learning.",
            "Analyze user behavior, preferences, and past interactions to customize content.",
            "Deliver real-time personalized recommendations, feedback, and study plans."
        ]
    }
];

const RightIcons = () => {
    return (
        <svg width="8.5" height="5.66" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.75 4.00004L3.58 6.83004L9.25 1.17004" stroke="#00000099" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};


const TabsCards = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeContent = tabsContent[activeTab];
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const update = () => {
            if (typeof window !== 'undefined') {
                setIsSmallScreen(window.innerWidth < 1100);
            }
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return (
        <section className="w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto md:pb-16 pt-8">

            <div className={`w-full ${isSmallScreen ? "overflow-x-auto scrollbar-none" : ""}`}>
                <div className="flex gap-1">
                    {tabsContent.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`relative p-4 rounded-[16px] text-[16px] text-[#000000] bg-[#FFFFFF] font-normal cursor-pointer transition-all duration-300 whitespace-nowrap ${activeTab === index
                                ? "hover:shadow-[0_4px_16px_rgba(255,84,221,0.3),0_4px_16px_rgba(111,137,255,0.3),0_4px_16px_rgba(253,65,41,0.25),0_4px_16px_rgba(255,183,69,0.25),0_4px_16px_rgba(23,187,255,0.25)]"
                                : "border border-[#000000]/20 hover:border-[#6F89FF]"
                                }`}
                            style={
                                activeTab === index
                                    ? {
                                        border: "3px solid transparent",
                                        backgroundImage:
                                            "linear-gradient(white, white), linear-gradient(315deg, #FF54DD 4%, #6F89FF 27.6%, #FD4129 50.83%, #FFB745 76.62%, #17BBFF 97%)",
                                        backgroundOrigin: "border-box",
                                        backgroundClip: "padding-box, border-box",
                                    }
                                    : {}
                            }
                        >
                            <span className="relative z-10">{tab.heading}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div key={activeTab} className="mt-[60px] flex flex-col md:flex-row gap-[60px] items-start md:min-h-[400px] animate-fadeIn">
                <div className="">
                    <Image
                        alt=""
                        src="/images/PinDown.io_@tuniedesig_.png"
                        height={468}
                        width={628}
                    />
                </div>

                <div className="">
                    <h2 className="text-[40px] leading-[48px] font-semibold mb-4"> {activeContent.heading}</h2>
                    {activeContent.points?.map((item, index) => (
                        <div className="my-4 flex items-center gap-3 flex-shrink-0" key={index}>
                            <div className="border rounded-full p-1 border-[1.5px] border-[#000000]/60 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                <RightIcons />
                            </div>
                            <p className="text-[20px] leading-[28px] font-normal text-[#000000]/60">{item}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default TabsCards; 