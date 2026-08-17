"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import globeImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/30bdae03a8ca633c4c3c7d050d0fadcfe81f917a.jpg";
import corridorImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/a19032145be6a1b62eaf8fc8c065a613c093fe0c.jpg";
import teamImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/8d3d5bd8ec58fc68ac3a40bb3901569e8329093e.jpg";
import modernizeImage from "@/assets/Service/Enterprise Transformation/Rise with SAP/modernizeImage.webp";

const CARDS = [
  {
    title: "Business Transformation Roadmap",
    description:
      "Create a structured roadmap that aligns cloud ERP transformation with your business goals. We help prioritize initiatives, reduce implementation risk, and deliver measurable business value from day one.",
    image: globeImage,
  },
  {
    title: "Built for Business Growth",
    description:
      "Adopt scalable SAP cloud solutions designed to support expansion, improve operational agility, and enable continuous innovation as your organization grows.",
    image: corridorImage,
  },
  {
    title: "Modernize Without Disruption",
    description:
      "Transform legacy ERP environments through a phased migration approach that minimizes downtime, protects business continuity, and accelerates user adoption.",
    image: modernizeImage,
  },
  {
    title: "Future-Ready Enterprise",
    description:
      "Build an intelligent digital foundation with automation, analytics, AI, and cloud technologies that keep your business resilient and prepared for future change.",
    image: teamImage,
  },
];


const SSTDifference = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">The Ascendus Difference</h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-[430px] overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/70" />

              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="text-2xl font-semibold text-white leading-tight">
                  {card.title}
                </h3>

                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100">
                  <p className="mt-4 text-sm leading-7 text-white/80">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSTDifference;
