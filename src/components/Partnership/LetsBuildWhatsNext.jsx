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

// Figma sets every line in these cards by hand (232:597 / 232:599 and their
// siblings) rather than letting the 141px column wrap the copy, so the break
// points are data. They are applied from xl up, where the cards are at their
// designed width; narrower cards wrap the same strings naturally.
const CARDS = [
    {
        descriptionLines: ["Join our partner", "network and grow", "with us."],
        icon: becomeIcon,
        titleLines: ["Become a", "Partner"],
    },
    {
        descriptionLines: ["Collaborate on", "technology solutions", "and innovation."],
        icon: technologyIcon,
        titleLines: ["Technology", "Partnership"],
    },
    {
        descriptionLines: ["Work together to", "deliver expertise and", "value."],
        icon: consultingIcon,
        titleLines: ["Consulting", "Partnership"],
    },
    {
        descriptionLines: ["Refer opportunities", "and be rewarded."],
        icon: channelIcon,
        titleLines: ["Channel &", "Referral", "Partnership"],
    },
    {
        descriptionLines: ["Co-create and", "execute successful", "market strategies."],
        icon: jointIcon,
        titleLines: ["Joint", "Go-To-Market"],
    },
];

// Renders the Figma line breaks as real breaks on wide viewports and as plain
// spaces below xl, so a narrower card re-wraps instead of keeping a break that
// no longer matches its width.
function MeasuredLines({ lines }) {
    return lines.map((line, index) => (
        <span key={line}>
            {index > 0 ? <br className="hidden xl:block" /> : null}
            {index > 0 ? " " : null}
            {line}
        </span>
    ));
}

// The one tinted band on the page (#f4f7fb). Because the background changes on
// both edges, it pays the full 64px top and bottom rather than splitting with
// its white neighbours.
export default function LetsBuildWhatsNext() {
    return (
        <section
            id="partner-with-us"
            className="w-full scroll-mt-24 border-y border-[rgba(226,232,240,0.8)] bg-[#f4f7fb] px-6 sm:px-[64px] pt-10 pb-10 sm:py-[49px]"
        >
            {/* Figma (232:576) gives the intro a 347px column and starts the card
                row 31px later, so the cards own everything that is left. The
                intro track is capped rather than fixed so the cards absorb the
                extra width on wider screens. */}
            <div className="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-[31px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex w-full flex-col items-start gap-8 xl:w-[347px] xl:shrink-0"
                >
                    {/* The three text blocks sit 12px apart and the button hangs
                        32px below the group (Figma 232:577 / 264:1607), rather
                        than sharing one rhythm with them. */}
                    <div className="flex flex-col items-start gap-3">
                        <p className="text-[14px] font-normal uppercase tracking-[0.7px] text-[#0061af] leading-4">
                            Partner With Us
                        </p>
                        {/* Figma breaks the heading after "What's" (232:581) so
                            it sits over two lines beside the card row. */}
                        <h2 className="text-2xl sm:text-[32px] font-medium text-[#0e2b4b] leading-[1.2]">
                            Let&apos;s Build What&apos;s
                            <br className="hidden lg:block" /> Next
                        </h2>
                        {/* Four measured lines in Figma's 347px column (232:583):
                            two authored breaks, then "new opportunities
                            together." falls onto the fourth line. */}
                        <p className="pt-1 pb-3 text-base font-normal text-[#415773] leading-[1.5]">
                            We&apos;re always looking for forward-thinking
                            <br className="hidden lg:block" /> partners who share our vision. Explore the
                            <br className="hidden lg:block" /> different ways to work with us and create
                            <br className="hidden lg:block" /> new opportunities together.
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

                {/* Five 183x210 cards across a single track (Figma 232:589),
                    which itself sits 32px inside the section band. They fall to
                    three and then two columns rather than shrinking below a
                    readable width — five across a 1280 viewport would leave each
                    card narrower than its own heading. */}
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-[6.5px] xl:py-8">
                    {CARDS.map((card) => (
                        <motion.article
                            key={card.titleLines.join(" ")}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex h-full flex-col justify-between gap-4 rounded-[12px] border border-[rgba(226,232,240,0.8)] bg-white p-[21px] sm:min-h-[210px] xl:h-[210px] transition-shadow duration-300 hover:shadow-[0px_6px_18px_rgba(10,58,82,0.1)]"
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
                                <p className="text-lg font-medium text-[#0f172a] leading-[1.2]">
                                    <MeasuredLines lines={card.titleLines} />
                                </p>
                                <p className="text-sm font-normal text-[#64748b] leading-[1.4]">
                                    <MeasuredLines lines={card.descriptionLines} />
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
