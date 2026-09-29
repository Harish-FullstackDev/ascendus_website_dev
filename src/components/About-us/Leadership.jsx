"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import iconPrev from "@/assets/About-us/icons/carousel-prev.svg";
import iconNext from "@/assets/About-us/icons/carousel-next.svg";
import iconLinkedIn from "@/assets/About-us/icons/linkedin.svg";
import photoKrishnakumar from "@/assets/About-us/leadership/krishnakumar.jpg";

// Figma only draws one executive card. Add the rest of the team here; the
// arrows enable themselves once there is more than one entry. Set `linkedin`
// to a profile URL to turn the icon into a link.
const LEADERS = [
    { name: "Krishnakumar", role: "CEO", photo: photoKrishnakumar, linkedin: null },
];

const CARD_WIDTH = 210;

function LeaderCard({ leader }) {
    return (
        <div className="w-[210px] shrink-0 overflow-hidden rounded-[8px] bg-white pb-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="relative h-[228px] w-full bg-[#e2e8f0]">
                <Image src={leader.photo} alt={leader.name} fill sizes="210px" className="object-cover" />
            </div>

            <div className="flex items-start justify-between p-4">
                <div className="flex flex-col">
                    <p className="text-[14px] font-bold leading-[17.5px] text-[#0f172a]">{leader.name}</p>
                    <p className="text-[11px] leading-[16.5px] text-[#64748b]">{leader.role}</p>
                </div>

                {leader.linkedin ? (
                    <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} on LinkedIn`}
                    >
                        <Image src={iconLinkedIn} alt="" className="size-4" />
                    </a>
                ) : (
                    <Image src={iconLinkedIn} alt="" className="size-4" />
                )}
            </div>
        </div>
    );
}

// Figma (607:2969) clips the three cards in a 500x360 window: the active card
// centred, 36px gaps, and 109px of each neighbour showing.
const CARD_GAP = 36;
const WINDOW_WIDTH = 500;
const WINDOW_HEIGHT = 360;

// Section 7 — "Leadership". Copy on the left, an infinite-loop carousel on the
// right: the active card sits full-size in the middle with the previous and
// next leader half-visible at either edge, the way a physical card carousel
// would spill past the frame. Wraps at both ends rather than stopping, so with
// only one leader in LEADERS both edges simply peek the same card again —
// exactly what the design shows before the rest of the team is added.
export default function Leadership() {
    const [index, setIndex] = useState(0);
    const canPage = LEADERS.length > 1;

    const step = (delta) => setIndex((current) => (current + delta + LEADERS.length) % LEADERS.length);
    const prevIndex = (index - 1 + LEADERS.length) % LEADERS.length;
    const nextIndex = (index + 1) % LEADERS.length;

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-12"
            >
                <div className="flex w-full flex-col gap-6 lg:max-w-[460px] lg:shrink-0">
                    <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                        Leadership
                    </p>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                            Guided by Experience.
                            <br />
                            United by a Shared Purpose.
                        </h2>

                        <p className="pt-[2px] text-sm font-normal leading-[1.5] text-[#415773] sm:text-base">
                            Our leadership brings together deep expertise and diverse perspectives. We are united by
                            a shared vision and a clear sense of purpose. Together, we inspire innovation, build
                            trust, and drive meaningful progress. Our focus remains on creating lasting value for
                            our clients and people.
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-col items-end gap-5">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            aria-label="Previous leader"
                            disabled={!canPage}
                            onClick={() => step(-1)}
                            className="flex size-8 items-center justify-center rounded-full border border-[#334155] transition-colors enabled:cursor-pointer enabled:hover:bg-black/5 disabled:opacity-40"
                        >
                            <Image src={iconPrev} alt="" className="size-4" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next leader"
                            disabled={!canPage}
                            onClick={() => step(1)}
                            className="flex size-8 items-center justify-center rounded-full border border-[#334155] transition-colors enabled:cursor-pointer enabled:hover:bg-black/5 disabled:opacity-40"
                        >
                            <Image src={iconNext} alt="" className="size-4" />
                        </button>
                    </div>

                    {/* One clipping window, as in Figma: all three cards render full size
                        and the window cuts the outer two. It is taller than the cards, so
                        their shadows are not clipped. */}
                    <div
                        className="flex w-full items-center justify-center overflow-hidden"
                        style={{ maxWidth: WINDOW_WIDTH, height: WINDOW_HEIGHT }}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="flex shrink-0 items-center justify-center"
                                style={{ gap: CARD_GAP }}
                            >
                                <div aria-hidden="true" className="shrink-0">
                                    <LeaderCard leader={LEADERS[prevIndex]} />
                                </div>
                                <LeaderCard leader={LEADERS[index]} />
                                <div aria-hidden="true" className="shrink-0">
                                    <LeaderCard leader={LEADERS[nextIndex]} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
