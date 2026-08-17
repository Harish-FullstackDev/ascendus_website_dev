"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import JourneyBgImg from "@/assets/Service/Artificial Intelligence/AI Strategy/journey-bg.png";

const journeySteps = [
  { step: 1, title: "Discover", desc: "Assess business challenges, opportunities, and AI readiness.", side: "left" },
  { step: 2, title: "Design", desc: "Create a tailored AI strategy aligned with business objectives.", side: "right" },
  { step: 3, title: "Build", desc: "Develop and train AI models using trusted enterprise data.", side: "left" },
  {
    step: 4,
    title: "Integrate",
    desc: "Connect AI solutions with SAP, Microsoft, cloud, and enterprise applications.",
    side: "right",
  },
  { step: 5, title: "Optimize", desc: "Continuously improve AI performance, accuracy, and business outcomes.", side: "left" },
  { step: 6, title: "Scale", desc: "Expand AI capabilities across business functions and enterprise operations.", side: "right" },
];

function JourneyCard({ step, title, desc }) {
  return (
    <div className="relative rounded-3xl p-6 border-2 border-[#d9d9d9] overflow-hidden bg-white">
      <Image src={JourneyBgImg} alt="" fill className="object-cover opacity-20" />
      <div className="relative z-10 flex flex-col gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs text-white bg-gradient-to-b from-[#2E3033] to-[#00acec] w-fit">
          Step - {step}
        </span>
        <h4 className="text-2xl font-semibold text-black">{title}</h4>
        <p className="text-base text-black leading-snug">{desc}</p>
      </div>
    </div>
  );
}

const Journey = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-black mb-5"
          >
            The AI Strategy Journey
          </motion.h2>
          <p className="text-[#515151] text-base sm:text-lg leading-[1.5]">
            Transformation shouldn&apos;t end at Go-Live.
            <br className="hidden sm:block" /> The real impact begins afterward.
          </p>
        </div>

        {/* Mobile: linear list */}
        <div className="flex flex-col gap-4 md:hidden">
          {journeySteps.map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full border-2 border-[#AEAEAE] flex items-center justify-center shrink-0">
                <span className="text-xl font-light text-black">{step}</span>
              </div>
              <div className="flex-1 relative rounded-3xl p-5 border-2 border-[#d9d9d9] overflow-hidden">
                <Image src={JourneyBgImg} alt="" fill className="object-cover opacity-30" />
                <div className="relative z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs text-white bg-gradient-to-b from-[#2E3033] to-[#00acec] mb-2">
                    Step - {step}
                  </span>
                  <h4 className="text-xl font-semibold text-black mb-1">{title}</h4>
                  <p className="text-[15px] text-black leading-snug">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: zigzag */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-[#2E3033] -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {journeySteps.map(({ step, title, desc, side }) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (step - 1) * 0.05 }}
                className="grid grid-cols-[1fr_80px_1fr] items-center gap-4"
              >
                <div>{side === "left" ? <JourneyCard step={step} title={title} desc={desc} /> : <div />}</div>

                <div className="flex flex-col items-center z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-[#AEAEAE] bg-white flex items-center justify-center shadow">
                    <span className="text-3xl font-light text-black">{step}</span>
                  </div>
                </div>

                <div>{side === "right" ? <JourneyCard step={step} title={title} desc={desc} /> : <div />}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
