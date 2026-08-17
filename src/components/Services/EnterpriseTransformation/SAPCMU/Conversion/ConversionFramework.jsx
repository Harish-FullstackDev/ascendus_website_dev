"use client";
import React from "react";
import ProcessStepper from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/ProcessStepper";
import bannerImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Frame 1000004025.jpg";

const STEPS = [
  {
    label: "Discover",
    description: "Evaluate your current security posture, risks, and compliance requirements.",
  },
  {
    label: "Assess",
    description: "Implement preventive controls across applications, infrastructure, users, and data.",
  },
  {
    label: "Prepare",
    description: "Continuously monitor systems to identify threats, anomalies, and security events in real time.",
  },
  {
    label: "Convert",
    description: "Contain incidents quickly through structured response plans and expert security support.",
  },
  {
    label: "Optimize",
    description: "Restore business operations while maintaining data integrity and operational resilience.",
  },
];

const ConversionFramework = () => (
  <ProcessStepper
    heading="Our Conversion Framework"
    description="Evaluate your business processes, identify ERP requirements, and define a roadmap for cloud ERP adoption."
    steps={STEPS}
    backgroundImage={bannerImage}
  />
);

export default ConversionFramework;
