"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Managed Services/Section3_Image.svg";

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
    }, {
        n: "4",
        title: "Monitoring & Incident Management",
        desc: "Continuous system monitoring paired with structured incident response that limits business impact.",
    },
];

const AUTO_INTERVAL = 3000;
const ITEM_MIN_HEIGHT = 145;

export default function SAPManagedServices() {
    const [active, setActive] = useState(0);

    const pausedRef = useRef(false);
    const itemRefs = useRef([]);

    const [barRect, setBarRect] = useState({
        top: 4,
        height: ITEM_MIN_HEIGHT - 8,
    });

    useEffect(() => {
        const id = setInterval(() => {
            if (pausedRef.current) return;

            setActive((prev) => (prev + 1) % ITEMS.length);
        }, AUTO_INTERVAL);

        return () => clearInterval(id);
    }, []);

    useLayoutEffect(() => {
        const measure = () => {
            const el = itemRefs.current[active];
            if (!el) return;

            setBarRect({
                top: el.offsetTop + 4,
                height: el.offsetHeight - 8,
            });
        };

        measure();

        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [active]);

    return (
        <section className="w-full sm:h-[750px] overflow-hidden  bg-[#efefef] pb-10 sm:pb-16">
            <div className="relative mx-auto max-w-[1280px] pt-10 sm:mt-10 sm:pt-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="px-6 text-2xl font-normal leading-tight text-black sm:px-[100px] sm:text-[32px]"
                >
                    SAP AMS & Tiered Support
                </motion.h2>
                <p className="px-6 text-base font-light text-black sm:px-[100px] sm:text-lg">
                    Complete management, support tiers, and incident monitoring.
                </p>
            </div>

            <div className="relative mt-10 sm:mt-[60px]">

                {/* Full-width image — naturally full-width (no vw hacks), since
                    the section already spans the page edge to edge */}
                <div className="relative w-full h-[220px] overflow-hidden border-y-4 border-white sm:h-[289px]">
                    <Image
                        src={buildingPhoto}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Card positioning layer — capped to the 1280px content grid on desktop,
                    normal block on mobile so the card overlaps the image via flow + negative margin */}
                <div className="relative sm:absolute sm:inset-0 sm:mx-auto sm:w-full sm:max-w-[1280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="
                            relative
                            z-20
                            mx-6
                            
                            w-auto
                            bg-white
                            px-6
                            py-8
                            shadow-xl
 
                            sm:absolute
                            sm:top-1/2
                            sm:right-[70px]
                            sm:mx-0
                            sm:w-[600px]
                            sm:-translate-y-1/2
                            sm:px-10
                            sm:py-12
 
                            lg:w-[620px]
                        "
                    >
                        <div
                            className="relative flex flex-col"
                            onMouseEnter={() => (pausedRef.current = true)}
                            onMouseLeave={() => (pausedRef.current = false)}
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#b7dcf4]" />

                            <motion.div
                                className="absolute left-[-1px] w-[4px] rounded-full bg-[#1b8be0]"
                                animate={{
                                    top: barRect.top,
                                    height: barRect.height,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 28,
                                }}
                            />

                            {ITEMS.map((item, index) => {
                                const opacity =
                                    index === active
                                        ? 1
                                        : index === active + 1 ||
                                            index === active - 1
                                            ? 0.45
                                            : 0.18;

                                const isActive = index === active;

                                return (
                                    <button
                                        key={item.n}
                                        ref={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        onClick={() => setActive(index)}
                                        style={{
                                            minHeight: ITEM_MIN_HEIGHT,
                                        }}
                                        className="flex flex-col justify-center py-4 pl-6 text-left"
                                    >
                                        <motion.p
                                            animate={{
                                                opacity,
                                                color: isActive
                                                    ? "#000000"
                                                    : "#5a5a5a",
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                            className="text-xl font-normal leading-tight sm:text-[30px]"
                                        >
                                            {item.n}. {item.title}
                                        </motion.p>

                                        <motion.p
                                            animate={{
                                                opacity: opacity * 0.95,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                            className="mt-3 text-sm leading-6 text-[#7a7a7a] sm:text-[16px] sm:leading-7"
                                        >
                                            {item.desc}
                                        </motion.p>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
