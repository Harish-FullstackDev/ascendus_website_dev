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
    <section id={id} className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(120deg,_#f5f6f6_0%,_#ffffff_55%,_#f5f6f6_100%)] py-24 text-slate-800">
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-sm text-blue-500">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600 sm:text-sm">Insights</p>
          </div>
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
        </div>

        <div className="mx-auto mb-12 flex max-w-3xl justify-center overflow-x-auto border-b border-slate-200 pb-2">
          <div className="flex gap-6 px-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative whitespace-nowrap pb-3 text-sm font-semibold uppercase tracking-[0.24em] transition-colors ${isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-800"}`}
                >
                  {tab.label}
                  {isActive && <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-blue-600" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activeContent.map((item, idx) => (
                <div key={idx} className="group flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_55px_-35px_rgba(46,48,51,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(37,99,235,0.35)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-slate-200 text-xs text-slate-400">No Image</div>
                    )}
                    <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.24em] text-white shadow-md">{activeTab}</span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">{item.date}</span>
                      <h3 className="mt-1 text-base font-semibold leading-snug text-slate-800 transition-colors group-hover:text-blue-600">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2">{item.description}</p>
                    </div>

                    <div className="mt-4 pt-2">
                      <Link href={item.link} className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600 transition-colors group-hover:text-blue-700">
                        <span>Read Full Article</span>
                        <HiOutlineArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
