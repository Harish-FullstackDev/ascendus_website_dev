"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { BulletArrow } from "./Icons";

import BusinessFocusImg from "@/assets/Service/Artificial Intelligence/AI Strategy/business-focus.png";
import StrategicOutcomeImg from "@/assets/Service/Artificial Intelligence/AI Strategy/strategic-outcome.png";

const focusAreas = [
  "Customer Experience",
  "Sales & Marketing",
  "Finance",
  "Supply Chain",
  "Human Resources",
  "Operations",
];

const StrategyInAction = () => {
  return (
    <section
      className="py-16 sm:py-24"
      style={{ background: "linear-gradient(to bottom, #000, #001b2b 50%, #000)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-white mb-4"
          >
            AI Strategy in Action
          </motion.h2>
          <p className="text-[#b5b5b5] text-lg sm:text-xl leading-[1.5]">
            Transformation shouldn&apos;t end at Go-Live.
            <br className="hidden sm:block" />
            The real impact begins afterward.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-sm mx-auto md:mx-0 rounded-3xl overflow-hidden relative min-h-[420px]"
          >
            <Image src={BusinessFocusImg} alt="Business Focus" fill className="object-cover" />
            <div className="relative z-10 p-8 h-full flex flex-col gap-4">
              <h3 className="text-3xl font-light text-black mb-2">Business Focus</h3>
              <div className="flex flex-col gap-3 mt-2">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <BulletArrow color="#0061AF" />
                    <span className="text-[#020202] text-lg font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 max-w-sm mx-auto md:mx-0 rounded-3xl overflow-hidden relative min-h-[420px]"
          >
            <Image src={StrategicOutcomeImg} alt="Strategic Outcome" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
            <div className="absolute inset-0 bg-[rgba(46,48,51,0.63)]" />
            <div className="relative z-10 p-8 h-full flex flex-col gap-4">
              <h3 className="text-3xl font-light text-white mb-2">Strategic Outcome</h3>
              <div className="flex flex-col gap-3 mt-2">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <BulletArrow color="white" />
                    <span className="text-white text-lg font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategyInAction;
