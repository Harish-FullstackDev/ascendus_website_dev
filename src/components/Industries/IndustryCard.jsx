"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import thinArrowIcon from "@/assets/Industries/icons/arrow-right.svg";

// The photo tile used by both "A Collaborative Ecosystem" and "Industry
// Challenges. Real Solution" — the same dimmed photo over a near-black plate,
// the same bottom-up scrim, the same copy pinned to the foot of the card and
// the same "Explore" footer. The two sections differ only in how tightly the
// card is padded and how strong the body copy sits, which is all `variant`
// decides.
const VARIANTS = {
    // Our Industries (Figma 258:1228): photo stays bright at rest, description
    // is hidden until hover — only the title and "Explore" show by default.
    industry: { body: "text-white", padding: "p-[24px]", descriptionOnHover: true },
    // Industry Challenges (Figma 271:4308): same reveal-on-hover behavior as
    // the "Our Industries" cards above.
    solution: { body: "text-white/80", padding: "p-[24px]", descriptionOnHover: true },
};

export default function IndustryCard({
    actionLabel = "Explore",
    description,
    href = "/contact-us/",
    image,
    title,
    variant = "industry",
}) {
    const styles = VARIANTS[variant];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full"
        >
            {/* Spacer and content share one grid cell, so the card is as tall as
                whichever is larger. Figma's 253:317 ratio becomes a floor rather
                than a fixed box: at narrow widths the copy needs more room than
                the ratio allows, and a hard aspect ratio would clip the title
                off the top. */}
            <Link
                href={href}
                className="group relative grid w-full overflow-hidden rounded-[12px] bg-[#101828]"
            >
                <div className="col-start-1 row-start-1 aspect-[253/317] w-full" aria-hidden />

                {/* 60% opacity in Figma, which is what darkens the photo into the
                    plate behind it rather than a separate tint layer. The
                    "industry" variant stays brighter at rest and only dims to
                    that 60% on hover, so the photo reads clearly by default. */}
                <Image
                    src={image}
                    alt=""
                    fill
                    className={
                        "object-cover transition-[opacity,transform] duration-500 group-hover:scale-105 " +
                        (styles.descriptionOnHover ? "opacity-90 group-hover:opacity-60" : "opacity-60")
                    }
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                <div
                    className={
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 " +
                        (styles.descriptionOnHover ? "opacity-70 group-hover:opacity-100" : "")
                    }
                />

                {/* Explore stays pinned to the card's foot; only the title +
                    description group above it grows to fill and center in
                    the leftover space on hover. */}
                <div
                    className={
                        "col-start-1 row-start-1 relative flex h-full w-full flex-col items-start " +
                        styles.padding
                    }
                >
                    {/* justify-content can't be transitioned (it's a discrete
                        keyword), so the block stays flush to a growing
                        spacer above it and instead slides up off the footer
                        via margin-bottom — a length, which interpolates
                        smoothly — settling 36px above "Explore" on hover
                        rather than jumping to dead center. */}
                    <div className="flex w-full flex-1 flex-col items-start justify-end">
                        <div
                            className={
                                "flex w-full flex-col items-start gap-2 " +
                                (styles.descriptionOnHover
                                    ? "transition-[margin-bottom] duration-500 ease-out group-hover:mb-9"
                                    : "")
                            }
                        >
                            <h3 className="text-base sm:text-lg font-medium text-white leading-[1.2]">{title}</h3>

                            <p
                                className={
                                    "text-xs sm:text-sm font-normal leading-[1.4] " +
                                    styles.body +
                                    (styles.descriptionOnHover
                                        ? " grid overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity] duration-500 group-hover:max-h-20 group-hover:opacity-100"
                                        : "")
                                }
                            >
                                {description}
                            </p>
                        </div>
                    </div>

                    <span className="flex items-center gap-2 pt-2">
                        <span className="text-sm font-medium text-white leading-6">{actionLabel}</span>
                        <Image
                            src={thinArrowIcon}
                            alt=""
                            className="size-[17.5px] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
