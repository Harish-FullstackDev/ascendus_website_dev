"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";

import devImage from "@/assets/Service/Cloud & Infrastructure/Cloud Migration/e5a13ece54a5674267b037eb92ba3eb6e37976ac.png";

const STATS = [
  { target: 99.9, decimals: 1, suffix: "%", label: "Availability" },
  { target: 2, prefix: "< ", suffix: " Sec", label: "Average Response Time" },
  { target: 24, suffix: "×7", label: "Application Monitoring" },
  { value: "Zero", isStatic: true, label: "Downtime Deployment Strategy" },
];

const StatValue = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState((0).toFixed(stat.decimals || 0));

  useEffect(() => {
    if (!isInView || stat.isStatic) return undefined;
    const controls = animate(0, stat.target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(value.toFixed(stat.decimals || 0)),
    });
    return () => controls.stop();
  }, [isInView, stat]);

  return (
    <p ref={ref} className="text-2xl font-medium text-black md:text-3xl lg:text-[36px]">
      {stat.isStatic ? stat.value : `${stat.prefix || ""}${display}${stat.suffix || ""}`}
    </p>
  );
};

const ApplicationDevelopment = () => {
  return (
    <section className="px-6 pt-8 pb-16 md:px-16 md:pt-12 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-8 max-w-[1023px] text-center md:mb-12"
      >
        <h2 className="text-2xl font-medium text-black md:text-3xl lg:text-[36px]">
          Our Cloud Migration Services
        </h2>
      </motion.div>

      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-5">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="group relative mx-auto h-[280px] w-full max-w-[468px] shrink-0 overflow-hidden rounded-[30px] md:h-[360px] lg:mx-0 lg:h-[409px]"
          >
            <Image
              src={devImage}
              alt="Application development"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </motion.div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div>
              <p className="text-lg font-normal text-[#0061af] md:text-[28px] lg:text-[36px]">
                Application Development
              </p>
              <p className="mt-3 text-lg font-light text-black md:text-[22px] lg:text-[24px]">
                Build applications designed for performance, scalability, and business growth.
              </p>
            </div>
            <p className="font-light leading-relaxed text-[#515151] md:text-[20px] lg:text-[24px]">
              Every organization has a unique technology landscape. Whether you&apos;re migrating
              a single application or transforming an entire enterprise environment, a structured
              migration approach minimizes risk and accelerates business value.
            </p>
            <p className="font-light leading-relaxed text-[#515151] md:text-[20px] lg:text-[24px]">
              Ascendus helps businesses plan and execute cloud migrations with confidence, ensuring
              applications, data, and infrastructure are ready for the future.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-gray-200 pt-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-black">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-0 md:px-8 first:pl-0"
            >
              <StatValue stat={stat} />
              <p className="mt-1 text-sm font-light text-black md:text-[16px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationDevelopment;
