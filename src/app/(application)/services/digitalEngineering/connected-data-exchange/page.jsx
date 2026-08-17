"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/DigitalEngineering/ConnectedDataExchange/Breadcrumbs";
import Hero from "@/components/Services/DigitalEngineering/ConnectedDataExchange/Hero";
import ExchangeSection from "@/components/Services/DigitalEngineering/ConnectedDataExchange/ExchangeSection";
import ExchangeOfferings from "@/components/Services/DigitalEngineering/ConnectedDataExchange/ExchangeOfferings";
import ExchangeCapabilities from "@/components/Services/DigitalEngineering/ConnectedDataExchange/ExchangeCapabilities";
import TransformationInsights from "@/components/Services/DigitalEngineering/ConnectedDataExchange/TransformationInsights";
import CTABanner from "@/components/Services/DigitalEngineering/ConnectedDataExchange/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <ExchangeSection />
      <ExchangeOfferings />
      <ExchangeCapabilities />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
