"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HRMS_PORTAL_URL } from "@/lib/hrmsPortal";

// Figma 1505:12417 — candidate tabs under the navbar. A job detail page
// (/careers/<slug>) sits under Search Jobs, so that tab stays underlined there.
// My Application lives on the HRMS portal, so it is a plain <a>, never current.
const TABS = [
    { label: "Search Jobs", href: "/careers/open-positions/" },
    { label: "Saved Jobs", href: "/careers/saved-jobs/" },
    { label: "My Application", href: `${HRMS_PORTAL_URL}/my-applications`, external: true },
];

export default function CareersSubNav() {
    const pathname = usePathname()?.replace(/\/?$/, "/") ?? "";
    const matched = TABS.find((tab) => pathname === tab.href);
    const current = matched ? matched.href : "/careers/open-positions/";

    return (
        <div className="w-full border-b border-[#afc9e6] bg-[#f8f8f8] px-6 pb-6 pt-8 sm:px-[64px]">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 whitespace-nowrap sm:gap-x-8 text-base capitalize leading-[1.5] text-[#0e2b4b]">
                {TABS.map((tab) => {
                    const isCurrent = tab.href === current;
                    const className = `underline-offset-4 transition-colors hover:text-[#0061af] ${isCurrent ? "underline" : ""}`;
                    return (
                        <li key={tab.label}>
                            {tab.external ? (
                                <a href={tab.href} className={className}>
                                    {tab.label}
                                </a>
                            ) : (
                                <Link
                                    href={tab.href}
                                    aria-current={isCurrent ? "page" : undefined}
                                    className={className}
                                >
                                    {tab.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
