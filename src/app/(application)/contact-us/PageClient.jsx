"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactUsHero from "@/components/Contact-us/ContactUsHero";
import ContactUsHeroText from "@/components/Contact-us/ContactUsHeroText";
import ChooseWhatFitsYourNeed from "@/components/Contact-us/ChooseWhatFitsYourNeed";
import StartANewConversation from "@/components/Contact-us/StartANewConversation";
import IsYourTechnologyLandscapeReady from "@/components/Contact-us/IsYourTechnologyLandscapeReady";
import AlreadyAnAscendusCustomer from "@/components/Contact-us/AlreadyAnAscendusCustomer";
import TellUsWhatYoureLookingToAchieve from "@/components/Contact-us/TellUsWhatYoureLookingToAchieve";
import WhereverYourBusinessTakesYou from "@/components/Contact-us/WhereverYourBusinessTakesYou";
import YourTrustedPartnerForLongTermSuccess from "@/components/Contact-us/YourTrustedPartnerForLongTermSuccess";
import ReadyToTurnYourVisionIntoAction from "@/components/Contact-us/ReadyToTurnYourVisionIntoAction";

// Rise-and-settle: the outgoing panel lifts and fades, the incoming one comes up
// from below into place. The custom cubic-bezier is an ease-out-expo — most of
// the travel happens immediately and it decelerates into rest, which reads as
// deliberate rather than springy.
const PANEL_TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

const PANEL_MOTION = {
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16, transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } },
    initial: { opacity: 0, y: 24 },
    transition: PANEL_TRANSITION,
};

// The hero is a plain full-bleed band here, not the sticky curtain the
// what-we-do / who-we-are pages use — this page's Figma frame shows the content
// starting straight under an 800px hero, with nothing pinned behind it. The
// negative top margin is the shared offset that lets the transparent navbar sit
// over the hero image.
const page = () => {
    // "Choose What Fits Your Need" is a segmented control: exactly one of the two
    // panels below it is mounted at a time, with Prospective selected on load.
    const [segment, setSegment] = useState("prospective");

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] w-full h-[520px] sm:h-[620px] lg:h-[800px]">
                <ContactUsHero />
                <ContactUsHeroText />
            </div>

            <ChooseWhatFitsYourNeed selected={segment} onSelect={setSegment} />

            {/* popLayout takes the outgoing panel out of the flow the moment the
                swap starts, so the incoming panel drives the page height straight
                away instead of the sections below collapsing and re-expanding.
                initial={false} keeps the default panel from animating on first
                paint — it should already be there when the page loads. */}
            <AnimatePresence mode="popLayout" initial={false}>
                {segment === "prospective" ? (
                    <motion.div
                        key="prospective"
                        id="segment-panel-prospective"
                        role="tabpanel"
                        aria-label="For prospective customers"
                        {...PANEL_MOTION}
                    >
                        <StartANewConversation />
                    </motion.div>
                ) : (
                    <motion.div
                        key="existing"
                        id="segment-panel-existing"
                        role="tabpanel"
                        aria-label="For existing customers"
                        {...PANEL_MOTION}
                    >
                        <AlreadyAnAscendusCustomer />
                    </motion.div>
                )}
            </AnimatePresence>

            <IsYourTechnologyLandscapeReady />
            <TellUsWhatYoureLookingToAchieve />
            <WhereverYourBusinessTakesYou />
            <YourTrustedPartnerForLongTermSuccess />
            <ReadyToTurnYourVisionIntoAction />

            <Footer />
        </div>
    );
};

export default page;
