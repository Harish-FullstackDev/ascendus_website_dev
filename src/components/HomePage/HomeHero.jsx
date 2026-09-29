"use client";

export default function HomeHero() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#0a3a52]">
            <video
                src="/Ascendus/Ascendus_Hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
        </div>
    );
}
