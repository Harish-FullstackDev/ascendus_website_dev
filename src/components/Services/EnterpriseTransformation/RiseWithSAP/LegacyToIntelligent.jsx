"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Server, ListChecks, Cloud, BrainCircuit } from "lucide-react";

import card1 from "@/assets/Service/Enterprise Transformation/Rise with SAP/59a2b807bbbb814e3c039e8a0cbd0259f401cb8b.jpg";
import card2 from "@/assets/Service/Enterprise Transformation/Rise with SAP/221a4397b5488b7979a12e4a521f1ee6022aaf07.jpg";

const ITEMS = [
  {
    icon: Server,
    title: "Legacy Systems",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: card1,
  },
  {
    icon: ListChecks,
    title: "Standardized Processes",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: card2,
  },
  {
    icon: Cloud,
    title: "Cloud ERP",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: card1,
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Enterprise",
    description: "Evaluate your current ERP landscape, identify transformation opportunities, and create a roadmap.",
    image: card2,
  },
];

const AUTO_INTERVAL = 2600;

const LegacyToIntelligent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % ITEMS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            From Legacy ERP to Intelligent Enterprise
          </h2>

          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape and prepare your business for
            future challenges with a modern cloud transformation strategy.
          </p>
        </motion.div>

        {/* Expandable cards — resting size matches the design (280px tall) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex h-[280px] flex-col gap-2.5 overflow-hidden rounded-[20px] sm:h-[300px] sm:flex-row sm:gap-3"
        >
          {ITEMS.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.title}
                onMouseEnter={() => {
                  pausedRef.current = true;
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  pausedRef.current = false;
                }}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                style={{
                  flexGrow: isActive ? 5 : 1,
                  flexBasis: 0,
                  transition: "flex-grow 0.7s cubic-bezier(0.4,0,0.2,1)",
                }}
                className="group relative min-h-[64px] cursor-pointer overflow-hidden rounded-[16px] bg-sky-950 outline-none sm:min-h-0 sm:min-w-[110px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t transition-opacity duration-500"
                  style={{
                    backgroundImage: isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1))"
                      : "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2) 60%, transparent)",
                  }}
                />

                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                      <item.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">
                      {item.description}
                    </p>
                  </motion.div>
                ) : (
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                      <item.icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <p className="text-left text-sm font-medium leading-snug text-white break-words sm:text-base">
                      {item.title}
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

export default LegacyToIntelligent;
