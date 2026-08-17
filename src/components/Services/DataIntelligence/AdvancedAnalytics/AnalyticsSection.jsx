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

const AnalyticsSection = () => {
  return (
    <section className="overflow-hidden bg-[#f0f4f8] rounded-t-[89px] py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
        <FeatureRow
          index={0}
          imgLeft={false}
          title="From Raw Logs to Enterprise Telemetry"
          body={
            <>
              <p className="mb-4">
                Operating a company on monthly financial reports or historical graphs is like driving by looking in the rearview mirror.
              </p>
              <p className="mb-4">
                Ascendus structures streaming pipelines that aggregate operational events as they happen, presenting decision-makers with up-to-the-minute metrics.
              </p>
              <p>
                Unify client session paths, supply log counts, and financial transaction columns into dynamic intelligence consoles.
              </p>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft
          title="Model Future Outcomes with Predictive Intelligence"
          body={
            <>
              <p className="mb-4">
                Deploy forecasting algorithms and machine learning frameworks directly to your data warehouses. 
              </p>
              <p className="mb-4">
                Our advanced analytics services build and fine-tune models to predict client churn, estimate retail demand variations, and identify network outages.
              </p>
              <p>
                Empower your organization to anticipate market movements and optimize inventories before resource shortages occur.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default AnalyticsSection;
