"use client";
import React from "react";
import { motion } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────── */
const ITEMS = [
  "Stronger Customer Relationships",
  "Improved Customer Satisfaction",
  "Higher Customer Retention",
  "Smarter Business Decisions",
  "Greater Operational Efficiency",
  "Sustainable Business Growth",
];

/**
 * Desktop positions for 6 cards arranged around a center ellipse.
 * Matches the reference: 2 on top, 2 in the middle sides, 2 on bottom.
 * Values are percentages applied as inline style top/left/right/bottom
 * on the relatively-positioned orbit container.
 */
const DESKTOP_POS = [
  // top-left
  { top: "5%", left: "18%" },
  // top-right
  { top: "5%", right: "18%" },
  // mid-left
  { top: "50%", left: "1%", transform: "translateY(-50%)" },
  // mid-right
  { top: "50%", right: "1%", transform: "translateY(-50%)" },
  // bottom-left
  { bottom: "5%", left: "18%" },
  // bottom-right
  { bottom: "5%", right: "18%" },
];

/* ─── Card sub-component ────────────────────────────────── */
const OutcomeCard = ({ label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.88 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, delay }}
    whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
    className="relative w-44 rounded-2xl overflow-hidden bg-white shadow-md cursor-default select-none"
  >
    {/* Soft blue/indigo radial glow in lower-left — matches reference */}
    <div
      className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(99,179,237,0.35) 0%, rgba(129,140,248,0.18) 50%, transparent 75%)",
        filter: "blur(14px)",
      }}
    />

    <div className="relative z-10 p-5 text-center">
      <p className="text-[15px] font-semibold leading-snug text-slate-800">
        {label}
      </p>
    </div>
  </motion.div>
);

/* ─── Main component ────────────────────────────────────── */
const CXBusinessOutcomes = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">

      {/* ── Concentric dashed rings (desktop decorative) ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,179,237,0.35) 0%, rgba(129,140,248,0.18) 50%, transparent 75%)",
        }}
      >
        {/* Outermost ring */}
        <div className="absolute w-[720px] h-[720px] rounded-full border border-dashed border-white-600/40" />
        {/* Middle ring */}
        <div className="absolute w-[560px] h-[560px] rounded-full border border-dashed border-white-600/35" />
        {/* Inner ring */}
        <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-white-600/30" />
        {/* Innermost ring (closest to center text) */}
        <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-white-700/25" />
      </div>

      <div className="relative mx-auto max-w-5xl">

        {/* ── DESKTOP: orbital layout ── */}
        <div className="relative hidden lg:block" style={{ height: 620 }}>

          {/* Center "Business Outcomes" label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"
          >
            <p className="text-3xl font-bold leading-tight text-[#0061af] tracking-tight">
              Business<br />Outcomes
            </p>
          </motion.div>

          {/* 6 orbit cards — positioned via DESKTOP_POS */}
          {ITEMS.map((label, i) => (
            <div
              key={label}
              className="absolute"
              style={DESKTOP_POS[i]}
            >
              <OutcomeCard label={label} delay={i * 0.08} />
            </div>
          ))}
        </div>

        {/* ── MOBILE / TABLET: 2-col grid ── */}
        <div className="lg:hidden">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="text-3xl font-bold text-[#0061af]">
              Business<br />Outcomes
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {ITEMS.map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-md p-5 text-center"
              >
                {/* Blue glow in corner */}
                <div
                  className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(99,179,237,0.35) 0%, rgba(129,140,248,0.18) 50%, transparent 75%)",
                    filter: "blur(12px)",
                  }}
                />
                <p className="relative z-10 text-sm font-semibold leading-snug text-slate-800">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CXBusinessOutcomes;
