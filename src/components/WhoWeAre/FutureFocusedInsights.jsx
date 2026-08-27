"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import insightsCardImg1 from "@/assets/WhoWeAre/webp/Who_We_Are_Blog_1.webp";
import insightsCardImg2 from "@/assets/WhoWeAre/webp/Who_We_Are_Blog_2.webp";
import insightsCardImg3 from "@/assets/WhoWeAre/webp/Who_We_Are_Blog_3.webp";
import insightsCardImg4 from "@/assets/WhoWeAre/webp/Who_We_Are_Blog_4.webp";
import insightsArrow from "@/assets/WhoWeAre/icons/InsightsArrow.svg";

const INSIGHTS = [
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future", img: insightsCardImg1 },
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future", img: insightsCardImg2 },
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future", img: insightsCardImg3 },
    { date: "05 Nov 2026", text: "sustainability inspires us to innovate, priorites resilience and build for the future", img: insightsCardImg4 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FutureFocusedInsights({
    showTopDivider = true,
    overlapCTA = true,
    title = "Future Focused Insights",
    description = "We are passionate about empowering individuals and businesses to take control of their finances and achieve their financial goals.",
}) {
    return (
        <>
            {showTopDivider && (
                <div className="w-full h-px bg-gray-200 max-w-[1300px] mx-auto mt-16 sm:mt-10" />
            )}
            {/* No bg-white here (deliberately) when overlapCTA is on: with a negative
                bottom margin on the last child and no bottom padding/border on this
                section, the child's margin collapses through and drags the *next*
                sibling up underneath — but this section's own box still renders at its
                un-shrunk auto height, so a bg-white here would paint solid white across
                the full width all the way down to the cards' bottom edge, hiding the
                overlap entirely. Leaving it transparent lets the CTA's dark background
                show through beside the (narrower, its own bg-white) card grid instead. */}
            <section className="relative z-10 w-full pt-16 sm:pt-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-2xl font-medium text-[#0d0c22]">{title}</h2>
                    <p className="mt-2 text-base sm:text-lg font-light text-[#3d3d4e]">
                        {description}
                    </p>
                </motion.div>

                {/* overlapCTA: cards bleed into the CTA section below (used on /who-we-are,
                    which pads its CTA top enough to clear it). When false, the cards stay
                    fully within this section and hand off a normal white→colored boundary
                    gap instead (full 64px, not halved — see design system padding rule). */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`relative z-20 bg-white max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${overlapCTA ? "-mb-0 sm:-mb-30 lg:-mb-[206px]" : "mb-10 sm:mb-16"
                        }`}
                >
                    {INSIGHTS.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col gap-5 px-6 py-9 border-b lg:border-b-0 lg:border-r border-[#d9d9d9] last:border-0"
                        >
                            <div className="relative w-full h-[170px] sm:h-[200px]">
                                <Image src={item.img} alt={item.text} fill className="object-cover" />
                            </div>
                            <p className="text-base font-medium text-black">{item.date}</p>
                            <p className="text-base font-light text-[#6c6c6c]">{item.text}</p>
                            <button
                                type="button"
                                className="flex items-center justify-between w-[118px] text-[#2d8ec5] text-base font-light"
                            >
                                Read More
                                <Image src={insightsArrow} alt="" width={25} height={25} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
}
