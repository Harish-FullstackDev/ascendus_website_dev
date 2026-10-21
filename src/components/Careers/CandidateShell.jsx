"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CareersSubNav from "./CareersSubNav";

// Shared frame of the candidate pages (Search Jobs, My Application, Saved
// Jobs): a navy band behind the fixed navbar, pulled up over its 64/68
// spacer like StickyHero does, then the candidate tabs.
export default function CandidateShell({ children }) {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div aria-hidden className="-mt-[64px] h-16 w-full shrink-0 bg-[#00223d] lg:-mt-[68px] lg:h-20" />

            <main className="flex-grow">
                <CareersSubNav />
                {children}
            </main>

            <Footer />
        </div>
    );
}
