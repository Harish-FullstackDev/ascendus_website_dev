"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import arPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section6_card1_AR_Applications.svg";
import vrPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section6_card2_VR_Experiences.svg";
import trainingPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section6_card3_Virtual_Training.svg";
import visualizationPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section6_card4_Product_Visualization.svg";
import collaborationPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section6_card5_Remote_Collaboration.svg";
import simulationsPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section6_card6_Interactive_Simulations.svg";

const CARDS = [
    { title: "AR Applications", desc: "Overlay digital information onto the physical world to guide technicians, shoppers, and field teams in real time.", image: arPhoto },
    { title: "VR Experiences", desc: "Build fully immersive environments for training, design review, and remote presence without physical travel.", image: vrPhoto },
    { title: "Virtual Training", desc: "Let teams practice high-risk or high-cost procedures safely in a realistic virtual environment.", image: trainingPhoto },
    { title: "Product Visualization", desc: "Let customers and stakeholders explore products in 3D before a single physical unit is made.", image: visualizationPhoto },
    { title: "Remote Collaboration", desc: "Bring distributed teams into a shared virtual workspace to review work as if they were in the same room.", image: collaborationPhoto },
    { title: "Interactive Simulations", desc: "Turn complex systems into hands-on simulations that build understanding faster than documentation ever could.", image: simulationsPhoto },
];

export default function ExtendedReality() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="text-black text-2xl font-semibold">Extended Reality (AR/VR)</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Blend digital and physical experiences to train faster, collaborate remotely, and visualize what
                    hasn&apos;t been built yet.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1285px] mx-auto">
                {CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
                        className="border border-[#e2e2e2] flex flex-col px-6 pt-8 pb-6"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <p className="text-black text-xl font-semibold">{card.title}</p>
                            <span className="flex items-center justify-center size-9 shrink-0 rounded-full border border-[#2d8ec5] text-[#2d8ec5] text-base">
                                ↗
                            </span>
                        </div>
                        <p className="text-[#6c6c6c] text-sm font-light mt-3">{card.desc}</p>
                        <div className="relative w-full h-[185px] mt-8">
                            <Image src={card.image} alt={card.title} fill className="object-cover" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
