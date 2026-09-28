"use client";

import Image from "next/image";

// The icon+title+description tile used by "Our Approach". `tone="dark"` gives
// the light-on-dark colours.
export default function ApproachPillar({ icon, title, description, tone = "light" }) {
    const isDark = tone === "dark";

    return (
        <div className="flex flex-1 flex-col items-center gap-2 px-3 py-1.5 text-center">
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
