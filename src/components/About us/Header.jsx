"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import heroBg from "@/assets/career/Careers hero BG.jpg";

const AboutHeader = () => {
  return (
    <div className="relative w-full h-[420px] sm:h-[560px] overflow-hidden">
      <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/35" />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 z-10 px-6 sm:px-10 lg:px-[100px] pb-14 sm:pb-16"
      >
        <p className="text-white/80 text-base sm:text-lg">About us</p>
        <div className="mt-3 border-t border-white/30 max-w-[900px] pt-4">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-[42px] font-normal leading-tight">
            Opportunities don&apos;t happen, you create them.
          </h1>
          <p className="mt-2 text-white/80 text-sm sm:text-base">
            We are always interested in receiving and reviewing resumes
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHeader;
