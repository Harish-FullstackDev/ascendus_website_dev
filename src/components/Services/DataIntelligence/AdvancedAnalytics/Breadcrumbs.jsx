"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  return (
    <div className="w-full bg-[#2E3033] py-4 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-3 text-sm sm:text-base md:text-lg font-normal">
        <Link
          href="/services/dataIntelligence"
          aria-label="Back to Data & Intelligence"
          className="flex items-center justify-center hover:text-blue-200 transition-colors shrink-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <Link
          href="/services/dataIntelligence"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          Data &amp; Intelligence
        </Link>
        <ChevronRight className="w-4 h-4 opacity-50 shrink-0" />
        <span className="font-medium">Advanced Analytics</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
