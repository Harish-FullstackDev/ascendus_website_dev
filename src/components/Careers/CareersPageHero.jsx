"use client";

import Image from "next/image";

// Figma (602:2046) uses the exact same photograph as the About Us hero, so it
// is imported from there rather than shipped twice. On this page the login
// card sits over the right-hand side of the photo.
import heroBg from "@/assets/About-us/hero.jpg";

export default function CareersPageHero() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#0a3a52]">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>
    );
}
