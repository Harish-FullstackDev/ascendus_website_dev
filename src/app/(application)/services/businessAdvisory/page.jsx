"use client";
import React from "react";
import ServiceHero from "@/components/Services/ServiceTemplate1/ServiceHero";
import ServiceStickyNav from "@/components/Services/ServiceTemplate1/ServiceStickyNav";
import ServiceOverview from "@/components/Services/ServiceTemplate1/ServiceOverview";
import ServiceCapabilities from "@/components/Services/ServiceTemplate1/ServiceCapabilities";
import ServiceSuccessMetrics from "@/components/Services/ServiceTemplate1/ServiceSuccessMetrics";
import ServicePartners from "@/components/Services/ServiceTemplate1/ServicePartners";
import ServiceInsights from "@/components/Services/ServiceTemplate1/ServiceInsights";
import ServiceFAQ from "@/components/Services/ServiceTemplate1/ServiceFAQ";
import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";
import Footer from "@/components/Footer/Footer";

import { businessAdvisoryData } from "@/components/Constants/Service/businessAdvisoryData";

const Page = () => {
    const data = businessAdvisoryData;

    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white">
            <ServiceHero
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                description={data.hero.description}
                backgroundImage={data.hero.backgroundImage}
                breadcrumbs={data.hero.breadcrumbs}
                primaryCta={data.hero.primaryCta}
                secondaryCta={data.hero.secondaryCta}
            />

            <ServiceStickyNav sections={data.sections} />

            <ServiceOverview
                id="overview"
                title={data.overview.title}
                description={data.overview.description}
                whyItMatters={data.overview.whyItMatters}
                whySST={data.overview.whySST}
                image={data.overview.image}
                expertise={data.overview.expertise}
                industries={data.overview.industries}
                technologies={data.overview.technologies}
            />

            <ServiceCapabilities
                id="capabilities"
                title={data.capabilities.title}
                subtitle={data.capabilities.subtitle}
                items={data.capabilities.items}
            />

            <ServiceSuccessMetrics
                id="metrics"
                title={data.metrics.title}
                subtitle={data.metrics.subtitle}
                items={data.metrics.items}
            />

            <ServicePartners
                id="partners"
                title={data.partners.title}
                subtitle={data.partners.subtitle}
                items={data.partners.items}
            />

            <ServiceInsights
                id="insights"
                title={data.insights.title}
                tabs={data.insights.tabs}
            />

            <ServiceFAQ
                id="faq"
                title={data.faq.title}
                subtitle={data.faq.subtitle}
                items={data.faq.items}
            />

            <CommonConsultation
                backgroundImage="/AboutPage/aboutus.png"
                backgroundAlt="Business Advisory"
                title="Let’s Build the Future Together"
                description="Whether you are shaping a strategy, preparing for transformation, or looking to improve execution, Ascendus can help turn your priorities into measurable progress."
                buttonText="Schedule a consultation"
            />

            <Footer />
        </div>
    );
};

export default Page;
