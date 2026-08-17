"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import WorkingImg from "@/assets/Service/Artificial Intelligence/Gen AI/generative-ai-workplace.jpeg";

const NewWayOfWorking = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.015 }}
          className="w-full lg:w-[46%] rounded-2xl overflow-hidden shrink-0 relative aspect-[568/319] shadow-[4px_4px_28px_rgba(0,0,0,0.1)]"
        >
          <Image
            src={WorkingImg}
            alt="The new way of working with Generative AI"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-black leading-snug">
            The New Way of Working
          </h2>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.6]">
            Every organization creates thousands of documents, emails, reports, proposals, and
            customer conversations every day.
          </p>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.6]">
            Generative AI transforms these everyday activities by helping employees create,
            summarize, analyze, and respond faster—allowing teams to spend less time on repetitive
            work and more time on high-value business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewWayOfWorking;
