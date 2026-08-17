"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import unionWave from "@/assets/Service/Data&Intelligence/Data Engineering/icons/Union.png";

// Fixed design canvas — matches the Figma frame exactly, then the whole
// canvas scales as one rigid unit so the wave and the 6 cards it threads
// through never drift apart, at any screen width.
const CANVAS_W = 1097.849;
const CANVAS_H = 435.746;
const CARD_W = 327;
const CARD_H = 127;
const UNION_BOX = { left: 22.45, top: 0, width: 1044.094, height: 435.745 };

const SERVICES = [
  { n: "01", title: "Data Pipeline Development", desc: "Build automated pipelines that collect, process, and deliver data from multiple business systems efficiently.", left: 0.21, top: 65.7 },
  { n: "02", title: "Data Lake & Data Warehouse", desc: "Design centralized repositories that store structured and unstructured data at any scale.", left: 385.57, top: 57.6 },
  { n: "03", title: "ETL & ELT Development", desc: "Extract, transform, and load data reliably across cloud and on-premise environments.", left: 770.57, top: 57.6 },
  { n: "04", title: "Real-Time Data Processing", desc: "Stream and process data as it arrives, enabling instant analytics and faster decisions.", left: 0.42, top: 228.6 },
  { n: "05", title: "Data Architecture Design", desc: "Architect scalable, secure data ecosystems built to support long-term business growth.", left: 385.42, top: 228.6 },
  { n: "06", title: "Data Quality Management", desc: "Validate, cleanse, and govern data continuously to keep every dataset trustworthy.", left: 770.42, top: 228.6 },
];

const ServiceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    whileHover={{ y: -6, scale: 1.03 }}
    className="absolute flex flex-col justify-center gap-1.5 rounded-[19px] bg-[#2E3033] px-6 py-5 text-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    style={{ left: item.left, top: item.top, width: CARD_W, height: CARD_H }}
  >
    <p className="text-lg font-medium">
      {item.n}. {item.title}
    </p>
    <p className="text-sm font-light leading-relaxed text-white/75">{item.desc}</p>
  </motion.div>
);

const OurDataEngineeringServices = () => {
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
            Our Data Engineering Services
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#515151]">
            Data Engineering transforms raw information into scalable, trustworthy data
            platforms. Ascendus helps organizations build, integrate, and optimize the pipelines that
            accelerate insight and support long-term business growth.
          </p>
        </motion.div>

        {/* Mobile / tablet: simple stacked list, no wave */}
        <div className="flex w-full flex-col gap-6 lg:hidden">
          {SERVICES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex flex-col justify-center gap-1.5 rounded-[19px] bg-[#2E3033] px-6 py-5 text-white shadow-md"
            >
              <p className="text-lg font-medium">
                {item.n}. {item.title}
              </p>
              <p className="text-sm font-light leading-relaxed text-white/75">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: fixed-canvas layout, scaled as one rigid unit so the
            wave stays threaded through the cards exactly as in Figma */}
        <div ref={wrapperRef} className="hidden w-full lg:block" style={{ height: CANVAS_H * scale }}>
          <div
            className="relative"
            style={{ width: CANVAS_W, height: CANVAS_H, transformOrigin: "top left", transform: `scale(${scale})` }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="pointer-events-none absolute"
              style={{ left: UNION_BOX.left, top: UNION_BOX.top, width: UNION_BOX.width, height: UNION_BOX.height }}
            >
              <Image src={unionWave} alt="" fill className="object-contain" />
            </motion.div>

            {SERVICES.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDataEngineeringServices;
