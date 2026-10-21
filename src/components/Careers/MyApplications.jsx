"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getApplications } from "@/lib/candidateStorage";

// Statuses that end an application. Everything else (Application Received,
// Under Review, Interview...) counts as active.
const INACTIVE_STATUSES = ["Rejected", "Withdrawn", "Closed", "Position Filled"];

const TABS = [
    { key: "active", label: "Active" },
    { key: "inactive", label: "Inactive" },
];

function formatDate(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    return `${dd}/${mm}/${date.getFullYear()}`;
}

function ApplicationCard({ application }) {
    const inactive = INACTIVE_STATUSES.includes(application.status);

    return (
        <article className="flex flex-col gap-3 rounded-[8px] border border-[#c9d0d8] bg-white p-6">
            <h3 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">{application.position}</h3>
            <p className="flex flex-wrap gap-x-2 text-[14px] leading-[1.4] text-[#415773]">
                Date of Applied
                <span className="text-[#0061af]">{formatDate(application.appliedAt)}</span>
            </p>
            <p className={`text-[14px] leading-[1.4] ${inactive ? "text-[#8695a7]" : "text-[#00a05a]"}`}>
                {application.status}
            </p>
        </article>
    );
}

// Ref "my application.png" — Active / Inactive tabs on a white bar under the
// candidate tabs, then a wrapping row of 279-wide application cards.
export default function MyApplications() {
    const [applications, setApplications] = useState(null);
    const [tab, setTab] = useState("active");

    useEffect(() => {
        setApplications(getApplications());
    }, []);

    const visible = (applications ?? []).filter(
        (application) => INACTIVE_STATUSES.includes(application.status) === (tab === "inactive")
    );

    return (
        <>
            <div className="w-full bg-white px-6 shadow-[0px_4px_8px_rgba(0,0,0,0.06)] sm:px-[64px]">
                <div role="tablist" className="flex items-center gap-8">
                    {TABS.map((item) => {
                        const selected = item.key === tab;
                        return (
                            <button
                                key={item.key}
                                type="button"
                                role="tab"
                                aria-selected={selected}
                                onClick={() => setTab(item.key)}
                                className={`border-b-2 px-1 py-4 text-[18px] leading-[1.2] transition-colors ${
                                    selected
                                        ? "border-[#0e2b4b] font-medium text-[#0e2b4b]"
                                        : "border-transparent text-[#8695a7] hover:text-[#415773]"
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <section className="w-full bg-white px-6 pb-16 pt-8 sm:px-[64px]">
                {applications === null ? (
                    <div className="h-[135px] w-full max-w-[279px] animate-pulse rounded-[8px] bg-[#f1f3f5]" aria-busy="true" />
                ) : visible.length === 0 ? (
                    <div className="flex flex-col items-start gap-4 py-6">
                        <p className="text-base leading-[1.5] text-[#415773]">
                            {tab === "active"
                                ? "You have no active applications."
                                : "You have no inactive applications."}
                        </p>
                        {tab === "active" && (
                            <Link
                                href="/careers/open-positions/"
                                className="inline-flex h-11 items-center rounded-[8px] bg-[#0061af] px-6 text-base leading-[1.5] text-white transition-colors hover:bg-[#005192]"
                            >
                                Search Jobs
                            </Link>
                        )}
                    </div>
                ) : (
                    <ul className="grid gap-6 sm:grid-cols-[repeat(auto-fill,minmax(279px,279px))]">
                        {visible.map((application) => (
                            <li key={`${application.position}-${application.appliedAt}`}>
                                <ApplicationCard application={application} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
}
