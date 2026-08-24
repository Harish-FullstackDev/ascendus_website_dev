"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

const ROWS = [
    {
        label: "Billing basis",
        fixedPrice: "Locked total for defined scope",
        ams: "Monthly retainer / SLA tier",
        timeAndMaterials: "Actuals — effort delivered",
    },
    {
        label: "Scope",
        fixedPrice: "Fixed & formally change-controlled",
        ams: "Ongoing operations & enhancements",
        timeAndMaterials: "Flexible, evolves sprint to sprint",
    },
    {
        label: "Governance",
        fixedPrice: "Milestone sign-off",
        ams: "SLA-backed response times",
        timeAndMaterials: "Timesheet transparency",
    },
    {
        label: "Best for",
        fixedPrice: "S/4HANA migrations, greenfield rollouts",
        ams: "Post go-live, steady-state operations",
        timeAndMaterials: "Discovery, evolving builds",
    },
];

export default function EngagementModelsComparison() {
    return (
        <section
            id="engagement-models"
            className="w-full bg-[#f3f6f9] px-6 pt-10 pb-10 sm:px-[64px] sm:pt-16 sm:pb-16 flex flex-col items-center gap-8 sm:gap-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-5 max-w-[818px] text-center"
            >
                <h2 className="text-[#10161d] text-2xl sm:text-[28px] font-medium">Engagement Models</h2>
                <p className="text-[#4a5568] text-lg font-light leading-[1.5]">
                    Choose the engagement model that fits your needs, from focused projects to ongoing support and
                    strategic guidance.
                </p>
            </motion.div>

            {/* Horizontal scroll on narrow viewports so the comparison stays a real
                table instead of being crushed into unreadable columns. Column order
                matches Figma: label, Time & Materials (highlighted), Fixed-Price, AMS. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-[1156px] overflow-x-auto"
            >
                <div className="grid grid-cols-[minmax(130px,1.1fr)_minmax(180px,1.2fr)_minmax(160px,1fr)_minmax(160px,1fr)] min-w-[760px]">
                    {/* Header row */}
                    <div className="border-b border-[#8794a3] py-6 pr-4 flex items-center">
                        <p className="text-[#2d8ec5] text-lg sm:text-xl font-medium">Working Model</p>
                    </div>
                    <div className="bg-[#0a3a52] py-6 px-6 flex items-center">
                        <p className="text-white text-lg sm:text-xl font-medium">Time &amp; Materials</p>
                    </div>
                    <div className="border-b border-[#8794a3] py-6 px-6 flex items-center">
                        <p className="text-[#2d8ec5] text-lg sm:text-xl font-medium">Fixed-Price</p>
                    </div>
                    <div className="border-b border-[#8794a3] py-6 px-6 flex items-center">
                        <p className="text-[#2d8ec5] text-lg sm:text-xl font-medium">AMS</p>
                    </div>

                    {ROWS.map((row, index) => {
                        const isLast = index === ROWS.length - 1;
                        return (
                            <Fragment key={row.label}>
                                <div
                                    className={`py-6 pr-4 flex items-center ${isLast ? "" : "border-b border-[#8794a3]"}`}
                                >
                                    <p className="text-[#10161d] text-base sm:text-lg font-normal">{row.label}</p>
                                </div>
                                <div className="bg-[#0a3a52] py-6 px-6 flex items-center">
                                    <p className="text-white text-base sm:text-lg font-normal">{row.timeAndMaterials}</p>
                                </div>
                                <div
                                    className={`py-6 px-6 flex items-center ${isLast ? "" : "border-b border-[#8794a3]"}`}
                                >
                                    <p className="text-[#10161d] text-base sm:text-lg font-normal">{row.fixedPrice}</p>
                                </div>
                                <div
                                    className={`py-6 px-6 flex items-center ${isLast ? "" : "border-b border-[#8794a3]"}`}
                                >
                                    <p className="text-[#10161d] text-base sm:text-lg font-normal">{row.ams}</p>
                                </div>
                            </Fragment>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
