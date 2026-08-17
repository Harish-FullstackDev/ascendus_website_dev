"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import img1 from "@/assets/Service/Enterprise Transformation/Grow with SAP/b37fa11a90d7ce5d12475b7f98834669659a5ff0.jpg";
import img2 from "@/assets/Service/Enterprise Transformation/Grow with SAP/d21ed5c90bcf91686205d505582dd36a10b173d6.jpg";
import img3 from "@/assets/Service/Enterprise Transformation/Grow with SAP/ed7aa4b8771c3674de65dd57b4007577a2aa7703.png";
import img4 from "@/assets/Service/Enterprise Transformation/Grow with SAP/2c1a139a7c677a6f626ac748cd4ffe2cbf7efaf0.jpg";
import img5 from "@/assets/Service/Enterprise Transformation/Grow with SAP/7dbcc528d29b605571faf3c9c0f8c0e358906617.jpg";
import img6 from "@/assets/Service/Enterprise Transformation/Grow with SAP/89f617458cc6b8a576e6cb1917b5feae22fcdfe3.jpg";

const OPTIONS = [
  {
    title: "Cloud ERP",
    description: "Run your business on a secure and scalable cloud platform.",
    caption: "Helping organizations realize value faster through proven methodologies.",
    image: img1,
  },
  {
    title: "Best Practice Processes",
    description: "Standardized processes benchmarked against industry leaders.",
    caption: "Deploy pre-configured workflows engineered from thousands of implementations.",
    image: img2,
  },
  {
    title: "Real-Time Analytics",
    description: "Make faster decisions with live business insights.",
    caption: "See performance the moment it happens, across every business line.",
    image: img3,
  },
  {
    title: "Built-In Automation",
    description: "Automate repetitive tasks and reduce manual effort.",
    caption: "Free your teams from busywork so they can focus on growth.",
    image: img4,
  },
  {
    title: "Scalable Architecture",
    description: "A platform that grows seamlessly with your business.",
    caption: "Scale users, data, and complexity without re-platforming.",
    image: img5,
  },
  {
    title: "Continuous Innovation",
    description: "Regular updates keep you ahead with the latest capabilities.",
    caption: "Quarterly innovation cycles bring new AI-driven capabilities automatically.",
    image: img6,
  },
];

const AUTO_INTERVAL = 3500;

const FeaturesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % OPTIONS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const active = OPTIONS[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">Features of GROW with SAP</h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape and prepare your business for future challenges
            with a modern cloud transformation strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            className="flex flex-col divide-y divide-neutral-200"
          >
            {OPTIONS.map((option, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={option.title}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col gap-1.5 border-l-[5px] px-4 py-5 text-left transition-colors duration-300 sm:px-5 ${
                    isActive
                      ? "border-cyan-600 bg-cyan-50/40"
                      : "border-transparent hover:border-cyan-600/40"
                  }`}
                >
                  <span
                    className={`text-xl font-medium transition-colors duration-300 sm:text-2xl ${
                      isActive ? "text-black" : "text-neutral-500"
                    }`}
                  >
                    {option.title}
                  </span>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden text-base text-neutral-600 sm:text-lg"
                      >
                        {option.description}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[20px] shadow-xl sm:h-[430px] lg:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image src={active.image} alt={active.title} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/0" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-xs text-lg text-white sm:text-xl"
                >
                  {active.caption}
                </motion.p>
              </AnimatePresence>
              <span className="text-2xl font-semibold text-white sm:text-3xl">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTabs;
