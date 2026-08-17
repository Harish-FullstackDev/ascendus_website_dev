"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Bar1Img from "@/assets/Service/Artificial Intelligence/Machine Learning/value-predictive-intelligence.png";
import Bar2Img from "@/assets/Service/Artificial Intelligence/Machine Learning/value-intelligent-automation.png";
import Bar3Img from "@/assets/Service/Artificial Intelligence/Machine Learning/value-customer-personalization.png";
import Bar4Img from "@/assets/Service/Artificial Intelligence/Machine Learning/value-risk-detection.png";
import Bar5Img from "@/assets/Service/Artificial Intelligence/Machine Learning/value-operational-optimization.png";
import Bar6Img from "@/assets/Service/Artificial Intelligence/Machine Learning/value-continuous-learning.png";

const ML_VALUE_ITEMS = [
  {
    title: "Predictive Intelligence",
    desc: "Forecast business trends, customer behavior, and operational outcomes to support proactive decision-making.",
    bg: "#0061af",
    img: Bar1Img,
    textColor: "text-black",
  },
  {
    title: "Intelligent Automation",
    desc: "Reduce repetitive work by enabling systems to make data-driven decisions automatically.",
    bg: "#2E3033",
    img: Bar2Img,
    textColor: "text-white",
  },
  {
    title: "Customer Personalization",
    desc: "Deliver personalized recommendations and experiences based on customer behavior and preferences.",
    bg: "#2E3033",
    img: Bar3Img,
    textColor: "text-black",
  },
  {
    title: "Risk Detection",
    desc: "Identify anomalies, detect fraud, and monitor operational risks using intelligent prediction models.",
    bg: "#2E3033",
    img: Bar4Img,
    textColor: "text-white",
  },
  {
    title: "Operational Optimization",
    desc: "Improve planning, resource utilization, inventory management, and business efficiency through predictive analytics.",
    bg: "#2E3033",
    img: Bar5Img,
    textColor: "text-black",
  },
  {
    title: "Continuous Learning",
    desc: "Enable AI models to improve over time as they process new business data and changing conditions.",
    bg: "#2E3033",
    img: Bar6Img,
    textColor: "text-white",
  },
];

const MLValue = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-10 sm:py-14">
      <div className="max-w-[1192px] mx-auto flex flex-col gap-8">
        <div className="text-center space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-black"
          >
            Where Machine Learning Creates Business Value
          </motion.h2>
          <p className="text-[#515151] text-base sm:text-lg lg:text-xl font-light">
            Transformation shouldn&apos;t end at Go-Live.
            <br className="hidden sm:block" /> The real impact begins afterward.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {ML_VALUE_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex items-center gap-3 sm:gap-4"
            >
              <motion.div
                whileHover={{ x: 4 }}
                className="shrink-0 text-[#1C274C] transition-colors duration-300 group-hover:text-[#0061af]"
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
              <div
                className="relative flex-1 h-[80px] sm:h-[100px] rounded-xl overflow-hidden shadow-[4px_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-500 group-hover:shadow-[0_15px_35px_-12px_rgba(0,97,175,0.55)]"
                style={{ backgroundColor: item.bg }}
              >
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover opacity-30 transition-transform duration-700 ease-out group-hover:scale-110"
                  aria-hidden
                />
                <div
                  className={`absolute inset-0 px-5 sm:px-7 flex flex-col justify-center gap-1 transition-transform duration-500 group-hover:translate-x-1.5 ${item.textColor}`}
                >
                  <p className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">{item.title}</p>
                  <p className="text-xs sm:text-sm font-light leading-snug opacity-90">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLValue;
