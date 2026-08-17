"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { TrendingUp, Users, Zap, Target, Award, Rocket } from "lucide-react";

const ICONS = [TrendingUp, Users, Zap, Target, Award, Rocket];

const MetricCard = ({ metric, idx, variants }) => {
  const cardRef = useRef(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [0, 1], [7, -7]);
  const rotateY = useTransform(sx, [0, 1], [-7, 7]);
  const spotlightX = useTransform(sx, (v) => `${v * 100}%`);
  const spotlightY = useTransform(sy, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${spotlightX} ${spotlightY}, rgba(37,99,235,0.14), transparent 70%)`;

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const Icon = ICONS[idx % ICONS.length];

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative flex flex-col items-center justify-between overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-8 text-center shadow-sm transition-colors duration-300 hover:border-blue-400/40 hover:shadow-xl"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 ring-1 ring-blue-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <div className="relative z-10 mb-4">
        <span className="inline-block bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
          {metric.metric}
        </span>
      </div>

      <div className="relative z-10 mb-4 h-0.5 w-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-20" />

      <div className="relative z-10 space-y-2">
        <h3 className="text-base font-semibold tracking-wide text-slate-900">{metric.title}</h3>
        <p className="mx-auto max-w-[220px] text-xs leading-relaxed text-slate-500">{metric.description}</p>
      </div>
    </motion.div>
  );
};

const ServiceSuccessMetrics = ({
  id = "metrics",
  title = "Business Impact",
  subtitle = "Success Metrics",
  items = [],
}) => {
  const sectionRef = useRef(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const bgSpring = { stiffness: 40, damping: 20, mass: 0.6 };
  const bx = useSpring(mx, bgSpring);
  const by = useSpring(my, bgSpring);
  const bgX = useTransform(bx, (v) => `${v * 100}%`);
  const bgY = useTransform(by, (v) => `${v * 100}%`);
  const bgGlow = useMotionTemplate`radial-gradient(720px circle at ${bgX} ${bgY}, rgba(102,205,243,0.10), transparent 45%)`;

  const handleSectionMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      id={id}
      className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(135deg,_#f5f6f6_0%,_#ffffff_55%,_#f5f6f6_100%)] py-24 text-slate-900"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: bgGlow }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/60 p-8 shadow-sm backdrop-blur-sm sm:p-12">
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-indigo-400/15 blur-3xl" />

          <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="text-sm text-blue-500">✦</span>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600 sm:text-sm">{subtitle}</p>
            </div>
            <h2 className="text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {items.map((metric, idx) => (
              <MetricCard key={idx} metric={metric} idx={idx} variants={itemVariants} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSuccessMetrics;
