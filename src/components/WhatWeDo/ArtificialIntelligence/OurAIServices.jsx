"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import contentGenPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Strategy.webp";
import documentIntelPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/Generative_AI.webp";
import knowledgeMgmtPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Agents.webp";
import codeGenPhoto from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Integration.webp";
import workflowAutoPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section3_Card5_WorkflowAutomation.jpg";

const CARDS = [
    {
        title: "AI Strategy",
        desc: "We define where AI creates the most value in your operations and build a roadmap that ties investment to measurable business outcomes.",
        image: contentGenPhoto,
    },
    {
        title: "Generative AI",
        desc: "We build generative AI solutions for content, code, and knowledge work that fit your data governance and security requirements.",
        image: documentIntelPhoto,
    },
    {
        title: "AI Agents",
        desc: "We design autonomous and semi-autonomous agents that execute multi-step business processes with human oversight built in.",
        image: knowledgeMgmtPhoto,
    },
    {
        title: "AI Integration",
        desc: "We embed AI models into your existing SAP and enterprise systems so intelligence works inside the tools your teams already use.",
        image: codeGenPhoto,
    },
];

export default function OurAIServices() {
    return (
        <section className="w-full py-10 px-6 sm:p-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[50px]"
            >
                <h2 className="text-[#16171A] text-2xl font-medium">Our Artificial Intelligence Services</h2>
                <p className="text-[#4A5568] text-base sm:text-lg font-light">Core areas where we deploy AI to transform enterprise workflow</p>

            </motion.div>

            {/* Mobile: simple static stacked cards — no hover, description always visible */}
            <div className="flex sm:hidden flex-col gap-4 max-w-[1280px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="relative w-full h-[220px] overflow-hidden"
                    >
                        <Image src={card.image} alt="" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 flex flex-col justify-start gap-2 px-4 pt-5">
                            <p className="text-white text-xl font-normal">{card.title}</p>
                            <p className="text-white/85 text-sm font-light max-w-[280px]">{card.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Desktop: hover-to-grow row */}
            <div className="hidden sm:flex sm:items-end gap-3 sm:gap-[13px] max-w-screen mx-auto">
                {CARDS.map((card, index) => (
                    <div key={card.title} className="relative h-[322px] flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group absolute bottom-0 inset-x-0 h-[200px] overflow-hidden transition-[height] duration-500 ease-out hover:h-[322px] z-10 hover:z-20"
                        >
                            <Image
                                src={card.image}
                                alt=""
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/70" />

                            <div className="absolute inset-0 flex flex-col justify-start gap-3 px-4 pt-5">
                                <p className="text-white text-xl sm:text-2xl font-normal max-w-[170px]">{card.title}</p>
                                <p className="text-white/85 text-sm font-light max-w-[200px] max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:delay-500 group-hover:max-h-32 group-hover:opacity-100">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
