"use client";
import React from "react";
import TransformationInsightsGrid from "@/components/Services/EnterpriseTransformation/TransformationInsightsGrid";

import img1 from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/61e9bd108e81e2a8397042b447c5b8650ba6b2ab.jpg";
import img2 from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/dd4aff3b6088f8ce073d9ec38ce1b5ee2c2d7987.jpg";
import img3 from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/f6a7c3ef4e86624ccac679cea6c9b0056cfb3949.jpg";
import img4 from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/7dbcc528d29b605571faf3c9c0f8c0e358906617.jpg";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Cloud Migration Without the Downtime",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img1,
    overlay: "bg-black/55",
    content: [
      "The biggest risk in any SAP migration isn't the technology — it's the cutover window. Organizations that plan migration waves around business-critical periods see dramatically fewer disruptions.",
      "This report breaks down the phased-wave approach Ascendus uses to migrate large SAP landscapes to the cloud with minimal business downtime.",
    ],
    highlights: [
      "A phased-wave migration planning framework",
      "How to sequence cutover around business-critical periods",
      "Rollback strategies that reduce go-live risk",
    ],
  },
  {
    eyebrow: "Playbook",
    title: "Landscape Consolidation, Simplified",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img2,
    overlay: "bg-black/50",
    content: [
      "Years of acquisitions and regional rollouts often leave enterprises running duplicate SAP systems with inconsistent processes. Consolidation reduces cost — but only when sequenced correctly.",
      "We share the assessment criteria Ascendus uses to decide which systems to merge first, and how to migrate data without losing historical traceability.",
    ],
    highlights: [
      "A scoring model for consolidation sequencing",
      "Data mapping strategies across disparate systems",
      "Change management tactics for merged business units",
    ],
  },
  {
    eyebrow: "Research Report",
    title: "Infrastructure Modernization for SAP Workloads",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img3,
    overlay: "bg-black/45",
    content: [
      "Modern SAP workloads demand infrastructure that can scale on-demand, recover quickly, and meet stricter compliance requirements than most legacy data centers were designed for.",
      "This report covers the infrastructure decisions — compute, storage, networking, and DR — that most affect performance and reliability after migration.",
    ],
    highlights: [
      "A checklist for evaluating cloud infrastructure providers",
      "Disaster recovery patterns for SAP workloads",
      "Cost modeling for right-sized infrastructure",
    ],
  },
  {
    eyebrow: "Event",
    title: "Data Integrity in Large-Scale Migrations",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    image: img4,
    overlay: "bg-black/40",
    content: [
      "Data migrated without validation is a liability, not an asset. Reconciliation has to be built into the migration plan from day one, not bolted on before go-live.",
      "In this session recap, Ascendus' data migration leads share the reconciliation framework used to validate historical and transactional data across every migration wave.",
    ],
    highlights: [
      "A data reconciliation framework for migration waves",
      "Common data-loss failure points and how to catch them",
      "Templates for sign-off across business and IT stakeholders",
    ],
  },
];

const MigrationInsights = () => (
  <TransformationInsightsGrid
    gridId="cmu-migration"
    heading="GROW Transformation Insights"
    description="Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap"
    cards={INSIGHTS}
    columns={2}
    revealOnHover
  />
);

export default MigrationInsights;
