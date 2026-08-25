"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import hybridPhoto from "@/assets/WhatWeDo/Data Inteligent/webp/Data_Governance.webp";
import arrowIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Section2_RightArrow.svg";
import linkIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector.svg";

const ITEMS = [
    {
        title: "Trust Before Insight",
        desc: "We fix data quality and governance first, because dashboards built on unreliable data erode confidence fast.",
    },
    {
        title: "SAP-Native Data Depth",
        desc: "Deep knowledge of SAP data structures means faster, more accurate integration than generalist data teams deliver.",
    },
    {
        title: " Built for Decision-Makers",
        desc: "We design analytics around the decisions executives actually need to make, not around available data fields.",
    },
    {
        title: " Governed at Scale",
        desc: "Our data platforms carry governance and access controls that hold up as data volume and users grow",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

function LinkArrow({ light }) {
    return (
        <span
            className={`flex items-center justify-center size-7 rounded-full border ${light ? "border-white/40" : "border-[#6c6c6c]/60"
                }`}
        >
            <Image src={linkIcon} alt="" width={11} height={11} className={light ? "invert" : ""} />
        </span>
    );
}

export default function GovernanceSAPDataDepth() {
    const [[index, direction], setPage] = useState([0, 1]);
    const [isPaused, setIsPaused] = useState(false);
    const maxIndex = ITEMS.length - 1;
    const active = ITEMS[index];
    const next = ITEMS[index + 1] ?? ITEMS[0];

    const goTo = (nextIndex, dir) => setPage([Math.max(0, Math.min(maxIndex, nextIndex)), dir]);

    // Auto scroll: advances to the next slide every few seconds and loops
    // back to the start, pausing while the slider is hovered/focused so
    // manual interaction (arrows/dots) always takes over.
    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(() => {
            setPage(([currentIndex]) =>
                currentIndex >= maxIndex ? [0, 1] : [currentIndex + 1, 1]
            );
        }, 3500);
        return () => clearInterval(id);
    }, [isPaused, maxIndex]);

    return (
        <section className="w-full bg-[#F3F6F9] py-10 sm:p-16 px-6  flex flex-col items-center gap-10 sm:gap-[62px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-[#2E3033] text-[28px] font-medium">Governance & SAP Data Depth</h2>
                <p className="text-[#55595E] text-base sm:text-lg font-light">
                    The principles that shape our data architecture approach.
                </p>
            </motion.div>

            <div
                className="relative w-full h-[520px] sm:h-[592px] overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
            >
                <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 bg-[#5c5c5c]">
                    <Image src={hybridPhoto} alt="" fill className="object-cover" />
                </div>

                <div className="absolute inset-x-4 sm:inset-x-auto sm:right-0 top-1/2 -translate-y-1/2 flex flex-col sm:flex-row gap-4 sm:gap-[21px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-[21px]"
                        >
                            <div className="bg-[#0A2B3E] w-full sm:w-[439px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex flex-col justify-between gap-4 text-white">
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    <h2 className="text-xl sm:text-2xl font-medium">{active.title}</h2>
                                    <p className="text-white sm:mt-25 text-sm sm:text-lg font-light leading-relaxed">
                                        {active.desc}
                                    </p>
                                </div>

                            </div>
                            <div className="hidden sm:flex bg-white w-full sm:w-[439px] h-[280px] sm:h-[377px] p-6 sm:p-[27px] flex-col justify-between gap-4 text-black">
                                <div className="flex flex-col gap-4 sm:gap-6">
                                    <h2 className="text-xl text-[#2E3033] sm:text-2xl font-medium">{next.title}</h2>
                                    <p className="text-[#55595E] sm:mt-25 text-sm sm:text-lg font-light leading-relaxed">
                                        {next.desc}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute right-4 sm:right-0 bottom-4 sm:bottom-0 bg-white rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={() => goTo(index - 1, -1)}
                        disabled={index === 0}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === 0 ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        ←
                    </button>
                    <div className="flex items-center gap-[10px]">
                        {ITEMS.map((item, dotIndex) => (
                            <button
                                key={item.title}
                                type="button"
                                aria-label={`Go to slide ${dotIndex + 1}`}
                                onClick={() => goTo(Math.min(dotIndex, maxIndex), dotIndex > index ? 1 : -1)}
                                className={`size-[8px] rounded-full border-[0.5px] transition-colors ${dotIndex === index ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label="Next"
                        onClick={() => goTo(index + 1, 1)}
                        disabled={index === maxIndex}
                        className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border shrink-0 transition-transform hover:scale-110 ${index === maxIndex ? "border-[#a4a7a5] text-[#a4a7a5]" : "border-black text-black"
                            }`}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}

