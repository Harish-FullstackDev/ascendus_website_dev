"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "01. Discover", description: "Understand business goals, challenges, and AI opportunities." },
  { num: "2", title: "02. Assess", description: "Evaluate data, technology, and organizational readiness." },
  { num: "3", title: "03. Design", description: "Develop an AI strategy, solution architecture, and implementation roadmap." },
  { num: "4", title: "04. Implement", description: "Deploy AI solutions with governance, security, and scalability in mind." },
  { num: "5", title: "05. Optimize", description: "Continuously improve AI models, monitor performance, and maximize business value." },
];

const BADGE_H = 46;
const BADGE_W = 113;
const LABEL_H = 130;
const STEM_H = 56;
const TOTAL_H = LABEL_H + STEM_H + BADGE_H;

const TransformationFramework = () => {
  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900"
          >
            Our AI Transformation Framework
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-600 text-lg md:text-xl leading-[1.32]"
          >
            Transformation shouldn&apos;t end at Go-Live.
            <br />
            The real impact begins afterward.
          </motion.p>
        </div>

        {/* Desktop: evenly aligned timeline — every label, stem, and badge shares the same height */}
        <div className="hidden lg:block relative" style={{ height: TOTAL_H }}>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ top: LABEL_H + STEM_H + BADGE_H / 2, transformOrigin: "left" }}
            className="absolute left-0 right-0"
          >
            <svg className="w-full" height="10" viewBox="0 0 1161 10" preserveAspectRatio="none" fill="none">
              <line x2="1161" y1="5" y2="5" stroke="#2E2E2E" strokeDasharray="3 3" strokeWidth="10" />
            </svg>
          </motion.div>

          <div className="absolute inset-0 flex justify-between">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex flex-col items-center text-center" style={{ width: 220 }}>
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.12 }}
                  className="flex flex-col justify-end items-center gap-3"
                  style={{ height: LABEL_H }}
                >
                  <p className="font-medium text-[22px] text-[#2e2e2e] leading-tight whitespace-nowrap">
                    {step.title}
                  </p>
                  <p className="font-light text-[16px] text-[#2e2e2e] leading-snug">{step.description}</p>
                </motion.div>

                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                  style={{
                    width: 2,
                    height: STEM_H,
                    transformOrigin: "bottom",
                    background: "linear-gradient(to bottom,#000 0%,#0061AF 35%,#0061AF 69%,#070707 100%)",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + idx * 0.12,
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                  }}
                  whileHover={{ scale: 1.12 }}
                  className="flex items-center justify-center bg-[#0061af] rounded-[8px] z-10 cursor-default shadow-[0_0_0_rgba(0,97,175,0)] transition-shadow duration-300 hover:shadow-[0_10px_30px_-8px_rgba(0,97,175,0.8)]"
                  style={{ width: BADGE_W, height: BADGE_H }}
                >
                  <span className="text-white text-[32px] font-medium leading-none">{step.num}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: vertical list */}
        <div className="lg:hidden space-y-10 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-0 before:border-l-2 before:border-dashed before:border-zinc-800/50">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-6 relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#0061AF] flex items-center justify-center"
              >
                <span className="text-white text-2xl font-medium">{step.num}</span>
              </motion.div>
              <div className="space-y-1.5 pt-1">
                <h3 className="text-xl font-medium text-zinc-800">{step.title}</h3>
                <p className="text-zinc-600 text-base leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationFramework;
