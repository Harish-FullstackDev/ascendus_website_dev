"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import java from "@/assets/WhatWeDo/Managed Services/Section8_Logo1.svg";
import mongodb from "@/assets/WhatWeDo/Managed Services/Section8_Logo2.svg";
import nodejs from "@/assets/WhatWeDo/Managed Services/Section8_Logo3.svg";
import postgresql from "@/assets/WhatWeDo/Managed Services/Section8_Logo6.png";
import python from "@/assets/WhatWeDo/Managed Services/Section8_Logo4.svg";
import react from "@/assets/WhatWeDo/Managed Services/Section8_Logo5.svg";

const LOGOS = [
    { name: "Java", src: java, width: 87, opacity: true },
    { name: "MongoDB", src: mongodb, width: 150, opacity: true },
    { name: "Node.js", src: nodejs, width: 100 },
    { name: "PostgreSQL", src: postgresql, width: 182 },
    { name: "Python", src: python, width: 114 },
    { name: "React", src: react, width: 117 },
];

export default function DesignToolsTechnologies() {
    const marqueeLogos = [...LOGOS, ...LOGOS];

    return (
        <section className="w-full py-10 sm:py-16 px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-heading text-[#16171a] text-2xl font-medium text-center mb-10 sm:mb-12"
            >
                Design Tools &amp; Technologies
            </motion.h2>

            <div className="max-w-[1180px] mx-auto overflow-hidden">
                <motion.div
                    className="flex w-max items-center gap-8 sm:gap-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 18,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className={`relative h-[60px] sm:h-[80px] flex-shrink-0 ${logo.opacity ? "opacity-50" : ""}`}
                            style={{ width: logo.width * 1.2 }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
