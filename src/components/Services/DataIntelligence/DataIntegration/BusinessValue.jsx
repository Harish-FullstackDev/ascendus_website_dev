"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import bgImage from "@/assets/Service/Data&Intelligence/Data Integration/image 79.jpg";
import badgeIcon from "@/assets/Service/Data&Intelligence/Data Integration/icons/Ellipse 438.svg";

const VALUES = [
  { title: "Single Source of Truth", desc: "One consistent, trusted record for every customer, order, and asset—no matter which system it came from.", color: "rgba(46,48,51,0.8)" },
  { title: "Improved Data Quality", desc: "Automated validation and cleansing keep every synchronized record accurate and reliable.", color: "rgba(0,129,202,0.6)" },
  { title: "Better Decision-Making", desc: "Leaders act on complete, up-to-date information instead of fragmented reports.", color: "rgba(0,109,171,0.6)" },
  { title: "Faster Analytics", desc: "Connected data flows straight into dashboards and models without manual prep.", color: "rgba(12,167,255,0.6)" },
  { title: "AI-Ready Data", desc: "Clean, unified data pipelines that are ready to power AI and machine learning from day one.", color: "rgba(128,208,253,0.32)" },
];

const BusinessValue = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14 lg:flex-row lg:gap-16">
        {/* Left: sticky heading over ambient background image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative flex h-[260px] w-full flex-shrink-0 overflow-hidden rounded-[28px] lg:sticky lg:top-24 lg:h-[420px] lg:w-[360px]"
        >
          <Image src={bgImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#2E3033]/40" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8">
            <h2 className="text-3xl font-medium text-white sm:text-4xl">Business Value</h2>
            <p className="text-base font-light leading-relaxed text-white/80 sm:text-lg">
              What a connected data ecosystem delivers to the business, from the first integration
              onward.
            </p>
          </div>
        </motion.div>

        {/* Right: stacked value cards with numbered badges */}
        <div className="flex flex-1 flex-col">
          {VALUES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex gap-5 pb-8"
            >
              <div className="flex flex-shrink-0 flex-col items-center">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="relative flex h-11 w-11 items-center justify-center rounded-full text-base font-medium text-white shadow-md"
                >
                  <Image src={badgeIcon} alt="" fill />
                  <span className="relative z-10">{index + 1}</span>
                </motion.span>
                {index < VALUES.length - 1 && (
                  <span className="mt-2 w-px flex-1 border-l-2 border-dashed border-[#0061af]/40" />
                )}
              </div>
              <div
                className="w-full rounded-[20px] p-6 sm:p-8 transition-transform duration-300 group-hover:-translate-y-1"
                style={{ backgroundColor: item.color }}
              >
                <h3 className="mb-2 text-xl font-medium text-white sm:text-2xl">{item.title}</h3>
                <p className="text-base font-light leading-relaxed text-white/85 sm:text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;
