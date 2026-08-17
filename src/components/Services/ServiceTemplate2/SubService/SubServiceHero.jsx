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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(102,205,243,0.2),_transparent_40%),linear-gradient(120deg,_#020617_0%,_#2e3033_55%,_#111827_100%)] text-white py-24 md:py-32 border-b border-white/5">
      {/* Decorative Grid and glow */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label tag with blue gradient text */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="text-blue-400 text-sm">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              Service Track Detail
            </p>
          </motion.div>

          {/* Large Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            {title.split(" ").map((word, i) => {
              const isHighlight = i >= title.split(" ").length - 2;
              return (
                <span key={i} className="mr-3 inline-block">
                  {isHighlight ? (
                    <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              );
            })}
          </motion.h1>

          {/* Value Prop Plinth */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-medium text-blue-100/90 leading-relaxed mb-6 border-l-2 border-blue-400 pl-4 sm:pl-6"
          >
            {tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SubServiceHero;
