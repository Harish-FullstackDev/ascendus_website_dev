"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ArrowRight, X } from "lucide-react";

import InsightBg from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/insights-card-bg.png";

const GRID_ID = "cloud-strategy-insight";

const INSIGHT = {
  eyebrow: "Research Report",
  title: "Building a Cloud Strategy for the Digital-First Enterprise",
  description:
    "Evaluate your current technology landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
  content: [
    "Cloud adoption succeeds or stalls based on the strategy behind it, not the technology itself. Organizations that treat cloud as a checklist of migrations end up with fragmented environments that are hard to govern and expensive to run.",
    "This report walks through how leading organizations assess their current landscape, prioritize workloads by business impact, and sequence adoption into a roadmap that leadership can commit to and IT can actually deliver.",
  ],
  highlights: [
    "A framework for assessing cloud readiness across people, process, and platforms",
    "How to prioritize workloads and use cases by business impact",
    "A phased adoption roadmap template aligned to business objectives",
  ],
};

const CLOSE_LAYOUT_TRANSITION = { type: "spring", stiffness: 300, damping: 34, mass: 0.9 };

const Insights = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col gap-3"
        >
          <h2 className="text-[28px] md:text-[36px] font-semibold text-black">Cloud Strategy Insights</h2>
          <p className="text-[#515151] text-[18px] md:text-[22px] font-light max-w-[694px] mx-auto">
            Evaluate your current landscape, identify transformation opportunities, and create a roadmap.
          </p>
        </motion.div>

        {/* Collapsed card — dimensions must stay fixed regardless of expand state */}
        <motion.button
          layoutId={`insight-card-${GRID_ID}`}
          onClick={() => setOpen(true)}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="relative w-full rounded-[20px] overflow-hidden min-h-[300px] md:min-h-[400px] shadow-lg text-left cursor-pointer"
        >
          <Image
            src={InsightBg}
            alt="Cloud Strategy Insights"
            fill
            className={`object-cover transition-transform duration-700 ease-out ${hovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-black/54" />
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#0061af]/0 to-[#2E3033]/0 transition-colors duration-500 ${
              hovered ? "from-[#0061af]/25 to-[#2E3033]/50" : ""
            }`}
          />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-end justify-between h-full gap-8">
            <div className="flex flex-col gap-2 max-w-[420px]">
              <span className="flex items-center gap-2 text-white text-[16px] md:text-[18px] font-thin">
                <BookOpen className="w-4 h-4" />
                {INSIGHT.eyebrow}
              </span>
              <h3 className="text-white text-[24px] md:text-[34px] font-medium leading-tight">{INSIGHT.title}</h3>
            </div>
            <div className="flex flex-col gap-3 max-w-[420px]">
              <p className="text-white text-[16px] md:text-[20px] font-thin leading-relaxed">
                {INSIGHT.description}
              </p>
              <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                Read More
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`} />
              </span>
            </div>
          </div>
        </motion.button>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8"
              >
                <motion.div
                  layoutId={`insight-card-${GRID_ID}`}
                  onClick={(e) => e.stopPropagation()}
                  transition={{ layout: CLOSE_LAYOUT_TRANSITION }}
                  className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl"
                >
                  <div className="relative h-56 flex-shrink-0 sm:h-64">
                    <Image src={InsightBg} alt={INSIGHT.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                      onClick={() => setOpen(false)}
                      aria-label="Close"
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#2E3033] shadow-lg transition-transform duration-300 hover:scale-110"
                    >
                      <X className="h-5 w-5" />
                    </motion.button>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                      <span className="text-sm font-normal text-white/80">{INSIGHT.eyebrow}</span>
                      <h3 className="text-2xl font-medium text-white sm:text-3xl">{INSIGHT.title}</h3>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 sm:p-8"
                  >
                    {INSIGHT.content.map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                        {paragraph}
                      </p>
                    ))}

                    <div className="mt-2 flex flex-col gap-3 rounded-2xl bg-neutral-50 p-5">
                      <span className="text-sm font-medium uppercase tracking-wide text-[#0061af]">
                        Inside this piece
                      </span>
                      <ul className="flex flex-col gap-2">
                        {INSIGHT.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-base text-neutral-700">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0061af]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default Insights;
