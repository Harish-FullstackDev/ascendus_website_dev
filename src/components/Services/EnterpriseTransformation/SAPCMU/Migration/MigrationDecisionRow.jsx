"use client";
import React from "react";
import TwoColumnFeatureRow from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/TwoColumnFeatureRow";
import decisionImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/5d85b116c48b9bb8fabad3f44f37c5cbc38b7d42.jpg";

const MigrationDecisionRow = () => (
  <section className="relative overflow-hidden bg-white py-14 sm:py-16">
    <TwoColumnFeatureRow
      heading="Every Migration Is a Business Decision"
      image={decisionImage}
      imageAlt="Every Migration Is a Business Decision"
      imageShape="wide"
      reverse
      paragraphs={[
        "Migration is more than moving systems from one environment to another. It's an opportunity to improve performance, simplify operations, and prepare your business for future growth.",
        "Whether you're moving to the cloud, consolidating systems, or modernizing your infrastructure, Ascendus ensures every migration is aligned with your business objectives.",
      ]}
    />
  </section>
);

export default MigrationDecisionRow;
