"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import teamImage from "@/assets/Service/Cloud & Infrastructure/Cloud Migration/f4be37e9af0fe792b63293e22f00d7e0b4b10226.png";

const SmarterWayToMove = () => {
  const router = useRouter();

  return (
    <section className="px-6 md:px-16 pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-[45px] bg-[rgba(142,197,255,0.18)] p-4 md:p-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-5">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="group relative mx-auto h-[280px] w-full max-w-[457px] shrink-0 overflow-hidden rounded-[45px] md:h-[360px] lg:mx-0 lg:h-[452px]"
            >
              <Image
                src={teamImage}
                alt="Cloud migration team"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>
            {/* Text */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-normal text-black md:text-3xl lg:text-[24px]">
                A Smarter Way to Move
              </h2>
              <p className="font-light leading-relaxed text-[#7b7b7b] md:text-[20px] lg:text-[24px]">
                Every organization has a unique technology landscape. Whether you&apos;re
                migrating a single application or transforming an entire enterprise environment, a
                structured migration approach minimizes risk and accelerates business value.
              </p>
              <p className="font-light leading-relaxed text-[#7b7b7b] md:text-[20px] lg:text-[24px]">
                Ascendus helps businesses plan and execute cloud migrations with confidence, ensuring
                applications, data, and infrastructure are ready for the future.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push("/bookacall")}
                className="flex w-fit items-center gap-2 rounded-full bg-black px-6 py-2 text-[14px] font-semibold text-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <span>Schedule a demo</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmarterWayToMove;
