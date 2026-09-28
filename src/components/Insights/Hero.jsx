"use client";

import Image from "next/image";

// Same treatment as the /services/, /solutions/, /industries/ etc. heroes: a
// left-to-right darkening gradient rather than the old top-down fade, so the
// hero reads consistently across the whole site.
export default function Hero({ backgroundImage }) {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#0a3a52]">
            {backgroundImage && (
                <Image src={backgroundImage} alt="" fill priority className="object-cover object-center" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>
    );
}
