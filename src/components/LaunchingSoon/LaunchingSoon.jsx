"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import logo from "../../assets/Brand/Ascendus_Logo_Primary.svg";
import Footer from "@/components/Footer/Footer";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700"] });

// Edit this to change the countdown target — ISO 8601 with UTC offset (GCC = +04:00).
const LAUNCH_DATE = "2026-08-30T00:00:00+04:00";

const TIME_UNITS = [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Seconds" },
];

function useMagnetic(strength = 0.3) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
            yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
        };
        const handleLeave = () => {
            xTo(0);
            yTo(0);
        };

        el.addEventListener("pointermove", handleMove);
        el.addEventListener("pointerleave", handleLeave);
        return () => {
            el.removeEventListener("pointermove", handleMove);
            el.removeEventListener("pointerleave", handleLeave);
        };
    }, [strength]);

    return ref;
}

function MagneticCta({ href, children }) {
    const ref = useMagnetic(0.3);
    return (
        <Link href={href} className="inline-block cursor-pointer">
            <span
                ref={ref}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-slate-900 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
                {children}
                <ArrowRight className="h-4 w-4 cursor-pointer transition-transform group-hover:translate-x-1" />
            </span>
        </Link>
    );
}

const gridBackground = {
    backgroundImage:
        "linear-gradient(rgba(46,48,51,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(46,48,51,0.055) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
};

function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const tick = () => {
            const diff = Math.max(target - Date.now(), 0);
            setTimeLeft({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff / 3600000) % 24),
                minutes: Math.floor((diff / 60000) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };

        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return timeLeft;
}

function TimeUnit({ value, label }) {
    const digits = String(value).padStart(2, "0");
    const digitClass = `${orbitron.className} text-3xl font-bold tabular-nums tracking-wider text-slate-900 md:text-5xl`;

    return (
        <div className="flex flex-col items-center">
            <span className={digitClass} style={{ textShadow: "0 0 22px rgba(0,97,175,0.25)" }}>
                {digits}
            </span>

            {/* mirrored reflection, dark near the digit fading to transparent — the gradient reaches 0 opacity
          before the clip edge so it fades out smoothly instead of being cut off mid-fade */}
            <div
                aria-hidden="true"
                className="pointer-events-none mt-0.5 max-h-[16px] select-none overflow-hidden md:max-h-[28px]"
            >
                <span
                    className={`${digitClass} block leading-none`}
                    style={{
                        transform: "scaleY(-1)",
                        backgroundImage:
                            "linear-gradient(to bottom, transparent 45%, rgba(46,48,51,0.18) 70%, rgba(46,48,51,0.65) 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    {digits}
                </span>
            </div>

            <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 md:mt-4 md:text-[11px]">
                {label}
            </span>
        </div>
    );
}

function CountdownTimer() {
    const timeLeft = useCountdown(LAUNCH_DATE);

    return (
        <div className="inline-flex items-start gap-3 overflow-hidden border border-slate-200 bg-white/70 px-5 py-5 shadow-[0_20px_60px_-24px_rgba(46,48,51,0.2)] backdrop-blur-sm md:gap-6 md:px-9 md:py-4">
            {TIME_UNITS.flatMap((unit, i) => {
                const items = [
                    <TimeUnit key={unit.key} value={timeLeft[unit.key]} label={unit.label} />,
                ];
                if (i < TIME_UNITS.length - 1) {
                    items.push(
                        <span
                            key={`${unit.key}-sep`}
                            className={`${orbitron.className} pt-1 text-2xl font-semibold text-slate-300 md:pt-2 md:text-4xl`}
                        >
                            :
                        </span>
                    );
                }
                return items;
            })}
        </div>
    );
}

export default function LaunchingSoon() {
    return (
        <div className="relative w-full bg-white selection:bg-slate-900 selection:text-white">
            {/* SECTION 1 — hero */}
            <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_80%)]"
                    style={gridBackground}
                />

                <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
                    <Link href="/" aria-label="Ascendus home">
                        <Image src={logo} alt="Ascendus Logo" className="h-8 w-auto md:h-10.5" priority />
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </header>

                <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-[16vh] pt-0 text-center md:pb-[25vh] md:pt-0">
                    <div className="animate-fade-up mb-6">
                        <CountdownTimer />
                    </div>

                    <h1 className="animate-fade-up animation-delay-300 bg-gradient-to-b from-slate-950 via-slate-700 to-slate-400 bg-clip-text text-[clamp(3.5rem,13vw,9.5rem)] font-semibold uppercase leading-[0.9] tracking-tight text-transparent">
                        Launching
                        <span className="animate-pulse">...</span>
                    </h1>

                    <p
                        className="animate-fade-up mt-2 text-base font-semibold text-slate-500 md:text-xl"
                        style={{ animationDelay: "0.45s" }}
                    >
                        Something new is coming
                    </p>

                    <div className="animate-fade-up mt-8" style={{ animationDelay: "0.6s" }}>
                        <MagneticCta href="/services">Explore what we do</MagneticCta>
                    </div>
                </main>

                {/* giant SOON watermark — clipped to ~60% visible within this section */}
                <div className="pointer-events-none absolute inset-x-0 bottom-[4vh] z-0 translate-y-[40%] select-none overflow-hidden md:bottom-[2.5vh]">
                    <p
                        className="animate-wordmark-reveal text-center font-black uppercase leading-none tracking-tight text-[38.5vw]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to bottom, rgba(46,48,51,0.20), rgba(46,48,51,0.05) 55%, rgba(46,48,51,0))",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        SOON
                    </p>
                </div>

                {/* absolutely positioned (not flow) so it can never push the section taller than one screen */}
                <button
                    type="button"
                    onClick={() =>
                        document.getElementById("launching-soon-next")?.scrollIntoView({ behavior: "smooth" })
                    }
                    aria-label="Scroll to explore"
                    className="group absolute inset-x-0 bottom-10 z-20 flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-900 md:bottom-12"
                >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
                        Scroll to explore
                    </span>
                    <ChevronDown className="dot-bounce h-4 w-4 transition-transform group-hover:translate-y-1" />
                </button>
            </section>

            {/* SECTION 2 — site footer */}
            <div id="launching-soon-next">
                <Footer />
            </div>
        </div>
    );
}

