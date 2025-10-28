import React from "react";
import CasesHeroSection from "./CaseStudyHeroSection";
import SectionOne from "./SectionOne";

export interface CaseStudyDetailData {
  title: string;
  subtitle?: string;
  client?: string;
  industry?: string;
  heroImage: string;
  backgroundImage?: string;
  // SectionOne content
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

export default function CaseStudyDetailContent({ slug, data }: { slug: string; data: CaseStudyDetailData }) {
  return (
    <>
      <CasesHeroSection
        title={data.title}
        subtitle={data.subtitle}
        client={data.client}
        industry={data.industry}
        heroImage={data.heroImage}
        backgroundImage={data.backgroundImage}
      />

      <SectionOne
        background={data.background}
        challenges={data.challenges}
        solution={data.solution}
        results={data.results}
        featuresLead={data.featuresLead}
        featuresPara1={data.featuresPara1}
        featuresList1={data.featuresList1}
        featuresPara2={data.featuresPara2}
        featuresList2={data.featuresList2}
        featuresPara3={data.featuresPara3}
        featuresList3={data.featuresList3}
        conclusion={data.conclusion}
      />
    </>
  );
}
