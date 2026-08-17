"use client";
import React from "react";
import TwoColumnFeatureRow from "@/components/Services/EnterpriseTransformation/SAPCMU/shared/TwoColumnFeatureRow";
import image46 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/image 46.jpg";

const ConversionIntro = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20">
    <TwoColumnFeatureRow
      eyebrow="Every SAP Landscape Has a Unique Path"
      heading="More Than a Technical Upgrade"
      image={image46}
      imageAlt="More Than a Technical Upgrade"
      imageShape="wide"
      paragraphs={[
        "There is no generic roadmap to the cloud.",
        "Whether you choose a clean core greenfield start, a brownfield system conversion, or a hybrid selective data transition, we help you identify the right approach.",
        "Ascendus guides you through the complex decisions to minimize disruption and maximize value.",
      ]}
    />
  </section>
);

export default ConversionIntro;
