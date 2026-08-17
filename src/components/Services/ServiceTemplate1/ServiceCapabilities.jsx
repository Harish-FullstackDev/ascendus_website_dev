"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

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

        {/* Masonry-style animation CSS */}
        <style>{`
          @keyframes slide-in-capabilities {
            from {
              opacity: 0;
              transform: scale(0.85) rotate(calc(var(--side, 1) * (5deg * var(--amp, 1))));
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
       
          .capabilities-card-wrapper {
            /* Mobile: 1 column */
            transform-origin: center bottom;
       
            @media (min-width: 768px) {
              /* Tablet: 2 columns */
              &:nth-of-type(2n + 1) { transform-origin: 25vw 100%; }
              &:nth-of-type(2n) { transform-origin: -25vw 100%; }
            }
       
            @media (min-width: 1024px) {
              /* Desktop: 3 columns */
              &:nth-of-type(3n + 1) { transform-origin: 33vw 100%; }
              &:nth-of-type(3n + 2) { transform-origin: center bottom; }
              &:nth-of-type(3n) { transform-origin: -33vw 100%; }
            }
       
            /* Animation powered by CSS Scroll-Driven Animations */
            @media (prefers-reduced-motion: no-preference) {
              animation: slide-in-capabilities linear both;
              animation-timeline: view();
              animation-range: entry 0% cover 15%;
            }
          }
        `}</style>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{
                  '--side': idx % 2 === 0 ? 1 : -1,
                  '--amp': Math.ceil((idx % 6) / 2) || 1,
                }}
                className="capabilities-card-wrapper h-full"
              >
                {item.link ? (
                  <Link
                    href={item.link}
                    className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-slate-800 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/20"
                  >
                    {/* Card Image Section */}
                    {item.image && (
                      <div className="aspect-video w-full overflow-hidden relative bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Card Content Section */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                          {Icon && <Icon className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-550 leading-relaxed flex-1">
                        {item.description}
                      </p>
                      
                      {/* Card Link/CTA */}
                      <div className="group/button mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 transition-all duration-300 group-hover:underline">
                        <span>Read More</span>
                        <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-slate-800 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                  >
                    {/* Card Image Section */}
                    {item.image && (
                      <div className="aspect-video w-full overflow-hidden relative bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Card Content Section */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                          {Icon && <Icon className="w-5 h-5 text-blue-500" />}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-550 leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </div>
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

export default ServiceCapabilities;
