"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import strategicIcon from "@/assets/Partnership/icons/ecosystem-strategic.svg";
import technologyIcon from "@/assets/Partnership/icons/ecosystem-technology-on-dark.svg";
import allianceIcon from "@/assets/Partnership/icons/ecosystem-alliance.svg";
import sapLogo from "@/assets/Partnership/icons/sap.svg";

import handsTogetherPhoto from "@/assets/Partnership/Ecosystem_Hands_Together.jpg";
import teamHighFivePhoto from "@/assets/Partnership/Ecosystem_Team_High_Five.jpg";
import deskCollaborationPhoto from "@/assets/Partnership/Ecosystem_Desk_Collaboration.jpg";
import handshakePhoto from "@/assets/Partnership/Ecosystem_Handshake.jpg";

// Figma (232:344) lays the right-hand block out as two rows of four 213x230
// tiles that alternate photo / copy like a checkerboard: photo, copy, photo,
// copy on the first row and copy, photo, copy, photo on the second. The order
// below is read left-to-right, row by row, so the array is the layout.
const TILES = [
    { alt: "Colleagues joining hands over a desk", photo: handsTogetherPhoto },
    {
        description: "Building long-term relationships for mutual growth and success.",
        icon: strategicIcon,
        title: "Strategic Partnership",
        tone: "light",
    },
    { alt: "Two colleagues high-fiving beside a whiteboard", photo: teamHighFivePhoto },
    {
        description: "Leveraging SAP's power to deliver transformative business solutions.",
        logo: sapLogo,
        title: "SAP Partnership",
        tone: "navy",
    },
    {
        description: "Building long-term relationships for mutual growth and success.",
        icon: technologyIcon,
        title: "Technology Partnership",
        tone: "green",
    },
    { alt: "Laptop and notebook on a home-office desk", photo: deskCollaborationPhoto },
    {
        description: "Leveraging SAP's power to deliver transformative business solutions.",
        icon: allianceIcon,
        title: "Alliance & Ecosystem",
        tone: "light",
    },
    { alt: "Two people shaking hands", photo: handshakePhoto },
];

// Figma colours the four copy tiles three different ways; the border and the
// text colours all follow from which one a tile uses.
const TONES = {
    green: {
        body: "text-white",
        card: "border-[#e2e8f0] bg-[#00623d]",
        title: "text-white",
    },
    light: {
        body: "text-[#64748b]",
        card: "border-[#c9d0d8] bg-white",
        title: "text-[#00223d]",
    },
    navy: {
        body: "text-white",
        card: "border-[#e2e8f0] bg-[#00223d]",
        title: "text-white",
    },
};

// First content section under the hero. The hero is a full-bleed image band, so
// this side keeps the full 64px on top; "Let's Build What's Next" below changes
// the background to #f4f7fb, so the bottom keeps its full 64px too.
export default function ACollaborativeEcosystem() {
    return (
        <section id="our-ecosystem" className="w-full scroll-mt-24 bg-white px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16">
            {/* Figma runs a 371px intro column (347px of copy plus 24px of
                trailing space) beside an 896px tile block, both hung from the top
                of the section. The intro keeps its measure and the tiles take the
                remaining width, so the pair reflows instead of scaling. */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-3 w-full lg:w-[371px] lg:shrink-0 lg:pr-[24px]"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.7px] text-[#0061af] leading-4">
                        Our Ecosystem
                    </p>
                    <h2 className="text-2xl sm:text-[32px] font-semibold text-[#10161d] leading-[1.2]">
                        A Collaborative Ecosystem for Greater Possibilities
                    </h2>
                    <p className="pt-0.5 text-base font-normal text-[#415773] leading-[1.5]">
                        Our ecosystem includes strategic partners, technology leaders, and industry alliances that help
                        us deliver innovative solutions, expand capabilities and create greater value for our clients.
                    </p>
                </motion.div>

                {/* Two rows of four, 12px between tiles and 32px between rows
                    (Figma 232:345 / 232:369). Four across only from lg, where the
                    tiles still clear their 213px design width; below that they
                    halve so a photo always sits beside the copy it belongs with.
                    Figma fixes the tiles at 230px, but a half-width column on a
                    phone cannot hold the same copy in that height — so it is a
                    floor rather than a fixed height, and the photo beside a
                    taller card stretches to match it. */}
                <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-3 lg:max-w-[896px]">
                    {TILES.map((tile) =>
                        tile.photo ? (
                            <motion.div
                                key={tile.alt}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative min-h-[180px] sm:min-h-[230px] overflow-hidden rounded-[8px] border border-[#e2e8f0]"
                            >
                                <Image
                                    src={tile.photo}
                                    alt={tile.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 50vw, 220px"
                                />
                                {/* Figma darkens every photo tile by 20% so the
                                    copy tiles beside them stay dominant. */}
                                <div className="absolute inset-0 bg-black/20" />
                            </motion.div>
                        ) : (
                            <motion.article
                                key={tile.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className={
                                    "flex min-h-[180px] sm:min-h-[230px] flex-col justify-between gap-2 rounded-[8px] border p-[17px] transition-shadow duration-300 hover:shadow-[0px_6px_18px_rgba(10,58,82,0.12)] " +
                                    TONES[tile.tone].card
                                }
                            >
                                {/* Figma draws the icon tile at 40px with no fill
                                    of its own on this section's cards — the card
                                    background shows through. */}
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px]">
                                    {tile.logo ? (
                                        <Image src={tile.logo} alt="" className="h-4 w-8" />
                                    ) : (
                                        <Image src={tile.icon} alt="" className="size-8" />
                                    )}
                                </span>

                                <p className={"pt-2 text-lg font-semibold leading-[1.2] " + TONES[tile.tone].title}>
                                    {tile.title}
                                </p>
                                <p className={"text-sm font-normal leading-[1.4] " + TONES[tile.tone].body}>
                                    {tile.description}
                                </p>
                            </motion.article>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
