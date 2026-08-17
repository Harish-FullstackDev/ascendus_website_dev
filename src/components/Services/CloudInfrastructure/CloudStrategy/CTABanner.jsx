"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CtaBg from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/cta-footer-bg.png";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden min-h-[280px] md:min-h-[394px] flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Image src={CtaBg} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
        <div className="absolute inset-0 bg-[rgba(46,48,51,0.73)]" />
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-[#0061af]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 text-center px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 max-w-[700px]"
        >
          <h2 className="text-white text-[26px] md:text-[36px] font-medium leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white text-[18px] md:text-[24px] font-light leading-relaxed">
            Let&apos;s build a cloud strategy that drives growth and efficiency for your business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/bookacall"
            className="group inline-flex items-center gap-3 bg-white text-[#2E3033] font-medium text-[20px] md:text-[24px] px-10 py-4 rounded-[10px] hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Book a Demo
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
