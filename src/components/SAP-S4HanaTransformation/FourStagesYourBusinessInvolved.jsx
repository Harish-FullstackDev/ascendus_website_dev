"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import iconDiscover from "@/assets/SAP-S4HanaTransformation/icons/discover-32.svg";
import iconDesign from "@/assets/SAP-S4HanaTransformation/icons/design-32.svg";
import iconDeliver from "@/assets/SAP-S4HanaTransformation/icons/deliver-24.svg";
import iconRun from "@/assets/SAP-S4HanaTransformation/icons/run-24.svg";
import stageConnector from "@/assets/SAP-S4HanaTransformation/icons/stage-connector.svg";

// Figma (828:1133): every glyph is light on the #003056 tile. Discover and
// Design are 32px exports, Deliver and Run 24px; each keeps its own size.
const STAGES = [
    {
        icon: iconDiscover,
        title: "Discover",
        description: "Review your landscape, custom code and business goals to define what the move must achieve.",
    },
    {
        icon: iconDesign,
        title: "Design",
        description: "Choose the migration path and shape the target processes, data model and integrations.",
    },
    {
        icon: iconDeliver,
        title: "Deliver",
        description: "Build, convert, migrate and test in planned cycles with your business users at the table.",
    },
    {
        icon: iconRun,
        title: "Run",
        description: "Go live, stabilise and hand over to support, with improvements planned from day one.",
    },
];

// The three wavy links between the stage icons alternate dip / arch / dip.
// Figma exports one curve and flips it for the middle one. Each link runs from
// just after one icon to just before the next: the columns are equal quarters,
// so icon centres sit at 12.5%, 37.5%, 62.5% and the link spans a quarter minus
// both 36px icon halves and a 4px breathing gap each side.
const CONNECTORS = [
    { left: "calc(12.5% + 40px)", arch: false },
    { left: "calc(37.5% + 40px)", arch: true },
    { left: "calc(62.5% + 40px)", arch: false },
];

// Section 6 — white, with a rounded top pulled 24px up over the team photo so
// the photo shows in both corners. Full 64 on both edges: a full-bleed photo
// above, the dark route band below.
export default function FourStagesYourBusinessInvolved() {
    return (
        <section
            id="implementation-approach"
            className="relative z-10 -mt-6 w-full scroll-mt-24 rounded-t-[24px] border-t border-[#8695a7] bg-white px-6 py-10 sm:px-[64px] sm:py-16"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8"
            >
                <div className="flex flex-col gap-3 lg:w-[497px] lg:shrink-0">
                    <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                        Implementation Approach
                    </p>
                    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium capitalize leading-[1.2] text-[#0f172a]">
                        Four Stages. Your Business Involved in Every One.
                    </h2>
                </div>
                <p className="text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base lg:w-[490px]">
                    The right route depends on your processes, your data and how much change your organisation can
                    absorb. We settle that together before any build begins.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="relative mx-auto mt-16 grid w-full max-w-[1260px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
            >
                {CONNECTORS.map((connector) => (
                    <div
                        key={connector.left}
                        aria-hidden
                        className={`absolute hidden h-[24.5px] w-[calc(25%-80px)] lg:block ${
                            connector.arch ? "top-[12px] rotate-180" : "top-[36px]"
                        }`}
                        style={{ left: connector.left }}
                    >
                        <Image src={stageConnector} alt="" fill />
                    </div>
                ))}

                {STAGES.map((stage) => (
                    <div key={stage.title} className="flex flex-col items-center gap-[26px] text-center lg:px-3">
                        <div className="flex size-[72px] shrink-0 items-center justify-center rounded-[12px] bg-[#003056]">
                            <Image src={stage.icon} alt="" />
                        </div>
                        <h3 className="text-[24px] font-medium capitalize leading-[1.2] text-[#0e2b4b]">{stage.title}</h3>
                        <p className="max-w-[216px] text-sm font-normal capitalize leading-[1.5] text-[#415773] sm:text-base">
                            {stage.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
