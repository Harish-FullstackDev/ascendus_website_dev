"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";

const SubServiceUrgency = ({ challengeText, metricHighlight, metricLabel, accordion = [] }) => {
  const [openIdx, setOpenIdx] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-20 bg-white text-slate-800 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Challenge & Metric Highlight */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-sm">✦</span>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                  Critical Impact
                </p>
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal leading-tight text-slate-900">
                Why It Matters
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {challengeText}
              </p>
            </div>

            {/* Stat Callout with Template 2 blue background glow */}
            {metricHighlight && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 rounded-3xl p-6 md:p-8 flex items-center gap-6 shadow-sm">
                <div className="text-5xl md:text-6xl font-extrabold text-blue-600 leading-none">
                  {metricHighlight}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                  {metricLabel}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {accordion.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "border-blue-400 bg-gradient-to-r from-blue-50/20 to-indigo-50/20 shadow-md shadow-blue-500/5"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  >
                    <span className="text-base font-semibold text-slate-800 transition-colors">
                      {item.question}
                    </span>
                    <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-slate-150/70 flex items-center justify-center text-slate-500 transition-colors">
                      {isOpen ? <HiMinus className="w-4 h-4 text-blue-600" /> : <HiPlus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceUrgency;
