"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Import asset
import WhySstBg from "@/assets/Service/Cloud & Infrastructure/Frame 2147239576.jpg";

const WhySSTCloud = () => {
  return (
    <section className="relative min-h-[500px] w-full flex items-center py-20 text-white overflow-hidden bg-[#001b2a]">
      {/* Background Image and Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={WhySstBg}
          alt="Why Ascendus for Cloud Infrastructure"
          fill
          className="object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-l from-[#001b2a]/90 via-[#001b2a]/60 to-transparent" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Title (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider flex items-center justify-start gap-2 block">
              <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
              Enterprise Partner</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Why Ascendus for Cloud Infrastructure?
            </h2>
            <div className="w-12 h-1.5 bg-blue-500 rounded" />
          </motion.div>

          {/* Right Column: Text content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-black/45 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 space-y-6 text-slate-200 text-base md:text-lg leading-relaxed shadow-2xl"
          >
            <p>
              At Ascendus, we help organizations build cloud environments that are secure, scalable, and aligned with business objectives. Whether you're creating a cloud strategy, migrating workloads, modernizing legacy infrastructure, or managing day-to-day cloud operations, our experts provide end-to-end support throughout the cloud lifecycle.
            </p>
            <p>
              We focus on delivering cloud solutions that improve operational efficiency, strengthen resilience, and enable long-term business growth.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhySSTCloud;
