"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Ambient floating gradient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#0061af]/10 blur-3xl"
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
          Synchronize Your Enterprise Ecosystem Seamlessly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-[#7b7b7b] leading-relaxed max-w-3xl mx-auto mb-4"
        >
          Bridge gaps across systems. We connect legacy ERP environments, cloud CRM directories, databases, and custom web applications to orchestrate automated, real-time data flows that prevent manual entry errors.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-[#0061af] font-medium italic"
        >
          Peer Platforms. Automate Workflows. Power Business Growth.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
