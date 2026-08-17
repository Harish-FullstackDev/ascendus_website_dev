"use client";
import React from "react";
import { motion } from "framer-motion";
import { CloudCog, Share2, RefreshCw, BarChart3, Sparkles, Boxes } from "lucide-react";

const CAPABILITIES = [
  {
    icon: CloudCog,
    title: "Intelligent Cloud Architecture",
    description: "Design scalable, resilient, and high-performance cloud environments that support business growth and operational excellence.",
  },
  {
    icon: Share2,
    title: "Enterprise Integration",
    description: "Connect SAP, Microsoft, CRM, ERP, third-party applications, and cloud services into one intelligent business ecosystem.",
  },
  {
    icon: RefreshCw,
    title: "Enterprise Modernization",
    description: "Transform legacy applications into modern, cloud-native solutions that improve performance, flexibility, and user experience.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Forecast demand, identify trends, reduce operational risks, and make proactive business decisions.",
  },
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    description: "Leverage AI and Machine Learning services to automate processes, improve decision-making, and deliver personalized customer experiences.",
  },
  {
    icon: Boxes,
    title: "Cloud-Native Development",
    description: "Develop modern applications using containers, Kubernetes, serverless computing, APIs, and microservices.",
  },
];

const CloudCapabilitiesGrid = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            Built Around Business Outcomes
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Our proven transformation methodology helps you plan, implement, and optimize your
            RISE with SAP journey with confidence.
          </p>
        </motion.div>

        <h3 className="mb-12 text-center text-2xl font-medium text-black sm:text-3xl">
          Cloud Capabilities That Create Competitive Advantage
        </h3>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {CAPABILITIES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group relative flex items-center gap-5 overflow-hidden rounded-[20px] bg-sky-300/10 px-6 py-6 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300/20 hover:shadow-[0px_8px_24px_0px_rgba(8,47,73,0.15)]"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-[10px] bg-white text-sky-950 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:text-cyan-600">
                <item.icon className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <div className="relative flex flex-col gap-2">
                <h4 className="text-xl text-black">{item.title}</h4>
                <p className="text-sm font-light text-black/80 sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudCapabilitiesGrid;
