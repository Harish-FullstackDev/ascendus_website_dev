"use client";
import React from "react";
import { motion } from "framer-motion";

export const CMU_TABS = [
  { id: "conversion", label: "Conversion" },
  { id: "migration", label: "Migration" },
  { id: "upgradation", label: "Upgradation" },
];

const CMUTabSelector = ({ active, onChange }) => {
  return (
    <section className="relative bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex w-full max-w-xl items-center gap-1 overflow-x-auto rounded-2xl bg-neutral-100 p-1.5 sm:gap-2"
        >
          {CMU_TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className="relative flex-1 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300 sm:text-base"
              >
                {isActive && (
                  <motion.span
                    layoutId="cmu-tab-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-xl bg-white shadow-[0_4px_16px_rgba(8,47,73,0.16)]"
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-sky-950" : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CMUTabSelector;
