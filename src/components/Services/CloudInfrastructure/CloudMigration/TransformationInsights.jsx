"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ArrowRight, X } from "lucide-react";

import InsightBg from "@/assets/Service/Cloud & Infrastructure/Cloud Migration/a668dd661d78ea8a3f426b2c59762caf6911b96f.png";

const GRID_ID = "cloud-migration-insight";

const INSIGHT = {
  eyebrow: "Research Report",
  title: "Rethinking Infrastructure for a Cloud-First World",
  description:
    "Evaluate your current environment, identify migration opportunities, and create a roadmap aligned with your business objectives.",
  content: [
    "Cloud migration succeeds or stalls based on the plan behind it, not the tooling itself. Organizations that treat migration as a lift-and-shift checklist end up with environments that are just as hard to manage as the ones they left behind.",
    "This report walks through how leading organizations assess workload readiness, sequence migrations by business risk, and validate every cutover so the move to the cloud becomes a growth event, not a disruption.",
  ],
  highlights: [
    "A framework for scoring workload complexity and migration readiness",
    "How to sequence applications and data by business risk and impact",
    "A cutover and validation checklist used across zero-downtime migrations",
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
    <section className="px-6 pb-16 md:px-16 md:pb-24">
      <div className="mx-auto max-w-[1082px] flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-black md:text-3xl lg:text-[36px]">
            Enterprise Transformation Insights
          </h2>
          <p className="mt-4 max-w-[694px] font-light text-[#515151] md:text-[22px] lg:text-[24px]">
            Evaluate your current environment, identify migration opportunities, and create a
            roadmap.
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
          className="relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden rounded-[20px] text-left shadow-[5px_5px_11.6px_0px_rgba(217,217,217,0.18)] md:min-h-[420px] lg:min-h-[465px]"
        >
          <Image
            src={InsightBg}
            alt={INSIGHT.title}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${hovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-black/54" />
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#0061af]/0 to-[#2E3033]/0 transition-colors duration-500 ${
              hovered ? "from-[#0061af]/25 to-[#2E3033]/50" : ""
            }`}
          />

          <div className="relative z-10 flex flex-col gap-1 p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2 text-lg font-thin text-white">
                <BookOpen className="h-4 w-4" />
                {INSIGHT.eyebrow}
              </span>
              <p className="mt-1 text-2xl font-medium text-white md:text-3xl lg:text-[36px]">
                {INSIGHT.title}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:max-w-[429px]">
              <p className="font-thin text-white md:text-[20px] lg:text-[24px]">
                {INSIGHT.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
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
