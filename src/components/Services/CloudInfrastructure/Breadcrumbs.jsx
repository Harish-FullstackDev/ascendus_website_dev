"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  return (
    <div className="w-full bg-[#2E3033] py-4 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center space-x-2 text-sm md:text-base font-medium">
        <Link href="/" className="hover:text-blue-200 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-white/60" />
        <Link href="/services" className="hover:text-blue-200 transition-colors">
          Services
        </Link>
        <ChevronRight className="w-4 h-4 text-white/60" />
        <span className="text-white/80 font-normal">Cloud & Infrastructure</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
