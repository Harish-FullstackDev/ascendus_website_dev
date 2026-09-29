"use client";

import Image from "next/image";
import Link from "next/link";

import arrowRight from "@/assets/About-us/icons/arrow-right-12.svg";

// One insight tile, shared by the Services, Solutions and About Us insight
// sections. Figma (695:263) draws it 248x312 with a fixed 148px white panel
// that carries its own top rule over the photo, a 20% black scrim on the
// photo, a 14px #0061af category, a 16px #0e2b4b headline and a 12x8 arrow.
// The panel is 148px, not a share of the card, so the copy lands in the same
// place on every tile. It is a minimum: a three-line headline (Solutions' SAP
// and Dynamics tiles) grows the panel up over the photo instead of pushing the
// link into the card's bottom edge.
export default function InsightCard({ ctaLabel = "Explore Now", description, href, image, title }) {
    return (
        <Link
            href={href}
            className="group relative flex h-[312px] flex-col justify-end overflow-hidden rounded-[12px] border border-[#c9d0d8]"
        >
            <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1280px) 248px, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative flex min-h-[148px] flex-col gap-2 border-t border-[#c9d0d8] bg-white px-6 pb-6 pt-4">
                <h3 className="text-[14px] font-normal leading-[1.4] text-[#0061af]">{title}</h3>

                <p className="max-w-[200px] text-base font-normal capitalize leading-[1.5] text-[#0e2b4b]">
                    {description}
                </p>

                <span className="flex items-center gap-[9px] text-[14px] font-normal leading-[1.4] text-[#005192]">
                    {ctaLabel}
                    <Image
                        src={arrowRight}
                        alt=""
                        className="h-2 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
            </div>
        </Link>
    );
}
