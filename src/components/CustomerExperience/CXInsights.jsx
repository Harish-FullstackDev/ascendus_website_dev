"use client";

import React from "react";

import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import Insight1Img from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-1.png";
import Insight2Img from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-2.png";
import Insight3Img from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-3.png";


const INSIGHTS = [
  {
    eyebrow: "Customer Journey",
    title: "Creating Connected Customer Journeys",
    description:
      "Understand every customer interaction, identify opportunities, and design experiences that build stronger relationships.",
    image: Insight1Img,
    overlay: "bg-black/60",
    content: [
      "Customers interact with businesses across multiple touchpoints, and every interaction shapes their overall experience.",
      "Ascendus helps organizations map customer journeys, identify friction points, and create connected experiences that improve engagement and satisfaction.",
    ],
    highlights: [
      "Identify critical customer touchpoints",
      "Improve journey visibility across channels",
      "Create seamless customer experiences",
    ],
  },

  {
    eyebrow: "Customer Analytics",
    title: "Turning Customer Data Into Business Insights",
    description:
      "Transform customer information into actionable intelligence that improves decisions and personalization.",
    image: Insight2Img,
    overlay: "bg-black/55",
    content: [
      "Customer data provides valuable insights into preferences, behaviors, and expectations.",
      "Ascendus enables organizations to use customer analytics to understand audiences better, personalize interactions, and improve business outcomes.",
    ],
    highlights: [
      "Analyze customer behavior patterns",
      "Enable data-driven personalization",
      "Improve customer satisfaction through insights",
    ],
  },

  {
    eyebrow: "Customer Engagement",
    title: "Building Meaningful Customer Connections",
    description:
      "Deliver personalized interactions across channels that strengthen relationships and increase loyalty.",
    image: Insight3Img,
    overlay: "bg-black/45",
    content: [
      "Modern customers expect relevant, consistent, and personalized experiences across every channel.",
      "Ascendus helps businesses build engagement strategies that connect customers with the right message at the right time.",
    ],
    highlights: [
      "Personalized customer interactions",
      "Omnichannel engagement strategies",
      "Stronger customer loyalty and retention",
    ],
  },
];

const CXInsights = () => {
  return (
    <TransformationInsightsGrid
      gridId="customer-experience"
      heading="Customer Experience Insights"
      description="Discover how CRM, analytics, journey mapping, and engagement solutions help organizations create memorable customer experiences."
      cards={INSIGHTS}
      columns={3}
      revealOnHover
    />
  );
};

export default CXInsights;