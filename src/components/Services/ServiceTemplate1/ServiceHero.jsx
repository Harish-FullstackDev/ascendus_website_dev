"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import CustomButton from "@/components/Cards/Button";

const ServiceHero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  breadcrumbs = [],
  primaryCta,
  secondaryCta,
  showNavbar = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative text-white overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Graphic/Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className="object-cover opacity-70 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-950"></div>
        </div>
      )}

      {/* Navbar Container */}
      <Navbar />

      {/* Hero Content Section */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-15.5 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-10 lg:pb-16 flex flex-col justify-center min-h-[50vh]">

        {/* Optional Breadcrumb - now OUTSIDE the centered max-w-5xl wrapper, aligned to page edge */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 text-xs sm:text-sm text-blue-400/80 mb-8 font-medium tracking-wide text-left w-full"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-gray-500">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-gray-300 font-semibold">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.link}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Centered Hero Content */}
          <div className="flex flex-col items-center text-center">
            {/* Subtitle / Pre-title */}
            {subtitle && (
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-2 mb-3"
              >
                <span className="text-blue-500 text-lg">✦</span>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400">
                  {subtitle}
                </p>
              </motion.div>
            )}

            {/* Service Name (Title) */}
            {title && (
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-6 tracking-tight text-white"
              >
                {title.split(" ").map((word, i) => {
                  const isHighlight =
                    i >= title.split(" ").length - 2;

                  return (
                    <span key={i} className="inline-block mr-3">
                      {isHighlight ? (
                        <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                    </span>
                  );
                })}
              </motion.h1>
            )}

            {/* Description */}
            {description && (
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-10"
              >
                {description}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 items-center"
            >
              {primaryCta && (
                <CustomButton
                  text={primaryCta.label}
                  onClick={() => {
                    const element = document.querySelector(primaryCta.link);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = primaryCta.link;
                    }
                  }}
                  iconColor="text-white"
                  iconBgColor="bg-blue-600 group-hover:bg-blue-700"
                  buttonBgColor="bg-white"
                  textColor="text-black"
                />
              )}

              {secondaryCta && (
                <button
                  onClick={() => {
                    const element = document.querySelector(secondaryCta.link);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = secondaryCta.link;
                    }
                  }}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-white/20 text-white bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  {secondaryCta.label}
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom section transition fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ServiceHero;
