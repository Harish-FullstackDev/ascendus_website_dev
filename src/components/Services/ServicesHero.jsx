"use client";

import Image from "next/image";
import heroBg from "@/assets/Services/Services_Hero.webp";

// Background layer only — the copy lives in ServicesHeroText so the text can be
// stacked above this image without inheriting its overflow clipping. Same split
// as the /solutions/, /industries/, /partnership/ and /contact-us/ heroes.
export default function ServicesHero() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#0a3a52]">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>
    );
}
