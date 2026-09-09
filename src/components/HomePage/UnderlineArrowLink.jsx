"use client";

import { useState } from "react";
import Link from "next/link";

// Shared "label + underline + circular arrow" link used by Hiring, WhyUs and
// AboutPartner. Underline sits fully visible at rest; hover-in plays the
// left-to-right wipe/redraw cycle, hover-out plays the mirrored right-to-left
// cycle (underline-cycle / underline-cycle-reverse in globals.css) so it
// tracks the arrow's horizontal exit/reappear swap in both directions. `key`
// is bumped on every enter/leave so the CSS animation always restarts, even
// if the pointer re-enters before the previous cycle finished.
export default function UnderlineArrowLink({ href, label, className = "" }) {
    const [state, setState] = useState({ phase: "idle", key: 0 });

    const underlineAnimClass =
        state.phase === "entering"
            ? "animate-[underline-cycle_0.5s_ease-out]"
            : state.phase === "leaving"
                ? "animate-[underline-cycle-reverse_0.5s_ease-out]"
                : "";

    return (
        <Link
            href={href}
            className={`group inline-flex items-center gap-4 whitespace-nowrap ${className}`}
            onMouseEnter={() => setState((s) => ({ phase: "entering", key: s.key + 1 }))}
            onMouseLeave={() => setState((s) => ({ phase: "leaving", key: s.key + 1 }))}
        >
            <span className="relative pb-[3px] text-lg font-medium text-[#00447A]">
                {label}
                <span
                    key={state.key}
                    className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#00447A] ${underlineAnimClass}`}
                />
            </span>
            <span className="relative size-7 shrink-0 overflow-hidden rounded-full bg-[#00447A]">
                <svg viewBox="0 0 24 24" fill="none" className="absolute inset-0 size-full transition-transform duration-500 ease-out group-hover:translate-x-full">
                    <path d="M7.76011 16.2427L16.2454 7.75738M9.88143 7.75738H16.2454V14.1213" transform="rotate(45 12 12)" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" className="absolute inset-0 size-full -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0">
                    <path d="M7.76011 16.2427L16.2454 7.75738M9.88143 7.75738H16.2454V14.1213" transform="rotate(45 12 12)" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </Link>
    );
}
