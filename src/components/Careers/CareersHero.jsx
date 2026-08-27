"use client";

import Image from "next/image";
// import heroBg from "@/assets/career/Hero Image.svg";
import heroBg from "@/assets/career/webp/Careers_Hero.webp";

export default function CareersHero() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-black">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-transparent" />
        </div>
    );
}
