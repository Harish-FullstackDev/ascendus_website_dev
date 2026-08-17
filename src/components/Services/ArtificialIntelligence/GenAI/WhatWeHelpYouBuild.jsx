"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import BuildOverviewImg from "@/assets/Service/Artificial Intelligence/Gen AI/build-overview.png";
import BuildContentImg from "@/assets/Service/Artificial Intelligence/Gen AI/build-content-creation.png";
import BuildKnowledgeImg from "@/assets/Service/Artificial Intelligence/Gen AI/build-knowledge-discovery.png";

const BUILD_CARDS = [
  {
    img: BuildOverviewImg,
    overlayColor: null,
    tag: "What We Help You Build",
    title:
      "From ideation to execution, Generative AI helps teams create, decide, and act faster across every business function.",
  },
  {
    img: BuildContentImg,
    overlayColor: "#080808",
    tag: "Intelligent Content Creation",
    title:
      "Generate business documents, proposals, presentations, and communications while maintaining consistency and quality.",
  },
  {
    img: BuildKnowledgeImg,
    overlayColor: "#2E3033",
    tag: "Knowledge Discovery",
    title:
      "Enable users to search enterprise information using natural language and receive meaningful answers instantly.",
  },
];

function BuildCard({ img, overlayColor, tag, title, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md flex flex-col transition-shadow duration-500 hover:shadow-[0_25px_50px_-15px_rgba(0,97,175,0.45)]"
    >
      <div className="p-5 lg:p-6 flex-1">
        <p className="font-medium text-sm mb-2 text-[#0061af] transition-colors duration-300 group-hover:text-[#2E3033]">
          {tag}
        </p>
        <p className="text-black text-base lg:text-lg font-normal leading-snug whitespace-pre-line">
          {title}
        </p>
      </div>
      <div className="relative h-44 rounded-b-2xl overflow-hidden">
        {overlayColor && <div className="absolute inset-0 bg-[#080808]" />}
        <Image
          src={img}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {overlayColor && (
          <div className="absolute inset-0 mix-blend-hue" style={{ backgroundColor: overlayColor }} />
        )}
      </div>
    </motion.div>
  );
}

const WhatWeHelpYouBuild = () => {
  return (
    <section className="bg-[#2E3033] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="text-[#0061af] text-2xl lg:text-3xl font-semibold leading-tight mb-3">
            What We Help You Build
          </p>
          <div className="text-white text-base lg:text-lg font-light leading-relaxed">
            <p>Transformation shouldn&apos;t end at Go-Live.</p>
            <p>The real impact begins afterward.</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {BUILD_CARDS.map((card, index) => (
            <BuildCard key={card.tag} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHelpYouBuild;
