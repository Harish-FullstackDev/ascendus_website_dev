"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/DigitalEngineering/ApiDevelopmentManagement/Breadcrumbs";
import Hero from "@/components/Services/DigitalEngineering/ApiDevelopmentManagement/Hero";
import ApiSection from "@/components/Services/DigitalEngineering/ApiDevelopmentManagement/ApiSection";
import ApiOfferings from "@/components/Services/DigitalEngineering/ApiDevelopmentManagement/ApiOfferings";
import ApiCapabilities from "@/components/Services/DigitalEngineering/ApiDevelopmentManagement/ApiCapabilities";
import TransformationInsights from "@/components/Services/DigitalEngineering/ApiDevelopmentManagement/TransformationInsights";
import CTABanner from "@/components/Services/DigitalEngineering/ApiDevelopmentManagement/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <ApiSection />
      <ApiOfferings />
      <ApiCapabilities />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
