"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ServiceDetailPanel from "./ServiceDetailPanel";
import { SERVICE_CATEGORIES } from "./servicesData";

// Section 3 — the service explorer. The left rail lists the services inside the
// category selected in section 2; the right panel shows the selected service.
// White band between two white bands above and a dark band below, so it takes
// 32px on top and the full 64px underneath.
export default function SAPTransformation({ activeCategoryId }) {
    const category =
        SERVICE_CATEGORIES.find((entry) => entry.id === activeCategoryId) ?? SERVICE_CATEGORIES[0];

    const [activeServiceId, setActiveServiceId] = useState(category.items[0]?.id);

    // Switching category resets the rail to its first service — the previously
    // selected id belongs to a list that is no longer on screen.
    useEffect(() => {
        setActiveServiceId(category.items[0]?.id);
    }, [category]);

    const activeService =
        category.items.find((item) => item.id === activeServiceId) ?? category.items[0];

    if (!activeService) return null;

    // Only rails with more services than the 620px box can show at once (SAP
    // Transformation, Business Transformation) need to scroll; shorter rails
    // like Digital & Technology Transformation should never show a scrollbar.
    const railScrolls = category.items.length > 5;

    return (
        <section className="w-full bg-white px-6 pb-10 pt-8 sm:px-[64px] sm:pb-[64px] sm:pt-[32px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full gap-8 max-lg:flex-col"
            >
                {/* Left rail. Figma (416:106) puts the header 49px down and the
                    service list 50px below it, not the 64/55 the first pass used
                    — that read as a hole between the logo and the list. */}
                <div className="flex flex-col gap-8 overflow-hidden rounded-[24px] border border-[#c9d0d8] bg-[#f1f3f5] px-6 pb-10 pt-8 sm:gap-[50px] sm:pb-[64px] sm:pt-[49px] lg:h-[620px] lg:w-[430px] lg:shrink-0">
                    <div className="flex shrink-0 items-center gap-[14px]">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-[8px] p-1">
                            <Image src={category.icon} alt="" className="h-[23px] w-12" />
                        </span>

                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b]">
                            {category.title}
                        </h2>
                    </div>

                    <ul className={`flex min-h-0 flex-1 flex-col ${railScrolls ? "overflow-y-auto" : ""}`}>
                        {category.items.map((item) => {
                            const isActive = item.id === activeService.id;

                            return (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        aria-current={isActive ? "true" : undefined}
                                        onClick={() => setActiveServiceId(item.id)}
                                        className={`flex min-h-[72px] w-full cursor-pointer items-center gap-[17px] rounded-[16px] px-6 py-3 text-left transition-colors duration-300 ease-out ${isActive ? "bg-[#00223d]" : "hover:bg-black/[0.04]"
                                            }`}
                                    >
                                        <span
                                            className={`h-[41px] w-0.5 shrink-0 transition-colors duration-300 ${isActive ? "bg-white" : "bg-[#00223d]"
                                                }`}
                                        />
                                        <span
                                            className={`text-[18px] font-medium leading-[1.2] transition-colors duration-300 ${isActive ? "text-white" : "text-[#0e2b4b]"
                                                }`}
                                        >
                                            {item.title}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right panel */}
                <div className="min-w-0 flex-1">
                    <ServiceDetailPanel service={activeService} />
                </div>
            </motion.div>
        </section>
    );
}
