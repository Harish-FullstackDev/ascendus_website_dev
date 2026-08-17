"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const CMUIntroHeader = ({ tabId, title, subtitle, description }) => (
  <section className="relative bg-white pb-2 pt-14 sm:pt-16">
    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={tabId}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-medium text-black sm:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-lg font-medium text-sky-950 sm:text-xl">{subtitle}</p>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
);

export default CMUIntroHeader;
