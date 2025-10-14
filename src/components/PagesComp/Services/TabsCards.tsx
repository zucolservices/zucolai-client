"use client";

import Image from "next/image";
import React, { useState } from "react";


const TabsCards = () => {
    const [activeTab, setActiveTab] = useState(0);

    const RightIcons = () => {
        return (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 4.00004L3.58 6.83004L9.25 1.17004" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        );
    };

    const tabs = [
        "Conversational AI",
        "Chatbots & Virtual Assistants",
        "Generative AI (Text, Image, Video, Code)",
        "Computer Vision",
        "Personalization Engines",
    ];

    const tabContent = [
        "AI-powered inbound/outbound calling (sales, support, reminders).",
        "AI IVR replacement → smart routing and self-service.",
        "Multilingual customer support at scale.",
        "AI-powered inbound/outbound calling (sales, support, reminders).",
        "AI IVR replacement → smart routing and self-service.",
    ];

    return (
        <section className="w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-8">
            {/* Tabs Container */}
            <div className="w-full overflow-x-auto  scrollbar-hide">
                <div className="flex gap-2">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`relative px-2 py-2 rounded-[16px] text-sm md:text-base text-[#000000] bg-[#FFFFFF] font-normal cursor-pointer transition-all duration-300 whitespace-nowrap ${activeTab === index ? "" : "border border-[#000000]/20"
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
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-[60px] flex flex-col md:flex-row gap-[60px] items-center">
                <div className="">
                    <Image
                        alt=""
                        src="/images/PinDown.io_@tuniedesign_1758698608.mp4 1.png"
                        height={468}
                        width={628}
                    />
                </div>

                <div className="">
                    <h2 className="text-[40px] leading-[48px] font-semibold mb-4"> Conversational AI</h2>
                    {tabContent?.map((item, index) => (
                        <div className="my-4 flex items-center gap-3 flex-shrink-0" key={index}>
                            <div className="border rounded-full p-2 border-[#000]/60">
                                <RightIcons />
                            </div>
                            <p className="text-[20px] leading-[28px] font-normal text-[#000]/60">{item}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default TabsCards; 