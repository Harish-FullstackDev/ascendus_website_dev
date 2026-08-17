"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ArrowRight, X } from "lucide-react";

import InsightBg from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/a668dd661d78ea8a3f426b2c59762caf6911b96f.png";

const GRID_ID = "infrastructure-modernization-insight";

const INSIGHT = {
  eyebrow: "Research Report",
  title: "Rethinking Infrastructure for a Cloud-First World",
  description:
    "Evaluate your current environment, identify modernization opportunities, and create a roadmap aligned with your business objectives.",
  content: [
    "Infrastructure modernization succeeds when it's treated as an ongoing capability, not a one-time project. Organizations that modernize once and stop find themselves back where they started within a few years, carrying new technical debt on top of the old.",
    "This report walks through how leading enterprises assess infrastructure readiness, prioritize modernization by business risk, and build the automation and governance needed to keep environments modern long after the initial project ends.",
  ],
  highlights: [
    "A framework for assessing infrastructure readiness across compute, storage, and network",
    "How to prioritize modernization initiatives by business risk and impact",
    "A governance model that keeps infrastructure modern well past go-live",
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
    <section className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-10 sm:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-semibold text-[24px] sm:text-[30px] lg:text-[36px] text-black mb-3">
            Enterprise Transformation Insights
          </h2>
          <p className="font-light text-[#515151] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[600px] mx-auto">
            Evaluate your current environment, identify modernization opportunities, and create a
            roadmap
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
          className="relative w-full rounded-[20px] overflow-hidden min-h-[280px] sm:min-h-[360px] shadow-lg text-left cursor-pointer"
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

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between p-6 sm:p-10 lg:p-12 gap-8 h-full min-h-[280px] sm:min-h-[360px]">
            <div className="flex flex-col gap-2 max-w-[500px]">
              <span className="flex items-center gap-2 text-white text-[16px] sm:text-[20px] font-thin">
                <BookOpen className="w-4 h-4" />
                {INSIGHT.eyebrow}
              </span>
              <h3 className="text-white text-[20px] sm:text-[28px] lg:text-[36px] font-medium leading-tight">
                {INSIGHT.title}
              </h3>
            </div>
            <div className="flex flex-col gap-3 max-w-[380px]">
              <p className="text-white text-[14px] sm:text-[18px] font-thin leading-relaxed">
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
