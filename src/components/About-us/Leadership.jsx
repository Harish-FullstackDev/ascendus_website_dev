"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ceoBanner from "@/assets/About-us/leadership/ceo-banner.png";

// Section 7 — "Leadership", Figma 1734:4696 (1440 x 481). The CEO photo starts
// 27% in and runs past the right edge; a white wash with a slight slant covers
// all but its right third, and the copy sits vertically centred on the white.
// The name tag is placed relative to the photo so it stays beside him as the
// band scales. Below lg the copy stacks above the photo instead.
export default function Leadership() {
    return (
        <section className="relative isolate flex w-full flex-col overflow-hidden bg-white lg:min-h-[481px] lg:flex-row lg:items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col gap-3 px-6 py-10 sm:px-[64px] sm:py-16 lg:max-w-[58%] lg:py-10 xl:max-w-none"
            >
                <p className="text-[14px] font-medium uppercase tracking-[0.7px] text-[#0061af] leading-4">
                    Leadership
                </p>

                {/* On small laptops (lg) the white side is only ~600px wide, so the
                    copy is capped at 58% and the heading wraps freely; Figma's
                    forced line breaks return at xl, where the lines fit. */}
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-[#0e2b4b] lg:text-[28px] xl:text-[32px]">
                    Digital transformation doesn&apos;t begin with technology.
                    <br className="hidden sm:block lg:hidden xl:block" /> It begins with the right business problem.
                </h2>

                <p className="text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                    Technology is the enabler. Business value is the goal.
                    <br className="hidden sm:block" /> People make the transformation work.
                </p>
            </motion.div>

            <div className="relative aspect-[1920/819] w-full lg:absolute lg:inset-y-0 lg:left-[27.08%] lg:-z-10 lg:aspect-auto lg:w-[76.78%]">
                <Image
                    src={ceoBanner}
                    alt="Krishnakumar, CEO of Ascendus"
                    fill
                    sizes="(min-width: 1024px) 77vw, 100vw"
                    placeholder="blur"
                    className="object-cover"
                />

                {/* Liquid glass, matched to Figma's glass effect: a dark, lightly
                    frosted pane (the jacket weave still reads through), a thin
                    pale rim, and a soft inner glow along the edges where real
                    glass bends the light. No sheen or colour boost — those read
                    as frosted plastic rather than glass. */}
                <div className="absolute left-[74.2%] top-[75%] flex flex-col rounded-[12px] border border-white/25 bg-black/30 px-3 py-2 text-[12px] capitalize leading-[1.5] text-white whitespace-nowrap shadow-[inset_0_0_10px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-[3px] max-lg:-translate-x-1/2 sm:px-6 sm:py-3 sm:text-base">
                    <p className="font-semibold">Krishnakumar</p>
                    <p>CEO, Ascendus</p>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-[5] hidden lg:block"
                style={{
                    backgroundImage:
                        "linear-gradient(-87.69deg, rgba(255, 255, 255, 0) 34.696%, rgb(255, 255, 255) 34.719%)",
                }}
            />
        </section>
    );
}
