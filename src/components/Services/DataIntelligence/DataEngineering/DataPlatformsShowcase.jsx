"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import warehouseImg from "@/assets/Service/Data&Intelligence/Data Engineering/enterprise-data-warehouse.jpg";
import streamsImg from "@/assets/Service/Data&Intelligence/Data Engineering/real-time-data-streams.jpg";
import lakesImg from "@/assets/Service/Data&Intelligence/Data Engineering/data-lakes.jpg";
import etlImg from "@/assets/Service/Data&Intelligence/Data Engineering/etl-pipelines.jpg";
import governanceImg from "@/assets/Service/Data&Intelligence/Data Engineering/data-governance.jpg";
import analyticsImg from "@/assets/Service/Data&Intelligence/Data Engineering/analytics-platforms.jpg";

const PANELS = [
  { n: 1, title: "Enterprise Data Warehouses", desc: "Centralized, governed repositories that give every team a single source of truth.", image: warehouseImg, color: "#0061af" },
  { n: 2, title: "Real-Time Data Streams", desc: "Ingest and process events the moment they happen, not hours later.", image: streamsImg, color: "#2E3033" },
  { n: 3, title: "Data Lakes", desc: "Store structured and unstructured data at any scale, ready for analytics.", image: lakesImg, color: "#0061af" },
  { n: 4, title: "ETL Pipelines", desc: "Reliable extract, transform, and load workflows that keep data moving.", image: etlImg, color: "#2E3033" },
  { n: 5, title: "Data Governance", desc: "Access control, lineage, and quality checks built into every pipeline.", image: governanceImg, color: "#0061af" },
  { n: 6, title: "Analytics Platforms", desc: "Trusted, query-ready datasets that power dashboards, AI, and ML.", image: analyticsImg, color: "#2E3033" },
];

const AUTO_INTERVAL = 3200;

const DataPlatformsShowcase = () => {
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
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
            Enterprise Data Platforms We Deliver
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#7b7b7b]">
            From warehouses to real-time streams, every platform we build is designed to scale
            with your business.
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
                {panel.image && isActive ? (
                  <Image
                    src={panel.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0" style={{ backgroundColor: panel.color }} />
                )}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15) 60%, transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
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

export default DataPlatformsShowcase;

