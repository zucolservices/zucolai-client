"use client";

const OurServices = () => {


    return (
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[80rem] mx-auto pb-16 pt-16 lg:pt-32">
            {/* Top tagline */}
            <p
                style={{
                    fontFamily: 'ChakraPetch, sans-serif',
                    fontWeight: 600,
                    fontStyle: 'SemiBold',
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#BA8DFF',
                }}
                className="tracking-wide mb-2 md:mb-4 hidden md:block"
            >
                [ Our Services ]
            </p>
            <div className="w-full border-b border-[#00000040]/25 hidden md:block"></div>
            <div className="flex justify-end w-full">
                <div className="max-w-xl p-4 text-left text-[#00000066]/40 text-[32px] leading-[40px]">
                    From blueprint to breakthrough, explore how our most in-demand All capabilities are built to solve complex, real-world problems.
                </div>
            </div>

        </div>

    );
};

export default OurServices;
