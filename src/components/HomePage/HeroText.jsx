"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

export default function HeroText() {
    const [showCalendly, setShowCalendly] = useState(false);

    const scrollToCapabilities = () => {
        document.getElementById("core-capabilities")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="absolute inset-x-0 top-[18%] sm:top-[23%] px-6 py-6 sm:py-0 sm:px-10 lg:px-[63px]">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full max-w-[1057px]"
            >
                <p className="text-white/90 text-sm sm:text-lg lg:text-xl uppercase tracking-wide font-light">
                    Enterprise Technology &amp; SAP Consulting
                </p>
                <div className="mt-3 sm:mt-1 h-px w-full bg-white/40" />
                <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium capitalize mt-6 sm:mt-6 leading-tight">
                    Enterprise technology that moves your business forward, not just your systems.
                </h1>

                {/* flex-col sm:flex-row + items-start: at mobile widths the two
                    buttons don't fit on one row (they're wider than the content
                    column), so flex-wrap was silently wrapping them into a cramped,
                    unpredictable two-line stack. Stacking explicitly instead reads as
                    intentional, and items-start keeps each button sized to its own
                    content (the default flex-col cross-axis behavior is stretch,
                    which would otherwise force them full-width) — same natural width
                    as the desktop row uses. */}
                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-4 mt-8 sm:mt-10">
                    <button
                        type="button"
                        onClick={() => setShowCalendly(true)}
                        className="rounded-[54px] border border-[#d0d0d0] bg-[#0a3a52] px-8 py-3 text-base sm:text-lg font-light text-white transition-colors hover:bg-white hover:text-[#0a3a52]"
                    >
                        Book a Consultation
                    </button>
                    {/* Mobile only: solid white/black instead of the ghost outline,
                        inverting to transparent/white on hover or press (:active covers
                        the tap-and-hold state on touch, since :hover doesn't reliably
                        fire there). Desktop (sm+) keeps the ghost treatment — white
                        outline on transparent, filling white with navy text on hover —
                        which already reads fine against the dark hero photo there. */}
                    <button
                        type="button"
                        onClick={scrollToCapabilities}
                        className="rounded-[54px] border border-white px-8 py-3 text-base sm:text-lg font-light transition-colors bg-white text-black hover:bg-transparent hover:text-white active:bg-transparent active:text-white sm:bg-transparent sm:text-white sm:hover:bg-white sm:hover:text-[#0a3a52] sm:active:bg-white sm:active:text-[#0a3a52]"
                    >
                        See What We Do
                    </button>
                </div>
            </motion.div>

            <CalendlyModal
                className="z-100"
                isOpen={showCalendly}
                onClose={() => setShowCalendly(false)}
                calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
                pageSettings={{
                    backgroundColor: "ffffff",
                    primaryColor: "#2d8ec5",
                    textColor: "#003756",
                }}
            />
        </div>
    );
}

