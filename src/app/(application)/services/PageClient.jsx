"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import ServicesHeroText from "@/components/Services/ServicesHeroText";
import ThreeWaysWeCreateValue from "@/components/Services/ThreeWaysWeCreateValue";
import SAPTransformation from "@/components/Services/SAPTransformation";
import MoreThanServices from "@/components/Services/MoreThanServices";
import MoreThanExpertise from "@/components/Services/MoreThanExpertise";
import AboutUsHighlights from "@/components/Services/AboutUsHighlights";
import IdeasThatInspire from "@/components/Services/IdeasThatInspire";
import PageCta from "@/components/CommonComponents/PageCta";
import StickyHero from "@/components/CommonComponents/StickyHero";
import { SERVICE_CATEGORIES } from "@/components/Services/servicesData";

// The hero is the shared sticky curtain: the image stays put while the page
// content slides up over it.
//
// The active category is owned here rather than inside either section because
// the three cards in section 2 select which rail section 3 renders.
const page = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(SERVICE_CATEGORIES[0].id);

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <StickyHero background={<ServicesHero />} overlay={<ServicesHeroText />}>
                <ThreeWaysWeCreateValue
                    activeCategoryId={activeCategoryId}
                    onSelectCategory={setActiveCategoryId}
                />
                <SAPTransformation activeCategoryId={activeCategoryId} />
                <MoreThanServices />
                <MoreThanExpertise />
                <AboutUsHighlights />
                <IdeasThatInspire />
                <PageCta
                    title={["Partner With Us", "for a Stronger Tomorrow."]}
                    description={["Let's connect and explore how we can help you", "transform, innovate and grow."]}
                    ctaLabel="CONTACT US"
                    href="/contact-us/"
                    titleClassName="lg:w-[445.5px]"
                    descriptionClassName="lg:whitespace-nowrap"
                />
            </StickyHero>

            <Footer />
        </div>
    );
};

export default page;
