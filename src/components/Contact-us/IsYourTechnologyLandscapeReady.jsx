"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import sapIcon from "@/assets/Contact-us/icons/sap-landscape.svg";
import erpIcon from "@/assets/Contact-us/icons/erp-transformation.svg";
import applicationsIcon from "@/assets/Contact-us/icons/technology-applications.svg";
import cybersecurityIcon from "@/assets/Contact-us/icons/cybersecurity.svg";
import businessProcessesIcon from "@/assets/Contact-us/icons/business-processes.svg";

const CATEGORIES = [
    { icon: sapIcon, iconClass: "w-8 h-8", label: "SAP Landscape" },
    { icon: erpIcon, iconClass: "w-6 h-6", label: "ERP / Transformation" },
    { icon: applicationsIcon, iconClass: "w-6 h-6", label: "Technology & Applications" },
    { icon: cybersecurityIcon, iconClass: "w-6 h-6", label: "Cybersecurity" },
    { icon: businessProcessesIcon, iconClass: "w-6 h-6", label: "Business Processes" },
];

// A full-bleed band between two white sections, so it keeps the full 64px on
// both edges and neither neighbour halves into it. The revised design inverts
// it: the band is now primary/900 navy with the type reversed out of it, and
// the CTA flips to a light fill with dark accent text.
export default function IsYourTechnologyLandscapeReady() {
    return (
        <section
            id="is-your-technology-landscape-ready"
            className="w-full scroll-mt-24 bg-[#0a3a52] px-6 sm:px-[64px] pt-10 pb-10 sm:pt-16 sm:pb-16"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-5"
                >
                    <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.6px] text-[#2d8ec5] leading-4">
                        Solution Assessment
                    </p>
                    <h2 className="mt-4 text-2xl sm:text-[32px] font-semibold text-[#eaf3fa] leading-[1.4]">
                        Is Your Technology Landscape Ready for What&apos;s Next?
                    </h2>
                    <p className="mt-4 max-w-[478px] text-base sm:text-lg font-normal text-[#d3dae2] leading-5">
                        Gain a clearer view of your current environment, identify gaps and explore opportunities for
                        modernization and transformation.
                    </p>

                    <Link
                        href="#tell-us-what-youre-looking-to-achieve"
                        className="mt-6 inline-flex items-center rounded-[10px] bg-[#d3dae2] px-5 py-3 text-sm sm:text-base font-semibold text-[#1c5f85] transition-colors duration-300 hover:bg-white"
                    >
                        Request an Assessment
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
                >
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.label}
                            className="flex h-[140px] flex-col items-center justify-center gap-4 rounded-[16px] border border-[#d0d0d0] bg-white px-[17px] py-[17px]"
                        >
                            <Image src={category.icon} alt="" className={category.iconClass} />
                            <p className="text-center text-sm sm:text-base font-semibold text-[#1e293b] leading-[16.5px]">
                                {category.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
