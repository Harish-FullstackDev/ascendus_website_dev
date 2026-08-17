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
      <div className="text-base sm:text-lg font-light leading-relaxed text-slate-700">{body}</div>
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

const IntegrationSection = () => {
  return (
    <section className="overflow-hidden bg-[#fafcff] rounded-t-[89px] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
        <FeatureRow
          index={0}
          imgLeft={false}
          title="Consolidate Legacy and Cloud Channels"
          body={
            <>
              <p className="mb-4">
                Enterprises operate across dozens of SaaS portals, legacy on-premise servers, database clusters, and financial registries. When these connections fail, operational latency spikes.
              </p>
              <p className="mb-4">
                Ascendus builds secure pipelines that synchronize data transfers between your SAP ERP, CRM directories, and operational tables.
              </p>
              <p>
                Ensure every business division queries verified, up-to-date metrics from a single transactional loop.
              </p>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft
          title="Automate Workflows and Eliminate Errors"
          body={
            <>
              <p className="mb-4">
                Manual data copy practices slow operations down and introduce billing risks. By integrating system layers directly via APIs, webhook triggers, and secure proxy servers, we automate routing sequences.
              </p>
              <p>
                Lower transaction processing times, remove operational bottlenecks, and maintain consistency across your entire product ecosystem.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default IntegrationSection;
