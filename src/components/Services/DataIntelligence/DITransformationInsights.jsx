"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const DITransformationInsights = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0061af] mb-3 block">
            <Sparkles className="h-4.5 w-4.5 text-[#0061af] inline-block mr-2" />
            Transformation Analytics
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise Transformation Insights
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            [Read research reports outlining ERP transformation benchmarks, legacy data ingestion costs, and custom dashboard adoption ratios across modern enterprise markets.]
          </p>
        </div>

        {/* Wide Dark Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] overflow-hidden min-h-[420px] flex items-center shadow-xl border border-slate-200/50 bg-slate-950"
        >
          {/* Card Background Image */}
          <div className="absolute inset-0 select-none pointer-events-none">
            <Image
              src="/ServicePage/DataIntelligence/data-transformation-insights-bg.jpg"
              alt="Collaborative meeting workspace representation representing enterprise data insights"
              fill
              className="object-cover"
            />
          </div>

          {/* Absolute Dark Fade */}
          <div className="absolute inset-0 bg-slate-950/70" />

          {/* Overlay Layout - Left Title Block, Bottom/Right copy */}
          <div className="relative w-full p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end z-10 leading-relaxed text-white">

            {/* Left Block */}
            <div className="lg:col-span-7 text-left">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-widest bg-cyan-500/10 text-cyan-400 mb-6 border border-cyan-500/15 uppercase">
                Research Report
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 max-w-lg">
                Rethinking ERP for a Digital-First World
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Explore benchmark metrics on deploying analytics modules onto cloud servers. Learn how to transform raw database tables into structured, scalable dashboard reports without slowing operational cores.
              </p>

              <div>
                <Link
                  href="/services/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-300 transition-colors duration-200 group"
                >
                  Access Full Report
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom-Right Block */}
            <div className="lg:col-span-5 text-left lg:text-right flex lg:justify-end">
              <div className="lg:max-w-xs border-l-2 lg:border-l-0 lg:border-r-2 border-[#0061af] pl-4 lg:pl-0 pr-4 text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default DITransformationInsights;
