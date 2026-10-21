"use client";

import CandidateShell from "@/components/Careers/CandidateShell";
import JobSearch from "@/components/Careers/JobSearch";

// Figma 1487:8460. There is no hero here, so CandidateShell's navy band sits
// behind the fixed navbar: it keeps its white-on-dark top state and turns
// light on scroll as it does everywhere else.
const page = () => {
    return (
        <CandidateShell>
            <JobSearch />
        </CandidateShell>
    );
};

export default page;
