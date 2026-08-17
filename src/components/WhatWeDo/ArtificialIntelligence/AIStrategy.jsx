"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import workFasterIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/work-faster.svg";
import collaborateBetterIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/collaborate-better.svg";
import customerEngagementIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/customer-engagement.svg";
import unlockKnowledgeIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/unlock-knowledge.svg";
import accelerateInnovationIcon from "@/assets/WhatWeDo/Artificial Intelligence/icons/accelerate-innovation.svg";

const ITEMS = [
    {
        icon: workFasterIcon,
        title: "Work Faster",
        desc: "Reduce the time spent creating and managing business content.",
    },
    {
        icon: collaborateBetterIcon,
        title: "Collaborate Better",
        desc: "Break down silos so teams share context and work from a single source of truth.",
    },
    {
        icon: customerEngagementIcon,
        title: "Improve Customer Engagement",
        desc: "Deliver faster, personalized, and more accurate responses to every customer.",
    },
    {
        icon: unlockKnowledgeIcon,
        title: "Unlock Business Knowledge",
        desc: "Make enterprise information easier to access and use.",
    },
    {
        icon: accelerateInnovationIcon,
        title: "Accelerate Innovation",
        desc: "Empower teams to explore new ideas and solve problems more efficiently.",
    },
];

export default function AIStrategy() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[60px]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[35px] items-start justify-between max-w-[1180px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-3 w-full lg:w-[471px] shrink-0"
                >
                    <p className="text-black text-2xl sm:text-4xl">AI Strategy</p>
                    <div className="text-[#515151] text-lg sm:text-2xl leading-snug">
                        <p>Transformation shouldn&apos;t end at Go-Live.</p>
                        <p>The real impact begins afterward.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="flex flex-col w-full"
                >
                    {ITEMS.map((item, index) => (
                        <div key={item.title} className="flex items-stretch gap-5 sm:gap-9">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="flex items-center justify-center size-[52px] sm:size-[73px] bg-white border border-[#7f7f7f]">
                                    <Image src={item.icon} alt="" width={28} height={28} className="size-6 sm:size-8 object-contain" />
                                </div>
                                {index !== ITEMS.length - 1 && <div className="w-px flex-1 min-h-[24px] bg-[#7f7f7f]" />}
                            </div>
                            <div className="flex flex-col gap-2 pb-8 sm:pb-[38px]">
                                <p className="text-black text-lg sm:text-2xl">{item.title}</p>
                                <p className="text-[#515151] text-sm sm:text-lg">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
