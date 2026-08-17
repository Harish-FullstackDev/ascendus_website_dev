"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FUNCTIONS = [
  { name: "Sales",             desc: "Empower sales teams with customer insights for faster and smarter decisions." },
  { name: "Marketing",         desc: "Build personalized campaigns that connect with the right audience." },
  { name: "Customer Service",  desc: "Deliver exceptional support that improves customer satisfaction." },
  { name: "Field Operations",  desc: "Equip field teams with real-time data and service information." },
  { name: "Digital Commerce",  desc: "Create seamless online shopping experiences on every platform." },
  { name: "Customer Support",  desc: "Resolve customer needs rapidly through intelligent support experiences." },
  { name: "Loyalty Programs",  desc: "Build long-term customer relationships with reward and loyalty strategies." },
  { name: "Contact Centres",   desc: "Optimize costs, improve efficiency and maximize the return on your SAP solution." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const CXBusinessFunctions = () => {
  return (
    <section className="overflow-hidden bg-white">
      {/* Split banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left – blue text panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex items-center bg-sky-700 px-10 py-16 lg:px-14 lg:py-20"
        >
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Experience Across<br />Every Business<br />Function
          </h2>
        </motion.div>

        {/* Right – building image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative min-h-[300px] overflow-hidden lg:min-h-[360px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
            alt="Modern business building facade"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sky-950/30" />
        </motion.div>
      </div>

      {/* Function cards grid */}
      <div className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {FUNCTIONS.map((fn) => (
            <motion.div
              key={fn.name}
              variants={cardVariants}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-sky-900">{fn.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{fn.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CXBusinessFunctions;
