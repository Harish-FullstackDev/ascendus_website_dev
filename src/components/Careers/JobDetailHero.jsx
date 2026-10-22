"use client";

import Image from "next/image";

import heroBg from "@/assets/Careers/job-hero-bg.webp";
import iconArrow from "@/assets/Careers/icons/arrow-right-21-dark.svg";
import iconBookmark from "@/assets/Careers/icons/bookmarks-24-light.svg";
import iconBookmarkFilled from "@/assets/Careers/icons/bookmarks-filled-24-light.svg";

import { HRMS_PORTAL_URL } from "@/lib/hrmsPortal";

import useSavedJob from "./useSavedJob";

// Figma 1619:11895 — full-bleed banner (269 at 1440: 32 + 205 + 32) under
// the candidate tabs: title, chips 16 below, then the action row 32 under
// the chips. Both buttons have 8px corners and Save Job carries a 24px
// bookmark. The "Job ID" line under the title shows jobs.job_code, and is
// skipped until that column exists.
export default function JobDetailHero({ job }) {
    const [saved, toggleSaved] = useSavedJob(job.slug);
    const department = job.categories[0];
    // Admin data can repeat a value (location "Hybrid" with mode "Hybrid"), so
    // repeats collapse into one chip.
    const tags = [
        ...new Set([job.typeOfWork, job.modeOfWork, job.location, department && `Dept: ${department}`].filter(Boolean)),
    ];

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#00223d]">
            <Image src={heroBg} alt="" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
            <div className="flex w-full flex-col gap-8 px-6 py-8 sm:px-[64px]">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[32px] font-medium capitalize leading-[1.2] text-white">{job.title}</h1>
                        {job.jobCode && (
                            <p className="text-[14px] leading-[1.4] text-[#afc9e6]">Job ID: {job.jobCode}</p>
                        )}
                    </div>
                    <ul className="flex flex-wrap items-center gap-3 text-[14px] leading-[1.4] text-white">
                        {tags.map((tag) => (
                            <li key={tag} className="rounded-[6px] bg-[rgba(221,241,253,0.1)] p-[6px]">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap items-start gap-4">
                    {/* Applications are taken on the external HRMS portal, which
                        looks the job up by its slug and handles sign-in itself. */}
                    <a
                        href={`${HRMS_PORTAL_URL}/jobs/${encodeURIComponent(job.slug)}/apply`}
                        className="group flex h-11 w-[264px] items-center justify-center gap-1 rounded-[8px] bg-[#f8f8f8] text-[18px] font-medium leading-[1.2] text-[#0e2b4b] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:bg-white"
                    >
                        Apply for this Position
                        <Image
                            src={iconArrow}
                            alt=""
                            className="h-4 w-[21px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>

                    <button
                        type="button"
                        aria-pressed={saved}
                        onClick={toggleSaved}
                        className="flex h-11 items-center gap-1 rounded-[8px] border border-[#8695a7] p-[6px] text-[18px] font-medium leading-[1.2] text-white transition-colors hover:border-white"
                    >
                        <Image src={saved ? iconBookmarkFilled : iconBookmark} alt="" width={24} height={24} />
                        {saved ? "Saved" : "Save Job"}
                    </button>
                </div>
            </div>
        </section>
    );
}
