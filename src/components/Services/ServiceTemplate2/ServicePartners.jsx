"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicePartners = ({
  id = "partners",
  title = "Technology & Strategic Partners",
  subtitle = "Our Ecosystem",
  items = [],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id={id} className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(135deg,_#f5f6f6_0%,_#ffffff_70%,_#f5f6f6_100%)] py-24 text-slate-800">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-sm text-blue-500">✦</span>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600 sm:text-sm">{subtitle}</p>
          </div>
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6"
        >
          {items.map((partner, idx) => {
            const PartnerIcon = partner.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group flex h-32 items-center justify-center rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_55px_-35px_rgba(46,48,51,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_24px_70px_-30px_rgba(37,99,235,0.35)]"
              >
                {partner.link ? (
                  <Link href={partner.link} className="flex w-full flex-col items-center gap-3 text-center">
                    {PartnerIcon ? (
                      <PartnerIcon className="h-8 w-8 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-400">{partner.name[0]}</div>
                    )}
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 transition-colors group-hover:text-slate-800">{partner.name}</span>
                  </Link>
                ) : (
                  <div className="flex w-full flex-col items-center gap-3 text-center">
                    {PartnerIcon ? (
                      <PartnerIcon className="h-8 w-8 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-400">{partner.name[0]}</div>
                    )}
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 transition-colors group-hover:text-slate-800">{partner.name}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePartners;
