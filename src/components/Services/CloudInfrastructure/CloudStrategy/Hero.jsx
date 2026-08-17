"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Ambient floating gradient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#0061af]/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-[#2E3033]/10 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6"
        >
          Build a Cloud Strategy That Drives Business Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#7b7b7b] leading-relaxed max-w-3xl mx-auto mb-4"
        >
          A successful cloud journey begins with a clear strategy. Ascendus helps organizations assess
          their current technology landscape, define cloud priorities, and create a roadmap that
          aligns cloud adoption with long-term business goals.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-[#5e5d5d] font-medium italic"
        >
          Plan with Confidence. Transform with Purpose.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
