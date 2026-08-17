"use client";
import React from "react";
import { motion } from "framer-motion";

const CHALLENGES = [
  {
    title: "Business Downtime",
    description: "Minimize disruption with carefully sequenced cutover windows and tested rollback plans.",
  },
  {
    title: "Faster Performance",
    description: "Right-size infrastructure and tune workloads for consistently faster response times.",
  },
  {
    title: "Lower Operational Costs",
    description: "Reduce hardware and maintenance overhead by consolidating onto modern platforms.",
  },
  {
    title: "Greater Flexibility",
    description: "Scale resources up or down as business needs change, without long procurement cycles.",
  },
  {
    title: "Enhanced Reliability",
    description: "Built-in redundancy and monitoring keep critical systems available around the clock.",
  },
  {
    title: "Business Continuity",
    description: "Phased migration waves ensure operations continue uninterrupted throughout the project.",
  },
];

const ChallengeCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    whileHover={{ y: -5 }}
    className="group flex flex-col gap-2 rounded-2xl bg-gradient-to-br from-sky-950 to-cyan-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_45px_-10px_rgba(8,145,178,0.45)]"
  >
    <h3 className="text-lg font-medium text-white sm:text-xl">{item.title}</h3>
    <p className="text-sm leading-relaxed text-white/70 sm:text-base">{item.description}</p>
  </motion.div>
);

const MigrationChallenges = () => {
  const leftColumn = CHALLENGES.filter((_, i) => i % 2 === 0);
  const rightColumn = CHALLENGES.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            Common Migration Challenges We Solve
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Ascendus provides comprehensive migration services that cover every stage of the SAP
            lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <div className="flex flex-col gap-5 sm:gap-6">
            {leftColumn.map((item, index) => (
              <ChallengeCard key={item.title} item={item} index={index * 2} />
            ))}
          </div>
          <div className="flex flex-col gap-5 sm:gap-6 sm:pt-12">
            {rightColumn.map((item, index) => (
              <ChallengeCard key={item.title} item={item} index={index * 2 + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationChallenges;
