"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import cubesImg from "@/assets/Service/Data&Intelligence/Data Integration/Frame 1000003845.jpg";
import arrowIcon from "@/assets/Service/Data&Intelligence/Data Integration/icons/Component 1.svg";

const SERVICES = [
  {
    title: "Metadata Cataloging & Search",
    desc: "Index database tables, schemas, and descriptors in a unified registry for rapid discovery.",
    featured: true,
  },
  { title: "End-to-End Data Lineage", desc: "Visualize and track data flows from source ingestion points to downstream reporting tools." },
  { title: "Automated Data Profiling", desc: "Deploy continuous audit checks to flag duplicate profiles, empty values, or syntax errors." },
  { title: "Column Masking & Policies", desc: "Write access rules to dynamically mask sensitive details (SSNs, emails) for unauthorized queries." },
  { title: "Compliance Readiness Controls", desc: "Align security policies automatically with CCPA, GDPR, and HIPAA data standards." },
  { title: "Ownership & Role Workflows", desc: "Define database ownership domains and establish approval tracks for schema changes." },
];

const OurDataGovernanceServices = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
            Our Data Governance & Quality Services
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#7b7b7b]">
            Secure your datasets, improve system compliance, and maintain clean database repositories.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-16">
          {/* Left: services list */}
          <div className="flex flex-1 flex-col">
            {SERVICES.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`group flex items-start gap-4 border-b border-black/10 py-5 ${
                  item.featured ? "pt-0" : ""
                }`}
              >
                <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2E3033] transition-colors duration-300 group-hover:bg-[#0061af]">
                  <Image src={arrowIcon} alt="" className="h-3 w-3" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-medium text-black sm:text-2xl">{item.title}</h3>
                  <p className="text-base font-light text-[#7b7b7b] sm:text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: dark image panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="group relative h-[320px] w-full flex-shrink-0 overflow-hidden rounded-[28px] shadow-xl sm:h-[420px] lg:h-auto lg:w-[380px]"
          >
            <Image
              src={cubesImg}
              alt=""
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E3033]/90 via-[#2E3033]/20 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
              <span className="text-5xl font-semibold text-white/30 sm:text-6xl">02</span>
              <p className="text-xl font-medium leading-snug text-white sm:text-2xl">
                Protecting business integrity through unified security classifications and automated audits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurDataGovernanceServices;
