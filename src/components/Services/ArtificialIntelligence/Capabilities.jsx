"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CapabilitiesBg from "@/assets/Service/Artificial Intelligence/capabilities-bg.png";
import { AIStrategyIcon, GenAIIcon, MLIcon, BusinessAIIcon } from "./Icons";

const capabilities = [
  {
    icon: AIStrategyIcon,
    title: "AI Strategy",
    description:
      "Successful AI adoption begins with a strategy. We assess your business objectives, identify high-value use cases, and develop an AI roadmap that aligns technology investments with measurable business outcomes.",
    link: "/services/artificialIntelligence/ai-strategy",
  },
  {
    icon: GenAIIcon,
    title: "Generative AI",
    description:
      "Leverage Generative AI to automate content creation, enhance customer interactions, improve knowledge management, and increase workforce productivity.",
    link: "/services/artificialIntelligence/generative-ai",
  },
  {
    icon: MLIcon,
    title: "Machine Learning",
    description:
      "Machine Learning helps organizations discover patterns, forecast outcomes, and make informed decisions. We build intelligent models that improve accuracy, efficiency, and business performance.",
    link: "/services/artificialIntelligence/machine-learning",
  },
  {
    icon: BusinessAIIcon,
    title: "Business AI",
    description:
      "Business AI integrates intelligent capabilities into enterprise processes, helping teams make faster decisions, automate routine tasks, and improve operational efficiency.",
    link: "/services/artificialIntelligence/business-ai",
  },
];

const Capabilities = () => {
  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900"
          >
            Our AI Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-600 text-lg md:text-xl leading-[1.32]"
          >
            Transformation shouldn&apos;t end at Go-Live.
            <br />
            The real impact begins afterward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-[83px]">
          {capabilities.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={card.link}
                className="group relative rounded-[22px] overflow-hidden shadow-[4px_4px_6.1px_rgba(0,0,0,0.25)] border border-[#aeaeae]/50 flex flex-col justify-between p-5 h-[280px] sm:h-[313px] transition-shadow duration-500 hover:shadow-[0_25px_55px_-20px_rgba(0,97,175,0.65)]"
              >
                <div className="absolute inset-0 pointer-events-none rounded-[22px]">
                  <Image
                    src={CapabilitiesBg}
                    alt=""
                    fill
                    className="object-cover rounded-[22px] transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0061af] mix-blend-hue rounded-[22px] transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                <div className="relative z-10 bg-white/46 rounded-[10px] shadow-[2px_2px_10.5px_rgba(0,0,0,0.25)] w-[62px] h-[62px] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/70">
                  <card.icon />
                </div>

                <div className="relative z-10 flex flex-col gap-2">
                  <p className="font-medium text-xl text-black leading-tight">{card.title}</p>
                  <p className="font-light text-sm text-black leading-snug">{card.description}</p>
                </div>

                <div className="relative z-10">
                  <span className="bg-white rounded-[7px] px-4 h-[36px] w-fit inline-flex items-center gap-2 text-[#2E3033] text-sm font-normal transition-colors duration-300 group-hover:bg-[#2E3033] group-hover:text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
