"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import projectBasedIcon from "@/assets/HomePage/EngagementModels/icon-project.svg";
import managedServicesIcon from "@/assets/HomePage/EngagementModels/icon-team.svg";
import teamIcon from "@/assets/HomePage/EngagementModels/icon-time-material.svg";
import timeMaterialIcon from "@/assets/HomePage/EngagementModels/time.svg";

const MODELS = [
    {
        icon: projectBasedIcon,
        title: "Project-Based Implementation",
        desc: "Defined scope and timeline for deploying SAP or a capability.",
    },
    {
        icon: managedServicesIcon,
        title: "Managed Services & AMS",
        desc: "Ongoing support and continuous improvement after go-live.",
    },
    {
        icon: teamIcon,
        title: "Advisory & Strategic Partnership",
        desc: "An experienced second opinion while you shape your roadmap.",
    },
    {
        icon: timeMaterialIcon,
        title: "Time & Material Engagement",
        desc: "Flexible, on-demand SAP expertise, scaled to what the work needs.",
    },
];

export default function EngagementModels() {
    return (
        <section className="w-full bg-[#f3f6f9] pt-10 pb-10 sm:pt-16 sm:pb-16 px-6 sm:px-[64px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-5 max-w-[818px] mx-auto text-center mb-10 sm:mb-14"
            >
                <h2 className="text-[28px] font-medium">
                    <span className="text-[#10161d]">An Engagement Model Built Around </span>
                    <span className="text-[#0061AF]">Flexibility</span>
                </h2>
                <p className="text-[#4a5568] text-lg font-light">
                    Choose the engagement model that fits your needs, from focused projects to ongoing support and
                    strategic guidance.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full "
            >
                {MODELS.map((model) => (
                    <div key={model.title} className="flex flex-col items-center gap-6 justify-between text-center">
                        <div className="relative size-12 shrink-0">
                            <Image src={model.icon} alt="" fill className="object-contain" />
                        </div>
                        <p className="text-[#10161d] text-xl font-normal">{model.title}</p>
                        <p className="text-[#4a5568] text-base font-extralight">{model.desc}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
