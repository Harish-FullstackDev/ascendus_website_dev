"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const Breadcrumbs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-[#2E3033] py-4 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-3 text-base md:text-lg font-normal">
        <Link
          href="/services"
          aria-label="Back to Services"
          className="group flex items-center justify-center hover:text-blue-200 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
        </Link>
        <span>Artificial Intelligence</span>
      </div>
    </motion.div>
  );
};

export default Breadcrumbs;
