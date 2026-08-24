"use client";

import { motion } from "framer-motion";

// Figma's header for this section ("Governance & SAP Data Depth" / "principles
// that shape our data architecture approach") is a leftover from the Data
// Governance page — a skeleton-design mismatch, not real copy for this
// section — so it's replaced here with copy that actually describes these 5
// cards. The cards themselves, and their full text, are straight from Figma.
// The design also shows a decorative left-side visual panel and a 2-at-a-time
// carousel with arrow navigation; simplified here to a plain responsive grid
// showing all 5 at once, which carries the same content without the added
// interaction complexity.
const CAPABILITIES = [
    {
        title: "Cloud & Infrastructure Modernization",
        desc: "Migrate and rearchitect infrastructure around the workloads that actually need to scale, not a lift-and-shift of everything at once.",
    },
    {
        title: "Systems Integration & API Management",
        desc: "Connect SAP to CRM, e-commerce, and third-party platforms through governed APIs, not one-off integrations that break on the next upgrade.",
    },
    {
        title: "Data Migration & Governance",
        desc: "Move, cleanse, and validate data across systems, with governance controls in place before go-live, not added after an audit flags them.",
    },
    {
        title: "Change Management & Adoption",
        desc: "Structured training and adoption planning so a new system gets used the way it was designed, not worked around.",
    },
    {
        title: "Cybersecurity & Compliance",
        desc: "Security built around your regulatory obligations, from access controls to data residency, not a generic checklist.",
    },
];

export default function Capabilities() {
    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-16 flex flex-col gap-8 sm:gap-[54px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[818px] text-center"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">Core Capabilities</h2>
                <p className="text-[#4a5568] text-lg font-light">
                    Five areas of work that keep everything around SAP connected, secure, and adopted.
                </p>
            </motion.div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CAPABILITIES.map((capability, index) => (
                    <motion.div
                        key={capability.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.1 }}
                        className="bg-white flex flex-col gap-4 p-8 shadow-[2px_4px_8.4px_0px_rgba(0,0,0,0.1)]"
                    >
                        <p className="text-[#10161d] text-xl font-medium leading-[1.4]">{capability.title}</p>
                        <p className="text-[#4a5568] text-base font-light leading-[1.5]">{capability.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
