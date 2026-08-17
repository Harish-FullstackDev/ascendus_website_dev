"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactBand from "./ContactBand";
import CareersHero from "./CareersHero";
import CareersHeroText from "./CareersHeroText";

export default function CareersLayout({
    children,
    breadcrumbs,
    showContactBand = false,
    cardBg = "bg-slate-50",
}) {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <CareersHero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <CareersHeroText />
                </div>
            </div>

            {children && (
                <main className="relative z-10 -mt-[340px] sm:-mt-[100vh] flex-grow w-full pb-16 bg-white">
                    <div className={`w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 ${cardBg}`}>
                        {breadcrumbs && (
                            <div className="flex items-center gap-2 py-4 text-sm">
                                {breadcrumbs}
                            </div>
                        )}
                        <div className="py-10">
                            {children}
                        </div>
                    </div>
                </main>
            )}

            {showContactBand && <ContactBand />}
            <Footer />
        </div>
    );
}
