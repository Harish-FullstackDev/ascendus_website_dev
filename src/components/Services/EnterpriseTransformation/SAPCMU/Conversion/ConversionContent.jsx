"use client";
import React from "react";
import ConversionIntro from "./ConversionIntro";
import ReadinessAssessmentPanel from "./ReadinessAssessmentPanel";
import ConversionFramework from "./ConversionFramework";
import BusinessScenarios from "./BusinessScenarios";
import BusinessOutcomes from "./BusinessOutcomes";
import UpgradeValueAccordion from "@/components/Services/EnterpriseTransformation/SAPCMU/Upgradation/UpgradeValueAccordion";
import ConversionInsights from "./ConversionInsights";
import BusinessContinuityBanner from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/BusinessContinuityBanner";
import CMUFinalCTA from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/CMUFinalCTA";

const ConversionContent = () => (
  <>
    <ConversionIntro />
    <ReadinessAssessmentPanel />
    <ConversionFramework />
    <BusinessContinuityBanner
      title="Designed Around Business Continuity"
      description="A successful conversion is one your business hardly notices. We carefully plan every stage of the project to reduce downtime, maintain operational stability, and ensure your teams can continue working with confidence throughout the transformation."
    />
    <BusinessScenarios />
    <BusinessOutcomes />
    <UpgradeValueAccordion />
    <ConversionInsights />
    <CMUFinalCTA
      heading="Streamline your Business with Rise with"
      highlight="SAP Today"
      subheading="Ready to Transform Your Business?"
      description="Let's Build innovative Solution that drive growth efficiency for your Business"
    />
  </>
);

export default ConversionContent;
