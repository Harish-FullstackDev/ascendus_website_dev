"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const CAPABILITIES = [
  { title: "Compliance Safeguards", desc: "Security policies and column masking dynamically configured to meet CCPA and GDPR regulations." },
  { title: "Continuous Quality Checks", desc: "Automated profile auditing that scans tables to catch duplicate rows and formatting outliers." },
  { title: "Robust Lineage Tracking", desc: "Complete visual graphs mapping database columns to downstream reporting dashboards." },
  { title: "Role-Based Data Access", desc: "Configure databases so users only access or view rows authorized for their specific job functions." },
  { title: "Centralized Catalog Search", desc: "Empower analysts to search, discover, and trace verified database repositories instantly." },
];

const DataGovernanceCapabilities = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-12 text-center"
        >
          Why Choose Our Data Governance Services
        </motion.h2>

        <div className="flex flex-col">
          {CAPABILITIES.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.title} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-2xl sm:text-3xl font-medium transition-colors duration-300 ${
                      isOpen ? "text-[#0061af]" : "text-[#2E3033]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex items-center justify-center h-8 w-8 flex-shrink-0 sm:h-[42px] sm:w-[42px] rounded-full border border-slate-200 text-[#2E3033]"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-3xl text-lg sm:text-xl font-light text-[#7b7b7b]">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataGovernanceCapabilities;
