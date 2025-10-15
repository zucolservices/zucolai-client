"use client";

import HeadingPurple from "@/components/HeadingPurple";

const MissionVission = () => {


    return (
        <div className=" relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-32">
            <div className="">
                <HeadingPurple title="[ The Mission ]" />
                <div className="w-full border-b border-[#00000040]/25 hidden md:block"></div>
                <div className="flex justify-end w-full">
                    <div className="max-w-xl px-4 py-4 text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                        To democratize AI by making it accessible, secure & outcome-driven for every industry.
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <HeadingPurple title="[ The Vission ]" />
                <div className="w-full border-b border-[#00000040]/25 hidden md:block"></div>
                <div className="flex justify-end w-full">
                    <div className="max-w-xl px-4 py-4 text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                        To be the global leader in responsible AI adoption, helping businesses thrive in a digital-first world.
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MissionVission;
