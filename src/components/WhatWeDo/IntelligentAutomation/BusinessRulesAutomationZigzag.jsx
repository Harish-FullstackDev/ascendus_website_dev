"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import decisionAutomationPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section8_Bg_image1.svg";
import workflowEnginesPhoto from "@/assets/WhatWeDo/Intelligent Automation/Section8_Bg_image2.svg";
import Arrow from "@/assets/WhatWeDo/Intelligent Automation/icons/Arrow.svg";

const ITEMS = [
    {
        eyebrow: "Business Rules Management",
        title: "Decision Automation",
        desc: "Automate business decisions by implementing configurable rules that ensure consistency, compliance, and operational efficiency.",
        image: decisionAutomationPhoto,
    },
    {
        eyebrow: "Workflow Decision Engines",
        title: "Reduced operational risk",
        desc: "Embed decisioning directly into workflows so the right action happens automatically, every time.",
        image: workflowEnginesPhoto,
    },
];

export default function BusinessRulesAutomationZigzag() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex flex-col gap-16 sm:gap-[70px] max-w-[1225px] mx-auto">
            {ITEMS.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex flex-col sm:block"
                >
                    <div className="relative w-full sm:w-[701px] sm:ml-auto h-[220px] sm:h-[468px]">
                        <Image src={item.image} alt="" fill className="object-cover" />
                    </div>
                    <div className="relative sm:absolute sm:left-0 sm:top-[78px] bg-[#f3f3f3] w-full sm:w-[918px] sm:h-[313px] -mt-4 sm:mt-0 flex flex-col justify-center gap-6 px-6 sm:pl-[34px] sm:pr-[60px] py-8 sm:py-0">
                        <p className="text-black text-xl sm:text-2xl font-normal">{item.eyebrow}</p>
                        <div className="flex flex-col gap-3">
                            <p className="text-black text-xl sm:text-2xl font-normal">{item.title}</p>
                            <p className="text-[#515151] text-base sm:text-lg font-light max-w-[452px]">{item.desc}</p>
                        </div>
                        <span className="hidden sm:inline-block text-black/40 text-2xl mt-2 pl-[670px]">
                             <Image src={Arrow} alt="" width={130} height={130} />
                        </span>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
