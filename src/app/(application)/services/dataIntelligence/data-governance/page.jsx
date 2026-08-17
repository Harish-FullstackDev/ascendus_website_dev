"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/DataIntelligence/DataGovernance/Breadcrumbs";
import Hero from "@/components/Services/DataIntelligence/DataGovernance/Hero";
import DataGovernanceSection from "@/components/Services/DataIntelligence/DataGovernance/DataGovernanceSection";
import OurDataGovernanceServices from "@/components/Services/DataIntelligence/DataGovernance/OurDataGovernanceServices";
import WhatWeBuildPlatforms from "@/components/Services/DataIntelligence/DataGovernance/WhatWeBuildPlatforms";
import DataGovernanceCapabilities from "@/components/Services/DataIntelligence/DataGovernance/DataGovernanceCapabilities";
import TransformationInsights from "@/components/Services/DataIntelligence/DataGovernance/TransformationInsights";
import CTABanner from "@/components/Services/DataIntelligence/DataGovernance/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <DataGovernanceSection />
      <OurDataGovernanceServices />
      <WhatWeBuildPlatforms />
      <DataGovernanceCapabilities />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
