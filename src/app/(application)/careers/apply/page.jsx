"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CareersLayout from "@/components/Careers/CareersLayout";
import JobApplicationForm from "@/components/Careers/JobApplicationForm/JobApplicationForm";

const page = () => {
    return (
        <CareersLayout
            showContactBand
            breadcrumbs={
                <>
                    <Link href="/careers" className="text-[#4a5565] hover:text-[#0061af] transition-colors">
                        Careers
                    </Link>
                    <ChevronRight className="w-4 h-4 text-[#4a5565]" aria-hidden="true" />
                    <span className="text-[#0061af]">Job Application Form</span>
                    <ChevronRight className="w-4 h-4 text-[#4a5565]" aria-hidden="true" />
                </>
            }
        >
            <JobApplicationForm />
        </CareersLayout>
    );
};

export default page;
