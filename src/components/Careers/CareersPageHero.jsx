"use client";

import Image from "next/image";

// Figma (1619:10952) uses the exact same photograph as the About Us hero, so
// it is imported from there rather than shipped twice.
import heroBg from "@/assets/About-us/hero.jpg";

export default function CareersPageHero() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#0a3a52]">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>
    );
}
