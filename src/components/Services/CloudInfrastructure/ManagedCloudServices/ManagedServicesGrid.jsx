"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img24x7 from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/insights-218357.jpg";
import imgSecurity from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/insights-218357-1.jpg";
import imgPerformance from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/insights-218131.jpg";
import imgBackup from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/insights-218131-1.jpg";
import imgOperations from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/insights-217525.jpg";
import imgCostOptimization from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/insights-217525-1.jpg";

const SERVICES = [
  { title: "24×7 Cloud Monitoring", desc: "Continuously monitor cloud resources, applications, and infrastructure to identify issues before they impact business operations.", image: img24x7 },
  { title: "Performance Optimization", desc: "Improve cloud performance through resource optimization, workload balancing, and continuous tuning.", image: imgPerformance },
  { title: "Cloud Operations Management", desc: "Manage day-to-day cloud activities including provisioning, configuration, health checks, and operational support.", image: imgOperations },
  { title: "Security & Compliance", desc: "Protect cloud environments with identity management, security monitoring, vulnerability management, and compliance best practices.", image: imgSecurity },
  { title: "Backup & Disaster Recovery", desc: "Ensure business continuity with automated backups, disaster recovery planning, and reliable recovery solutions.", image: imgBackup },
  { title: "Cost & Resource Optimization", desc: "Monitor cloud usage, eliminate unnecessary resources, and optimize infrastructure costs without compromising performance.", image: imgCostOptimization },
];

const ServiceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    whileHover={{ y: -8 }}
    className="group flex h-[520px] w-full max-w-[320px] flex-col overflow-hidden rounded-[40px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0px_12px_32px_0px_rgba(46,48,51,0.25)]"
  >
    <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
      <Image
        src={item.image}
        alt=""
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-8">
      <h3 className="text-xl font-bold text-[#02033b] sm:text-2xl">{item.title}</h3>
      <p className="text-sm leading-relaxed text-[#02033b]/70 sm:text-base">{item.desc}</p>
    </div>
  </motion.div>
);

const ManagedServicesGrid = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
            Our Managed Cloud Services
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#515151]">
            Evaluate your current environment, identify transformation opportunities, and create a
            roadmap aligned with your business objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagedServicesGrid;
