"use client";

import React from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  { name: "Manufacturing", sub: "Predictive Maintenance" },
  { name: "Retail", sub: "Product Recommendations" },
  { name: "Banking", sub: "Fraud Detection" },
  { name: "Healthcare", sub: "Clinical Decision Support" },
  { name: "Logistics", sub: "Demand & Route Forecasting" },
  { name: "Energy", sub: "Equipment Performance Prediction" },
];

const Industries = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-10 sm:gap-14">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-black"
          >
            Machine Learning Across Industries
          </motion.h2>
          <p className="text-[#515151] text-base sm:text-lg lg:text-xl font-light">
            Evaluate your business processes, identify ERP requirements, and define a roadmap for
            cloud ERP adoption.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-[#94cae8] rounded-xl px-5 py-5 flex flex-col gap-2 shadow-[0_0_0_rgba(0,0,0,0)] transition-shadow duration-400 hover:shadow-[0_20px_35px_-15px_rgba(46,48,51,0.45)] hover:bg-[#7fbfe3] cursor-default"
            >
              <p className="font-bold text-base sm:text-lg text-black leading-tight">{ind.name}</p>
              <p className="font-medium text-sm sm:text-base text-black/80">{ind.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
