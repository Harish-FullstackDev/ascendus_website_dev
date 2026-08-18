"use client";

import React from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
// import backgroundImage from "../../../../public/blog/hero.jpg";
import backgroundImage from "@/assets/Insights/Whitepapers_hero.webp";
import { whitepapersData } from "@/data/whitepapersData";

export default function WhitepapersPage() {
    return (
        <InsightsListing
            items={whitepapersData}
            basePath="/whitepapers"
            backgroundImage={backgroundImage}
            subtitle="Thought Leadership"
            title="Whitepapers"
            description="Deep Insights Built To Guide Smarter Enterprise Decisions."
            highlights={[
                "Executive-ready frameworks",
                "Research-backed recommendations",
                "Practical implementation guidance",
                "Cross-industry perspectives",
            ]}
            emptyStateText="No whitepapers published yet. Please check back soon."
        />
    );
}
