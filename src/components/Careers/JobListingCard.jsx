"use client";

import Image from "next/image";
import Link from "next/link";

import iconBookmark from "@/assets/Careers/icons/bookmarks-24-dark.svg";
import iconBookmarkFilled from "@/assets/Careers/icons/bookmarks-filled-24-dark.svg";

import { JobMeta } from "./JobCard";
import useSavedJob from "./useSavedJob";

// Figma 1566:1057 — one full-width #f7f7f7 row per job: title block and the
// View More / Save actions on a 67-tall row over a 0.5px rule, then the
// summary and the meta row. Figma's subtitle repeats the work type from the
// meta row, so it shows the department, as JobCard does. The card holds two
// controls, so only the title and View More link to the job.
export default function JobListingCard({ job }) {
    const [saved, toggleSaved] = useSavedJob(job.slug);
    const subtitle = job.categories[0] ?? job.typeOfWork;
    const href = `/careers/${job.slug}`;

    return (
        <article className="flex flex-col gap-4 rounded-[12px] bg-[#f7f7f7] p-6">
            <div className="flex flex-col gap-4 border-b-[0.5px] border-[#8695a7] pb-2 sm:min-h-[67px] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-[6px] capitalize text-[#0e2b4b]">
                    <h3 className="text-2xl font-medium leading-[1.2]">
                        <Link href={href} className="transition-colors hover:text-[#0061af]">
                            {job.title}
                        </Link>
                    </h3>
                    {subtitle && <p className="text-base leading-[1.5]">{subtitle}</p>}
                </div>

                <div className="flex shrink-0 items-center gap-6">
                    <Link
                        href={href}
                        className="flex h-[33px] w-[126px] items-center justify-center rounded-[4px] bg-[#0061af] text-[14px] leading-[1.4] text-[#f8f8f8] transition-colors hover:bg-[#005192]"
                    >
                        View More
                    </Link>

                    <button
                        type="button"
                        aria-pressed={saved}
                        onClick={toggleSaved}
                        className="flex items-center gap-1 text-[14px] leading-[1.4] text-[#0e2b4b] transition-opacity hover:opacity-70"
                    >
                        <Image src={saved ? iconBookmarkFilled : iconBookmark} alt="" width={24} height={24} />
                        {saved ? "Saved" : "Save"}
                    </button>
                </div>
            </div>

            {job.aboutJob && (
                <p className="line-clamp-2 text-base capitalize leading-[1.5] text-[#415773] lg:line-clamp-1">
                    {job.aboutJob}
                </p>
            )}

            <JobMeta job={job} />
        </article>
    );
}
