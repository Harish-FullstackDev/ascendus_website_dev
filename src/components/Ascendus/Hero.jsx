"use client";

// Reuses the homepage's hero background treatment as-is — the Figma hero for
// this page (a striped navy gradient with a bespoke header baked into the
// section) was flawed, so per instructions this section borrows the
// approved Home hero pattern instead of translating the Figma version.
export default function Hero() {
    return (
        <div className="relative w-full h-full overflow-hidden bg-black">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover object-center"
            >
                <source src="/Ascendus/Homepage_hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        </div>
    );
}
