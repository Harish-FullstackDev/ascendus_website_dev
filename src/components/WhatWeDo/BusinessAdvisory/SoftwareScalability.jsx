"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import codeBg from "@/assets/WhatWeDo/Business Advisory/new/Software.jpg";

export default function SoftwareScalability() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[42px]"
            >
                <h2 className="text-[#16171a] text-2xl font-medium">
                    Software Scalability
                </h2>

                <div className="text-[#3d3d4e] text-base sm:text-lg font-light">
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
            <div className="w-full flex flex-col sm:flex-row sm:items-stretch gap-8 sm:gap-16 lg:gap-[100px] sm:px-[70px]">
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
                    <div className="flex flex-col gap-5 sm:gap-[34px] text-black w-full">
                        <p className="text-xl sm:text-[32px] font-normal">
                            Strategy That Becomes a Roadmap, Not a Deck
                        </p>

                        <p className="text-sm sm:text-lg font-light">
                            We translate business and digital strategy
                            into a sequenced transformation roadmap with clear ownership, dependencies, and
                            milestones, so it survives the handoff from strategy to delivery.
                        </p>
                        <p className="text-xl sm:text-[32px] font-normal">
                            Process Change People Actually Adopt
                        </p>

                        <p className="text-sm sm:text-lg font-light">
                            We pair process reengineering with structured
                            change management, because a redesigned process that nobody follows delivers zero value,
                            no matter how sound the design.
                        </p>
                    </div>
                </motion.div>

                {/* aspect-[4/3] gives the image a sensible height while it's stacked full-width
                    on mobile; sm:aspect-auto cancels that once the row layout kicks in, letting
                    it stretch (via sm:items-stretch on the parent) to match the text column's
                    own content-driven height instead. */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full sm:flex-1 aspect-[4/3] sm:aspect-auto"
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

