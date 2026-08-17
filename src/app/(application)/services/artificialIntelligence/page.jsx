"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/ArtificialIntelligence/Breadcrumbs";
import Hero from "@/components/Services/ArtificialIntelligence/Hero";
import BusinessValue from "@/components/Services/ArtificialIntelligence/BusinessValue";
import Capabilities from "@/components/Services/ArtificialIntelligence/Capabilities";
import TransformationFramework from "@/components/Services/ArtificialIntelligence/TransformationFramework";
import BusinessOutcomes from "@/components/Services/ArtificialIntelligence/BusinessOutcomes";
import DeliveryOutcome from "@/components/Services/ArtificialIntelligence/DeliveryOutcome";
import EnterpriseInsights from "@/components/Services/ArtificialIntelligence/EnterpriseInsights";
import CTABanner from "@/components/Services/ArtificialIntelligence/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <BusinessValue />
      <Capabilities />
      <TransformationFramework />
      <BusinessOutcomes />
      <DeliveryOutcome />
      <EnterpriseInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
