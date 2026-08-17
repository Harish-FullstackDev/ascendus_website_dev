"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import CapabilitiesBgImg from "@/assets/Service/Artificial Intelligence/Business AI/capabilities-bg.png";

const ITEMS = [
  {
    title: "Intelligent Process Automation",
    desc: "Reduce repetitive manual work by embedding AI into everyday business processes.",
    opacity: "opacity-100",
    barColor: "bg-[#0061af]",
  },
  {
    title: "Decision Intelligence",
    desc: "Use predictive insights and real-time analytics to support faster and more confident decision-making.",
    opacity: "opacity-60",
    barColor: "bg-[rgba(0,97,175,0.65)]",
  },
  {
    title: "AI Assistants",
    desc: "Empower employees with intelligent assistants that provide instant answers, automate tasks, and improve productivity.",
    opacity: "opacity-30",
    barColor: "bg-[rgba(0,97,175,0.26)]",
  },
];

const Capabilities = () => {
  return (
    <section className="relative w-full overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-0">
        <Image src={CapabilitiesBgImg} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shrink-0"
        >
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-medium text-white leading-tight max-w-[380px]">
            Business AI Capabilities
          </h2>
        </motion.div>
        <div className="w-full lg:flex-1 bg-white rounded-[24px] shadow-[2px_4px_9px_rgba(0,0,0,0.25)] overflow-hidden">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ x: 6 }}
              className="group flex gap-0 relative cursor-default"
            >
              <div
                className={`w-2 shrink-0 transition-all duration-300 group-hover:w-3 ${item.barColor}`}
                style={{ minHeight: "140px" }}
              />
              <div
                className={`flex flex-col gap-2 px-5 sm:px-8 py-6 sm:py-8 transition-opacity duration-300 group-hover:opacity-100 ${item.opacity}`}
              >
                <h3 className="text-[17px] sm:text-[22px] lg:text-[26px] font-medium text-black">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-base lg:text-xl text-[#515151] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
