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
        {background?.trim() && (
          <div className="space-y-4">
            <div className="text-[#000000] text-[40px] leading-[48px] font-light">Background</div>
            <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">{background}</p>
          </div>
        )}

        {Array.isArray(challenges) && challenges.length > 0 && (
          <div className="space-y-4">
            <div className="text-[#000000] text-[40px] leading-[48px] font-light">Challanges</div>
            <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
              {challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {solution?.trim() && (
          <div className="space-y-4">
            <div className="text-[#000000] text-[40px] leading-[48px] font-light">Solution</div>
            <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">{solution}</p>
          </div>
        )}

        {Array.isArray(results) && results.length > 0 && (
          <div className="space-y-4">
            <div className="text-[#000000] text-[40px] leading-[48px] font-light">Results</div>
            <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
              {results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {(featuresLead?.trim() || featuresPara1?.trim() || featuresPara2?.trim() || featuresPara3?.trim() ||
          (Array.isArray(featuresList1) && featuresList1.length > 0) ||
          (Array.isArray(featuresList2) && featuresList2.length > 0) ||
          (Array.isArray(featuresList3) && featuresList3.length > 0)) && (
          <div className="">
            <div className="text-[#000000] text-[40px] leading-[48px] font-light">Features</div>
            {featuresLead?.trim() && (
              <p className="my-4 text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresLead}</p>
            )}
            {featuresPara1?.trim() && (
              <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresPara1}</p>
            )}
            {Array.isArray(featuresList1) && featuresList1.length > 0 && (
              <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
                {featuresList1.map((f, i) => (
                  <li key={`f1-${i}`}>{f}</li>
                ))}
              </ul>
            )}
            {featuresPara2?.trim() && (
              <p className="mt-4 text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresPara2}</p>
            )}
            {Array.isArray(featuresList2) && featuresList2.length > 0 && (
              <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
                {featuresList2.map((f, i) => (
                  <li key={`f2-${i}`}>{f}</li>
                ))}
              </ul>
            )}
            {featuresPara3?.trim() && (
              <p className="mt-4 text-[#000000]/60 text-[16px] leading-[24px] font-light">{featuresPara3}</p>
            )}
            {Array.isArray(featuresList3) && featuresList3.length > 0 && (
              <ul className="list-disc pl-6 text-[#000000]/60 text-[16px] leading-[24px] font-light">
                {featuresList3.map((f, i) => (
                  <li key={`f3-${i}`}>{f}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {conclusion?.trim() && (
          <div className="space-y-4">
            <div className="text-[#000000] text-[40px] leading-[48px] font-light">Conclusion</div>
            <p className="text-[#000000]/60 text-[16px] leading-[24px] font-light">{conclusion}</p>
          </div>
        )}
      </div>
    </div>

  );
};

export default SectionOne;
