"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const TransformationJourney = () => {
  const steps = [
    {
      num: "01",
      title: "Assess",
      description: "Understand your current infrastructure, workloads, and business objectives.",
    },
    {
      num: "02",
      title: "Plan",
      description: "Design a cloud strategy and roadmap aligned with future business needs.",
    },
    {
      num: "03",
      title: "Migrate",
      description: "Replicate workloads, containerize codebases, and peer network databases.",
    },
    {
      num: "04",
      title: "Manage",
      description: "Monitor, optimize, and secure cloud environments for continuous improvement.",
    },
  ];

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden border-b border-neutral-900">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#216992]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#16171A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-2">
            <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
            Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Our Cloud Transformation Journey
          </h2>
          <div className="w-12 h-1 bg-[#216992] mx-auto mt-4 rounded-full" />
        </div>

        {/* Desktop timeline flow (Figma inspired staggered curved layout) */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          {/* Connecting glowing SVG path */}
          <div className="absolute top-[80px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 -z-10 opacity-45" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`flex flex-col items-center text-center space-y-4 "
                }`}
            >
              {/* Stepper Node */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-[#216992]/20 to-neutral-900 flex items-center justify-center border-2 border-neutral-800 shadow-[0_0_30px_rgba(33,105,146,0.15)] group hover:border-blue-400 transition-all duration-500">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  {step.num}
                </span>

                {/* Orbiting dot indicator */}
                <div className="absolute -inset-1.5 rounded-full border border-dashed border-blue-500/20 group-hover:animate-spin-slow" />
              </div>

              {/* Text info */}
              <div className="space-y-2 max-w-[240px]">
                <h3 className="text-xl font-bold text-white tracking-wide">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile / Tablet vertical list layout */}
        <div className="lg:hidden space-y-12 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-900 before:via-blue-500 before:to-blue-900">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start space-x-6 relative z-10"
            >
              {/* Node index bubble */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-b from-blue-950 to-black flex items-center justify-center border-2 border-blue-900 shadow-md">
                <span className="text-lg font-bold text-blue-400">{step.num}</span>
              </div>

              {/* Text Box */}
              <div className="bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800/80 flex-1 space-y-2">
                <h3 className="text-lg font-bold text-white tracking-wide">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationJourney;
