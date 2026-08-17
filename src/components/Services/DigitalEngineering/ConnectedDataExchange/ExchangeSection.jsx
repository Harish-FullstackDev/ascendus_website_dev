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

const ExchangeSection = () => {
  return (
    <section className="overflow-hidden bg-[#fbfdff] rounded-t-[89px] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
        <FeatureRow
          index={0}
          imgLeft={false}
          title="Establish High-Throughput Event Streams"
          body={
            <>
              <p className="mb-4">
                Routing massive quantities of billing and shipping records between remote databases can clog network connections. 
              </p>
              <p className="mb-4">
                Ascendus builds secure event-driven brokering setups (Apache Kafka, RabbitMQ) that capture transaction logs and distribute them cleanly.
              </p>
              <p>
                Maintain continuous, decoupled message streams that prevent processing dropouts during system failures.
              </p>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft
          title="Verify Schema and Maintain Data Order"
          body={
            <>
              <p className="mb-4">
                Out-of-order data or corrupted payloads can create database inconsistencies. Our data exchange architectures validate incoming messages against predefined schemas at the entry node.
              </p>
              <p>
                Configure buffer pools, retry behaviors, and dead-letter queues to isolate anomalies without stopping your broader operational flows.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default ExchangeSection;
