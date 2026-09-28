"use client";

import React from "react";
import InsightsListing from "@/components/Insights/InsightsListing";
import backgroundImage from "@/assets/Industry-Reports.jpg";
import { sapInsightsData } from "@/data/sapInsightsData";

export default function SapInsightsPage() {
    return (
        <InsightsListing
            items={sapInsightsData}
            basePath="/sap-insights"
            backgroundImage={backgroundImage}
            subtitle="SAP Practice"
            title="SAP Insights"
            description="Practical guidance on SAP S/4HANA, RISE with SAP, SAP BTP and SuccessFactors from our SAP practice."
            highlights={[
                "Hands-on SAP practice notes",
                "S/4HANA and RISE guidance",
                "SAP BTP integration patterns",
                "Adoption and change management",
            ]}
            emptyStateText="No SAP insights published yet. Please check back soon."
        />
    );
}
