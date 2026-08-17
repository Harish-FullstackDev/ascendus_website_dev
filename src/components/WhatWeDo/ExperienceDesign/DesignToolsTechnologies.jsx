"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import java from "@/assets/WhatWeDo/Experience Design/icons/java.png";
import mongodb from "@/assets/WhatWeDo/Experience Design/icons/mongodb.png";
import nodejs from "@/assets/WhatWeDo/Experience Design/icons/nodejs.png";
import postgresql from "@/assets/WhatWeDo/Experience Design/icons/postgresql.png";
import python from "@/assets/WhatWeDo/Experience Design/icons/python.png";
import react from "@/assets/WhatWeDo/Experience Design/icons/react.png";

const LOGOS = [
    { name: "Java", src: java, width: 87 },
    { name: "MongoDB", src: mongodb, width: 150 },
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
                className="text-[#16171a] text-2xl font-medium text-center mb-10 sm:mb-12"
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
                            className="relative h-[60px] sm:h-[80px] flex-shrink-0"
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