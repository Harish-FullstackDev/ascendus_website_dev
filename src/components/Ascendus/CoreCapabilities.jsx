"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import enterpriseTransformationImg from "@/assets/HomePage/CoreCapabilities/card-enterprise-transformation.png";
import artificialIntelligenceImg from "@/assets/HomePage/CoreCapabilities/card-artificial-intelligence.png";
import cloudInfrastructureImg from "@/assets/HomePage/CoreCapabilities/card-cloud-infrastructure.png";
import cardArrowIcon from "@/assets/HomePage/CoreCapabilities/card-arrow-icon.svg";

import dataIntelligenceImg from "@/assets/WhatWeDo/Data Inteligent/new/hero_bg.jpg";
import digitalEngineeringImg from "@/assets/WhatWeDo/Digital Engineering/new/hero_bg.jpg";
import customerExperienceImg from "@/assets/WhatWeDo/Customer Experience/new/hero_bg.jpg";
import experienceDesignImg from "@/assets/WhatWeDo/Experience Design/new/Experience_Design.jpg";
import intelligentAutomationImg from "@/assets/WhatWeDo/Intelligent Automation/new/Intelligent_Automation.jpg";
import cybersecurityImg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/new/Cybersecurity.jpg";
import managedServicesImg from "@/assets/WhatWeDo/Managed Services/new/hero_bg.jpg";
import businessAdvisoryImg from "@/assets/WhatWeDo/Business Advisory/new/hero_bg.jpg";
import innovationImg from "@/assets/WhatWeDo/Innovation & Emerging Technologies/new/Innovation.jpg";

// Same 12 entries, same order, as the "What We Do" navbar dropdown
// (Navbar.jsx) — that list is the source of truth for hrefs here.
// Exported so other Ascendus sections (e.g. Services.jsx) can reuse the same
// content/card count instead of maintaining a second copy.
export const CAPABILITIES = [
    {
        title: "Enterprise Transformation",
        desc: "Infrastructure that scales with the business, not against it.",
        href: "/services/enterpriseTransformation",
        image: enterpriseTransformationImg,
    },
    {
        title: "Artificial Intelligence",
        desc: "AI that moves enterprise decisions, not just enterprise data.",
        href: "/whatWeDo/artificial-intelligence",
        image: artificialIntelligenceImg,
    },
    {
        title: "Cloud & Infrastructure",
        desc: "Infrastructure built to carry the weight of enterprise growth.",
        href: "/whatWeDo/cloud-infrastructure",
        image: cloudInfrastructureImg,
    },
    {
        title: "Data & Intelligence",
        desc: "Data that answers the questions your business is actually asking.",
        href: "/whatWeDo/data-intelligence",
        image: dataIntelligenceImg,
    },
    {
        title: "Digital Engineering",
        desc: "Engineering scalable digital products and enterprise applications.",
        href: "/whatWeDo/digital-engineering",
        image: digitalEngineeringImg,
    },
    {
        title: "Customer Experience",
        desc: "Customer experiences that convert loyalty into revenue.",
        href: "/whatWeDo/customer-experience",
        image: customerExperienceImg,
    },
    {
        title: "Experience Design",
        desc: "Designing intuitive digital experiences that people love to use.",
        href: "/whatWeDo/experience-design",
        image: experienceDesignImg,
    },
    {
        title: "Intelligent Automation",
        desc: "Automation that removes work, not just paperwork.",
        href: "/whatWeDo/intelligent-automation",
        image: intelligentAutomationImg,
    },
    {
        title: "Cybersecurity & Digital Trust",
        desc: "Security architecture protecting enterprise systems and data at speed.",
        href: "/whatWeDo/cybersecurity-digital-trust",
        image: cybersecurityImg,
    },
    {
        title: "Managed Services",
        desc: "Enterprise systems that keep running, without you having to manage them.",
        href: "/whatWeDo/managed-services",
        image: managedServicesImg,
    },
    {
        title: "Business Advisory",
        desc: "Strategy that survives contact with implementation.",
        href: "/whatWeDo/business-advisory",
        image: businessAdvisoryImg,
    },
    {
        title: "Innovation & Emerging Technologies",
        desc: "Next-generation technology, evaluated for real enterprise value.",
        href: "/whatWeDo/innovation-emerging-technologies",
        image: innovationImg,
    },
];

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(CAPABILITIES.length / PAGE_SIZE);

function CapabilityCard({ item }) {
    return (
        <Link
            href={item.href}
            className="group block bg-white border border-[#dadada] w-full"
        >
            <div className="flex flex-col gap-6 p-6">
                <div className="flex items-start justify-between gap-2">
                    <h2 className="flex-1 text-[#10161d] text-xl font-medium leading-[1.4]">
                        {item.title}
                    </h2>
                    <div className="shrink-0 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
                        <div className="flex items-center justify-end overflow-hidden pr-2.5 rounded-full bg-white border border-[#dadada] size-9">
                            <Image src={cardArrowIcon} alt="" className="size-3.5" />
                        </div>
                    </div>
                </div>
                <p className="text-[#4a5568] text-base font-light leading-[1.5]">
                    {item.desc}
                </p>
            </div>
            <div className="relative w-full aspect-[11/6] overflow-hidden">
                <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
        </Link>
    );
}

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

export function ArrowButton({ direction, disabled, onClick }) {
    return (
        <button
            type="button"
            aria-label={direction === -1 ? "Previous" : "Next"}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center size-10 transition-all duration-300 ${disabled ? "opacity-30 cursor-not-allowed" : "hover:scale-110"
                }`}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`size-6 text-[#10161d] ${direction === -1 ? "-scale-x-100" : ""}`}
            >
                <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default function CoreCapabilities() {
    const [page, setPage] = useState(0);
    const mobileScrollerRef = useRef(null);
    const mobileArrows = useCarouselArrows(mobileScrollerRef);

    return (
        <section id="core-capabilities" className="w-full bg-white pt-8 pb-16 sm:pt-8 sm:pb-16 px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-1 w-full mx-auto text-center mb-8"
            >
                <h2 className="text-[#10161d] text-[28px] font-medium">
                    Everything an Enterprise Technology Estate Needs, Under <br />
                    <span className="text-[#0061AF]">One Roof</span>
                </h2>

            </motion.div>

            {/* ---------- Desktop: paged, 3-cards-at-a-time track ---------- */}
            <div className="hidden lg:flex flex-col items-end gap-4">
                <div className="flex items-center gap-2">
                    <ArrowButton direction={-1} disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))} />
                    <ArrowButton
                        direction={1}
                        disabled={page === PAGE_COUNT - 1}
                        onClick={() => setPage((p) => Math.min(PAGE_COUNT - 1, p + 1))}
                    />
                </div>

                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ width: `${PAGE_COUNT * 100}%`, transform: `translateX(-${page * (100 / PAGE_COUNT)}%)` }}
                    >
                        {Array.from({ length: PAGE_COUNT }).map((_, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="flex gap-[42px] shrink-0"
                                style={{ width: `${100 / PAGE_COUNT}%` }}
                            >
                                {CAPABILITIES.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE).map((item) => (
                                    <div key={item.title} className="flex-1 min-w-0">
                                        <CapabilityCard item={item} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------- Mobile / tablet: horizontal snap-scroll ---------- */}
            <div className="lg:hidden flex flex-col gap-6">
                <div
                    ref={mobileScrollerRef}
                    onScroll={mobileArrows.update}
                    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-2 -m-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {CAPABILITIES.map((item) => (
                        <div key={item.title} className="snap-start shrink-0 w-[280px]">
                            <CapabilityCard item={item} />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4">
                    <ArrowButton
                        direction={-1}
                        disabled={!mobileArrows.canPrev}
                        onClick={() => scrollByOneCard(mobileScrollerRef, -1)}
                    />
                    <ArrowButton
                        direction={1}
                        disabled={!mobileArrows.canNext}
                        onClick={() => scrollByOneCard(mobileScrollerRef, 1)}
                    />
                </div>
            </div>
        </section>
    );
}
