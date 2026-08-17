"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  IconVision,
  IconOpportunity,
  IconRoadmap,
  IconProcess,
  IconAI,
  IconEvolution,
} from "./Icons";

const services = [
  {
    Icon: IconVision,
    label: "AI Vision & Business Alignment",
    desc: "Align AI initiatives with business objectives to ensure every investment supports measurable outcomes.",
  },
  {
    Icon: IconOpportunity,
    label: "Opportunity Assessment",
    desc: "Identify the business functions, processes, and use cases where AI can create the greatest impact.",
  },
  {
    Icon: IconRoadmap,
    label: "Enterprise AI Roadmap",
    desc: "Develop a phased implementation plan that prioritizes quick wins while supporting long-term transformation.",
  },
  {
    Icon: IconProcess,
    label: "Responsible AI Framework",
    desc: "Establish governance, security, compliance, and ethical practices that support trusted AI adoption.",
  },
  {
    Icon: IconAI,
    label: "Organizational Readiness",
    desc: "Prepare your people, processes, and technology to successfully adopt and scale AI across the enterprise.",
  },
  {
    Icon: IconEvolution,
    label: "Continuous AI Evolution",
    desc: "Review performance, refine priorities, and expand AI capabilities as business needs change.",
  },
];

const StrategicServices = () => {
  return (
    <section className="bg-[#1d1c1c] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[38%] shrink-0 rounded-3xl overflow-hidden bg-gradient-to-b from-black via-[#2E3033] to-[#2E3033] p-8 sm:p-10 flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-6">
                Our Strategic
                <br />
                AI Services
              </h2>
            </div>
            <p className="text-[#cccccc] text-base sm:text-lg leading-[1.5]">
              We deliver AI-powered solutions that integrate with your existing technology landscape,
              enabling intelligence across every business function.
            </p>
          </motion.div>

          <div className="flex-1 flex flex-col gap-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-[28px] font-semibold text-white mb-8 lg:mb-10"
            >
              AI That Works Across Your Enterprise
            </motion.h3>
            <div className="flex flex-col gap-6">
              {services.map(({ Icon, label, desc }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-14 h-12 shrink-0 bg-white/20 rounded-xl flex items-center justify-center p-3">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-white text-base sm:text-[18px] font-medium mb-1">{label}</p>
                    <p className="text-white/70 text-sm sm:text-[14px] leading-snug">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicServices;
