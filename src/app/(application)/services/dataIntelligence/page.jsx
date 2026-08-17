"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import DIHero from "@/components/Services/DataIntelligence/DIHero";
import DIAfternatingFeatures from "@/components/Services/DataIntelligence/DIAfternatingFeatures";
import DIGrowWithSapTabs from "@/components/Services/DataIntelligence/DIGrowWithSapTabs";
import DIDataTransformationFramework from "@/components/Services/DataIntelligence/DIDataTransformationFramework";
import DITransformationInsights from "@/components/Services/DataIntelligence/DITransformationInsights";
import DICTA from "@/components/Services/DataIntelligence/DICTA";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>

      {/* <EnterprisePageHeader
        title="Data & Intelligence"
        titleLink="/services/dataIntelligence"
        backLink="/services"
      /> */}

      <main>
        {/* Hero Section */}
        <DIHero />

        {/* Alternating Features Area */}
        <DIAfternatingFeatures />

        {/* GROW with SAP Tab Accordion Grid */}
        <DIGrowWithSapTabs />

        {/* Value Cycle Circle Loop Visual & Metric Highlights */}
        <DIDataTransformationFramework />

        {/* Enterprise Transformation Research Detail Banner */}
        <DITransformationInsights />

        {/* Consultation scheduling CTA */}
        <DICTA />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
