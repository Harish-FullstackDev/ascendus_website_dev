"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IndustriesHero from "@/components/Industries/IndustriesHero";
import IndustriesHeroText from "@/components/Industries/IndustriesHeroText";
import IndustriesHeroStats from "@/components/Industries/IndustriesHeroStats";
import ACollaborativeEcosystem from "@/components/Industries/ACollaborativeEcosystem";
import IndustryExpertiseThatDeliversOutcomes from "@/components/Industries/IndustryExpertiseThatDeliversOutcomes";
import IndustryChallengesRealSolution from "@/components/Industries/IndustryChallengesRealSolution";
import PageCta from "@/components/CommonComponents/PageCta";
import StickyHero from "@/components/CommonComponents/StickyHero";

// The hero is the shared sticky curtain: the image stays put while the page
// content slides up over it. The stats row scrolls away with the hero copy.
const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero
                size="tall"
                background={<IndustriesHero />}
                overlay={
                    <>
                        <IndustriesHeroText />
                        <IndustriesHeroStats />
                    </>
                }
            >
                <ACollaborativeEcosystem />
                <IndustryExpertiseThatDeliversOutcomes />
                <IndustryChallengesRealSolution />
                <PageCta
                    title={["Your Industry.", "Our Expertise."]}
                    description="Let's explore how we can help you solve your industry's unique challenges and create new opportunities for growth."
                    ctaLabel="Talk to an Expert"
                    titleClassName="lg:w-[211.5px]"
                    descriptionClassName="lg:w-[376px]"
                />
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
