import GradientsLeftRight from "@/components/GradientsLeftRight";
import HeadingPurple from "@/components/HeadingPurple";
import Image from "next/image";

export default function CasesHeroSection() {
  const leftImage = "/images/Screenshot 2025-09-24 at 12.07.08 PM 1.png";
  const backgroundImage = "/images/image_1001978347.png";

  return (
    <section
      className="relative min-h-screen border border-[white]">
      <div
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
      </div>
      <GradientsLeftRight />
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[60rem] mx-auto pb-8 lg:pb-0 mt-40">
        <div className="space-y-6">
          <div>

            <HeadingPurple title="Case Study" />
            <h1 className="max-w-xl text-[#000000] text-[32px] leading-[48px] font-light">
              Conversational AI (Voice + Text)
            </h1>
            <p className="max-w-xl text-[#000000]/60 text-[16px] leading-[24px] mt-2 font-light">
              Loan Information Voice Agents
            </p>
          </div>

          <div className="flex flex-row gap-6 sm:gap-[100px]">
            <div>
              <HeadingPurple title="Client" />
              <p className="text-[#000000]">Vridhi Home Finance</p>
            </div>
            <div>
              <HeadingPurple title="Industry" />
              <p className="text-[#000000]">Financial Services</p>
            </div>
          </div>

          <div className="flex justify-center mt-[80px]">
            <Image
              src={leftImage}
              alt="Conversational AI Voice Agent Dashboard"
              width={838}
              height={382}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}