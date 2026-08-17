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
import ServiceCTA from "@/components/Services/ServiceTemplate1/ServiceCTA";
import Footer from "@/components/Footer/Footer";

import { intelligentAutomationData } from "@/components/Constants/Service/intelligentAutomationData";

const Page = () => {
    const data = intelligentAutomationData;

    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-500/30 selection:text-white">
            {/* 1 & 2. Navbar & Hero Section */}
            <ServiceHero
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                description={data.hero.description}
                backgroundImage={data.hero.backgroundImage}
                breadcrumbs={data.hero.breadcrumbs}
                primaryCta={data.hero.primaryCta}
                secondaryCta={data.hero.secondaryCta}
            />

            {/* 3. Sticky In-Page Navigation */}
            <ServiceStickyNav sections={data.sections} />

            {/* 4. Overview Section */}
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

            {/* 5. Capabilities Section */}
            <ServiceCapabilities
                id="capabilities"
                title={data.capabilities.title}
                subtitle={data.capabilities.subtitle}
                items={data.capabilities.items}
            />

            {/* 6. Success Metrics Section */}
            <ServiceSuccessMetrics
                id="metrics"
                title={data.metrics.title}
                subtitle={data.metrics.subtitle}
                items={data.metrics.items}
            />

            {/* 7. Strategic Partners Section */}
            <ServicePartners
                id="partners"
                title={data.partners.title}
                subtitle={data.partners.subtitle}
                items={data.partners.items}
            />

            {/* 8. Related Insights Section */}
            <ServiceInsights
                id="insights"
                title={data.insights.title}
                tabs={data.insights.tabs}
            />

            {/* 9. FAQ Section */}
            <ServiceFAQ
                id="faq"
                title={data.faq.title}
                subtitle={data.faq.subtitle}
                items={data.faq.items}
            />

            {/* 10. Call To Action Section */}
            <CommonConsultation
                backgroundImage="/AboutPage/aboutus.png"
                backgroundAlt="Business Solutions"
                title="Let’s Build the Future Together"
                description="Whether you're starting your digital transformation journey or scaling to the next level, Ascendus is here to guide you with expertise, innovation, and trusted partnerships."
                buttonText="Schedule a demo"
            />

            {/* 11. Footer Section */}
            <Footer />
        </div>
    );
};

export default Page;
