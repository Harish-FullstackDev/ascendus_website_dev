"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";

const EnterprisePageHeader = ({
  title = "Enterprise Transformation",
  titleLink = "/services/enterpriseTransformation",
  subLabel,
  backLink = "/services",
}) => {
  return (
    <div className="relative overflow-hidden bg-sky-950">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto flex h-14 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <Link
          href={subLabel ? titleLink : backLink}
          className="group absolute left-4 flex items-center gap-2 text-white/80 transition-colors duration-300 hover:text-white sm:left-6 lg:left-8"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
        </Link>

        <div className="flex items-center gap-2 px-10 text-center">
          {subLabel ? (
            <>
              <Link
                href={titleLink}
                className="text-sm font-normal text-white/70 transition-colors duration-300 hover:text-white sm:text-base"
              >
                {title}
              </Link>
              <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-white/50" />
              <span className="text-sm font-medium uppercase tracking-wide text-white sm:text-base">
                {subLabel}
              </span>
            </>
          ) : (
            <>
              <span className="text-lg font-normal text-white sm:text-xl">{title}</span>
              <ChevronDown className="h-4 w-4 text-white/60" />
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EnterprisePageHeader;
