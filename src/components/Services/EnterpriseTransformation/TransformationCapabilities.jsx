"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import card01 from "@/assets/Service/Enterprise Transformation/Card 01.jpg";
import card02 from "@/assets/Service/Enterprise Transformation/Card 2.jpg";
import card03 from "@/assets/Service/Enterprise Transformation/Card 03.jpg";
import card04 from "@/assets/Service/Enterprise Transformation/Card 04.jpg";
import card05 from "@/assets/Service/Enterprise Transformation/Card 05.jpg";

const CAPABILITIES = [
  {
    title: "Business Transformation",
    description: "Align business strategy, people, and processes to improve agility and operational performance.",
    image: card01,
    tint: "bg-sky-950/70",
    height: "h-48",
  },
  {
    title: "Digital Transformation",
    description: "Leverage digital technologies to create connected experiences and accelerate innovation.",
    image: card02,
    tint: "bg-black/60",
    height: "h-64",
  },
  {
    title: "Cloud Transformation",
    description: "Build a scalable and secure cloud foundation that supports business growth and operational resilience.",
    image: card03,
    tint: "bg-sky-950/70",
    height: "h-72",
  },
  {
    title: "Data & Analytics",
    description: "Turn enterprise data into meaningful insights that drive informed business decisions.",
    image: card04,
    tint: "bg-black/70",
    height: "h-80",
  },
  {
    title: "Intelligent Automation",
    description: "Improve productivity by automating repetitive tasks and streamlining business operations.",
    image: card05,
    tint: "bg-sky-950/70",
    height: "h-96",
  },
];

const TransformationCapabilities = () => {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
            Our Transformation Capabilities
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Ascendus helps enterprises transform with confidence through strategy, technology, and execution.
          </p>
        </motion.div>

        <div className="flex items-end gap-4 overflow-x-auto pb-4 sm:gap-5 lg:justify-center lg:overflow-visible">
          {CAPABILITIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              className="flex w-48 flex-shrink-0 flex-col items-start sm:w-52"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 + 0.15, type: "spring" }}
                className="mb-3 text-2xl font-semibold text-black sm:text-3xl"
              >
                {index + 1}
              </motion.div>
              <div
                className={`group relative w-full overflow-hidden rounded-2xl shadow-[4px_4px_10px_5px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[4px_4px_20px_8px_rgba(8,47,73,0.18)] ${item.height}`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${item.tint} transition-opacity duration-300 group-hover:opacity-80`} />
                <div className="relative z-10 flex h-full flex-col items-start gap-3 p-5">
                  <h3 className="text-xl font-normal leading-snug text-white sm:text-2xl">{item.title}</h3>
                  <p className="text-sm font-normal leading-relaxed text-white/80">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationCapabilities;
