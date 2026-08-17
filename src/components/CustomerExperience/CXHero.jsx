"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    title: "CRM Journey",
    description:
      "Create a connected customer relationship—linking the right targets with every interaction into one unified experience.",
    href: "#",
    dark: true,
  },
  {
    title: "Customer Journey Mapping",
    description:
      "Visualize every customer touchpoint to identify friction, optimize friction, and improve engagement.",
    href: "#",
    dark: false,
  },
  {
    title: "Customer Analytics",
    description:
      "Turn customer data into actionable insights that improve business decisions and future experiences.",
    href: "#",
    dark: false,
  },
  {
    title: "Customer Engagement",
    description:
      "Drive personalized interactions across every channel that strengthen relationships and deepen customer satisfaction.",
    href: "#",
    dark: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CXHero = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-4 max-w-3xl text-center"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Create Experiences Customers Remember
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Exceptional customer experiences are built through every interaction—not just every transaction. Ascendus
            helps organizations design connected customer journeys, strengthen relationships, and deliver
            personalized experiences that drive loyalty, engagement, and business growth.
          </p>
          <p className="mt-3 text-sm font-medium uppercase tracking-widest text-slate-400">
            Understand Better. Engage Smarter. Grow Strong
          </p>
        </motion.div>

        {/* 2×2 Pillar Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className={`group flex flex-col justify-between rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-lg ${
                pillar.dark
                  ? "border-sky-900 bg-sky-950 text-white"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    pillar.dark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    pillar.dark ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {pillar.description}
                </p>
              </div>

              <Link
                href={pillar.href}
                className={`mt-8 inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                  pillar.dark
                    ? "text-cyan-400 hover:text-cyan-300"
                    : "text-sky-700 hover:text-sky-900"
                }`}
              >
                See More
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CXHero;
