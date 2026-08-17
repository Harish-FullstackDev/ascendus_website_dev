"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { Users, FolderCheck, Building2, Globe2 } from "lucide-react";

import statsBg from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/20fe813bc8dc7bfe1e5c3c5887fdb060e0bb7bf2.png";

const STATS = [
  { icon: Users, label: "Client", target: 98, suffix: "%", sublabel: "Client\nRetention Rate", tint: "from-[#2E3033]/70" },
  { icon: FolderCheck, label: "Project", target: 250, suffix: "+", sublabel: "Enterprise Projects Delivered", tint: "from-[#0061af]/70" },
  { icon: Building2, label: "Industries", target: 15, suffix: "+", sublabel: "Industries\nTransformed", tint: "from-[#2E3033]/70" },
  { icon: Globe2, label: "Delivery", target: 50, suffix: "+", sublabel: "Global\nDelivery Excellence", tint: "from-[#0061af]/70" },
];

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isInView) return undefined;
    const controls = animate(0, stat.target, {
      duration: 1.4,
      delay: index * 0.1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, stat.target, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[20px] flex flex-col justify-between p-4 sm:p-6 h-[220px] sm:h-[280px] shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <Image
        src={statsBg}
        alt=""
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${stat.tint} to-transparent`} />
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center gap-2 bg-white/90 rounded-full px-3 py-0.5 text-[12px] sm:text-[13px] text-black w-fit">
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
          {stat.label}
        </div>
        <div>
          <p className="font-medium text-white text-[44px] sm:text-[64px] leading-none">
            {display}
            {stat.suffix}
          </p>
          <p className="font-light text-white text-[14px] sm:text-[18px] mt-1 whitespace-pre-line">
            {stat.sublabel}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const InfrastructureStats = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-medium text-[22px] sm:text-[28px] lg:text-[32px] text-black mb-3">
            Infrastructure Modernization
          </h2>
          <p className="font-light text-[#515151] text-[15px] sm:text-[18px] lg:text-[20px] max-w-[600px] mx-auto">
            Evaluate your current environment, identify modernization opportunities, and create a
            roadmap aligned with your business objectives.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureStats;
