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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="py-20 bg-white text-slate-800 relative overflow-hidden border-b border-slate-200/60">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none">
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-blue-500 text-sm">✦</span>
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600">
              {subtitle}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-slate-900">
            {title}
          </h2>
        </div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 items-center justify-center"
        >
          {items.map((partner, idx) => {
            const PartnerIcon = partner.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="h-28 flex items-center justify-center bg-slate-50 border border-slate-200/60 hover:border-blue-500/20 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:bg-white group cursor-pointer shadow-sm"
              >
                {partner.link ? (
                  <Link href={partner.link} className="flex flex-col items-center gap-3 w-full text-center">
                    {PartnerIcon ? (
                      <PartnerIcon className="w-8 h-8 text-slate-400 group-hover:text-blue-600 group-hover:scale-115 transition-all duration-300" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                        {partner.name[0]}
                      </div>
                    )}
                    <span className="text-xs font-semibold tracking-wide text-slate-500 group-hover:text-slate-800 transition-colors">
                      {partner.name}
                    </span>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center gap-3 w-full text-center">
                    {PartnerIcon ? (
                      <PartnerIcon className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-all duration-300" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                        {partner.name[0]}
                      </div>
                    )}
                    <span className="text-xs font-semibold tracking-wide text-slate-500 group-hover:text-slate-800 transition-colors">
                      {partner.name}
                    </span>
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
