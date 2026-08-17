"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import col1 from "@/assets/Service/Data&Intelligence/Data Integration/Frame 2147239701.jpg";
import col2 from "@/assets/Service/Data&Intelligence/Data Integration/Frame 2147239705.jpg";
import col3 from "@/assets/Service/Data&Intelligence/Data Integration/Frame 2147239707.jpg";
import col4 from "@/assets/Service/Data&Intelligence/Data Integration/Frame 2147239708.jpg";
import col5 from "@/assets/Service/Data&Intelligence/Data Integration/Frame 2147239709.jpg";
import col6 from "@/assets/Service/Data&Intelligence/Data Integration/Frame 2147239710.jpg";

const PANELS = [
  { n: 1, title: "Enterprise Data", desc: "Core business records from ERP, finance, and HR systems, unified into one trusted flow.", image: col1 },
  { n: 2, title: "Cloud Data", desc: "Information generated across SaaS platforms and cloud-native applications.", image: col2 },
  { n: 3, title: "Database Integration", desc: "Structured records synchronized reliably across every database in your landscape.", image: col3 },
  { n: 4, title: "API Data Sources", desc: "Live data exchanged through REST, SOAP, and GraphQL endpoints.", image: col4 },
  { n: 5, title: "Third-Party Data", desc: "Vendor, partner, and marketplace feeds connected securely into your ecosystem.", image: col5 },
  { n: 6, title: "Real-Time Data Streams", desc: "Event-driven data ingested and acted on the moment it happens.", image: col6 },
];

const AUTO_INTERVAL = 3200;

const WhatWeIntegrate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % PANELS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#2E3033] py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4">
            What We Integrate
          </h2>
          <p className="text-lg sm:text-xl font-light text-white/70">
            Every source of business data, brought together into one connected, always-current
            ecosystem.
          </p>
        </motion.div>

        {/* Mobile / tablet: simple stacked list, no expand/collapse */}
        <div className="flex w-full flex-col gap-5 lg:hidden">
          {PANELS.map((panel, index) => (
            <motion.div
              key={panel.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative h-[220px] w-full overflow-hidden rounded-[24px] shadow-md sm:h-[260px]"
            >
              <Image src={panel.image} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-medium text-[#2E3033]">
                  {panel.n}
                </span>
                <h3 className="text-lg font-medium text-white sm:text-2xl">{panel.title}</h3>
                <p className="max-w-xs text-sm font-light text-white/85 sm:text-base">
                  {panel.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: expandable accordion strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="hidden h-[418px] w-full gap-3 overflow-hidden rounded-[50px] lg:flex"
        >
          {PANELS.map((panel, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={panel.n}
                onMouseEnter={() => {
                  pausedRef.current = true;
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  pausedRef.current = false;
                }}
                style={{
                  flexGrow: isActive ? 5.6 : 1,
                  flexBasis: 0,
                  transition: "flex-grow 0.7s cubic-bezier(0.4,0,0.2,1)",
                }}
                className="group relative min-w-[70px] cursor-pointer overflow-hidden rounded-[24px]"
              >
                <Image
                  src={panel.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1) 60%, transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  }}
                />

                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute inset-0 flex flex-col justify-end gap-2 p-6 sm:p-8"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-medium text-[#2E3033]">
                      {panel.n}
                    </span>
                    <h3 className="text-lg font-medium text-white sm:text-2xl">{panel.title}</h3>
                    <p className="max-w-xs text-sm font-light text-white/85 sm:text-base">
                      {panel.desc}
                    </p>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-between p-3 sm:p-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/90 text-xs font-medium text-[#2E3033]">
                      {panel.n}
                    </span>
                    <p className="max-w-[1.4rem] rotate-180 text-center text-xs font-light leading-snug text-white [writing-mode:vertical-rl] sm:max-w-none sm:text-sm">
                      {panel.title}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeIntegrate;

