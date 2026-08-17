"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Services/CloudInfrastructure/CloudMigration/Breadcrumbs";
import Hero from "@/components/Services/CloudInfrastructure/CloudMigration/Hero";
import SmarterWayToMove from "@/components/Services/CloudInfrastructure/CloudMigration/SmarterWayToMove";
import ApplicationDevelopment from "@/components/Services/CloudInfrastructure/CloudMigration/ApplicationDevelopment";
import WhyChooseSST from "@/components/Services/CloudInfrastructure/CloudMigration/WhyChooseSST";
import ApplicationModernization from "@/components/Services/CloudInfrastructure/CloudMigration/ApplicationModernization";
import CloudJourney from "@/components/Services/CloudInfrastructure/CloudMigration/CloudJourney";
import MigrationApproaches from "@/components/Services/CloudInfrastructure/CloudMigration/MigrationApproaches";
import MigrationCapabilities from "@/components/Services/CloudInfrastructure/CloudMigration/MigrationCapabilities";
import TransformationInsights from "@/components/Services/CloudInfrastructure/CloudMigration/TransformationInsights";
import CTABanner from "@/components/Services/CloudInfrastructure/CloudMigration/CTABanner";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <SmarterWayToMove />
      <ApplicationDevelopment />
      <WhyChooseSST />
      <ApplicationModernization />
      <CloudJourney />
      <MigrationApproaches />
      <MigrationCapabilities />
      <TransformationInsights />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Page;
