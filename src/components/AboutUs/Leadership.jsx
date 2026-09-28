"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import iconPrev from "@/assets/AboutUs/icons/carousel-prev.svg";
import iconNext from "@/assets/AboutUs/icons/carousel-next.svg";
import iconLinkedIn from "@/assets/AboutUs/icons/linkedin.svg";
import photoKrishnakumar from "@/assets/AboutUs/leadership/krishnakumar.jpg";

// Figma only draws one executive card. Add the rest of the team here; the
// arrows enable themselves once there is more than one entry. Set `linkedin`
// to a profile URL to turn the icon into a link.
const LEADERS = [
    { name: "Krishnakumar", role: "CEO", photo: photoKrishnakumar, linkedin: null },
];

function LeaderCard({ leader }) {
    return (
        <div className="w-[210px] overflow-hidden rounded-[8px] bg-white pb-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
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

// Section 7 — "Leadership". Copy on the left, a one-card carousel on the right.
export default function Leadership() {
    const [index, setIndex] = useState(0);
    const canPage = LEADERS.length > 1;

    const step = (delta) => setIndex((current) => (current + delta + LEADERS.length) % LEADERS.length);

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-[48px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[73px]"
            >
                <div className="flex w-full flex-col gap-6 lg:max-w-[664px]">
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
                            Our leadership brings together deep industry knowledge, strategic insight and a shared
                            commitment to building a more efficient and connected future.
                        </p>
                    </div>
                </div>

                <div className="flex w-[210px] shrink-0 flex-col items-end gap-[13px] max-lg:self-center lg:mr-[77px]">
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

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={LEADERS[index].name}
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -16 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <LeaderCard leader={LEADERS[index]} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}
