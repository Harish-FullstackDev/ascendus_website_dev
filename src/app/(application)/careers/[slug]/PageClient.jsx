"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CareersSubNav from "@/components/Careers/CareersSubNav";
import JobDetailHero from "@/components/Careers/JobDetailHero";
import JobDetailBody from "@/components/Careers/JobDetailBody";
import { OPEN_ROLES_HREF } from "@/components/Careers/GreatTransformations";

// Figma 1619:11778. Same shell as the listing page: the light navbar, the
// candidate tabs, then the job banner and body.
const PageClient = ({ job, otherJobs }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* The desktop navbar is 80 tall but its own spacer is 68, so the
                tabs would tuck 12px under it. */}
            <main className="flex-grow lg:pt-3">
                <CareersSubNav />

                {job ? (
                    <>
                        <JobDetailHero job={job} />
                        <JobDetailBody job={job} otherJobs={otherJobs} />
                    </>
                ) : (
                    <section className="flex w-full flex-col items-center gap-4 px-6 py-16 text-center sm:px-[64px]">
                        <h1 className="text-2xl font-medium leading-[1.2] text-[#0e2b4b]">Job Not Found</h1>
                        <p className="max-w-[480px] text-base leading-[1.5] text-[#415773]">
                            This position may have been filled or is no longer accepting applications.
                        </p>
                        <Link
                            href={OPEN_ROLES_HREF}
                            className="mt-2 inline-flex h-12 items-center rounded-[8px] bg-[#0061af] px-7 text-base capitalize leading-[1.5] text-white transition-colors hover:bg-[#005192]"
                        >
                            See Open Roles
                        </Link>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default PageClient;
