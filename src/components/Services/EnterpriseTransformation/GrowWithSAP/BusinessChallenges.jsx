"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import assessmentImg from "@/assets/Service/Enterprise Transformation/Grow with SAP/0d443255ff11bb7bac9b89882096403c61a9552b.jpg";
import implementationImg from "@/assets/Service/Enterprise Transformation/Grow with SAP/b37fa11a90d7ce5d12475b7f98834669659a5ff0.jpg";
import processImg from "@/assets/Service/Enterprise Transformation/Grow with SAP/e10e22bbbc2e52d15670f960c47c984949899628.jpg";
import integrationImg from "@/assets/Service/Enterprise Transformation/Grow with SAP/a379564b18609e13b4f71197015d676e73de748b.jpg";
import amsImg from "@/assets/Service/Enterprise Transformation/Grow with SAP/2f1ce6d286a4748f0c8cdd3c9eee23500f81d0ca.jpg";
import methodologyImg from "@/assets/Service/Enterprise Transformation/Grow with SAP/ed7aa4b8771c3674de65dd57b4007577a2aa7703.png";

const CARDS = [
  {
    title: "Business Assessment & Readiness",
    image: assessmentImg,
    description: "Improve efficiency through standardized and automated business processes.",
    deliverables: [
      "Business process assessment",
      "ERP readiness evaluation",
      "Gap analysis",
      "Transformation roadmap",
      "Implementation planning",
    ],
  },
  {
    title: "GROW with SAP Implementation",
    image: implementationImg,
    description: "Deploy GROW with SAP using best-practice templates and accelerated timelines.",
  },
  {
    title: "Process Optimization",
    image: processImg,
    description: "Standardize and streamline business processes aligned with SAP best practices.",
  },
  {
    title: "SAP Integration Services",
    image: integrationImg,
    description: "Seamlessly connect GROW with SAP to your existing applications and data sources.",
  },
  {
    title: "Application Management Services (AMS)",
    image: amsImg,
    description: "Ongoing support, monitoring, and optimization to keep your ERP running at its best.",
  },
  {
    title: "Our GROW with SAP Methodology",
    image: methodologyImg,
    description: "A proven, structured approach that takes you from assessment to go-live with confidence.",
  },
];

const AUTO_INTERVAL = 2000;

const BusinessChallenges = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            Solving Business Challenges with GROW with SAP
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your business processes, identify ERP requirements, and define a roadmap for
            cloud ERP adoption.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex h-[440px] gap-2.5 overflow-hidden rounded-xl sm:gap-3"
        >
          {CARDS.map((card, index) => {
            const isActive = index === activeIndex;
            const textPosition = index % 2 === 0 ? "top" : "bottom";
            return (
              <div
                key={card.title}
                onMouseEnter={() => {
                  pausedRef.current = true;
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  pausedRef.current = false;
                }}
                style={{
                  flexGrow: isActive ? 5 : 1,
                  flexBasis: 0,
                  transition: "flex-grow 0.7s cubic-bezier(0.4,0,0.2,1)",
                }}
                className="group relative min-w-[110px] cursor-pointer overflow-hidden rounded-lg bg-sky-950 sm:min-w-[130px]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/90 via-black/40 to-black/10"
                      : textPosition === "bottom"
                        ? "bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                        : "bg-gradient-to-b from-black/85 via-black/25 to-transparent"
                  }`}
                  style={{ opacity: isActive ? 1 : 0.85 }}
                />

                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5"
                  >
                    <h3 className="text-base font-medium leading-snug text-white sm:text-lg">
                      {card.title}
                    </h3>
                    <div className="mt-3 flex flex-col gap-3 sm:mt-4">
                      {card.deliverables && (
                        <div>
                          <p className="mb-1 text-sm font-medium text-white">Deliverables</p>
                          <ul className="space-y-0.5 text-sm text-white/80">
                            {card.deliverables.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <p className="max-w-xs text-sm text-white/85 sm:text-base">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div
                    className={`absolute inset-x-0 px-3 sm:px-4 ${
                      textPosition === "bottom" ? "bottom-0 pb-4 sm:pb-5" : "top-0 pt-4 sm:pt-5"
                    }`}
                  >
                    <p className="text-left text-xs font-medium leading-snug text-white break-words sm:text-sm">
                      {card.title}
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

export default BusinessChallenges;
