"use client";
import React from "react";
import { motion } from "framer-motion";

const CHALLENGE_TAGS = [
  { label: "Unsupported SAP Versions", filled: false },
  { label: "Performance Bottlenecks", filled: true },
  { label: "Growing Business Needs", filled: false },
  { label: "Security Risks", filled: true },
  { label: "Complex Customizations", filled: false },
  { label: "Increased Cloud Readiness", filled: true },
  { label: "Improved Performance", filled: false },
  { label: "Stronger Operational Resilience", filled: true },
];

const UpgradeChallengesBadges = () => (
  <section className="relative overflow-hidden bg-white py-14 sm:py-16">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-medium text-black sm:text-4xl">
          Common Upgrade Challenges We Solve
        </h2>
        <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
          Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {CHALLENGE_TAGS.map((tag, index) => (
          <motion.span
            key={tag.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ scale: 1.06, y: -2 }}
            className={`cursor-default rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 sm:text-base ${
              tag.filled
                ? "bg-sky-950 text-white hover:bg-cyan-700"
                : "border border-neutral-300 text-neutral-700 hover:border-cyan-600 hover:text-cyan-700"
            }`}
          >
            {tag.label}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default UpgradeChallengesBadges;
