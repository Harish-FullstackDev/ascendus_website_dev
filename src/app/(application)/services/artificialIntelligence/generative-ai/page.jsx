"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTABanner from "@/components/Services/ArtificialIntelligence/CTABanner";
import Breadcrumbs from "@/components/Services/ArtificialIntelligence/GenAI/Breadcrumbs";
import Hero from "@/components/Services/ArtificialIntelligence/GenAI/Hero";
import NewWayOfWorking from "@/components/Services/ArtificialIntelligence/GenAI/NewWayOfWorking";
import ImagineAI from "@/components/Services/ArtificialIntelligence/GenAI/ImagineAI";
import WhatWeHelpYouBuild from "@/components/Services/ArtificialIntelligence/GenAI/WhatWeHelpYouBuild";
import BusinessImpact from "@/components/Services/ArtificialIntelligence/GenAI/BusinessImpact";
import Insights from "@/components/Services/ArtificialIntelligence/GenAI/Insights";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <NewWayOfWorking />
      <ImagineAI />
      <WhatWeHelpYouBuild />
      <BusinessImpact />
      <Insights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
