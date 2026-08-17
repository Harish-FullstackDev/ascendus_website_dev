"use client";
import React from "react";
import { motion } from "framer-motion";

const SubServiceHero = ({ title, tagline, description }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-24 md:py-32 border-b border-slate-900">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Sub-Service label tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Capability Detail
            </p>
          </motion.div>

          {/* Large Bold Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Highlight Tagline */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-medium text-blue-300/90 leading-relaxed mb-6 border-l-2 border-blue-500 pl-4 sm:pl-6"
          >
            {tagline}
          </motion.h2>

          {/* 2-Sentence Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceHero;
