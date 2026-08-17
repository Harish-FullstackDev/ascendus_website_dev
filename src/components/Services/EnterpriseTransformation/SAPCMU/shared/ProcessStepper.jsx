"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProcessStepper = ({ heading, description, steps, backgroundImage }) => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl tracking-tight">{heading}</h2>
          {description && (
            <p className="mt-4 text-base text-neutral-600 sm:text-lg">{description}</p>
          )}
        </motion.div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-[24px] bg-[#2e3033] shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
        >
          {/* Photo band — fixed height, never touched by the content below it */}
          {backgroundImage && (
            <div className="relative h-[160px] sm:h-[200px] lg:h-[240px] w-full">
              <Image src={backgroundImage} alt="" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
            </div>
          )}

          {/* Solid content panel — height grows with content, so nothing ever clips */}
          <div className="relative bg-[rgba(46,48,51,0.94)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            {/* Mobile / tablet: simple stacked list */}
            <div className="flex flex-col gap-8 lg:hidden">
              {steps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-5"
                >
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white text-2xl font-medium text-black shadow-md">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1.5 pt-1.5">
                    <h4 className="text-xl font-medium text-white">{step.label}</h4>
                    {step.description && (
                      <p className="text-base font-light leading-relaxed text-[#b7b7b7]">
                        {step.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: circle + label share one column, so each number always
                sits centered above its own content regardless of description length */}
            <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-6">
              {steps.map((step, index) => (
                <div key={step.label} className="flex flex-1 flex-col items-center gap-4 text-center">
                  <motion.span
                    whileHover={{ scale: 1.12 }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex h-[60px] w-[60px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[28px] font-medium text-black shadow-lg"
                  >
                    {index + 1}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    className="flex w-[200px] flex-col items-center gap-2.5"
                  >
                    <h4 className="text-xl font-medium text-white">{step.label}</h4>
                    {step.description && (
                      <p className="text-[15px] font-light leading-snug text-[#b7b7b7]">
                        {step.description}
                      </p>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessStepper;
