"use client";
import React from "react";
import AboutHeader from "@/components/About us/Header";
import Footer from "@/components/Footer/Footer";
import EnterpriseCard from "@/components/About us/EnterpriseCard";
import AboutStats from "@/components/About us/AboutStats";
import AboutValues from "@/components/About us/AboutValues";
import DiscoverWhatSetsUsApart from "@/components/About us/DiscoverWhatSetsUsApart";
import AboutMission from "@/components/About us/AboutMission";
import OurStrength from "@/components/About us/OurStrength";
import TestimonialsPage from "@/components/Home/Testinomials";
import FutureFocusedInsights from "@/components/About us/FutureFocusedInsights";
import AboutClosingCTA from "@/components/About us/AboutClosingCTA";

const page = () => {
  return (
    <>
      <AboutHeader />
      <EnterpriseCard />
      <AboutStats />
      <AboutValues />
      <DiscoverWhatSetsUsApart />
      <AboutMission />
      <OurStrength />
      <TestimonialsPage />
      <FutureFocusedInsights />
      <AboutClosingCTA />
      <Footer />
    </>
  );
};

export default page;
