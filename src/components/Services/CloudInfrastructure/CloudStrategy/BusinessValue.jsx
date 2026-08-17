"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Gauge, Rocket } from "lucide-react";

import ImgReducedRisk from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/benefit-reduced-risk.png";
import ImgOptimizedInvestment from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/benefit-optimized-investment.png";
import ImgAlignedStrategy from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/benefit-aligned-strategy.png";

const PANEL_POINTS = [
  { icon: Gauge, title: "Faster Decision-Making", desc: "A structured roadmap that enables confident technology decisions." },
  { icon: TrendingUp, title: "Scalable Growth", desc: "A cloud foundation that adapts to changing business demands and future expansion." },
  { icon: Rocket, title: "Future-Ready Enterprise", desc: "Prepare your organization for innovation with a modern, resilient cloud strategy." },
];

const CARDS = [
  { label: "Reduced Risk", desc: "Identify potential challenges early and create mitigation strategies before implementation.", img: ImgReducedRisk },
  { label: "Optimized Investment", desc: "Maximize cloud value through strategic planning and efficient resource utilization.", img: ImgOptimizedInvestment },
  { label: "Aligned Strategy", desc: "Keep every cloud decision tied to measurable business outcomes and stakeholder priorities.", img: ImgAlignedStrategy },
];

const BusinessValue = () => {
  return (
    <section className="bg-black py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col gap-5">
        {/* Gradient intro panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[20px] overflow-hidden w-full flex items-center"
          style={{
            minHeight: "clamp(360px, 55vw, 480px)",
            backgroundImage: "linear-gradient(135deg, #0061af 0%, #2E3033 60%, #041527 100%)",
          }}
        >
          {/* Ambient floating orbs for depth */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-10 right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#008e59]/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="relative w-full flex flex-col md:flex-row items-center gap-10 px-8 md:px-14 py-12">
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="text-[26px] md:text-[32px] font-semibold text-white tracking-tight">Business Value</h2>
              <p className="text-white/70 text-[15px] md:text-[16px] max-w-[380px] mb-2">
                A cloud strategy pays off across the whole organization—not just IT.
              </p>
              <div className="flex flex-col gap-5">
                {PANEL_POINTS.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      <p.icon className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-white font-medium text-[16px] md:text-[17px]">{p.title}</p>
                      <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed max-w-[340px]">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative abstract network graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:flex flex-1 items-center justify-center relative h-[260px]"
            >
              <div className="relative w-[260px] h-[260px]">
                {[0, 1, 2].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 rounded-full border border-white/15"
                    style={{ inset: ring * 30 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 + ring * 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#008e59] shadow-[0_0_16px_4px_rgba(0,142,89,0.5)]" />
                  </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white/90 shadow-[0_0_40px_10px_rgba(255,255,255,0.25)]" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white/[0.08] rounded-t-[29px] overflow-hidden h-[360px] md:h-[446px] relative transition-shadow duration-500 hover:shadow-[0_25px_60px_-20px_rgba(0,97,175,0.5)]"
            >
              <div className="p-8 flex flex-col gap-2 relative z-10">
                <p className="text-[22px] text-white font-normal tracking-tight">{card.label}</p>
                <p className="text-[15px] text-white/65 leading-relaxed max-w-[290px]">{card.desc}</p>
              </div>
              <div className="absolute bottom-0 left-8 right-0 h-[55%] rounded-tl-[30px] overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;
