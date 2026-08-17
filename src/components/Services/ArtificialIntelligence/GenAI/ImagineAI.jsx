"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import AiCardBg from "@/assets/Service/Artificial Intelligence/Gen AI/ai-card-bg.png";

const AI_CARDS = [
  {
    title: "Customer Experience",
    desc: "Create personalized customer interactions with intelligent virtual assistants and AI-powered support.",
  },
  {
    title: "Employee Productivity",
    desc: "Help teams generate content, summarize meetings, and access enterprise knowledge instantly.",
  },
  {
    title: "Business Operations",
    desc: "Automate documentation, reporting, and repetitive business processes with AI assistance.",
  },
  {
    title: "Decision Intelligence",
    desc: "Turn large volumes of business information into meaningful summaries and recommendations.",
  },
];

function AiCard({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl h-56 md:h-60 lg:h-[270px] shadow-[4px_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_25px_50px_-15px_rgba(0,97,175,0.55)]"
    >
      <div className="absolute inset-0">
        <Image
          src={AiCardBg}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#0061af] mix-blend-hue" />
        <div className="absolute inset-0 bg-[#2E3033]/30 transition-colors duration-500 group-hover:bg-[#2E3033]/10" />
      </div>

      <div className="relative z-10 p-6 lg:p-7 flex flex-col justify-between gap-3 h-full">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl lg:text-2xl font-medium text-white">{title}</h3>
          <p className="text-[#d9d9d9] text-sm lg:text-base font-light leading-relaxed">{desc}</p>
        </div>

        <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0">
          Explore
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

const ImagineAI = () => {
  return (
    <section className="border-t border-[#D4D3D3] pt-12 pb-12 lg:pt-16 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-10 lg:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-3xl font-medium text-black mb-5"
          >
            Imagine AI Across Your Business
          </motion.h2>
          <div className="text-[#515151] text-base lg:text-lg font-light leading-relaxed">
            <p>Transformation shouldn&apos;t end at Go-Live.</p>
            <p>The real impact begins afterward.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {AI_CARDS.map((card, index) => (
            <AiCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagineAI;
