"use client";

import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import Insight1Img from "@/assets/Service/Artificial Intelligence/Gen AI/insight-1.png";
import Insight2Img from "@/assets/Service/Artificial Intelligence/Gen AI/insight-2.png";
import Insight3Img from "@/assets/Service/Artificial Intelligence/Gen AI/insight-3.png";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking Content Creation with Generative AI",
    description:
      "Evaluate your current content and knowledge workflows, identify automation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight1Img,
    overlay: "bg-black/60",
    content: [
      "Every business runs on documents — proposals, reports, communications, and knowledge that used to take hours to produce. Generative AI collapses that time without collapsing quality, when it's introduced with the right guardrails.",
      "This report walks through how organizations are piloting generative content workflows across marketing, sales, and operations, and the governance model that keeps output consistent and on-brand.",
    ],
    highlights: [
      "A framework for identifying high-value content workflows",
      "How to maintain brand and quality consistency at scale",
      "A phased rollout plan from pilot to enterprise-wide use",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "Turning Enterprise Knowledge into Instant Answers",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight2Img,
    overlay: "bg-black/55",
    content: [
      "Most enterprise knowledge is locked inside documents, wikis, and systems that employees don't have time to search. Generative AI turns that knowledge into a natural-language interface anyone on the team can use.",
      "We break down the retrieval and grounding approach Ascendus uses to make knowledge discovery accurate and trustworthy, including how to keep answers tied to verified enterprise sources.",
    ],
    highlights: [
      "A blueprint for grounding AI answers in enterprise data",
      "Common accuracy pitfalls and how to avoid them",
      "How to measure adoption and time saved",
    ],
  },
  {
    eyebrow: "Event",
    title: "Scaling Generative AI Across the Enterprise",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: Insight3Img,
    overlay: "bg-black/45",
    content: [
      "Moving from a single successful pilot to enterprise-wide adoption is where most generative AI initiatives stall. The gap is rarely the model — it's operating model, governance, and change management.",
      "In this session recap, Ascendus' AI delivery leads share the scaling playbook used with clients to move generative AI from one team's experiment to a capability the whole business relies on.",
    ],
    highlights: [
      "A scaling playbook from pilot to enterprise rollout",
      "How to structure ownership across business and IT",
      "Q&A highlights from the live session",
    ],
  },
];

const Insights = () => (
  <TransformationInsightsGrid
    gridId="gen-ai"
    heading="Enterprise Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={3}
    revealOnHover
  />
);

export default Insights;
