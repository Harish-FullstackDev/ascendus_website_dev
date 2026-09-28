"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SolutionsHero from "@/components/Solution/SolutionsHero";
import SolutionsHeroText from "@/components/Solution/SolutionsHeroText";
import ComprehensiveSAPSolutions from "@/components/Solution/ComprehensiveSAPSolutions";
import MoreThanImplementation from "@/components/Solution/MoreThanImplementation";
import SolutionInsights from "@/components/Solution/SolutionInsights";
import PageCta from "@/components/CommonComponents/PageCta";
import StickyHero from "@/components/CommonComponents/StickyHero";

// The hero is the shared sticky curtain: the image stays put while the page
// content slides up over it.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero background={<SolutionsHero />} overlay={<SolutionsHeroText />}>
                <ComprehensiveSAPSolutions />
                <MoreThanImplementation />
                <SolutionInsights />
                <PageCta
                    title={["Ready to Turn Your", "Vision into Action?"]}
                    description={["Tell us where you are today, where you want to go,", "and what's standing in the way."]}
                    ctaLabel="Talk to an Expert"
                    titleClassName="lg:w-[290px]"
                    descriptionClassName="lg:whitespace-nowrap"
                />
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
