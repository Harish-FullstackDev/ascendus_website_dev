"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ArrowRight, X } from "lucide-react";

import InsightBg from "@/assets/Service/Data&Intelligence/Data Engineering/insights-research-report.jpg";

const GRID_ID = "data-engineering-insight";

const INSIGHT = {
  eyebrow: "Research Report",
  title: "Rethinking Data Architecture for a Digital-First World",
  description:
    "Evaluate your current data landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
  content: [
    "Enterprises that treat data engineering as a one-time build end up rebuilding it every few years, at growing cost. This report looks at what separates organizations that treat data platforms as living infrastructure from those still patching yesterday's pipelines.",
    "We break down the assessment framework leading enterprises use to identify where their data landscape is holding decisions back — and how to modernize it without disrupting the business that depends on it.",
  ],
  highlights: [
    "A maturity model for evaluating your current data landscape",
    "How to prioritize data engineering investments by business impact",
    "A phased roadmap template for building a modern data foundation",
  ],
};

const CLOSE_LAYOUT_TRANSITION = { type: "spring", stiffness: 300, damping: 34, mass: 0.9 };

const TransformationInsights = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
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
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-3">
            Enterprise Transformation Insights
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#515151] max-w-2xl mx-auto">
            Evaluate your current data landscape, identify transformation opportunities, and
            create a roadmap
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="relative w-full rounded-[20px] overflow-hidden min-h-[300px] sm:min-h-[420px] shadow-[5px_5px_11.6px_0px_rgba(217,217,217,0.18)] text-left cursor-pointer"
        >
          <Image
            src={InsightBg}
            alt="Enterprise Transformation Insights"
            fill
            className={`object-cover transition-transform duration-700 ease-out ${hovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-black/54" />
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#0061af]/0 to-[#2E3033]/0 transition-colors duration-500 ${
              hovered ? "from-[#0061af]/25 to-[#2E3033]/50" : ""
            }`}
          />

          <div className="relative z-10 flex h-full flex-col items-start justify-end gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10 lg:p-12">
            <div className="flex flex-col gap-2 max-w-[420px]">
              <span className="flex items-center gap-2 text-white text-[16px] sm:text-[18px] font-thin">
                <BookOpen className="w-4 h-4" />
                {INSIGHT.eyebrow}
              </span>
              <h3 className="text-white text-[24px] sm:text-[34px] font-medium leading-snug">
                {INSIGHT.title}
              </h3>
            </div>
            <div className="flex flex-col gap-3 max-w-[420px]">
              <p className="text-white text-[16px] sm:text-[20px] font-thin leading-relaxed">
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

export default TransformationInsights;
