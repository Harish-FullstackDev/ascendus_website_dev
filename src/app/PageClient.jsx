"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageCta from "@/components/CommonComponents/PageCta";
import StickyHero from "@/components/CommonComponents/StickyHero";
import HomeHero from "@/components/HomePage/HomeHero";
import HomeHeroText from "@/components/HomePage/HomeHeroText";
import ComplexBusinessRealities from "@/components/HomePage/ComplexBusinessRealities";
import EndToEndTransformationCapabilities from "@/components/HomePage/EndToEndTransformationCapabilities";
import ModernizeMigrateRunSmarter from "@/components/HomePage/ModernizeMigrateRunSmarter";
import DigitalAndTechnologyTransformation from "@/components/HomePage/DigitalAndTechnologyTransformation";
import IndustryExpertiseForRealWorldImpact from "@/components/HomePage/IndustryExpertiseForRealWorldImpact";

// Figma frame 633:4797. The hero is the shared sticky curtain, exactly one
// viewport tall like Careers; the sections below slide up over it.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero size="screen" background={<HomeHero />} overlay={<HomeHeroText />}>
                <ComplexBusinessRealities />
                <EndToEndTransformationCapabilities />
                <ModernizeMigrateRunSmarter />
                <DigitalAndTechnologyTransformation />
                <IndustryExpertiseForRealWorldImpact />
                {/* No href: "Talk to an Expert" opens the Calendly scheduler, like
                    the other "Talk to an Expert" CTAs. */}
                <PageCta
                    title={["Ready to transform your", "enterprise?"]}
                    description="Talk to our experts and explore how Ascendus can help your organization simplify, modernize and grow."
                    ctaLabel="Talk to an Expert"
                    titleClassName="lg:w-[369px]"
                    descriptionClassName="lg:w-[314px]"
                />
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
