"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import day1Image from "@/assets/Service/Enterprise Transformation/Rise with SAP/f338392b195b135119080ca236d3487de7f467a6.jpg";
import day2Image from "@/assets/Service/Enterprise Transformation/Rise with SAP/e249ff58d47a23b29b4238b4dbe32f216a93fdfb.jpg";
import day3Image from "@/assets/Service/Enterprise Transformation/Rise with SAP/a6417226bb660ca35a5ae15252f711a3036ed3e5.jpg";
import day4Image from "@/assets/Service/Enterprise Transformation/Rise with SAP/c64e81c370b95918e53cf947b888beeae8022de2.jpg";

// side = which column the image sits in on desktop
const STAGES = [
  {
    day: "Day 1–30",
    title: "Assess & Prepare",
    description:
      "Evaluate your current SAP landscape, business processes, integrations, and infrastructure. Define transformation objectives, governance, and a roadmap aligned with business priorities.",
    image: day1Image,
    side: "right",
  },
  {
    day: "Day 31–90",
    title: "Design & Migrate",
    description:
      "Build the target cloud architecture, prepare business data, configure SAP solutions, and execute a secure migration while minimizing operational disruption.",
    image: day2Image,
    side: "left",
  },
  {
    day: "Day 91–150",
    title: "Optimize & Adopt",
    description:
      "Enable users through training, optimize business processes, monitor system performance, and integrate intelligent automation to maximize business value.",
    image: day3Image,
    side: "right",
  },
  {
    day: "Day 151–180+",
    title: "Continuous Innovation",
    description:
      "Continuously enhance your SAP environment with analytics, AI, automation, security improvements, and regular cloud innovations to support long-term business growth.",
    image: day4Image,
    side: "left",
  },
];

const First180Days = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const spineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium text-black sm:text-4xl">
            The First <span className="text-cyan-600">180 Days</span> of Transformation
          </h2>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Evaluate your current ERP landscape, identify transformation opportunities, and
            create a roadmap aligned with your business objectives.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Spine — solid navy, filled in on scroll */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-[#2E3033]/20 sm:block lg:left-1/2" />
          <motion.div
            style={{ scaleY: spineProgress, transformOrigin: "top" }}
            className="absolute left-4 top-0 hidden h-full w-0.5 bg-[#2E3033] sm:block lg:left-1/2"
          />

          <div className="flex flex-col gap-16">
            {STAGES.map((stage, index) => {
              const imageOnLeft = stage.side === "left";
              return (
                <motion.div
                  key={stage.day}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col items-start gap-8 sm:pl-12 lg:items-center lg:gap-12 lg:pl-0 ${imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  {/* Dot — no explicit top, so it takes the flex cross-axis static
                      position: top of the block on mobile (items-start), vertical
                      centre of the row on desktop (lg:items-center). */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                    className="absolute left-2.5 hidden h-4 w-4 rounded-full border-2 border-white bg-[#2E3033] shadow sm:block lg:left-1/2 lg:-translate-x-1/2"
                  />

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="group relative aspect-video w-full overflow-hidden rounded-[28px] border-4 border-[#0061AF] shadow-lg sm:aspect-auto sm:h-[181px] lg:w-[calc(50%-1.5rem)]"
                  >
                    <Image
                      src={stage.image}
                      alt={stage.day}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  <div
                    className={`flex w-full flex-col items-start gap-3 lg:w-[calc(50%-1.5rem)] ${imageOnLeft ? "lg:items-end lg:text-right" : ""
                      }`}
                  >
                    <span className="text-2xl font-bold text-black sm:text-3xl">{stage.day}</span>
                    {stage.title && <span className="text-xl text-black sm:text-2xl">{stage.title}</span>}
                    <p className="max-w-xl text-base text-neutral-600 sm:text-lg">{stage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default First180Days;
