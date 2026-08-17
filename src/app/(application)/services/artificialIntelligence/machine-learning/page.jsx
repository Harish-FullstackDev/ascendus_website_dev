"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTABanner from "@/components/Services/ArtificialIntelligence/CTABanner";
import Breadcrumbs from "@/components/Services/ArtificialIntelligence/MachineLearning/Breadcrumbs";
import Hero from "@/components/Services/ArtificialIntelligence/MachineLearning/Hero";
import DataToDecisions from "@/components/Services/ArtificialIntelligence/MachineLearning/DataToDecisions";
import MLValue from "@/components/Services/ArtificialIntelligence/MachineLearning/MLValue";
import Industries from "@/components/Services/ArtificialIntelligence/MachineLearning/Industries";
import MLServices from "@/components/Services/ArtificialIntelligence/MachineLearning/MLServices";
import Lifecycle from "@/components/Services/ArtificialIntelligence/MachineLearning/Lifecycle";
import Insights from "@/components/Services/ArtificialIntelligence/MachineLearning/Insights";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <DataToDecisions />
      <div className="w-full max-w-7xl mx-auto h-px bg-[#D4D3D3]" />
      <MLValue />
      <Industries />
      <MLServices />
      <Lifecycle />
      <Insights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
