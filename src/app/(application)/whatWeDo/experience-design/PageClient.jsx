"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhatWeDo/ReadyToTransform";
import customBg from "@/assets/WhatWeDo/Experience Design/webp/Experience_CTA.webp";
import Hero from "@/components/WhatWeDo/ExperienceDesign/Hero";
import HeroText from "@/components/WhatWeDo/ExperienceDesign/HeroText";
import UIUXDesign from "@/components/WhatWeDo/ExperienceDesign/UIUXDesign";
import UserResearch from "@/components/WhatWeDo/ExperienceDesign/UserResearch";
import DesignSystems from "@/components/WhatWeDo/ExperienceDesign/DesignSystems";
import ProductDesign from "@/components/WhatWeDo/ExperienceDesign/ProductDesign";
import Prototyping from "@/components/WhatWeDo/ExperienceDesign/Prototyping";
import SpecializedDesignDisciplines from "@/components/WhatWeDo/ExperienceDesign/SpecializedDesignDisciplines";
import ServiceDesign from "@/components/WhatWeDo/ExperienceDesign/ServiceDesign";
import EnterpriseUXModernization from "@/components/WhatWeDo/ExperienceDesign/EnterpriseUXModernization";
import DesignProcess from "@/components/WhatWeDo/ExperienceDesign/DesignProcess";
import DesignToolsTechnologies from "@/components/WhatWeDo/ExperienceDesign/DesignToolsTechnologies";
import UserResearchAndDesignSystems from "@/components/WhatWeDo/ExperienceDesign/UserResearchAndDesignSystems";
import DesignPhilosophy from "@/components/WhatWeDo/ExperienceDesign/DesignPhilosophy";
import OurDesignCapabilities from "@/components/WhatWeDo/ExperienceDesign/OurDesignCapabilities";
import DesignOperationsExperienceOptimization from "@/components/WhatWeDo/ExperienceDesign/DesignOperationsExperienceOptimization";
import DesignStrategyValidation from "@/components/WhatWeDo/ExperienceDesign/DesignStrategyValidation";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[680px] sm:h-[200vh]    ">
                <div className="sticky top-0 h-[340px] sm:h-screen z-0">
                    <Hero />
                </div>
                <div className="absolute inset-x-0 top-0 h-[340px] sm:h-screen z-[5]">
                    <HeroText />
                </div>
            </div>
            <div className="relative z-10 -mt-[340px] sm:-mt-[100vh] min-h-[300px] sm:min-h-screen bg-white">
                <UserResearchAndDesignSystems />
                {/* <UIUXDesign /> */}
            </div>
            {/* <ServiceDesign /> */}
            <DesignOperationsExperienceOptimization />
            <EnterpriseUXModernization />
            <DesignStrategyValidation />
            <DesignPhilosophy />
            <SpecializedDesignDisciplines />
            <OurDesignCapabilities />
            <ReadyToTransform
                title="Ready to design an experience people actually enjoy using?"
                description="Talk to our design team about your next product or platform."
                bgImage={customBg}
            />
            <Footer />
            {/* <UserResearch />
            <DesignSystems />
            <ProductDesign />
            <Prototyping />
            <DesignProcess />
            <DesignToolsTechnologies />
            <FutureFocusedInsights /> */}
        </div>
    );
};

export default page;
