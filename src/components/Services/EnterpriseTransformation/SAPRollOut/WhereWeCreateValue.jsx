"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, Languages, Network, RefreshCcw, ShieldCheck, Users } from "lucide-react";

const VALUES = [
  {
    icon: Globe,
    title: "Standardized Operations",
    description:
      "Extend your existing SAP template across new locations while maintaining business consistency and governance.",
  },
  {
    icon: Languages,
    title: "Faster Expansion",
    description:
      "Adapt processes for regional tax regulations, languages, currencies, and statutory requirements without compromising global standards.",
  },
  {
    icon: ShieldCheck,
    title: "Local Compliance",
    description:
      "Meet regional statutory and regulatory requirements while staying aligned with enterprise-wide standards.",
  },
  {
    icon: Network,
    title: "Connected Business",
    description:
      "Keep every location connected through unified data, reporting, and enterprise-wide visibility.",
  },
  {
    icon: Users,
    title: "Scalable Growth",
    description:
      "Prepare business users with structured onboarding, role-based training, and change management initiatives.",
  },
  {
    icon: RefreshCcw,
    title: "Business Continuity",
    description:
      "Support continuous improvement through performance monitoring, process optimization, and business enhancements.",
  },
];

const ValueCard = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.35)] sm:p-9"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-500/20">
        <Icon className="h-7 w-7" strokeWidth={1.75} />
      </span>
      <h3 className="text-xl font-medium text-white sm:text-2xl">{item.title}</h3>
      <p className="text-sm leading-relaxed text-[#aeaeae] sm:text-base">{item.description}</p>
    </motion.div>
  );
};

const WhereWeCreateValue = () => (
  <section
    className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #000000 0%, #0d0d0d 16%, #081d29 23%, #032c45 36%, #062134 48%, #081624 56%, #0a101b 73%, #0b0b13 100%)",
    }}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
    />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <h2 className="text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
          Where We Create Value
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-300 sm:text-xl">
          Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {VALUES.map((item, index) => (
          <ValueCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default WhereWeCreateValue;
