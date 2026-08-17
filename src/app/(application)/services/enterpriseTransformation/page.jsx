"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";
import EnterprisePageHeader from "@/components/Services/EnterpriseTransformation/EnterprisePageHeader";
import EnterpriseHero from "@/components/Services/EnterpriseTransformation/EnterpriseHero";
import TransformationCapabilities from "@/components/Services/EnterpriseTransformation/TransformationCapabilities";
import TransformationJourney from "@/components/Services/EnterpriseTransformation/TransformationJourney";
import BusinessOutcomes from "@/components/Services/EnterpriseTransformation/BusinessOutcomes";
import IndustriesWeTransform from "@/components/Services/EnterpriseTransformation/IndustriesWeTransform";
import TransformCTABanner from "@/components/Services/EnterpriseTransformation/TransformCTABanner";
import TransformationInsights from "@/components/Services/EnterpriseTransformation/TransformationInsights";
import ctaBackground from "@/assets/Service/Enterprise Transformation/Footer container.jpg";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <EnterprisePageHeader />
      <EnterpriseHero />
      <TransformationCapabilities />
      <TransformationJourney />
      <BusinessOutcomes />
      <IndustriesWeTransform />
      <TransformCTABanner />
      <TransformationInsights />
      <CommonConsultation
        backgroundImage={ctaBackground}
        backgroundAlt="Ready to Transform Your Business"
        title="Ready to Transform Your Business?"
        description="Let's Build innovative Solution that drive growth efficiency for your Business"
        buttonText="Book a Demo"
        buttonIconBgColor="bg-cyan-600 group-hover:bg-cyan-700"
      />
      <Footer />
    </div>
  );
};

export default Page;
