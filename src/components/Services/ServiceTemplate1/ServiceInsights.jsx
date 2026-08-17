"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

const ServiceInsights = ({
  id = "insights",
  title = "Related Insights",
  tabs = [],
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const activeContent = tabs.find((t) => t.id === activeTab)?.items || [];

  return (
    <section id={id} className="py-20 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600">
              Insights
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-slate-900">
            {title}
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12 border-b border-slate-200 max-w-2xl mx-auto overflow-x-auto no-scrollbar">
          <div className="flex space-x-8 px-4 py-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-4 text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap ${isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Insight Cards Grid */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            >
              {activeContent.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-50 border border-slate-200/60 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between shadow-sm max-w-xs mx-auto w-full"
                >
                  {/* Article Media */}
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 text-xs">
                        No Image
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md">
                      {activeTab}
                    </span>
                  </div>

                  {/* Article Contents */}
                  <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 tracking-wider">
                        {item.date}
                      </span>
                      <h3 className="text-base font-semibold text-slate-800 mt-1 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 mt-auto">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 group-hover:text-blue-700 transition-colors uppercase tracking-wider"
                      >
                        <span>Read Full Article</span>
                        <HiOutlineArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceInsights;

