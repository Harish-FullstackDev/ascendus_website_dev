"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bannerImg from "@/assets/HomePage/IndustriesWeServe/public-sector.png";
import arrowIcon from "@/assets/HomePage/CoreCapabilities/arrow-right.svg";
import bankingImg from "@/assets/HomePage/IndustriesWeServe/banking.png";
import manufacturingImg from "@/assets/HomePage/IndustriesWeServe/manufacturing.png";
import publicSectorImg from "@/assets/HomePage/IndustriesWeServe/public-sector.png";
import oilGasEnergyImg from "@/assets/HomePage/IndustriesWeServe/oil-gas-energy.png";
import retailFmcgImg from "@/assets/HomePage/IndustriesWeServe/retail-fmcg.png";
import healthcareImg from "@/assets/HomePage/IndustriesWeServe/healthcare.png";

const INDUSTRIES = [
    {
        title: "Banking & Financial Services",
        desc: "Core banking and finance operations built on SAP need uptime and audit-readiness in equal measure. We work inside that constraint, not around it.",
        image: bankingImg,
    },
    {
        title: "Manufacturing",
        desc: "From production planning to supply chain visibility, we keep SAP aligned with the realities of the shop floor, not just the boardroom.",
        image: manufacturingImg,
    },
    {
        title: "Public Sector",
        desc: "Government and quasi-government entities carry procurement rules and reporting obligations most vendors treat as an afterthought. We don't.",
        image: publicSectorImg,
    },
    {
        title: "Oil, Gas & Energy",
        desc: "Asset-heavy operations need SAP landscapes that scale with capital projects and hold up under regulatory scrutiny.",
        image: oilGasEnergyImg,
    },
    {
        title: "Retail & FMCG",
        desc: "Retail margins live and die on inventory accuracy and demand visibility. We build SAP environments that keep pace with that pressure.",
        image: retailFmcgImg,
    },
    {
        title: "Healthcare & Life Sciences",
        desc: "We help healthcare organizations manage complex operations with reliable, compliant, and connected SAP solutions.",
        image: healthcareImg,
    },
];

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(INDUSTRIES.length / PAGE_SIZE);

function IndustryCard({ item }) {
    return (
        <div className="group relative h-[280px] sm:h-[340px] w-full border border-[#8794a3] overflow-hidden bg-white">
            {/* Image + gradient — visible by default, fades out on hover (desktop only;
                touch devices have no hover, so mobile keeps this state permanently and
                shows the description underneath instead, see the sm:hidden block below). */}
            <div className="absolute inset-0 transition-opacity duration-500 ease-out sm:group-hover:opacity-0">
                <Image src={item.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
            </div>

            {/* Desktop/tablet: title + description share the card face, description
                fades and slides in on hover as the image fades out. */}
            <div className="hidden sm:flex relative z-10 h-full flex-col justify-between p-8">
                <p className="text-2xl font-medium leading-normal text-white transition-colors duration-500 group-hover:text-[#10161d]">
                    {item.title}
                </p>
                <p className="text-lg font-light leading-normal text-[#4a5568] opacity-0 translate-y-2 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.desc}
                </p>
            </div>

            {/* Mobile: no hover, so title sits over the image and the description
                follows immediately below it, always visible. */}
            <div className="sm:hidden relative z-10 h-full flex flex-col justify-between p-6">
                <p className="text-xl font-medium leading-normal text-white">{item.title}</p>
            </div>
        </div>
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

function ArrowButton({ direction, disabled, onClick }) {
    return (
        <button
            type="button"
            aria-label={direction === -1 ? "Previous" : "Next"}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center size-10 rounded-full border border-[#8794a3] transition-opacity duration-300 ${disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-[#10161d] hover:border-[#10161d] group/arrow"
                }`}
        >
            <Image
                src={arrowIcon}
                alt=""
                className={`size-5 transition-colors ${direction === -1 ? "-scale-y-100 rotate-90" : "rotate-90"} ${disabled ? "" : "group-hover/arrow:invert"
                    }`}
            />
        </button>
    );
}

export default function IndustriesWeServe() {
    const [page, setPage] = useState(0);
    const mobileScrollerRef = useRef(null);
    const mobileArrows = useCarouselArrows(mobileScrollerRef);

    return (
        <section className="w-full">
            {/* Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-[#2E3033] flex flex-col sm:flex-row"
            >
                <div className="flex flex-col justify-center gap-2 px-6 py-10 sm:px-[64px] sm:py-16 sm:w-[390px] shrink-0">
                    <h2 className="text-white text-[28px] font-medium">
                        <span className="text-[#0061AF]">Industries</span> We Serve
                    </h2>
                    <p className="text-white/70 text-lg font-light">
                        Built for the sectors that can&apos;t afford disruption
                    </p>
                </div>
                <div className="relative w-full h-[160px] sm:h-auto sm:w-full">
                    <Image src={bannerImg} alt="" fill className="object-cover" />
                </div>
            </motion.div>

            {/* Cards */}
            <div className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-16">
                {/* Desktop/tablet: paged, 3-cards-at-a-time track */}
                <div className="hidden lg:flex flex-col gap-8">
                    <div className="w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ width: `${PAGE_COUNT * 100}%`, transform: `translateX(-${page * (100 / PAGE_COUNT)}%)` }}
                        >
                            {Array.from({ length: PAGE_COUNT }).map((_, pageIndex) => (
                                <div key={pageIndex} className="flex gap-6" style={{ width: `${100 / PAGE_COUNT}%` }}>
                                    {INDUSTRIES.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE).map((item) => (
                                        <div key={item.title} className="flex-1 min-w-0">
                                            <IndustryCard item={item} />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-6">
                        <div className="flex-1 h-1 bg-[#dadada]">
                            <div
                                className="h-full bg-[#1c5f85] transition-all duration-500 ease-out"
                                style={{ width: `${((page + 1) / PAGE_COUNT) * 100}%` }}
                            />
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                            <ArrowButton direction={-1} disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))} />
                            <ArrowButton
                                direction={1}
                                disabled={page === PAGE_COUNT - 1}
                                onClick={() => setPage((p) => Math.min(PAGE_COUNT - 1, p + 1))}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile / tablet: horizontal snap-scroll */}
                <div className="lg:hidden flex flex-col gap-6">
                    <div
                        ref={mobileScrollerRef}
                        onScroll={mobileArrows.update}
                        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-2 -m-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {INDUSTRIES.map((item) => (
                            <div key={item.title} className="snap-start shrink-0 w-[260px] sm:w-[300px]">
                                <IndustryCard item={item} />
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
            </div>
        </section>
    );
}
