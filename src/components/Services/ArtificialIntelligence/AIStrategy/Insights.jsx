"use client";

import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import Insight1Img from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-1.png";
import Insight2Img from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-2.png";
import Insight3Img from "@/assets/Service/Artificial Intelligence/AI Strategy/insight-3.png";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight1Img,
    overlay: "bg-black/60",
    content: [
      "Legacy ERP systems weren't built with AI in mind — they were built for structured transactions, not intelligent decisions. Bringing AI into the picture means rethinking how data flows through the enterprise, not just bolting a model onto an existing process.",
      "This report walks through how organizations are assessing their current ERP landscape to identify where AI can create the most business impact, and how to sequence that work into a roadmap leadership can actually commit to.",
    ],
    highlights: [
      "A framework for auditing ERP data readiness for AI",
      "How to prioritize use cases by business impact",
      "A phased roadmap template aligned to business objectives",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "Aligning AI Investments with Business Outcomes",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight2Img,
    overlay: "bg-black/55",
    content: [
      "The organizations that see the most from AI aren't the ones with the most models in production — they're the ones that tied every investment to a measurable business outcome from day one.",
      "We break down the assessment criteria Ascendus uses to score AI opportunities against business value, cost, and organizational readiness, so investment decisions are grounded in outcomes rather than hype.",
    ],
    highlights: [
      "A scoring model for prioritizing AI use cases",
      "Common pitfalls that stall AI investment approval",
      "Sample business-case template for stakeholder buy-in",
    ],
  },
  {
    eyebrow: "Event",
    title: "Building Organizational Readiness for AI",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight3Img,
    overlay: "bg-black/45",
    content: [
      "AI adoption fails more often on people and process than on technology. Preparing an organization to adopt AI at scale means addressing governance, skills, and change management well before go-live.",
      "In this session recap, Ascendus' AI strategy leads share the readiness framework used with clients to prepare teams, data, and governance for enterprise-wide AI adoption.",
    ],
    highlights: [
      "A readiness checklist spanning people, process, and data",
      "How to structure a responsible AI governance model",
      "Q&A highlights from the live session",
    ],
  },
];

const Insights = () => (
  <TransformationInsightsGrid
    gridId="ai-strategy"
    heading="Enterprise Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={3}
    revealOnHover
  />
);

export default Insights;
