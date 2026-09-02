"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Reuse CoreCapabilities.jsx as the reference for content and card count —
// same 12 items as that section, instead of maintaining a second,
// out-of-sync copy here.
import { CAPABILITIES } from "./CoreCapabilities";

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

// Scroll-locked horizontal reel: the section pins to the viewport for the
// height of `scrollDistance` extra vertical scroll, during which that scroll
// input is remapped to horizontal movement of the 12-card track. Once the
// track has fully panned, the section unpins and the page continues
// scrolling normally — the same sticky-wrapper idiom already used for the
// Hero section in app/page.jsx, but driven by scroll progress instead of a
// fixed offset.
export default function Services() {
    const containerRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(0);

    useLayoutEffect(() => {
        const measure = () => {
            const viewport = viewportRef.current;
            const track = trackRef.current;
            if (!viewport || !track) return;
            setScrollDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
        };

        measure();
        window.addEventListener("resize", measure);

        const observer = new ResizeObserver(measure);
        if (trackRef.current) observer.observe(trackRef.current);
        if (viewportRef.current) observer.observe(viewportRef.current);

        return () => {
            window.removeEventListener("resize", measure);
            observer.disconnect();
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    return (
        <section id="ascendus-services" className="w-full bg-white">
            <div ref={containerRef} className="relative" style={{ height: `calc(100vh + ${scrollDistance}px)` }}>
                <div className="sticky top-0 h-screen flex flex-col justify-center gap-16 py-8 sm:py-16 px-6 sm:px-16 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2 max-w-[808px]"
                    >
                        <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold leading-[1.4] tracking-[0.28px]">
                            Everything an Enterprise Needs to Run on Modern Technology
                        </h2>
                        <p className="text-[#55595E] text-lg font-light leading-[1.5] max-w-[600px]">
                            A complete technology foundation that connects strategy, systems, security, data, and
                            operations to help enterprises scale with confidence.
                        </p>
                    </motion.div>

                    <div ref={viewportRef} className="w-full overflow-hidden">
                        <motion.div ref={trackRef} style={{ x }} className="flex gap-4">
                            {CAPABILITIES.map((item) => (
                                <div key={item.title} className={`shrink-0 ${CARD_WIDTH_CLASSES}`}>
                                    <ServiceCard item={item} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
