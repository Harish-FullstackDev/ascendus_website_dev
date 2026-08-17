"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import reportImage from "@/assets/Service/Enterprise Transformation/SAP Rollout/insights-research-report.jpg";

const RollOutInsights = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <h2 className="text-2xl font-medium text-black sm:text-3xl lg:text-4xl">
          Enterprise Transformation Insights
        </h2>
        <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
          Evaluate your current ERP landscape, identify transformation opportunities, and create a
          roadmap.
        </p>
      </motion.div>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4 }}
        className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[20px] shadow-[5px_5px_20px_0px_rgba(217,217,217,0.25)] transition-shadow duration-500 hover:shadow-[0_25px_60px_-20px_rgba(8,145,178,0.45)] sm:min-h-[400px] lg:min-h-[360px] lg:flex-row lg:items-end lg:justify-start"
      >
        <Image
          src={reportImage}
          alt="Rethinking ERP for a Digital-First World"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative flex flex-col gap-2 p-8 sm:p-10 lg:max-w-xl">
          <span className="text-lg text-white/80 sm:text-xl">Research Report</span>
          <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
            Rethinking ERP for a Digital-First World
          </h3>
        </div>

        <div className="relative flex flex-1 flex-col gap-4 p-8 pt-0 sm:p-10 sm:pt-0 lg:pt-10">
          <p className="text-base leading-relaxed text-white/90 sm:text-lg lg:max-w-md">
            Evaluate your current ERP landscape, identify transformation opportunities, and create
            a roadmap aligned with your business objectives.
          </p>
          <span className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white underline underline-offset-4 transition-opacity duration-300 group-hover:opacity-70">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </motion.a>
    </div>
  </section>
);

export default RollOutInsights;
