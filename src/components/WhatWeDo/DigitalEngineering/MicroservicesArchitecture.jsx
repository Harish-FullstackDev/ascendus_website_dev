"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import microservicesDesign from "@/assets/WhatWeDo/Digital Engineering/Section9_MicroservicesDesign.jpg";
import containerization from "@/assets/WhatWeDo/Digital Engineering/Section9_Containerization.jpg";
import eventDriven from "@/assets/WhatWeDo/Digital Engineering/Section6_EventDriven.jpg";

const PANELS = [
    { title: "Microservices Design", image: microservicesDesign, tall: true },
    { title: "Service Decomposition", image: null, tall: false },
    { title: "Containerization", image: containerization, tall: false },
    { title: "Event-Driven Architecture", image: eventDriven, tall: true },
];

const STATS = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "Auto", label: "Scaling On Demand" },
    { value: "Zero", label: "Downtime Deployments" },
    { value: "Real-Time", label: "Monitoring & Logs" },
];

export default function MicroservicesArchitecture() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[650px] mx-auto text-center mb-10 sm:-mb-[90px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Microservices Architecture</h2>
                <div className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    <p className="text-black">Build Flexible, Cloud-Native Applications</p>
                    <p>
                        Modernize monolithic applications by adopting microservices architecture that improves
                        scalability, resilience, and deployment speed.
                    </p>
                </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[14px] items-stretch sm:items-end max-w-screen mx-auto">
                {PANELS.map((panel, index) => (
                    <motion.div
                        key={panel.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className={`group relative w-full overflow-hidden ${
                            panel.tall ? "h-[280px] sm:h-[600px]" : "h-[240px] sm:h-[340px]"
                        }`}
                    >
                        {panel.image ? (
                            <Image
                                src={panel.image}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-black" />
                        )}
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />
                        <p className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-white text-xl sm:text-[28px] font-normal text-center">
                            {panel.title}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#e4e3e3] max-w-screen mx-auto mt-3 sm:mt-0 px-6 sm:px-[78px] py-10 sm:py-[40px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 sm:gap-[47px]">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                            className="flex flex-col items-center text-center gap-1"
                        >
                            <p className="text-black text-xl sm:text-2xl font-medium">{stat.value}</p>
                            <p className="text-[#3d3d4e] text-sm sm:text-lg font-light">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
