"use client";

import { useId, useState } from "react";

// Copy of the HRMS portal's JobSectionAccordion (Figma 1487:10985 here):
// 56-tall brand-subtle bar with an 18px title and a 26px "+" tile. The
// design only shows the closed state; the body opens below the title inside
// the same tile. The icon is a fixed horizontal bar plus a vertical one that
// turns flat on open (+ to −). Takes a list (bullets) or a paragraph.
export default function JobSectionAccordion({ title, items, text }) {
    const [open, setOpen] = useState(false);
    const panelId = useId();

    return (
        <div className="w-full overflow-hidden rounded-[8px] bg-[#ecf2f9]">
            <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
                className="flex h-14 w-full cursor-pointer items-center justify-between gap-4 p-3 text-left"
            >
                <span className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">{title}</span>
                <span aria-hidden="true" className="relative size-[26px] shrink-0 rounded bg-[#afc9e6]">
                    <span className="absolute left-1/2 top-1/2 h-[1.625px] w-[13px] -translate-x-1/2 -translate-y-1/2 bg-[#0061af]" />
                    <span
                        className={`absolute left-1/2 top-1/2 h-[1.625px] w-[13px] -translate-x-1/2 -translate-y-1/2 bg-[#0061af] transition-transform duration-300 ${
                            open ? "rotate-0" : "rotate-90"
                        }`}
                    />
                </span>
            </button>
            <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden" inert={!open}>
                    {items ? (
                        <ul className="flex list-disc flex-col gap-2 pb-4 pl-8 pr-3 text-sm leading-5 text-[#415773]">
                            {items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="px-3 pb-4 text-sm leading-5 text-[#415773]">{text}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
