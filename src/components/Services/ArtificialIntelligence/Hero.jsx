"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white text-slate-900 pt-16 md:pt-20 pb-10 md:pb-12 border-b border-[#d4d3d3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center"
        >
          Artificial Intelligence
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto text-center mt-6 space-y-1"
        >
          <p className="text-neutral-500 text-lg md:text-xl leading-relaxed">
            Expand Your SAP Success Across Every Business
          </p>
          <p className="text-neutral-500 text-lg md:text-xl leading-relaxed">
            Whether you&apos;re entering new markets, opening new locations, or integrating newly
            acquired businesses, Ascendus helps you extend your SAP landscape with a structured rollout
            approach that delivers consistency, speed, and business continuity.
          </p>
          <p className="text-neutral-700 text-lg md:text-xl font-semibold leading-relaxed pt-3">
            One ERP. Multiple Locations. Endless Possibilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
