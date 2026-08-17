"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  { num: 1, title: "Discover", desc: "Assess current workloads, dependencies, and cloud readiness across your environment." },
  { num: 2, title: "Plan", desc: "Define migration strategy, sequencing, and success criteria for each workload." },
  { num: 3, title: "Migrate", desc: "Execute the move with proven tooling and minimal disruption to operations." },
  { num: 4, title: "Validate", desc: "Test performance, security, and data integrity before cutover is finalized." },
  { num: 5, title: "Optimize", desc: "Continuously tune cost, performance, and scalability after go-live." },
];

const MigrationApproaches = () => {
  return (
    <section className="px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1282px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-medium text-black md:text-3xl lg:text-[32px]">
            Migration Approaches
          </h2>
          <p className="mx-auto mt-4 max-w-[694px] font-light text-[#515151] md:text-[24px] lg:text-[27px]">
            A proven, phased methodology that takes your workloads from assessment to a fully
            optimized cloud environment.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* connecting line */}
          <div className="absolute left-[5%] right-[5%] top-[43px] h-px overflow-hidden bg-[#0061AF]/20">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-[#0061AF]"
            />
          </div>
          <div className="flex items-start justify-between">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="group flex flex-col items-center gap-3 w-[177px]"
              >
                {/* circle */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="relative z-10 flex h-[86px] w-[86px] items-center justify-center rounded-full shrink-0 shadow-[0_0_0_6px_white]"
                  style={{ background: "linear-gradient(180deg, #2E3033 0%, #00ACEC 100%)" }}
                >
                  <span className="text-3xl font-bold text-white">{step.num}</span>
                </motion.div>
                <p className="text-center text-2xl font-medium text-black transition-colors duration-300 group-hover:text-[#0061af] lg:text-[32px]">
                  {step.title}
                </p>
                <p className="text-center text-[14px] font-light text-black">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile steps list */}
        <div className="flex flex-col gap-6 md:hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{ background: "linear-gradient(180deg, #2E3033 0%, #00ACEC 100%)" }}
              >
                <span className="text-xl font-bold text-white">{step.num}</span>
              </div>
              <div>
                <p className="text-xl font-medium text-black">{step.title}</p>
                <p className="mt-1 text-sm font-light text-black">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationApproaches;
