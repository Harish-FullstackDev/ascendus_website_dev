"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  IconWorkFaster,
  IconCollaborate,
  IconCustomerEngagement,
  IconKnowledge,
  IconInnovation,
} from "./Icons";

const IMPACT_ITEMS = [
  {
    Icon: IconWorkFaster,
    title: "Work Faster",
    desc: "Reduce the time spent creating and managing business content.",
  },
  {
    Icon: IconCollaborate,
    title: "Collaborate Better",
    desc: "Deliver faster, personalized, and more accurate responses.",
  },
  {
    Icon: IconCustomerEngagement,
    title: "Improve Customer Engagement",
    desc: "Deliver faster, personalized, and more accurate responses.",
  },
  {
    Icon: IconKnowledge,
    title: "Unlock Business Knowledge",
    desc: "Make enterprise information easier to access and use.",
  },
  {
    Icon: IconInnovation,
    title: "Accelerate Innovation",
    desc: "Empower teams to explore new ideas and solve problems more efficiently.",
  },
];

const BusinessImpact = () => {
  return (
    <section className="bg-[#cfeaf9] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[38%] shrink-0 lg:sticky lg:top-28"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-4">The Business Impact</h2>
            <div className="text-[#515151] text-base lg:text-lg font-light leading-relaxed">
              <p>Transformation shouldn&apos;t end at Go-Live.</p>
              <p>The real impact begins afterward.</p>
            </div>
          </motion.div>

          <div className="flex-1 w-full">
            <div className="flex gap-5 lg:gap-6">
              <div className="flex flex-col items-center">
                {IMPACT_ITEMS.map((item, i) => (
                  <div key={item.title} className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
                      whileHover={{ scale: 1.15, rotate: -6 }}
                      className="bg-white rounded-xl w-14 h-14 flex items-center justify-center shadow-sm cursor-default transition-shadow duration-300 hover:shadow-[0_10px_25px_-8px_rgba(0,97,175,0.6)]"
                    >
                      <div className="w-8 h-8">
                        <item.Icon />
                      </div>
                    </motion.div>
                    {i < IMPACT_ITEMS.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                        style={{ transformOrigin: "top" }}
                        className="w-px h-12 bg-black/20 my-1"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-between flex-1" style={{ gap: "3.25rem" }}>
                {IMPACT_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex flex-col gap-1 pt-1"
                  >
                    <p className="font-medium text-black text-base lg:text-lg">{item.title}</p>
                    <p className="text-[#515151] text-sm lg:text-base font-light leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
