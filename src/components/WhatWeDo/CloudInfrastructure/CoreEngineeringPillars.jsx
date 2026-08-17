"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ResilienceFirst from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/ResilienceFirst.svg";
import Security from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Security.svg";
import Platform from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Platform.svg";
import Built from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Built.svg";

const ITEMS = [
    {
        title: "Resilience First",
        desc: "We design for failure, not just performance, so your critical systems keep running when something goes wrong.",
        icon: ResilienceFirst,
    },
    {
        title: "Security Embedded, Not Bolted On",
        desc: "Security controls are part of the architecture from day one, across every layer of the stack.",
        icon: Security,
    },
    {
        title: "Platform-Agnostic Judgment",
        desc: "We recommend the platform that fits your workload, not the one we happen to resell.",
        icon: Platform,
    },
    {
        title: "Built for SAP Performance",
        desc: "Our infrastructure designs are shaped by what SAP landscapes actually need to run well.",
        icon: Built,
    },
];

const REAL_LEN = ITEMS.length;
const AUTO_SCROLL_INTERVAL = 4000;

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

export default function CoreEngineeringPillars() {
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

    // Auto-advance one slide at a time; reschedules off `active` so it also
    // restarts cleanly from wherever a manual dot-click or drag left off,
    // instead of drifting out of sync with the user's own navigation. Skips
    // a tick while a mouse drag is in progress so autoplay can't yank the
    // track out from under an active drag.
    useEffect(() => {
        const timer = setInterval(() => {
            if (dragState.current) return;
            goTo((active + 1) % REAL_LEN);
        }, AUTO_SCROLL_INTERVAL);
        return () => clearInterval(timer);
    }, [active]);

    // Pointer-drag-to-scroll for desktop (mouse) users; touch keeps native swipe.
    //
    // Scroll-snap and a manually-driven scrollLeft fight each other while the
    // drag is in progress (the browser keeps tugging the track back toward
    // the nearest snap point on every write), which is what made the drag
    // feel sticky/juddery. So snapping is switched off for the duration of
    // the drag and restored on release — settle() (via the existing scroll
    // debounce) then eases the track smoothly into the nearest slide once
    // snapping is back on. Writes are also batched to one per animation
    // frame so a high-poll-rate mouse can't queue up redundant layout work.
    const rafId = useRef(null);

    const onPointerDown = (e) => {
        if (e.pointerType !== "mouse") return;
        const el = trackRef.current;
        if (!el) return;
        dragState.current = { startX: e.clientX, startScroll: el.scrollLeft };
        el.style.scrollSnapType = "none";
        el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
        if (e.pointerType !== "mouse" || !dragState.current) return;
        const clientX = e.clientX;
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => {
            const el = trackRef.current;
            if (!el || !dragState.current) return;
            el.scrollLeft = dragState.current.startScroll - (clientX - dragState.current.startX);
        });
    };

    const endDrag = (e) => {
        if (e.pointerType !== "mouse") return;
        if (rafId.current) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
        }
        dragState.current = null;
        const el = trackRef.current;
        if (el) el.style.scrollSnapType = "x mandatory";
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
                <h2 className="text-[#16171a] text-2xl font-medium">Core Engineering Pillars</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    What sets our cloud and infrastructure delivery apart
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
                className="w-full max-w-[14000px] flex gap-6 sm:gap-10 overflow-x-auto cursor-grab active:cursor-grabbing select-none touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [scroll-snap-type:x_mandatory]"
            >
                {SLIDES.map((item, index) => {
                    const isClone = index < REAL_LEN || index >= REAL_LEN * 2;
                    return (
                        <div
                            key={`slide-${index}`}
                            aria-hidden={isClone || undefined}
                            className="shrink-0 w-[80%] sm:w-[40%] flex flex-col gap-6 py-4 [scroll-snap-align:start] px-10"
                        >
                            <div className="flex items-start gap-10">
                                <div className="relative shrink-0 size-[50px] sm:size-[60px]">
                                    <Image src={item.icon} alt="" fill className="object-contain" draggable={false} />
                                </div>
                                <div className="w-px h-[50px] sm:h-[60px] shrink-0 bg-[#7F7F7F]" />
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
                        className={`size-[8px] rounded-full border-[0.5px] transition-colors ${index === active ? "bg-[#0061af] border-[#0061af]" : "border-black"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}

