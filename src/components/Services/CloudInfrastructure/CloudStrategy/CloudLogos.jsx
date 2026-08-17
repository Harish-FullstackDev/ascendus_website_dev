"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Logo1 from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/cloud-logo-1.png";
import Logo2 from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/cloud-logo-2.png";
import Logo3 from "@/assets/Service/Cloud & Infrastructure/Cloud Strategy/cloud-logo-3.png";

const LOGOS = [Logo1, Logo2, Logo3];

const CloudLogos = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-wrap justify-center gap-4">
        {LOGOS.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(46,48,51,0.25)" }}
            className="bg-white shadow-md rounded-[10px] h-[50px] px-6 flex items-center justify-center transition-shadow"
          >
            <Image src={src} alt={`Cloud provider ${i + 1}`} className="max-h-[31px] max-w-[70px] object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CloudLogos;
