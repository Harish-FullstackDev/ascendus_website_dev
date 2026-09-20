"use client";

import Image from "next/image";
import heroBg from "@/assets/Contact-us/ContactUs_Hero.webp";

// Background layer only — the copy lives in ContactUsHeroText so the text can be
// stacked above this image without inheriting its overflow clipping.
export default function ContactUsHero() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#0a3a52]">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>
    );
}
