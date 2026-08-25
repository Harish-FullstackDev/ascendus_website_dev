"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import corridorImg from "@/assets/Ascendus/images/data-center-hallway.png";

const STEPS = [
    {
        num: "1",
        title: "Discover",
        desc: "We start with your operations, not our service list, to identify where technology creates friction and where it can create value.",
    },
    {
        num: "2",
        title: "Design",
        desc: "One team builds and implements — the same people who designed it, so nothing gets lost in translation.",
    },
    {
        num: "3",
        title: "Implement",
        desc: "We architect a solution built around your operations, not a one-size-fits-all playbook.",
    },
    {
        num: "4",
        title: "Run",
        desc: "We continue to manage, monitor, and support your solutions after go-live to ensure they perform as expected.",
    },
];

export default function HowWeWork() {
    return (
        // Full-bleed image band — no side padding here; the dark panel below carries
        // its own full 64 top/bottom via py-16, and the section above (Industries)
        // already took the full 64 for this boundary since this band contributes 0.
        <section className="relative w-full overflow-hidden">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/7] lg:aspect-[1280/319]">
                <Image src={corridorImg} alt="" fill className="object-cover pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 gap-2">
                    <h2 className="text-2xl sm:text-[28px] font-medium">How We Work</h2>
                    <p className="text-lg font-light">A Clear Path From Problem to Production</p>
                    <p className="text-base font-extralight max-w-[700px] leading-normal mt-2">
                        No black boxes, no scope creep. Every engagement follows a process built for
                        transparency and outcomes.
                    </p>
                </div>
            </div>

            <div className="relative z-10 -mt-12 sm:-mt-16 bg-[#0a3a52] pt-24 sm:pt-28 pb-10 sm:pb-16 px-6 sm:px-[64px]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {STEPS.map((step) => (
                        <div key={step.num} className="flex flex-col items-center gap-6 text-center">
                            <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shrink-0">
                                <span className="text-[#2E3033] text-3xl font-light">{step.num}</span>
                            </div>
                            <div className="flex flex-col gap-3 text-white">
                                <h3 className="text-lg font-medium">{step.title}</h3>
                                <p className="text-base font-extralight leading-[1.5]">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
