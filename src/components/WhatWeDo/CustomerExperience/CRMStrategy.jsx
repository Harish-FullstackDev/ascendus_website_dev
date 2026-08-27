"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import crmAssessmentImg from "@/assets/WhatWeDo/Customer Experience/Section2_Card1.svg";
import crmRoadmapImg from "@/assets/WhatWeDo/Customer Experience/Section2_Card2.svg";
import customerDataStrategyImg from "@/assets/WhatWeDo/Customer Experience/Section2_Card3.svg";
import prevArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section2_arrow.svg";
import nextArrow from "@/assets/WhatWeDo/Customer Experience/Icons/Section2_arrow2.svg";

const CARDS = [
    {
        title: "CRM Assessment",
        desc: "Evaluate your current CRM maturity, adoption, and data quality to uncover quick wins and structural gaps.",
        image: crmAssessmentImg,
    },
    {
        title: "CRM Roadmap",
        desc: "Build a phased CRM roadmap that sequences capabilities, integrations, and change management for lasting adoption.",
        image: crmRoadmapImg,
    },
    {
        title: "Customer Data Strategy",
        desc: "Establish a single source of truth for customer data with clear governance, quality standards, and access controls.",
        image: customerDataStrategyImg,
    },
    {
        title: "Sales & Service Alignment",
        desc: "Align sales, marketing, and service workflows around one shared customer view to eliminate handoff friction.",
        image: crmAssessmentImg,
    },
    {
        title: "CRM Adoption & Change",
        desc: "Drive real user adoption with targeted training, incentives, and workflows that people actually want to use.",
        image: crmRoadmapImg,
    },
    {
        title: "CRM Platform Selection",
        desc: "Evaluate and select the CRM platform that best fits your processes, budget, and growth plans.",
        image: customerDataStrategyImg,
    },
];

function useCarouselArrows(ref, deps = []) {
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const update = () => {
        const el = ref.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
        update();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return { canPrev, canNext, update };
}

function scrollByOneCard(ref, direction) {
    const el = ref.current;
    if (!el) return;
    const first = el.children[0];
    const second = el.children[1];
    const step = first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
}

// Only two icon assets exist: a grey left-pointing arrow and a black
// right-pointing arrow. Both buttons reuse them and mirror as needed so an
// arrow is always grey while disabled and black once it becomes usable,
// regardless of which direction it points.
function Arrow({ direction, disabled, onClick, size }) {
    const icon = disabled ? prevArrow : nextArrow;
    const needsMirror = direction === -1 ? !disabled : disabled;

    return (
        <button
            type="button"
            aria-label={direction === -1 ? "Previous" : "Next"}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center transition-transform duration-300 ${disabled ? "" : "hover:scale-110"
                }`}
            style={{ width: size, height: size }}
        >
            <Image
                src={icon}
                alt=""
                width={size}
                height={size}
                className={needsMirror ? "-scale-x-100" : ""}
            />
        </button>
    );
}

export default function CRMStrategy() {
    const mobileScrollerRef = useRef(null);
    const desktopScrollerRef = useRef(null);

    const mobileArrows = useCarouselArrows(mobileScrollerRef);
    const desktopArrows = useCarouselArrows(desktopScrollerRef);

    return (
        <section className="relative w-full py-14 sm:py-20 px-6 sm:px-[50px] lg:px-0 lg:py-0 overflow-hidden">
            {/* ---------- Mobile / Tablet layout (scrollable cards) ---------- */}
            <div className="flex flex-col gap-10 lg:hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 max-w-[374px] shrink-0"
                >
                    <h2 className="text-[#0d0c22] text-2xl font-semibold">CRM Strategy</h2>
                    <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                        Develop customer relationship management strategies that align sales, marketing, and
                        service operations to deliver consistent customer experiences.
                    </p>
                </motion.div>

                <div className="relative flex-1 flex items-stretch gap-4 ml-[40px]">

                    <div className="flex-1 flex flex-col gap-6 min-w-0">
                        <div
                            ref={mobileScrollerRef}
                            onScroll={mobileArrows.update}
                            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory p-5 -m-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {CARDS.map((card, index) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.1 }}
                                    className="group snap-start shrink-0 w-[280px] bg-white shadow-[1px_1px_18px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:-translate-y-2"
                                >
                                    <div className="relative w-full h-[164px] overflow-hidden">
                                        <Image
                                            src={card.image}
                                            alt=""
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 px-6 py-6">
                                        <p className="text-black text-lg font-semibold">{card.title}</p>
                                        <p className="text-[#3d3d4e] text-base font-light">{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <Arrow
                                direction={-1}
                                size={52}
                                disabled={!mobileArrows.canPrev}
                                onClick={() => scrollByOneCard(mobileScrollerRef, -1)}
                            />
                            <Arrow
                                direction={1}
                                size={52}
                                disabled={!mobileArrows.canNext}
                                onClick={() => scrollByOneCard(mobileScrollerRef, 1)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- Desktop layout (matches Figma, full-bleed & fluid) ---------- */}
            {/*
                This block is a direct, absolutely-positioned child of <section>.
                Because <section> is the nearest positioned ancestor and has no
                padding at the lg breakpoint (lg:px-0 lg:py-0), inset-0 / right-0
                here reaches the section's true edges with zero gap — no leftover
                white strip on any side.
            */}
            <div className="hidden lg:block relative w-full h-[660px]">
                {/* Grey background block, flush to the right edge, full section height */}
                <div className="absolute inset-y-0 left-[45.16%] right-0 bg-[#DBDBDB] overflow-hidden" />

                {/* Blue accent bar, pinned to the true left edge */}
                <div className="absolute left-0 top-[240px] w-[28px] h-[384px] bg-[#2d8ec5]" />

                {/* Heading + description, indented slightly from the edge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute left-6 lg:left-[50px] top-0 md:top-[40px] w-[374px] flex flex-col gap-4"
                >
                    <h2 className="text-[#0d0c22] text-2xl font-semibold">CRM Strategy</h2>
                    <p className="text-[#3d3d4e] text-lg font-light">
                        Develop customer relationship management strategies that align sales, marketing, and
                        service operations to deliver consistent customer experiences.
                    </p>
                </motion.div>

                {/* Card carousel: viewport clips to exactly 3 cards; the other 3
                    sit off-screen and scroll into view one at a time on arrow click.
                    All cards sit flush on the same baseline (per the updated Figma). */}
                <div
                    ref={desktopScrollerRef}
                    onScroll={desktopArrows.update}
                    className="absolute right-0 top-[110px] w-[948px] h-[424px] flex items-start gap-8 overflow-x-auto overflow-y-hidden scroll-smooth pl-5 pt-5 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {CARDS.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.1 }}
                            className="group shrink-0 w-[288px] h-[384px] bg-white overflow-hidden shadow-[1px_1px_16px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="relative w-full h-[164px] overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-2 px-6 py-6">
                                <p className="text-black text-lg font-semibold">{card.title}</p>
                                <p className="text-[#3d3d4e] text-base font-light">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Arrows, centered under the carousel's rightmost edge */}
                <div
                    className="absolute flex items-center justify-center gap-4"
                    style={{ right: 0, top: 130 + 384 + 24, width: 288 }}
                >
                    <Arrow
                        direction={-1}
                        size={64}
                        disabled={!desktopArrows.canPrev}
                        onClick={() => scrollByOneCard(desktopScrollerRef, -1)}
                    />
                    <Arrow
                        direction={1}
                        size={64}
                        disabled={!desktopArrows.canNext}
                        onClick={() => scrollByOneCard(desktopScrollerRef, 1)}
                    />
                </div>
            </div>
        </section>
    );
}

