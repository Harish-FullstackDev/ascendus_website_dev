"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import navyArrow from "@/assets/Service/Data&Intelligence/Data Integration/icons/akar-icons_arrow-back.svg";
import blueArrow from "@/assets/Service/Data&Intelligence/Data Integration/icons/akar-icons_arrow-back-1.svg";

// Fixed design canvas — matches the Figma frame exactly so the 5 cascading
// steps and their connectors keep their exact relative offsets at any
// screen width (same technique used for the OurDataEngineeringServices wave).
const CANVAS_W = 1148;
const CANVAS_H = 420;
const CARD_W = 286;
const CARD_H = 118;

const STEPS = [
  { title: "Discover", desc: "Identify business systems, data sources, and integration requirements.", left: 0, top: 302, bg: "#2E3033" },
  { title: "Connect", desc: "Establish secure, reliable connections between every application and platform.", left: 210, top: 269, bg: "#0061af" },
  { title: "Transform", desc: "Standardize and reshape data so every system speaks the same language.", left: 435, top: 210, bg: "#2E3033" },
  { title: "Synchronize", desc: "Keep records consistent and up to date across the business in real time.", left: 649, top: 151, bg: "#0061af" },
  { title: "Deliver", desc: "Route trusted, ready-to-use data to the teams and tools that need it.", left: 862, top: 92, bg: "#2E3033" },
];

const CONNECTORS = [
  { icon: blueArrow, left: 208, top: 304.5 },
  { icon: navyArrow, left: 425.5, top: 258.5 },
  { icon: blueArrow, left: 645, top: 199.5 },
  { icon: navyArrow, left: 858.5, top: 140.5 },
];

const ConnectedDataJourney = () => {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return undefined;
    const update = () => setScale(el.offsetWidth / CANVAS_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
            The Connected Data Journey
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#7b7b7b]">
            From first discovery to continuous delivery, every integration follows a proven,
            repeatable path.
          </p>
        </motion.div>

        {/* Mobile / tablet: simple stacked list, no connectors */}
        <div className="flex w-full flex-col gap-6 lg:hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col justify-center gap-1.5 rounded-[19px] px-6 py-5 text-white shadow-md"
              style={{ backgroundColor: step.bg }}
            >
              <p className="text-lg font-medium">
                {index + 1}. {step.title}
              </p>
              <p className="text-sm font-light leading-relaxed text-white/75">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: fixed-canvas ascending staircase, scaled as one rigid unit */}
        <div ref={wrapperRef} className="hidden w-full lg:block" style={{ height: CANVAS_H * scale }}>
          <div
            className="relative"
            style={{ width: CANVAS_W, height: CANVAS_H, transformOrigin: "top left", transform: `scale(${scale})` }}
          >
            {CONNECTORS.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                className="absolute"
                style={{ left: c.left, top: c.top, width: 80, height: 80 }}
              >
                <Image src={c.icon} alt="" fill />
              </motion.div>
            ))}

            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="absolute flex flex-col justify-center gap-1.5 rounded-[19px] px-6 py-5 text-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                style={{ left: step.left, top: step.top, width: CARD_W, height: CARD_H, backgroundColor: step.bg }}
              >
                <p className="text-lg font-medium">
                  {index + 1}. {step.title}
                </p>
                <p className="text-sm font-light leading-relaxed text-white/75">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedDataJourney;
