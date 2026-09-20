"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ksaImg from "@/assets/Contact-us/KSA_Location.webp";
import indiaImg from "@/assets/Contact-us/India_Location.webp";

// Figma draws both cards at 600x202 inside a 1232 container — a ~3:1 band that
// is kept as an aspect ratio so the photos scale with the column instead of
// locking to 202px.
const LOCATIONS = [
    {
        href: "https://maps.app.goo.gl/r13crYbGJBBuQiSE7",
        image: ksaImg,
        name: "KSA",
    },
    {
        href: "https://maps.google.com/?q=%23192%2C+Kamaraj+Salai%2C+Puducherry%2C+India+605013",
        image: indiaImg,
        name: "India",
    },
];

// Same underline treatment as UnderlineArrowLink (the "Who we are" / "View Open
// Roles" links): the rule is fully drawn at rest, hover-in plays the
// left-to-right wipe/redraw cycle and hover-out plays the mirrored
// right-to-left one. `key` is bumped on every enter and leave so the CSS
// animation restarts even when the pointer re-enters mid-cycle. State is per
// card, so hovering one location doesn't animate the other.
function LocationCard({ location }) {
    const [state, setState] = useState({ key: 0, phase: "idle" });

    const underlineAnimClass =
        state.phase === "entering"
            ? "animate-[underline-cycle_0.5s_ease-out]"
            : state.phase === "leaving"
                ? "animate-[underline-cycle-reverse_0.5s_ease-out]"
                : "";

    return (
        /* w-full is load-bearing: with aspect-[600/202] and min-h-[160px] but no
           explicit inline size, the box resolves its width FROM the min-height
           (160 x 600/202 = 475px) and overflows the viewport on phones. Pinning
           the width makes the ratio drive the height instead, and min-h only
           floors it. */
        <Link
            href={location.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setState((s) => ({ key: s.key + 1, phase: "entering" }))}
            onMouseLeave={() => setState((s) => ({ key: s.key + 1, phase: "leaving" }))}
            className="group relative flex w-full aspect-[600/202] min-h-[160px] flex-col justify-center overflow-hidden rounded-[16px] border border-[#f1f5f9] px-6 py-6 sm:px-9"
        >
            <Image
                src={location.image}
                alt={`Ascendus presence in ${location.name}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative">
                <h3 className="text-base font-semibold uppercase text-white leading-6">{location.name}</h3>
                <span className="relative mt-3 inline-block pb-0.5 text-xs font-semibold text-white">
                    View Location
                    <span
                        key={state.key}
                        className={`absolute left-0 bottom-0 h-px w-full bg-white ${underlineAnimClass}`}
                    />
                </span>
            </div>
        </Link>
    );
}

// Sits between two white sections, so it carries 32px on both edges.
export default function WhereverYourBusinessTakesYou() {
    return (
        <section id="our-locations" className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-8 sm:pb-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.6px] text-[#2d8ec5] leading-4">Our Locations</p>
                <h2 className="mt-1 text-2xl sm:text-[32px] font-semibold text-[#0a3a52] leading-[36px]">
                    Wherever Your Business Takes You
                </h2>
                <p className="mt-2 text-base sm:text-lg text-[#64748b] leading-5">
                    With a strong presence across key markets, we&apos;re always close to help you.
                </p>
            </motion.div>

            <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {LOCATIONS.map((location) => (
                    <motion.div
                        key={location.name}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <LocationCard location={location} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
