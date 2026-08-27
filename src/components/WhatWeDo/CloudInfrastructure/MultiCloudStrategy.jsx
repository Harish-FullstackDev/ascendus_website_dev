"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import selectProductIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/select-product_svgrepo.com.svg";
import vector1Icon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector-1.svg";
import vector2Icon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector-2.svg";
import vector3Icon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector-3.svg";

const ITEMS = [
    {
        title: "Multi-Cloud Architecture",
        desc: "Distribute workloads across multiple cloud providers to avoid lock-in and match every workload to its best-fit platform.",
        icon: selectProductIcon,
    },
    {
        title: "Cloud Governance",
        desc: "Apply consistent policies, access controls, and standards across every cloud provider in your environment.",
        icon: vector1Icon,
    },
    {
        title: "Cost & Vendor Management",
        desc: "Track and optimize spend across providers while keeping negotiating leverage with every vendor.",
        icon: vector2Icon,
    },
    {
        title: "Disaster Resilience",
        desc: "Spread critical workloads across providers so a single vendor outage never becomes your outage.",
        icon: vector3Icon,
    },
];

const REAL_LEN = ITEMS.length;

// Render three full copies of the list back-to-back and keep the scroll
// position parked in the middle copy. That guarantees a full extra set of
// items trailing (and leading) any real slide, so every item — including
// the last one — always has enough room to scroll into place. (A single
// clone on each side isn't enough once more than one item is visible at a
// time: the last real item's target position can exceed the browser's max
// scrollLeft and gets silently clamped to the same spot as the item before
// it.) Once the user stops scrolling, settle() re-centers back into the
// middle copy so the buffer is replenished on both sides for next time.
const SLIDES = [...ITEMS, ...ITEMS, ...ITEMS];

export default function MultiCloudStrategy() {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);
    const dragState = useRef(null);
    const scrollEndTimer = useRef(null);

    const scrollToSlide = (slideIndex, behavior = "smooth") => {
        const el = trackRef.current;
        const child = el?.children[slideIndex];
        if (!el || !child) return;
        el.scrollTo({ left: child.offsetLeft, behavior });
    };

    // Start on item 0 of the middle copy.
    useEffect(() => {
        scrollToSlide(REAL_LEN, "auto");
        return () => {
            if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
        };
    }, []);

    useEffect(() => {
        const onResize = () => scrollToSlide(REAL_LEN + active, "auto");
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [active]);

    const settle = () => {
        const el = trackRef.current;
        if (!el) return;

        let closest = REAL_LEN;
        let smallestDiff = Infinity;
        for (let i = 0; i < SLIDES.length; i++) {
            const child = el.children[i];
            if (!child) continue;
            const diff = Math.abs(child.offsetLeft - el.scrollLeft);
            if (diff < smallestDiff) {
                smallestDiff = diff;
                closest = i;
            }
        }

        const realIndex = closest % REAL_LEN;
        setActive(realIndex);

        // Not in the middle copy anymore — jump back into it so both a
        // leading and a trailing buffer copy are available again.
        if (closest < REAL_LEN || closest >= REAL_LEN * 2) {
            scrollToSlide(REAL_LEN + realIndex, "auto");
        }
    };

    const handleScroll = () => {
        if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
        scrollEndTimer.current = setTimeout(settle, 120);
    };

    const goTo = (index) => {
        scrollToSlide(REAL_LEN + index);
        setActive(index);
    };

    // Pointer-drag-to-scroll for desktop (mouse) users; touch keeps native swipe.
    const onPointerDown = (e) => {
        if (e.pointerType !== "mouse") return;
        const el = trackRef.current;
        if (!el) return;
        dragState.current = { startX: e.clientX, startScroll: el.scrollLeft };
        el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
        if (e.pointerType !== "mouse" || !dragState.current) return;
        const el = trackRef.current;
        if (!el) return;
        el.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
    };

    const endDrag = (e) => {
        if (e.pointerType !== "mouse") return;
        dragState.current = null;
    };

    return (
        <section className="w-full bg-white py-10 sm:py-16 px-6 sm:px-[50px] flex flex-col items-center gap-10 sm:gap-[62px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[880px] text-center"
            >
                <h2 className="text-[#0d0c22] text-2xl font-semibold">Multi-Cloud Strategy</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Avoid vendor lock-in and maximize flexibility by distributing workloads across the providers
                    that serve them best.
                </p>
            </motion.div>

            <div
                ref={trackRef}
                onScroll={handleScroll}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onPointerCancel={endDrag}
                className="w-full max-w-[1280px] flex gap-6 sm:gap-10 overflow-x-auto cursor-grab active:cursor-grabbing select-none touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory]"
            >
                {SLIDES.map((item, index) => {
                    const isClone = index < REAL_LEN || index >= REAL_LEN * 2;
                    return (
                        <div
                            key={`slide-${index}`}
                            aria-hidden={isClone || undefined}
                            className="shrink-0 w-[80%] sm:w-[55%] md:w-[42%] lg:w-[32%] flex flex-col gap-6 py-4 border-b border-[#d9d9d9] [scroll-snap-align:start]"
                        >
                            <div className="flex items-start gap-5">
                                <div className="relative shrink-0 size-[50px] sm:size-[60px]">
                                    <Image src={item.icon} alt="" fill className="object-contain" draggable={false} />
                                </div>
                                <div className="w-px self-stretch bg-[#d9d9d9]" />
                                <div className="flex flex-col gap-3">
                                    <p className="text-black text-xl sm:text-2xl font-normal">{item.title}</p>
                                    <p className="text-[#7f7f7f] text-base sm:text-lg font-light">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center gap-[10px]">
                {ITEMS.map((item, index) => (
                    <button
                        key={item.title}
                        type="button"
                        aria-label={`Go to ${item.title}`}
                        onClick={() => goTo(index)}
                        className={`size-[8px] rounded-full border-[0.5px] transition-colors ${
                            index === active ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
