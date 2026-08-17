"use client";
import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import img1 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Image-2.jpg";
import img2 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Image-3.jpg";
import img3 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/image 46.jpg";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img1,
    overlay: "bg-black/55",
    content: [
      "Brownfield conversions fail more often from unmanaged custom code and unclear scope than from the technology itself. A structured readiness assessment surfaces these risks before they become go-live blockers.",
      "This report walks through how mid-market and enterprise SAP customers are sequencing their move to S/4HANA — from custom code remediation to data cleansing — without disrupting daily operations.",
    ],
    highlights: [
      "A readiness checklist for brownfield conversions",
      "How to scope and remediate custom code early",
      "Sequencing conversion phases without downtime",
    ],
  },
  {
    eyebrow: "Playbook",
    title: "Why Conversions Fail Without a Readiness Assessment",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img2,
    overlay: "bg-black/50",
    content: [
      "Most conversion overruns trace back to the same root cause: the assessment phase was rushed or skipped. Technical debt and undocumented customizations surface mid-project instead of before it starts.",
      "We outline the five-part readiness assessment Ascendus runs with every conversion client, and the risk indicators that predict a delayed go-live.",
    ],
    highlights: [
      "The five pillars of conversion readiness",
      "Common technical debt patterns in legacy ECC systems",
      "Early risk indicators finance and IT leaders should track",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "The Business Case for a Clean Core",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img3,
    overlay: "bg-black/45",
    content: [
      "A clean core isn't just an SAP best practice — it's what makes every future upgrade, extension, and AI capability faster and cheaper to adopt.",
      "This report breaks down how to evaluate your current customizations against clean-core principles, and the sequencing decisions that keep a conversion project on schedule.",
    ],
    highlights: [
      "A framework for auditing existing customizations",
      "How clean core reduces future upgrade costs",
      "Sample governance model for post-conversion extensibility",
    ],
  },
];

const ConversionInsights = () => (
  <TransformationInsightsGrid
    gridId="cmu-conversion"
    heading="RISE with SAP Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={3}
    revealOnHover
  />
);

export default ConversionInsights;
