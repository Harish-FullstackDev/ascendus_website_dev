"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import processBg from "@/assets/WhatWeDo/Experience Design/Section9_Discover_Bg.jpg";

const STAGES = [
    {
        title: "Discover",
        desc: "Research user behaviors, business goals, and market opportunities to define the right problem.",
    },
    {
        title: "Define",
        desc: "Synthesize research into clear problem statements, user needs, and measurable success criteria.",
    },
    {
        title: "Design",
        desc: "Translate insights into wireframes, prototypes, and high-fidelity interfaces that bring the solution to life.",
    },
    {
        title: "Validate",
        desc: "Test designs with real users to confirm they solve the right problem before development begins.",
    },
    {
        title: "Deliver & Evolve",
        desc: "Ship the experience, then continuously measure, learn, and refine it based on real-world usage.",
    },
];

export default function DesignProcess() {
    const [active, setActive] = useState(0);

    return (
        <section className="w-full py-10 sm:py-16">
            <div className=" mx-auto">
                <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                    {STAGES.map((stage, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={stage.title}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`flex-1 min-w-[50%] sm:min-w-0 h-[60px] sm:h-[79px] flex items-center justify-center px-2 text-base sm:text-2xl font-light transition-colors ${isActive ? "bg-[#efefef] border-t-4 border-[#0061af] text-black" : "bg-[#efefef] text-black/70"
                                    }`}
                            >
                                {stage.title}
                            </button>
                        );
                    })}
                </div>

                <div className="relative w-full h-[420px] sm:h-[600px] overflow-hidden">
                    <Image src={processBg} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 from-[17%] to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 px-6 sm:px-[103px] pb-10 sm:pb-16 max-w-[1074px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex flex-col gap-4 sm:gap-6"
                            >
                                <h3 className="text-white text-3xl sm:text-5xl  font-medium">{STAGES[active].title}</h3>
                                <p className="text-white/90 text-lg sm:text-[32px] font-light leading-snug">
                                    {STAGES[active].desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
