"use client";

import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import Insight1Img from "@/assets/Service/Artificial Intelligence/Business AI/insight-1.png";
import Insight2Img from "@/assets/Service/Artificial Intelligence/Business AI/insight-2.png";
import Insight3Img from "@/assets/Service/Artificial Intelligence/Business AI/insight-3.png";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking Everyday Work with Business AI",
    description:
      "Evaluate your current business processes, identify automation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight1Img,
    overlay: "bg-black/60",
    content: [
      "The biggest gains from Business AI rarely come from a single flagship project — they come from embedding intelligence into the everyday tasks every department already does.",
      "This report walks through how organizations are identifying the highest-value everyday workflows to automate first, and the operating model that keeps AI adoption sustainable across departments.",
    ],
    highlights: [
      "A framework for prioritizing everyday automation opportunities",
      "How to sequence rollout across business functions",
      "Metrics that prove AI value beyond the pilot stage",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "Connecting Data Across the Enterprise",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight2Img,
    overlay: "bg-black/55",
    content: [
      "Business AI is only as good as the data behind it. Disconnected systems and inconsistent data are the most common reason AI initiatives underdeliver.",
      "We break down the data integration approach Ascendus uses to connect SAP, CRM, and enterprise applications so AI recommendations are grounded in a single, trusted view of the business.",
    ],
    highlights: [
      "A blueprint for connecting enterprise data sources",
      "Common data quality pitfalls and how to avoid them",
      "How to govern access while keeping data usable",
    ],
  },
  {
    eyebrow: "Event",
    title: "Scaling Business AI Across Departments",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight3Img,
    overlay: "bg-black/45",
    content: [
      "Moving Business AI from one successful department to the whole enterprise is where most initiatives stall — not because the technology fails, but because there's no shared playbook for adoption.",
      "In this session recap, Ascendus' AI delivery leads share the scaling approach used with clients to expand Business AI from a single team's win to a capability the whole organization relies on.",
    ],
    highlights: [
      "A scaling playbook from single department to enterprise",
      "How to structure ownership across business and IT",
      "Q&A highlights from the live session",
    ],
  },
];

const Insights = () => (
  <TransformationInsightsGrid
    gridId="business-ai"
    heading="Enterprise Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={3}
    revealOnHover
    cardHeightClass="h-[340px] sm:h-[400px] lg:h-[465px]"
  />
);

export default Insights;
