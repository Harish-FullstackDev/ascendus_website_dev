"use client";

// Same hero copy/CTAs the Figma design specified for this page — they
// happen to match the Home hero's text exactly, so the markup mirrors
// HomePage/HeroText.jsx (see Hero.jsx for why).
import { useState } from "react";
import { motion } from "framer-motion";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

export default function HeroText() {
    const [showCalendly, setShowCalendly] = useState(false);

    const scrollToServices = () => {
        document.getElementById("ascendus-services")?.scrollIntoView({ behavior: "smooth" });
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
                <div className="mt-3 sm:mt-4 h-px w-full bg-white/40" />
                <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium capitalize mt-6 sm:mt-8 leading-tight">
                    Enterprise technology that moves your business forward, not just your systems.
                </h1>

                <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
                    <button
                        type="button"
                        onClick={() => setShowCalendly(true)}
                        className="rounded-[54px] border border-[#d0d0d0] bg-[#10161d] px-8 py-3 text-base sm:text-lg font-light text-white transition-colors hover:bg-white hover:text-[#10161d]"
                    >
                        Book a Consultation
                    </button>
                    <button
                        type="button"
                        onClick={scrollToServices}
                        className="rounded-[54px] border border-[#d0d0d0] px-8 py-3 text-base sm:text-lg font-light text-white transition-colors hover:bg-white hover:text-[#10161d]"
                    >
                        See What We Do
                    </button>
                </div>
            </motion.div>

            <CalendlyModal
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
