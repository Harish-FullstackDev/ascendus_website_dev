"use client";

import React, { useEffect, useState } from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
import backgroundImage from "@/assets/Insights/Whitepapers_hero.webp";
import { getAllWhitepapers } from "@/lib/whitepapers";

export default function WhitepapersPage() {
    const [whitepapers, setWhitepapers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchWhitepapers = async () => {
            try {
                const data = await getAllWhitepapers();
                if (isMounted) setWhitepapers(data);
            } catch (err) {
                console.error("Error fetching whitepapers:", err.message);
                if (isMounted) setWhitepapers([]);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchWhitepapers();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <InsightsListing
            items={whitepapers}
            loading={loading}
            basePath="/whitepapers"
            backgroundImage={backgroundImage}
            subtitle="Executive Research"
            title="Whitepapers"
            description="In-Depth Research And Frameworks For Enterprise Decision Makers."
            highlights={[
                "Executive-ready frameworks",
                "SAP & enterprise transformation research",
                "Data-backed recommendations",
                "Downloadable reference guides",
            ]}
            emptyStateText="No whitepapers published yet. Please check back soon."
        />
    );
}
