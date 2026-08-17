"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/60b29aeaa79b2a302abbf6a93c951754 1.jpg";
import img2 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Image-3.jpg";
import img3 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/Image-2.jpg";
import img4 from "@/assets/Service/Enterprise Transformation/SAP CMU/Conversion/image 46.jpg";

const SCENARIOS = [
  {
    title: "Legacy ERP Environment",
    description: "Develop cloud-native applications with agility.",
    image: img1,
  },
  {
    title: "Increasing Maintenance Costs",
    description: "Create seamless integration between enterprise systems.",
    image: img2,
  },
  {
    title: "Analyze Instantly",
    description: "Transform enterprise data into real-time business intelligence.",
    image: img3,
  },
  {
    title: "Innovate Continuously",
    description: "Adopt AI, automation, and digital services.",
    image: img4,
  },
];

const BusinessScenarios = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 text-left"
        >
          <span className="text-lg font-medium text-cyan-600">Business Scenarios</span>
          <h2 className="text-3xl font-medium text-black sm:text-4xl">Common Business Scenarios</h2>
          <p className="text-lg text-neutral-500 sm:text-xl">
            Every modern business depends on four capabilities to stay competitive in a fast-changing
            SAP landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SCENARIOS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-44 overflow-hidden rounded-2xl shadow-[4px_4px_20px_0px_rgba(8,47,73,0.12)] sm:h-52"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-950/40 to-sky-950/10 transition-opacity duration-500 group-hover:from-cyan-800/90" />
              <div className="relative z-10 flex h-full flex-col justify-end gap-1.5 p-5">
                <h3 className="text-lg font-medium text-white sm:text-xl">{item.title}</h3>
                <p className="text-sm text-white/80 sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BusinessScenarios;
