"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTABanner from "@/components/Services/ArtificialIntelligence/CTABanner";
import Breadcrumbs from "@/components/Services/ArtificialIntelligence/AIStrategy/Breadcrumbs";
import Hero from "@/components/Services/ArtificialIntelligence/AIStrategy/Hero";
import Opportunity from "@/components/Services/ArtificialIntelligence/AIStrategy/Opportunity";
import FeatureCards from "@/components/Services/ArtificialIntelligence/AIStrategy/FeatureCards";
import StrategicServices from "@/components/Services/ArtificialIntelligence/AIStrategy/StrategicServices";
import StrategyInAction from "@/components/Services/ArtificialIntelligence/AIStrategy/StrategyInAction";
import Journey from "@/components/Services/ArtificialIntelligence/AIStrategy/Journey";
import BusinessImpact from "@/components/Services/ArtificialIntelligence/AIStrategy/BusinessImpact";
import Insights from "@/components/Services/ArtificialIntelligence/AIStrategy/Insights";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <Opportunity />
      <FeatureCards />
      <StrategicServices />
      <StrategyInAction />
      <Journey />
      <BusinessImpact />
      <Insights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
