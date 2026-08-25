"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serviceBgImg from "@/assets/Ascendus/images/data-center-corridor.png";

const SERVICES = [
    {
        title: "Enterprise Transformation",
        desc: "Re-architecting how your business runs — from process to platform.",
    },
    { title: "Artificial Intelligence", desc: "" },
    { title: "Cloud & Infrastructure", desc: "" },
    { title: "Digital Engineering", desc: "" },
];

export default function Services() {
    return (
        <section id="ascendus-services" className="w-full bg-white pt-8 pb-8 sm:pt-8 sm:pb-8 px-6 sm:px-[64px]">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div className="flex flex-col gap-2 max-w-[808px]">
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-medium leading-[1.4] tracking-[0.28px]">
                            Everything an Enterprise Needs to Run on Modern Technology
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.5] max-w-[600px]">
                            A complete technology foundation that connects strategy, systems, security, data, and
                            operations to help enterprises scale with confidence.
                        </p>
                    </div>

                    <div className="hidden md:flex items-center gap-1 bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.08)] rounded-[61px] px-3 py-2 shrink-0">
                        <button type="button" className="size-10 flex items-center justify-center" aria-label="Previous">
                            <svg className="-scale-y-100 rotate-90" width="24" height="24" viewBox="0 0 40 40" fill="none">
                                <path d="M20 27V11M14 17L20 11L26 17" stroke="#55595E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button type="button" className="size-10 flex items-center justify-center" aria-label="Next">
                            <svg className="rotate-90" width="24" height="24" viewBox="0 0 40 40" fill="none">
                                <path d="M20 27V11M14 17L20 11L26 17" stroke="#B3B3B3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {SERVICES.map((card) => (
                        <div
                            key={card.title}
                            className="group relative overflow-hidden aspect-[7/8] flex flex-col justify-end p-6 sm:p-8"
                        >
                            <Image
                                src={serviceBgImg}
                                alt=""
                                fill
                                className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="text-white text-2xl font-medium leading-[1.4]">{card.title}</h3>
                                {card.desc && (
                                    <p className="text-white text-base font-light mt-2 leading-[1.4]">{card.desc}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
