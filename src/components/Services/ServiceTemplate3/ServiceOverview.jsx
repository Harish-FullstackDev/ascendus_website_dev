"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceOverview = ({
  id = "overview",
  title,
  description,
  whyItMatters,
  whySST,
  image,
  expertise = [],
  industries = [],
  technologies = [],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="py-20 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Image / Graphic */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
              {image ? (
                <Image
                  src={image}
                  alt={title || "Service Overview"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                  <span className="text-gray-500">Service Image Wireframe</span>
                </div>
              )}
              {/* Fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-4 bg-white border border-slate-200 p-4 rounded-xl shadow-xl backdrop-blur-md hidden sm:block max-w-[200px]">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">
                Ascendus Advantage
              </p>
              <p className="text-xs text-slate-650 leading-tight">
                Empowering intelligence at scale across your operations.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-500 text-sm">✦</span>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600">
                  Overview
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal leading-tight tracking-tight text-slate-900 mb-4">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Split cards for Why It Matters & Why Ascendus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyItMatters && (
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 hover:bg-slate-100/40 transition-colors">
                  <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    Why It Matters
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {whyItMatters}
                  </p>
                </div>
              )}
              {whySST && (
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 hover:bg-slate-100/40 transition-colors">
                  <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    Why Ascendus
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {whySST}
                  </p>
                </div>
              )}
            </div>

            {/* Expertise Bullet Points */}
            {expertise.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Our Area of Expertise
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-650">
                  {expertise.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-blue-600">✔</span>
                      <span>
                        {typeof item === "object" ? (
                          <>
                            <strong className="font-semibold text-slate-900">{item.title}</strong>
                            {item.description && `: ${item.description}`}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Industries Served */}
            {industries.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Industries We Serve
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {typeof industry === "object" ? industry.name : industry}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies involved */}
            {technologies.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Technologies We Leverage
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, idx) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-lg text-xs font-semibold text-slate-700 hover:border-slate-300 transition-colors"
                      >
                        {TechIcon && <TechIcon className="w-4 h-4 text-blue-600" />}
                        <span>{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;
