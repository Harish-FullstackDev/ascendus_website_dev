"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Database, Workflow, EyeOff, CircleDollarSign } from "lucide-react";
import challengesBg from "@/assets/Service/Enterprise Transformation/Rise with SAP/2c1a139a7c677a6f626ac748cd4ffe2cbf7efaf0.jpg";

const CHALLENGES = [
  {
    icon: Database,
    title: "Legacy ERP limitations",
    description: "Replace outdated systems with a modern cloud solution. Improve performance and prepare for future growth.",
  },
  {
    icon: Workflow,
    title: "Manual and disconnected processes",
    description: "Connect your business processes in one platform. Work faster with better collaboration across teams.",
  },
  {
    icon: EyeOff,
    title: "Limited business visibility",
    description: "See your business data in real time. Make better decisions with clear insights.",
  },
  {
    icon: CircleDollarSign,
    title: "High operational costs",
    description: "Reduce IT costs with a simplified cloud environment. Improve efficiency while lowering operational expenses.",
  },
];

const CommonChallenges = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24">
      <Image src={challengesBg} alt="" fill className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-white sm:text-4xl">
            Common Challenges We Help Eliminate
          </h2>
          <p className="mt-4 text-lg text-neutral-300 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap aligned with your business objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {CHALLENGES.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-5 rounded-2xl px-2 py-3 text-center transition-colors duration-300 hover:bg-white/5 lg:px-6"
            >
              <span className="text-lg font-normal text-white">{challenge.title}</span>
              <motion.div
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/0 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:ring-cyan-300/40"
              >
                <challenge.icon className="h-9 w-9" strokeWidth={1.5} />
              </motion.div>
              <p className="text-base text-white/80">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonChallenges;
