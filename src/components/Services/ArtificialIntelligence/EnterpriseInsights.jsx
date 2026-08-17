"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import Frame1 from "@/assets/Service/Artificial Intelligence/Frame 1000003682.jpg";
import Frame2 from "@/assets/Service/Artificial Intelligence/Frame 1000003683.jpg";
import Frame3 from "@/assets/Service/Artificial Intelligence/Frame 1000003684.jpg";

const cards = [
  {
    tag: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    bgImage: Frame1,
    content: [
      "Legacy ERP systems weren't built with AI in mind — they were built for structured transactions, not intelligent decisions. Bringing AI into the picture means rethinking how data flows through the enterprise, not just bolting a model onto an existing process.",
      "This report walks through how organizations are assessing their current ERP landscape to identify where AI can create the most business impact, and how to sequence that work into a roadmap leadership can actually commit to.",
    ],
    highlights: [
      "A framework for auditing ERP data readiness for AI",
      "How to prioritize use cases by business impact",
      "A phased roadmap template aligned to business objectives",
    ],
  },
  {
    tag: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    bgImage: Frame2,
    content: [
      "The organizations that see the most from AI aren't the ones with the most models in production — they're the ones that tied every investment to a measurable business outcome from day one.",
      "We break down the assessment criteria Ascendus uses to score AI opportunities against business value, cost, and organizational readiness, so investment decisions are grounded in outcomes rather than hype.",
    ],
    highlights: [
      "A scoring model for prioritizing AI use cases",
      "Common pitfalls that stall AI investment approval",
      "Sample business-case template for stakeholder buy-in",
    ],
  },
  {
    tag: "Event",
    title: "Rethinking ERP for a Digital-First World",
    description:
      "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap aligned with your business objectives.",
    bgImage: Frame3,
    content: [
      "AI adoption fails more often on people and process than on technology. Preparing an organization to adopt AI at scale means addressing governance, skills, and change management well before go-live.",
      "In this session recap, Ascendus' AI strategy leads share the readiness framework used with clients to prepare teams, data, and governance for enterprise-wide AI adoption.",
    ],
    highlights: [
      "A readiness checklist spanning people, process, and data",
      "How to structure a responsible AI governance model",
      "Q&A highlights from the live session",
    ],
  },
];

const InsightCard = ({ tag, title, description, bgImage, onOpen }) => {
  return (
    <div className="group w-full h-[420px] [perspective:1000px]">
      <motion.div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)] cursor-pointer">
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden [backface-visibility:hidden] shadow-[5px_5px_11.6px_rgba(217,217,217,0.18)]">
          <Image src={bgImage} alt={title} fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
            <p className="text-white text-lg">{tag}</p>
            <h3 className="text-white text-2xl font-medium leading-tight">{title}</h3>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#2E3033] text-white p-8 flex flex-col justify-between shadow-[5px_5px_11.6px_rgba(217,217,217,0.18)]">
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-white/20 pb-3">
              <p className="text-white text-lg">{tag}</p>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-950/60 px-2.5 py-1 rounded-full">
                Interactive
              </span>
            </div>
            <h3 className="text-white text-2xl font-medium leading-tight">{title}</h3>
            <p className="text-neutral-300 text-lg leading-relaxed">{description}</p>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center text-white text-lg underline underline-offset-4 hover:text-blue-200 transition-colors w-fit"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const EnterpriseInsights = () => {
  const [selected, setSelected] = useState(null);
  const active = selected !== null ? cards[selected] : null;

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900"
          >
            Enterprise Transformation Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-600 text-lg md:text-xl leading-relaxed"
          >
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <InsightCard {...card} onOpen={() => setSelected(idx)} />
            </motion.div>
          ))}
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelected(null)}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl"
                >
                  <div className="relative h-56 flex-shrink-0 sm:h-64">
                    <Image src={active.bgImage} alt={active.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      aria-label="Close"
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sky-950 shadow-lg transition-transform duration-300 hover:scale-110"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                      <span className="text-sm font-normal text-white/80">{active.tag}</span>
                      <h3 className="text-2xl font-medium text-white sm:text-3xl">{active.title}</h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 sm:p-8">
                    {active.content.map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                        {paragraph}
                      </p>
                    ))}

                    {active.highlights && (
                      <div className="mt-2 flex flex-col gap-3 rounded-2xl bg-neutral-50 p-5">
                        <span className="text-sm font-medium uppercase tracking-wide text-cyan-600">
                          Inside this piece
                        </span>
                        <ul className="flex flex-col gap-2">
                          {active.highlights.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-base text-neutral-700">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default EnterpriseInsights;
