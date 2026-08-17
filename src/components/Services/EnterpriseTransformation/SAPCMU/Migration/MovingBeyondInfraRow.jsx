"use client";
import React from "react";
import TwoColumnFeatureRow from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/TwoColumnFeatureRow";
import infraImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/1774ea82ac2ed2bb9dc0a8ba6b27b38b6dd73659.jpg";

const MovingBeyondInfraRow = () => (
  <section className="relative overflow-hidden bg-white py-14 sm:py-16">
    <TwoColumnFeatureRow
      eyebrow="Moving Beyond Infrastructure"
      heading="Transform Your Business with Confidence"
      image={infraImage}
      imageAlt="Moving Beyond Infrastructure"
      imageShape="wide"
      paragraphs={[
        "A successful migration isn't measured by how quickly systems move — it's measured by how seamlessly your business continues to operate.",
        "Our migration approach focuses on maintaining business continuity while creating a stronger, more agile SAP landscape.",
      ]}
    />
  </section>
);

export default MovingBeyondInfraRow;
