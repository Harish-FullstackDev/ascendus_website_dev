"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Code2, Gauge, Unlock, DollarSign } from "lucide-react";

const FEATURES = [
  {
    icon: Lock,
    title: "Secure",
    desc: "Configure your infrastructure in your own cloud, using best practices, automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant",
    desc: "Get an audit trail of your migration from requirements, to execution, to validation.",
  },
  {
    icon: Code2,
    title: "Developer-native",
    desc: "Migrations are surfaced intuitively, empowering your team regardless of DevOps experience.",
  },
  {
    icon: Gauge,
    title: "Scalable",
    desc: "Your cloud environment is there for your users, sized to avoid surprise capacity limits.",
  },
  {
    icon: Unlock,
    title: "No Lock-in",
    desc: "Cut off access at any time — your infrastructure remains safe in your own cloud account.",
  },
  {
    icon: DollarSign,
    title: "Cost-effective",
    desc: "Get back engineering time and optimize your cloud spend well beyond go-live.",
  },
];

const FeatureItem = ({ Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -4 }}
    className="group flex flex-col gap-4 rounded-[9px] p-6 transition-colors duration-300 hover:bg-white/5"
  >
    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[4px] bg-[#1f1c26] transition-colors duration-300 group-hover:bg-[#0061AF]/30">
      <Icon className="h-[18px] w-[18px] text-[#C2B8FF] transition-colors duration-300 group-hover:text-white" strokeWidth={1.75} />
    </div>
    <p className="text-[22px] font-normal text-[#f4f2f0]">{title}</p>
    <p className="text-[15px] leading-relaxed text-[#928c97]">{desc}</p>
  </motion.div>
);

const CloudJourney = () => {
  return (
    <section className="bg-black px-6 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1281px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-[48px]">
            Cloud Journey
          </h2>
          <p className="mt-3 text-[18px] font-normal text-white/70 md:text-[21px]">
            Ascendus gives your teams the power to plan, migrate, and manage cloud environments
            collaboratively, at scale.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, index) => (
            <FeatureItem key={f.title} Icon={f.icon} title={f.title} desc={f.desc} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudJourney;
