"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import DEHero from "@/components/Services/DigitalEngineering/DEHero";
import DEWhatWeDeliver from "@/components/Services/DigitalEngineering/DEWhatWeDeliver";
import DEIntegration from "@/components/Services/DigitalEngineering/DEIntegration";
import DEModernization from "@/components/Services/DigitalEngineering/DEModernization";
import DETransformationInsights from "@/components/Services/DigitalEngineering/DETransformationInsights";
import DECTA from "@/components/Services/DigitalEngineering/DECTA";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      <EnterprisePageHeader
        title="Digital Engineering"
        titleLink="/services/digitalEngineering"
        backLink="/services"
      />
      
      <DEHero />
      <DEWhatWeDeliver />
      <DEIntegration />
      <DEModernization />
      <DETransformationInsights />
      <DECTA />
      
      <Footer />
    </div>
  );
};

export default Page;
