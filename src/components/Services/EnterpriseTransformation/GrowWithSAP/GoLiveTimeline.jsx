"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STAGES = [
  {
    description: "Business discovery and project planning.",
    startWeek: 1,
    endWeek: 2,
    heightPct: 30,
  },
  {
    description: "Solution configuration and process validation.",
    startWeek: 3,
    endWeek: 4,
    heightPct: 48,
  },
  {
    description: "Data migration and system testing.",
    startWeek: 5,
    endWeek: 6,
    heightPct: 64,
  },
  {
    description: "User training, go-live, and hypercare support.",
    startWeek: 7,
    endWeek: 8,
    heightPct: 80,
  },
  {
    description: "Continuous improvement and hypercare support.",
    startWeek: 9,
    endWeek: 10,
    heightPct: 100,
  },
];

const useCountUp = (target, active, duration = 1.1, delay = 0) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf;
    let start;
    const timeout = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / (duration * 1000), 1);
        setValue(Math.round(progress * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [active, target, duration, delay]);

  return value;
};

const StageColumn = ({ stage, index, active }) => {
  const start = useCountUp(stage.startWeek, active, 1, 0.15 * index);
  const end = useCountUp(stage.endWeek, active, 1, 0.15 * index);

  return (
    <div className="flex flex-1 flex-col items-center gap-4">
      <div className="flex h-52 w-full items-end justify-center sm:h-64">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={active ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.9, delay: 0.15 * index, ease: "easeOut" }}
          style={{ height: `${stage.heightPct}%`, transformOrigin: "bottom" }}
          className="w-8 origin-bottom rounded-t-md bg-gradient-to-t from-sky-950 to-cyan-600 sm:w-10"
        />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="max-w-[9rem] text-sm text-black sm:max-w-[10rem]">{stage.description}</p>
        <span className="text-lg font-medium text-sky-950">
          Week {start}–{end}
        </span>
      </div>
    </div>
  );
};

const GoLiveTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            Go Live in Weeks, Not Months
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Many organizations face obstacles that limit their ability to scale effectively. GROW
            with SAP helps overcome these challenges by modernizing business operations and
            creating a more connected enterprise.
          </p>
        </motion.div>

        <div className="flex items-end justify-between gap-3 border-b border-neutral-200 pb-2 sm:gap-6">
          {STAGES.map((stage, index) => (
            <StageColumn key={stage.startWeek} stage={stage} index={index} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoLiveTimeline;
