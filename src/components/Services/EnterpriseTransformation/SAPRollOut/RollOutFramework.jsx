"use client";
import React from "react";
import ProcessStepper from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/ProcessStepper";

const STEPS = [
  {
    label: "Assess",
    description: "Evaluate your current SAP landscape, business processes, and regional requirements.",
  },
  {
    label: "Design",
    description: "Architect a rollout blueprint that extends your core template to local needs.",
  },
  {
    label: "Implement",
    description: "Configure and deploy the SAP template across the new business unit or country.",
  },
  {
    label: "Integrate",
    description: "Connect the new location with existing SAP systems, data, and reporting.",
  },
  {
    label: "Validate",
    description: "Test end-to-end processes, compliance, and data accuracy before go-live.",
  },
  {
    label: "Optimize",
    description: "Continuously refine performance, adoption, and governance after go-live.",
  },
];

const RollOutFramework = () => (
  <ProcessStepper
    heading="Our Rollout Framework"
    description="Transformation shouldn't end at Go-Live. The real impact begins afterward."
    steps={STEPS}
  />
);

export default RollOutFramework;
