"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import glassImage1 from "@/assets/Service/Enterprise Transformation/Grow with SAP/2694c6508a1c9d29d164bc38e22e2f805c49d132.jpg";
import glassImage2 from "@/assets/Service/Enterprise Transformation/Grow with SAP/f6a7c3ef4e86624ccac679cea6c9b0056cfb3949.jpg";

const BLOCKS = [
  { image: glassImage1, reverse: false },
  { image: glassImage2, reverse: true },
];

const WhatIsGrowRow = ({ image, reverse }) => (
  <div
    className={`mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:gap-16 lg:px-8 ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    }`}
  >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex flex-1 flex-col items-start gap-8 text-left"
    >
      <h2 className="text-3xl font-medium text-black sm:text-4xl">What is GROW with SAP?</h2>

      <div className="flex flex-col items-start gap-5">
        <p className="text-2xl font-light text-black">
          Why Rise With <span className="text-cyan-600">SAP</span>
        </p>
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-xl font-medium text-black sm:text-2xl">
            Transform Your Business with Confidence
          </h3>
          <p className="text-lg leading-relaxed text-neutral-500 sm:text-xl">
            RISE with SAP helps organizations accelerate digital transformation by combining
            cloud ERP, business process optimization, and continuous innovation into a single
            solution. It enables businesses to simplify operations, improve agility, and adapt
            quickly to changing market demands while reducing IT complexity.
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative aspect-square w-64 flex-shrink-0 overflow-hidden rounded-3xl shadow-xl sm:w-80"
    >
      <Image
        src={image}
        alt="GROW with SAP"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </motion.div>
  </div>
);

const WhatIsGrow = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="flex flex-col gap-16 sm:gap-20">
        {BLOCKS.map((block, index) => (
          <WhatIsGrowRow key={index} {...block} />
        ))}
      </div>
    </section>
  );
};

export default WhatIsGrow;
