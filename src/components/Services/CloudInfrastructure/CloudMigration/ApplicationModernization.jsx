"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import modernizationImage from "@/assets/Service/Cloud & Infrastructure/Cloud Migration/24b57ca2e7eaba692c9473d9cb10520fcfd053c1.png";

const ITEMS = ["Legacy Modernization", "Cloud Enablement", "Performance Optimization", "Platform Upgrades"];

const ApplicationModernization = () => {
  return (
    <section className="px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-9">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="group relative mx-auto h-[220px] w-full max-w-[473px] shrink-0 overflow-hidden rounded-[20px] md:h-[266px] lg:mx-0"
          >
            <Image
              src={modernizationImage}
              alt="Application modernization"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </motion.div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <h2 className="text-2xl font-medium text-black md:text-3xl lg:text-[32px]">
              Application Modernization
            </h2>
            <p className="text-lg font-normal leading-snug text-[#515151] md:text-[24px] lg:text-[28px]">
              Transform legacy applications into future-ready digital platforms.
            </p>
            <p className="font-light leading-relaxed text-[#515151] md:text-[22px] lg:text-[28px]">
              Legacy systems often limit innovation and operational agility. We modernize
              applications through re-architecture, cloud enablement, performance optimization,
              and technology upgrades without disrupting business operations.
            </p>
            <ul className="space-y-1 font-light text-[#515151] md:text-[22px] lg:text-[28px]">
              {ITEMS.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#0061af]">•</span>
                  <span className="text-[#0061af]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationModernization;
