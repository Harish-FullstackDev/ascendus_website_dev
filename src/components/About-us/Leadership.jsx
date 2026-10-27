"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ceoBanner from "@/assets/About-us/leadership/ceo-banner.webp";

// Section 7 — "Leadership", Figma 1734:4696 (1440 x 481). Copy vertically
// centred on the left; on the right a slanted photo panel holds the full CEO
// portrait (500 x 480). The name tag is placed relative to the portrait so it
// stays beside him as the band scales. Below lg the copy stacks above the
// panel instead.
export default function Leadership() {
    return (
        <section className="relative isolate flex w-full flex-col overflow-hidden bg-white lg:min-h-[481px] lg:flex-row lg:items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col gap-3 px-6 py-10 sm:px-[64px] sm:py-16 lg:max-w-[52%] lg:py-10 xl:max-w-none"
            >
                <p className="text-[14px] font-medium uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    Leadership
                </p>

                {/* The copy stops short of the photo panel (46% wide at lg, a
                    fixed 540px from xl — just the 500px portrait plus its slant
                    and a sliver of backdrop, so the rest of the band stays white).
                    On small laptops the heading wraps freely. From xl it keeps
                    Figma's two unbroken lines; the longer one is ~24.7em wide, so
                    the size scales with the room left of the panel (viewport
                    minus 540 panel, 64 padding and a 16 gap) and tops out at
                    Figma's 32px. */}
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-[#0e2b4b] lg:text-[28px] xl:text-[clamp(26px,calc((100vw-620px)/24.7),32px)]">
                    <span className="xl:whitespace-nowrap">Digital transformation doesn&apos;t begin with technology.</span>
                    <br className="hidden sm:block lg:hidden xl:block" />{" "}
                    <span className="xl:whitespace-nowrap">It begins with the right business problem.</span>
                </h2>

                <p className="text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                    Technology is the enabler. Business value is the goal.
                    <br className="hidden sm:block" /> People make the transformation work.
                </p>
            </motion.div>

            {/* The photo panel: a slanted grey field painted to match the
                portrait's studio backdrop, with the whole portrait (never
                cropped) pinned to its right edge. The portrait's sides fade into
                the field so no seam shows where the photo ends. */}
            <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#e3e6ec_0%,#f1f3f8_50%,#ebeff4_100%)] lg:absolute lg:inset-y-0 lg:right-0 lg:-z-10 lg:w-[46%] lg:[clip-path:polygon(20px_0,100%_0,100%_100%,0_100%)] xl:w-[540px]">
                <div className="relative mx-auto aspect-[500/480] w-full max-w-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-full lg:w-auto lg:max-w-none">
                    <Image
                        src={ceoBanner}
                        alt="Krishnakumar, CEO of Ascendus"
                        fill
                        sizes="(min-width: 1024px) 500px, 100vw"
                        placeholder="blur"
                        className="object-cover max-lg:[mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] lg:[mask-image:linear-gradient(90deg,transparent,black_15%)]"
                    />

                {/* Liquid glass, matched to Figma's glass effect: a dark, lightly
                    frosted pane (the jacket weave still reads through), a thin
                    pale rim, and a soft inner glow along the edges where real
                    glass bends the light. No sheen or colour boost — those read
                    as frosted plastic rather than glass. */}
                    <div className="absolute left-[57%] top-[75%] flex flex-col rounded-[12px] border border-white/25 bg-black/30 px-3 py-2 text-[12px] capitalize leading-[1.5] text-white whitespace-nowrap shadow-[inset_0_0_10px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-[3px] sm:px-6 sm:py-3 sm:text-base">
                        <p className="font-semibold">Krishnakumar</p>
                        <p>CEO, Ascendus</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
