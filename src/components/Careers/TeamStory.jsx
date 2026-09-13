"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AVATAR = "/blog/default-author.svg";

const TESTIMONIALS = [
    {
        avatar: AVATAR,
        name: "Tharanidharen",
        role: "Graphic Designer",
        quote:
            "I get to shape how the brand actually looks and feels across every touchpoint, not just push pixels on a template. That creative ownership is rare to find.",
    },
    {
        avatar: AVATAR,
        name: "Santhosh",
        role: "SAP Delivery",
        quote:
            "Every SAP engagement here is run with the same discipline, whether it's a small support ticket or a full rollout. That consistency is what clients keep coming back for.",
    },
    {
        avatar: AVATAR,
        name: "Deepak",
        role: "Business Development Executive",
        quote:
            "I'm trusted to build client relationships from the first conversation onward, not just hand off leads. That ownership is what keeps the work interesting.",
    },
    {
        avatar: AVATAR,
        name: "Sneha",
        role: "SAP Project Coordinator",
        quote:
            "Coordinating across teams taught me more in a year here than I expected. Everyone is approachable, and there's always someone willing to explain the why behind a decision.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeamStory() {
    return (
        <section className="bg-[#fdfdfd] py-10 sm:py-8">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* These two hairlines are identical divs, but a 1px box at a fractional y
                    offset has its 10% of black split across two device rows, and that
                    split is what the eye reads as thickness. Two things had to be true
                    for them to match:

                    1. Whole-number layout between them — the heading block was 73.328px
                       and the card row 245.75px, so the rules sat on different subpixel
                       phases (.578 vs .656) and the lower one rendered heavier. The
                       leading pins on the h2 and the quote below fix that.
                    2. A gap that stays whole once multiplied by the device pixel ratio.
                       With 517px between them, 517 x 1.4 = 723.8 put them back on
                       different phases at 140% zoom (measured: top peaked at 28/255
                       darkness, bottom at 22 spread over two rows — the bottom read as
                       thicker and softer). 520 is a multiple of 20, so the product is
                       whole at 1.1, 1.25, 1.4, 1.5, 1.75 and 2, and both rules rasterise
                       the same way at every one. That is what the 67px below buys.

                    Tried and rejected: transform-gpu on each rule, hoping compositing
                    would snap them to the pixel grid. Measured no change at 1.1 or 1.4. */}
                <div aria-hidden className="w-full h-px bg-black/10 mb-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-[28px] sm:leading-9 font-semibold text-[#2E3033] capitalize">Our Team Story</h2>
                    <p className="mt-2 text-sm font-light sm:text-lg text-[#55595E]">
                        You might want to hear from some of our team on their unique expeditions
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-wrap justify-center gap-x-14 gap-y-14 sm:gap-x-16 lg:gap-x-30"
                >
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={`${item.name}-${index}`}
                            variants={itemVariants}
                            className="flex w-60 shrink-0 flex-col items-center text-center gap-3"
                        >
                            <Image
                                src={item.avatar}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="rounded-full object-cover size-16 bg-[#d8d8d8]"
                            />
                            <div>
                                <p className="font-semibold text-[#2E3033] text-base">{item.name}</p>
                                <p className="text-[#3d3d4e] text-sm opacity-60">{item.role}</p>
                            </div>
                            <p className="text-sm text-[#55595E] leading-6">{item.quote}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div aria-hidden className="w-full h-px bg-black/10 mt-[67px]" />
            </div>
        </section>
    );
}
