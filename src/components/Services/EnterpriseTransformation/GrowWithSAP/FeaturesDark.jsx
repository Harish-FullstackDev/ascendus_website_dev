"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Zap, TrendingUp, Rocket, BarChart3, Plus } from "lucide-react";

const CARDS = [
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Deploy with confidence using a structured implementation approach.",
  },
  {
    icon: TrendingUp,
    title: "Business Agility",
    description: "Respond quickly to market shifts with a flexible, configurable platform.",
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description: "Add users, entities, and capabilities as your business expands.",
  },
  {
    icon: BarChart3,
    title: "Better Decision-Making",
    description: "Act on real-time data with dashboards built for every role.",
  },
];

const STATS = [
  { label: "Projects Delivered", value: 210, suffix: "+" },
  { label: "Business Resilience", value: 80, suffix: "+" },
  { label: "Global Resources", value: 300, suffix: "%" },
];

const AUTO_INTERVAL = 3000;
const PAUSE_AFTER_CLICK = 6000;

const useCountUp = (target, active, duration = 1.4) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
};

const StatItem = ({ stat, active }) => {
  const value = useCountUp(stat.value, active);
  return (
    <div className="flex w-28 flex-col items-center gap-2">
      <span className="text-2xl font-normal leading-8 text-white">
        {value}
        {stat.suffix}
      </span>
      <span className="text-center text-sm text-white">{stat.label}</span>
    </div>
  );
};

const FeaturesDark = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    pausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, PAUSE_AFTER_CLICK);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-sky-950/95 px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-medium text-white sm:text-4xl">Features of GROW with SAP</h2>
            <p className="mt-4 text-lg text-white/80 sm:text-xl">
              Evaluate your current ERP landscape and prepare your business for future challenges
              with a modern cloud transformation strategy
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-4">
              {CARDS.map((card, index) => {
                const isActive = index === activeIndex;
                const Icon = card.icon;
                return (
                  <button
                    key={card.title}
                    onClick={() => handleClick(index)}
                    className={`relative overflow-hidden rounded-xl border text-left transition-all duration-500 ${
                      isActive
                        ? "border-white/10 bg-white/[0.06] py-5"
                        : "border-gray-700 bg-gray-900 py-5"
                    }`}
                  >
                    <div className="flex items-center gap-4 px-4 sm:px-5">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/60">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                      </span>
                      <span className="flex-1 text-base font-normal text-white sm:text-lg">
                        {card.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 text-white"
                      >
                        <Plus className="h-5 w-5" />
                      </motion.span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-white/10 px-4 pt-3 text-sm leading-6 text-gray-200 sm:px-5 sm:text-base">
                            {card.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-12 py-4">
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
                  Success Starts with the Right ERP
                </h3>
                <p className="text-base leading-relaxed text-white sm:text-lg">
                  Cyber threats evolve every day. Our continuous monitoring, proactive threat
                  detection, and security optimization services help keep your business protected
                  around the clock.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-10 sm:gap-16">
                {STATS.map((stat) => (
                  <StatItem key={stat.label} stat={stat} active={inView} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesDark;
