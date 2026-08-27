"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Reuse CoreCapabilities.jsx as the reference for content, card count, and
// the arrow button — same 12 items and same arrow control as that section,
// instead of maintaining a second, out-of-sync copy here.
import { CAPABILITIES, ArrowButton } from "./CoreCapabilities";

const CARD_WIDTH_CLASSES = "w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]";

function ServiceCard({ item }) {
    const content = (
        <div className="group relative w-full overflow-hidden aspect-[7/8]">
            <Image
                src={item.image}
                alt=""
                fill
                className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/10 transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/45 group-hover:to-black/25 pointer-events-none" />

            {/* Content anchored to the top of the card */}
            <div className="relative z-10 flex flex-col items-start p-6 sm:p-8">
                <h2 className="text-white text-2xl font-semibold leading-[1.4]">{item.title}</h2>

                {/* Description stays hidden until hover, then reveals with a smooth height + fade animation */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out w-full">
                    <p className="overflow-hidden text-white/90 text-base font-light leading-[1.5] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.desc}
                    </p>
                </div>
            </div>
        </div>
    );

    return item.href ? (
        <Link href={item.href} className="block w-full">
            {content}
        </Link>
    ) : (
        content
    );
}

const AUTOPLAY_INTERVAL = 4000;

export default function Services() {
    const scrollerRef = useRef(null);
    const autoplayRef = useRef(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const updateArrows = () => {
        const el = scrollerRef.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 4);
        setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
        updateArrows();
    }, []);

    const scroll = (direction) => {
        const el = scrollerRef.current;
        if (!el) return;
        const first = el.children[0];
        const second = el.children[1];
        const step = first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
        el.scrollBy({ left: direction * step, behavior: "smooth" });
    };

    // Auto-advance the carousel, looping back to the start once it reaches
    // the end. Paused on hover/touch so it doesn't fight a user mid-scroll.
    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    };

    const startAutoplay = () => {
        stopAutoplay();
        autoplayRef.current = setInterval(() => {
            const el = scrollerRef.current;
            if (!el) return;
            const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
            if (atEnd) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                scroll(1);
            }
        }, AUTOPLAY_INTERVAL);
    };

    useEffect(() => {
        startAutoplay();
        return stopAutoplay;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id="ascendus-services" className="w-full bg-white pt-8 pb-8 sm:p-16 px-6">
            <div className="w-full flex flex-col gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div className="flex flex-col gap-2 max-w-[808px]">
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold leading-[1.4] tracking-[0.28px]">
                            Everything an Enterprise Needs to Run on Modern Technology
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.5] max-w-[600px]">
                            A complete technology foundation that connects strategy, systems, security, data, and
                            operations to help enterprises scale with confidence.
                        </p>
                    </div>

                    {/* Same arrow control as CoreCapabilities — no pill wrapper */}
                    <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
                        <ArrowButton
                            direction={-1}
                            disabled={!canPrev}
                            onClick={() => {
                                stopAutoplay();
                                scroll(-1);
                                startAutoplay();
                            }}
                        />
                        <ArrowButton
                            direction={1}
                            disabled={!canNext}
                            onClick={() => {
                                stopAutoplay();
                                scroll(1);
                                startAutoplay();
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    ref={scrollerRef}
                    onScroll={updateArrows}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                    onTouchStart={stopAutoplay}
                    onTouchEnd={startAutoplay}
                    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-1 -m-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {CAPABILITIES.map((item) => (
                        <div key={item.title} className={`snap-start shrink-0 ${CARD_WIDTH_CLASSES}`}>
                            <ServiceCard item={item} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
