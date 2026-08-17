"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ImgFasterDelivery from "@/assets/Service/Artificial Intelligence/outcome-faster-delivery.png";
import ImgSmarterDecisions from "@/assets/Service/Artificial Intelligence/outcome-smarter-decisions.png";
import ImgResilientOps from "@/assets/Service/Artificial Intelligence/outcome-resilient-operations.png";
import ImgAIInnovation from "@/assets/Service/Artificial Intelligence/outcome-ai-innovation.png";
import ImgGlobalExpansion from "@/assets/Service/Artificial Intelligence/outcome-global-expansion.png";
import ImgContinuousOpt from "@/assets/Service/Artificial Intelligence/outcome-continuous-optimization.png";
import CloudIcon from "@/assets/Service/Artificial Intelligence/cloud-icon.png";

const outcomes = [
  { title: "Faster Product Delivery", description: "Launch digital products and services with greater speed and flexibility.", image: ImgFasterDelivery },
  { title: "Smarter Business Decisions", description: "Convert enterprise data into meaningful insights that support strategic planning.", image: ImgSmarterDecisions },
  { title: "Resilient Operations", description: "Maintaining a secure, reliable, and high-performing SAP environment.", image: ImgResilientOps },
  { title: "AI-Driven Innovation", description: "Helping organizations adopt AI, analytics, cloud innovations, and intelligent automation as business needs evolve.", image: ImgAIInnovation },
  { title: "Global Business Expansion", description: "Keeping mission-critical operations running while transformation continues in the background.", image: ImgGlobalExpansion },
  { title: "Continuous Optimization", description: "Providing insights that help leaders make better technology and business decisions.", image: ImgContinuousOpt },
];

function OutcomeCard({ title, description, image, delay, heightClass = "h-[205px]" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className={`group relative w-full ${heightClass} rounded-[20px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.15)] transition-shadow duration-500 hover:shadow-[0_25px_50px_-15px_rgba(0,97,175,0.55)]`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5">
        <h3 className="text-white text-2xl font-medium">{title}</h3>
        <p className="text-neutral-200 text-lg leading-snug">{description}</p>
      </div>
    </motion.div>
  );
}

const BusinessOutcomes = () => {
  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900"
          >
            Business Outcomes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-600 text-lg md:text-xl leading-[1.32]"
          >
            Transformation shouldn&apos;t end at Go-Live.
            <br />
            The real impact begins afterward.
          </motion.p>
        </div>

        {/* Desktop: 3 precise rows matching the design, with cloud icon centered in row 2 */}
        <div className="hidden lg:flex flex-col gap-[95px] items-center">
          <div className="flex gap-[87px] items-center shrink-0">
            <div className="w-[399px]">
              <OutcomeCard {...outcomes[0]} delay={0} />
            </div>
            <div className="w-[400px]">
              <OutcomeCard {...outcomes[1]} delay={0.1} />
            </div>
          </div>

          <div className="relative flex justify-between items-center w-full shrink-0">
            <div className="w-[400px]">
              <OutcomeCard {...outcomes[2]} delay={0.2} />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, type: "spring", stiffness: 220, damping: 16 }}
              whileHover={{ scale: 1.08, rotate: 4 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.18)] p-3 cursor-default"
            >
              <Image src={CloudIcon} alt="Cloud" width={90} height={52} className="object-contain" />
            </motion.div>
            <div className="w-[400px]">
              <OutcomeCard {...outcomes[3]} delay={0.3} />
            </div>
          </div>

          <div className="flex gap-[140px] items-center shrink-0">
            <div className="w-[400px]">
              <OutcomeCard {...outcomes[4]} delay={0.4} heightClass="h-[232px]" />
            </div>
            <div className="w-[400px]">
              <OutcomeCard {...outcomes[5]} delay={0.5} heightClass="h-[232px]" />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: single column stack */}
        <div className="lg:hidden flex flex-col gap-5">
          {outcomes.map((o, i) => (
            <OutcomeCard key={o.title} {...o} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOutcomes;
