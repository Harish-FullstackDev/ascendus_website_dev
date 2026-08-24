"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-1.png";
import card2 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-2.png";
import card3 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-3.png";
import card4 from "@/assets/WhatWeDo/Enterprise Transformation Practice/MicrosoftServices/platform-4.png";

const STEPS = [
    {
        image: card1,
        title: "Map the Boundary",
        desc: "Identify what belongs in SAP, what belongs in Microsoft, and where the two need to talk to each other.",
    },
    {
        image: card2,
        title: "Design the Connection",
        desc: "The integration pattern between SAP and Microsoft is defined up front, so data flows one way, not through duplicate manual entry.",
    },
    {
        image: card3,
        title: "Deploy With Governance",
        desc: "Access controls, environment management, and monitoring are configured before go-live, not retrofitted once the platform is already in use.",
    },
    {
        image: card4,
        title: "Support Both as One",
        desc: "A single team carries support across both platforms, so an issue that touches both doesn't get bounced between two vendors.",
    },
];

export default function PlatformsTogether() {
    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col items-center gap-10 sm:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-[#0d0c22] text-2xl sm:text-[28px] font-medium">
                    How the Two Platforms Work Together
                </h2>
                <p className="text-[#3d3d4e] text-lg font-light">
                    Designed as one landscape, not negotiated between two vendors
                </p>
            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible */}
            <div className="flex sm:hidden flex-col gap-4 w-full">
                {STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={step.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6">
                            <p className="text-white text-2xl font-medium leading-normal">{step.title}</p>
                            {step.desc && (
                                <p className="text-white text-base font-light leading-[1.6]">{step.desc}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-to-grow row, same interaction as
                WhatWeDo/ArtificialIntelligence/OurAIServices.jsx — each card sits
                anchored to the bottom and expands upward on hover, with its
                description (where it has one) revealed after a short delay. */}
            <div className="hidden sm:flex sm:items-end gap-4 w-full">
                {STEPS.map((step, index) => (
                    <div key={step.title} className="relative flex-1 h-[458px]">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group absolute bottom-0 inset-x-0 h-[280px] overflow-hidden transition-[height] duration-500 ease-out hover:h-[458px] z-10 hover:z-20"
                        >
                            <Image src={step.image} alt="" fill className="object-cover" />

                            <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/70" />

                            <div className="absolute inset-0 flex flex-col justify-start gap-3 p-6">
                                <p className="text-white text-2xl font-medium leading-normal">{step.title}</p>
                                {step.desc && (
                                    <p className="text-white/85 text-base font-light leading-[1.6] max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:delay-500 group-hover:max-h-40 group-hover:opacity-100">
                                        {step.desc}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
