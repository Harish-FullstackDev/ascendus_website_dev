"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import decisionAutomationPhoto from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/webp/Cybersecurity_Business_Enablement.webp";

const ITEMS = [
    {
        eyebrow: "Business Enablement Through Security",
        title: "Rethinking cybersecurity as a driver of safe growth",
        desc: "Security is not the department that says no. It is the reason the business can say yes safely",
        image: decisionAutomationPhoto,
    },
];

export default function BusinessEnablementThroughSecurity() {
    return (
        // Full-bleed on desktop: Figma's row (node 2261:5001) is 1274px inside a
        // 1280px frame — it overflows the frame's own 64px padding, so the photo
        // effectively runs to the screen's right edge rather than stopping short.
        <section className="w-full pt-10 sm:pt-16 pb-10 sm:pb-8 px-6 sm:px-0 flex flex-col gap-16 sm:gap-[70px]">
            {ITEMS.map((item) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col sm:block"
                >
                    {/* Color panel: Figma is 768x391 (an aspect ratio, not a fixed box) sitting flush
                        against the right edge of the row and taking ~60% of its width. aspect-[768/391]
                        keeps that ratio intact as the container itself grows/shrinks, instead of a
                        hardcoded height that would distort the panel at other viewport widths. */}
                    <div className="relative w-full sm:w-[60.3%] sm:ml-auto h-[220px] sm:h-auto sm:aspect-[768/391]">
                        <Image src={item.image} alt="" fill className="object-cover" />
                    </div>

                    {/* Text card: Figma places it 4.5% in from the row's left edge, at ~60% of the
                        row's width, sitting roughly centered against the panel's height — expressed
                        as % + a true vertical center (top-1/2 -translate-y-1/2) so the overlap onto
                        the panel stays proportional at any viewport and self-adjusts to the panel's
                        height instead of a fixed 918x313 box pinned to a magic top offset. */}
                    {/* All proportions read off Figma node 2261:5000 against its 1274px
                        row: card left 74px (5.8%), width 750px (58.9%); content inset
                        78px left / 154px right, 49px from the card's top and 33px below
                        it; 35px between the heading and the paragraph pair, 16px between
                        the paragraphs.
                        The insets are percentages of the ROW (78/1274 = 6.1%,
                        154/1274 = 12.1%), not of the card — this element is absolutely
                        positioned, and CSS resolves percentage padding against the
                        containing block, which is the row. Using card-relative figures
                        here silently squeezed the content column to 403px, wrapping the
                        heading onto a second line and making the card taller than Figma's.
                        No justify-center — Figma top-anchors the content block at 49px
                        and leaves the remaining height empty below it (its text ends
                        around y=200 inside a 301px card).
                        Height is min-h-[77%] — Figma's 301px card against its 391px
                        image — resolved against the row, whose height is the image's.
                        `min-h` rather than a fixed `h` so the card still grows instead
                        of clipping at narrower widths, where the copy wraps onto more
                        lines than it does at desktop. */}
                    <div className="relative sm:absolute sm:left-[5.8%] sm:top-1/2 sm:-translate-y-1/2 bg-[#F3F6F9] w-full sm:w-[58.9%] sm:min-h-[77%] -mt-4 sm:mt-0 overflow-hidden flex flex-col gap-6 sm:gap-[35px] px-6 py-8 sm:pl-[6.1%] sm:pr-[12.1%] sm:pt-[49px] sm:pb-[33px]">
                        <h2 className="font-heading text-black text-xl sm:text-[28px] font-semibold">{item.eyebrow}</h2>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <p className="text-[#10161d] text-base sm:text-lg font-light">{item.title}</p>
                            <p className="text-[#4a5568] text-base sm:text-lg font-light">{item.desc}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
