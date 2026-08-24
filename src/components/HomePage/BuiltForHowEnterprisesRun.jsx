"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import card1Bg from "@/assets/HomePage/BuiltForHowEnterprisesRun/card1-bg.png";
import card2Bg from "@/assets/HomePage/BuiltForHowEnterprisesRun/card2-bg.png";
import card3Bg from "@/assets/HomePage/BuiltForHowEnterprisesRun/card3-bg.png";
import card4Bg from "@/assets/HomePage/BuiltForHowEnterprisesRun/card4-bg.png";

const CARDS = [
    {
        title: "A Resource Ratio Built for Coverage",
        image: card1Bg,
        body: "We staff engagements at a ratio designed for faster turnaround and consistent coverage, not stretched thin across too many accounts.",
        summary: "The right team stays focused on your business and its priorities.",
    },
    {
        title: "Executive Governance, On a Schedule",
        image: card2Bg,
        body: "Regular governance reviews keep the engagement aligned with your business priorities, not just ticket counts.",
        summary: "Clear reviews help track progress, priorities, and business outcomes.",
    },
    {
        title: "One Point of Contact",
        image: card3Bg,
        body: "A single point of contact simplifies communication and keeps issues moving without getting lost between teams.",
        summary: "One dedicated contact keeps communication clear and action moving.",
    },
    {
        title: "Hours That Roll Forward",
        image: card4Bg,
        body: "Unused contracted hours carry forward, so you get the full value of your engagement.",
        summary: "Your investment stays flexible and aligned with your changing needs.",
    },
];

export default function BuiltForHowEnterprisesRun() {
    const [active, setActive] = useState(0);

    return (
        <section className="w-full bg-white pt-10 pb-10 sm:pt-16 sm:pb-16 px-6 sm:px-[64px] border-b border-[#c7c7c7]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-1 max-w-[714px] mx-auto text-center mb-10 sm:mb-14"
            >
                <h2 className="text-[#10161d] text-[28px] font-medium">
                    Built for How Enterprises <span className="text-[#0061AF]">Actually Run</span>
                </h2>
                <p className="text-[#4a5568] text-lg font-light">
                    The details that keep an engagement predictable long after the contract is signed.
                </p>
            </motion.div>

            <div className="w-full overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:h-[480px]">
                    {CARDS.map((card, index) => {
                        const isActive = index === active;
                        const dimBottom = index % 2 === 0; // even index → dark bottom, title bottom

                        return (
                            <button
                                key={card.title}
                                type="button"
                                onClick={() => setActive(index)}
                                aria-expanded={isActive}
                                className={`group relative overflow-hidden text-left border border-[#b1b1b1] flex flex-col sm:flex-row transition-[flex-grow,flex-shrink,flex-basis,height] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] w-full h-[180px] sm:h-full
                                    ${isActive ? "h-[440px] sm:flex-[1_1_0%]" : "sm:flex-[0_0_clamp(110px,20vw,200px)]"}`}
                            >
                                <div className="relative shrink-0 overflow-hidden w-full h-[160px] sm:h-full sm:w-[clamp(110px,20vw,200px)]">
                                    <Image
                                        src={card.image}
                                        alt=""
                                        fill
                                        className={`object-cover transition-transform duration-500 ${isActive ? "" : "group-hover:scale-105"}`}
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-b ${dimBottom ? "from-transparent to-black/70" : "from-black/70 to-transparent"
                                            } transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}
                                    />
                                    <p
                                        className={`absolute left-3 right-3 sm:left-4 sm:right-4 text-white font-medium leading-[1.3] transition-[top,font-size] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${isActive
                                            ? "top-[calc(100%-6.5rem)] text-lg"
                                            : dimBottom
                                                ? "top-[calc(100%-3.25rem)] text-base"
                                                : "top-3 text-base"
                                            }`}
                                    >
                                        {card.title}
                                    </p>
                                </div>

                                <div
                                    aria-hidden={!isActive}
                                    className={`hidden sm:flex flex-1 min-w-0 basis-0 flex-col justify-between gap-8 overflow-hidden p-6 sm:p-8 text-[#4a5568] text-base sm:text-lg leading-[1.6] transition-opacity duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
                                        ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                                >
                                    <p className="font-light">{card.body}</p>
                                    <p className="font-medium text-[#10161d]">{card.summary}</p>
                                </div>

                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                                        className="flex sm:hidden flex-col gap-4 p-6 text-[#4a5568] text-base leading-[1.6]"
                                    >
                                        <p className="font-light">{card.body}</p>
                                        <p className="font-medium text-[#10161d]">{card.summary}</p>
                                    </motion.div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
