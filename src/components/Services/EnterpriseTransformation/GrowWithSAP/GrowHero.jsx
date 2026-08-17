"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import lineArt from "@/assets/Home/BGFILL.svg";

const GrowHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Image
          src={lineArt}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto overflow-hidden rounded-xl bg-neutral-50 px-8 py-10 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] sm:px-12 sm:py-12 lg:flex lg:max-w-4xl lg:items-center lg:gap-10 lg:px-16 xl:max-w-5xl"
        >
          <div className="relative flex flex-col lg:w-[28%] lg:flex-shrink-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 left-0 h-16 w-16 select-none overflow-hidden sm:-top-10 sm:h-20 sm:w-20"
            >
              <span className="absolute -top-6 left-0 font-['Geist_Mono'] text-[140px] leading-none text-sky-100 sm:-top-8 sm:text-[170px]">
                &ldquo;
              </span>
            </div>
            <h2 className="mt-10 max-w-[10rem] text-2xl font-medium leading-snug text-black sm:mt-12 sm:text-3xl">
              Grow With <span className="text-cyan-600">SAP</span>
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:flex-1">
            <h3 className="text-2xl font-medium text-sky-950 sm:text-3xl">
              Transform Your Business with Confidence
            </h3>
            <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
              Accelerate your cloud ERP journey with a fast, scalable solution designed for
              growing businesses. Ascendus helps you implement GROW with SAP quickly, enabling
              innovation, efficiency, and sustainable growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowHero;
