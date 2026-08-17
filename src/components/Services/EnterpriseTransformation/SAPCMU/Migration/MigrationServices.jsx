"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrowIcon from "@/assets/Service/Enterprise Transformation/SAP CMU/Migration/icons/Arrow 1.svg";

const SERVICES = [
  {
    title: "Cloud Migration",
    description: "Move your SAP workloads to a secure and scalable cloud environment with minimal disruption.",
  },
  {
    title: "System Migration",
    description: "Transfer SAP applications, databases, and environments while maintaining performance and stability.",
  },
  {
    title: "Database Migration",
    description: "Migrate business-critical databases with a focus on data integrity, scalability, and performance.",
  },
  {
    title: "Landscape Consolidation",
    description: "Simplify multiple SAP systems into a unified and efficient landscape for easier management.",
  },
  {
    title: "Data Migration",
    description: "Securely migrate historical and transactional data while ensuring accuracy and recoverability.",
  },
  {
    title: "Infrastructure Migration",
    description: "Modernize your IT infrastructure to improve scalability, resilience, and operational efficiency.",
  },
];

const MigrationServices = () => (
  <section className="relative overflow-hidden bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-medium text-black sm:text-4xl">Our SAP Migration Services</h2>
        <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
          Transformation shouldn&apos;t end at Go-Live. The real impact begins afterward.
        </p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {SERVICES.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              {!isEven && <div className="hidden flex-1 sm:block" />}
              {!isEven && (
                <Image
                  src={arrowIcon}
                  alt=""
                  className="hidden h-4 w-4 flex-shrink-0 rotate-180 opacity-50 sm:block"
                />
              )}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md rounded-xl bg-sky-950 px-5 py-4 shadow-md transition-colors duration-300 hover:bg-cyan-700 sm:max-w-lg sm:px-6 sm:py-5"
              >
                <h3 className="text-base font-medium text-white sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70 sm:text-base">{item.description}</p>
              </motion.div>
              {isEven && (
                <Image
                  src={arrowIcon}
                  alt=""
                  className="hidden h-4 w-4 flex-shrink-0 opacity-50 sm:block"
                />
              )}
              {isEven && <div className="hidden flex-1 sm:block" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MigrationServices;
