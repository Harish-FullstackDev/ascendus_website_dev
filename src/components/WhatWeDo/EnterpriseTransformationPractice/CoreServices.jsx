"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
    {
        number: "01",
        title: "SAP S/4HANA Migration",
        desc: "End-to-end migration from ECC to S/4HANA, planned around your compliance deadlines and cutover windows, not a generic timeline.",
    },
    {
        number: "02",
        title: "RISE with SAP",
        desc: "Full RISE with SAP delivery: infrastructure, migration, and managed operations bundled under a single SAP-backed contract.",
    },
    {
        number: "03",
        title: "GROW with SAP",
        desc: "Cloud-native S/4HANA on SAP's best-practice reference architecture, built for organizations without legacy customization to carry over.",
    },
    {
        number: "04",
        title: "Application Managed Services",
        desc: "We manage and support your applications to keep them running smoothly, reliably, and efficiently.",
    },
    {
        number: "05",
        title: "Microsoft & Cloud Services",
        desc: "We provide simple, secure, and scalable Microsoft and cloud solutions to support your business.",
    },
    {
        number: "06",
        title: "Systems Integration",
        desc: "We provide ongoing support and maintenance to keep your applications secure, stable, and performing well.",
    },
];

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(SERVICES.length / PAGE_SIZE);

// Mobile pages one card at a time instead of 3 — its own page count/size so it
// doesn't share state with the sm+ 3-per-page carousel below.
const MOBILE_PAGE_COUNT = SERVICES.length;

// Copied from HomePage/CoreCapabilities.jsx's ArrowButton — same chevron, same
// enabled/disabled visual treatment, kept as its own copy since the two carousels
// are otherwise unrelated components.
function ArrowButton({ direction, disabled, onClick }) {
    return (
        <button
            type="button"
            aria-label={direction === -1 ? "Previous" : "Next"}
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center size-10 transition-all duration-300 ${disabled ? "opacity-30 cursor-not-allowed" : "hover:scale-110"
                }`}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`size-6 text-[#10161d] ${direction === -1 ? "-scale-x-100" : ""}`}
            >
                <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

function ServiceCard({ service }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full bg-white flex flex-col items-start justify-between gap-6 p-8 shadow-[2px_4px_8.4px_0px_rgba(0,0,0,0.1)] min-h-[280px] sm:min-h-[304px]"
        >
            <p className="text-[#8794a3] text-[28px] font-medium">{service.number}</p>
            <p className="text-[#10161d] text-2xl font-medium">{service.title}</p>
            <p className="text-[#10161d] text-base font-extralight leading-[1.59]">
                {service.desc}
            </p>
        </motion.div>
    );
}

export default function CoreServices() {
    const [page, setPage] = useState(0);
    const [mobilePage, setMobilePage] = useState(0);

    return (
        <section className="w-full bg-[#f3f6f9] px-6 py-10 sm:px-[64px] sm:py-[64px] flex flex-col gap-8 sm:gap-[4px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full flex flex-col sm:flex-col sm:items-start sm:justify-between gap-4"
            >
                <div className="w-full flex flex-col sm:flex-col sm:items-start sm:justify-between gap-4">
                    <h2 className="text-[#2E3033] text-2xl sm:text-[28px] font-semibold shrink-0">Core Services</h2>
                    <p className="text-[#55595E] text-lg sm:text-2xl font-light sm:tracking-[0.24px] w-full sm:max-w-[618px]">
                        SAP is our core  deliberately. Microsoft and adjacent platforms extend that core so the enterprise
                        moves as a system, not a set of silos.
                    </p>
                </div>


            </motion.div>

            {/* Mobile: one card in view at a time (its own page/state, 6 pages),
                arrow-paged instead of stacking all 6 or showing 3 at once. */}
            <div className="flex flex-col gap-4 sm:hidden">
                <div className="flex items-center justify-end gap-2">
                    <ArrowButton
                        direction={-1}
                        disabled={mobilePage === 0}
                        onClick={() => setMobilePage((p) => Math.max(0, p - 1))}
                    />
                    <ArrowButton
                        direction={1}
                        disabled={mobilePage === MOBILE_PAGE_COUNT - 1}
                        onClick={() => setMobilePage((p) => Math.min(MOBILE_PAGE_COUNT - 1, p + 1))}
                    />
                </div>

                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            width: `${MOBILE_PAGE_COUNT * 100}%`,
                            transform: `translateX(-${mobilePage * (100 / MOBILE_PAGE_COUNT)}%)`,
                        }}
                    >
                        {SERVICES.map((service) => (
                            <div key={service.title} className="shrink-0" style={{ width: `${100 / MOBILE_PAGE_COUNT}%` }}>
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* sm and up: original 3-per-page carousel, unchanged — arrows (copied
                from HomePage/CoreCapabilities.jsx) reveal services 4-6 on the next page. */}
            <div className="hidden sm:flex flex-col gap-4">
                <div className="flex items-center justify-end gap-2">
                    <ArrowButton direction={-1} disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))} />
                    <ArrowButton
                        direction={1}
                        disabled={page === PAGE_COUNT - 1}
                        onClick={() => setPage((p) => Math.min(PAGE_COUNT - 1, p + 1))}
                    />
                </div>

                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ width: `${PAGE_COUNT * 100}%`, transform: `translateX(-${page * (100 / PAGE_COUNT)}%)` }}
                    >
                        {Array.from({ length: PAGE_COUNT }).map((_, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="flex gap-6 sm:gap-[29px] items-stretch shrink-0"
                                style={{ width: `${100 / PAGE_COUNT}%` }}
                            >
                                {SERVICES.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE).map((service) => (
                                    <div key={service.title} className="flex-1 min-w-0">
                                        <ServiceCard service={service} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
