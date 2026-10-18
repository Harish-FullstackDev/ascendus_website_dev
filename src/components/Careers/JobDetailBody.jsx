import JobCard from "./JobCard";
import JobSectionAccordion from "./JobSectionAccordion";

// Company-wide sections, the same on every posting. Copy drafted for the
// HRMS portal (the design shows them collapsed) and still needs sign-off.
// Figma spells the title "Acsendus".
const STATIC_SECTIONS = [
    {
        title: "About Ascendus",
        text: "Ascendus delivers technology and digital transformation services for organisations across the region.",
    },
    {
        title: "Important Notice",
        text: "Ascendus never asks candidates for payment at any stage of the hiring process.",
    },
];

// Figma 1487:10970 — 64 top and bottom, then two columns sharing the 1312
// row: the 780 job column (56 inner gap to a 0.5px rule) and the 470 similar
// jobs column, 62 apart. Columns keep that ratio from lg; below lg they
// stack and the rule drops.
//
// The jobs table has no separate "Job Description" field, so that accordion
// is left out; the summary carries about_job.
export default function JobDetailBody({ job, otherJobs }) {
    const sections = [
        { title: "Roles and Responsibilities", items: job.responsibilities },
        { title: "Qualification", items: job.qualifications },
    ].filter((section) => section.items.length > 0);

    return (
        <section className="w-full bg-white px-6 py-10 sm:px-[64px] sm:py-16">
            <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,780fr)_minmax(0,470fr)] lg:gap-[62px]">
                <div className="flex flex-col gap-6 lg:border-r-[0.5px] lg:border-[#8695a7] lg:pr-14">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[18px] font-medium leading-[1.2] text-[#0e2b4b]">Job Summary</h2>
                        <p className="text-[14px] leading-[1.4] text-[#415773]">{job.aboutJob}</p>
                    </div>

                    {sections.map((section) => (
                        <JobSectionAccordion key={section.title} title={section.title} items={section.items} />
                    ))}
                    {STATIC_SECTIONS.map((section) => (
                        <JobSectionAccordion key={section.title} title={section.title} text={section.text} />
                    ))}
                </div>

                {otherJobs.length > 0 && (
                    <aside className="flex flex-col gap-8 lg:gap-[61px]">
                        <h2 className="text-[18px] font-medium leading-[1.2] text-[#0061af]">Similar jobs</h2>
                        <ul className="flex max-w-[445px] flex-col gap-14 lg:gap-16">
                            {otherJobs.map((other) => (
                                <li key={other.slug}>
                                    <JobCard job={other} />
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>
        </section>
    );
}
