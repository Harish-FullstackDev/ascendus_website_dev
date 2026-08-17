"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import lockIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/6462990f476598b6fd0c9d62_Lock-2.svg.svg";
import searchIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/6462990f476598b6fd0c9d72_Search.svg.svg";
import codeIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/6462990f476598b6fd0c9d61_Code.svg.svg";
import offsiteIcon from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/6462990f476598b6fd0c9d79_Offsite.svg.svg";
import frameIcon1 from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/6462990f476598b6fd0c9d71_Frame.svg.svg";
import frameIcon2 from "@/assets/WhatWeDo/Innovation & Emerging Technologies/icons/6462990f476598b6fd0c9d5f_Frame.svg.svg";

const ITEMS = [
    { icon: lockIcon, title: "Quantum Risk Analysis", desc: "Assess where quantum computing could break today's encryption and prioritize the systems most exposed." },
    { icon: searchIcon, title: "Quantum Assessment", desc: "Evaluate your current cryptographic posture and infrastructure readiness for the post-quantum era." },
    { icon: codeIcon, title: "Use Case Identification", desc: "Pinpoint the business problems where quantum computing offers a genuine, near-term advantage." },
    { icon: offsiteIcon, title: "Cryptography Readiness", desc: "Migrate toward quantum-resistant cryptographic standards without disrupting existing systems." },
    { icon: frameIcon1, title: "Innovation Workshops", desc: "Run hands-on sessions that build internal understanding of quantum computing's opportunities and limits." },
    { icon: frameIcon2, title: "Roadmap & Investment Planning", desc: "Turn quantum readiness into a phased roadmap with realistic timelines and investment milestones." },
];

export default function QuantumReadiness() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] mx-auto text-center mb-10 sm:mb-[45px]"
            >
                <h2 className="text-black text-2xl font-medium">Quantum Readiness</h2>
                <p className="text-black text-lg font-light">Turn Data into Intelligent Decisions</p>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Assess your current technology landscape to identify opportunities for modernization,
                    optimization, and innovation.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 sm:gap-y-14 max-w-[1135px] mx-auto">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                        className="flex flex-col gap-4"
                    >
                        <Image src={item.icon} alt="" width={37} height={37} />
                        <p className="text-black text-lg font-medium">{item.title}</p>
                        <p className="text-[#6c6c6c] text-sm font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
