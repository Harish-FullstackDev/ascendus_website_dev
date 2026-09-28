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
import PageCta from "@/components/CommonComponents/PageCta";

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
      <PageCta
        title={["Partner With Us", "for a Stronger Tomorrow."]}
        description={["Let's connect and explore how we can help you", "transform, innovate and grow."]}
        ctaLabel="CONTACT US"
        href="/contact-us/"
        titleClassName="lg:w-[445.5px]"
        descriptionClassName="lg:whitespace-nowrap"
      />

      <Footer />
    </div>
  );
};

export default page;
