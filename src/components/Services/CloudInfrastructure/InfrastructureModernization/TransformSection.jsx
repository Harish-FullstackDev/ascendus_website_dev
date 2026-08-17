"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import transformImage from "@/assets/Service/Cloud & Infrastructure/Infrastructure Modernization/e5a13ece54a5674267b037eb92ba3eb6e37976ac.png";

const TextImageRow = ({ title, body, imgLeft = false, roundedCorner = "br", index }) => {
  const img = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative w-full sm:w-[280px] lg:w-[348px] h-[200px] sm:h-[266px] shrink-0 overflow-hidden rounded-${roundedCorner}-[68px]`}
    >
      <Image
        src={transformImage}
        alt=""
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </motion.div>
  );

  const text = (
    <motion.div
      initial={{ opacity: 0, x: imgLeft ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-4 flex-1"
    >
      <h2 className="font-medium text-[20px] sm:text-[26px] lg:text-[36px] text-black">{title}</h2>
      <div className="font-light text-[14px] sm:text-[16px] lg:text-[18px] text-black">{body}</div>
    </motion.div>
  );

  return (
    <div className={`flex flex-col ${imgLeft ? "sm:flex-row-reverse" : "sm:flex-row"} gap-8 lg:gap-16 items-center`}>
      {text}
      {img}
    </div>
  );
};

const TransformSection = () => {
  return (
    <section className="bg-white rounded-[48px] sm:rounded-[89px] max-w-[1280px] w-full mx-auto shadow-md px-4 sm:px-10 lg:px-16 py-10 sm:py-16 flex flex-col gap-12 sm:gap-20">
      <TextImageRow
        index={0}
        title="Transform the Foundation of Your Business"
        roundedCorner="br"
        body={
          <>
            <p className="mb-4">
              As technology evolves, traditional infrastructure often struggles to meet the
              demands of modern applications, hybrid workforces, and digital transformation.
              Infrastructure modernization enables organizations to replace outdated systems with
              flexible, intelligent, and high-performing environments.
            </p>
            <p>
              At Ascendus, we modernize infrastructure with a business-first approach—helping
              organizations improve efficiency while preparing for future growth.
            </p>
          </>
        }
      />
      <TextImageRow
        index={1}
        title="Modernization That Delivers Business Value"
        imgLeft
        roundedCorner="bl"
        body={
          <>
            <p className="mb-4">
              Infrastructure modernization is not simply replacing hardware or moving to the
              cloud. It is about building an environment that is secure, scalable, and capable of
              supporting future technologies such as Artificial Intelligence, Data Analytics,
              Automation, and Digital Engineering.
            </p>
            <p>
              Our solutions are designed to improve performance, simplify operations, and create a
              strong foundation for continuous innovation.
            </p>
          </>
        }
      />
    </section>
  );
};

export default TransformSection;
