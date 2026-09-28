"use client";

import Image from "next/image";

// The icon+title+description tile shared by "Our Approach" (light) and "Why
// Ascendus" (dark) — identical geometry in Figma, only the stroke and text
// colours change, so callers pass `tone`.
export default function ApproachPillar({ icon, title, description, tone = "light", align = "center" }) {
    const isDark = tone === "dark";
    const alignment = align === "start" ? "items-start text-left px-6 lg:px-8" : "items-center text-center px-3";

    return (
        <div className={`flex flex-1 flex-col gap-2 py-1.5 ${alignment}`}>
            <span className="flex size-16 items-center justify-center rounded-[10px]">
                <Image src={icon} alt="" className="size-12" />
            </span>

            <p className={`pt-2 text-base font-normal capitalize leading-[1.5] ${isDark ? "text-white" : "text-[#0e2b4b]"}`}>
                {title}
            </p>

            <p className={`max-w-[180px] text-sm leading-[1.4] ${isDark ? "text-[#c9d0d8]" : "text-[#415773]"}`}>
                {description}
            </p>
        </div>
    );
}
