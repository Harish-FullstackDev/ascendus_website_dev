"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import analyticsImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/bfc3a73aac94b9578dd1a4eae34bf98559bedad0.png";
import deploymentImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/deploymentImage.webp";
import enterpriseImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/enterpriseImage.webp";
import performanceImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/performanceImage.webp";
import continuityImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/continuityImage.webp";

const STATS = [
  {
    title: "Upgrade Success Rate",
    description:
      "RISE with SAP enables organizations to modernize ERP environments with a structured transformation approach that minimizes risk while maximizing business value.",
    image: analyticsImage,
  },
  {
    title: "Faster Upgrade Deployment Cycles",
    description:
      "Accelerate cloud adoption through automated deployment, standardized implementation practices, and continuous delivery that reduces project timelines.",
    image: deploymentImage,
  },
  {
    title: "Enterprise Challenges",
    description:
      "Address legacy complexity, fragmented business processes, and disconnected systems with an integrated cloud ERP platform built for modern enterprises.",
    image: enterpriseImage,
  },
  {
    title: "Average Performance Improvement Post Upgrade",
    description:
      "Improve operational efficiency, reporting performance, and business visibility through optimized SAP cloud architecture and intelligent automation.",
    image: performanceImage,
  },
  {
    title: "Business Continuity During Upgrade Activities",
    description:
      "Maintain business operations throughout transformation with phased migration strategies, proactive governance, and minimal disruption to users.",
    image: continuityImage,
  },
];

const AUTO_INTERVAL = 2800;

const ReadyForWhatsNext = () => {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => (prev + 1) % STATS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const current = STATS[active];
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            Is Your Business Ready for <span className="text-cyan-600">What&apos;s Next</span>?
          </h2>

          <ul
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            className="flex flex-col gap-1"
          >
            {STATS.map((stat, index) => {
              const isActive = active === index;
              return (
                <li key={stat.title} className="relative">
                  <button
                    onClick={() => setActive(index)}
                    className="group relative flex w-full items-center gap-3 py-3 text-left"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="stat-indicator"
                        className="absolute -left-4 h-6 w-1 rounded-full bg-cyan-600"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className={`text-lg transition-colors duration-300 sm:text-2xl ${isActive ? "font-medium text-black" : "text-neutral-400 group-hover:text-neutral-600"
                        }`}
                    >
                      {stat.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-between gap-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <p className="text-xl leading-relaxed text-black sm:text-2xl">
                {current.description}
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 to-transparent" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyForWhatsNext;
