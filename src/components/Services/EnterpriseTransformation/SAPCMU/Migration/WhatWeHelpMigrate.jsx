"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import panelImage from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/Frame 1000004009.png";

const ITEMS = [
  {
    title: "SAP Applications",
    description: "Move enterprise applications to modern platforms without disrupting business operations.",
  },
  {
    title: "Business Data",
    description: "Ensure secure and accurate migration of business-critical information.",
  },
  {
    title: "Infrastructure",
    description: "Transition servers, storage, and supporting infrastructure to modern, resilient environments.",
  },
];

const AUTO_INTERVAL = 3000;
const ITEM_HEIGHT = 108;

const WhatWeHelpMigrate = () => {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => (prev + 1) % ITEMS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Dark heading band */}
      <div className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 px-6 pb-10 pt-16 sm:px-12 sm:pt-20 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl"
        >
          What We Help You Migrate
        </motion.h2>
      </div>

      {/* Photo band */}
      <div className="relative h-56 w-full sm:h-72 lg:h-80">
        <Image src={panelImage} alt="" fill className="object-cover" />
      </div>

      {/* Light fade-out band */}
      <div className="h-40 w-full bg-gradient-to-b from-sky-50 to-white sm:h-56" />

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        className="relative z-10 mx-4 -mt-16 rounded-[28px] bg-white p-8 shadow-[0_30px_80px_rgba(8,47,73,0.25)] sm:mx-8 sm:p-10 lg:absolute lg:inset-x-auto lg:top-12 lg:right-8 lg:mx-0 lg:mt-0 lg:w-[440px] xl:right-16"
      >
        <div className="relative flex flex-col">
          <motion.span
            aria-hidden
            className="absolute left-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-sky-700"
            animate={{ top: active * ITEM_HEIGHT + 4, height: ITEM_HEIGHT - 28 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          />
          {ITEMS.map((item, index) => {
            const distance = Math.abs(index - active);
            const opacity = distance === 0 ? 1 : distance === 1 ? 0.5 : 0.22;
            const isActive = index === active;
            return (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                style={{ minHeight: ITEM_HEIGHT }}
                className="flex flex-col justify-center gap-2 pl-6 text-left"
              >
                <motion.h3
                  animate={{ opacity, color: isActive ? "#000000" : "#525252" }}
                  transition={{ duration: 0.4 }}
                  className="text-xl font-bold sm:text-2xl"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  animate={{ opacity: opacity * 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="text-base leading-relaxed text-neutral-500 sm:text-lg"
                >
                  {item.description}
                </motion.p>
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeHelpMigrate;
