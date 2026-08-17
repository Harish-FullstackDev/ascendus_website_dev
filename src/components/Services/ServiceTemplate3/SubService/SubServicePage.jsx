"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";

import SubServiceHero from "./SubServiceHero";
import SubServiceUrgency from "./SubServiceUrgency";
import SubServiceEssentials from "./SubServiceEssentials";
import SubServiceOfferings from "./SubServiceOfferings";
import SubServiceROI from "./SubServiceROI";
import SubServiceInsights from "./SubServiceInsights";

const SubServicePage = ({ data }) => {
  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-between text-white font-sans">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-8">
          <p className="text-lg text-slate-400">Loading sub-service detail...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Navbar Container */}
      <div className="bg-slate-950">
        <Navbar />
      </div>

      {/* 6 Core Sections */}
      <SubServiceHero
        title={data.title}
        tagline={data.tagline}
        description={data.description}
      />

      <SubServiceUrgency
        challengeText={data.urgency.challengeText}
        metricHighlight={data.urgency.metricHighlight}
        metricLabel={data.urgency.metricLabel}
        accordion={data.urgency.accordion}
      />

      <SubServiceEssentials essentials={data.essentials} />

      <SubServiceOfferings offerings={data.offerings} />

      <SubServiceROI roi={data.roi} />

      <SubServiceInsights insights={data.insights} />

      {/* Standard CTA & Footer */}
      <CommonConsultation
        backgroundImage="/AboutPage/aboutus.png"
        backgroundAlt={data.title}
        title={`Let’s shape your ${data.title.toLowerCase()} strategy`}
        description={`Ascendus helps you align execution frameworks, analyze bottlenecks, and establish governance structures tailored to your operational needs.`}
        buttonText="Schedule a consultation"
        onButtonClick={() => console.log(`${data.title} consult clicked`)}
      />

      <Footer />
    </div>
  );
};

export default SubServicePage;
