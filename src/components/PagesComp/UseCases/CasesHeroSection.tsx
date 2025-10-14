import Image from "next/image";

// Reusable style constants
const LABEL_STYLE = {
  fontFamily: 'ChakraPetch, sans-serif',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '24px',
  color: '#BA8DFF',
} as const;

export default function CasesHeroSection() {
  const leftImage = "/images/Screenshot 2025-09-24 at 12.07.08 PM 1.png";
  const backgroundImage = "/images/image_1001978347.png";

  return (
    <section
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden border-b border-gray-200 rounded-t-none md:rounded-t-2xl rounded-b-2xl mt-24"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-[60rem] mx-auto pb-8 lg:pb-0">
        <div className="space-y-6">
          {/* Header Section */}
          <div>
            <p style={LABEL_STYLE} className="tracking-wide mb-2 md:mb-4">
              Case Study
            </p>
            <h1 className="max-w-xl text-[#000000] text-[32px] leading-[48px] font-semibold">
              Conversational AI (Voice + Text)
            </h1>
            <p className="max-w-xl text-[#000000] text-[16px] leading-[24px] mt-2">
              Loan Information Voice Agents
            </p>
          </div>

          {/* Client Info Section */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div>
              <p style={LABEL_STYLE} className="tracking-wide mb-1">
                Client
              </p>
              <p className="text-[#000000]">Vridhi Home Finance</p>
            </div>
            <div>
              <p style={LABEL_STYLE} className="tracking-wide mb-1">
                Industry
              </p>
              <p className="text-[#000000]">Financial Services</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center pt-4">
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