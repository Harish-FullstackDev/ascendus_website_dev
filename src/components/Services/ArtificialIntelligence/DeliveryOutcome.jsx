"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AIBusinessPhoto from "@/assets/Service/Artificial Intelligence/cloud-transformation-outcome.webp";

const DeliveryOutcome = () => {
  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.015 }}
            className="relative w-full aspect-[568/319] rounded-[20px] overflow-hidden"
          >
            <Image
              src={AIBusinessPhoto}
              alt="Delivery outcome"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900">
              Our Delivery Outcome
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl leading-[1.32]">
              Every cloud transformation follows a structured yet flexible approach.
              <br />
              We begin by understanding your business objectives, design a cloud architecture
              aligned with long-term goals, implement secure and scalable solutions, and
              continuously optimize the environment to improve performance, governance, and
              business value.
              <br />
              This ensures AWS becomes a platform that evolves with your organization—not a
              project that ends after implementation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryOutcome;
