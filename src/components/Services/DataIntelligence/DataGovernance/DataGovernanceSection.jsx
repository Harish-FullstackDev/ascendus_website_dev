"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import sideImage from "@/assets/Service/Data&Intelligence/Data Engineering/Image-1.jpg";

const FeatureRow = ({ title, body, imgLeft, index }) => {
  const img = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative h-[260px] w-full sm:h-[300px] sm:w-[400px] shrink-0 overflow-hidden rounded-[21px]"
    >
      <Image
        src={sideImage}
        alt=""
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </motion.div>
  );

  const text = (
    <motion.div
      initial={{ opacity: 0, x: imgLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-5 flex-1"
    >
      <h2 className="text-2xl sm:text-3xl font-medium text-black">{title}</h2>
      <div className="text-base sm:text-lg font-light leading-relaxed text-black">{body}</div>
    </motion.div>
  );

  return (
    <div
      className={`flex flex-col ${
        imgLeft ? "sm:flex-row" : "sm:flex-row-reverse"
      } gap-8 sm:gap-16 items-center w-full`}
    >
      {img}
      {text}
    </div>
  );
};

const DataGovernanceSection = () => {
  return (
    <section className="overflow-hidden bg-[#edf7f6] rounded-t-[89px] py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
        <FeatureRow
          index={0}
          imgLeft={false}
          title="From Data Compliance Risk to Data Confidence"
          body={
            <>
              <p className="mb-4">
                As enterprise data grows, so do the complexities of regulatory compliance. Without a unified governance framework, companies risk data silos, inconsistent definitions, and compliance breaches.
              </p>
              <p className="mb-4">
                Ascendus resolves these challenges by mapping database lineages, indexing schemas, and standardizing security classifications.
              </p>
              <p>
                We design governance layers that protect private customer information while empowering internal analysts with secure data access.
              </p>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft
          title="Ensure High Quality and Complete Transparency"
          body={
            <>
              <p className="mb-4">
                Good decisions rely on accurate data. Our profiling tools continuously audit table fields, automatically flag duplicates, and validate columns before they reach reporting dashboards.
              </p>
              <p>
                Get complete transparency over how your data flows across databases, ensuring CCPA, GDPR, and other compliance criteria are met effortlessly.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default DataGovernanceSection;
