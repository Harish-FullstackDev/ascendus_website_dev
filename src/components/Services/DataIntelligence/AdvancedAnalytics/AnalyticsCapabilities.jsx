"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const CAPABILITIES = [
  { title: "Predictive Forecasting", desc: "Machine learning algorithms built to anticipate demand variations, customer churn signals, and market trends." },
  { title: "Behavior Segmentation", desc: "Isolate client interaction patterns using clustering models to personalize marketing campaigns." },
  { title: "Real-Time Telemetry Streams", desc: "Apache Kafka and Spark pipelines that feed events to reporting dashboards instantly." },
  { title: "Dynamic BI Architectures", desc: "Clean Power BI and Tableau layouts configured with secure, role-filtered calculations." },
  { title: "Experimentation Frameworks", desc: "A/B testing structures designed to measure feature impacts and marketing conversions statistically." },
];

const AnalyticsCapabilities = () => {
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
          Why Choose Our Advanced Analytics Services
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
                    className="relative flex items-center justify-center h-8 w-8 flex-shrink-0 sm:h-[42px] sm:w-[42px] rounded-full border border-slate-200 text-[#2E3033]"
                  >
                    <Plus className="w-5 h-5" />
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

export default AnalyticsCapabilities;
