"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white text-slate-900 py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6"
        >
          Turn Data into Intelligent Decisions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-[#7b7b7b] leading-relaxed max-w-3xl mx-auto mb-3"
        >
          Machine Learning helps businesses move beyond historical reporting by learning from
          data, identifying patterns, and making accurate predictions. Ascendus develops intelligent
          machine learning solutions that improve decision-making, automate processes, and
          uncover new business opportunities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#6b6666] italic"
        >
          Learn from Data. Predict with Confidence. Grow with Intelligence.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
