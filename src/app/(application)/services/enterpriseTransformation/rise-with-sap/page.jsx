"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import TransformCTABanner from "@/components/Services/EnterpriseTransformation/TransformCTABanner";
import RiseHero from "@/components/Services/EnterpriseTransformation/RiseWithSAP/RiseHero";
import ReadyForWhatsNext from "@/components/Services/EnterpriseTransformation/RiseWithSAP/ReadyForWhatsNext";
import LegacyToIntelligent from "@/components/Services/EnterpriseTransformation/RiseWithSAP/LegacyToIntelligent";
import TransformationBlueprint from "@/components/Services/EnterpriseTransformation/RiseWithSAP/TransformationBlueprint";
import First180Days from "@/components/Services/EnterpriseTransformation/RiseWithSAP/First180Days";
import CommonChallenges from "@/components/Services/EnterpriseTransformation/RiseWithSAP/CommonChallenges";
import CloudCapabilitiesGrid from "@/components/Services/EnterpriseTransformation/RiseWithSAP/CloudCapabilitiesGrid";
import SSTDifference from "@/components/Services/EnterpriseTransformation/RiseWithSAP/SSTDifference";
import RiseInsights from "@/components/Services/EnterpriseTransformation/RiseWithSAP/RiseInsights";
import RiseFinalCTA from "@/components/Services/EnterpriseTransformation/RiseWithSAP/RiseFinalCTA";

const Page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <EnterprisePageHeader subLabel="RISE With SAP" />
      <RiseHero />
      <ReadyForWhatsNext />
      <LegacyToIntelligent />
      <TransformationBlueprint />
      <First180Days />
      <CommonChallenges />
      <CloudCapabilitiesGrid />
      <SSTDifference />
      <TransformCTABanner
        title="From Legacy ERP to Intelligent Enterprise"
        description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives."
      />
      <RiseInsights />
      <RiseFinalCTA />
      <Footer />
    </div>
  );
};

export default Page;
