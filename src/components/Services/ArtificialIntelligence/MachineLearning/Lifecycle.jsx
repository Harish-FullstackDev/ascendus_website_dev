"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import LifecycleBgImg from "@/assets/Service/Artificial Intelligence/Machine Learning/lifecycle-bg.png";

const LIFECYCLE_STEPS = [
  {
    num: 1,
    label: "Discover",
    desc: "Assess business challenges, data availability, and machine learning opportunities.",
  },
  {
    num: 2,
    label: "Prepare",
    desc: "Collect, clean, and engineer data to ensure it's ready for model development.",
  },
  {
    num: 3,
    label: "Build",
    desc: "Design, train, and validate machine learning models using proven algorithms.",
  },
  {
    num: 4,
    label: "Deploy",
    desc: "Integrate trained models into business applications and enterprise systems.",
  },
  {
    num: 5,
    label: "Optimize",
    desc: "Continuously monitor, retrain, and improve models as new data becomes available.",
  },
];

const Lifecycle = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
      <div className="max-w-[1285px] mx-auto flex flex-col gap-10 sm:gap-12">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-black"
          >
            Our Machine Learning Lifecycle
          </motion.h2>
          <p className="text-[#515151] text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto">
            A structured, repeatable process that takes machine learning from business problem to
            measurable outcome.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-2xl overflow-hidden"
        >
          <Image src={LifecycleBgImg} alt="" fill aria-hidden className="object-cover" />
          <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" aria-hidden />
          <div className="absolute inset-0 bg-[rgba(46,48,51,0.85)]" aria-hidden />

          <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-12">
            <div className="relative flex items-center justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="absolute left-5 right-5 sm:left-6 sm:right-6 top-1/2 -translate-y-1/2 h-px bg-white/25"
                aria-hidden
              />
              {LIFECYCLE_STEPS.map((s, index) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.12,
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  whileHover={{ scale: 1.15 }}
                  className="relative z-10 bg-white rounded-full flex items-center justify-center shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shadow-[0_0_0_4px_rgba(46,48,51,0.85)] cursor-default transition-shadow duration-300 hover:shadow-[0_0_0_6px_rgba(0,97,175,0.5)]"
                >
                  <span className="font-semibold text-black text-lg sm:text-xl lg:text-2xl">{s.num}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-start justify-between gap-2 sm:gap-4">
              {LIFECYCLE_STEPS.map((s, index) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.12 }}
                  className="group flex-1 flex flex-col gap-2"
                >
                  <p className="text-white font-semibold text-sm sm:text-base lg:text-lg transition-colors duration-300 group-hover:text-[#66cdf3]">
                    {s.label}
                  </p>
                  <p className="text-[#b7b7b7] text-xs sm:text-sm font-light leading-[1.32]">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lifecycle;
