"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";

import panelBg from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Image-1.jpg";
import energyIcon from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/icons/hugeicons_energy.svg";
import handshakeIcon from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/icons/handshake_svgrepo.com.svg";
import transferIcon from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/icons/transfer-horizontal_svgrepo.com.svg";
import globeIcon from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/icons/ph_globe-light.svg";

const OUTCOMES = [
  { icon: energyIcon, type: "image", label: "Improved System Performance" },
  { icon: handshakeIcon, type: "image", label: "Faster Access to Expertise" },
  { icon: transferIcon, type: "image", label: "Flexible Project Execution" },
  { icon: globeIcon, type: "image", label: "Transparent Engagement" },
  { icon: BookOpen, type: "lucide", label: "Knowledge Transfer" },
  { icon: Users, type: "lucide", label: "Long-Term Partnership" },
];

const OutcomeTile = ({ item, index }) => {
  const IconEl = item.icon;
  const isImageIcon = item.type === "image";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 sm:p-5"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
        {isImageIcon ? (
          <Image src={IconEl} alt="" className="h-5 w-5 invert" />
        ) : (
          <IconEl className="h-5 w-5 text-white" strokeWidth={1.75} />
        )}
      </span>
      <span className="text-sm font-medium leading-snug text-white sm:text-base">{item.label}</span>
    </motion.div>
  );
};

const BusinessOutcomes = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <h2 className="text-3xl font-medium text-black sm:text-4xl">Business Outcomes</h2>
        <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
          Evaluate your business processes, identify ERP requirements, and define a roadmap for cloud
          ERP adoption.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute -inset-[12%]">
            <Image src={panelBg} alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-sky-950/85" />
          <div className="relative grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 sm:p-8">
            {OUTCOMES.map((item, index) => (
              <OutcomeTile key={item.label} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center gap-4"
        >
          <span className="text-lg font-medium text-cyan-600">Industry-Focused Experience</span>
          <h3 className="text-2xl font-medium text-black sm:text-3xl">
            Designed Around Your Business
          </h3>
          <p className="text-lg font-medium text-sky-950 sm:text-xl">
            End-to-End Enterprise Services
          </p>
          <p className="text-base leading-relaxed text-neutral-500 sm:text-lg">
            From consulting and implementation to AMS support and digital transformation, Ascendus
            provides complete lifecycle enterprise solutions built around your industry, your
            processes, and your long-term roadmap.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BusinessOutcomes;
