"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AIBusinessIntelligence from "@/assets/Service/Artificial Intelligence/ai-business-intelligence-dashboard.jpg";
import AIBusinessAutomation from "@/assets/Service/Artificial Intelligence/ai-business-automation.jpg";

const BusinessValue = () => {
  return (
    <section className="py-16 md:py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-20">
        {/* Row 1: Text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 leading-tight">
              Intelligence That Drives Better Business Decisions
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
              Artificial Intelligence is transforming how businesses operate, innovate, and grow.
              Ascendus helps organizations adopt AI with a business-first approach, enabling smarter
              decisions, intelligent automation, and measurable business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="relative w-full aspect-[568/319] rounded-[20px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            <Image
              src={AIBusinessIntelligence}
              alt="AI business intelligence"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Row 2: Image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.015 }}
            className="relative w-full aspect-[568/319] rounded-[20px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] order-2 lg:order-1"
          >
            <Image
              src={AIBusinessAutomation}
              alt="AI business value"
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
            className="space-y-5 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 leading-tight">
              AI Built Around Business Value
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
              Artificial Intelligence is no longer a future initiative—it&apos;s a business
              capability. Organizations are using AI to improve customer experiences, optimize
              operations, automate processes, and unlock valuable insights from data.
            </p>
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
              At Ascendus, we help businesses identify where AI creates the greatest impact and
              implement solutions that align with strategic goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;
