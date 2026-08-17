"use client";
import React from "react";
import TwoColumnFeatureRow from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/TwoColumnFeatureRow";
import heroImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/image 46.jpg";

const UpgradationIntro = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20">
    <TwoColumnFeatureRow
      heading="Stay Current. Stay Competitive."
      image={heroImage}
      imageAlt="Stay Current. Stay Competitive."
      imageShape="wide"
      paragraphs={[
        "An outdated SAP system can slow innovation, increase maintenance efforts, and limit your ability to adopt new business capabilities. Upgrading your SAP environment ensures your business remains agile, secure, and ready for future opportunities.",
        "With Ascendus, every upgrade is planned around your business priorities — not just technical requirements.",
      ]}
    />
  </section>
);

export default UpgradationIntro;
