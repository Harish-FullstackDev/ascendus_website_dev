"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShimmerText from "@/components/ui/shimmer-text";
import { TextReveal } from "@/components/ui/cascade-text";

import flashIcon from "@/assets/Service/Enterprise Transformation/Grow with SAP/icons/mingcute_flash-fill.svg";
import cloudIcon from "@/assets/Service/Enterprise Transformation/Grow with SAP/icons/material-symbols-light_cloud.svg";
import industryIcon from "@/assets/Service/Enterprise Transformation/Grow with SAP/icons/fa7-solid_industry.svg";
import downIcon from "@/assets/Service/Enterprise Transformation/Grow with SAP/icons/icon-park-solid_down-two.svg";
import continueIcon from "@/assets/Service/Enterprise Transformation/Grow with SAP/icons/carbon_continue-filled.svg";
import scaleIcon from "@/assets/Service/Enterprise Transformation/Grow with SAP/icons/solar_scale-bold.svg";
import glassBg from "@/assets/Service/Enterprise Transformation/Grow with SAP/07d2c0f9feee42b517e5214f2e4ad405dcd86265.jpg";

const VALUES = [
  {
    icon: flashIcon,
    title: "Fast Implementation",
    description: "Go live quickly with preconfigured business processes and SAP best practices.",
  },
  {
    icon: cloudIcon,
    title: "Cloud-First ERP",
    description: "Access a secure, scalable, and always up-to-date ERP platform without managing infrastructure.",
  },
  {
    icon: industryIcon,
    title: "Industry Best Practices",
    description: "Leverage standardized processes designed around industry requirements.",
  },
  {
    icon: downIcon,
    title: "Lower Total Cost of Ownership",
    description: "Reduce hardware, maintenance, and operational cost.",
  },
  {
    icon: continueIcon,
    title: "Continuous Innovation",
    description: "Benefit from regular updates, AI-driven capabilities, analytics, and automation features.",
  },
  {
    icon: scaleIcon,
    title: "Business Scalability",
    description: "Support growth with a flexible platform that adapts to evolving business needs.",
  },
];

const ValueCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6 }}
    className="group flex flex-col gap-4 rounded-[20px] bg-white p-5 shadow-[4px_4px_25px_0px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[4px_4px_30px_0px_rgba(8,47,73,0.20)]"
  >
    <div className="grid h-16 w-16 place-items-center rounded-lg bg-neutral-100 transition-colors duration-300 group-hover:bg-black">
      <Image
        src={item.icon}
        alt=""
        className="col-start-1 row-start-1 h-7 w-7 transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src={item.icon}
        alt=""
        className="col-start-1 row-start-1 h-7 w-7 opacity-0 invert transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
    <h3 className="text-xl font-medium text-neutral-800">{item.title}</h3>
    <p className="text-base text-neutral-500">{item.description}</p>
  </motion.div>
);

const GlassWaveCard = () => {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[420px] w-full overflow-hidden rounded-[32px] shadow-2xl lg:min-h-full"
    >
      <Image src={glassBg} alt="" fill className="object-cover" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-16 rounded-full bg-cyan-300/40 blur-3xl"
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        animate={{ left: ["-45%", "130%"] }}
        transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
          className="relative rounded-2xl bg-white/5 p-8 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 cursor-pointer select-none"
        >
          <ShimmerText duration={2.2} className="font-extrabold uppercase tracking-tight">
            <div className="flex flex-row items-center justify-center">
              <TextReveal
                text="GROW with"
                as="div"
                fontSize="clamp(1.8rem, 5vw, 2.5rem)"
                color="#ffffff"
                hoverColor="#67e8f9"
                staggerDelay={20}
                duration={250}
                hovered={cardHovered}
                style={{ paddingLeft: "0.15em", paddingRight: "0.15em" }}
              />
              <TextReveal
                text="SAP"
                as="div"
                fontSize="clamp(1.8rem, 5vw, 2.5rem)"
                color="#67e8f9"
                hoverColor="#ffffff"
                staggerDelay={20}
                duration={250}
                hovered={cardHovered}
                style={{ paddingLeft: "0.15em", paddingRight: "0.15em" }}
              />
            </div>
          </ShimmerText>
        </div>
      </div>
    </motion.div>
  );
};

const ValueOfGrow = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center text-3xl font-medium text-black sm:text-4xl"
        >
          The Value of GROW with SAP
        </motion.h2>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_420px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((item, index) => (
              <ValueCard key={item.title} item={item} index={index} />
            ))}
          </div>
          <GlassWaveCard />
        </div>
      </div>
    </section>
  );
};

export default ValueOfGrow;
