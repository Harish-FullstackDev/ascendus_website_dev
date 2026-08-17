"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTABanner from "@/components/Services/ArtificialIntelligence/CTABanner";
import Breadcrumbs from "@/components/Services/ArtificialIntelligence/BusinessAI/Breadcrumbs";
import Hero from "@/components/Services/ArtificialIntelligence/BusinessAI/Hero";
import EverydayBusiness from "@/components/Services/ArtificialIntelligence/BusinessAI/EverydayBusiness";
import BusinessFunctions from "@/components/Services/ArtificialIntelligence/BusinessAI/BusinessFunctions";
import Capabilities from "@/components/Services/ArtificialIntelligence/BusinessAI/Capabilities";
import BusinessOutcomes from "@/components/Services/ArtificialIntelligence/BusinessAI/BusinessOutcomes";
import MoreCapabilities from "@/components/Services/ArtificialIntelligence/BusinessAI/MoreCapabilities";
import Insights from "@/components/Services/ArtificialIntelligence/BusinessAI/Insights";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <EverydayBusiness />
      <BusinessFunctions />
      <Capabilities />
      <BusinessOutcomes />
      <MoreCapabilities />
      <Insights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
