"use client";

import Image from "next/image";
// import heroBg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Cybersecurity_Hero_Bg.svg";
import heroBg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/new/Cybersecurity.jpg";

export default function Hero() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />
        </div>
    );
}
