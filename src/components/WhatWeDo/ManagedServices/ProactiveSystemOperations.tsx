"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import monitoringIcon from "@/assets/WhatWeDo/Managed Services/icons/Section_24_7Monitoring.svg";
import performanceIcon from "@/assets/WhatWeDo/Managed Services/icons/Section_PerformanceManagement.svg";
import capacityIcon from "@/assets/WhatWeDo/Managed Services/icons/Section_CapacityManagement.svg";
import incidentIcon from "@/assets/WhatWeDo/Managed Services/icons/Section_IncidentManagement.svg";
import availabilityIcon from "@/assets/WhatWeDo/Managed Services/icons/Section_AvailabilityManagement.svg";
import reportingIcon from "@/assets/WhatWeDo/Managed Services/icons/Section_OperationalReporting.svg";

const CARDS = [
    {
        title: "24/7 Monitoring",
        desc: "Continuous monitoring helps identify system issues before they create major business disruption.",
        icon: monitoringIcon,
    },
    {
        title: "Performance Management",
        desc: "We track system performance and identify areas requiring optimization.",
        icon: performanceIcon,
    },
    {
        title: "Capacity Management",
        desc: "We monitor capacity requirements as workloads and business demand change.",
        icon: capacityIcon,
    },
    {
        title: "Incident Management",
        desc: "We identify, respond to, and resolve operational incidents quickly to minimize downtime and business disruption.",
        icon: incidentIcon,
    },
    {
        title: "Availability Management",
        desc: "We track system availability and reliability to ensure critical applications and services remain accessible when needed.",
        icon: availabilityIcon,
    },
    {
        title: "Operational Reporting",
        desc: "We provide regular insights into system health, incidents, performance trends, and operational risks to support informed decisions.",
        icon: reportingIcon,
    },
];

function ArrowIcon({ direction }) {
    return (
        <svg
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-full ${direction === "left" ? "-rotate-90" : "rotate-90"}`}
        >
            <path
                d="M22.7459 37.9097V7.58181M11.373 18.9548L22.7459 7.58181L34.1189 18.9548"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function ProactiveSystemOperations() {
    const trackRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
        updateScrollState();
        const onResize = () => updateScrollState();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const scrollByCard = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const amount = card ? card.offsetWidth + 20 : 335;
        el.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[64px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-[80px] max-w-[1637px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 w-full lg:w-[340px] shrink-0 lg:pt-8"
                >
                    <h2 className="text-[#16171A] text-2xl font-medium">Proactive System Operations</h2>
                    <p className="text-[#55595E] text-xl font-normal">
                        Ongoing operational capabilities that help enterprise systems remain stable, available, and
                        performant.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-6 w-full min-w-0">
                    {/* Cards sized a bit larger than Figma's literal 314x339 so the same
                        "~2 full + one card cut roughly halfway into view" viewport ratio
                        Figma shows holds on real desktop widths — Figma's frame was authored
                        at a narrower reference width, so copying its exact card px left more
                        of the row visible than intended. Tuned against the actual rendered
                        viewport rather than Figma's reference frame width. */}
                    {/* whileInView lives on the track, not per-card: each card's own bounding
                        box stays laid out at full width even while horizontally scrolled out
                        of view inside this overflow-x container, so a per-card viewport
                        trigger would fire (and visibly animate) every time a card scrolls
                        into view — this made cards appear to jump vertically mid-scroll.
                        Triggering once from the track and cascading via variants avoids that
                        while keeping the staggered reveal. */}
                    <motion.div
                        ref={trackRef}
                        onScroll={updateScrollState}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
                    >
                        {CARDS.map((card, index) => (
                            <motion.div
                                key={`${card.title}-${index}`}
                                data-card
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="snap-start shrink-0 w-[260px] sm:w-[335px] h-[280px] sm:h-[360px] bg-white border border-black/[0.35] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-center text-center px-6 sm:px-7 py-7 sm:py-8"
                            >
                                <Image src={card.icon} alt="" width={44} height={44} className="mb-5" />
                                <p className="text-black text-xl sm:text-2xl font-normal">{card.title}</p>
                                <p className="text-[#55595E] text-base sm:text-lg font-light mt-5">{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="flex items-center justify-center lg:justify-end gap-6">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => scrollByCard(-1)}
                            disabled={!canScrollLeft}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollLeft ? "text-black hover:scale-110" : "text-[#D4D6D8]"
                                }`}
                        >
                            <ArrowIcon direction="left" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => scrollByCard(1)}
                            disabled={!canScrollRight}
                            className={`flex items-center justify-center size-9 sm:size-[46px] transition-[color,transform] disabled:cursor-not-allowed ${canScrollRight ? "text-black hover:scale-110" : "text-[#D4D6D8]"
                                }`}
                        >
                            <ArrowIcon direction="right" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}




