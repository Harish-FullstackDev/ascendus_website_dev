"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Globe, Sparkles, TrendingUp, Workflow } from "lucide-react";
import panelImage from "@/assets/Service/Enterprise Transformation/SAP Rollout/ai-services-panel-bg.jpg";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Global Template Rollout",
    description:
      "Embed AI capabilities into SAP processes to automate workflows, improve planning, and enhance enterprise productivity.",
  },
  {
    icon: Cpu,
    title: "Microsoft AI Solutions",
    description:
      "Leverage Microsoft Azure AI, Co-pilot, and enterprise AI services to build scalable, secure, and intelligent business applications.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Forecast demand, identify trends, reduce operational risks, and make proactive business decisions.",
  },
  {
    icon: Workflow,
    title: "Intelligent Process Automation",
    description:
      "Combine AI with automation to streamline repetitive tasks, improve operational efficiency, and reduce manual effort.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Create intelligent assistants, automate content generation, and enhance customer interactions.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Decision Intelligence",
    description:
      "Transform business data into actionable analytics, real-time dashboards, and AI-driven recommendations.",
  },
];

const RollOutAICapabilities = () => (
  <section className="relative overflow-hidden bg-[#002438] py-16 sm:py-20 lg:py-24">
    <div
      aria-hidden
      className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
    />
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:aspect-[16/10] lg:aspect-[4/5]"
      >
        <Image
          src={panelImage}
          alt="Our SAP Rollout Services"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E3033]/95 via-[#2E3033]/50 to-[#2E3033]/10" />
        <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
          <h3 className="text-3xl font-medium leading-tight text-white sm:text-4xl">
            Our SAP Rollout
            <br />
            Services
          </h3>
          <p className="max-w-sm text-base leading-relaxed text-[#cccccc] sm:text-lg">
            We deliver AI-powered solutions that integrate with your existing technology
            landscape, enabling intelligence across every business function.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-medium text-white sm:text-3xl lg:text-4xl"
        >
          AI That Works Across Your Enterprise
        </motion.h2>

        <div className="flex flex-col gap-2">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-5 rounded-2xl p-3 transition-colors duration-300 hover:bg-white/5"
              >
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-500/20"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </motion.span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-medium text-white sm:text-xl">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-[#cccccc] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default RollOutAICapabilities;
