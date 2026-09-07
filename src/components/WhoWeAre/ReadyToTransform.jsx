"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ctaBg from "@/assets/WhoWeAre/webp/Who_We_Are_CTA.webp";
import CalendlyModal from "@/components/CommonComponents/CommonCalendy";

export default function ReadyToTransform() {
    const [showCalendly, setShowCalendly] = useState(false);

    const handleContactClick = () => {
        setShowCalendly(true);
    };

    return (
        <>
            <section className="relative z-0 w-full overflow-hidden">
                <Image src={ctaBg} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center text-center gap-6 px-4 pb-16 sm:pb-24 lg:pb-32 pt-32 sm:pt-[160px] lg:pt-[246px]"
                >
                    <div className="max-w-4xl">
                        <h2 className="text-2xl sm:text-5xl font-semibold text-white">
                            Want to know more about how we work?
                        </h2>

                        <p className="mt-4 text-base sm:text-2xl font-light text-white">
                            Talk to us about your technology landscape, and we&apos;ll show you what a single
                            accountable partner changes about the roadmap.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleContactClick}
                        className="rounded-none border border-[#d3dae2] px-8 py-2 text-sm sm:text-base font-light text-white transition-colors hover:bg-white hover:text-black"
                    >
                        Book a Call
                    </button>
                </motion.div>
            </section>

            {/* Calendly Modal */}
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

