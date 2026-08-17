"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { GlowCard } from "@/components/ui/spotlight-card";

const ServiceCapabilities = ({
  id = "capabilities",
  title = "Our Capabilities",
  subtitle = "What We Offer",
  items = [],
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id={id} className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden border-b border-slate-200/60">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

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
            {title.split(" ").map((word, idx) => {
              const isLast = idx === title.split(" ").length - 1;
              return isLast ? (
                <span key={idx} className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  {word}
                </span>
              ) : (
                word + " "
              );
            })}
          </h2>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            
            // Map index to a distinct glow color for a premium visual dynamic
            const colors = ['blue', 'purple', 'green', 'red', 'orange'];
            const glowColor = item.glowColor || colors[idx % colors.length];

            const cardContent = (
              <GlowCard
                glowColor={glowColor}
                customSize={true}
                className="group h-full flex flex-col justify-between overflow-hidden bg-white border border-slate-200/80 hover:border-transparent transition-all duration-300 shadow-sm rounded-2xl"
                style={{
                  '--backdrop': '#ffffff',
                  '--radius': '16',
                }}
              >
                <div>
                  {/* Card Image Section */}
                  {item.image && (
                    <div className="aspect-video w-[calc(100%+2rem)] overflow-hidden relative bg-slate-100 -mt-4 -mx-4 mb-6 rounded-t-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content padding wrapper */}
                  <div className="px-2">
                    {/* Icon Block */}
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                      {Icon && <Icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />}
                    </div>

                    {/* Capability Title */}
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Capability Description */}
                    <p className="text-sm text-slate-550 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Capability Link/Arrow */}
                {item.link && (
                  <div className="px-2 pt-2 pb-1">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors uppercase tracking-wider">
                      <span>Read More</span>
                      <HiOutlineArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                )}
              </GlowCard>
            );

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="h-full"
              >
                {item.link ? (
                  <Link href={item.link} className="block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
