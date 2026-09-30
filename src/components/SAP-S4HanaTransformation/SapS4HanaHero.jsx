"use client";

import Image from "next/image";

// Figma (828:920) uses the exact same photograph as the About Us hero, so it is
// imported from there rather than shipped a third time. The darkening on the
// left is part of the photo itself; Figma draws no scrim over it.
import heroBg from "@/assets/About-us/hero.jpg";

export default function SapS4HanaHero() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#0a3a52]">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
        </div>
    );
}
