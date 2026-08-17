"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import sideImage from "@/assets/Service/Data&Intelligence/Data Integration/Image.jpg";

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

const DataConnectionSection = () => {
  return (
    <section className="overflow-hidden bg-white rounded-t-[89px] py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
        <FeatureRow
          index={0}
          imgLeft={false}
          title="Why Connected Data Matters"
          body={
            <>
              <p className="mb-4">
                Every disconnected system is a blind spot—an order that doesn&apos;t sync, a
                customer record that doesn&apos;t update, a report built on numbers that are
                already out of date.
              </p>
              <p className="mb-4">
                As businesses adopt more cloud applications, legacy platforms, and third-party
                services, the risk of fragmented, siloed data grows with every new integration.
              </p>
              <p>
                Ascendus builds the secure integration layer that keeps every system talking to each
                other in real time.
              </p>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft
          title="The Connected Enterprise"
          body={
            <>
              <p className="mb-4">
                A truly connected enterprise moves data automatically between ERP, CRM, cloud
                services, and legacy servers—without manual exports, brittle scripts, or delayed
                syncs.
              </p>
              <p>
                Our integration architects design event-driven, API-first pipelines that keep your
                business systems reliably in sync as you scale.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default DataConnectionSection;
