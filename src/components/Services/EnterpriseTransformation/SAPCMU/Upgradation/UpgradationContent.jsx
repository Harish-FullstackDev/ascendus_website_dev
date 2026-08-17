"use client";
import React from "react";
import UpgradationIntro from "./UpgradationIntro";
import MoreThanUpgradeRow from "./MoreThanUpgradeRow";
import UpgradationServices from "./UpgradationServices";
import UpgradeJourneyCycle from "./UpgradeJourneyCycle";
import UpgradeChallengesBadges from "./UpgradeChallengesBadges";
import UpgradeValueAccordion from "./UpgradeValueAccordion";
import UpgradationInsights from "./UpgradationInsights";
import CMUFinalCTA from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/CMUFinalCTA";

const UpgradationContent = () => (
  <>
    <UpgradationIntro />
    <MoreThanUpgradeRow />
    <UpgradationServices />
    <UpgradeJourneyCycle />
    <UpgradeChallengesBadges />
    <UpgradeValueAccordion />
    <UpgradationInsights />
    <CMUFinalCTA
      heading="Ready to Upgrade Your"
      highlight="SAP Environment?"
      subheading="Ready to Transform Your Business?"
      description="Let's Build innovative Solution that drive growth efficiency for your Business"
    />
  </>
);

export default UpgradationContent;
