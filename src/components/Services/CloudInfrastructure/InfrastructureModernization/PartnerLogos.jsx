"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import logo1 from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/7dee377d82c4a46f2fd9c5881ad5471d44e7a127.png";
import logo2 from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/b668e315e31853d2cbc58a02f07ebe3f66422305.png";
import logo3 from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/8b3f33ac25fbaf6684849a0b9527efc6a7738dd1.png";

const LOGOS = [logo1, logo2, logo3];

const PartnerLogos = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 pb-10 flex flex-wrap justify-center gap-4">
      {LOGOS.map((logo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="bg-white shadow-md rounded-[10px] flex items-center justify-center h-[50px] w-[149px] transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="relative h-[34px] w-[100px]">
            <Image src={logo} alt="Partner" fill className="object-contain" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PartnerLogos;
