"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import serverRoomImg from "@/assets/HomePage/Enterprise_Technologies.webp";
import UnderlineArrowLink from "./UnderlineArrowLink";

export default function AboutPartner() {
    return (
        // Bordering the hero curtain above (full 64 top); the section below is
        // also white, so the bottom half of that boundary (32) lives here.
        <section className="w-full bg-white pt-10 pb-8 sm:pt-16 sm:pb-8 px-8 sm:px-[64px]">
            <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 min-w-0 flex flex-col gap-2"
                >
                    <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold w-full">
                        Make Enterprise Technology Work as One System.
                    </h2>
                    <p className="mt-4 text-[#55595E] text-base sm:text-lg font-light leading-[1.5]">
                        Most enterprise programs are not lost on strategy. They are lost in the handoffs: between the firm that designed the architecture and the firm that built it, between the project that went live and the team that has to run it, between a compliance requirement and the system that was already in production when it arrived. Ascendus keeps design, build and run under one accountable team, so architecture context is not re-learned at every stage.
                    </p>
                    <UnderlineArrowLink
                        href="/who-we-are"
                        label="Who We Are"
                        className="mt-6 self-start"
                    />
                </motion.div>

                {/* A share of the row, not a fixed 640px. With `lg:w-[640px] shrink-0`
                    the graphic held its full width at every desktop size, so narrowing
                    the window took the whole difference out of the text column — at
                    1192px that left the copy 360px against the image's 640 and the
                    balance inverted. As a percentage both columns give ground together
                    and the proportion holds; max-w-[640px] keeps the Figma size as the
                    ceiling, so wide screens render exactly as they do today. */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[45%] max-w-[640px] aspect-video shrink-0"
                >
                    <Image
                        src={serverRoomImg}
                        alt="Enterprise technology infrastructure"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
