"use client";
export interface SectionOneProps {
  background: string;
  challenges: string[];
  solution: string;
  results: string[];
  featuresLead: string;
  featuresPara1: string;
  featuresList1: string[];
  featuresPara2: string;
  featuresList2: string[];
  featuresPara3: string;
  featuresList3: string[];
  conclusion: string;
}

const SectionOne = ({
  background,
  challenges,
  solution,
  results,
  featuresLead,
  featuresPara1,
  featuresList1,
  featuresPara2,
  featuresList2,
  featuresPara3,
  featuresList3,
  conclusion,
}: SectionOneProps) => {

  return (
    <div className="relative z-10">
      <div className="w-full px-6 md:px-16 lg:px-24 max-w-[60rem] mx-auto pb-8 lg:pb-0 flex flex-col gap-[80px] mt-0 md:mt-20 mb-[80px]">
        <div className="space-y-4">
          <div className="text-[#000000] text-[40px] leading-[48px] font-light">Background</div>

          <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">
            {background}
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-[#000000] text-[40px] leading-[48px] font-light">Challanges</div>
          <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
            {challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

        </div>
        <div className="space-y-4">
          <div className="text-[#000000] text-[40px] leading-[48px] font-light">Solution</div>
          <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">{solution}</p>


        </div>
        <div className="space-y-4">
          <div className="text-[#000000] text-[40px] leading-[48px] font-light">Results</div>
          <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="">
          <div className="text-[#000000] text-[40px] leading-[48px] font-light">Features</div>
          <p className="my-4 text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresLead}</p>
          <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresPara1}</p>
          <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
            {featuresList1.map((f, i) => (
              <li key={`f1-${i}`}>{f}</li>
            ))}
          </ul>
          <p className="mt-4 text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresPara2}</p>
          <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
            {featuresList2.map((f, i) => (
              <li key={`f2-${i}`}>{f}</li>
            ))}
          </ul>
          <p className="mt-4 text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresPara3}</p>
          <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
            {featuresList3.map((f, i) => (
              <li key={`f3-${i}`}>{f}</li>
            ))}
          </ul>


        </div>

        <div className="space-y-4">
          <div className="text-[#000000] text-[40px] leading-[48px] font-light">Conclusion</div>
          <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">{conclusion}</p>


        </div>
      </div>
    </div>

  );
};

export default SectionOne;
