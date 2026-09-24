"use client";

import Image from "next/image";
import Link from "next/link";

import arrowRight from "@/assets/Services/icons/arrow-right-8.svg";

// One insight tile. Figma draws the pale footer as a vertical gradient whose
// two stops sit at 65.8% and 66.6% — a hard edge, not a fade — so it is built
// as a real block covering the bottom 34.2% of the card rather than as a
// gradient that would wash the photograph above it.
export default function InsightCard({ description, href, image, title }) {
    return (
        <Link
            href={href}
            className="group relative flex h-[338px] flex-col justify-end overflow-hidden rounded-[12px] border border-[#c9d0d8]"
        >
            <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 253px, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 h-[34.2%] bg-[#f8f8f8]" />

            <div className="relative flex flex-col gap-2 px-6 pb-3">
                <h3 className="text-[18px] font-medium leading-[1.2] text-[#00223d]">{title}</h3>

                <p className="max-w-[200px] text-[14px] font-normal leading-[1.4] text-[#00223d]">
                    {description}
                </p>

                <span className="flex items-center gap-2 text-[14px] font-normal leading-[1.4] text-[#005192]">
                    Explore Now
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
