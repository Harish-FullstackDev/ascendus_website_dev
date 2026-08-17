"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import OutcomesBgImg from "@/assets/Service/Artificial Intelligence/Business AI/outcomes-bg.png";
import {
  IconFinance,
  IconSalesMarketing,
  IconHR,
  IconCustomerService,
  IconSupplyChain,
  IconExecutiveSupport,
} from "./Icons";

const OUTCOMES = [
  {
    title: "Finance & Accounting",
    desc: "Automate reconciliation, forecasting, and reporting to close the books faster and with fewer errors.",
    Icon: IconFinance,
  },
  {
    title: "Sales & Marketing",
    desc: "Prioritize the right leads and campaigns with AI-driven insight into customer behavior.",
    Icon: IconSalesMarketing,
  },
  {
    title: "Human Resources",
    desc: "Speed up hiring and onboarding while giving HR teams more time for people, not paperwork.",
    Icon: IconHR,
  },
  {
    title: "Customer Service",
    desc: "Deliver faster, more personalized, and consistent customer interactions.",
    Icon: IconCustomerService,
  },
  {
    title: "Supply Chain & Operations",
    desc: "Improve forecasting accuracy and operational visibility across the supply chain.",
    Icon: IconSupplyChain,
  },
  {
    title: "Executive Decision Support",
    desc: "Give leaders real-time, predictive insight to make faster, more confident decisions.",
    Icon: IconExecutiveSupport,
  },
];

const BusinessOutcomes = () => {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="absolute inset-0">
        <Image src={OutcomesBgImg} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/50 mix-blend-hue" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-10 sm:mb-14 flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-black"
          >
            Business Outcomes
          </motion.h2>
          <div className="text-[14px] sm:text-lg lg:text-xl text-black font-light">
            <p>Transformation shouldn&apos;t end at Go-Live.</p>
            <p>The real impact begins afterward.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {OUTCOMES.map((o, index) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-[3px_4px_17px_rgba(0,0,0,0.25)] p-5 sm:p-6 flex flex-col items-center text-center gap-4 transition-shadow duration-400 hover:shadow-[0_25px_45px_-15px_rgba(0,97,175,0.55)]"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-[#0061AF] w-11 h-11"
              >
                <o.Icon />
              </motion.div>
              <h3 className="text-[16px] sm:text-xl font-medium text-black">{o.title}</h3>
              <p className="text-[12px] sm:text-sm text-[#515151] font-light leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOutcomes;
