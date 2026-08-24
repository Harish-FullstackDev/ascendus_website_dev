"use client";

// Reuses the homepage's hero background treatment as-is — the Figma hero for
// this page (a striped navy gradient with a bespoke header baked into the
// section) was flawed, so per instructions this section borrows the
// approved Home hero pattern instead of translating the Figma version.
import Image from "next/image";
import heroBg from "@/assets/HomePage/Hero/hero-bg.png";

export default function Hero() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-black">
            <Image src={heroBg} alt="" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        </div>
    );
}
