"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import iconPrev from "@/assets/About-us/icons/carousel-prev.svg";
import iconNext from "@/assets/About-us/icons/carousel-next.svg";
import iconLinkedIn from "@/assets/About-us/icons/linkedin.svg";
import photoKrishnakumar from "@/assets/About-us/leadership/krishnakumar.jpg";
import photoBhuvaneshwari from "@/assets/About-us/leadership/bhuvaneshwari.jpg";
import photoPlaceholder from "@/assets/About-us/leadership/leader-placeholder.jpg";

// Figma (607:2969) draws three executives, in carousel order: the left card,
// the active centre card and the right card. The left card repeats the centre
// card's "Krishnakumar / CEO" label on a different photo, which looks like a
// copy slip; it is kept as drawn until the real name is supplied. The photos
// are Figma's own and low resolution (about 480px on the long side). Set
// `linkedin` to a profile URL to turn the icon into a link.
const LEADERS = [
    { id: "leader-left", name: "Krishnakumar", role: "CEO", photo: photoPlaceholder, linkedin: null },
    { id: "krishnakumar", name: "Krishnakumar", role: "CEO", photo: photoKrishnakumar, linkedin: null },
    { id: "bhuvaneshwari", name: "Bhuvaneshwari", role: "CHRO", photo: photoBhuvaneshwari, linkedin: null },
];

// The centre card is the one Figma shows active.
const INITIAL_INDEX = 1;

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
const STEP = CARD_WIDTH + CARD_GAP;

// Three cards either side of the active one: one peeking at each edge, and
// spares waiting outside the window so a card is already there to slide in,
// even when a quick double click leaves the track a card behind.
const SLOT_OFFSETS = [-3, -2, -1, 0, 1, 2, 3];

const SLIDE = { duration: 0.55, ease: [0.4, 0, 0.2, 1] };

const leaderAt = (slot) => LEADERS[((slot % LEADERS.length) + LEADERS.length) % LEADERS.length];

// Section 7 — "Leadership". Copy on the left, an infinite-loop carousel on the
// right: the active card sits full-size in the middle with the previous and
// next leader half-visible at either edge, the way a physical card carousel
// would spill past the frame. Wraps at both ends rather than stopping, so the
// first and last leaders are always each other's neighbours.
//
// The cards sit on an endless track that slides one card width per click.
// `position` counts clicks and never wraps; each slot on the track shows the
// leader at that position modulo the team size. Slots are keyed by position,
// not by leader, so a card that leaves one edge never flies back across the
// window to reappear at the other: a fresh slot mounts outside the clip
// instead. Clicking again mid-slide carries on from wherever the track is.
export default function Leadership() {
    const [position, setPosition] = useState(INITIAL_INDEX);
    const reduceMotion = useReducedMotion();
    const canPage = LEADERS.length > 1;

    const step = (delta) => setPosition((current) => current + delta);

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
            >
                <div className="flex w-full min-w-0 flex-col gap-6 lg:max-w-[664px] lg:flex-1">
                    <p className="text-[14px] font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                        Leadership
                    </p>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                            Guided by Experience.
                            <br />
                            United by a Shared Purpose.
                        </h2>

                        {/* Figma (495:219) sets four sentences, one per line, in Title
                            Case. The line breaks only hold where the column is wide. */}
                        <p className="pt-[2px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                            Our leadership brings together deep expertise and diverse perspectives.
                            <br className="hidden xl:block" /> We are united by a shared vision and a clear sense of
                            purpose.
                            <br className="hidden xl:block" /> Together, we inspire innovation, build trust, and drive
                            meaningful progress.
                            <br className="hidden xl:block" /> Our focus remains on creating lasting value for our
                            clients and people.
                        </p>
                    </div>
                </div>

                <div className="flex w-full flex-col items-end gap-5 lg:w-[500px] lg:shrink-0">
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

                    {/* One clipping window, as in Figma: the cards render full size and
                        the window cuts the outer two. It is taller than the cards, so
                        their shadows are not clipped. */}
                    <div
                        className="relative w-full overflow-hidden"
                        style={{ maxWidth: WINDOW_WIDTH, height: WINDOW_HEIGHT }}
                    >
                        <motion.div
                            className="absolute inset-y-0 left-1/2"
                            initial={false}
                            animate={{ x: -position * STEP }}
                            transition={reduceMotion ? { duration: 0 } : SLIDE}
                        >
                            {SLOT_OFFSETS.map((offset) => {
                                const slot = position + offset;
                                return (
                                    <div
                                        key={slot}
                                        aria-hidden={offset !== 0 ? "true" : undefined}
                                        className="absolute top-1/2 -translate-y-1/2"
                                        style={{ left: slot * STEP - CARD_WIDTH / 2 }}
                                    >
                                        <LeaderCard leader={leaderAt(slot)} />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
