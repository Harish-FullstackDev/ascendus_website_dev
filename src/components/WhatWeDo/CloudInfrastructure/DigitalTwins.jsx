"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import iacPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section10_Bg.svg";

const ITEMS = [
  {
    title: "Infrastructure as Code (IaC)",
    desc: "Provision and manage infrastructure through version-controlled code, not manual clicks.",
  },
  {
    title: "Automated Provisioning",
    desc: "Spin up compute, storage, and networking resources on demand, without manual tickets.",
  },
  {
    title: "Configuration Management",
    desc: "Keep every environment consistent and drift-free with automated configuration enforcement.",
  },
  {
    title: "Environment Standardization",
    desc: "Ship identical dev, staging, and production environments to eliminate deployment surprises.",
  },
  {
    title: "Cloud Automation",
    desc: "Automate routine operational tasks so your team can focus on higher-value engineering work.",
  },
  {
    title: "Infrastructure Monitoring Automation",
    desc: "Continuously track infrastructure health and trigger automated remediation before issues escalate.",
  },
];

export default function DigitalTwins() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % ITEMS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#EDEDED] py-16 px-6 lg:px-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[760px] mx-auto text-center mb-16"
      >
        <h2 className="text-[38px] font-medium text-black">
          Digital Twins
        </h2>

        <p className="mt-4 text-[18px] leading-8 text-[#3D3D3D]">
          Simulate infrastructure changes safely before they touch production,
          with live digital replicas of your systems.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
        {/* Left Side */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-3">
          {ITEMS.map((item, index) => {
            const isActive = index === active;

            return (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`text-left transition-all duration-300 pl-4 ${
                  isActive
                    ? "border-l-[3px] border-[#1F92D1] py-4"
                    : "border-l-[3px] border-transparent py-2"
                }`}
              >
                <h3
                  className={`transition-all ${
                    isActive
                      ? "text-[18px] font-medium text-black"
                      : "text-[18px] font-normal text-[#5A5A5A]"
                  }`}
                >
                  {item.title}
                </h3>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 max-w-[280px] text-[15px] leading-7 text-[#3D3D3D]"
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-[600px] h-[450px] overflow-hidden">
          <AnimatedImage className="pl-[100px]" active={active} src={iacPhoto} />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Bottom Text */}
          <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
            <p className="max-w-[280px] text-white text-[18px] leading-10 font-normal">
              Helping organizations realize value faster through proven
              methodologies.
            </p>

            <span className="text-white text-[22px] font-semibold">
              {String(active + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedImage({ active, src }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt="Digital Twins"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </AnimatePresence>
  );
}