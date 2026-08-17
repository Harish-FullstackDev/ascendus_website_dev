"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CtaBg from "@/assets/Service/Data&Intelligence/Data Engineering/Footer container.jpg";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden rounded-tl-[60px] rounded-tr-[60px] sm:rounded-tl-[120px] sm:rounded-tr-[120px] mx-3 sm:mx-6 lg:mx-10 mt-6">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image src={CtaBg} alt="" fill className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[#2E3033] mix-blend-hue" />
      <div className="absolute inset-0 bg-[rgba(46,48,51,0.73)]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[#0061af]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-8 sm:gap-10 py-16 sm:py-24 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-medium text-white text-[24px] sm:text-[30px] lg:text-[36px] max-w-[560px] mx-auto mb-4 sm:mb-6">
            Ready to Connect Your Enterprise?
          </h2>
          <p className="font-light text-white text-[15px] sm:text-[18px] lg:text-[22px] max-w-[560px] mx-auto">
            Let&apos;s build an integrated infrastructure that speeds up communication across your entire ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/bookacall"
            className="group inline-flex items-center gap-3 bg-white text-[#2E3033] font-medium text-[16px] sm:text-[20px] px-8 sm:px-10 py-3 sm:py-4 rounded-[10px] hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
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
