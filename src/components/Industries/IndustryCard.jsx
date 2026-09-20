"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import arrowIcon from "@/assets/Industries/icons/arrow-right-small.svg";

// The photo tile used by both "A Collaborative Ecosystem" and "Industry
// Challenges. Real Solution" — identical construction in Figma, so it lives here
// once: a dimmed photo over a near-black plate, a bottom-up scrim, and the copy
// pinned to the foot of the card.
export default function IndustryCard({ description, href = "/contact-us/", image, title }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full"
        >
            {/* Spacer and content share one grid cell, so the card is as tall as
                whichever is larger. Figma's 252:315 ratio becomes a floor rather
                than a fixed box: at narrow widths the copy needs more room than
                the ratio allows, and a hard `aspect-[252/315]` would clip the
                title off the top. */}
            <Link
                href={href}
                className="group relative grid w-full overflow-hidden rounded-[12px] bg-[#101828]"
            >
                <div className="col-start-1 row-start-1 aspect-[252/315] w-full" aria-hidden />

                {/* 60% opacity in Figma, which is what darkens the photo into the
                    plate behind it rather than a separate tint layer. */}
                <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="col-start-1 row-start-1 relative flex w-full flex-col items-start justify-end gap-2 p-[17.7px]">
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-[1.35]">{title}</h3>

                    <p className="text-xs sm:text-sm font-normal text-white/80 tracking-[0.63px] leading-[1.35]">
                        {description}
                    </p>

                    <span className="mt-1 flex size-[30px] shrink-0 items-center justify-center rounded-full border-[0.84px] border-white/40 transition-colors duration-300 group-hover:border-white group-hover:bg-white/10">
                        <Image
                            src={arrowIcon}
                            alt=""
                            className="size-[12.6px] transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
