"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import outcomesLeft from "@/assets/Service/Enterprise Transformation/f4212a8752b4f6c61b6a134199ea831a6067dbe5.png";
import outcomesTexture from "@/assets/Service/Enterprise Transformation/source/a3390e2b0c6e9e38034b3eed232e935e7618ccfc.jpg";

const OUTCOMES = [
  {
    title: "Faster Decision-Making",
    description: "Access connected data and real-time insights to make informed business decisions.",
  },
  {
    title: "Operational Excellence",
    description: "Standardized processes and automation reduce errors and rework across teams.",
  },
  {
    title: "Business Agility",
    description: "Modular architectures let you adapt quickly to shifting market and customer demands.",
  },
  {
    title: "Sustainable Growth",
    description: "Scalable platforms and governance models support growth without adding complexity.",
  },
];

const BusinessOutcomes = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
            Business Outcomes That Matter
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Successful ERP implementation depends on user adoption. Ascendus helps your teams embrace
            change through structured enablement programs that improve user confidence and
            maximize business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[280px] bg-[#2E3033] lg:min-h-[420px]"
          >
            <Image src={outcomesLeft} alt="Connected business systems" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
            <Image src={outcomesTexture} alt="" fill className="object-cover opacity-30" />
          </motion.div>

          <div className="flex flex-col justify-center bg-white">
            {OUTCOMES.map((outcome, index) => {
              const isOpen = openIndex === index;
              return (
                <button
                  key={outcome.title}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`flex flex-col items-start gap-3 border-b border-[#cac9c9] px-6 py-6 text-left transition-colors duration-300 last:border-b-0 sm:px-8 ${isOpen ? "border-l-4 border-l-[#015788] bg-[#ebeeef]" : "bg-[#fdfcfc] hover:bg-gray-50"
                    }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-medium text-black transition-all duration-300 ${isOpen ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                        }`}
                    >
                      {outcome.title}
                    </span>
                    <Plus
                      className={`h-5 w-5 flex-shrink-0 text-[#015788] transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                        }`}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-base text-black/80 sm:text-lg"
                      >
                        {outcome.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOutcomes;
