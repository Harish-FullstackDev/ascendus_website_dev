"use client";
import React from "react";
import { motion } from "framer-motion";
 
const ServiceSuccessMetrics = ({
  id = "metrics",
  title = "Business Impact",
  subtitle = "Success Metrics",
  items = [],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };
 
  return (
    <section id={id} className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      {/* Background grids and lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400">
              {subtitle}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white">
            {title}
          </h2>
        </div>
 
        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {items.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-900/50 border border-white/5 hover:border-blue-500/25 p-8 rounded-2xl text-center flex flex-col justify-between items-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              {/* Stat number/value */}
              <div className="mb-4">
                <span className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 group-hover:scale-105 transition-transform duration-300 inline-block">
                  {metric.value}
                </span>
              </div>
 
              {/* Separator line */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mb-4 opacity-50 group-hover:w-20 transition-all duration-300"></div>
 
              {/* Title / Label */}
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white tracking-wide">
                  {metric.label}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
 
export default ServiceSuccessMetrics;