"use client";
import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import img1 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/source/0e4a490fb1bd6a4d89ddde5f1ecc53ec0b0ab819.jpg";
import img2 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/source/76c366bdff37628080e0b81f8aafede198820327.jpg";
import img3 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/source/ec4716452c12ac83ae2b9ad0232c402b.jpg";
import img4 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/source/cf1b6aabeca0bcf3efa2970fcb806374.jpg";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "When to Upgrade vs. When to Convert",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img1,
    overlay: "bg-black/50",
    content: [
      "Not every aging SAP system needs a full conversion. In many cases, a targeted upgrade unlocks the performance and feature gains a business needs at a fraction of the cost and risk.",
      "This report walks through the decision criteria Ascendus uses to recommend an upgrade path versus a full S/4HANA conversion, based on system age, customization footprint, and business goals.",
    ],
    highlights: [
      "A decision framework: upgrade vs. convert",
      "Cost and timeline comparisons for both paths",
      "Warning signs that a system has outgrown an upgrade",
    ],
  },
  {
    eyebrow: "Playbook",
    title: "Zero-Downtime Upgrades in Practice",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img2,
    overlay: "bg-black/45",
    content: [
      "Downtime-sensitive businesses can't afford a traditional upgrade window. Near-zero downtime techniques have matured enough to make this the default expectation for most upgrade projects.",
      "We outline the technical approach and change-management practices Ascendus uses to keep systems online throughout an upgrade.",
    ],
    highlights: [
      "An overview of near-zero downtime upgrade techniques",
      "Pre-upgrade testing checklist",
      "Communication templates for stakeholder rollout",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "Custom Code Debt and the Cost of Waiting",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img3,
    overlay: "bg-black/50",
    content: [
      "Every release cycle a system goes unpatched, custom code debt compounds and upgrade costs climb. Waiting rarely reduces risk — it just defers and enlarges it.",
      "This report quantifies the cost curve of delayed upgrades and shares a prioritization model for tackling custom code debt before it blocks your next upgrade.",
    ],
    highlights: [
      "A cost model for delayed upgrade cycles",
      "How to prioritize custom code remediation",
      "Governance practices that prevent debt from re-accumulating",
    ],
  },
  {
    eyebrow: "Event",
    title: "Post-Upgrade: Where the Real Value Is Won",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img4,
    overlay: "bg-black/40",
    content: [
      "Go-live isn't the finish line. The businesses that get the most from an upgrade treat the weeks after go-live as an active optimization phase, not a wind-down.",
      "In this session recap, Ascendus' upgrade leads share the post-go-live stabilization and optimization checklist used across enterprise upgrade engagements.",
    ],
    highlights: [
      "A 30/60/90-day post-upgrade optimization plan",
      "Performance tuning checklist after go-live",
      "How to capture and report on realized business value",
    ],
  },
];

const UpgradationInsights = () => (
  <TransformationInsightsGrid
    gridId="cmu-upgradation"
    heading="GROW Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={2}
    revealOnHover
  />
);

export default UpgradationInsights;
