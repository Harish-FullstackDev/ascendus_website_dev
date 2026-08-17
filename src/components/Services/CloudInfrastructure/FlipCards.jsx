"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images from assets
import CloudStrategyImage from "@/assets/Service/Cloud & Infrastructure/cloud-strategy-roadmap.jpg";
import CloudMigrationImage from "@/assets/Service/Cloud & Infrastructure/cloud-migration-transfer.jpg";
import InfrastructureModernizationImage from "@/assets/Service/Cloud & Infrastructure/infrastructure-modernization.jpg";
import ManagedCloudImage from "@/assets/Service/Cloud & Infrastructure/managed-cloud-monitoring.jpg";


const FlipCard = ({ title, tagline, description, bgImage, link, isImageImported }) => {
  return (
    <Link href={link} className="group block w-full h-[420px] [perspective:1000px]">
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)] cursor-pointer"
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] shadow-md flex flex-col justify-between p-8 border border-slate-200/50 bg-[#001b2b]">
          {isImageImported && bgImage ? (
            <Image
              src={bgImage}
              alt={title}
              fill
              className="object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* fallback gradient for Cloud Strategy if no custom image */
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E3033] via-[#16171a] to-[#00121d] z-0" />
          )}

          {/* Front Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

          {/* Front Content */}
          <div className="relative z-20 flex flex-col justify-between h-full w-full">
            {/* Top decorative dot */}
            <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center border border-blue-400/30">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
            </div>

            {/* Bottom Title */}
            <div>
              {/* <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">Capability</p> */}
              <h3 className="text-white font-medium text-2xl md:text-3xl leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#2E3033] text-white p-8 flex flex-col justify-between shadow-lg border border-blue-900">
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b border-white/20 pb-3">
              <h3 className="text-white font-medium text-2xl">
                {title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-950/60 px-2.5 py-1 rounded-full">
                {/* Interactive */}
              </span>
            </div>
            <p className="text-blue-100 font-semibold text-sm leading-snug">
              {tagline}
            </p>
            <p className="text-slate-200 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <span className="group/btn inline-flex items-center justify-between bg-white text-[#0A65CC] pl-5 pr-2 py-2 rounded-full font-semibold text-sm shadow-md transition-all duration-300 group-hover:bg-slate-50 group-hover:shadow-lg w-fit">
            <span className="mr-3">See More</span>
            <div className="w-8 h-8 rounded-full bg-[#0A65CC] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

const FlipCards = () => {
  const cards = [
    {
      title: "Cloud Strategy",
      tagline: "Build the Right Cloud Roadmap",
      description: "Create a clear cloud strategy aligned with your business goals. We assess your current environment, define the right architecture, and develop a roadmap for successful cloud adoption.",
      bgImage: CloudStrategyImage,
      isImageImported: true,
      link: "/services/cloudInfrastructure/cloud-strategy",
    },
    {
      title: "Cloud Migration",
      tagline: "Move Legacies Safely to AWS, Azure, & GCP",
      description: "Unshackle from local servers. We manage the secure migration of databases and file systems to high-performance clouds with zero downtime.",
      bgImage: CloudMigrationImage,
      isImageImported: true,
      link: "/services/cloudInfrastructure/cloud-migration",
    },
    {
      title: "Infrastructure Modernization",
      tagline: "Transform Legacy Computing",
      description: "Deploy automated, software-defined computing, Kubernetes orchestration clusters, and container platforms that scale dynamically.",
      bgImage: InfrastructureModernizationImage,
      isImageImported: true,
      link: "/services/cloudInfrastructure/infrastructure-modernization",
    },
    {
      title: "Managed Cloud Services",
      tagline: "24/7 Cloud Support & Optimizations",
      description: "Our certified engineers handle cost audits, resource optimization, active security monitoring, and regular patching for your peace of mind.",
      bgImage: ManagedCloudImage,
      isImageImported: true,
      link: "/services/cloudInfrastructure/managed-cloud-services",
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900"
          >
            Build Infrastructure That Keeps Your Business Moving
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-slate-500 leading-relaxed"
          >
            A strong cloud infrastructure is the backbone of digital transformation. Ascendus helps organizations build secure, scalable, and high-performing cloud environments that support business growth, improve operational resilience, and enable continuous innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center text-blue-600 font-semibold text-sm pt-2"
          >
            Secure. Scalable. Future-Ready.
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <FlipCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;
