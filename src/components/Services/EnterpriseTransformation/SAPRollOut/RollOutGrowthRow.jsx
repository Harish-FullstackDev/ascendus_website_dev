"use client";
import React from "react";
import TwoColumnFeatureRow from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/TwoColumnFeatureRow";
import growthImage from "@/assets/Service/Enterprise Transformation/SAP Rollout/growth-strategy.jpg";

const RollOutGrowthRow = () => (
  <section className="relative overflow-hidden bg-white py-14 sm:py-16">
    <TwoColumnFeatureRow
      heading="Growth Needs a Repeatable Strategy"
      image={growthImage}
      imageAlt="Growth Needs a Repeatable Strategy"
      imageShape="wide"
      paragraphs={[
        "Business expansion brings new opportunities — but it also introduces new processes, regional requirements, and operational complexities.",
        "A successful SAP rollout ensures every new business unit, plant, office, or country operates on the same trusted ERP foundation while adapting to local business needs.",
      ]}
    />
  </section>
);

export default RollOutGrowthRow;
