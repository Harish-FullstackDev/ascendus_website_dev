"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import imgManufacturing from "@/assets/HomePage/manufacturing.webp";
import imgLogistics from "@/assets/HomePage/logistics.webp";
import imgQuality from "@/assets/HomePage/quality-control.webp";
import iconChevron from "@/assets/HomePage/icons/chevron-left-16.svg";
import iconButtonArrow from "@/assets/HomePage/icons/arrow-right-16.svg";
import iconExploreArrow from "@/assets/HomePage/icons/arrow-right-18.svg";

// Add more industries here; the arrows enable themselves once the list is
// wider than the track.
const INDUSTRIES = [
    {
        eyebrow: "Manufacturing",
        value: "30%",
        label: "Faster Order-to-Cash Cycle",
        linkLabel: "Explore",
        image: imgManufacturing,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.96) 100%)",
    },
    {
        eyebrow: "Logistics",
        value: "25%",
        label: "Optimized Supply Chain Management",
        linkLabel: "Discover",
        image: imgLogistics,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.97) 100%)",
    },
    {
        eyebrow: "Quality Control",
        value: "20%",
        label: "Enhanced Product Standards",
        linkLabel: "Learn More",
        image: imgQuality,
        scrim: "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.92) 100%)",
    },
];

const CARD_GAP = 24;

function IndustryCard({ industry }) {
    return (
        <Link
            href="/industries/"
            className="group relative flex h-[340px] w-[85%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[16px] bg-[#030712] p-6 sm:w-[calc((100%-24px)/2)] lg:h-[378px] lg:w-[calc((100%-48px)/3)]"
        >
            <Image
                src={industry.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 422px, (min-width: 640px) 50vw, 85vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0" style={{ backgroundImage: industry.scrim }} />

            <div className="relative flex flex-col gap-3 pb-[2px] pt-[5.5px]">
                <div className="flex flex-col">
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#68c2f2]">
                        {industry.eyebrow}
                    </p>
                    <p className="text-[32px] font-medium leading-[1.2] text-white">{industry.value}</p>
                    <p className="text-base font-normal capitalize leading-[1.5] text-[#e5e7eb]">{industry.label}</p>
                </div>

                <span className="flex items-center gap-2 text-[14px] font-semibold leading-[24px] text-white">
                    {industry.linkLabel}
                    <span className="flex size-[30px] items-center justify-center">
                        <Image
                            src={iconExploreArrow}
                            alt=""
                            className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </span>
                </span>
            </div>
        </Link>
    );
}

// Section 6 — white under the dark band, full 64 on both edges. Figma
// (633:5056) gives it 56px top/bottom and a 1px rule on top; the user asked
// for 64. Its body copy is the SAP section's, word for word — kept and
// flagged.
export default function IndustryExpertiseForRealWorldImpact() {
    const trackRef = useRef(null);
    const [canScroll, setCanScroll] = useState({ back: false, forward: false });

    const updateArrows = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        setCanScroll({
            back: track.scrollLeft > 1,
            forward: track.scrollLeft + track.clientWidth < track.scrollWidth - 1,
        });
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return undefined;
        updateArrows();
        const observer = new ResizeObserver(updateArrows);
        observer.observe(track);
        track.addEventListener("scroll", updateArrows, { passive: true });
        return () => {
            observer.disconnect();
            track.removeEventListener("scroll", updateArrows);
        };
    }, [updateArrows]);

    const scrollByCard = (direction) => {
        const track = trackRef.current;
        const card = track?.firstElementChild;
        if (!card) return;
        track.scrollBy({ left: direction * (card.getBoundingClientRect().width + CARD_GAP), behavior: "smooth" });
    };

    return (
        <section className="w-full border-t border-[#8695a7] bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-8"
            >
                <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                    <div className="flex flex-col gap-3 lg:w-[482px] lg:shrink-0">
                        <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            Industries
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0f172a]">
                            Industry expertise
                            <br /> for real-world impact.
                        </h2>
                    </div>

                    <p className="max-w-[473px] pt-[4.7px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                        Grow your SAP foundation with modern services to help you transition to S/4HANA, optimize
                        operations and maximize your SAP investment.
                    </p>

                    <Link
                        href="/industries/"
                        className="group inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-[8px] border border-[#0061af] bg-[#0061af] px-[13px] text-base font-normal capitalize leading-[1.5] text-white transition-colors duration-300 hover:bg-[#005192]"
                    >
                        Explore Industries
                        <Image
                            src={iconButtonArrow}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="flex w-full flex-col items-end gap-6">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            aria-label="Previous industries"
                            disabled={!canScroll.back}
                            onClick={() => scrollByCard(-1)}
                            className="flex size-8 items-center justify-center rounded-full border border-[#1e1e1e] transition-colors enabled:cursor-pointer enabled:hover:bg-black/5 disabled:opacity-40"
                        >
                            <Image src={iconChevron} alt="" className="size-4" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next industries"
                            disabled={!canScroll.forward}
                            onClick={() => scrollByCard(1)}
                            className="flex size-8 items-center justify-center rounded-full border border-[#1e1e1e] transition-colors enabled:cursor-pointer enabled:hover:bg-black/5 disabled:opacity-40"
                        >
                            <Image src={iconChevron} alt="" className="size-4 -scale-x-100" />
                        </button>
                    </div>

                    <div
                        ref={trackRef}
                        className="flex w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        style={{ gap: CARD_GAP }}
                    >
                        {INDUSTRIES.map((industry) => (
                            <IndustryCard key={industry.eyebrow} industry={industry} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
