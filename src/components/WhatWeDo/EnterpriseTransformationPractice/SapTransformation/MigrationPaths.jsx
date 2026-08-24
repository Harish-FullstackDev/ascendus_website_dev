"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import greenfieldImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/SAP Transformation/SAP_Greenfield.webp";
import brownfieldImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/SAP Transformation/SAP_Brownfield.webp";
import bluefieldImg from "@/assets/WhatWeDo/Enterprise Transformation Practice/SAP Transformation/SAP_Bluefield.webp";

const PATHS = [
    { name: "Greenfield", image: greenfieldImg },
    { name: "Brownfield", image: brownfieldImg },
    { name: "Bluefield", image: bluefieldImg },
];

export default function MigrationPaths() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:p-16 flex flex-col sm:flex-row gap-6 sm:gap-6 items-start">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6 w-full sm:flex-1 shrink-0"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[27px] font-medium">Choosing Your Migration Path</h2>
                <p className="text-[#4a5568] text-lg font-light leading-[1.4]">
                    End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover
                    windows, not a generic timeline.
                </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:flex-[3_0_0]">
                {PATHS.map((path, index) => (
                    <motion.div
                        key={path.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="group relative flex-1 min-h-[240px] sm:min-h-[368px] flex flex-col justify-end p-6 overflow-hidden"
                    >
                        <Image
                            src={path.image}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <p className="relative z-10 text-white text-2xl sm:text-[28px] font-medium leading-[1.4]">
                            {path.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
