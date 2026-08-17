"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  ImpactIconGlobe,
  ImpactIconInvestments,
  ImpactIconRisk,
  ImpactIconData,
  ImpactIconUsers,
  ImpactIconStream,
} from "./Icons";

const impactCards = [
  {
    Icon: ImpactIconGlobe,
    title: "Transformation Roadmap",
    desc: "Move forward with a structured AI plan that aligns with business priorities.",
    highlight: true,
  },
  {
    Icon: ImpactIconInvestments,
    title: "Smarter Investments",
    desc: "Focus resources on AI initiatives with measurable business value.",
    highlight: false,
  },
  {
    Icon: ImpactIconRisk,
    title: "Reduced Risk",
    desc: "Adopt AI through strong governance, security, and responsible implementation.",
    highlight: false,
  },
  {
    Icon: ImpactIconData,
    title: "Faster Time to Value",
    desc: "Prioritize practical use cases that deliver visible results early.",
    highlight: false,
  },
  {
    Icon: ImpactIconUsers,
    title: "Enterprise-Wide Adoption",
    desc: "Create a consistent AI approach across departments and business functions.",
    highlight: false,
  },
  {
    Icon: ImpactIconStream,
    title: "Future-Ready Organization",
    desc: "Build the foundation for continuous innovation and long-term competitiveness.",
    highlight: false,
  },
];

const BusinessImpact = () => {
  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background:
          "linear-gradient(180deg,#000 0%,#0d0d0d 15.6%,#081d29 22.6%,#032c45 35.8%,#062134 47.6%,#081624 55.5%,#0a101b 73.1%,#0b0b13 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-white mb-4"
          >
            Business Impact
          </motion.h2>
          <p className="text-[#b5b5b5] text-lg sm:text-xl leading-[1.5]">
            Transformation shouldn&apos;t end at Go-Live.
            <br className="hidden sm:block" /> The real impact begins afterward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impactCards.map(({ Icon, title, desc, highlight }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className={`relative rounded-2xl border border-[#dbdbdb]/30 overflow-hidden p-7 flex flex-col gap-6 ${
                highlight ? "bg-white/12" : "bg-white/6"
              }`}
            >
              <div className="w-14 h-14">
                <Icon />
              </div>
              <div>
                <p className="text-white text-lg font-medium mb-2">{title}</p>
                <p className="text-[#aeaeae] text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
