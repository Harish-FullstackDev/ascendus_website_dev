"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/DataIntelligence/AdvancedAnalytics/Breadcrumbs";
import Hero from "@/components/Services/DataIntelligence/AdvancedAnalytics/Hero";
import AnalyticsSection from "@/components/Services/DataIntelligence/AdvancedAnalytics/AnalyticsSection";
import OurAnalyticsServices from "@/components/Services/DataIntelligence/AdvancedAnalytics/OurAnalyticsServices";
import WhatWeBuildPlatforms from "@/components/Services/DataIntelligence/AdvancedAnalytics/WhatWeBuildPlatforms";
import AnalyticsCapabilities from "@/components/Services/DataIntelligence/AdvancedAnalytics/AnalyticsCapabilities";
import TransformationInsights from "@/components/Services/DataIntelligence/AdvancedAnalytics/TransformationInsights";
import CTABanner from "@/components/Services/DataIntelligence/AdvancedAnalytics/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <AnalyticsSection />
      <OurAnalyticsServices />
      <WhatWeBuildPlatforms />
      <AnalyticsCapabilities />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
