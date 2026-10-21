"use client";

import CandidateShell from "@/components/Careers/CandidateShell";
import JobSearch from "@/components/Careers/JobSearch";

// Figma 1619:11248. Careers routes keep the light navbar from the top, so
// there is no dark band behind it.
const page = () => {
    return (
        <CandidateShell>
            <JobSearch />
        </CandidateShell>
    );
};

export default page;
