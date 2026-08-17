"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  { title: "Compute Infrastructure", desc: "Modern servers and virtual environments designed for high performance and scalability." },
  { title: "Storage Systems", desc: "Upgrade operating systems, middleware, and business platforms for improved reliability." },
  { title: "Networking", desc: "Modern networking architectures that improve connectivity, security, and performance." },
  { title: "Virtual Infrastructure", desc: "Optimize virtualization environments for better resource utilization and flexibility." },
];

const InfrastructureServices = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-semibold text-[24px] sm:text-[30px] lg:text-[36px] text-black mb-3">
            Our Infrastructure Modernization Services
          </h2>
          <p className="font-light text-[#515151] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[600px] mx-auto">
            Evaluate your current environment, identify modernization opportunities, and create a
            roadmap aligned with your business objectives.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
          {SERVICES.map((s, i) => (
            <motion.button
              key={s.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex items-center justify-center text-center font-medium text-[14px] sm:text-[18px] lg:text-[24px] px-4 py-6 sm:py-8 transition-colors duration-300 ${
                active === i ? "bg-[#2E3033] text-white" : "bg-[#0061af] text-white hover:bg-[#256f9d]"
              }`}
            >
              {s.title}
            </motion.button>
          ))}
        </div>

        {/* Descriptions */}
        <div className="bg-[#2E3033] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`font-light text-[13px] sm:text-[15px] lg:text-[16px] px-6 py-8 border-t border-white/10 sm:border-t-0 sm:border-l first:border-l-0 border-white/10 transition-colors duration-300 ${
                active === i ? "text-white bg-white/5" : "text-white/70"
              }`}
            >
              {s.desc}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureServices;
