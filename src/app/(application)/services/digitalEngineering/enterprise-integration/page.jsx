"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/DigitalEngineering/EnterpriseIntegration/Breadcrumbs";
import Hero from "@/components/Services/DigitalEngineering/EnterpriseIntegration/Hero";
import IntegrationSection from "@/components/Services/DigitalEngineering/EnterpriseIntegration/IntegrationSection";
import IntegrationOfferings from "@/components/Services/DigitalEngineering/EnterpriseIntegration/IntegrationOfferings";
import IntegrationCapabilities from "@/components/Services/DigitalEngineering/EnterpriseIntegration/IntegrationCapabilities";
import TransformationInsights from "@/components/Services/DigitalEngineering/EnterpriseIntegration/TransformationInsights";
import CTABanner from "@/components/Services/DigitalEngineering/EnterpriseIntegration/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <IntegrationSection />
      <IntegrationOfferings />
      <IntegrationCapabilities />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
