"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import java from "@/assets/WhatWeDo/Digital Engineering/icons/java.png";
import mongodb from "@/assets/WhatWeDo/Digital Engineering/icons/mongodb.png";
import nodejs from "@/assets/WhatWeDo/Digital Engineering/icons/nodejs.png";
import postgresql from "@/assets/WhatWeDo/Digital Engineering/icons/postgresql.png";
import python from "@/assets/WhatWeDo/Digital Engineering/icons/python.png";
import react from "@/assets/WhatWeDo/Digital Engineering/icons/react.png";

const CATEGORIES = [
    { name: "Frontend", items: [{ name: "React", src: react }] },
    {
        name: "Backend",
        items: [
            { name: "Node.js", src: nodejs },
            { name: "Java", src: java },
            { name: "Python", src: python },
        ],
    },
    {
        name: "Databases",
        items: [
            { name: "mongoDB", src: mongodb },
            { name: "PostgreSQL", src: postgresql },
        ],
    },
    {
        name: "Cloud & DevOps",
        items: [
            { name: "Java", src: java },
            { name: "mongoDB", src: mongodb },
            { name: "Node.js", src: nodejs },
            { name: "PostgreSQL", src: postgresql },
            { name: "Python", src: python },
            { name: "React", src: react },
        ],
    },
];

export default function TechnologyStack() {
    const [active, setActive] = useState(0);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Technology Stack</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    A curated set of proven technologies powering resilient, scalable digital products.
                </p>
            </motion.div>

            <div className="max-w-[1078px] mx-auto flex flex-col gap-8 sm:gap-16">
                <div className="flex overflow-x-auto sm:overflow-visible sm:justify-between gap-2 sm:gap-0">
                    {CATEGORIES.map((cat, i) => (
                        <button
                            key={cat.name}
                            type="button"
                            onClick={() => setActive(i)}
                            aria-pressed={active === i}
                            className={`shrink-0 bg-[#f7f7f7] h-[56px] sm:h-[76px] px-6 sm:px-4 flex items-center justify-center text-lg sm:text-2xl lg:text-[32px] font-normal transition-colors border-b-2 ${
                                active === i ? "border-[#2d8ec5] text-[#0d0c22]" : "border-transparent text-[#0d0c22]/70 hover:text-[#0d0c22]"
                            }`}
                            style={{ minWidth: 214 }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-[30px]"
                    >
                        {CATEGORIES[active].items.map((item, i) => (
                            <div
                                key={`${item.name}-${i}`}
                                className="bg-white border-[0.5px] border-[#555] aspect-square flex items-center justify-center p-8"
                            >
                                <div className="relative w-full h-full">
                                    <Image src={item.src} alt={item.name} fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
