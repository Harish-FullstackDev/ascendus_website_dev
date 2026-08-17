"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import CXHero from "@/components/CustomerExperience/CXHero";
import CXIntelligentInvoice from "@/components/CustomerExperience/CXIntelligentInvoice";
import CXBusinessOutcomes from "@/components/CustomerExperience/CXBusinessOutcomes";
import CXBusinessFunctions from "@/components/CustomerExperience/CXBusinessFunctions";
import CXWhySST from "@/components/CustomerExperience/CXWhySST";
import CXInsights from "@/components/CustomerExperience/CXInsights";
import CXFinalCTA from "@/components/CustomerExperience/CXFinalCTA";

const Page = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <EnterprisePageHeader
        title="Customer Experience"
        titleLink="/services/CustomerExperience"
        backLink="/services"
      />
      <CXHero />
      <CXIntelligentInvoice />
      <CXBusinessOutcomes />
      <CXBusinessFunctions />
      <CXWhySST />
      <CXInsights />
      <CXFinalCTA />
      <Footer />
    </div>
  );
};

export default Page;
