"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import devSecOpsBg from "@/assets/WhatWeDo/Cloud and Infrastructure/webp/Cloud_Statement_Banner.webp";

export default function ArchitecturalResilienceStrategy() {
    return (
        <section className="w-full px-6 sm:px-0">
            <div className="relative w-full max-w-screen mx-auto h-[380px] sm:h-[440px] lg:h-[488px] overflow-hidden">
                {/* Fixed Background Image */}

                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${devSecOpsBg.src})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative h-full flex flex-col justify-center gap-4 sm:gap-6 max-w-full px-6 sm:px-[64px]"
                >
                    <h2 className="text-white text-[48px] font-semibold max-w-[600px] sm:mb-5">Architectural Resilience Strategy</h2>
                    <p className="text-white text-base sm:text-2xl font-light ">
                        The principles that guide our cloud and infrastructure deployments
                    </p>
                    <p className="text-white text-base sm:text-2xl font-light">
                        Infrastructure should be the thing your business never has to think about.
                        <br />
                        That takes deliberate design.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
