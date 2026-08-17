"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCcw, TrendingUp, Headset, ShieldCheck } from "lucide-react";

const CARDS = [
  {
    icon: RefreshCcw,
    title: "Zero-Downtime Migration",
    body: "Move workloads to the cloud with structured cutover plans that keep applications and data available throughout the transition.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Cloud Architecture",
    body: "Design environments that scale elastically with demand, so performance keeps pace with business growth long after go-live.",
  },
  {
    icon: Headset,
    title: "Dedicated Migration Support",
    body: "From planning to go-live and beyond, our engineers provide hands-on support at every stage of your migration.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    body: "Every migration runs with built-in security controls and compliance safeguards to keep your data protected.",
  },
];

const WhyChooseSST = () => {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-16 md:px-16 md:py-20">
      {/* Background glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-0 h-[391px] w-[646px] rounded-full bg-gradient-to-br from-[#9F64FF] to-[#4B3BE4] opacity-60 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-[656px]"
        >
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-[48px]">
            Why Businesses Trust Ascendus for Migration
          </h2>
          <p className="text-lg font-normal text-white/70 md:text-[21px]">
            Ascendus gives your teams the tools and expertise to plan, execute, and support cloud
            migrations collaboratively, at scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex min-h-[332px] flex-col items-start justify-between rounded-[17px] border-2 border-[#4c4c4c] bg-black p-8 shadow-[2px_4px_2px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:border-[#0061AF]"
            >
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0061AF]/20 group-hover:text-[#66cdf3]">
                <card.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="mt-6">
                <p className="mb-3 text-[17.5px] font-medium text-white">{card.title}</p>
                <p className="text-[14px] font-normal leading-relaxed text-white/80">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSST;
