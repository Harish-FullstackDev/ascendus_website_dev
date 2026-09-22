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
            className="group relative flex w-full aspect-[600/202] min-h-[160px] flex-col justify-center overflow-hidden rounded-[16px] border border-[#f1f5f9] px-6 py-6 sm:pl-[36px] sm:pr-[25px]"
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
                <span className="relative mt-3 inline-block pb-0.5 text-xs font-semibold text-white leading-4">
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

// Opens the lower half of the page on the same slate tint the two customer
// panels use, separated from the enquiry band above by a hairline rule.
export default function WhereverYourBusinessTakesYou() {
    return (
        <section
            id="our-locations"
            className="w-full scroll-mt-24 border-t border-[#f1f5f9] bg-[rgba(248,250,252,0.4)] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-[48px] sm:pb-[56px]"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[811px]"
            >
                <p className="text-[14px] font-normal uppercase tracking-[0.7px] text-[#2d8ec5] leading-4">
                    Our Locations
                </p>
                <h2 className="mt-4 text-[26px] sm:text-[32px] font-medium text-[#0a3a52] leading-[1.2]">
                    Wherever Your Business Takes You
                </h2>
                <p className="mt-3 pt-[2px] text-base font-normal text-[#415773] leading-[1.5]">
                    With a strong presence across key markets,
                    <br className="hidden sm:block" /> we&apos;re always close to help you.
                </p>
            </motion.div>

            {/* Figma sets each card at 600 of a 1303 box — a 103px desktop
                gutter that narrows with the viewport. */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-[103px]">
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
