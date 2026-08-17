"use client";
import React from "react";
import RollOutGrowthRow from "./RollOutGrowthRow";
import RollOutScaleRow from "./RollOutScaleRow";
import BusinessContinuityBanner from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/BusinessContinuityBanner";
import RollOutAICapabilities from "./RollOutAICapabilities";
import RollOutFramework from "./RollOutFramework";
import WhereWeCreateValue from "./WhereWeCreateValue";
import RollOutInsights from "./RollOutInsights";
import CMUFinalCTA from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/CMUFinalCTA";

const RollOutContent = () => (
  <>
    <RollOutGrowthRow />
    <RollOutScaleRow />
    <BusinessContinuityBanner
      title="Designed Around Business Continuity"
      description="A successful rollout is one your business hardly notices. We carefully plan every stage of the project to reduce downtime, maintain operational stability, and ensure your teams can continue working with confidence throughout the expansion."
    />
    <RollOutAICapabilities />
    <RollOutFramework />
    <WhereWeCreateValue />
    <RollOutInsights />
    <CMUFinalCTA
      heading="Ready to Upgrade Your"
      highlight="SAP Environment?"
      subheading="Ready to Transform Your Business?"
      description="Let's Build innovative Solution that drive growth efficiency for your Business"
    />
  </>
);

export default RollOutContent;
