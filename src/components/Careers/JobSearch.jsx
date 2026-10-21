"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { getAllJobs } from "@/lib/jobs";
import iconSearch from "@/assets/Careers/icons/search-16.svg";
import iconChevron from "@/assets/Careers/icons/chevron-down-18.svg";
import iconReset from "@/assets/Careers/icons/reset-24.svg";
import JobListingCard from "./JobListingCard";
import { OPEN_POSITION_FILTERS } from "./openPositionsFilters";

const EMPTY_FILTERS = Object.fromEntries(OPEN_POSITION_FILTERS.map((filter) => [filter.key, ""]));

// A job field can be a single value or a list (categories), and admin-entered
// values may differ in case from the placeholder options.
function jobMatches(job, field, selected) {
    const values = [].concat(job[field] ?? []);
    return values.some((value) => value?.toLowerCase() === selected.toLowerCase());
}

// Figma gives each dropdown its own fixed width (112/176/127); each is 10px
// wider here because Switzer renders the labels a touch wider than Figma and
// "Location" would otherwise truncate. A native
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

// Figma 1487:8463 — the heading, search controls and a single column of
// full-width job rows sit straight on the white page, all on the same 1264
// column (88 in from each edge at 1440). Rows sit 28 apart.
export default function JobSearch() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState(EMPTY_FILTERS);

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

    const reset = () => {
        setSearch("");
        setFilters(EMPTY_FILTERS);
    };

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[88px] sm:py-16">
            <div className="w-full">
                <div className="flex w-full flex-col gap-4">
                    <h1 className="text-2xl font-medium capitalize leading-[1.2] text-[#0061af]">
                        Find Your Next Opportunity
                    </h1>

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
                </div>

                <div className="mt-7">
                    {loading ? (
                        <ul className="flex flex-col gap-7" aria-busy="true">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <li key={index} className="h-[188px] animate-pulse rounded-[12px] bg-[#f7f7f7]" />
                            ))}
                        </ul>
                    ) : filteredJobs.length === 0 ? (
                        <p className="py-10 text-center text-base leading-[1.5] text-[#415773]">
                            {jobs.length === 0
                                ? "There are no open positions right now."
                                : "No roles match your search. Try clearing a filter."}
                        </p>
                    ) : (
                        <ul className="flex flex-col gap-7">
                            {filteredJobs.map((job) => (
                                <li key={job.slug}>
                                    <JobListingCard job={job} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
