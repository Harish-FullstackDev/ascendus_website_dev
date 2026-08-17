"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

// Import images
import CloudModernizationImage from "@/assets/Service/Cloud & Infrastructure/application-modernization-cloud.jpg";
import MicroservicesImage from "@/assets/Service/Cloud & Infrastructure/application-modernization-network.jpg";

const AppModernization = () => {
  const points = [
    { title: "Scalable Infrastructure", desc: "Built to expand dynamically with your growing business demands." },
    { title: "Improved Business Agility", desc: "Deploy changes faster through flexible, isolated cloud networks." },
    { title: "Enhanced Security", desc: "Governance, auditing systems, and identity protection built into the framework." },
    { title: "Optimized Costs", desc: "Pay only for what you compute with automated resource scheduling rules." },
    { title: "Reliable Performance", desc: "Continuous uptime backed by active monitoring dashboards and load balancers." },
    { title: "Future-Ready Foundation", desc: "An open, containerized codebase architecture that accommodates emerging integrations." },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Stacked Images (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full h-[480px] sm:h-[550px]"
          >
            {/* Background decorative square */}
            <div className="absolute top-8 left-8 right-0 bottom-0 border-2 border-dashed border-blue-500/20 rounded-2xl -z-10" />

            {/* Image 1 (Top Left) */}
            <div className="absolute top-0 left-0 w-[80%] h-[65%] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src={MicroservicesImage}
                alt="App Containerization"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Image 2 (Bottom Right Overlay) */}
            <div className="absolute bottom-6 right-0 w-[80%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image

                src={CloudModernizationImage}
                alt="Cloud Architecture Design"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Content and List (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider flex items-center justify-start gap-2 block">
                <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
                Application Modernization</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                Transform legacy applications into future-ready digital platforms.
              </h2>
            </motion.div>

            {/* Grid of Business Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start space-x-3.5"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-base">{point.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppModernization;
