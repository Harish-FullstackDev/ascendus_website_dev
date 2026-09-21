"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import becomeIcon from "@/assets/Partnership/icons/strategic-partnerships.svg";
import technologyIcon from "@/assets/Partnership/icons/technology-partnerships.svg";
import consultingIcon from "@/assets/Partnership/icons/consulting-partnership.svg";
import channelIcon from "@/assets/Partnership/icons/channel-referral-partnership.svg";
import jointIcon from "@/assets/Partnership/icons/joint-go-to-market.svg";
import arrowRightIcon from "@/assets/Partnership/icons/arrow-right.svg";

const CARDS = [
    {
        description: "Join our partner network and grow with us.",
        icon: becomeIcon,
        title: "Become a Partner",
    },
    {
        description: "Collaborate on technology solutions and innovation.",
        icon: technologyIcon,
        title: "Technology Partnership",
    },
    {
        description: "Work together to deliver expertise and value.",
        icon: consultingIcon,
        title: "Consulting Partnership",
    },
    {
        description: "Refer opportunities and be rewarded.",
        icon: channelIcon,
        title: "Channel & Referral Partnership",
    },
    {
        description: "Co-create and execute successful market strategies.",
        icon: jointIcon,
        title: "Joint Go-To-Market",
    },
];

// The one tinted band on the page (#f4f7fb). Because the background changes on
// both edges, it pays the full 64px top and bottom rather than splitting with
// its white neighbours.
export default function LetsBuildWhatsNext() {
    return (
        <section
            id="partner-with-us"
            className="w-full scroll-mt-24 border-y border-[rgba(226,232,240,0.8)] bg-[#f4f7fb] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16"
        >
            {/* Figma (232:576) gives the intro a 347px column and starts the card
                row 31px later, so the cards own everything that is left. The
                intro track is capped rather than fixed so the cards absorb the
                extra width on wider screens. */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[31px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex w-full flex-col items-start gap-8 lg:w-[347px] lg:shrink-0"
                >
                    {/* The three text blocks sit 12px apart and the button hangs
                        32px below the group (Figma 232:577 / 264:1607), rather
                        than sharing one rhythm with them. */}
                    <div className="flex flex-col items-start gap-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                            Partner With Us
                        </p>
                        <h2 className="text-2xl sm:text-[32px] font-semibold text-[#0e2b4b] leading-[1.2]">
                            Let&apos;s Build What&apos;s Next
                        </h2>
                        <p className="pt-1 pb-3 text-base font-normal text-[#415773] leading-[1.5]">
                            We&apos;re always looking for forward-thinking partners who share our vision. Explore the
                            different ways to work with us and create new opportunities together.
                        </p>
                    </div>

                    {/* Figma 232:584 — 12px/8px padding around 16px copy, which is
                        what puts the button at its 40px height. */}
                    <Link
                        href="/ascenduspartner/"
                        className="group inline-flex items-center gap-2 rounded-[8px] bg-[#0061af] px-3 py-2 text-base font-normal text-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:bg-[#004c8a]"
                    >
                        Become a Partner
                        <Image
                            src={arrowRightIcon}
                            alt=""
                            className="size-[14px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>

                {/* Five 183x210 cards across a single track. They fall to three and
                    then two columns rather than shrinking below a readable width;
                    min-h holds the design's proportion without capping longer
                    copy. */}
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[6.5px]">
                    {CARDS.map((card) => (
                        <motion.article
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex h-full flex-col justify-between gap-4 rounded-[12px] border border-[rgba(226,232,240,0.8)] bg-white p-[21px] sm:min-h-[210px] transition-shadow duration-300 hover:shadow-[0px_6px_18px_rgba(10,58,82,0.1)]"
                        >
                            {/* Figma alternates 40px/rounded-8 and 36px/rounded-12
                                tiles across these five cards; normalised to one
                                treatment so the row reads as a set. The icon sits
                                alone at the top, with title and description
                                travelling together at the bottom. */}
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#eff6ff]">
                                <Image src={card.icon} alt="" className="size-6" />
                            </span>

                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold text-[#0f172a] leading-[1.2]">{card.title}</p>
                                <p className="text-sm font-normal text-[#64748b] leading-[1.4]">{card.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
