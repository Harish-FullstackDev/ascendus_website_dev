"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import computeImg1 from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/6e36255978475dc983e6d74d5350ccc045ee6ffb.png";
import computeImg2 from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/28b1ed3e6a868ba1085db21323801186fab7a089.png";
import storageImgBig from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/6aba439106c1d547b639f0e3c3d2a06d184b0d59.png";
import storageImgSmall from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/1a9c2585b9feb86046ea32a6eb7596d7ab630061.png";
import hybridImg from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/cb6fe4f438cdef748d106ed074b355c21c686f89.png";

const SideNote = ({ label, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-4 items-start"
  >
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
      style={{ transformOrigin: "top" }}
      className="w-2 h-24 sm:h-28 bg-gradient-to-b from-[#9569f7] to-[#73f8f3] rounded-full shrink-0 mt-1"
    />
    <div>
      <p className="font-semibold text-[#808a99] text-[16px] sm:text-[20px] mb-2">{label}</p>
      <p className="text-[#808a99] text-[14px] sm:text-[16px] leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const WhatWeModernize = () => {
  return (
    <section className="border-t border-[#d2d2d2] py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-medium text-[22px] sm:text-[28px] lg:text-[32px] text-black mb-3">
            What We Modernize
          </h2>
          <p className="font-light text-[#515151] text-[15px] sm:text-[18px] lg:text-[20px] max-w-[600px] mx-auto">
            Evaluate your current environment, identify modernization opportunities, and create a
            roadmap aligned with your business objectives.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {/* Row 1: Compute Infrastructure */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[24px] sm:rounded-[32px] shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 p-8 sm:p-10 flex flex-col gap-6"
            >
              <div>
                <p className="font-medium text-[#111] text-[18px] sm:text-[22px]">Compute Infrastructure</p>
                <p className="font-medium text-[rgba(17,17,17,0.6)] text-[13px] sm:text-[14px] mt-1">
                  Right-sized servers and virtual machines that scale with real-time demand.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {[computeImg1, computeImg2].map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="group relative flex-1 h-36 sm:h-[154px] rounded-[8px] overflow-hidden shadow-md border border-[#bec4cd]"
                  >
                    <Image src={img} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="flex items-center lg:w-[440px]">
              <SideNote
                index={0}
                label="Elastic Compute"
                desc="Auto-scaling compute resources that adjust capacity based on workload, so you only pay for what you use."
              />
            </div>
          </div>

          {/* Row 2: Storage Systems */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div className="flex items-center lg:w-[440px] order-2 lg:order-1">
              <SideNote
                index={1}
                label="Tiered Storage"
                desc="Automatically move data between hot, warm, and cold tiers to balance performance and cost."
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[24px] sm:rounded-[32px] shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 p-8 sm:p-10 flex flex-col gap-6 order-1 lg:order-2"
            >
              <div>
                <p className="font-medium text-[#111] text-[18px] sm:text-[22px]">Storage Systems</p>
                <p className="font-medium text-[rgba(17,17,17,0.6)] text-[13px] sm:text-[14px] mt-1">
                  Reliable, high-performance storage built for modern data growth.
                </p>
              </div>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="group relative w-[200px] h-[208px] shrink-0 overflow-hidden rounded-[16px]">
                  <Image src={storageImgBig} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="group relative w-[108px] h-[108px] shrink-0 self-start overflow-hidden rounded-[16px]">
                  <Image src={storageImgSmall} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Hybrid & Multi-Cloud Environments */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[24px] sm:rounded-[32px] shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 p-8 sm:p-10 flex flex-col gap-6"
            >
              <div>
                <p className="font-medium text-[#111] text-[18px] sm:text-[22px]">Hybrid &amp; Multi-Cloud Environments</p>
                <p className="font-medium text-[rgba(17,17,17,0.6)] text-[13px] sm:text-[14px] mt-1">
                  Integrate cloud platforms with existing infrastructure for seamless business operations.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} className="group relative w-full h-36 sm:h-[176px] overflow-hidden rounded-[8px] shadow-md border border-[#bec4cd]">
                <Image src={hybridImg} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </motion.div>
            </motion.div>
            <div className="flex items-center lg:w-[440px]">
              <SideNote
                index={2}
                label="Unified Management"
                desc="A single control plane across on-premises and multiple cloud providers for consistent governance."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeModernize;
