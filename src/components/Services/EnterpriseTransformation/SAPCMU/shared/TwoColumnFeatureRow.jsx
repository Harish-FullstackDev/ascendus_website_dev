"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TwoColumnFeatureRow = ({
  eyebrow,
  heading,
  paragraphs = [],
  belowParagraphs = [],
  image,
  imageAlt = "",
  reverse = false,
  imageShape = "square",
}) => {
  const imageSizeClass =
    imageShape === "wide"
      ? "aspect-[4/3] w-full max-w-md"
      : "aspect-square w-64 sm:w-80";

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
      <div
        className={`flex flex-col items-center gap-10 lg:gap-16 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`group relative flex-shrink-0 overflow-hidden rounded-3xl shadow-xl ${imageSizeClass}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-1 flex-col items-start gap-3 text-left"
        >
          {eyebrow && (
            <span className="text-lg font-medium text-cyan-600 sm:text-xl">{eyebrow}</span>
          )}
          <h2 className="text-2xl font-medium text-black sm:text-3xl lg:text-4xl">{heading}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-neutral-500 sm:text-lg">
              {p}
            </p>
          ))}
        </motion.div>
      </div>

      {belowParagraphs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4"
        >
          {belowParagraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-neutral-500 sm:text-lg">
              {p}
            </p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default TwoColumnFeatureRow;
