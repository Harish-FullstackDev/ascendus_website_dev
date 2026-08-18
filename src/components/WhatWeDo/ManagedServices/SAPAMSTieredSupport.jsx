"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Managed Services/webp/SAP_AMS.webp";

const ITEMS = [
    {
        n: "1",
        title: "SAP Managed Services",
        desc: "We provide ongoing support, monitoring, and optimization your SAP landscape, from ECC to S/4HANA.",
    },
    {
        n: "2",
        title: "Application Management Services",
        desc: "We manage the day-to-day performance, fixes, and enhancements of your enterprise applications",
    },
    {
        n: "3",
        title: "L1/L2/L3 Support",
        desc: "Tiered support that resolves issues at the right level, fast, without unnecessary escalation.",
    },
    {
        n: "4",
        title: "Monitoring & Incident Management",
        desc: "Continuous system monitoring paired with structured incident response that limits business impact.",
    },
];

const ITEM_MIN_HEIGHT = 145;

// Trigger a reveal once an item's top edge crosses the upper-middle
// portion of the viewport.
const REVEAL_ROOT_MARGIN = "0px 0px -45% 0px";

export default function SAPAMSTieredSupport() {
    const itemRefs = useRef([]);

    const [revealed, setRevealed] = useState(() => new Set());

    const [barHeight, setBarHeight] = useState(0);

    /*
     * ------------------------------------------------------------
     * SCROLL REVEAL
     * ------------------------------------------------------------
     *
     * Each item is observed independently.
     * Once an item is revealed, it stays revealed.
     * Scrolling back up does not hide it again.
     */
    useEffect(() => {
        const observers = itemRefs.current.map((el, index) => {
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) return;

                    setRevealed((prev) => {
                        if (prev.has(index)) return prev;

                        const next = new Set(prev);
                        next.add(index);

                        return next;
                    });

                    observer.unobserve(el);
                },
                {
                    threshold: 0,
                    rootMargin: REVEAL_ROOT_MARGIN,
                }
            );

            observer.observe(el);

            return observer;
        });

        return () => {
            observers.forEach((observer) => {
                observer?.disconnect();
            });
        };
    }, []);

    /*
     * ------------------------------------------------------------
     * BLUE PROGRESS BAR
     * ------------------------------------------------------------
     *
     * The blue indicator grows downward as the items are revealed.
     */
    useLayoutEffect(() => {
        const measure = () => {
            if (revealed.size === 0) {
                setBarHeight(0);
                return;
            }

            const lastIndex = Math.max(...revealed);
            const el = itemRefs.current[lastIndex];

            if (!el) return;

            setBarHeight(el.offsetTop + el.offsetHeight);
        };

        measure();

        window.addEventListener("resize", measure);

        return () => {
            window.removeEventListener("resize", measure);
        };
    }, [revealed]);

    return (
        <section className="w-full bg-[#efefef] pb-10 sm:pb-16 pt-10 sm:pt-16">
            <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10">

                {/* =====================================================
                    DESKTOP LAYOUT AREA

                    The card determines the height of this area.
                    Header and image are positioned relative to it.
                   ===================================================== */}
                <div className="relative">

                    {/* =================================================
                        HEADER
                        
                        Figma:
                        Title and description sit level with the
                        upper portion of the card.
                       ================================================= */}
                    <div
                        className="
                            relative
                            z-10
                            pt-6

                            sm:absolute
                            sm:left-0
                            sm:top-0
                            sm:w-[44%]
                            sm:pt-[30px]
                        "
                    >
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="
                                font-heading
                                text-2xl
                                font-normal
                                leading-tight
                                text-black

                                sm:text-[32px]
                            "
                        >
                            SAP AMS &amp; Tiered Support
                        </motion.h2>

                        <p
                            className="
                                mt-3.5
                                text-base
                                font-light
                                text-[#515151]

                                sm:text-lg
                            "
                        >
                            Complete management, support tiers, and incident
                            monitoring.
                        </p>
                    </div>

                    {/* =================================================
                        IMAGE BAND

                        Desktop:
                        - Full viewport width
                        - Vertically centered relative to the card
                        - Behind the card
                       ================================================= */}
                    <div
                        className="
                            relative
                            mt-6
                            h-[220px]
                            w-full
                            overflow-hidden
                            border-y-4
                            border-white

                            sm:absolute
                            sm:left-1/2
                            sm:top-1/2
                            sm:z-0
                            sm:mt-0
                            sm:h-[289px]
                            sm:w-screen
                            sm:-translate-x-1/2
                            sm:-translate-y-1/2
                        "
                    >
                        <Image
                            src={buildingPhoto}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* =================================================
                        CARD
                        
                        This is the main vertical reference.
                        The card stays in normal flow on desktop,
                        allowing its height to determine the section.
                       ================================================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="
                            relative
                            z-20
                            mx-0
                            mt-6
                            w-full
                            bg-white
                            px-6
                            py-8
                            shadow-xl

                            sm:ml-auto
                            sm:mr-0
                            sm:mt-0
                            sm:w-[46.8%]
                            sm:px-10
                            sm:py-12
                        "
                    >
                        <div className="relative flex flex-col">

                            {/* =========================================
                                STATIC TRACK
                               ========================================= */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    top-0
                                    w-[2px]
                                    bg-[#b7dcf4]
                                "
                            />

                            {/* =========================================
                                ACTIVE BLUE TRACK
                               ========================================= */}
                            <motion.div
                                className="
                                    absolute
                                    left-[-1px]
                                    top-0
                                    w-[4px]
                                    rounded-full
                                    bg-[#1b8be0]
                                "
                                animate={{
                                    height: barHeight,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            />

                            {/* =========================================
                                ITEMS
                               ========================================= */}
                            {ITEMS.map((item, index) => {
                                const isRevealed =
                                    revealed.has(index);

                                return (
                                    <div
                                        key={item.n}
                                        ref={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        style={{
                                            minHeight: ITEM_MIN_HEIGHT,
                                        }}
                                        className="
                                            flex
                                            flex-col
                                            justify-center
                                            py-4
                                            pl-6
                                            text-left
                                        "
                                    >
                                        {/* TITLE */}
                                        <p
                                            className={`
                                                text-xl
                                                font-normal
                                                leading-tight
                                                text-black
                                                transition-all
                                                duration-500
                                                ease-out

                                                sm:text-2xl

                                                ${isRevealed
                                                    ? "translate-y-0 opacity-100"
                                                    : "translate-y-3 opacity-40"
                                                }
                                            `}
                                        >
                                            {item.n}. {item.title}
                                        </p>

                                        {/* DESCRIPTION */}
                                        <p
                                            className={`
                                                mt-3
                                                text-sm
                                                leading-6
                                                text-[#515151]
                                                transition-all
                                                delay-100
                                                duration-500
                                                ease-out

                                                sm:text-lg
                                                sm:leading-snug

                                                ${isRevealed
                                                    ? "translate-y-0 opacity-100"
                                                    : "translate-y-3 opacity-40"
                                                }
                                            `}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}