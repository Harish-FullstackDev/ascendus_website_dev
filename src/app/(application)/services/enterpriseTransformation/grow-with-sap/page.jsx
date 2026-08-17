"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import GrowHero from "@/components/Services/EnterpriseTransformation/GrowWithSAP/GrowHero";
import WhatIsGrow from "@/components/Services/EnterpriseTransformation/GrowWithSAP/WhatIsGrow";
import ValueOfGrow from "@/components/Services/EnterpriseTransformation/GrowWithSAP/ValueOfGrow";
import BusinessChallenges from "@/components/Services/EnterpriseTransformation/GrowWithSAP/BusinessChallenges";
import GoLiveTimeline from "@/components/Services/EnterpriseTransformation/GrowWithSAP/GoLiveTimeline";
import AdoptionAcceleration from "@/components/Services/EnterpriseTransformation/GrowWithSAP/AdoptionAcceleration";
import FeaturesTabs from "@/components/Services/EnterpriseTransformation/GrowWithSAP/FeaturesTabs";
import FeaturesDark from "@/components/Services/EnterpriseTransformation/GrowWithSAP/FeaturesDark";
import TransformationInsights from "@/components/Services/EnterpriseTransformation/GrowWithSAP/TransformationInsights";
import GrowFinalCTA from "@/components/Services/EnterpriseTransformation/GrowWithSAP/GrowFinalCTA";

const Page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <EnterprisePageHeader subLabel="GROW With SAP" />
      <GrowHero />
      <WhatIsGrow />
      <ValueOfGrow />
      <BusinessChallenges />
      <GoLiveTimeline />
      <AdoptionAcceleration />
      <FeaturesTabs />
      <FeaturesDark />
      <TransformationInsights />
      <GrowFinalCTA />
      <Footer />
    </div>
  );
};

export default Page;
