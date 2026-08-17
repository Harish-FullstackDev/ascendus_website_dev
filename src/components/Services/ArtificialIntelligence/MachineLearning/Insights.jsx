"use client";

import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import Insight1Img from "@/assets/Service/Artificial Intelligence/Machine Learning/insight-1.png";
import Insight2Img from "@/assets/Service/Artificial Intelligence/Machine Learning/insight-2.png";
import Insight3Img from "@/assets/Service/Artificial Intelligence/Machine Learning/insight-3.png";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking Forecasting with Machine Learning",
    description:
      "Evaluate your current forecasting and planning processes, identify prediction opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight1Img,
    overlay: "bg-black/60",
    content: [
      "Traditional forecasting relies on historical averages and manual adjustment — a method that breaks down the moment market conditions shift. Machine learning models learn from far more signal than a spreadsheet ever could.",
      "This report walks through how organizations are replacing static forecasting with predictive models, and the data foundations needed before a model can be trusted with real planning decisions.",
    ],
    highlights: [
      "A framework for assessing forecasting model readiness",
      "How to validate predictions before trusting them in planning",
      "A phased rollout plan from pilot forecast to production",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "Building Trust in Predictive Models",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight2Img,
    overlay: "bg-black/55",
    content: [
      "A model that's accurate in a lab but distrusted by the business never delivers value. Adoption depends as much on explainability and governance as it does on raw predictive accuracy.",
      "We break down the model validation and monitoring approach Ascendus uses to keep predictions accurate, explainable, and aligned with the business questions they're meant to answer.",
    ],
    highlights: [
      "A checklist for model explainability and stakeholder trust",
      "Common accuracy pitfalls and how to catch model drift",
      "How to measure business impact, not just model metrics",
    ],
  },
  {
    eyebrow: "Event",
    title: "Scaling Machine Learning Across the Enterprise",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight3Img,
    overlay: "bg-black/45",
    content: [
      "Most machine learning initiatives stall after the first successful model — not because the technology fails, but because there's no repeatable path from pilot to production across the business.",
      "In this session recap, Ascendus' data science leads share the operating model used with clients to move machine learning from a single use case to a capability multiple teams can rely on.",
    ],
    highlights: [
      "A scaling playbook from pilot model to enterprise rollout",
      "How to structure ownership across data science and IT",
      "Q&A highlights from the live session",
    ],
  },
];

const Insights = () => (
  <TransformationInsightsGrid
    gridId="machine-learning"
    heading="Enterprise Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={3}
    revealOnHover
    cardHeightClass="h-[300px] sm:h-[360px] lg:h-[464px]"
  />
);

export default Insights;
