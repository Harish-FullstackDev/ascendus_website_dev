"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import strategicIcon from "@/assets/Partnership/icons/strategic-partnerships.svg";
import technologyIcon from "@/assets/Partnership/icons/technology-partnerships.svg";
import allianceIcon from "@/assets/Partnership/icons/alliance-ecosystem.svg";

// The SAP card has no icon in Figma — the wordmark itself sits in the icon tile,
// so that one card renders a text badge where the others render an SVG.
const CARDS = [
    {
        description: "Building long-term relationships for mutual growth and success.",
        icon: strategicIcon,
        title: "Strategic Partnerships",
    },
    {
        description: "Leveraging SAP's power to deliver transformative business solutions.",
        title: "SAP Partnership",
        wordmark: "SAP",
    },
    {
        description: "Building long-term relationships for mutual growth and success.",
        icon: technologyIcon,
        title: "Technology Partnerships",
    },
    {
        description: "Leveraging SAP's power to deliver transformative business solutions.",
        icon: allianceIcon,
        title: "Alliance & Ecosystem",
    },
];

// First content section under the hero. The hero is a full-bleed image band, so
// this side keeps the full 64px on top; "Let's Build What's Next" below changes
// the background to #f4f7fb, so the bottom keeps its full 64px too.
export default function ACollaborativeEcosystem() {
    return (
        <section id="our-ecosystem" className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
            {/* Figma runs the intro column (395px) beside the card row (800px)
                with a 109px gutter. Expressed as a max-width on the intro track
                so the cards take the remaining space at any viewport. */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] gap-10 lg:gap-16 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.6px] text-[#0061af] leading-4">
                        Our Ecosystem
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-[32px] font-semibold text-[#10161d] leading-[36px]">
                        A Collaborative Ecosystem for Greater Possibilities
                    </h2>
                    <p className="mt-2 max-w-[396px] text-base font-normal text-[#415773] leading-5">
                        Our ecosystem includes strategic partners, technology leaders, and industry alliances that help
                        us deliver innovative solutions, expand capabilities and create greater value for our clients.
                    </p>
                </motion.div>

                {/* 20px between cards (Figma 127:1891 — four 185px cards across an
                    800px track). */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
                    {/* Figma fixes these cards at 185x259. The width comes from the
                        grid track; min-h holds the proportion without capping copy
                        that runs longer than the design's. */}
                    {CARDS.map((card) => (
                        <motion.article
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex h-full flex-col justify-between rounded-[8px] border border-[#e2e8f0] bg-white p-[25px] sm:min-h-[259px] transition-shadow duration-300 hover:shadow-[0px_6px_18px_rgba(10,58,82,0.12)]"
                        >
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#eff6ff]">
                                {card.wordmark ? (
                                    <span className="text-xs font-extrabold tracking-[-0.6px] text-[#0061af] leading-4">
                                        {card.wordmark}
                                    </span>
                                ) : (
                                    <Image src={card.icon} alt="" className="size-6" />
                                )}
                            </span>

                            {/* Icon, title and description are three siblings
                                spread by justify-between, the way Figma's 209px
                                inner column distributes them. */}
                            <h3 className="pt-2 text-lg font-semibold text-[#0f172a] leading-6">{card.title}</h3>
                            <p className="text-sm font-normal text-[#64748b] leading-[19.5px]">{card.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
