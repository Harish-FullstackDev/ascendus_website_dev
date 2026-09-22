"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/Partnership/CTA_Bg.webp";
import arrowRightIcon from "@/assets/Partnership/icons/arrow-right.svg";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

// Background photo under a top-to-bottom black gradient, with heading,
// supporting line and button stacked down the left edge (Figma 232:492). The
// button used to sit opposite the copy on the right; it now follows it in the
// same column, so the whole band reads as one left-aligned block.
export default function LetsCreateImpactTogether({
    title = "Let's Create Impact Together",
    description = "Whether you're a technology provider, consulting firm, or industry leader, we'd love to explore how we can collaborate.",
    buttonLabel = "Talk to an Expert",
    bgImage = ctaBg,
}) {
    const [showCalendly, setShowCalendly] = useState(false);

    return (
        <>
            <section className="relative z-0 w-full overflow-hidden">
                <Image src={bgImage} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/72 to-black/36" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-start gap-6 px-6 sm:px-[64px] py-[64px]"
                >
                    {/* 16px between the heading and the line under it, 24px
                        before the button (Figma 232:494 / 232:493). */}
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium text-white leading-[1.2]">
                            {title}
                        </h2>

                        <p className="max-w-[836px] text-base font-normal text-white leading-[1.5]">{description}</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowCalendly(true)}
                        className="group inline-flex shrink-0 items-center gap-2 rounded-[8px] border border-[#f8f8f8] px-[13px] py-[9px] text-base font-normal text-white transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                        {buttonLabel}
                        <Image
                            src={arrowRightIcon}
                            alt=""
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:brightness-0"
                        />
                    </button>
                </motion.div>
            </section>

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
        </>
    );
}
