"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import OpportunityImg from "@/assets/Service/Artificial Intelligence/AI Strategy/ai-business-opportunity.jpeg";

const Opportunity = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[46%] rounded-2xl overflow-hidden shrink-0 relative aspect-[568/319]"
        >
          <Image
            src={OpportunityImg}
            alt="The opportunity AI makes possible"
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
            The Opportunity Isn&apos;t AI. It&apos;s What AI Makes Possible.
          </h2>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.6]">
            Some projects require flexibility more than predictability.
          </p>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.6]">
            Whether you&apos;re implementing a new module, enhancing an existing solution, supporting a
            transformation program, or managing unexpected workload peaks, our T&amp;M model enables
            you to bring in the right expertise at the right time.
          </p>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.6]">
            You stay in control of priorities while we provide the talent and execution needed to
            keep projects moving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunity;
