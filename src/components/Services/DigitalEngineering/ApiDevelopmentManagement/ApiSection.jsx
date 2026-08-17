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

const ApiSection = () => {
  return (
    <section className="overflow-hidden bg-[#fbfdff] rounded-t-[89px] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24">
        <FeatureRow
          index={0}
          imgLeft={false}
          title="Construct a Stable Developer Gateway"
          body={
            <>
              <p className="mb-4">
                As software architectures shift from massive monoliths to lightweight microservices, keeping endpoints secure and managed is vital.
              </p>
              <p className="mb-4">
                Ascendus engineers API gateways that authenticate user tokens, validate request bodies, and monitor payload sizes dynamically.
              </p>
              <p>
                Empower your development groups with clean documentation (Swagger/OpenAPI) and sandbox portals that speed up coding tasks.
              </p>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft
          title="Control Load Spikes and Ensure High Uptime"
          body={
            <>
              <p className="mb-4">
                Sudden traffic surges from marketing campaigns or inventory sweeps can crash database servers. 
              </p>
              <p className="mb-4">
                We implement queue brokers, memory caches, and custom rate limits on backend endpoints.
              </p>
              <p>
                Ensure your critical customer-facing APIs remain responsive, maintaining SLAs even during massive request spikes.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default ApiSection;
