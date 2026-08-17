"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Breadcrumbs from "@/components/Services/CloudInfrastructure/Breadcrumbs";
import FlipCards from "@/components/Services/CloudInfrastructure/FlipCards";
import EnterpriseBanner from "@/components/Services/CloudInfrastructure/EnterpriseBanner";
import TransformationJourney from "@/components/Services/CloudInfrastructure/TransformationJourney";
import AppModernization from "@/components/Services/CloudInfrastructure/AppModernization";
import WhySSTCloud from "@/components/Services/CloudInfrastructure/WhySSTCloud";
import TransformationInsights from "@/components/Services/CloudInfrastructure/TransformationInsights";
import ConsultationCTA from "@/components/Services/CloudInfrastructure/ConsultationCTA";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-600/30 selection:text-white relative overflow-x-hidden">
      {/* Main Global Navbar */}
      <Navbar />

      {/* Page Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Intro & Flip Cards */}
      <FlipCards />

      {/* Enterprise designed banner */}
      <EnterpriseBanner />

      {/* Curved Transformation Journey Stepper */}
      <TransformationJourney />

      {/* App Modernization grid list and stacked images */}
      <AppModernization />

      {/* Why Ascendus Banner */}
      <WhySSTCloud />

      {/* Enterprise Transformation Insights Card */}
      <TransformationInsights />

      {/* Call To Action consultation form block */}
      <ConsultationCTA />

      {/* Main Global Footer */}
      <Footer />
    </div>
  );
};

export default Page;
