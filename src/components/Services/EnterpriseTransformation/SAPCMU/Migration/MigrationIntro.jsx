"use client";
import React from "react";
import { motion } from "framer-motion";

const MigrationIntro = () => (
  <section className="relative overflow-hidden bg-white py-14 sm:py-16">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3"
      >
        <h2 className="text-2xl font-medium text-black sm:text-3xl">
          Expand Without Reinventing.
        </h2>
        <p className="text-base leading-relaxed text-neutral-500 sm:text-lg">
          Growth should never mean starting over. Whether you&apos;re entering a new market,
          opening a manufacturing facility, or launching a new business unit, Ascendus&apos;s SAP
          Rollout Services help organizations extend proven processes, governance models, and
          enterprise standards across every new location — delivering consistency, speed, and
          long-term value.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MigrationIntro;
