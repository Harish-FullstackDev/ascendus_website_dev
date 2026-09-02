"use client";

import React from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
// import backgroundImage from "../../../../public/AboutPage/hero-background.jpg";
import backgroundImage from "@/assets/Industry-Reports.jpg";
import { industryReportsData } from "@/data/industryReportsData";

export default function IndustryReportsPage() {
    return (
        <InsightsListing
            items={industryReportsData}
            basePath="/industry-reports"
            backgroundImage={backgroundImage}
            subtitle="Market Intelligence"
            title="Industry Reports"
            description="Benchmark data and market analysis on SAP adoption, cloud infrastructure spending, cybersecurity threats, and AI adoption across the industries we serve."
            highlights={[
                "Global benchmark data",
                "Cross-industry analysis",
                "Annual research cadence",
                "Actionable market outlook",
            ]}
            emptyStateText="No industry reports published yet. Please check back soon."
        />
    );
}
