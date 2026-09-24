"use client";

import Image from "next/image";

// The icon-over-label tile used twice on this page: in "More Than Services. A
// True Partner." on the dark band, and again in the pale strip under the About
// Us section. Identical geometry in Figma, only the stroke and text colour
// change, so the two callers pass `tone` and share everything else.
export default function ServicePillar({ icon, label, tone = "dark" }) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2 py-1.5">
            <span className="flex size-16 items-center justify-center rounded-[10px]">
                <Image src={icon} alt="" className="size-12" />
            </span>

            <p
                className={`max-w-[200px] pt-2 text-center text-sm font-normal capitalize leading-[1.5] sm:text-base ${tone === "dark" ? "text-[#f8f8f8]" : "text-[#00223d]"
                    }`}
            >
                {label}
            </p>
        </div>
    );
}
