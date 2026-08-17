"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CtaBg from "@/assets/Service/Cloud & Infrastructure/Cloud Migration/b37fa11a90d7ce5d12475b7f98834669659a5ff0.png";

const CTABanner = () => {
  return (
    <section className="mx-6 mb-16 overflow-hidden rounded-[20px] md:mx-16 md:mb-24">
      <div className="relative flex min-h-[300px] items-center justify-center text-center md:min-h-[394px]">
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

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-medium text-white md:text-3xl lg:text-[36px]">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-[613px] font-light text-white md:text-[22px] lg:text-[24px]">
              Let&apos;s build a migration plan that drives growth and efficiency for your
              business
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
              className="group inline-flex items-center gap-3 rounded-[10px] bg-white px-8 py-4 text-[20px] font-medium text-[#2E3033] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-2xl"
            >
              Book a Demo
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
