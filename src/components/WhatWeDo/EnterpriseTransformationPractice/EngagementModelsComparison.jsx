"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Column order + key matches Figma: Working Model (row labels), Time &
// Materials, Fixed-Price, AMS. "workingModel" isn't a real comparable option
// in the design (it's just the row-label column) — per explicit request it
// does NOT participate in the hover/active highlight at all (no handlers, no
// color transition, can never be `activeColumn`); only the other 3 do.
const COLUMNS = [
    { key: "workingModel", title: "Working Model" },
    { key: "timeAndMaterials", title: "Time & Materials" },
    { key: "fixedPrice", title: "Fixed-Price" },
    { key: "ams", title: "AMS" },
];

const ROWS = [
    {
        workingModel: "Billing basis",
        fixedPrice: "Locked total for defined scope",
        ams: "Monthly retainer / SLA tier",
        timeAndMaterials: "Actuals — effort delivered",
    },
    {
        workingModel: "Scope",
        fixedPrice: "Fixed & formally change-controlled",
        ams: "Ongoing operations & enhancements",
        timeAndMaterials: "Flexible, evolves sprint to sprint",
    },
    {
        workingModel: "Governance",
        fixedPrice: "Milestone sign-off",
        ams: "SLA-backed response times",
        timeAndMaterials: "Timesheet transparency",
    },
    {
        workingModel: "Best for",
        fixedPrice: "S/4HANA migrations, greenfield rollouts",
        ams: "Post go-live, steady-state operations",
        timeAndMaterials: "Discovery, evolving builds",
    },
];

export default function EngagementModelsComparison() {
    // "Time & Materials" is highlighted by default on load; hovering (or
    // tapping/focusing, for touch and keyboard) any column — all 4, including
    // Working Model — makes that one the highlighted one instead. No
    // mouse-leave handler on purpose — same "last hovered stays" behavior as
    // the Capabilities accordion above this section.
    const [activeColumn, setActiveColumn] = useState("timeAndMaterials");

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

            {/* Mobile: the hover-driven column table below doesn't translate to touch
                (no hover, and the horizontal scrollbar it needs at min-w-[760px] just
                pushed content out of view) — so under sm this pivots into one static
                card per engagement model instead, each listing all 4 rows as
                label/value pairs. No active-column highlight here; there's no hover
                to justify it. */}
            <div className="w-full flex flex-col gap-6 sm:hidden">
                {COLUMNS.filter((column) => column.key !== "workingModel").map((column) => (
                    <div
                        key={column.key}
                        className="w-full bg-white flex flex-col gap-5 p-6 shadow-[2px_4px_8.4px_0px_rgba(0,0,0,0.1)]"
                    >
                        <p className="text-xl font-medium text-[#1c5f85]">{column.title}</p>
                        <div className="flex flex-col gap-4">
                            {ROWS.map((row) => (
                                <div key={row.workingModel} className="flex flex-col gap-1">
                                    <p className="font-urbane text-sm font-medium text-[#8794a3]">
                                        {row.workingModel}
                                    </p>
                                    <p className="text-base font-light text-[#10161d]">{row[column.key]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* sm and up: the original hover-driven comparison table, unchanged.
                Horizontal scroll on narrower desktop viewports so the comparison
                stays a real table instead of being crushed into unreadable columns.
                No max-width cap — w-full within the section's own px-[64px] padding
                keeps the side gap at exactly 64px on any viewport. 4 equal-width
                columns (Figma: 268px each) with a single uniform gap-x-[28px]
                between all of them.

                3 explicit stacking layers, not left to accident: the divider lines
                (z-0), one continuous active-column highlight spanning the whole
                table height (z-10), then the cell text on top of both (z-20). The
                highlight used to be a separate background color per cell — that
                meant each row's own divider line sat outside that cell's content
                box (borders live outside the box a background fills), so the line
                stayed visible right through the highlighted column, and any
                per-row height rounding could make the highlight over/undershoot
                the table's real bottom edge. A single element pinned to the
                table's own top/bottom (inset-y-0) can't overshoot it, and sitting
                above the lines but below the text hides the lines under it
                without hiding the white text that needs to read on top of it. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden sm:block w-full overflow-x-auto"
            >
                <div className="relative min-w-[760px]">
                    {/* Header row. Every cell is left-aligned (pl-8/pr-4) —
                        this row is the reference the data rows below match, so
                        it has to carry that alignment itself, uniformly across
                        all 4 columns. Working Model gets no hover handlers /
                        cursor-pointer / active-color transition — it's plain
                        static text; only the other 3 columns are interactive. */}
                    <div className="relative grid grid-cols-4 gap-x-[28px]">
                        <div className="absolute inset-x-0 bottom-0 h-px bg-[#8794a3] z-0" />
                        {COLUMNS.map((column) => {
                            const isWorkingModel = column.key === "workingModel";
                            if (isWorkingModel) {
                                return (
                                    <div key={column.key} className="relative z-20 py-8 pl-8 pr-4 flex items-center justify-start text-left">
                                        <p className="text-xl sm:text-2xl font-medium text-[#1c5f85]">{column.title}</p>
                                    </div>
                                );
                            }
                            const isActive = column.key === activeColumn;
                            return (
                                <div
                                    key={column.key}
                                    onMouseEnter={() => setActiveColumn(column.key)}
                                    onFocus={() => setActiveColumn(column.key)}
                                    onClick={() => setActiveColumn(column.key)}
                                    tabIndex={0}
                                    className="relative z-20 py-8 pl-8 pr-4 flex items-center justify-start text-left cursor-pointer"
                                >
                                    <p
                                        className={`text-xl sm:text-2xl font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-[#1c5f85]"
                                            }`}
                                    >
                                        {column.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {ROWS.map((row) => (
                        <div key={row.workingModel} className="relative grid grid-cols-4 gap-x-[28px]">
                            <div className="absolute inset-x-0 bottom-0 h-px bg-[#8794a3] z-0" />
                            {/* Working Model's label (Billing basis, Scope, ...) reads
                                as a heading, not as data — Figma (2597:2064 etc.)
                                sets it in the same primary/heading font family as
                                the "Working Model" header itself (24px, just a
                                lighter weight than the header's demibold), not the
                                body font the other 3 columns' answers use. Same
                                .font-urbane / text-2xl pairing already used for this
                                pattern elsewhere on this project (e.g.
                                ProofInNumbers.jsx). It's also plain static text —
                                no hover handlers, no active-color transition — same
                                as its header cell above; only the other 3 columns
                                are interactive. Every cell here (including Working
                                Model) shares the same left alignment (pl-8/pr-4),
                                matching the header row. */}
                            {COLUMNS.map((column) => {
                                const isWorkingModel = column.key === "workingModel";
                                if (isWorkingModel) {
                                    return (
                                        <div key={column.key} className="relative z-20 py-8 pl-8 pr-4 flex items-center justify-start text-left">
                                            <p className="font-urbane text-2xl font-medium text-[#10161d]">{row[column.key]}</p>
                                        </div>
                                    );
                                }
                                const isActive = column.key === activeColumn;
                                return (
                                    <div
                                        key={column.key}
                                        onMouseEnter={() => setActiveColumn(column.key)}
                                        onFocus={() => setActiveColumn(column.key)}
                                        onClick={() => setActiveColumn(column.key)}
                                        tabIndex={0}
                                        className="relative z-20 py-8 pl-8 pr-4 flex items-center justify-start text-left cursor-pointer"
                                    >
                                        <p
                                            className={`text-base sm:text-lg font-light transition-colors duration-300 ${isActive ? "text-white" : "text-[#10161d]"
                                                }`}
                                        >
                                            {row[column.key]}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                    {/* Active-column highlight: one element, positioned via the same
                        column-width/gap math CSS Grid uses internally, so it lines up
                        with whichever column is active exactly. */}
                    <div
                        className="absolute inset-y-0 z-10 bg-[#00447a] pointer-events-none transition-[left] duration-300 ease-out"
                        style={{
                            left: `calc(${COLUMNS.findIndex((c) => c.key === activeColumn)} * ((100% - 84px) / 4 + 28px))`,
                            width: "calc((100% - 84px) / 4)",
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
