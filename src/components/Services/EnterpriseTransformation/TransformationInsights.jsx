"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import insightImage from "@/assets/Service/Enterprise Transformation/Card 1 (insihjts ).jpg";

const INSIGHTS = [
  {
    eyebrow: "Research Report",
    title: "Rethinking ERP for a Digital-First World",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: insightImage,
  },
  {
    eyebrow: "Case Study",
    title: "Scaling SAP Across Global Business Units",
    description: "How a multinational manufacturer standardized operations with a phased SAP rollout strategy.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Whitepaper",
    title: "The Real Cost of Delaying Cloud ERP Migration",
    description: "A practical framework for evaluating migration timing, risk, and total cost of ownership.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
];

const TransformationInsights = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + INSIGHTS.length) % INSIGHTS.length);
  };

  const current = INSIGHTS[index];

  return (
    <section id="insights" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Enterprise Transformation Insights
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[20px]">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2"
            >
              <div className="relative min-h-[320px] overflow-hidden">
                <Image src={current.image} alt={current.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
                  <span className="text-lg font-light text-white/80">{current.eyebrow}</span>
                  <h3 className="mt-1 text-3xl font-medium text-white sm:text-4xl">{current.title}</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-black/85 p-8 sm:p-10">
                <p className="text-xl font-light leading-relaxed text-white sm:text-2xl">
                  {current.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            onClick={() => goTo(-1)}
            aria-label="Previous insight"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600 text-white transition-all duration-300 hover:scale-110 hover:bg-cyan-700"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => goTo(1)}
            aria-label="Next insight"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600 text-white transition-all duration-300 hover:scale-110 hover:bg-cyan-700"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationInsights;
