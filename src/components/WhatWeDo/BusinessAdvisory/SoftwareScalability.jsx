"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import codeBg from "@/assets/WhatWeDo/Business Advisory/webp/Business_Software_Scalability.webp";

export default function SoftwareScalability() {
    return (
        <section className="w-full py-10 sm:py-8 px-6 sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-16"
            >
                <h2 className="text-[#2E3033] text-[28px] font-semibold">
                    Software Scalability
                </h2>

                <div className="text-[#55595E] text-base sm:text-lg font-light">
                    <p>
                        Defining transformation roadmaps, business architecture, and process change.
                    </p>
                </div>


            </motion.div>

            {/* Flex row instead of two absolutely-positioned panels: the old markup gave the
                text panel `sm:w-[65%] lg:w-[59.5%]` and the image `sm:w-[40.5%]` with no lg
                override, so between sm and lg (65 + 40.5 = 105.5%) the two panels actually
                overlapped by 5.5% — and below sm, both were `w-full inset-y-0`, so on mobile
                the opaque white text panel sat directly on top of the image and hid it
                completely. A flex row can't overlap its children by construction, and `flex-1`
                on the image lets it fill whatever width the text column doesn't use at any
                size, so there's nothing left to keep manually in sync across breakpoints. */}
            <div className="w-full flex flex-col sm:flex-row sm:items-stretch gap-8 sm:gap-16 lg:gap-[100px] sm:px-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="w-full sm:w-[59.5%] bg-white flex items-center  py-10"
                >
                    <div className="flex flex-col gap-5 sm:gap-[34px] text-[#2E3033] w-full">
                        <h2 className="text-xl sm:text-2xl font-semibold">
                            Strategy That Becomes a Roadmap, Not a Deck
                        </h2>

                        <p className="text-sm sm:text-lg text-[#55595E] font-light">
                            We translate business and digital strategy
                            into a sequenced transformation roadmap with clear ownership, dependencies, and
                            milestones, so it survives the handoff from strategy to delivery.
                        </p>
                        <h2 className="text-xl sm:text-2xl text-[#2E3033] font-semibold">
                            Process Change People Actually Adopt
                        </h2>

                        <p className="text-sm sm:text-lg text-[#55595E] font-light">
                            We pair process reengineering with structured
                            change management, because a redesigned process that nobody follows delivers zero value,
                            no matter how sound the design.
                        </p>
                    </div>
                </motion.div>

                {/* Figma's image is ~432x464 — a portrait-leaning box, not a landscape one.
                    sm:items-stretch on the row parent stretches a flexible-width item to the
                    row's full height *before* aspect-ratio gets a say, which silently defeated
                    aspect-[27/29] below (the box was still being sized off the text column's
                    height, just with a different symptom: awkward object-cover cropping).
                    sm:self-start opts this item out of that stretch so aspect-ratio actually
                    drives its height from its own resolved width. */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full sm:flex-1 sm:self-start aspect-[4/3] sm:aspect-[27/29]"
                >
                    <Image
                        src={codeBg}
                        alt="RESTful & GraphQL APIs"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}

