"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { getAllJobs } from "@/lib/jobs";
import iconSearch from "@/assets/Careers/icons/search-16.svg";
import iconChevron from "@/assets/Careers/icons/chevron-down-18.svg";
import iconReset from "@/assets/Careers/icons/reset-24.svg";
import iconBriefcase from "@/assets/Careers/icons/briefcase-16.svg";
import iconClock from "@/assets/Careers/icons/clock-16.svg";
import iconArrow from "@/assets/Careers/icons/arrow-right-16-primary.svg";
import { OPEN_POSITION_FILTERS } from "./openPositionsFilters";

// Figma (602:2153) shows four rows in a fixed-height panel. The live list can
// be longer, so the list is capped at the height of its first four rows and
// scrolls past that.
const INITIAL_VISIBLE = 4;

const EMPTY_FILTERS = Object.fromEntries(OPEN_POSITION_FILTERS.map((filter) => [filter.key, ""]));

// A job field can be a single value or a list (categories), and admin-entered
// values may differ in case from the placeholder options.
function jobMatches(job, field, selected) {
    const values = [].concat(job[field] ?? []);
    return values.some((value) => value?.toLowerCase() === selected.toLowerCase());
}

// Figma gives each dropdown its own fixed width (133/112/176/127); each is
// 10px wider here because Switzer renders the labels a touch wider than
// Figma and "Department" / "Location" would otherwise truncate. A native
// select otherwise sizes itself to its longest option, so the widths are set
// explicitly and a long selected value truncates.
function FilterSelect({ label, value, options, onChange, width }) {
    return (
        <label className="relative inline-flex shrink-0">
            <span className="sr-only">{label}</span>
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className={`h-[34px] cursor-pointer appearance-none truncate ${width} rounded-[6px] border border-[#c9d0d8] bg-white py-[7px] pl-[13px] pr-[43px] text-[14px] leading-[1.4] text-[#374151] outline-none focus:border-[#0061af]`}
            >
                <option value="">{label}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <Image
                src={iconChevron}
                alt=""
                className="pointer-events-none absolute right-[13px] top-1/2 size-[18px] -translate-y-1/2"
            />
        </label>
    );
}

function JobRow({ job }) {
    return (
        <Link
            href={`/careers/${job.slug}`}
            className="group flex flex-col gap-4 rounded-[12px] border border-[#c9d0d8] bg-white px-5 pb-[21px] pt-[29px] transition-colors hover:border-[#0061af] sm:flex-row sm:items-center sm:justify-between sm:pl-[25px] sm:pr-[21px]"
        >
            <div className="flex flex-col gap-4">
                <h3 className="text-[18px] font-medium leading-[1.2] text-[#111827]">{job.title}</h3>
                <p className="flex flex-wrap items-center gap-2 text-[14px] leading-[1.4] text-[#6b7280]">
                    <span>{job.categories[0]}</span>
                    <span aria-hidden className="text-[12px] leading-4 text-[#d1d5db]">
                        •
                    </span>
                    <span>{job.location}</span>
                </p>
            </div>

            <div className="flex items-center gap-6">
                <span className="flex items-center gap-[6px] whitespace-nowrap text-base capitalize leading-[1.5] text-[#6b7280]">
                    <Image src={iconBriefcase} alt="" className="size-4" />
                    {job.experienceLevel}
                </span>
                <span className="flex items-center gap-[6px] whitespace-nowrap text-base capitalize leading-[1.5] text-[#6b7280]">
                    <Image src={iconClock} alt="" className="size-4" />
                    {job.typeOfWork}
                </span>
                <span className="ml-auto flex size-9 shrink-0 items-center justify-center rounded-full border border-[#c9d0d8] transition-colors group-hover:border-[#0061af] sm:ml-0">
                    <Image
                        src={iconArrow}
                        alt=""
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                </span>
            </div>
        </Link>
    );
}

// Section 3 — white, sharing a 32/32 boundary with "Life at Ascendus" above
// and a full 64 against the dark band below.
export default function OpenPositions() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState(EMPTY_FILTERS);
    const listRef = useRef(null);
    const [listMaxHeight, setListMaxHeight] = useState(null);

    useEffect(() => {
        let isMounted = true;

        getAllJobs()
            .then((data) => {
                if (isMounted) setJobs(data);
            })
            .catch((err) => {
                console.error("Error fetching jobs:", err.message);
                if (isMounted) setJobs([]);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredJobs = useMemo(() => {
        const query = search.trim().toLowerCase();
        return jobs.filter((job) => {
            const matchesSearch =
                !query ||
                [job.title, job.location, ...job.categories].some((field) => field?.toLowerCase().includes(query));
            const matchesFilters = OPEN_POSITION_FILTERS.every(
                (filter) => !filters[filter.key] || jobMatches(job, filter.field, filters[filter.key])
            );
            return matchesSearch && matchesFilters;
        });
    }, [jobs, search, filters]);

    const hasActiveFilters = search !== "" || Object.values(filters).some(Boolean);
    const isScrollable = filteredJobs.length > INITIAL_VISIBLE;

    // Rows change height with the viewport (they stack on phones), so the cap
    // is measured from the bottom of the fourth row rather than hard-coded.
    useLayoutEffect(() => {
        const list = listRef.current;
        if (!list || !isScrollable) {
            setListMaxHeight(null);
            return undefined;
        }

        const measure = () => {
            const fourth = list.children[INITIAL_VISIBLE - 1];
            if (fourth) setListMaxHeight(fourth.offsetTop + fourth.offsetHeight);
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(list);
        return () => observer.disconnect();
    }, [isScrollable, filteredJobs]);

    // A new search or filter starts the list back at the top.
    useEffect(() => {
        if (listRef.current) listRef.current.scrollTop = 0;
    }, [search, filters]);

    const reset = () => {
        setSearch("");
        setFilters(EMPTY_FILTERS);
    };

    return (
        <section id="open-positions" className="w-full scroll-mt-24 bg-white px-6 py-10 sm:px-[64px] sm:pb-16 sm:pt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-full flex-col gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-5"
            >
                <div className="flex flex-col gap-1 xl:w-[315px] xl:shrink-0">
                    <div className="flex flex-col gap-3">
                        <p className="text-[14px] font-medium uppercase leading-4 tracking-[0.7px] text-[#0061af]">
                            Open Positions
                        </p>
                        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.2] text-[#0e2b4b] xl:whitespace-nowrap">
                            Find the Right Role
                            <br className="hidden sm:block" /> for Your Next Chapter.
                        </h2>
                    </div>
                    {/* Figma (633:5214) sets this body copy in Title Case. */}
                    <p className="max-w-[560px] text-base capitalize leading-[1.5] text-[#415773]">
                        Explore opportunities that match your skills, experience, and goals.
                        <br /> Take the next step toward a career where you can grow and make an impact.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-4 rounded-[12px] bg-[#f1f3f5] px-4 pb-6 sm:px-8 sm:pb-8 xl:max-w-[977px]">
                    <div className="flex flex-col gap-3 py-4">
                        <label className="relative block">
                            <span className="sr-only">Search jobs</span>
                            <Image
                                src={iconSearch}
                                alt=""
                                className="pointer-events-none absolute left-[14px] top-1/2 size-4 -translate-y-1/2"
                            />
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder="Search by job title, keyword or location"
                                className="w-full rounded-[8px] border border-[#c9d0d8] bg-white pb-3 pl-[41px] pr-[17px] pt-[11px] text-[14px] leading-[1.4] text-[#111827] outline-none placeholder:text-[#8695a7] focus:border-[#0061af]"
                            />
                        </label>

                        <div className="flex flex-wrap items-center gap-2">
                            {OPEN_POSITION_FILTERS.map((filter) => (
                                <FilterSelect
                                    key={filter.key}
                                    label={filter.label}
                                    width={filter.width}
                                    value={filters[filter.key]}
                                    options={filter.options}
                                    onChange={(value) => setFilters((prev) => ({ ...prev, [filter.key]: value }))}
                                />
                            ))}

                            <button
                                type="button"
                                onClick={reset}
                                disabled={!hasActiveFilters}
                                className="ml-auto flex items-center gap-1 px-2 py-[6px] text-base capitalize leading-[1.5] text-[#6b7280] transition-opacity hover:opacity-70 disabled:opacity-50"
                            >
                                <Image src={iconReset} alt="" className="size-6" />
                                Reset
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex flex-col gap-4" aria-busy="true">
                            {Array.from({ length: INITIAL_VISIBLE }).map((_, index) => (
                                <div key={index} className="h-[108px] animate-pulse rounded-[12px] border border-[#c9d0d8] bg-white" />
                            ))}
                        </div>
                    ) : filteredJobs.length === 0 ? (
                        <div className="rounded-[12px] border border-[#c9d0d8] bg-white px-6 py-10 text-center">
                            <p className="text-base leading-[1.5] text-[#415773]">
                                {jobs.length === 0
                                    ? "There are no open positions right now."
                                    : "No roles match your search. Try clearing a filter."}
                            </p>
                        </div>
                    ) : (
                        <div
                            ref={listRef}
                            style={listMaxHeight ? { maxHeight: listMaxHeight } : undefined}
                            className={`relative flex flex-col gap-4 ${
                                isScrollable
                                    ? "-mr-3 overflow-y-auto overscroll-contain pr-3 [scrollbar-color:#8695a7_transparent] [scrollbar-width:thin]"
                                    : ""
                            }`}
                        >
                            {filteredJobs.map((job) => (
                                <JobRow key={job.slug} job={job} />
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
