"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

/* ─── helpers ───────────────────────────────────────────── */
// angle: degrees clockwise from TOP (0 = 12 o'clock)
function pt(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/* ─── data ──────────────────────────────────────────────── */
// 5 nodes evenly spaced.  Starting angle chosen to match reference (node 1 = upper-right).
const START = 42;           // degrees clockwise from top for node 1
const CX = 460, CY = 295;  // circle centre in SVG user-units
const R_OUTER = 200;        // outer solid ring radius
const R_INNER = 168;        // inner dashed ring radius
const R_NODE = 200;        // nodes sit ON the outer ring
const R_LABEL = 280;        // label anchor radius

const STEPS = [
  {
    num: "1", title: "Imagine", badge: true,
    lines: ["Explore new business", "opportunities through cloud,", "AI, automation, and", "intelligent platforms."],
  },
  {
    num: "2", title: "Design", badge: false,
    lines: ["Build scalable architectures", "that align technology", "investments with strategic", "business objectives."],
  },
  {
    num: "3", title: "Transform", badge: true,
    lines: ["Modernize applications,", "integrate enterprise systems,", "and create cloud-first", "business processes."],
  },
  {
    num: "4", title: "Optimize", badge: false,
    lines: ["Continuously improve", "performance, security,", "governance, and operational", "efficiency."],
  },
  {
    num: "5", title: "Innovate", badge: false,
    lines: ["Leverage emerging Azure", "technologies to keep your", "business ahead of", "market change."],
  },
];

// Pre-compute node & label coordinates
const nodes = STEPS.map((s, i) => {
  const angle = START + i * 72;
  const node = pt(CX, CY, R_NODE, angle);
  const label = pt(CX, CY, R_LABEL, angle);
  const isRight = Math.cos(((angle - 90) * Math.PI) / 180) >= 0; // right half?
  return { ...s, angle, node, label, isRight };
});

const METRICS = [
  { val: "360°", label: "Unified Business Data" },
  { val: "Real-Time", label: "Data Processing & Insights" },
  { val: "100%", label: "Governed Data Lifecycle" },
  { val: "AI-Ready", label: "Modern Data Foundation" },
];

/* ─── component ─────────────────────────────────────────── */
const DIDataTransformationFramework = () => {
  return (
    <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0061af] mb-3 block">
            <Sparkles className="h-4.5 w-4.5 text-[#0061af] inline-block mr-2" />
            Transformation Lifecycle
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Data Transformation Framework
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            A structured approach aligning engineering blocks and analytical systems.
            We establish incremental stages that safely transition outdated database
            cores into secure, query-ready warehouses.
          </p>
        </div>

        {/* ── Dark Cycle Card ── */}
        <div className="relative rounded-[2rem] overflow-hidden mb-14 shadow-2xl border border-white/5 bg-[#030a16]">

          {/* Background photo */}
          <Image
            src="/ServicePage/DataIntelligence/data-transformation-insights-bg.jpg"
            alt="Ascendus Continuous Value Cycle"
            fill
            className="object-cover opacity-35 pointer-events-none select-none"
            priority
          />

          {/* Atmospheric blue glow blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[130%] rounded-full bg-[#1a6fa8]/20 blur-[100px]" />
            <div className="absolute top-[10%] right-[5%] w-[28%] h-[55%] rounded-full bg-sky-500/10 blur-[80px]" />
            <div className="absolute bottom-0 left-[25%] w-[30%] h-[40%] rounded-full bg-blue-700/15 blur-[70px]" />
          </div>

          {/* ── DESKTOP: SVG circle diagram ── */}
          <svg
            viewBox="0 0 920 660"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 w-full hidden lg:block"
            aria-hidden="true"
          >
            <defs>
              {/* Glow filter for nodes */}
              <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Soft radial glow behind each node */}
              <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>

              {/* Clockwise arrowhead marker */}
              <marker id="arrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
                <path d="M1,1 L6,3.5 L1,6 Z" fill="rgba(255,255,255,0.35)" />
              </marker>
            </defs>

            {/* Outer solid ring — split into 5 arcs so each arc ends at a node (gives natural arrow placement) */}
            {nodes.map((n, i) => {
              const next = nodes[(i + 1) % 5];
              const a1 = ((n.angle - 90) * Math.PI) / 180;
              const a2 = ((next.angle - 90) * Math.PI) / 180;
              const x1 = CX + R_OUTER * Math.cos(a1);
              const y1 = CY + R_OUTER * Math.sin(a1);
              const x2 = CX + R_OUTER * Math.cos(a2);
              const y2 = CY + R_OUTER * Math.sin(a2);
              return (
                <path
                  key={i}
                  d={`M ${x1} ${y1} A ${R_OUTER} ${R_OUTER} 0 0 1 ${x2} ${y2}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />
              );
            })}

            {/* Inner dashed ring */}
            <circle
              cx={CX} cy={CY} r={R_INNER}
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="0.8"
              strokeDasharray="9 11"
            />

            {/* Centre label */}
            <text x={CX} y={CY - 14} textAnchor="middle" fill="white" fontSize="22" fontWeight="700" letterSpacing="0.5">
              The Ascendus Continuous
            </text>
            <text x={CX} y={CY + 14} textAnchor="middle" fill="white" fontSize="22" fontWeight="700" letterSpacing="0.5">
              Value Cycle
            </text>

            {/* Nodes + Labels */}
            {nodes.map((n) => {
              // radial glow
              const anchor = n.isRight ? "start" : "end";
              // nudge label box so it doesn't overlap the node
              const lx = n.isRight ? n.label.x + 8 : n.label.x - 8;
              const ly = n.label.y - 10;

              return (
                <g key={n.num}>
                  {/* Soft radial glow spot */}
                  <circle cx={n.node.x} cy={n.node.y} r="32" fill="url(#glowGrad)" />

                  {/* Outer subtle ring */}
                  <circle
                    cx={n.node.x} cy={n.node.y} r="26"
                    fill="none"
                    stroke="rgba(56,189,248,0.25)"
                    strokeWidth="0.8"
                  />

                  {/* Node filled circle */}
                  <circle
                    cx={n.node.x} cy={n.node.y} r="20"
                    fill="#0a1a2e"
                    stroke="rgba(56,189,248,0.7)"
                    strokeWidth="1.2"
                    filter="url(#nodeGlow)"
                  />

                  {/* Node number */}
                  <text
                    x={n.node.x} y={n.node.y + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="13"
                    fontWeight="800"
                  >
                    {n.num}
                  </text>

                  {/* Badge pill background (for "Imagine" and "Transform") */}
                  {/* {n.badge && (
                    <rect
                      x={n.isRight ? lx - 2 : lx - (n.title.length * 7.2 + 2)}
                      y={ly - 15}
                      width={n.title.length * 7.2 + 14}
                      height={19}
                      rx="9"
                      fill="rgba(255,255,255,0.12)"
                    />
                  )} */}

                  {/* Title */}
                  <text
                    x={lx} y={ly}
                    textAnchor={anchor}
                    fill="white"
                    fontSize="13"
                    fontWeight="700"
                    letterSpacing="0.3"
                  >
                    {n.title}
                  </text>

                  {/* Description lines */}
                  {n.lines.map((line, li) => (
                    <text
                      key={li}
                      x={lx}
                      y={ly + 17 + li * 14}
                      textAnchor={anchor}
                      fill="rgba(148,163,184,0.9)"
                      fontSize="10.5"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}
          </svg>

          {/* ── MOBILE: vertical timeline ── */}
          <div className="relative z-10 flex flex-col lg:hidden p-8 sm:p-10 gap-8">
            <h3 className="text-white font-bold text-xl text-center mb-2">
              The Ascendus Continuous Value Cycle
            </h3>
            <div className="border-l border-white/15 pl-7 ml-3.5 flex flex-col gap-7">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div
                    className="absolute -left-[42px] top-0.5 h-8 w-8 rounded-full bg-[#0a1a2e] border border-sky-400/70 flex items-center justify-center text-white text-xs font-bold"
                    style={{ boxShadow: "0 0 12px rgba(56,189,248,0.5)" }}
                  >
                    {s.num}
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">{s.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.lines.join(" ")}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4-column metrics row ── */}
        <div className="border-y border-slate-200/80 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {METRICS.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col px-4 py-2 text-center items-center ${i !== 0 ? "md:border-l md:border-slate-200/80" : ""
                  }`}
              >
                <div className="text-2xl md:text-3xl font-extrabold text-[#0061af] mb-1">
                  {m.val}
                </div>
                <div className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DIDataTransformationFramework;
