"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import InflectedCard from "@/components/ui/inflected-card";

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
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <section id={id} className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(135deg,_#f5f6f6_0%,_#ffffff_55%,_#f5f6f6_100%)] py-24 text-slate-800">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm text-blue-500">✦</span>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-600 sm:text-sm">{subtitle}</p>
            </div>
            <h2 className="text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {title.split(" ").map((word, idx) => {
                const isLast = idx === title.split(" ").length - 1;
                return isLast ? (
                  <span key={idx} className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word + " "
                );
              })}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Each engagement is shaped around the business outcome, the user journey, and the operating model needed to sustain momentum after launch.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="h-full"
              >
                <Link href={item.link} className="block group h-full">
                  <InflectedCard
                    id={idx}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    parentBackgroundColor="#ffffff"
                    cardRounding={26}
                    buttonIcon={Icon ? <Icon className="h-6 w-6" /> : <HiOutlineArrowRight className="h-6 w-6" />}
                    buttonIconSize={24}
                    buttonIconColor="#2563eb"
                    buttonIconHoverColor="#ffffff"
                    buttonBackgroundColor="rgba(37, 99, 235, 0.1)"
                    buttonBackgroundHoverColor="#2563eb"
                    imageHoverScale={1.08}
                    titleColor="#1e293b"
                    descriptionColor="#475569"
                    titleAlignment="left"
                    descriptionAlignment="left"
                    maxWidth="100%"
                    fontSizes={{ title: "1.25rem", description: "0.875rem" }}
                    margins={{ title: "0 0 10px 0", description: "0 0 12px 0" }}
                  >
                    {item.link && (
                      <div className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 transition-colors group-hover:text-blue-700">
                        <span>Read More</span>
                        <HiOutlineArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </InflectedCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;
