"use client";
import ResponsibilitySection from "@/components/TrustCenter/Ethics&Responsibility";
import Header from "@/components/TrustCenter/Header";
import QuickResources from "@/components/TrustCenter/QuickResources";
import OurCommitment from "@/components/TrustCenter/OurCommitment";
import SecurityPractices from "@/components/TrustCenter/SecurityPractices";
import SecuritySection from "@/components/TrustCenter/SecuritySystem";
import React from "react";
import Footer from "@/components/Footer/Footer";
import PrivacyAndDataprotection from "@/components/TrustCenter/Privacy&Dataprotection";

const page = () => {
  return (
    <div>
      <Header />
      <SecurityPractices />
      <OurCommitment />
      <SecuritySection />
      <PrivacyAndDataprotection/>
      <ResponsibilitySection />
      <QuickResources />
      <Footer />
    </div>
  );
};

export default page;
