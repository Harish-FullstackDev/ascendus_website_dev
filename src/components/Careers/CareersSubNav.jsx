// Figma 1505:12417 — candidate tabs under the navbar. Only Search Jobs has
// a page today; My Application and Saved Jobs need the candidate login,
// which has no backend yet, so they render as plain labels until it does.
const TABS = [
    { label: "My Application" },
    { label: "Search Jobs", current: true },
    { label: "Saved Jobs" },
];

export default function CareersSubNav() {
    return (
        <div className="w-full border-b border-[#afc9e6] bg-[#f8f8f8] px-6 pb-6 pt-8 sm:px-[64px]">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 whitespace-nowrap sm:gap-x-8 text-base capitalize leading-[1.5] text-[#0e2b4b]">
                {TABS.map((tab) => (
                    <li key={tab.label}>
                        <span aria-current={tab.current ? "page" : undefined} className={tab.current ? "underline" : undefined}>
                            {tab.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
