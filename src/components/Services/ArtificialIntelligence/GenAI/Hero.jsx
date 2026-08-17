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
          From Ideas to Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg lg:text-xl text-[#7b7b7b] leading-relaxed max-w-3xl mx-auto mb-3"
        >
          Generative AI is changing how businesses create, collaborate, and innovate. Ascendus helps
          organizations harness AI to generate content, automate knowledge, accelerate
          decision-making, and unlock new ways of working across the enterprise.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#6b6666] italic"
        >
          Imagine More. Create Faster. Scale Smarter.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
