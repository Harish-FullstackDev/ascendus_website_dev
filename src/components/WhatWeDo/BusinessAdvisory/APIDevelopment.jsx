"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import codeBg from "@/assets/WhatWeDo/Digital Engineering/Section5_API_CodeBg.jpg";

export default function APIDevelopment() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[42px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">
                    Software Scalability
                </h2>

                <div className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    <p>
                        Defining transformation roadmaps, business architecture, and process change.
                    </p>
                </div>


            </motion.div>

            <div className="relative w-full aspect-[1280/487] min-h-[420px] sm:min-h-[200px] overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-full sm:w-[40.5%]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={codeBg}
                            alt="RESTful & GraphQL APIs"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[59.5%] bg-[#ececec] flex items-center px-6 sm:px-10 lg:px-[53px] py-10"
                >
                    <div className="flex flex-col gap-5 sm:gap-[34px] text-black max-w-full sm:w-full">

                        <p className="text-xl sm:text-[32px] font-normal">
                            Strategy That Becomes a Roadmap, Not a Deck
                        </p>

                        <p className="text-sm sm:text-lg font-light">


                            We translate business and digital strategy
                            into a sequenced transformation roadmap with clear ownership, dependencies, and
                            milestones, so it survives the handoff from strategy to delivery.
                        </p>
                        <p className="text-xl sm:text-[32px] font-normal">
                            Process Change People Actually Adopt
                        </p>

                        <p className="text-sm sm:text-lg font-light">
                            We pair process reengineering with structured
                            change management, because a redesigned process that nobody follows delivers zero value,
                            no matter how sound the design.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

