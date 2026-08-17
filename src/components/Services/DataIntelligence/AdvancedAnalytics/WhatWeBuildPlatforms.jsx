"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import realTimeImg from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image-6.jpg";
import cloudImg from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image-5.jpg";
import analyticsImg from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image-4.jpg";

const CANVAS_W = 1280;
const CANVAS_H = 722.051;

const PIPELINES = [
  { title: "Forecasting Engines", desc: "Machine learning models trained to predict future demand and transactional trends." },
  { title: "Behavior Segmentation", desc: "Grouping users based on interaction logs to discover product affinity signals." },
  { title: "Experiment Rigs", desc: "Statistical validation systems measuring the business impact of feature releases." },
];

const PLATFORMS = [
  { title: "Real-Time Metric Streams", desc: "Ingest and process user events the moment they occur for immediate insight.", image: realTimeImg },
  { title: "Dynamic BI Portals", desc: "Interactive dashboards connecting directly to your consolidated cloud lakehouse.", image: cloudImg },
  { title: "Data Science Sandboxes", desc: "Secure notebooks pre-configured with analytics tools and connected data sets.", image: analyticsImg },
];

const ICON_TOPS = [94, 304, 497];

const WhatWeBuildPlatforms = () => {
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
      {/* Mobile / tablet: simple stacked layout */}
      <div className="mx-auto flex max-w-2xl flex-col gap-14 lg:hidden">
        <h2 className="text-2xl font-medium text-black sm:text-3xl">What We Build</h2>

        <div className="flex flex-col gap-8">
          {PIPELINES.map((item) => (
            <div key={item.title} className="flex flex-col gap-1.5">
              <p className="text-xl font-medium text-black">{item.title}</p>
              <p className="text-base font-light text-black/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 bg-[#2E3033] p-8">
          {PLATFORMS.map((item) => (
            <div key={item.title} className="flex items-center gap-5">
              <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-[20px]">
                <div className="absolute -inset-[18%]">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-white">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm font-light text-white/75">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: fixed-canvas layout, scaled as one rigid unit */}
      <div ref={wrapperRef} className="hidden w-full lg:block" style={{ height: CANVAS_H * scale }}>
        <div
          className="relative"
          style={{ width: CANVAS_W, height: CANVAS_H, transformOrigin: "top left", transform: `scale(${scale})` }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="absolute text-4xl font-medium text-black"
            style={{ left: 111, top: 79 }}
          >
            What We Build
          </motion.p>

          {/* Left: pipelines list */}
          <div className="absolute flex flex-col gap-[102px]" style={{ left: 220, top: 201, width: 264 }}>
            {PIPELINES.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-1.5"
              >
                <p className="text-2xl font-medium text-black">{item.title}</p>
                <p className="text-lg font-light text-black/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: dark platforms panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="absolute bg-[#2E3033]"
            style={{ left: 689, top: 31, width: 572, height: 669 }}
          />
          <div className="absolute flex flex-col justify-between" style={{ left: 843, top: 111, width: 264, height: 520 }}>
            {PLATFORMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-1.5 text-white"
              >
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="text-lg font-light text-white/75">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Icon stack — straddles the white/dark boundary exactly as in Figma */}
          {PLATFORMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.05 }}
              className="group absolute overflow-hidden rounded-[17px] shadow-[8px_8px_13.6px_0px_rgba(0,0,0,0.25)]"
              style={{ left: 640, top: ICON_TOPS[index], width: 146, height: 146 }}
            >
              <div className="absolute -inset-[18%] transition-transform duration-700 ease-out group-hover:scale-110">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuildPlatforms;
