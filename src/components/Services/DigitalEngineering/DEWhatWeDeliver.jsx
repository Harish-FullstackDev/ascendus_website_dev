"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

const DELIVERY_ITEMS = [
  "Custom Business Applications",
  "Web & Mobile Development",
  "Cloud-Native Apps",
  "Scalable Enterprise Platforms"
];

const METRICS = [
  {
    value: "99.9%",
    label: "Availability",
    desc: "[Guaranteed uptime SLA matching global enterprise expectations.]"
  },
  {
    value: "< 2 Sec",
    label: "Response Time",
    desc: "[Rapid client-server query resolution for high performance.]"
  },
  {
    value: "24x7",
    label: "Monitoring",
    desc: "[Proactive telemetry capturing system health changes instantly.]"
  },
  {
    value: "Zero",
    label: "Downtime Strategy",
    desc: "[Deploy changes smoothly without severing active client sessions.]"
  }
];

const DEWhatWeDeliver = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="mx-auto max-w-7xl">
        {/* Upper Delivery Block */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center mb-20">

          {/* Left Side: Dual-Stacked Image Layout */}
          <div className="lg:col-span-6 relative h-[400px] sm:h-[480px] w-full">
            {/* Background decorative square grid */}
            <div className="absolute top-2 left-2 -z-10 h-72 w-72 rounded-3xl bg-[#0061af]/5 border border-[#0061af]/10" />

            {/* Stacked Image 1 (Lower, Left aligned) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 bottom-4 w-[60%] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-200"
            >
              <Image
                src="/ServicePage/Digital Engineering/software-delivery-team.jpg"
                alt="Engineering team collaborating on digital product design"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Stacked Image 2 (Higher, Right aligned, overlapping) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute right-4 top-4 w-[65%] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200"
            >
              <Image
                src="/ServicePage/Digital Engineering/laptop-hands-developer.jpg"
                alt="Hands of developer working across modern client server monitors"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Side: Narrative & List Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0061af] inline-flex items-center gap-1.5 mb-3">
              <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />What We Deliver
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-6">
              Application Development
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              [Engineering scalable desktop, web, and mobile environments that translate complex operational goals into optimized software. Our development teams apply strict coding standards and modern frameworks to construct robust digital products that stand the test of high workload scaling.]
            </p>

            {/* Custom List Block */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {DELIVERY_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-[#0061af] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link
                href="/services/digitalEngineering/custom-software"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0061af] hover:text-[#0052a3] group transition-colors duration-200"
              >
                See More
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Metrics Row (Responsive Horizontal Grid) */}
        <div className="border-t border-slate-200/80 pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {METRICS.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col px-4 sm:px-6 ${idx !== 0 ? "lg:border-l lg:border-slate-200" : ""
                  }`}
              >
                <div className="text-3xl font-extrabold text-[#0061af] md:text-4xl lg:text-5xl mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-800 tracking-wide uppercase mb-1">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DEWhatWeDeliver;
