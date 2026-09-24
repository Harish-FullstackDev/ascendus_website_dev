"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import sapIcon from "@/assets/Contact-us/icons/sap-landscape-48.svg";
import erpIcon from "@/assets/Contact-us/icons/erp-transformation-48.svg";
import applicationsIcon from "@/assets/Contact-us/icons/technology-applications-48.svg";
import cybersecurityIcon from "@/assets/Contact-us/icons/cybersecurity-48.svg";
import businessProcessesIcon from "@/assets/Contact-us/icons/business-processes-48.svg";
import arrowButtonIcon from "@/assets/Contact-us/icons/arrow-button-16.svg";

// Figma sets each label on its own measured lines rather than letting the
// 154px card wrap it (278:5447, 278:5453, 278:5459, 278:5471), so the break
// points are part of the data.
const CATEGORIES = [
    { icon: sapIcon, lines: ["SAP", "Landscape"] },
    { icon: erpIcon, lines: ["ERP /", "Transformation"] },
    { icon: applicationsIcon, lines: ["Technology &", "Applications"] },
    { icon: cybersecurityIcon, lines: ["Cybersecurity"] },
    { icon: businessProcessesIcon, lines: ["Business", "Processes"] },
];

// A full-bleed band between two light sections, so it keeps the full 48px on
// both edges and neither neighbour halves into it. The revised design inverts
// it onto surface/inverse navy, and the CTA is now the solid primary-blue
// button used by the enquiry form rather than a light pill.
export default function IsYourTechnologyLandscapeReady() {
    return (
        <section
            id="is-your-technology-landscape-ready"
            className="w-full scroll-mt-24 bg-[#00223d] px-6 sm:px-[64px] py-10 sm:py-[48px]"
        >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[48px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:w-[448px] lg:shrink-0"
                >
                    <p className="flex h-8 items-center text-[14px] font-semibold uppercase tracking-[0.7px] text-[#68c2f2] leading-4">
                        Solution
                    </p>
                    <h2 className="mt-3 text-[26px] sm:text-[32px] font-medium text-white leading-[1.2]">
                        Is Your Technology Landscape Ready for What&apos;s Next?
                    </h2>
                    <p className="mt-3 max-w-[448px] text-base font-normal text-white leading-[1.5]">
                        Gain a clearer view of your current environment, identify gaps and explore opportunities for
                        modernization and transformation.
                    </p>

                    <Link
                        href="#tell-us-what-youre-looking-to-achieve"
                        className="mt-6 inline-flex h-12 items-center gap-2.5 rounded-[8px] bg-[#0061af] px-[28px] text-base font-normal text-white transition-colors duration-300 hover:bg-[#004e8c]"
                    >
                        Request an Assessment
                        <Image src={arrowButtonIcon} alt="" className="w-4 h-4" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
                >
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.lines.join(" ")}
                            className="flex h-[140px] min-h-[140px] flex-col items-center justify-between rounded-[16px] border border-[#d0d0d0] bg-white p-[13px]"
                        >
                            <Image src={category.icon} alt="" className="w-12 h-12" />
                            <p className="text-center text-lg font-medium text-[#1e293b] leading-[1.2]">
                                {category.lines.map((line) => (
                                    <span key={line} className="block">
                                        {line}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
