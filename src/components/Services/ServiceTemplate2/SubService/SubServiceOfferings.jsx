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
    <section className="py-20 bg-[linear-gradient(135deg,_#f5f6f6_0%,_#ffffff_55%,_#f5f6f6_100%)] text-slate-800 border-b border-slate-200/50 relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Service Offerings
            </p>
          </div>
          <h3 className="text-3xl sm:text-4xl font-normal leading-tight text-slate-900">
            Deep-Dive Offerings
          </h3>
          <p className="mt-4 text-slate-650 text-sm sm:text-base leading-relaxed">
            Our capabilities map to specific phases of design, strategy, and operations support to match your business metrics.
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
              className="group border border-slate-200 bg-white p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 mb-4 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 inline-block">
                  Pillar {String(idx + 1).padStart(2, "0")}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
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

export default SubServiceOfferings;
