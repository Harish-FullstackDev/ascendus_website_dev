"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CareersSubNav from "./CareersSubNav";

// Shared frame of the candidate pages (Search Jobs, My Application, Saved
// Jobs): the navbar (light from the top on careers routes, see
// Constants/Routes/routes.js), then the candidate tabs.
export default function CandidateShell({ children }) {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* The desktop navbar is 80 tall but its own spacer is 68, so the
                tabs would tuck 12px under it. */}
            <main className="flex-grow lg:pt-3">
                <CareersSubNav />
                {children}
            </main>

            <Footer />
        </div>
    );
}
