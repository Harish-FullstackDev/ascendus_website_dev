"use client";
import React from "react";
import { motion } from "framer-motion";

const SubServiceROI = ({ roi = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200/60 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Value Outcomes
            </p>
          </div>
          <h3 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
            Value Realization
          </h3>
          <p className="mt-4 text-slate-650 text-sm sm:text-base leading-relaxed">
            We focus our design and platform administration tracks around clear metrics to guarantee ongoing commercial viability.
          </p>
        </div>

        {/* 3-Column ROI Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {roi.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white border-2 border-indigo-500/10 hover:border-blue-500/30 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 tracking-tight mb-4">
                  {item.metric}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceROI;
