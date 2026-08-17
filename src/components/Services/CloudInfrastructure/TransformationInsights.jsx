"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

// Import asset
import InsightsCardBg from "@/assets/Service/Cloud & Infrastructure/Card 1 (insihjts ).jpg";

const TransformationInsights = () => {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title / Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 block">
            <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
            Enterprise Insights</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900">
            Enterprise Transformation Insights
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.
          </p>
        </div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto min-h-[480px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col justify-end p-8 md:p-12 group cursor-pointer"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
            <Image
              src={InsightsCardBg}
              alt="Research Report: Rethinking ERP for a Digital-First World"
              fill
              className="object-cover"
            />
            {/* Linear overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" /> */}
          </div>

          {/* Card Content */}
          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="flex items-center space-x-2 text-blue-400 font-semibold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Research Report</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
              Rethinking ERP for a Digital-First World
            </h3>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap for seamless digital-first operations.
            </p>

            <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Read the Full Report
              <svg
                className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TransformationInsights;
