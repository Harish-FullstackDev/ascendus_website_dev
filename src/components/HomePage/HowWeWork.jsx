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
            {/* Rebalanced toward 50/50 — image brought down, panel grown (via its
                own padding below) to make up the difference rather than shrinking
                the section's total height back down. */}
            <div className="relative w-full aspect-[16/12] sm:aspect-[16/10] lg:aspect-[1280/380]">
                <Image src={corridorImg} alt="" fill className="object-cover pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                {/* Anchored from the top at a fixed % of the image (the same pattern
                    other hero sections on the site use), sitting in the image's upper
                    portion — clearly separated from the dark panel/seam below, not
                    hugging it. */}
                <div className="absolute inset-x-0 top-[14%] sm:top-[16%] flex flex-col items-center text-white text-center px-6 gap-2">
                    <h2 className="text-2xl sm:text-[28px] font-semibold">How We Work</h2>
                    <p className="text-lg font-light sm:pt-6">A Clear Path From Problem to Production</p>
                    <p className="text-lg font-light w-full leading-normal mt-2">
                        No black boxes, no scope creep. Every engagement follows a process built for transparency and outcomes.
                    </p>
                </div>
            </div>

            <div className="relative z-10 -mt-12 sm:-mt-16 bg-[#0a3a52] pb-20 sm:pb-28 px-6 sm:px-[64px]">
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
                                <h3 className="text-lg font-medium">{step.title}</h3>
                                <p className="text-base font-light leading-[1.5]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

