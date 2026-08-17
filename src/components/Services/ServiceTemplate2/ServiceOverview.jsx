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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(135deg,_#f5f6f6_0%,_#f5f6f6_45%,_#ffffff_100%)] py-24 text-slate-800">
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-blue-500">✦</span>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600 sm:text-sm">Overview</p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-30px_rgba(46,48,51,0.35)] sm:p-8">
              <h2 className="mb-4 text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/20 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(102,205,243,0.3),_transparent_40%)]"></div>
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">What makes it work</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {whyItMatters && (
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <h3 className="text-sm font-semibold text-white">Why It Matters</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{whyItMatters}</p>
                    </div>
                  )}
                  {whySST && (
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <h3 className="text-sm font-semibold text-white">Why Ascendus</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{whySST}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_20px_70px_-30px_rgba(37,99,235,0.35)] sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(102,205,243,0.08),_transparent_62%)]"></div>
              <div className="relative z-10">
                <div className="relative mb-4 overflow-hidden rounded-[24px] border border-slate-200">
                  {image ? (
                    <Image src={image} alt={title || "Service Overview"} fill className="object-cover" />
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-slate-100 text-sm text-slate-500">Service Image Wireframe</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
                </div>

                {expertise.length > 0 && (
                  <div className="mb-4">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">Our area of expertise</h4>
                    <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                      {expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                          <span className="mt-0.5 text-blue-600">•</span>
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

                <div className="grid gap-4 md:grid-cols-2">
                  {industries.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">Industries</h4>
                      <div className="flex flex-wrap gap-2">
                        {industries.map((industry, idx) => (
                          <span key={idx} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                            {typeof industry === "object" ? industry.name : industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {technologies.length > 0 && (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, idx) => {
                          const TechIcon = tech.icon;
                          return (
                            <div key={idx} className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                              {TechIcon && <TechIcon className="h-3.5 w-3.5 text-blue-600" />}
                              <span>{tech.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOverview;
