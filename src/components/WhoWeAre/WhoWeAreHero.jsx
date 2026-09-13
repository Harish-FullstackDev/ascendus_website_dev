"use client";

import Image from "next/image";
import heroBg from "@/assets/WhoWeAre/who_we_are_hero.webp";

export default function WhoWeAreHero() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-black">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        </div>
    );
}
