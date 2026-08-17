"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/DataIntelligence/DataIntegration/Breadcrumbs";
import Hero from "@/components/Services/DataIntelligence/DataIntegration/Hero";
import DataConnectionSection from "@/components/Services/DataIntelligence/DataIntegration/DataConnectionSection";
import OurDataIntegrationServices from "@/components/Services/DataIntelligence/DataIntegration/OurDataIntegrationServices";
import ConnectedDataJourney from "@/components/Services/DataIntelligence/DataIntegration/ConnectedDataJourney";
import WhatWeIntegrate from "@/components/Services/DataIntelligence/DataIntegration/WhatWeIntegrate";
import BusinessValue from "@/components/Services/DataIntelligence/DataIntegration/BusinessValue";
import TransformationInsights from "@/components/Services/DataIntelligence/DataIntegration/TransformationInsights";
import CTABanner from "@/components/Services/DataIntelligence/DataIntegration/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <DataConnectionSection />
      <OurDataIntegrationServices />
      <ConnectedDataJourney />
      <WhatWeIntegrate />
      <BusinessValue />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
