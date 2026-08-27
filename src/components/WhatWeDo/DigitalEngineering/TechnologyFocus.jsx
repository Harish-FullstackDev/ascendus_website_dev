"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import java from "@/assets/WhatWeDo/Digital Engineering/icons/java.png";
import mongodb from "@/assets/WhatWeDo/Digital Engineering/icons/mongodb.png";
import nodejs from "@/assets/WhatWeDo/Digital Engineering/icons/nodejs.png";
import postgresql from "@/assets/WhatWeDo/Digital Engineering/icons/postgresql.png";
import python from "@/assets/WhatWeDo/Digital Engineering/icons/python.png";
import react from "@/assets/WhatWeDo/Digital Engineering/icons/react.png";

const LOGOS = [
    { name: "Java", src: java, width: 87 },
    { name: "MongoDB", src: mongodb, width: 150 },
    { name: "Node.js", src: nodejs, width: 100 },
    { name: "PostgreSQL", src: postgresql, width: 182 },
    { name: "Python", src: python, width: 114 },
    { name: "React", src: react, width: 117 },
];

export default function TechnologyFocus() {
    const marqueeLogos = [...LOGOS, ...LOGOS];

    return (
        <section className="w-full py-10 sm:py-16 px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[#0d0c22] text-2xl font-semibold text-center mb-10 sm:mb-12"
            >
                Technology Focus
            </motion.h2>

            <div className="max-w-[1180px] mx-auto overflow-hidden">
                <motion.div
                    className="flex w-max items-center gap-8 sm:gap-[48px]"
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