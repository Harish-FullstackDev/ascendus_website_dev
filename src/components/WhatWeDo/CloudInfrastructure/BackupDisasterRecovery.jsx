"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import plusIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/ei_plus.svg";

const ITEMS = [
    {
        title: "Backup Strategy",
        desc: "Define what gets backed up, how often, and where, based on how critical each system is to the business.",
    },
    {
        title: "Disaster Recovery Planning",
        desc: "Document and rehearse the exact sequence of actions needed to restore operations after a major outage.",
    },
    {
        title: "Business Continuity Solutions",
        desc: "Keep essential functions running through an outage with failover systems and pre-defined contingency plans.",
    },
    {
        title: "Data Replication",
        desc: "Continuously copy critical data to secondary sites so a failure never means data loss.",
    },
    {
        title: "Recovery Testing",
        desc: "Regularly validate backups and recovery procedures so they work when you actually need them.",
    },
    {
        title: "High Availability Design",
        desc: "Architect systems with redundancy at every layer to eliminate single points of failure.",
    },
    {
        title: "Reduced downtime",
        desc: "Minimize the business impact of outages with fast failover and automated recovery workflows.",
    },
    {
        title: "Faster recovery",
        desc: "Cut recovery time objectives with pre-staged infrastructure and tested runbooks.",
    },
];

export default function BackupDisasterRecovery() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full py-10 sm:py-[51px] px-6 sm:px-[50px] flex flex-col items-center gap-10 sm:gap-[51px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-5 max-w-[954px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Backup &amp; Disaster Recovery</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Protect business continuity with resilient backup, replication, and recovery strategies that
                    keep critical systems running no matter what.
                </p>
            </motion.div>

            <div className="flex flex-col items-start w-full max-w-screen">
                {ITEMS.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.title} className="w-full border-b border-[#a4a7a5]">
                            <button
                                type="button"
                                onClick={() => handleClick(index)}
                                className="flex w-full items-center justify-between py-4 sm:py-[14.5px] text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="text-[#6c6c6c] text-lg sm:text-2xl lg:text-[28px] font-light">
                                    {item.title}
                                </span>
                                <motion.span
                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="relative shrink-0 size-8 sm:size-[37px]"
                                >
                                    <Image src={plusIcon} alt="" fill className="object-contain" />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 sm:pb-6 pr-10 sm:pr-16 text-[#6c6c6c] text-sm sm:text-base font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
