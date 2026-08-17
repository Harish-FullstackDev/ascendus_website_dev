"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image-3.jpg";
import img2 from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image-2.jpg";
import img3 from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image-1.jpg";
import img4 from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image-7.jpg";
import img5 from "@/assets/Service/Data&Intelligence/Data Engineering/Icon Image.jpg";
import blackArrow from "@/assets/Service/Data&Intelligence/Data Engineering/icons/tabler_arrow-up-1.svg";
import blueArrow from "@/assets/Service/Data&Intelligence/Data Engineering/icons/tabler_arrow-up.svg";

const STEPS = [
  { title: "Discover", desc: "Understand your business objectives, existing data sources, and technology landscape.", image: img1, dark: true },
  { title: "Design", desc: "Create a scalable data architecture and integration strategy.", image: img2, dark: false },
  { title: "Build", desc: "Develop data pipelines, storage platforms, and processing frameworks.", image: img3, dark: true },
  { title: "Validate", desc: "Ensure data accuracy, consistency, and performance across systems.", image: img4, dark: false },
  { title: "Optimize", desc: "Continuously improve data quality, scalability, and operational efficiency.", image: img5, dark: true },
];

// Alternating black / blue-dashed connectors, matching the Figma design.
const ARROWS = [blackArrow, blueArrow, blackArrow, blueArrow];

// A 9-column template: 5 wide "card" tracks + 4 narrow "arrow" tracks in
// between. Reusing the exact same column template for the cards row, the
// arrows row, and the text row guarantees the arrows land centred in the
// gaps and everything stays aligned as one rigid unit. Sized so all 9
// tracks fit within max-w-6xl (1152px) with no horizontal scroll.
const GRID_COLS = "165px 80px 165px 80px 165px 80px 165px 80px 165px";
const CARD_COLS = [1, 3, 5, 7, 9];
const ARROW_COLS = [2, 4, 6, 8];

const OurDataIntelligenceProcess = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
            Our Data Intelligence Process
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#7b7b7b]">
            A proven, structured approach that takes your data from raw and scattered to reliable
            and decision-ready.
          </p>
        </motion.div>

        {/* Mobile / tablet: simple stacked list, no connectors */}
        <div className="flex w-full flex-col gap-10 lg:hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center gap-5"
            >
              <div className="group relative flex h-[110px] w-[110px] shrink-0 items-center justify-center overflow-hidden rounded-[40px] shadow-md">
                <Image src={step.image} alt="" fill className="object-cover" />
                <div className={`absolute inset-0 ${step.dark ? "bg-black/20" : "bg-[#2E3033]/30"}`} />
                <p className={`relative text-xl font-medium ${step.dark ? "text-[#2E3033]" : "text-white"}`}>
                  {step.title}
                </p>
              </div>
              <p className="text-base font-light leading-relaxed text-black">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: all 5 cards on one row, with connectors and text sharing
            the exact same 9-column template so everything stays aligned */}
        <div className="hidden w-full lg:block">
          <div className="mx-auto grid justify-center gap-y-6" style={{ gridTemplateColumns: GRID_COLS }}>
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ scale: 1.06 }}
                className="group relative flex h-[170px] items-center justify-center overflow-hidden rounded-[58px] shadow-md"
                style={{ gridColumn: CARD_COLS[index], gridRow: 1 }}
              >
                <Image
                  src={step.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${step.dark ? "bg-black/20" : "bg-[#2E3033]/30"}`} />
                <p className={`relative text-3xl font-medium ${step.dark ? "text-[#2E3033]" : "text-white"}`}>
                  {step.title}
                </p>
              </motion.div>
            ))}

            {ARROWS.map((arrow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.12 + 0.3 }}
                className="flex items-center justify-center"
                style={{ gridColumn: ARROW_COLS[index], gridRow: 2 }}
              >
                <Image src={arrow} alt="" width={64} height={64} />
              </motion.div>
            ))}

            {STEPS.map((step, index) => (
              <motion.p
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-base font-light leading-relaxed text-black"
                style={{ gridColumn: CARD_COLS[index], gridRow: 3 }}
              >
                {step.desc}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDataIntelligenceProcess;
