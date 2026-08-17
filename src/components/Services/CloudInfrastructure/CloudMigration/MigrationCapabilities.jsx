"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScanSearch, ArrowRightLeft, CheckCircle2, PiggyBank, CloudCog, Headset } from "lucide-react";

import textureBg from "@/assets/Service/Cloud & Infrastructure/Cloud Migration/bb8231af313c065329db9aa0f38b64b460272840.png";

const CARDS = [
  {
    icon: ScanSearch,
    title: "Automated Discovery & Assessment",
    desc: "Scan environments automatically to map dependencies, sizing, and complexity before a single workload moves.",
  },
  {
    icon: ArrowRightLeft,
    title: "Zero-Downtime Cutover",
    desc: "Cut over production workloads with replication and failback plans that keep the business running.",
  },
  {
    icon: CheckCircle2,
    title: "Data Integrity Validation",
    desc: "Every migrated dataset is checksummed and reconciled against the source to guarantee accuracy.",
  },
  {
    icon: PiggyBank,
    title: "Cost Optimization Post-Migration",
    desc: "Right-size resources and eliminate waste once workloads are live, not just before the move.",
  },
  {
    icon: CloudCog,
    title: "Multi-Cloud Flexibility",
    desc: "Migrate to AWS, Azure, or Google Cloud — or run a hybrid mix — without being locked to one provider.",
  },
  {
    icon: Headset,
    title: "24/7 Migration Support",
    desc: "Our engineers monitor cutovers around the clock so issues are caught before they impact users.",
  },
];

const MigrationCapabilities = () => {
  return (
    <section className="px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1110px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-medium text-black md:text-3xl lg:text-[32px]">
            Migration Capabilities That Matter
          </h2>
          <p className="mx-auto mt-4 max-w-[694px] font-light text-[#515151] md:text-[24px] lg:text-[27px]">
            Purpose-built capabilities that reduce risk and accelerate every stage of your cloud
            migration.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative flex min-h-[120px] items-center gap-5 overflow-hidden rounded-[20px] px-6 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0px_8px_20px_0px_rgba(8,47,73,0.2)]"
            >
              <div className="absolute inset-0 rounded-[20px] bg-[rgba(119,202,249,0.18)] transition-colors duration-300 group-hover:bg-[rgba(119,202,249,0.3)]" />
              <Image
                src={textureBg}
                alt=""
                fill
                className="pointer-events-none absolute inset-0 rounded-[20px] object-cover opacity-10"
              />
              <div className="relative z-10 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-[12px] bg-white text-[#2E3033] shadow-sm transition-transform duration-300 group-hover:scale-105">
                <card.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div className="relative z-10">
                <p className="text-[18px] font-normal text-black">{card.title}</p>
                <p className="mt-1 text-[16px] font-thin leading-snug text-black">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationCapabilities;
