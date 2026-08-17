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
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(102,205,243,0.22),_transparent_36%),linear-gradient(120deg,_#020617_0%,_#2e3033_55%,_#111827_100%)] text-white">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className="object-cover opacity-30 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-950/85"></div>
        </div>
      )}

      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {breadcrumbs.length > 0 && (
          <motion.nav
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex w-full flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-200/80 sm:text-sm"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-slate-500">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="font-semibold text-slate-100">{crumb.label}</span>
                ) : (
                  <Link href={crumb.link} className="transition-colors hover:text-blue-300">
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
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="max-w-3xl">
            {subtitle && (
              <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2">
                <span className="text-lg text-blue-400">✦</span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
                  {subtitle}
                </p>
              </motion.div>
            )}

            {title && (
              <motion.h1 variants={itemVariants} className="mb-6 text-4xl font-normal leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {title.split(" ").map((word, i) => {
                  const isHighlight = i >= title.split(" ").length - 2;
                  return (
                    <span key={i} className="mr-3 inline-block">
                      {isHighlight ? (
                        <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
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

            {description && (
              <motion.p variants={itemVariants} className="mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {description}
              </motion.p>
            )}

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
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
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-300/60 hover:bg-white/15"
                >
                  {secondaryCta.label}
                </button>
              )}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">Ascendus Approach</p>
              <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">Tailored Delivery</span>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Human-centered strategy</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">We translate business ambition into sustainable operating models that are simple, measurable, and practical.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-2xl font-semibold text-white">12+</p>
                  <p className="mt-1 text-sm text-slate-400">Capability tracks</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-2xl font-semibold text-white">100%</p>
                  <p className="mt-1 text-sm text-slate-400">Executive alignment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  );
};

export default ServiceHero;
