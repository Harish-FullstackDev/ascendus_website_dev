"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const INTEGRATION_SERVICES = [
  {
    title: "Enterprise Integration",
    desc: "[Connecting legacy ERP environments, secure database clusters, and cloud CRMs into a single stream.]",
    image: "/ServicePage/Digital Engineering/enterprise-integration-bg.jpg",
    link: "/services/digitalEngineering/enterprise-integration"
  },
  {
    title: "API Development & Management",
    desc: "[Designing high-volume REST, GraphQL, and gRPC endpoints protected by robust payload gateways.]",
    image: "/ServicePage/Digital Engineering/api-management-bg.jpg",
    link: "/services/digitalEngineering/api-development-management"
  },
  {
    title: "Connected Data Exchange",
    desc: "[Routing high-throughput message packages cleanly using secure queue workers and event broker systems.]",
    image: "/ServicePage/Digital Engineering/connected-data-exchange-bg.jpg",
    link: "/services/digitalEngineering/connected-data-exchange"
  }
];

const DEIntegration = () => {
  return (
    <section className="bg-sky-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />

      <div className="mx-auto max-w-7xl">
        {/* Title Header with Right-Aligned Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              <span className="flex items-center justify-start gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
                API & System Integration
              </span>
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Connect Systems Seamlessly
            </h2>
          </div>


        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INTEGRATION_SERVICES.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 bg-slate-900">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 block">
                  Service Offerings
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                  {srv.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {srv.desc}
                </p>

                <div>
                  <Link
                    href={srv.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-cyan-300 transition-colors duration-200"
                  >
                    See More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DEIntegration;
