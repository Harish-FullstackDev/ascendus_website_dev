"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const CAPABILITIES = [
  { title: "Standard ERP Peering", desc: "Configure database pipelines that connect central SAP tables to custom databases with zero transaction loss." },
  { title: "Real-Time Sync Triggers", desc: "Deploy event workers that push lead status and invoices across systems instantly as events occur." },
  { title: "OAuth Secure Connections", desc: "Isolate endpoints using key rotation policies, rate limiting, and encrypted validation frameworks." },
  { title: "Zero Monolith Downtime", desc: "Establish proxy structures that reroute database calls seamlessly during software migrations." },
  { title: "Hybrid Cloud Security", desc: "Encrypt message packages flowing between public cloud environments and legacy database clusters." },
];

const IntegrationCapabilities = () => {
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
          Why Choose Our Enterprise Integration Services
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

export default IntegrationCapabilities;
