"use client";
import React from "react";
import { motion } from "framer-motion";

const RollOutHero = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-5"
      >
        <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl">
          Expand Your SAP Success Across Every Business
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg lg:text-xl">
          Whether you&apos;re entering new markets, opening new locations, or integrating newly
          acquired businesses, Ascendus helps you extend your SAP landscape with a structured rollout
          approach that delivers consistency, speed, and business continuity.
        </p>
        <p className="text-lg font-medium text-sky-950 sm:text-xl">
          One ERP. Multiple Locations. Endless Possibilities.
        </p>
      </motion.div>
    </div>
  </section>
);

export default RollOutHero;
