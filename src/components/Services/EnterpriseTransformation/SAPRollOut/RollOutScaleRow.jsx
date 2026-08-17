"use client";
import React from "react";
import TwoColumnFeatureRow from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/TwoColumnFeatureRow";
import scaleImage from "@/assets/Service/Enterprise Transformation/SAP Rollout/scale-without-starting-over.jpg";

const RollOutScaleRow = () => (
  <section className="relative overflow-hidden bg-white py-14 sm:py-16">
    <TwoColumnFeatureRow
      heading="Scale Without Starting Over"
      image={scaleImage}
      imageAlt="Scale Without Starting Over"
      imageShape="wide"
      reverse
      paragraphs={[
        "Your existing SAP template already reflects your business best practices. Instead of building a new solution for every location, we replicate, localize, and optimize your ERP landscape for faster deployment and consistent operations.",
        "Every rollout becomes an extension of your enterprise — not a separate implementation.",
      ]}
    />
  </section>
);

export default RollOutScaleRow;
