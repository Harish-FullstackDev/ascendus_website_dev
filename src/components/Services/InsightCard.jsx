"use client";

import Image from "next/image";
import Link from "next/link";

import arrowRight from "@/assets/Services/icons/arrow-right-8.svg";

// One insight tile. Figma draws the pale footer as a vertical gradient whose
// two stops sit a fraction of a percent apart — a hard edge, not a fade — so
// it is built as a real block covering the bottom of the card rather than as a
// gradient that would wash the photograph above it.
//
// Two sizes exist in Figma: the Services tile (370:3609) is 338px tall with
// the panel on the bottom 34.2%; the Solutions tile (497:399) is 377px tall
// with the panel on the bottom 43.07% (stops at 56.93%) and 32px under the
// copy. The Solutions frame also paints its 20% black *under* the photo (a
// fallback fill the opaque image hides), so that variant has no scrim.
const VARIANTS = {
    services: { height: "h-[338px]", panel: "h-[34.2%]", padding: "pb-3", scrim: true },
    tall: { height: "h-[377px]", panel: "h-[43.07%]", padding: "pb-8", scrim: false },
};

export default function InsightCard({ ctaLabel = "Explore Now", description, href, image, title, variant = "services" }) {
    const v = VARIANTS[variant];

    return (
        <Link
            href={href}
            className={`group relative flex ${v.height} flex-col justify-end overflow-hidden rounded-[12px] border border-[#c9d0d8]`}
        >
            <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 253px, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {v.scrim ? <div className="absolute inset-0 bg-black/20" /> : null}
            <div className={`absolute inset-x-0 bottom-0 ${v.panel} bg-[#f8f8f8]`} />

            <div className={`relative flex flex-col gap-2 px-6 ${v.padding}`}>
                <h3 className="text-[18px] font-medium leading-[1.2] text-[#00223d]">{title}</h3>

                <p className="max-w-[200px] text-[14px] font-normal leading-[1.4] text-[#00223d]">
                    {description}
                </p>

                <span className="flex items-center gap-2 text-[14px] font-normal leading-[1.4] text-[#005192]">
                    {ctaLabel}
                    <Image
                        src={arrowRight}
                        alt=""
                        className="h-[5px] w-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
            </div>
        </Link>
    );
}
