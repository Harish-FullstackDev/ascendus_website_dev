"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import corridorImg from "@/assets/HomePage/images/data-center-hallway.png";

const STEPS = [
    {
        num: "1",
        title: "Discover",
        desc: "We start with your operations, not our service list, to identify where technology creates friction and where it can create value.",
    },
    {
        num: "2",
        title: "Design",
        desc: "One team builds and implements — the same people who designed it, so nothing gets lost in translation.",
    },
    {
        num: "3",
        title: "Implement",
        desc: "We architect a solution built around your operations, not a one-size-fits-all playbook.",
    },
    {
        num: "4",
        title: "Run",
        desc: "We continue to manage, monitor, and support your solutions after go-live to ensure they perform as expected.",
    },
];

// The numbered badge deliberately straddles the image/panel seam: 20px of its
// 60px sits above the seam (over the image), the remaining 40px below it
// (over the dark panel) — an intentional majority-below split, not a 50/50
// overlap. Each step's own top padding is set to exactly that 40px (+ extra
// breathing room), so its title/description always clears the badge with no
// per-panel padding needed above the grid.
const BADGE_SIZE = 60;
const BADGE_OVERLAP_ABOVE = 20;
const BADGE_OVERLAP_BELOW = BADGE_SIZE - BADGE_OVERLAP_ABOVE;
const STEP_TOP_PADDING = BADGE_OVERLAP_BELOW + 48; // room below the badge before the title starts

export default function HowWeWork() {
    return (
        // Full-bleed image band — no side padding here; the dark panel below carries
        // its own full 64 bottom via pb-16, and the section above (Industries)
        // already took the full 64 for this boundary since this band contributes 0.
        <section className="relative w-full overflow-hidden">
            {/* Figma (node 2700:1414/1413) actually splits this band roughly
                43/57 image-to-panel, not 50/50 — the image div is 496px tall but
                the dark panel is pulled up over its bottom 284px (mb-[-284px]),
                leaving only ~212px of it genuinely visible. Reproduced here as a
                real proportional relationship rather than a copied breakpoint: the
                lg aspect ratio matches Figma's 1280x496 image exactly, and the
                panel's overlap below is a %-of-width margin (284/1280 ≈ 22.2%,
                CSS % margins resolve against the containing block's width, same
                reference axis as the aspect ratio), so the same ~43/57 split holds
                at any viewport width instead of only at 1280px. Mobile/tablet keep
                their own taller aspect ratios (not in the Figma desktop frame at
                all) since the heading needs more absolute height to stay readable
                on a narrow screen — the width-proportional overlap still applies
                on top of those. */}
            {/* lg ratio nudged from Figma's raw 1280/496 to 1280/520 — a small,
                deliberate bump (not itself in the Figma numbers) so the visible
                slice reads at the same size Figma's own screenshot shows; the
                overlap margin below is untouched, so this bump is the only lever
                changing how much stays in view. */}
            <div className="relative w-full aspect-[16/12] sm:aspect-[16/10] lg:aspect-[1280/520]">
                <Image src={corridorImg} alt="" fill className="object-cover pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                {/* Figma positions this block at a fixed 34px from the image's top
                    (34/496 ≈ 7% of the image height) — the previous 14–16% was
                    calibrated for the old, much taller image and was eating into the
                    (now correctly shorter) band's remaining room, which is what let
                    the panel/badges collide with the heading. gap-3 (12px) between
                    the H1 and the subtitle+body pair matches Figma's Message
                    Container; the subtitle and body are their own flush two-line
                    block (no gap between them) same as Figma's two stacked <p>s. */}
                <div className="absolute inset-x-0 top-[8%] flex flex-col items-center text-white text-center px-6 gap-3">
                    <h2 className="text-2xl sm:text-[28px] font-semibold leading-tight">How We Work</h2>
                    <div className="flex flex-col leading-tight">
                        <p className="text-lg font-light">A Clear Path From Problem to Production</p>
                        <p className="text-lg font-light">
                            No black boxes, no scope creep. Every engagement follows a process built for transparency and outcomes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 -mt-[22.2%] bg-[#002C4F] pb-20 sm:pb-28 px-6 sm:px-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-10 gap-y-20 sm:gap-y-24"
                >
                    {STEPS.map((step) => (
                        <div
                            key={step.num}
                            // Narrower column (not the full grid-slot width) so the
                            // description wraps onto more lines and reads taller rather
                            // than wide, matching Figma.
                            className="relative flex flex-col items-center gap-6 text-center max-w-[240px] mx-auto"
                            style={{ paddingTop: STEP_TOP_PADDING }}
                        >
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-[0px_4px_8px_rgba(0,0,0,0.2)]"
                                style={{ top: -BADGE_OVERLAP_ABOVE }}
                            >
                                <span className="text-[#2E3033] text-3xl font-light">{step.num}</span>
                            </div>
                            <div className="flex flex-col gap-3 text-white">
                                <h2 className="text-lg font-semibold">{step.title}</h2>
                                <p className="text-base font-extralight leading-[1.5]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

