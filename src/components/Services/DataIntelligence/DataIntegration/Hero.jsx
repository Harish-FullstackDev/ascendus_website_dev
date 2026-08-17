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

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6"
        >
          One Business. One Connected Data Ecosystem.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#7b7b7b] leading-relaxed max-w-3xl mx-auto mb-4"
        >
          Modern enterprises run on dozens of disconnected systems—ERP, CRM, cloud apps, and
          legacy platforms. Ascendus designs and builds the integration layer that connects them all,
          so information flows securely and automatically across your business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-[#5e5d5d] font-medium italic"
        >
          Connect Systems. Unify Data. Accelerate Growth.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
