"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import FinanceImg from "@/assets/Service/Artificial Intelligence/Business AI/function-finance.png";
import SalesImg from "@/assets/Service/Artificial Intelligence/Business AI/function-sales-marketing.png";
import HRImg from "@/assets/Service/Artificial Intelligence/Business AI/function-hr.png";
import CustomerImg from "@/assets/Service/Artificial Intelligence/Business AI/function-customer-service.png";
import SupplyImg from "@/assets/Service/Artificial Intelligence/Business AI/function-supply-chain.png";
import ExecutiveImg from "@/assets/Service/Artificial Intelligence/Business AI/function-executive.png";

const FUNCTION_CARDS = [
  {
    title: "Finance & Accounting",
    desc: "Automate financial processes, improve forecasting, detect anomalies, and support better financial planning with intelligent insights.",
    img: FinanceImg,
  },
  {
    title: "Sales & Marketing",
    desc: "Generate customer insights, improve lead qualification, and support revenue growth with AI-driven recommendations.",
    img: SalesImg,
  },
  {
    title: "Human Resources",
    desc: "Streamline recruitment, employee onboarding, workforce planning, and HR support using intelligent automation.",
    img: HRImg,
  },
  {
    title: "Customer Service",
    desc: "Enhance customer interactions with AI-powered assistants, intelligent case management, and faster issue resolution.",
    img: CustomerImg,
  },
  {
    title: "Supply Chain & Operations",
    desc: "Improve demand forecasting, inventory planning, logistics optimization, and operational visibility across the supply chain.",
    img: SupplyImg,
  },
  {
    title: "Executive Support",
    desc: "Provide business leaders with real-time dashboards, predictive insights, and data-driven intelligence for strategic planning.",
    img: ExecutiveImg,
  },
];

function FunctionCard({ title, desc, img, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative rounded-xl overflow-hidden shadow-[4px_4px_14px_rgba(0,0,0,0.2)] flex flex-col bg-white hover:bg-[rgba(0,97,175,0.61)] transition-colors duration-300"
    >
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="text-[17px] sm:text-[20px] font-medium text-black group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[13px] sm:text-[15px] font-light leading-relaxed text-[#515151] group-hover:text-white/90 transition-colors duration-300">
          {desc}
        </p>
      </div>
      <div className="h-[140px] sm:h-[160px] relative rounded-xl mx-3 sm:mx-4 mb-4 overflow-hidden shrink-0">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute bottom-2 left-2 bg-[#0061af] rounded-full w-9 h-9 flex items-center justify-center shadow-inner">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
            <rect x="2" y="4" width="12" height="1.5" rx="0.75" />
            <rect x="2" y="7.25" width="12" height="1.5" rx="0.75" />
            <rect x="2" y="10.5" width="8" height="1.5" rx="0.75" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

const BusinessFunctions = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-10 sm:mb-12 flex flex-col gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-black"
          >
            AI Across Every Business Function
          </motion.h2>
          <p className="text-[14px] sm:text-lg lg:text-xl text-[#515151] font-light max-w-[620px] mx-auto">
            Evaluate your business processes, identify ERP requirements, and define a roadmap for
            cloud ERP adoption.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {FUNCTION_CARDS.map((card, index) => (
            <FunctionCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFunctions;
