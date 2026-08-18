"use client";

import Image from "next/image";
import heroBg from "@/assets/WhatWeDo/Artificial Intelligence/AI_Imgs/AI_Hero_2560x1600.webp";

export default function Hero() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-black">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        </div>
    );
}
