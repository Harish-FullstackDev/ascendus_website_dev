"use client";
import React from "react";
import { motion } from "framer-motion";

const SubServiceOfferings = ({ offerings = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section className="py-20 bg-white text-slate-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Areas of Focus
            </p>
          </div>
          <h3 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
            Deep-Dive Offerings
          </h3>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Our specialized capabilities deliver deep expertise and execution rigor at every step of your transformation journey.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group border border-slate-200/80 hover:border-blue-500/20 p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 mb-4 bg-blue-50/50 border border-blue-100 rounded-full px-3 py-1 inline-block">
                  Offering {String(idx + 1).padStart(2, "0")}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-650 text-sm leading-relaxed">
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

export default SubServiceOfferings;
