"use client";
import React from "react";
import { motion } from "framer-motion";

const ROW_1 = [
  { label: "Manufacturing", active: false },
  { label: "Automotive", active: true },
  { label: "Retail", active: false },
  { label: "Healthcare", active: true },
];

const ROW_2 = [
  { label: "Logistics & Supply Chain", active: true },
  { label: "Professional Services", active: false },
  { label: "Banking & Financial Services", active: true },
  { label: "Energy & Utilities", active: false },
];

const IndustryChip = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    whileHover={{ y: -3 }}
    className={`flex min-h-[60px] min-w-[150px] cursor-default items-center justify-center rounded-[20px] border border-[#2E3033] px-5 py-4 text-center transition-colors duration-300 md:min-h-[70px] ${item.active
        ? "bg-[#2E3033] text-white hover:bg-[#015788]"
        : "bg-white text-[#2E3033] hover:bg-[#2E3033] hover:text-white"
      }`}
  >
    <span className="text-base font-light sm:text-lg md:text-xl">{item.label}</span>
  </motion.div>
);

const IndustriesWeTransform = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
            Industries We Transform
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Transformation shouldn&apos;t end at Go-Live.
            <br />
            The real impact begins afterward.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[ROW_1, ROW_2].map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3 md:gap-4">
              {row.map((item, index) => (
                <IndustryChip key={item.label} item={item} index={rowIndex * 4 + index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeTransform;
