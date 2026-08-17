"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/DataIntelligence/DataEngineering/Breadcrumbs";
import Hero from "@/components/Services/DataIntelligence/DataEngineering/Hero";
import DataFoundationSection from "@/components/Services/DataIntelligence/DataEngineering/DataFoundationSection";
import OurDataEngineeringServices from "@/components/Services/DataIntelligence/DataEngineering/OurDataEngineeringServices";
import WhatWeBuildPlatforms from "@/components/Services/DataIntelligence/DataEngineering/WhatWeBuildPlatforms";
import OurDataIntelligenceProcess from "@/components/Services/DataIntelligence/DataEngineering/OurDataIntelligenceProcess";
import DataPlatformsShowcase from "@/components/Services/DataIntelligence/DataEngineering/DataPlatformsShowcase";
import DataEngineeringCapabilities from "@/components/Services/DataIntelligence/DataEngineering/DataEngineeringCapabilities";
import TransformationInsights from "@/components/Services/DataIntelligence/DataEngineering/TransformationInsights";
import CTABanner from "@/components/Services/DataIntelligence/DataEngineering/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <DataFoundationSection />
      <OurDataEngineeringServices />
      <WhatWeBuildPlatforms />
      <OurDataIntelligenceProcess />
      <DataPlatformsShowcase />
      <DataEngineeringCapabilities />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
