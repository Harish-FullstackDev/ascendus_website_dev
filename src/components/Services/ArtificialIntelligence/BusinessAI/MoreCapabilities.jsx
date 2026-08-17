"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import CapabilityCardBgImg from "@/assets/Service/Artificial Intelligence/Business AI/capability-card-bg.png";

const CARDS = [
  {
    title: "Enterprise Insights",
    desc: "Turn scattered business data into a single source of truth leaders can act on.",
  },
  {
    title: "Workflow Automation",
    desc: "Automate approvals, routing, and hand-offs across departments without manual intervention.",
  },
  {
    title: "Intelligent Decisions Start with Connected Data",
    desc: "Connect data across SAP, CRM, and enterprise systems so every decision is grounded in the full picture.",
  },
  {
    title: "Natural Language Interfaces",
    desc: "Let employees ask questions in plain language and get instant, accurate answers.",
  },
  {
    title: "Building an AI-Driven Enterprise",
    desc: "Establish the governance, skills, and platform needed to scale AI safely across the business.",
  },
  {
    title: "Continuous Process Improvement",
    desc: "Monitor live operations and surface optimization opportunities as conditions change.",
  },
];

function CapabilityCard({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex gap-4 items-center px-5 py-4 overflow-hidden transition-shadow duration-400 hover:shadow-[0_18px_35px_-12px_rgba(0,97,175,0.5)]"
    >
      <div className="absolute inset-0 bg-[rgba(119,202,249,0.18)] rounded-[20px] transition-colors duration-300 group-hover:bg-[rgba(119,202,249,0.32)]" />
      <Image
        src={CapabilityCardBgImg}
        alt=""
        fill
        className="object-cover rounded-[20px] pointer-events-none"
      />
      <div className="relative flex flex-col gap-1 flex-1 min-w-0">
        <p className="text-[15px] sm:text-[17px] font-normal text-black truncate transition-colors duration-300 group-hover:text-[#2E3033]">
          {title}
        </p>
        <p className="text-[12px] sm:text-[13px] font-light text-black leading-snug">{desc}</p>
      </div>
    </motion.div>
  );
}

const MoreCapabilities = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-10 sm:mb-12 flex flex-col gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-black"
          >
            More Ways Business AI Delivers Value
          </motion.h2>
          <p className="text-[14px] sm:text-lg lg:text-xl text-[#515151] font-light max-w-[620px] mx-auto">
            Practical ways Business AI strengthens decision-making and efficiency across the
            enterprise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {CARDS.map((c, i) => (
            <CapabilityCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreCapabilities;
