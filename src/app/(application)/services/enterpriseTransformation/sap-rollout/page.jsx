"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import RollOutHero from "@/components/Services/EnterpriseTransformation/SAPRollOut/RollOutHero";
import RollOutContent from "@/components/Services/EnterpriseTransformation/SAPRollOut/RollOutContent";

const Page = () => (
  <div className="min-h-screen overflow-x-hidden bg-white font-sans selection:bg-blue-500/30 selection:text-white">
    <Navbar />
    <EnterprisePageHeader subLabel="SAP Rollout" />
    <RollOutHero />
    <RollOutContent />
    <Footer />
  </div>
);

export default Page;
