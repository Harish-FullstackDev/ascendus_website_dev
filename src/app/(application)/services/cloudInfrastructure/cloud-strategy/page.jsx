"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/CloudInfrastructure/CloudStrategy/Breadcrumbs";
import Hero from "@/components/Services/CloudInfrastructure/CloudStrategy/Hero";
import WhyCloud from "@/components/Services/CloudInfrastructure/CloudStrategy/WhyCloud";
import CloudLogos from "@/components/Services/CloudInfrastructure/CloudStrategy/CloudLogos";
import Services from "@/components/Services/CloudInfrastructure/CloudStrategy/Services";
import InfrastructureBridge from "@/components/Services/CloudInfrastructure/CloudStrategy/InfrastructureBridge";
import BusinessValue from "@/components/Services/CloudInfrastructure/CloudStrategy/BusinessValue";
import WhySST from "@/components/Services/CloudInfrastructure/CloudStrategy/WhySST";
import FeatureCards from "@/components/Services/CloudInfrastructure/CloudStrategy/FeatureCards";
import Insights from "@/components/Services/CloudInfrastructure/CloudStrategy/Insights";
import CTABanner from "@/components/Services/CloudInfrastructure/CloudStrategy/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <WhyCloud />
      <CloudLogos />
      <Services />
      <InfrastructureBridge />
      <BusinessValue />
      <WhySST />
      <FeatureCards />
      <Insights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
