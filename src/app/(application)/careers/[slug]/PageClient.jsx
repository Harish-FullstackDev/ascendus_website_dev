import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CareersLayout from "@/components/Careers/CareersLayout";
import JobDescription from "@/components/Careers/JobDescription/JobDescription";

const PageClient = ({ job, otherJobs }) => {
    if (!job) {
        return (
            <CareersLayout>
                <div className="max-w-3xl mx-auto text-center py-8">
                    <h1 className="text-2xl font-semibold text-slate-900 mb-3">Job Not Found</h1>
                    <p className="text-slate-500 mb-6">
                        This position may have been filled or is no longer accepting applications.
                    </p>
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold transition-colors"
                    >
                        Back to Careers
                    </Link>
                </div>
            </CareersLayout>
        );
    }

    return (
        <CareersLayout
            showContactBand
            breadcrumbs={
                <>
                    <Link href="/careers" className="text-[#4a5565] hover:text-[#0061af] transition-colors">
                        Careers
                    </Link>
                    <ChevronRight className="w-4 h-4 text-[#4a5565]" aria-hidden="true" />
                    <span className="text-[#0061af]">{job.title}</span>
                    <ChevronRight className="w-4 h-4 text-[#4a5565]" aria-hidden="true" />
                </>
            }
        >
            <JobDescription job={job} otherJobs={otherJobs} />
        </CareersLayout>
    );
};

export default PageClient;
