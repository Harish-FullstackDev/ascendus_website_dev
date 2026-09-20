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
        title: "Channel / Referral Partnership",
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
            {/* Figma: a 316px intro column beside a 1006px card track. The intro
                track is capped rather than fixed so the cards absorb the extra
                width on wider screens. */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,316px)_minmax(0,1fr)] gap-10 lg:gap-8 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-start gap-3"
                >
                    <p className="text-sm font-semibold uppercase tracking-[1.1px] text-[#0061af] leading-[16.5px]">
                        Partner With Us
                    </p>
                    <h2 className="text-2xl sm:text-[32px] font-semibold tracking-[-0.75px] text-[#0f172a] leading-[36px]">
                        Let&apos;s Build What&apos;s Next
                    </h2>
                    <p className="text-base font-normal text-[#475569] leading-5">
                        We&apos;re always looking for forward-thinking partners who share our vision. Explore the
                        different ways to work with us and create new opportunities together.
                    </p>

                    <Link
                        href="/ascenduspartner/"
                        className="group mt-3 inline-flex items-center gap-2 rounded-[8px] bg-[#0b1c34] px-5 py-2.5 text-sm font-semibold text-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:bg-[#0a3a52]"
                    >
                        Become a Partner
                        <Image
                            src={arrowRightIcon}
                            alt=""
                            className="size-[14px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>

                {/* Five cards across a single track (Figma ~177x207 each, 14px
                    gutters). They fall to three and then two columns rather than
                    shrinking below a readable width; min-h holds the design's
                    proportion without capping longer copy. */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {CARDS.map((card) => (
                        <motion.article
                            key={card.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex h-full flex-col justify-between rounded-[12px] border border-[rgba(226,232,240,0.8)] bg-white p-[21px] sm:min-h-[207px] transition-shadow duration-300 hover:shadow-[0px_6px_18px_rgba(10,58,82,0.1)]"
                        >
                            {/* Figma alternates 40px/rounded-8 and 36px/rounded-12
                                tiles across these five cards; normalised to one
                                treatment so the row reads as a set. The icon and
                                title travel together (8px apart) with the
                                description pushed to the bottom of the card. */}
                            <div className="flex flex-col items-start gap-2">
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#eff6ff]">
                                    <Image src={card.icon} alt="" className="size-6" />
                                </span>
                                <h3 className="text-base font-bold text-[#0f172a] leading-[16.5px]">{card.title}</h3>
                            </div>

                            <p className="text-sm font-normal text-[#64748b] leading-[16.5px]">{card.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
