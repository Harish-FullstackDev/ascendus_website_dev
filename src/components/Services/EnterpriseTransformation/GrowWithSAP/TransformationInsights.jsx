"use client";
import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import img1 from "@/assets/Service/Enterprise Transformation/Grow with SAP/b58611d0e6a9fa43a58c6a4cecdf5901b014550e.jpg";
import img2 from "@/assets/Service/Enterprise Transformation/Grow with SAP/6c71930d399220f6200955e9afea1593c1a8c2ea.jpg";
import img3 from "@/assets/Service/Enterprise Transformation/Grow with SAP/45e9112d059f2482d4fa5ecd00111d642caced70.jpg";
import img4 from "@/assets/Service/Enterprise Transformation/Grow with SAP/4040478425cd15af9bc88c6dc8bdcec51813bf20.png";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img1,
    overlay: "bg-black/60",
    content: [
      "Legacy ERP systems were built for a world of on-premise infrastructure and annual planning cycles. Today's businesses need real-time visibility and the ability to adapt in weeks, not years.",
      "This report walks through how fast-growing and mid-market enterprises are re-platforming onto cloud ERP without disrupting day-to-day operations, and the metrics that matter most when building your business case.",
    ],
    highlights: [
      "Benchmarks from 200+ cloud ERP transformations",
      "A readiness checklist for digital-first operations",
      "How to sequence migration without downtime",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "Building a Business Case for Cloud ERP",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img2,
    overlay: "bg-black/50",
    content: [
      "Securing budget for an ERP transformation requires more than a feature comparison — it requires a clear line from investment to business outcome.",
      "We break down the total cost of ownership model for GROW with SAP against legacy on-premise systems, including hidden costs most teams miss during planning.",
    ],
    highlights: [
      "A ready-to-use TCO comparison framework",
      "Common objections from finance leaders, answered",
      "Sample ROI timeline for a 10-week rollout",
    ],
  },
  {
    eyebrow: "Event",
    title: "The Roadmap to Intelligent Enterprise",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img3,
    overlay: "bg-black/45",
    content: [
      "Every intelligent enterprise journey starts with a single decision point: modernize incrementally, or transform end-to-end. Neither answer is universally right.",
      "In this session recap, Ascendus' transformation leads share the decision framework used with clients to choose the right path, and how to avoid the most common rollout pitfalls.",
    ],
    highlights: [
      "A framework for choosing your transformation path",
      "Lessons from real GROW with SAP rollouts",
      "Q&A highlights from the live session",
    ],
  },
  {
    eyebrow: "Playbook",
    title: "Accelerating Time-to-Value with GROW",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img4,
    overlay: "bg-black/30",
    content: [
      "Speed matters. The organizations that get the most from GROW with SAP treat the first 90 days as a sprint, not a slow ramp — with clear owners for every workstream.",
      "This playbook outlines the week-by-week cadence Ascendus uses to take clients from kickoff to go-live, and the early warning signs that a timeline is at risk.",
    ],
    highlights: [
      "A week-by-week implementation cadence",
      "Early warning signs of scope creep",
      "Templates for stakeholder status updates",
    ],
  },
];

const TransformationInsights = () => (
  <TransformationInsightsGrid
    gridId="grow"
    heading="GROW Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={2}
    revealOnHover={false}
  />
);

export default TransformationInsights;
