"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import panelImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Upgradation/image 62.jpg";

const ITEMS = [
  {
    title: "Unlocking More from Your SAP Investment",
    description: "Access connected data and real-time insights to make informed business decisions.",
  },
  {
    title: "Preparing Your SAP Landscape For The Future",
    description: "Build a foundation that adapts to new business models, regulations, and emerging technologies.",
  },
  {
    title: "Driving Business Value Through Modernization",
    description: "Turn upgrades into measurable outcomes across cost, performance, and business agility.",
  },
];

const AUTO_INTERVAL = 3200;
const PAUSE_AFTER_CLICK = 6000;

const UpgradeValueAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % ITEMS.length);
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 h-72 overflow-hidden rounded-3xl shadow-xl sm:h-96 lg:order-1"
          >
            <Image src={panelImage} alt="" fill className="object-cover" />
          </motion.div>

          <div className="order-1 flex flex-col gap-3 lg:order-2">
            {ITEMS.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  onClick={() => handleClick(index)}
                  className={`overflow-hidden rounded-xl border text-left transition-all duration-500 ${
                    isActive
                      ? "border-cyan-200 bg-cyan-50/60 py-5"
                      : "border-neutral-200 bg-white py-5 hover:border-cyan-200"
                  }`}
                >
                  <div className="flex items-center gap-4 px-5">
                    <span className="flex-1 text-base font-medium text-sky-950 sm:text-lg">
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-sky-950"
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
                        <p className="mt-3 border-t border-cyan-100 px-5 pt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeValueAccordion;
