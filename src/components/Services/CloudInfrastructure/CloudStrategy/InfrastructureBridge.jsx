"use client";

import React from "react";
import { motion } from "framer-motion";

const InfrastructureBridge = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col items-center gap-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[36px] font-semibold text-black"
        >
          A Strategy That Sets Up Every Step After It
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[900px] text-[#7b7b7b] text-[17px] md:text-[22px] font-light leading-relaxed"
        >
          <p>
            A sound cloud strategy is the blueprint that migration, modernization, and managed
            services build on. Getting it right up front means fewer surprises, faster execution,
            and infrastructure decisions that hold up as your business grows.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-[#5e5d5d] font-normal"
          >
            Secure. Scalable. Future-Ready.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureBridge;
