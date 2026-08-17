"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const MODERNIZATION_LIST = [
  { title: "Legacy Modernization", desc: "[Refactoring codebase roots, decoupling databases, and transforming core structures.]" },
  { title: "Cloud Enablement", desc: "[Deploying container workloads safely to Google Cloud, AWS, or Azure architectures.]" },
  { title: "Performance Optimization", desc: "[Tuning page loading triggers, system caching, and server compute structures.]" },
  { title: "Platform Upgrades", desc: "[Migrating outdated framework versions and code targets with zero business downtime.]" }
];

const DEModernization = () => {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

          {/* Left Column: Typography & Stylized Bulleted List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0061af] mb-3 inline-flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
              System Architecture
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-6">
              Application Modernization
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              [Transition outdated applications into rapid cloud solutions. We help enterprise clients update slow, monolithic codebases to microservices, removing developer gridlocks and raising application speed parameters.]
            </p>

            {/* Interactive/Stylized Bullet List */}
            <div className="space-y-4 mb-8">
              {MODERNIZATION_LIST.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-indigo-50/20 hover:border-indigo-100/50 transition-all duration-200">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-[#0061af] flex items-center justify-center flex-shrink-0 text-xs font-bold font-sans">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/services/digitalEngineering/legacy-modernization"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0061af] hover:text-[#0052a3] group transition-colors duration-200"
              >
                See More
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Overlapping UI Idea Frame */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Visual glow backdrop decoration */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[500px] aspect-[16/10] overflow-hidden"
            >
              {/* Floating Animation for overlapping UI mockup */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/ServicePage/Digital Engineering/application-modernization-ui-frame.png"
                  alt="Application browser UI modernization mock frame showcasing responsive dashboard analytics"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DEModernization;
