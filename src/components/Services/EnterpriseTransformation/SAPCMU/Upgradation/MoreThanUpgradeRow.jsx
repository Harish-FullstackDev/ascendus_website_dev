"use client";
import React from "react";
import TwoColumnFeatureRow from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/TwoColumnFeatureRow";
import upgradeImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 2147239434.jpg";

const MoreThanUpgradeRow = () => (
  <section className="relative overflow-hidden bg-white py-14 sm:py-16">
    <TwoColumnFeatureRow
      heading="More Than an Upgrade"
      image={upgradeImage}
      imageAlt="More Than an Upgrade"
      imageShape="wide"
      reverse
      paragraphs={[
        "A successful upgrade is an opportunity to improve how your business operates. We help organizations modernize their SAP landscape while enhancing performance, simplifying system management, and preparing for continuous innovation.",
      ]}
    />
  </section>
);

export default MoreThanUpgradeRow;
