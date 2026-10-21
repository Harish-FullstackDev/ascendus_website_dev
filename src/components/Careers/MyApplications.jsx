"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllJobs } from "@/lib/jobs";
import { applicationKey, getApplications, withdrawApplication } from "@/lib/candidateStorage";

// Hiring pipeline, in order. An application's status is the stage it is at;
// any status outside this list ends the application and moves it to Inactive.
const STAGES = [
    "Application Received",
    "Recruiter Screen",
    "Technical Portfolio Review",
    "Executive Panel",
    "Offer",
];

const TABS = [
    { key: "active", label: "Active" },
    { key: "inactive", label: "Inactive" },
];

const isActive = (application) => STAGES.includes(application.status);

function formatDate(iso) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function PinIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.5" />
        </svg>
    );
}

function BuildingIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="3" y="4" width="18" height="17" rx="1" />
            <path d="M7 8h2M7 12h2M7 16h2M15 8h2M15 12h2M15 16h2" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    );
}

function FileIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e5484d" strokeWidth="2" aria-hidden>
            <rect x="4" y="3" width="13" height="16" rx="1.5" />
            <path d="M8 8h5M8 12h5M20 7v12a2 2 0 0 1-2 2H8" />
        </svg>
    );
}

function LinkIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0061af" strokeWidth="2" aria-hidden>
            <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
            <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
        </svg>
    );
}

function VideoIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden>
            <rect x="3" y="6" width="13" height="12" rx="1.5" />
            <path d="m16 10 5-3v10l-5-3" />
        </svg>
    );
}

const chipClass =
    "inline-flex items-center gap-1.5 rounded-[6px] bg-[#f1f3f5] px-2.5 py-1 text-[14px] leading-[1.4] text-[#0e2b4b]";

// Shown only when the application carries a scheduled interview
// ({ title, when, link }), which the recruiter side will supply.
function InterviewPanel({ interview }) {
    return (
        <div className="flex flex-col gap-4 rounded-[12px] border border-[#d6e3f3] bg-[#eef3fb] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] bg-[#0061af]">
                    <VideoIcon />
                </span>
                <div className="flex flex-col gap-0.5">
                    <p className="text-[12px] leading-[1.4] text-[#0061af]">Meeting Link Ready</p>
                    <p className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">
                        Upcoming Interview: {interview.title}
                    </p>
                    <p className="text-[14px] leading-[1.4] text-[#415773]">{interview.when}</p>
                </div>
            </div>
            {interview.link && (
                <a
                    href={interview.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center self-start rounded-[6px] bg-[#0061af] px-4 text-[14px] font-medium text-white transition-colors hover:bg-[#005192] sm:self-auto"
                >
                    Join Meeting
                </a>
            )}
        </div>
    );
}

function ProgressPanel({ stageIndex }) {
    const previous = STAGES[stageIndex - 1];
    const next = STAGES[stageIndex + 1];

    return (
        <div className="flex flex-col gap-3 rounded-[8px] bg-[#eef3fb] p-4">
            <div className="flex items-center justify-between gap-4 text-[14px] leading-[1.4]">
                <p className="text-[#0e2b4b]">Application Progress</p>
                <p className="text-[#0061af]">
                    Stage {stageIndex + 1} of {STAGES.length}
                </p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#dbe5f0]">
                <div
                    className="h-full rounded-full bg-[#0061af]"
                    style={{ width: `${((stageIndex + 1) / STAGES.length) * 100}%` }}
                />
            </div>
            <div className="grid grid-cols-1 gap-1 text-[13px] leading-[1.4] sm:grid-cols-3">
                <p className="text-[#415773]">{previous ? `Cleared: ${previous}` : ""}</p>
                <p className="text-[#0061af] sm:text-center">Current: {STAGES[stageIndex]}</p>
                <p className="text-[#415773] sm:text-right">{next ? `Next: ${next}` : ""}</p>
            </div>
        </div>
    );
}

// Ref "active card.png" (collapsed) and "acive card view.png" (expanded).
function ApplicationCard({ application, job, onWithdraw }) {
    const [expanded, setExpanded] = useState(false);
    const stageIndex = STAGES.indexOf(application.status);
    const active = stageIndex !== -1;

    const location = job?.location
        ? `${job.location}${job.modeOfWork ? ` (${job.modeOfWork})` : ""}`
        : null;
    const department = job?.categories?.[0];
    const hasSubmitted = application.resumeName || application.portfolio;

    return (
        <article className="flex flex-col gap-4 rounded-[12px] border border-[#e6e9ee] bg-white p-6 shadow-[0px_1px_3px_rgba(14,43,75,0.06)] sm:px-8">
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2 text-[14px] leading-[1.4]">
                    {active ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#d9efe3] px-3 py-1 text-[#00a05a]">
                            <span className="size-1.5 rounded-full bg-[#00a05a]" aria-hidden />
                            Stage {stageIndex + 1} of {STAGES.length}: {application.status}
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#f1f3f5] px-3 py-1 text-[#8695a7]">
                            <span className="size-1.5 rounded-full bg-[#8695a7]" aria-hidden />
                            {application.status}
                        </span>
                    )}
                    {job?.jobCode && (
                        <span className="rounded-full bg-[#eef2f8] px-3 py-1 text-[#415773]">
                            Job ID: {job.jobCode}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl font-medium leading-[1.2] text-[#0e2b4b]">
                    {job ? (
                        <Link href={`/careers/${job.slug}/`} className="transition-colors hover:text-[#0061af]">
                            {application.position}
                        </Link>
                    ) : (
                        application.position
                    )}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] leading-[1.4] text-[#415773]">
                    {location && (
                        <span className="flex items-center gap-1.5">
                            <PinIcon />
                            {location}
                        </span>
                    )}
                    {department && (
                        <span className="flex items-center gap-1.5">
                            <BuildingIcon />
                            {department}
                        </span>
                    )}
                    <span className="flex items-center gap-1.5">
                        <ClockIcon />
                        Applied {formatDate(application.appliedAt)}
                    </span>
                </div>
            </div>

            {expanded && (
                <div className="flex flex-col gap-6 pt-2">
                    {active && application.interview && <InterviewPanel interview={application.interview} />}
                    {active && <ProgressPanel stageIndex={stageIndex} />}

                    {hasSubmitted && (
                        <div className="flex flex-wrap items-center gap-2 border-t border-[#e6e9ee] pt-4 text-[14px] leading-[1.4] text-[#415773]">
                            <span className="mr-1">Submitted:</span>
                            {application.resumeName && (
                                <span className={chipClass}>
                                    <FileIcon />
                                    {application.resumeName}
                                </span>
                            )}
                            {application.portfolio && (
                                <a
                                    href={application.portfolio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${chipClass} transition-colors hover:bg-[#e6e9ee]`}
                                >
                                    <LinkIcon />
                                    Portfolio
                                </a>
                            )}
                        </div>
                    )}
                </div>
            )}

            <div className="flex flex-wrap items-center gap-2">
                <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setExpanded((value) => !value)}
                    className="inline-flex h-7 items-center rounded-[4px] bg-[#0061af] px-2.5 text-[14px] leading-[1.4] text-white transition-colors hover:bg-[#005192]"
                >
                    {expanded ? "View less" : "View Details"}
                </button>
                {active && (
                    <button
                        type="button"
                        onClick={() => {
                            if (window.confirm(`Withdraw your application for ${application.position}?`)) onWithdraw();
                        }}
                        className="inline-flex h-7 items-center rounded-[4px] bg-[#eef3fb] px-2.5 text-[14px] leading-[1.4] text-[#0061af] transition-colors hover:bg-[#dbe5f0]"
                    >
                        Withdraw
                    </button>
                )}
            </div>
        </article>
    );
}

// Ref "active.png" — Active / Inactive tabs on a white bar under the
// candidate tabs, then one full-width card per application.
export default function MyApplications() {
    const [applications, setApplications] = useState(null);
    const [jobsByTitle, setJobsByTitle] = useState({});
    const [tab, setTab] = useState("active");

    useEffect(() => {
        let isMounted = true;
        setApplications(getApplications());

        // The form only records the position title, so location and
        // department come from the open job of that title, when one exists.
        getAllJobs()
            .then((jobs) => {
                if (isMounted) setJobsByTitle(Object.fromEntries(jobs.map((job) => [job.title, job])));
            })
            .catch((err) => console.error("Error fetching jobs:", err.message));

        return () => {
            isMounted = false;
        };
    }, []);

    const visible = (applications ?? []).filter((application) => isActive(application) === (tab === "active"));

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
                    <div className="h-[175px] w-full animate-pulse rounded-[12px] bg-[#f1f3f5]" aria-busy="true" />
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
                    <ul className="flex flex-col gap-6">
                        {visible.map((application) => {
                            const key = applicationKey(application);
                            return (
                                <li key={key}>
                                    <ApplicationCard
                                        application={application}
                                        job={jobsByTitle[application.position]}
                                        onWithdraw={() => setApplications(withdrawApplication(key))}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>
        </>
    );
}
