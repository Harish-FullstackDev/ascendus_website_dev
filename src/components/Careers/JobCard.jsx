import Image from "next/image";
import Link from "next/link";

import iconArrow from "@/assets/Careers/icons/arrow-right-21.svg";
import iconLocation from "@/assets/Careers/icons/location-pin-17x21.svg";
import iconBriefcase from "@/assets/Careers/icons/briefcase-meta-24.svg";
import iconClock from "@/assets/Careers/icons/clock-meta-24.svg";

function Meta({ icon, children }) {
    return (
        <span className="flex items-center gap-[6px] whitespace-nowrap">
            {icon}
            {children}
        </span>
    );
}

// Figma 1524:415 — title block over a 0.5px rule, a two-line summary, then
// location / experience / work type. Figma's subtitle reads "Full Time",
// which repeats the work type in the meta row, so it shows the department.
// Used for similar jobs and saved jobs; the listing has its own row card
// (JobListingCard). `className` lets a page box the card (similar jobs sets a
// #f7f7f7 panel, Figma 1619:11950) and `summaryLines` sets the summary clamp.
export default function JobCard({ job, className = "", summaryLines = "line-clamp-2" }) {
    const subtitle = job.categories[0] ?? job.typeOfWork;

    return (
        <Link href={`/careers/${job.slug}`} className={`group flex flex-col gap-4 ${className}`}>
            <div className="flex items-start justify-between gap-4 border-b-[0.5px] border-[#8695a7] pb-2">
                <div className="flex flex-col gap-[6px] capitalize text-[#0061af]">
                    <h3 className="text-2xl font-medium leading-[1.2]">{job.title}</h3>
                    {subtitle && <p className="text-base leading-[1.5]">{subtitle}</p>}
                </div>

                {/* Figma turns the 21×16 arrow -47° to point up-right. */}
                <span className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-[#0061af] transition-colors duration-300 group-hover:bg-[#005192]">
                    <Image
                        src={iconArrow}
                        alt=""
                        className="h-4 w-[21px] -rotate-[47deg] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </span>
            </div>

            {job.aboutJob && (
                <p className={`${summaryLines} text-base capitalize leading-[1.5] text-[#415773]`}>{job.aboutJob}</p>
            )}

            <JobMeta job={job} />
        </Link>
    );
}

// Location / experience / work type row, shared with JobListingCard.
export function JobMeta({ job }) {
    return (
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
    );
}
