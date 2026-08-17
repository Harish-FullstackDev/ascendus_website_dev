"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 63.jpg";
import img2 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 64.jpg";
import img3 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 65.jpg";
import img4 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 66.jpg";
import img5 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 67.jpg";
import img6 from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/Frame 68.jpg";

const SERVICES = [
  {
    title: "SAP Version Upgrades",
    description: "Upgrade to the latest supported SAP version while maintaining business continuity and system stability.",
    image: img1,
  },
  {
    title: "Feature & Functionality Enhancement",
    description: "Enable new capabilities and business features that improve operational efficiency and user experience.",
    image: img2,
  },
  {
    title: "Performance Optimization",
    description: "Optimize system speed, throughput, and overall user experience across every module.",
    image: img3,
  },
  {
    title: "Security & Compliance Updates",
    description: "Keep your SAP environment aligned with the latest security standards, compliance requirements, and best practices.",
    image: img4,
  },
  {
    title: "Custom Code Optimization",
    description: "Review and optimize custom developments to remain compatible with the upgraded environment.",
    image: img5,
  },
  {
    title: "Post-Upgrade Support",
    description: "Provide stabilization, monitoring, and continuous optimization after the upgrade is complete.",
    image: img6,
  },
];

const UpgradationServices = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-medium text-black sm:text-4xl">
          Our SAP Upgradation Services
        </h2>
        <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
          Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative h-56 overflow-hidden rounded-2xl shadow-[4px_4px_20px_0px_rgba(8,47,73,0.12)]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/95 via-sky-950/55 to-sky-950/10 transition-colors duration-500 group-hover:from-cyan-900/95" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-1.5 p-5">
              <h3 className="text-lg font-medium text-white sm:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UpgradationServices;
