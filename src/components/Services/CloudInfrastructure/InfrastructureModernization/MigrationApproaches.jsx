"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import approachImage from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/82c5e536299abee07079d30ca6f1c02634297e1a.png";

const STEPS = [
  { n: 1, title: "Assessment & Discovery", desc: "Evaluate current infrastructure, dependencies, and technical debt across the environment." },
  { n: 2, title: "Architecture Design", desc: "Design a target-state architecture built for scalability, security, and future growth." },
  { n: 3, title: "Migration & Deployment", desc: "Move workloads to modernized platforms with minimal disruption to operations." },
  { n: 4, title: "Automation & Orchestration", desc: "Implement infrastructure-as-code and automated provisioning to reduce manual effort." },
  { n: 5, title: "Security Hardening", desc: "Apply modern security controls and compliance safeguards across the new environment." },
  { n: 6, title: "Continuous Optimization", desc: "Monitor performance and cost continuously to keep infrastructure running at its best." },
];

const MigrationApproaches = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-medium text-[22px] sm:text-[28px] lg:text-[32px] text-black mb-3">
            Migration Approaches
          </h2>
          <p className="font-light text-[#515151] text-[15px] sm:text-[18px] lg:text-[20px] max-w-[600px] mx-auto">
            A structured, low-risk path from legacy infrastructure to a modernized environment
            built for what&apos;s next.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[#2E3033] overflow-hidden flex flex-col lg:flex-row rounded-[24px]"
        >
          {/* Left image */}
          <div className="relative lg:w-[44%] h-[260px] sm:h-[340px] lg:h-auto shrink-0 overflow-hidden">
            <Image src={approachImage} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E3033]/60 to-transparent lg:bg-gradient-to-r" />
          </div>
          {/* Right list */}
          <div className="flex-1 px-6 sm:px-10 py-8 sm:py-12 flex flex-col gap-6 sm:gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-start gap-6 sm:gap-10"
              >
                <motion.div
                  animate={{ scale: hovered === index ? 1.12 : 1 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 w-10 h-10 sm:w-[42px] sm:h-[42px] bg-white rounded-[6px] flex items-center justify-center"
                >
                  <span className="font-medium text-[#2E3033] text-[18px] sm:text-[22px]">{step.n}</span>
                </motion.div>
                <div>
                  <p
                    className={`font-medium text-[16px] sm:text-[20px] mb-1 transition-colors duration-300 ${
                      hovered === index ? "text-[#66cdf3]" : "text-white"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="font-light text-white/80 text-[13px] sm:text-[15px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MigrationApproaches;
