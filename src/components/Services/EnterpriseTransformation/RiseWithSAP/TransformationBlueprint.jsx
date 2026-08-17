"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
  { title: "Discover", description: "Understand business goals, operational priorities, and rollout readiness." },
  { title: "Standardize", description: "Align enterprise processes with your global SAP template and governance model." },
  { title: "Localize", description: "Configure country-specific legal, financial, and operational requirements." },
  { title: "Deploy", description: "Execute rollout activities through structured project management and quality assurance." },
  { title: "Enable", description: "Equip users with the knowledge, tools, and confidence to adopt new processes successfully." },
  { title: "Evolve", description: "Continuously optimize performance and prepare for future expansion initiatives." },
];

// Upward semicircle arc, in its own local coordinate space (width 227.17, height 113.585)
const ARC_PATH =
  "M228.183 114.599C228.183 84.4741 216.216 55.5835 194.915 34.2823C173.614 12.981 144.723 1.01415 114.599 1.01415C84.4741 1.01414 55.5835 12.981 34.2823 34.2823C12.9811 55.5835 1.01415 84.4741 1.01415 114.599";

const DOT_SPACING = 227;
const DOT_LEFTS = STEPS.map((_, i) => -1 + i * DOT_SPACING);
const ARC_LEFTS = DOT_LEFTS.slice(0, -1).map((left) => left + 6.58);
const ARC_TY = 93.901; // aligns arc endpoints with dot centre (y = 208.5)
const DOT_Y = 208.5;
const TEXT_SPACING = 209;
const SVG_VIEWBOX = "-14 78 1200 292";

const TransformationBlueprint = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            The Ascendus Transformation Blueprint
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Our proven transformation methodology helps you plan, implement, and optimize your
            RISE with SAP journey with confidence.
          </p>
        </motion.div>

        {/* Desktop: scalloped dashed-arc timeline */}
        <div className="hidden lg:block">
          <svg
            viewBox={SVG_VIEWBOX}
            width="100%"
            fill="none"
            style={{ overflow: "visible" }}
          >
            {/* Dashed semicircle arcs connecting each consecutive pair of dots */}
            {ARC_LEFTS.map((left, i) => (
              <motion.path
                key={i}
                d={ARC_PATH}
                transform={`translate(${left - 1.014}, ${ARC_TY})`}
                stroke="#0061AF"
                strokeDasharray="8.16 8.16"
                strokeWidth="2.02829"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.18, ease: "easeInOut" }}
              />
            ))}

            {/* Dots at each step */}
            {DOT_LEFTS.map((left, i) => (
              <motion.circle
                key={i}
                cx={left + 6.5}
                cy={DOT_Y}
                r={hovered === i ? 9 : 6.5}
                fill={hovered === i ? "#2E3033" : "#0061AF"}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 + i * 0.18 }}
                style={{
                  transformOrigin: `${left + 6.5}px ${DOT_Y}px`,
                  transition: "r 0.25s ease, fill 0.25s ease",
                }}
              />
            ))}

            {/* Step labels */}
            {STEPS.map((step, i) => (
              <foreignObject key={i} x={-7 + i * TEXT_SPACING} y={230} width={129} height={140}>
                <motion.div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "default" }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 4,
                      color: hovered === i ? "#0891b2" : "#000",
                      lineHeight: 1.3,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.title}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 300, color: "#000", lineHeight: 1.4 }}>
                    {step.description}
                  </p>
                </motion.div>
              </foreignObject>
            ))}
          </svg>
        </div>

        {/* Mobile / tablet: vertical dot-and-line list */}
        <div className="flex flex-col gap-6 pl-2 lg:hidden">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.08 + 0.1 }}
                  className="mt-1 h-3 w-3 rounded-full bg-cyan-600"
                />
                {i < STEPS.length - 1 && (
                  <div className="mt-1 min-h-[40px] w-px flex-1 border-l-2 border-dashed border-cyan-600/60" />
                )}
              </div>
              <div>
                <p className="mb-1 text-base font-semibold text-black">{step.title}</p>
                <p className="text-sm font-light leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationBlueprint;
