"use client";

import { motion } from "framer-motion";
import CapabilityCard from "./CapabilityCard";
import { CAPABILITIES } from "./capabilitiesData";
import { useCapabilitiesScrollPin } from "./useCapabilitiesScrollPin";

export default function Capabilities() {
    const { activeIndex, isDesktop, hairline, windowRef, trackRef, cardRefs } =
        useCapabilitiesScrollPin();

    return (
        <section className="w-full bg-[#f5f6f6] px-8 py-8 sm:px-[64px] sm:py-[64px] flex flex-col items-center gap-10 sm:gap-[86px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 sm:gap-[24px] max-w-[855px] text-center"
            >
                <h2 className="text-[#2E3033] text-xl sm:text-[28px] font-semibold">Capabilities</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    SAP is our core deliberately. Microsoft and adjacent platforms extend that core so the
                    enterprise moves as a system, not a set of silos.
                </p>
            </motion.div>

            <motion.div
                ref={windowRef}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative w-full max-w-[1280px] mx-auto"
            >
                <div ref={trackRef} className="flex flex-col w-full">
                    {CAPABILITIES.map((cap, index) => (
                        <CapabilityCard
                            key={cap.title}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            {...cap}
                            isActive={isDesktop ? index === activeIndex : true}
                            isPassed={isDesktop ? index < activeIndex : false}
                            showDivider={index > 0}
                            hairline={hairline}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
