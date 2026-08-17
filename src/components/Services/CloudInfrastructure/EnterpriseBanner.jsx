"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import assets
import BannerBg from "@/assets/Service/Cloud & Infrastructure/Frame 2147239568.jpg";
import Logo69 from "@/assets/Service/Cloud & Infrastructure/image 69.jpg";
import Logo70 from "@/assets/Service/Cloud & Infrastructure/image 70.jpg";
import Logo71 from "@/assets/Service/Cloud & Infrastructure/image 71.jpg";

const EnterpriseBanner = () => {
  return (
    <section className="relative min-h-[580px] w-full flex flex-col justify-between py-16 text-white overflow-hidden bg-[#16171a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BannerBg}
          alt="Infrastructure Designed for Modern Enterprises"
          fill
          className="object-cover object-center "
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#16171a]/90 via-[#16171a]/50 to-transparent" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Infrastructure Designed for Modern Enterprises
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded" />
          </motion.div>

          {/* Right Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-8 md:p-10 bg-black/45 backdrop-blur-sm rounded-3xl border border-white/5 space-y-6 text-slate-200 text-base md:text-lg leading-relaxed"
          >
            <p>
              A strong cloud infrastructure is the backbone of digital transformation. Ascendus helps organizations build secure, scalable, and high-performing cloud environments that support business growth, improve operational resilience, and enable continuous innovation.
            </p>
            <p className="font-semibold text-white tracking-wide">
              Secure. Scalable. Future-Ready.
            </p>
          </motion.div>
        </div>

        {/* Logos Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center"
        >
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mr-4">
            Certified Vendor Networks
          </span>
          <div className="flex items-center space-x-8">
            <div className="bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/5 transition-all duration-300">
              <Image src={Logo69} alt="Partner Logo 1" className="h-8 w-auto object-contain brightness-100  transition-all duration-300" />
            </div>
            <div className="bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/5 transition-all duration-300">
              <Image src={Logo70} alt="Partner Logo 2" className="h-8 w-auto object-contain" />
            </div>
            <div className="bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/5 transition-all duration-300">
              <Image src={Logo71} alt="Partner Logo 3" className="h-8 w-auto object-contain brightness-100 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseBanner;
