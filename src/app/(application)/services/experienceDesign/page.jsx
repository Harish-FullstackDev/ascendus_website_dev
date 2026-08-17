"use client";
import React from "react";
import ServiceHero from "@/components/Services/ServiceTemplate2/ServiceHero";
import ServiceStickyNav from "@/components/Services/ServiceTemplate2/ServiceStickyNav";
import ServiceOverview from "@/components/Services/ServiceTemplate2/ServiceOverview";
import ServiceCapabilities from "@/components/Services/ServiceTemplate2/ServiceCapabilities";
import ServiceSuccessMetrics from "@/components/Services/ServiceTemplate2/ServiceSuccessMetrics";
import ServicePartners from "@/components/Services/ServiceTemplate2/ServicePartners";
import ServiceInsights from "@/components/Services/ServiceTemplate2/ServiceInsights";
import ServiceFAQ from "@/components/Services/ServiceTemplate2/ServiceFAQ";
import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";
import Footer from "@/components/Footer/Footer";
import { experienceDesignData } from "@/components/Constants/Service/experienceDesignData";

const Page = () => {
  const data = experienceDesignData;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white">
      <ServiceHero {...data.hero} />
      <ServiceStickyNav sections={data.sections} />
      <ServiceOverview id="overview" title={data.overview.title} description={data.overview.description} whyItMatters={data.overview.whyItMatters} whySST={data.overview.whySST} image={data.overview.image} expertise={data.overview.expertise} industries={data.overview.industries} technologies={data.overview.technologies} />
      <ServiceCapabilities id="capabilities" title={data.capabilities.title} subtitle={data.capabilities.subtitle} items={data.capabilities.items} />
      <ServiceSuccessMetrics id="metrics" title={data.metrics.title} subtitle={data.metrics.subtitle} items={data.metrics.items} />
      <ServicePartners id="partners" title={data.partners.title} subtitle={data.partners.subtitle} items={data.partners.items} />
      <ServiceInsights id="insights" title={data.insights.title} tabs={data.insights.tabs} />
      <ServiceFAQ id="faq" title={data.faq.title} subtitle={data.faq.subtitle} items={data.faq.items} />
      <CommonConsultation backgroundImage="/AboutPage/aboutus.png" backgroundAlt="Experience Design" title="Let’s shape the experience together" description="From discovery to delivery, Ascendus can help you design journeys that feel intuitive, useful, and ready for growth." buttonText="Schedule a consultation" />
      <Footer />
    </div>
  );
};

export default Page;
