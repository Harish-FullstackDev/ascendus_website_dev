"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrowIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/solar_arrow-up-linear.svg";
import leftArrow from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Section2_LeftArrow.svg";
import rightArrow from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Section2_RightArrow.svg";
import ellipseIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Ellipse 440.svg";
import cloudYesIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/iconamoon_cloud-yes-thin.svg";
import cloudAddIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/streamline_cloud-add.svg";
import cloudSyncIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/material-symbols-light_cloud-sync-outline.svg";

const CARDS = [
    {
        title: "Cloud Readiness Assessment",
        desc: "Evaluate your applications, data, and infrastructure to build a clear, low-risk path to the cloud.",
        icon: cloudYesIcon,
    },
    {
        title: "Cloud Strategy Development",
        desc: "Define the right mix of public, private, and hybrid cloud to match your business and technical goals.",
        icon: cloudAddIcon,
    },
    {
        title: "Cloud Adoption Roadmap",
        desc: "Sequence migrations, modernization, and governance into a phased plan your teams can execute.",
        icon: cloudSyncIcon,
    },
    {
        title: "Cloud Cost Optimization",
        desc: "Right-size resources and eliminate waste with continuous FinOps practices built into every environment.",
        icon: null,
    },
     {
        title: "Cloud Governance & Compliance",
        desc: "Put policy, access, and security guardrails in place so teams can move fast without introducing risk.",
        icon: null,
    },
    {
        title: "Cloud Migration Support",
        desc: "Move workloads with minimal downtime through a proven, well-tested migration process end to end.",
        icon: null,
    },
];

export default function CloudConsulting() {
    const trackRef = useRef(null);

    const scrollByCard = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const amount = card ? card.offsetWidth + 20 : 320;
        el.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-[80px] max-w-[1637px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[285px] shrink-0"
                >
                    <h2 className="text-[#16171a] text-2xl font-medium">Cloud Consulting</h2>
                    <p className="text-black text-lg font-light">Develop a Cloud Strategy That Drives Growth</p>
                    <p className="text-[#6c6c6c] text-lg font-light">
                        Create a cloud adoption roadmap aligned with your business goals, technology landscape, and
                        digital transformation initiatives.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6 w-full min-w-0">
                    <div
                        ref={trackRef}
                        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
                    >
                        {CARDS.map((card, index) => (
                            <motion.div
                                key={card.title}
                                data-card
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                                className="snap-start shrink-0 w-[260px] sm:w-[314px] h-[339px] bg-white border border-[#7f7f7f]/60 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-center text-center px-6 py-10"
                            >
                                {card.icon && (
                                    <div className="relative shrink-0 size-11 mb-6">
                                        <Image src={ellipseIcon} alt="" fill className="object-contain" />
                                        <Image src={card.icon} alt="" fill className="object-contain p-[10px]" />
                                    </div>
                                )}
                                <p className={`text-black text-2xl font-normal ${!card.icon ? "mt-14" : ""}`}>
                                    {card.title}
                                </p>
                                <p className="text-[#6c6c6c] text-lg font-light mt-6">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center lg:justify-end gap-6">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => scrollByCard(-1)}
                            className="flex items-center justify-center size-12 sm:size-[60px] transition-transform hover:scale-110"
                        >
                            <Image src={leftArrow} alt="" width={50} height={50} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => scrollByCard(1)}
                            className="flex items-center justify-center size-12 sm:size-[60px] transition-transform hover:scale-110"
                        >
                            <Image src={rightArrow} alt="" width={50} height={50} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-px w-full bg-black/20 mt-10"></div>
        </section>
    );
}
