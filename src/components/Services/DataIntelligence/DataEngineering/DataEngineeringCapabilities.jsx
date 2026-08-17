"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import plusActive from "@/assets/Service/Data&Intelligence/Data Engineering/icons/ic_baseline-plus.svg";
import plusInactive from "@/assets/Service/Data&Intelligence/Data Engineering/icons/ic_baseline-plus-1.svg";

const CAPABILITIES = [
  { title: "Scalable Architecture", desc: "Systems designed to grow with your data volume and business needs, without a rebuild." },
  { title: "Enterprise-Grade Security", desc: "Encryption, access control, and compliance safeguards built into every layer of the platform." },
  { title: "Real-Time Processing", desc: "Insights delivered the moment data arrives, so decisions never wait on yesterday's report." },
  { title: "Seamless Integration", desc: "Connects cleanly with your existing ERP, CRM, and cloud platforms — no rip and replace." },
  { title: "Continuous Optimization", desc: "Ongoing tuning that keeps performance, reliability, and cost in balance long after go-live." },
];

const DataEngineeringCapabilities = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-12 text-center"
        >
          Why Choose Our Data Engineering Services
        </motion.h2>

        <div className="flex flex-col">
          {CAPABILITIES.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.title} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-2xl sm:text-3xl font-medium transition-colors duration-300 ${
                      isOpen ? "text-[#0061af]" : "text-[#2E3033]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-8 w-8 flex-shrink-0 sm:h-[42px] sm:w-[42px]"
                  >
                    <Image src={isOpen ? plusActive : plusInactive} alt="" fill />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-3xl text-lg sm:text-xl font-light text-[#7b7b7b]">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataEngineeringCapabilities;
