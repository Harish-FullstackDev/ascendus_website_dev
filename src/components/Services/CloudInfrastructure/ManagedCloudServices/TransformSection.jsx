"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import sideImage from "@/assets/Service/Cloud & Infrastructure/Managed Cloud Services/Rectangle 53.jpg";

const FeatureRow = ({ title, body, imgLeft, index }) => {
  const router = useRouter();

  const img = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative h-[280px] w-full sm:h-[360px] sm:w-[420px] shrink-0 overflow-hidden rounded-[40px]"
    >
      <Image
        src={sideImage}
        alt=""
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </motion.div>
  );

  const text = (
    <motion.div
      initial={{ opacity: 0, x: imgLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-5 flex-1"
    >
      <h2 className="text-xl sm:text-2xl font-normal text-black">{title}</h2>
      <div className="text-base sm:text-lg font-light leading-relaxed text-[#7b7b7b]">{body}</div>
    </motion.div>
  );

  return (
    <div
      className={`bg-[rgba(142,197,255,0.18)] rounded-[45px] p-6 sm:p-10 flex flex-col ${
        imgLeft ? "sm:flex-row" : "sm:flex-row-reverse"
      } gap-8 sm:gap-10 items-center`}
    >
      {img}
      {text}
    </div>
  );
};

const TransformSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <FeatureRow
          index={0}
          imgLeft
          title="Beyond Cloud Operations"
          body={
            <>
              <p className="mb-4">
                Managing a cloud environment requires continuous monitoring, security updates,
                cost optimization, and performance improvements. Without proactive management,
                organizations may face increasing costs, security risks, and operational
                inefficiencies.
              </p>
              <p className="mb-6">
                Ascendus delivers end-to-end managed cloud services that keep your cloud environment
                reliable, secure, and aligned with evolving business needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push("/bookacall")}
                className="w-fit rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                Schedule a demo
              </motion.button>
            </>
          }
        />
        <FeatureRow
          index={1}
          imgLeft={false}
          title="Your Cloud, Managed End-to-End"
          body={
            <>
              <p className="mb-4">
                Whether you&apos;re operating in a public, private, or hybrid cloud environment,
                our experts provide continuous support to maintain performance, improve
                availability, and ensure your cloud infrastructure operates efficiently every day.
              </p>
              <p>
                From infrastructure monitoring to security management, we help businesses maximize
                the value of their cloud investments.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default TransformSection;
