"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi2";

const ANSWER_DURATION = 0.35;
const ANSWER_EASE = "easeInOut";

const ServiceFAQ = ({
  id = "faq",
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  items = [],
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const leftSectionVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.18 } },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, y: -8 },
    visible: { opacity: 1, height: "auto", y: 0, transition: { duration: ANSWER_DURATION, ease: ANSWER_EASE, opacity: { duration: ANSWER_DURATION, ease: ANSWER_EASE } } },
    exit: { opacity: 0, height: 0, y: -8, transition: { duration: ANSWER_DURATION, ease: ANSWER_EASE, opacity: { duration: ANSWER_DURATION * 0.6, ease: ANSWER_EASE } } },
  };

  return (
    <section id={id} className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "-100px 0px -100px 0px" }}
        variants={containerVariants}
        className="mx-auto overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,_#f5f6f6_0%,_#ffffff_50%,_#f5f6f6_100%)] p-6 sm:p-8 lg:p-16"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div variants={leftSectionVariants} className="flex flex-col justify-start lg:pl-2">
            <motion.p variants={itemVariants} className="mb-2 flex items-center text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              <span className="mr-2 text-base">✦</span> {subtitle}
            </motion.p>

            <motion.h2 variants={itemVariants} className="mb-3 text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {title}
            </motion.h2>

            <motion.p variants={itemVariants} className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Need more detail? Our specialists can help you assess the right approach, roadmap, and operating model for your next move.
            </motion.p>
          </motion.div>

          <motion.div variants={rightSectionVariants} className="space-y-3">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={faqItemVariants}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.99 }}
                  className={`cursor-pointer overflow-hidden rounded-[22px] border transition-all duration-300 ${isOpen ? "border-blue-500/30 bg-slate-950 text-white shadow-[0_20px_60px_-30px_rgba(46,48,51,0.6)]" : "border-slate-200 bg-white/90 hover:border-blue-500/20 hover:shadow-[0_16px_44px_-30px_rgba(37,99,235,0.35)]"}`}
                  onClick={() => handleItemClick(index)}
                >
                  <motion.div className="flex items-center justify-between p-4 sm:p-5">
                    <h3 className={`text-sm font-semibold sm:text-base ${isOpen ? "text-white" : "text-slate-900"}`}>{faq.question}</h3>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.08 : 1 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                      <HiOutlineChevronDown className={`h-5 w-5 ${isOpen ? "text-white" : "text-slate-700"}`} />
                    </motion.div>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div variants={answerVariants} initial="hidden" animate="visible" exit="exit" className="overflow-hidden">
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                          <p className={`text-sm leading-relaxed ${isOpen ? "text-slate-300" : "text-slate-600"}`}>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceFAQ;
