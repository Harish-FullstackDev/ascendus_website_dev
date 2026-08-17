"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const TABS = [
  {
    title: "Data Engineering",
    desc: "Construct robust, high-volume lakehouses and databases. We implement standard automated extraction pipelines (ETL/ELT) that transform scattered system logs and transaction tables into querying-ready warehouses.",
    actionText: "Explore Data Engineering",
    href: "/services/dataIntelligence/data-engineering"
  },
  {
    title: "Data Integration",
    desc: "Connect your custom CRM nodes, cloud services, and legacy servers securely. We automate sync events using webhook workflows, pub-sub architectures, and secure client-server proxies.",
    actionText: "Explore Data Integration",
    href: "/services/dataIntelligence/data-integration"
  },
  {
    title: "Data Governance",
    desc: "Secure data assets and maintain compliance standards. We establish clear column access rules, automated audit logs, and catalog indexing so your databases remain secure and organized.",
    actionText: "Explore Data Governance",
    href: "/services/dataIntelligence/data-governance"
  },
  {
    title: "Advanced Analytics",
    desc: "Deploy forecasting scripts, machine learning models, and interactive dashboard analytics. We structure pipelines that compile raw log events into real-time business telemetry tables.",
    actionText: "Explore Advanced Analytics",
    href: "/services/dataIntelligence/advanced-analytics"
  }
];

const DIGrowWithSapTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-slate-50 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="mx-auto max-w-7xl">

        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0061af] mb-3 block">
            <Sparkles className="h-4.5 w-4.5 text-[#0061af] inline-block mr-2" />
            GROW with SAP Integration
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Value of GROW with SAP
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            [Establish scalable data frameworks that align with modern SAP architecture, enabling secure enterprise migrations, robust automation, and predictive data engineering structures.]
          </p>
        </div>

        {/* Split Screen Grid Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">

          {/* Left Side: Vertical Metallic Glassmorphism Card */}
          <div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden min-h-[350px] lg:min-h-full flex items-center shadow-lg border border-slate-200/50 bg-slate-900">
            {/* Background tall image */}
            <Image
              src="/ServicePage/DataIntelligence/grow-sap-glassmorphism-bg.jpg"
              alt="Vertical system dashboard preview"
              fill
              className="object-cover opacity-40 select-none pointer-events-none"
            />
            {/* Absolute Dark Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40" />

            {/* fine vertical metallic lines / reflective gradient mask */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255,255,255,0.15) 15px, rgba(255,255,255,0.15) 16px)`
              }}
            />

            {/* Reflective shine gradient mask */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.05)_100%)] pointer-events-none" />

            {/* Glass Box text details */}
            <div className="relative p-8 sm:p-10 flex flex-col justify-end h-full z-10 w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 self-start mb-4">
                <Sparkles className="h-4.5 w-4.5 text-[#0061af] inline-block mr-2" />
                Enterprise SAP Gateway
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Data Core Optimization
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                [Deploying cloud-native infrastructures. We structure database indexes to optimize ERP transaction loads, reducing analytical query response latency by half.]
              </p>
            </div>
          </div>

          {/* Right Side: Accordion menu list */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {TABS.map((tab, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border-b border-slate-200 transition-all duration-300 rounded-2xl overflow-hidden bg-white ${isOpen
                    ? "shadow-md border-t border-slate-100"
                    : "border border-slate-100/50 hover:bg-slate-50/50"
                    }`}
                >
                  {/* Select button header */}
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span
                      className={`text-base font-bold transition-colors duration-200 ${isOpen ? "text-[#0061af]" : "text-slate-800 hover:text-slate-900"
                        }`}
                    >
                      {tab.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0061af]" : ""
                        }`}
                    />
                  </button>

                  {/* Accordion content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-50">
                          <p className="text-slate-500 text-sm leading-relaxed mb-5">
                            {tab.desc}
                          </p>
                          <div>
                            <Link
                              href={tab.href}
                              className="inline-flex items-center gap-2 text-xs font-bold text-[#0061af] hover:text-[#2272a0] tracking-wide transition-colors uppercase"
                            >
                              {tab.actionText}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DIGrowWithSapTabs;
