"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import bannerBg from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/Frame 1000003660-1.jpg";
import imgCompute from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/Frame 1000003657.jpg";
import imgApplications from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/Frame 1000003658.jpg";
import imgSecurity from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/Frame 1000003661.jpg";
import imgResources from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/Frame 1000003662.jpg";

const ITEMS = [
  { title: "Cloud Infrastructure", desc: "Servers, storage, networking, and compute resources.", image: imgCompute, dark: true },
  { title: "Applications", desc: "Monitor application performance and availability across cloud platforms.", image: imgApplications },
  { title: "Security", desc: "Identity management, access control, compliance, and threat monitoring.", image: imgSecurity },
  { title: "Cloud Resources", desc: "Optimize cloud services, workloads, and infrastructure utilization.", image: imgResources },
  { title: "Backup & Recovery", desc: "Protect business data with automated backup and recovery strategies.", image: imgSecurity },
];

const ManageCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group relative h-[280px] w-full max-w-[188px] shrink-0 overflow-hidden rounded-[13px] shadow-md"
  >
    <Image
      src={item.image}
      alt=""
      fill
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
    {item.dark && <div className="absolute inset-0 bg-[#0f5397] mix-blend-hard-light" />}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    <div className="relative z-10 flex h-full flex-col justify-between p-4">
      <p className="text-lg font-normal text-white">{item.title}</p>
      <p className="text-sm font-light leading-relaxed text-white/90">{item.desc}</p>
    </div>
  </motion.div>
);

const WhatWeManage = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 sm:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
            What We Manage
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#515151]">
            Evaluate your current environment, identify transformation opportunities, and create a
            roadmap aligned with your business objectives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative flex w-full flex-wrap justify-center gap-6 overflow-hidden rounded-[24px] p-6 sm:gap-8 sm:p-10"
        >
          <Image src={bannerBg} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0f5397] mix-blend-hue" />
          <div className="absolute inset-0 bg-[#0f5397]/40" />
          <div className="relative z-10 flex w-full flex-wrap justify-center gap-6 sm:gap-8">
            {ITEMS.map((item, i) => (
              <ManageCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeManage;
