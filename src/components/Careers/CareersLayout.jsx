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

            {/* Shorter hero than the main /careers page and every other full-length hero
                on the site — sized to match the Contact Us / Book a Call hero height
                (75vh) instead. Same sticky + curtain-reveal parallax mechanism as
                everywhere else, just scaled to a 75vh sticky panel: wrapper is 2x that
                (150vh) so the sticky panel holds for one panel-height of scroll before
                the content curtain (-mt-[75vh]) catches up and covers it. */}
            <div className="relative -mt-[64px] lg:-mt-[68px] h-[150vh]">
                <div className="sticky top-0 h-[75vh] z-0">
                    <CareersHero />
                </div>

                <div className="absolute inset-x-0 top-0 h-[75vh] z-[5]">
                    <CareersHeroText />
                </div>
            </div>

            {children && (
                <main className="relative z-10 -mt-[75vh] flex-grow w-full pb-16 bg-white">
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
