"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/CloudInfrastructure/InfrastructureModernization/Breadcrumbs";
import Hero from "@/components/Services/CloudInfrastructure/InfrastructureModernization/Hero";
import PartnerLogos from "@/components/Services/CloudInfrastructure/InfrastructureModernization/PartnerLogos";
import TransformSection from "@/components/Services/CloudInfrastructure/InfrastructureModernization/TransformSection";
import InfrastructureServices from "@/components/Services/CloudInfrastructure/InfrastructureModernization/InfrastructureServices";
import MigrationApproaches from "@/components/Services/CloudInfrastructure/InfrastructureModernization/MigrationApproaches";
import WhatWeModernize from "@/components/Services/CloudInfrastructure/InfrastructureModernization/WhatWeModernize";
import InfrastructureStats from "@/components/Services/CloudInfrastructure/InfrastructureModernization/InfrastructureStats";
import CommonChallenges from "@/components/Services/CloudInfrastructure/InfrastructureModernization/CommonChallenges";
import TransformationInsights from "@/components/Services/CloudInfrastructure/InfrastructureModernization/TransformationInsights";
import BuildInfrastructure from "@/components/Services/CloudInfrastructure/InfrastructureModernization/BuildInfrastructure";
import CTABanner from "@/components/Services/CloudInfrastructure/InfrastructureModernization/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <PartnerLogos />
      <div className="px-2 sm:px-4 lg:px-6 flex justify-center">
        <TransformSection />
      </div>
      <InfrastructureServices />
      <MigrationApproaches />
      <WhatWeModernize />
      <InfrastructureStats />
      <CommonChallenges />
      <TransformationInsights />
      <BuildInfrastructure />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
