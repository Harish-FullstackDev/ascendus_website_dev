"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import quoteMark from "@/assets/Careers/quote-mark.svg";

const AVATAR = "/blog/default-author.svg";

export default function GrowthQuoteBand() {
    return (
        <section className="w-full py-5 sm:py-8 px-4 sm:px-8 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <div aria-hidden className="w-full h-px bg-black/30" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
                >
                    <div className="flex flex-col items-center text-center gap-3 shrink-0">
                        <Image
                            src={AVATAR}
                            alt="Bhuvaneshwari"
                            width={94}
                            height={94}
                            className="rounded-full object-cover size-[94px] bg-[#d8d8d8]"
                        />
                        <div>
                            <p className="font-semibold text-[#2E3033] text-base sm:text-lg">Bhuvaneshwari</p>
                            <p className="text-[#3d3d4e] text-sm opacity-60 mt-1">
                                Chief Human Resources Officer (CHRO)
                                <br />
                                Ascendus
                            </p>
                        </div>
                    </div>

                    {/* The mark is Figma's own vector (node 3357:303), exported and committed
                        as quote-mark.svg, not a typed quote character. The node's font is
                        listed as Aldrich, but Aldrich's U+201C is a rounded, curly mark —
                        rendering the character in that font produced a completely different
                        shape from the design's two straight slabs, so the glyph itself has
                        to come from the export. Colour (#2D8EC5 at 48%) is baked into the
                        file exactly as Figma specifies it.

                        Figma stacks the mark above the copy (node 3357:301) with the
                        paragraph indented inside it. Width scales with the viewport rather
                        than pinning Figma's literal 34px ink width. The mark hangs off the
                        left edge at every width — centring it on mobile left it floating
                        over the middle of the paragraph with nothing to anchor it. */}
                    <div className="flex flex-col items-start gap-3">
                        <Image
                            src={quoteMark}
                            alt=""
                            aria-hidden
                            className="shrink-0 select-none w-[clamp(24px,2.4vw,34px)] h-auto"
                        />
                        {/* Figma indents the copy inside the mark: the text block starts
                            65px from the quote container's left edge while the glyph's ink
                            starts ~17px in (node 3357:301/302/303), so the paragraph's left
                            edge sits ~52px right of where the ink begins — the mark hangs
                            out to the left of the text rather than sitting flush with it.
                            The indent is expressed against the same viewport scale as the
                            mark's own scale so the two stay in proportion at
                            every width; it only applies once the band is side-by-side, since
                            the stacked mobile layout centres both. */}
                        <p className="text-base sm:text-lg text-[#55595E] font-light leading-relaxed text-center lg:text-left lg:pl-[clamp(27px,3.4vw,48px)]">
                            Good work gets better when the right people stay close to it. From the first problem
                            definition to the final delivery, we believe people do their best work when they have
                            context, ownership and access to the expertise around them.
                        </p>
                    </div>
                </motion.div>

                <div aria-hidden className="w-full h-px bg-black/30" />
            </div>
        </section>
    );
}
