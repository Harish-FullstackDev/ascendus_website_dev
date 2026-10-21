"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import heroBg from "@/assets/Careers/job-hero-bg.webp";
import iconArrow from "@/assets/Careers/icons/arrow-right-21-dark.svg";
import iconBookmark from "@/assets/Careers/icons/bookmark-16-white.svg";
import iconBookmarkFilled from "@/assets/Careers/icons/bookmark-filled-16-white.svg";

import { getSavedJobSlugs, setJobSaved } from "@/lib/candidateStorage";

// Saved jobs live in this browser until the candidate account has a backend;
// the Saved Jobs tab reads the same list.
function useSavedJob(slug) {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setSaved(getSavedJobSlugs().includes(slug));
    }, [slug]);

    const toggle = () => {
        setSaved((was) => {
            setJobSaved(slug, !was);
            return !was;
        });
    };

    return [saved, toggle];
}

// Figma 1487:12053 — full-bleed banner (269 at 1440: 32 + 205 + 32) under
// the candidate tabs. Same layout as the HRMS portal's JobHero (title,
// chips 16 below), plus the action row 32 under the chips. Figma also puts
// a second "Save Job" chip in the chip row; one Save Job control is kept.
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
            <Image src={heroBg} alt="" fill priority sizes="100vw" className="-z-10 object-cover object-right" />
            <div className="flex w-full flex-col gap-8 px-6 py-8 sm:px-[64px]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[32px] font-medium capitalize leading-[1.2] text-white">{job.title}</h1>
                    <ul className="flex flex-wrap items-center gap-3 text-[14px] leading-[1.4] text-white">
                        {tags.map((tag) => (
                            <li key={tag} className="rounded-[6px] bg-[rgba(221,241,253,0.1)] p-[6px]">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap items-start gap-4">
                    <Link
                        href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
                        className="group flex h-11 w-[264px] items-center justify-center gap-1 rounded-[4px] bg-[#f8f8f8] text-[18px] font-medium leading-[1.2] text-[#0e2b4b] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:bg-white"
                    >
                        Apply for this Position
                        <Image
                            src={iconArrow}
                            alt=""
                            className="h-4 w-[21px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    <button
                        type="button"
                        aria-pressed={saved}
                        onClick={toggleSaved}
                        className="flex h-11 items-center gap-1 rounded-[6px] border border-[#8695a7] px-[13px] text-[18px] font-medium leading-[1.2] text-white transition-colors hover:border-white"
                    >
                        <Image src={saved ? iconBookmarkFilled : iconBookmark} alt="" width={16} height={16} />
                        {saved ? "Saved" : "Save Job"}
                    </button>
                </div>
            </div>
        </section>
    );
}
