"use client";

import React, { useEffect, useState } from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
import backgroundImage from "@/assets/Insights/CaseStudies_Hero.webp";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default function CaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchCaseStudies = async () => {
            try {
                const data = await getAllCaseStudies();
                if (isMounted) setCaseStudies(data);
            } catch (err) {
                console.error("Error fetching case studies:", err.message);
                if (isMounted) setCaseStudies([]);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchCaseStudies();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <InsightsListing
            items={caseStudies}
            loading={loading}
            basePath="/case-studies"
            backgroundImage={backgroundImage}
            subtitle="Proven Outcomes"
            title="Case Studies"
            description="Real Solutions. Measurable Impact. Built For Enterprise Transformation."
            highlights={[
                "Real-world SAP transformations",
                "Measurable business outcomes",
                "Cross-industry expertise",
                "Proven migration frameworks",
                "Client-validated results",
            ]}
            emptyStateText="No case studies published yet. Please check back soon."
        />
    );
}
