"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const DIHero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:pt-25 lg:pb-38 px-4 sm:px-6 lg:px-8 text-white"
      style={{
        backgroundImage: "url('/ServicePage/DataIntelligence/head.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {/* Mesh/Nebula Background Effect */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative">
        {/* Left-Aligned Navigation Back Link */}
        <div className="mb-10 text-left">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Data & Intelligence</span>
          </Link>
        </div>

        {/* Centered Main Layout */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-cyan-500/10 text-cyan-400 uppercase mb-4 border border-cyan-500/15"
          >
            Enterprise Decision Support
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]"
          >
            Transform Data into Meaningful Business Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl"
          >
            [Establish secure, automated server systems that sync your distributed transactional nodes, logs, and third-party files. Ascendus builds clean lakehouses, telemetry charts, and analytics models to enable precision operations.]
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
              Connect Data. Discover Insights. Drive Growth.
            </span>

            <button
              onClick={() => {
                document.getElementById("cta-banner")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-2 inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold tracking-wide bg-[#0061af] hover:bg-[#2272a0] text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Consult an Expert
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DIHero;
