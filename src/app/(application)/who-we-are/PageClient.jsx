"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import AboutUsHeroText from "@/components/AboutUs/AboutUsHeroText";
import WhoWeAreIntro from "@/components/AboutUs/WhoWeAreIntro";
import OurPurpose from "@/components/AboutUs/OurPurpose";
import VisionMissionBand from "@/components/AboutUs/VisionMissionBand";
import OurApproach from "@/components/AboutUs/OurApproach";
import WhyAscendus from "@/components/AboutUs/WhyAscendus";
import Leadership from "@/components/AboutUs/Leadership";
import CareersCta from "@/components/AboutUs/CareersCta";
import PartnerCta from "@/components/AboutUs/PartnerCta";

// The hero is a plain full-bleed band, the same pattern as /services/ and
// /solutions/. The negative top margin lets the transparent navbar sit over it.
const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      <div className="relative -mt-[64px] lg:-mt-[68px] w-full h-[520px] sm:h-[620px] lg:h-[800px]">
        <AboutUsHero />
        <AboutUsHeroText />
      </div>

      <WhoWeAreIntro />
      <OurPurpose />
      <VisionMissionBand />
      <OurApproach />
      <WhyAscendus />
      <Leadership />
      <CareersCta />
      <PartnerCta />

      <Footer />
    </div>
  );
};

export default page;
