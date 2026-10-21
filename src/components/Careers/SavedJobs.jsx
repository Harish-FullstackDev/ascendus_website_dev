"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllJobs } from "@/lib/jobs";
import { getSavedJobSlugs } from "@/lib/candidateStorage";
import JobCard from "./JobCard";

// Ref "saved jobs.png" — a "Saved Jobs" heading over a two-column grid of
// job cards, centered at 1011 wide (169 in from each edge at 1440) with the
// columns 113 apart. Saved slugs whose job has closed are dropped, since
// getAllJobs only returns open roles.
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

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:pb-[88px] sm:pt-12">
            <div className="mx-auto flex w-full max-w-[1011px] flex-col gap-6">
                <h1 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">Saved Jobs</h1>

                {jobs === null ? (
                    <ul className="grid gap-y-14 lg:grid-cols-2 lg:gap-x-[113px]" aria-busy="true">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <li key={index} className="h-[171px] animate-pulse rounded-[8px] bg-[#f1f3f5]" />
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
                    <ul className="grid gap-y-14 lg:grid-cols-2 lg:gap-x-[113px] lg:gap-y-16">
                        {jobs.map((job) => (
                            <li key={job.slug}>
                                <JobCard job={job} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
