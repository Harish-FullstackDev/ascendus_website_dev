"use client";

import React from "react";
import { motion } from "framer-motion";

const BuildInfrastructure = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="font-medium text-[22px] sm:text-[28px] lg:text-[36px] text-black mb-4"
      >
        Build Infrastructure That Keeps Your Business Moving
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-[900px] mx-auto text-[#7b7b7b] font-light text-[15px] sm:text-[18px] lg:text-[20px] mb-3"
      >
        <p className="mb-3">
          A strong cloud infrastructure is the backbone of digital transformation. Ascendus helps
          organizations build secure, scalable, and high-performing environments that support
          business growth, improve operational resilience, and enable continuous innovation.
        </p>
        <p className="text-[#5e5d5d] text-[15px] sm:text-[18px]">Secure. Scalable. Future-Ready.</p>
      </motion.div>
    </section>
  );
};

export default BuildInfrastructure;
