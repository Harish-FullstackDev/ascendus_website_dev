"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Database, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";

const DIAfternatingFeatures = () => {
  return (
    <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0061af] mb-3 block">
            <Sparkles className="h-4.5 w-4.5 text-[#0061af] inline-block mr-2" />
            Capabilities Overview
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Data That Powers Better Decisions
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            Leverage continuous data loops to discover optimization potential. We decouple bottlenecks, establish database pipelines, and compile analytics graphs designed for your operational scales.
          </p>
        </div>

        {/* Feature 1: Left Text, Right Abstract Container */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="h-12 w-12 rounded-2xl bg-sky-50 text-[#0061af] flex items-center justify-center mb-6">
              <Database className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
              Consolidated Business Telemetry
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Siloed business departments execute decisions on contradictory data columns. Ascendus designs consolidated telemetry systems that merge Salesforce CRM logs, enterprise SAP platforms, and custom operational tables into a single source of truth.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              Standardize formatting, resolve duplicate rows automatically, and compile consistent data points across your entire product ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative h-[350px] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-lg"
          >
            <Image
              src="/ServicePage/DataIntelligence/business-intelligence-dashboard.jpg"
              alt="Business Intelligence Dashboard"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Dark overlay for a premium look */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/45 via-slate-900/20 to-transparent" />

            {/* Accent glow */}
            <div className="absolute bottom-6 left-6 h-20 w-20 rounded-full bg-[#0061af]/20 blur-2xl" />
          </motion.div>
        </div>

        {/* Feature 2: Left Abstract Container, Right Text */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-2 lg:order-1 relative h-[350px] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-lg"
          >
            <Image
              src="/ServicePage/DataIntelligence/cloud-data-engineering.jpg"
              alt="Cloud Data Engineering"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-bl from-slate-950/45 via-slate-900/20 to-transparent" />

            {/* Accent glow */}
            <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="h-12 w-12 rounded-2xl bg-sky-50 text-[#0061af] flex items-center justify-center mb-6">
              <Cpu className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
              Automated Pipeline Integrity
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Siloed business departments execute decisions on contradictory data columns. Ascendus designs consolidated telemetry systems that merge Salesforce CRM logs, enterprise SAP platforms, and custom operational tables into a single source of truth.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              Standardize formatting, resolve duplicate rows automatically, and compile consistent data points across your entire product ecosystem.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DIAfternatingFeatures;
