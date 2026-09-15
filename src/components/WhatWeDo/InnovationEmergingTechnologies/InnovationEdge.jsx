"use client";

import { motion } from "framer-motion";
import buildingPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/new/Support.jpg";

export default function InnovationEdge() {
    return (
        <section className="relative w-full min-h-[460px] sm:min-h-[471px] overflow-hidden bg-[#c2e3f9]">
            {/* Fixed Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${buildingPhoto.src})`,
                }}
            />


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                // px-8 (32px) on mobile is what the rest of this page uses — AIIntegration,
                // ExtendedReality, IoT and the others all sit on that edge, and px-6 left
                // this section 8px out of line with them. sm+ keeps px-[64px].
                className="relative z-10 h-full flex flex-col justify-center gap-4 sm:gap-6 px-8 sm:px-[64px] py-10 sm:py-14 "
            >
                <h2 className="text-white text-xl sm:text-[32px] font-semibold">
                    Ascendus Innovation Edge
                </h2>

                <p className="text-white text-base sm:text-lg sm:text-lg font-light sm:pb-6">
                    Why enterprises choose Ascendus for emerging tech deployment.
                </p>

                {/* pl-5 was sm-only, so on mobile the list had no padding and list-disc
                    rendered its markers outside the content box — left of the heading and
                    description, past the section's own edge. Applying it at every width
                    puts the markers inside and indents the list under the text; the sm+
                    value is the same 5 it already had. */}
                <ul className="text-white text-base list-disc font-['Houschka_Pro'] sm:text-lg pl-5 font-light space-y-1">
                    <li>SAP integrated emerging tech deployment</li>
                    <li>Pilot to scale methodology</li>
                    <li>Cross industry innovation experience</li>
                    <li>Early quantum readiness assessment</li>
                    <li>Industry 4.0 delivery capability</li>
                    <li>Value first technology evaluation</li>
                </ul>
            </motion.div>
        </section>
    );
}
