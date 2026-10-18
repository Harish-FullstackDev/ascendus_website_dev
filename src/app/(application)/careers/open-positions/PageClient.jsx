"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CareersSubNav from "@/components/Careers/CareersSubNav";
import JobSearch from "@/components/Careers/JobSearch";

// Figma 1487:8460. There is no hero here, so a navy band the height of the
// fixed navbar sits behind it: the navbar keeps its white-on-dark top state
// and turns light on scroll as it does everywhere else. The band pulls up
// over the navbar's own 64/68 spacer, like StickyHero does.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div aria-hidden className="-mt-[64px] h-16 w-full shrink-0 bg-[#00223d] lg:-mt-[68px] lg:h-20" />

            <main className="flex-grow">
                <CareersSubNav />
                <JobSearch />
            </main>

            <Footer />
        </div>
    );
};

export default page;
