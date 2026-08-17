"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import EverydayImg from "@/assets/Service/Artificial Intelligence/Business AI/business-ai-operations.webp";

const EverydayBusiness = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 border-t border-[#D4D3D3]">
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
            src={EverydayImg}
            alt="AI built for everyday business"
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
            AI Built for Everyday Business
          </h2>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.6]">
            Business AI is not about replacing people—it&apos;s about helping people work smarter.
            By embedding AI into everyday business operations, organizations can reduce manual
            effort, improve accuracy, and make faster, more informed decisions.
          </p>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.6]">
            From customer service and finance to supply chain and HR, Business AI helps every
            department operate more efficiently while creating better experiences for employees
            and customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EverydayBusiness;
