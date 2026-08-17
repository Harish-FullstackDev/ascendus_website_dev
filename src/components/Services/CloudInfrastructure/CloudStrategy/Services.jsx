"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ImgReadiness from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/service-readiness-assessment.png";
import ImgRoadmap from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/service-adoption-roadmap.png";
import ImgArchitecture from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/service-architecture-planning.png";
import ImgSecurity from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/service-security-governance.png";
import ImgCost from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/service-cost-optimization.png";
import ImgHybrid from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/service-hybrid-multicloud.png";

const SERVICES = [
  {
    title: "Cloud Readiness Assessment",
    desc: "Evaluate your current infrastructure, applications, and workloads to determine cloud readiness and uncover quick wins for early value.",
    img: ImgReadiness,
    imgLeft: true,
  },
  {
    title: "Cloud Adoption Roadmap",
    desc: "Build a phased adoption plan that sequences migrations and modernization efforts around business priorities and risk.",
    img: ImgRoadmap,
    imgLeft: false,
  },
  {
    title: "Cloud Architecture Planning",
    desc: "Design secure, scalable reference architectures tailored to your workloads, compliance needs, and growth plans.",
    img: ImgArchitecture,
    imgLeft: true,
  },
  {
    title: "Cloud Security & Governance",
    desc: "Establish identity, access, and compliance guardrails so your cloud environment stays secure as it scales.",
    img: ImgSecurity,
    imgLeft: false,
  },
  {
    title: "Cost Optimization",
    desc: "Right-size resources, eliminate waste, and introduce FinOps practices that keep cloud spend predictable.",
    img: ImgCost,
    imgLeft: true,
  },
  {
    title: "Hybrid & Multi-Cloud Strategy",
    desc: "Design an interoperable strategy across on-premises and multiple cloud providers to avoid lock-in and maximize flexibility.",
    img: ImgHybrid,
    imgLeft: false,
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col gap-3"
        >
          <h2 className="text-[28px] md:text-[36px] font-semibold text-black">Our Cloud Strategy Services</h2>
          <p className="text-[#515151] text-[18px] md:text-[22px] font-light max-w-[694px] mx-auto">
            A structured, end-to-end approach to planning and governing your cloud transformation.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className={`group flex flex-col ${svc.imgLeft ? "md:flex-row" : "md:flex-row-reverse"} items-stretch border-b border-gray-100 last:border-0`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="relative w-full md:w-1/2 h-[200px] md:h-[250px] overflow-hidden"
              >
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[rgba(20,20,20,0.45)] transition-opacity duration-500 group-hover:bg-[rgba(20,20,20,0.25)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: svc.imgLeft ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full md:w-1/2 flex flex-col justify-center gap-3 px-8 md:px-12 py-8"
              >
                <h3 className="text-[22px] md:text-[32px] font-semibold text-black leading-tight">{svc.title}</h3>
                <p className="text-[#515151] text-[16px] md:text-[20px] font-light leading-relaxed">{svc.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
