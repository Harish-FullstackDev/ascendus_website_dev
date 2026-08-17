"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, GitBranch, Wallet, ShieldCheck, RefreshCw } from "lucide-react";

const CARDS = [
  {
    title: "Business Alignment",
    desc: "Align every cloud investment decision with clear business outcomes and measurable ROI.",
    icon: Target,
    size: "wide",
  },
  {
    title: "Governance & Workflows",
    desc: "Establish clear approval workflows, guardrails, and accountability across your cloud environment.",
    icon: GitBranch,
    size: "wide",
  },
  {
    title: "Cost Visibility",
    desc: "Real-time visibility into cloud spend so teams can make informed, cost-aware decisions.",
    icon: Wallet,
    size: "narrow",
  },
  {
    title: "Risk Mitigation",
    desc: "Identify architectural and compliance risks early, before they become expensive to fix.",
    icon: ShieldCheck,
    size: "narrow",
  },
  {
    title: "Continuous Optimization",
    desc: "Ongoing reviews keep your cloud environment tuned for performance and cost as you scale.",
    icon: RefreshCw,
    size: "narrow",
  },
];

const BentoCard = ({ title, desc, Icon, heightClass, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, delay }}
    whileHover={{ y: -6 }}
    className={`group relative bg-gradient-to-b from-[#f3f9ff] to-[#c4e0fd] border border-[#d3d5d8] rounded-[18px] overflow-hidden flex flex-col ${heightClass} transition-shadow duration-500 hover:shadow-[0_25px_50px_-20px_rgba(0,97,175,0.45)]`}
  >
    <div className="flex flex-col gap-3 p-7 md:p-8 relative z-10">
      <motion.span
        whileHover={{ scale: 1.12, rotate: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-11 h-11 rounded-xl bg-white/70 flex items-center justify-center text-[#0A65CC] shadow-sm"
      >
        <Icon className="w-5.5 h-5.5" strokeWidth={1.75} />
      </motion.span>
      <p className="text-[24px] md:text-[28px] font-medium text-[#041527] tracking-[0.28px] leading-[1.1]">{title}</p>
      <p className="text-[16px] md:text-[18px] font-light text-[#041527]/80 leading-[1.55] max-w-[380px]">{desc}</p>
    </div>
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/40 blur-2xl"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>
);

const FeatureCards = () => {
  const wide = CARDS.filter((c) => c.size === "wide");
  const narrow = CARDS.filter((c) => c.size === "narrow");

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1143px] mx-auto px-6 md:px-8 flex flex-col gap-[56px] md:gap-[71px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col gap-4"
        >
          <h2 className="text-[28px] md:text-[36px] font-semibold text-black">Business Value</h2>
          <p className="text-[#515151] text-[18px] md:text-[24px] font-light max-w-[694px] mx-auto leading-normal">
            Where a strong cloud strategy pays off across your organization.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 md:gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {wide.map((c, i) => (
              <BentoCard
                key={c.title}
                title={c.title}
                desc={c.desc}
                Icon={c.icon}
                heightClass="h-[300px] md:h-[360px]"
                delay={i * 0.1}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {narrow.map((c, i) => (
              <BentoCard
                key={c.title}
                title={c.title}
                desc={c.desc}
                Icon={c.icon}
                heightClass="h-[280px] md:h-[340px]"
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
