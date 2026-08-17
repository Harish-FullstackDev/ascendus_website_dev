"use client";
import React from "react";
import MigrationIntro from "./MigrationIntro";
import MigrationDecisionRow from "./MigrationDecisionRow";
import MovingBeyondInfraRow from "./MovingBeyondInfraRow";
import BusinessContinuityBanner from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/BusinessContinuityBanner";
import MigrationServices from "./MigrationServices";
import MigrationFramework from "./MigrationFramework";
import WhatWeHelpMigrate from "./WhatWeHelpMigrate";
import MigrationChallenges from "./MigrationChallenges";
import MigrationInsights from "./MigrationInsights";
import CMUFinalCTA from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/CMUFinalCTA";

const MigrationContent = () => (
  <>
    <MigrationDecisionRow />
    <MovingBeyondInfraRow />
    <BusinessContinuityBanner
      title="Designed Around Business Continuity"
      description="A successful migration is one your business hardly notices. We carefully plan every stage of the project to reduce downtime, maintain operational stability, and ensure your teams can continue working with confidence throughout the transformation."
    />
    <MigrationServices />
    <MigrationFramework />
    <WhatWeHelpMigrate />
    <MigrationChallenges />
    <MigrationInsights />
    <CMUFinalCTA
      heading="Streamline your Business with GROW with"
      highlight="SAP Today"
      subheading="Ready to Transform Your Business?"
      description="Let's Build innovative Solution that drive growth efficiency for your Business"
    />
  </>
);

export default MigrationContent;
