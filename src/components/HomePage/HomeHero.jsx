"use client";

import Image from "next/image";

// Figma (633:4798) uses the exact same photograph as the About Us hero (and
// Careers), so it is imported from there rather than shipped a third time.
// The photo is already dark on the left, behind the copy, so Figma adds no
// scrim of its own.
import heroBg from "@/assets/About-us/hero.jpg";

export default function HomeHero() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#0a3a52]">
            <Image src={heroBg} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
    );
}
