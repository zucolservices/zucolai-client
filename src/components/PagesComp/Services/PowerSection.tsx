"use client";

import Image from "next/image";

const PowerSection = () => {

    const leftImage = "/images/Ellipse_1372.png"
    const rightImage = "/images/Ellipse_1371.png"


    return (
        <div className="relative z-10 ">
            <div className="absolute top-0 left-0">
                <Image src={leftImage} alt="" width={100} height={100} />
            </div>
            {/* Top tagline */}
            <div className="w-full px-6 md:px-16 lg:px-24 max-w-[60rem] mx-auto pb-32 pt-16 lg:pt-32">
                <p
                    style={{
                        fontFamily: 'ChakraPetch, sans-serif',
                        fontWeight: 600,
                        fontStyle: 'SemiBold',
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: '#BA8DFF',
                    }}
                    className="tracking-wide mb-2 md:mb-4 "
                >
                    [ Power of Conversational AI ]
                </p>
                <div className=" ">
                    <div className="max-w-xl text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                        Generative AI reshapes how businesses create and innovate. It produces text, images, and videos, helping you move faster and deliver smarter solutions.
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <Image src={rightImage} alt="" width={100} height={100} />
            </div>

        </div>

    );
};

export default PowerSection;
