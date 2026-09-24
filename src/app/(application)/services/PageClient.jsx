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
import { SERVICE_CATEGORIES } from "@/components/Services/servicesData";

// The hero is a plain full-bleed band, not the sticky curtain the what-we-do
// pages use. The negative top margin is the shared offset that lets the
// transparent navbar sit over the hero image.
//
// The active category is owned here rather than inside either section because
// the three cards in section 2 select which rail section 3 renders.
const page = () => {
    const [activeCategoryId, setActiveCategoryId] = useState(SERVICE_CATEGORIES[0].id);

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] w-full h-[520px] sm:h-[620px] lg:h-[800px]">
                <ServicesHero />
                <ServicesHeroText />
            </div>

            <ThreeWaysWeCreateValue
                activeCategoryId={activeCategoryId}
                onSelectCategory={setActiveCategoryId}
            />
            <SAPTransformation activeCategoryId={activeCategoryId} />
            <MoreThanServices />
            <MoreThanExpertise />
            <AboutUsHighlights />
            <IdeasThatInspire />

            <Footer />
        </div>
    );
};

export default page;
