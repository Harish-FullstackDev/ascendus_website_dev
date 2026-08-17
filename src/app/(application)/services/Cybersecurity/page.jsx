"use client";
import React from "react";
import ServiceHero from "@/components/Services/ServiceTemplate3/ServiceHero";
import ServiceStickyNav from "@/components/Services/ServiceTemplate3/ServiceStickyNav";
import ServiceOverview from "@/components/Services/ServiceTemplate3/ServiceOverview";
import ServiceCapabilities from "@/components/Services/ServiceTemplate3/ServiceCapabilities";
import ServiceSuccessMetrics from "@/components/Services/ServiceTemplate3/ServiceSuccessMetrics";
import ServicePartners from "@/components/Services/ServiceTemplate3/ServicePartners";
import ServiceInsights from "@/components/Services/ServiceTemplate3/ServiceInsights";
import ServiceFAQ from "@/components/Services/ServiceTemplate3/ServiceFAQ";
import CommonConsultation from "@/components/CommonComponents/CommonConsulationCard";
import ServiceCTA from "@/components/Services/ServiceTemplate3/ServiceCTA";
import Footer from "@/components/Footer/Footer";

import { cybersecurityData } from "@/components/Constants/Service/CybersecurityData";

const Page = () => {
    const data = cybersecurityData;

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
            <ServiceSuccessMetrics
                id="metrics"
                title={data.metrics.title}
                subtitle={data.metrics.subtitle}
                items={data.metrics.items}
            />

            {/* 6. Success Metrics Section */}
            <ServiceCapabilities
                id="capabilities"
                title={data.capabilities.title}
                subtitle={data.capabilities.subtitle}
                items={data.capabilities.items}
            />

            {/* 7. Strategic Partners Section */}
            <ServicePartners
                id="partners"
                title={data.partners.title}
                subtitle={data.partners.subtitle}
                items={data.partners.items}
            />


            {/* 8. Related Insights Section */}
            {/* <CommonConsultation
                backgroundImage="/AboutPage/aboutus.png"
                backgroundAlt="Business Solutions"
                title="Let’s Build the Future Together"
                description="Whether you're starting your digital transformation journey or scaling to the next level, Ascendus is here to guide you with expertise, innovation, and trusted partnerships."
                buttonText="Schedule a demo"
                onButtonClick={() => console.log("Get Started clicked")}
            /> */}
            <ServiceCTA />

            {/* 9. FAQ Section */}
            <ServiceInsights
                id="insights"
                title={data.insights.title}
                tabs={data.insights.tabs}
            />

            {/* 10. Call To Action Section */}
            <ServiceFAQ
                id="faq"
                title={data.faq.title}
                subtitle={data.faq.subtitle}
                items={data.faq.items}
            />

            {/* 11. Footer Section */}
            <Footer />
        </div>
    );
};

export default Page;
