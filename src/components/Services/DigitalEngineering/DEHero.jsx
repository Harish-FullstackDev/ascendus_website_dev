"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const DEHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Visual Background Details */}
      <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Centered Main Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#0061af] mb-3"
          >
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-[#0061af]" />
              Engineering Beyond Development
            </span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Engineering Digital Products for a Connected Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg max-w-2xl mx-auto"
          >
            [Deploying next-gen custom applications and microservices. We build reliable, modular architectures integrated with existing business workflows to achieve continuous automation and reliable cloud performance.]
          </motion.p>
        </div>

        {/* 2-Column Responsive Layout (Stacks on mobile) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Rounded Earth / Space Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-square w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-xl group"
          >
            <Image
              src="/ServicePage/Digital Engineering/digital-engineering-hero-globe.jpg"
              alt="Connected globe network representing digital engineering pipelines"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </motion.div>

          {/* Right Column: Light Blue Background Card with Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center rounded-[2rem] bg-indigo-50/50 p-8 sm:p-10 border border-indigo-100/50 shadow-md relative overflow-hidden"
          >
            {/* Soft backdrop blur effect */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-indigo-200/10 blur-2xl" />

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
              Building Resilient Foundations
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              [Scaling digital products requires more than writing logic—it demands robust, well-patterned server designs and clean data pipelines. From Go microservices to API containerization, Ascendus establishes core system structures that guarantee uptime, throughput, and extensibility.]
            </p>

            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              [Create custom software solutions tailored entirely to your workflow requirements rather than adapting to generic templates.]
            </p>

            <div>
              <button
                onClick={() => {
                  document.getElementById("cta-banner")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-[#0061af] hover:bg-[#0052a3] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Schedule a demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DEHero;
