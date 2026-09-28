"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutUsHero from "@/components/About-us/AboutUsHero";
import AboutUsHeroText from "@/components/About-us/AboutUsHeroText";
import AboutUsIntro from "@/components/About-us/AboutUsIntro";
import OurPurpose from "@/components/About-us/OurPurpose";
import VisionMissionBand from "@/components/About-us/VisionMissionBand";
import OurApproach from "@/components/About-us/OurApproach";
import WhyAscendus from "@/components/About-us/WhyAscendus";
import Leadership from "@/components/About-us/Leadership";
import CareersCta from "@/components/About-us/CareersCta";
import PartnerCta from "@/components/About-us/PartnerCta";

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

      <AboutUsIntro />
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
