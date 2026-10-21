"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getAllJobs } from "@/lib/jobs";
import { getSavedJobSlugs, setJobSaved } from "@/lib/candidateStorage";

import iconLocation from "@/assets/Careers/icons/location-pin-17x21.svg";
import iconBriefcase from "@/assets/Careers/icons/briefcase-meta-24.svg";
import iconClock from "@/assets/Careers/icons/clock-meta-24.svg";

function BookmarkIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M6 3.75h12a.75.75 0 0 1 .75.75v16.2l-6.75-4.5-6.75 4.5V4.5A.75.75 0 0 1 6 3.75Z" />
        </svg>
    );
}

function Meta({ icon, children }) {
    return (
        <span className="flex items-center gap-[6px] whitespace-nowrap">
            {icon}
            {children}
        </span>
    );
}

// Ref "saved.png" — one full-width #f7f7f7 panel per job: title and work type
// over a rule, with View More and the bookmark on the right, then a one-line
// summary and the location / experience / work type row.
function SavedJobCard({ job, onUnsave }) {
    return (
        <article className="flex flex-col gap-4 rounded-[12px] bg-[#f7f7f7] px-6 py-7 transition-shadow duration-300 hover:shadow-[0px_8px_20px_-8px_rgba(0,48,86,0.25)]">
            <div className="flex flex-col gap-4 border-b border-[#c9d0d8] pb-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-[6px] capitalize text-[#0e2b4b]">
                    <h2 className="text-2xl font-medium leading-[1.2]">
                        <Link href={`/careers/${job.slug}/`} className="transition-colors hover:text-[#0061af]">
                            {job.title}
                        </Link>
                    </h2>
                    {job.typeOfWork && <p className="text-base leading-[1.5]">{job.typeOfWork}</p>}
                </div>

                <div className="flex shrink-0 items-center gap-7">
                    <Link
                        href={`/careers/${job.slug}/`}
                        className="inline-flex h-8 items-center rounded-[2px] bg-[#0061af] px-7 text-[14px] leading-[1.4] text-white transition-colors hover:bg-[#005192]"
                    >
                        View More
                    </Link>
                    {/* Every job here is saved, so the bookmark is filled and
                        pressing it removes the job from the list. */}
                    <button
                        type="button"
                        aria-pressed="true"
                        aria-label={`Remove ${job.title} from saved jobs`}
                        onClick={onUnsave}
                        className="flex items-center gap-1 text-[14px] leading-[1.4] text-[#0e2b4b] transition-colors hover:text-[#0061af]"
                    >
                        <BookmarkIcon />
                        Saved
                    </button>
                </div>
            </div>

            {job.aboutJob && (
                <p className="line-clamp-1 text-base capitalize leading-[1.5] text-[#415773]">{job.aboutJob}</p>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base capitalize leading-[1.5] text-[#0e2b4b]">
                {job.location && (
                    <Meta
                        icon={
                            <span className="flex size-6 items-center justify-center">
                                <Image src={iconLocation} alt="" width={17} height={21} />
                            </span>
                        }
                    >
                        {job.location}
                    </Meta>
                )}
                {job.experienceLevel && (
                    <Meta icon={<Image src={iconBriefcase} alt="" width={24} height={24} />}>{job.experienceLevel}</Meta>
                )}
                {job.typeOfWork && (
                    <Meta icon={<Image src={iconClock} alt="" width={24} height={24} />}>{job.typeOfWork}</Meta>
                )}
            </div>
        </article>
    );
}

// Single column of saved jobs across the full content width (64 in from each
// edge). The heading is kept for screen readers only. Saved slugs whose job
// has closed are dropped, since getAllJobs only returns open roles.
export default function SavedJobs() {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const saved = getSavedJobSlugs();

        if (saved.length === 0) {
            setJobs([]);
            return;
        }

        getAllJobs()
            .then((data) => {
                if (isMounted) setJobs(data.filter((job) => saved.includes(job.slug)));
            })
            .catch((err) => {
                console.error("Error fetching jobs:", err.message);
                if (isMounted) setJobs([]);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const unsave = (slug) => {
        setJobSaved(slug, false);
        setJobs((list) => list.filter((job) => job.slug !== slug));
    };

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:pb-[88px]">
            <div className="flex w-full flex-col">
                <h1 className="sr-only">Saved Jobs</h1>

                {jobs === null ? (
                    <ul className="flex flex-col gap-8" aria-busy="true">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <li key={index} className="h-[188px] animate-pulse rounded-[12px] bg-[#f7f7f7]" />
                        ))}
                    </ul>
                ) : jobs.length === 0 ? (
                    <div className="flex flex-col items-start gap-4 py-6">
                        <p className="text-base leading-[1.5] text-[#415773]">
                            You haven&apos;t saved any jobs yet. Use Save Job on a role to keep it here.
                        </p>
                        <Link
                            href="/careers/open-positions/"
                            className="inline-flex h-11 items-center rounded-[8px] bg-[#0061af] px-6 text-base leading-[1.5] text-white transition-colors hover:bg-[#005192]"
                        >
                            Search Jobs
                        </Link>
                    </div>
                ) : (
                    <ul className="flex flex-col gap-8">
                        {jobs.map((job) => (
                            <li key={job.slug}>
                                <SavedJobCard job={job} onUnsave={() => unsave(job.slug)} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
