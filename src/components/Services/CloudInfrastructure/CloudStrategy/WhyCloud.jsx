"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Layers } from "lucide-react";

const ITEMS = [
  {
    icon: Compass,
    title: "Strategy Before Technology",
    body:
      "Moving to the cloud is more than a technology upgrade—it's a business transformation. A well-defined cloud strategy helps organizations reduce complexity, optimize investments, and create a scalable foundation for future innovation.\n\nAt Ascendus, we work with business and technology leaders to develop cloud strategies that support growth, improve agility, and maximize business value.",
    imageRight: true,
  },
  {
    icon: Layers,
    title: "Every Cloud Journey Is Different",
    body:
      "Every business generates data from customers, operations, applications, and digital platforms. Without the right strategy, valuable information remains fragmented and underutilized.\n\nAscendus helps organizations create a connected data ecosystem where information flows seamlessly and supports confident decision-making at every level.",
    imageRight: false,
  },
];

const WhyCloud = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="bg-white rounded-[40px] md:rounded-[64px] overflow-hidden shadow-sm py-12 md:py-16 px-8 md:px-16 flex flex-col gap-16 md:gap-24">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${item.imageRight ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}
            >
              <motion.div
                initial={{ opacity: 0, x: item.imageRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col gap-5"
              >
                <h2 className="text-[26px] md:text-[36px] font-semibold text-black leading-tight">{item.title}</h2>
                <div className="text-[16px] md:text-[19px] font-light text-black/80 leading-relaxed whitespace-pre-line">
                  {item.body}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ scale: 1.03 }}
                className={`relative shrink-0 w-full md:w-[340px] h-[220px] md:h-[266px] bg-gradient-to-br from-[#0061af] to-[#2E3033] flex items-center justify-center overflow-hidden ${item.imageRight ? "rounded-br-[56px]" : "rounded-bl-[58px]"}`}
              >
                <motion.div
                  aria-hidden
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <item.icon className="relative w-16 h-16 text-white/90" strokeWidth={1.25} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCloud;
