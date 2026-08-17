"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import WhySstVisual from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/why-sst-visual.png";

const WhySST = () => {
  return (
    <section className="bg-black py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1288px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-6"
        >
          <h2 className="text-[26px] md:text-[30px] font-medium text-white leading-snug">Why Ascendus for Cloud Strategy?</h2>
          <p className="text-[15px] md:text-[17px] text-white/60 leading-relaxed max-w-[480px]">
            At Ascendus, we believe that successful cloud transformation starts with thoughtful planning.
            Our consultants combine business insight with cloud expertise to create strategies that
            are practical, scalable, and aligned with organizational goals. From readiness
            assessments and architecture planning to governance and optimization, we help businesses
            build a cloud strategy that delivers measurable value and supports long-term growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full md:w-[580px] h-[200px] md:h-[220px] flex-shrink-0"
        >
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <Image src={WhySstVisual} alt="" fill className="object-cover opacity-60 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-[#0061af] mix-blend-hue" />
          </div>
          {/* Animated flowing line overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 531 194" fill="none" className="w-full max-w-[531px] opacity-70">
              <motion.path
                d="M8 100 C 120 20, 220 180, 340 90 S 480 30, 523 97"
                stroke="url(#wst_grad)"
                strokeLinecap="round"
                strokeWidth="1.4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="wst_grad" gradientUnits="userSpaceOnUse" x1="8" x2="523" y1="97" y2="97">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySST;
