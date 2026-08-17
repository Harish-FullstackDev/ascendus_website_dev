"use client";
import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    label: "Discover",
    description: "Assess existing data sources, architecture, and business requirements.",
  },
  {
    label: "Design",
    description: "Develop a modern data strategy and scalable enterprise architecture.",
  },
  {
    label: "Integrate",
    description: "Ensure data accuracy, consistency, compliance, and security.",
  },
  {
    label: "Analyze",
    description: "Generate insights through analytics, dashboards, and business intelligence.",
  },
  {
    label: "Innovate",
    description: "Enable AI, automation, and predictive analytics with trusted enterprise data.",
  },
];

const MigrationFramework = () => (
  <section className="relative overflow-hidden bg-white py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl tracking-tight">
          Our Data Transformation Framework
        </h2>
        <p className="mt-4 text-base text-neutral-600 sm:text-lg">
          Evaluate your current ERP landscape, identify transformation opportunities, and create a
          roadmap aligned with your business objectives.
        </p>
      </motion.div>

      {/* Mobile / tablet: vertical timeline */}
      <div className="flex flex-col gap-9 border-l-2 border-[#0061af]/30 py-1 pl-8 ml-5 lg:hidden">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[54px] top-0 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0061af] to-[#2E3033] text-lg font-bold text-white shadow-md">
              {index + 1}
            </span>
            <h4 className="mb-1.5 text-xl font-medium text-black">{step.label}</h4>
            <p className="text-base font-light leading-relaxed text-neutral-600">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Desktop: circles on a connecting line, labels beneath — matches Figma exactly */}
      <div className="relative hidden lg:block">
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-[43px] h-[2px] bg-gradient-to-r from-[#0061af] to-[#2E3033]" />
        <div className="relative flex items-start">
          {STEPS.map((step, index) => (
            <div key={step.label} className="flex flex-1 flex-col items-center gap-6 text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                whileHover={{ scale: 1.08 }}
                className="relative z-10 flex h-[86px] w-[86px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#0061af] to-[#2E3033] text-3xl font-bold text-white shadow-lg"
              >
                {index + 1}
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 + 0.15 }}
                className="flex w-[190px] flex-col gap-2"
              >
                <h4 className="text-2xl font-medium text-black">{step.label}</h4>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MigrationFramework;
