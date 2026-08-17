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

const DataFoundationSection = () => {
  return (
    <section className="overflow-hidden bg-[#e6f2f8] rounded-t-[89px] py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
        <FeatureRow
          index={0}
          imgLeft={false}
          title="From Data Chaos to Data Confidence"
          body={
            <>
              <p className="mb-4">
                Business data lives everywhere—ERP systems, CRM platforms, cloud applications, IoT
                devices, spreadsheets, and third-party solutions.
              </p>
              <p className="mb-4">
                When these systems don&apos;t communicate, reporting becomes slow, analytics
                become unreliable, and decision-making suffers.
              </p>
              <p>
                Ascendus builds intelligent data platforms that connect every source into a single,
                reliable ecosystem.
              </p>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft
          title="Build a Modern Data Foundation"
          body={
            <>
              <p className="mb-4">
                A strong data platform enables organizations to make faster decisions, improve
                operational efficiency, and support advanced technologies such as Artificial
                Intelligence, Machine Learning, and Business Intelligence.
              </p>
              <p>
                Our data engineering services focus on creating reliable, secure, and scalable
                data ecosystems that support long-term business growth.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default DataFoundationSection;
