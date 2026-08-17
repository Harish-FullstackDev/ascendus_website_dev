"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white text-slate-900 py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6"
        >
          AI That Works Where Your Business Works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-[#7b7b7b] leading-relaxed max-w-3xl mx-auto mb-3"
        >
          Business AI brings intelligence into everyday operations, helping organizations
          automate processes, improve decisions, and empower teams with real-time insights. Ascendus
          helps businesses embed AI into enterprise applications, workflows, and business
          functions to create measurable value across the organization.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#6b6666] italic"
        >
          Smarter Processes. Better Decisions. Greater Business Value.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
