"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import googleCloudLogo from "@/assets/WhatWeDo/Cloud and Infrastructure/CloudPlatformsServices/GoogleCloudLogo.png";
import awsLogo from "@/assets/WhatWeDo/Cloud and Infrastructure/CloudPlatformsServices/AwsLogo.png";
import azureLogo from "@/assets/WhatWeDo/Cloud and Infrastructure/CloudPlatformsServices/AzureLogo.png";

// NOTE: Only the AWS copy below comes from the Figma design (node 2161:373).
// Google Cloud / Azure descriptions are placeholders (AWS copy with the
// provider name swapped) until the design team provides the real content —
// swap CATEGORIES text per tab once that's available.
const TABS = [
    {
        name: "Google Cloud",
        logo: googleCloudLogo,
        intro:
            "Build and scale enterprise workloads with flexible and reliable Google Cloud services.",
        categories: [
            {
                label: "Compute & Storage",
                desc: "Scalable compute, storage, and infrastructure services for enterprise applications and workloads.",
            },
            {
                label: "Databases",
                desc: "Managed relational, NoSQL, and distributed database solutions for reliable, high-performance applications.",
            },
            {
                label: "Networking",
                desc: "Secure, scalable networking and connectivity across cloud environments, applications, and enterprise systems.",
            },
            {
                label: "Security",
                desc: "Identity, access management, encryption, threat protection, and monitoring to secure cloud workloads.",
            },
            {
                label: "Data & AI",
                desc: "Advanced data analytics, machine learning, and AI capabilities for intelligent enterprise applications.",
            },
        ],
    },

    {
        name: "AWS",
        logo: awsLogo,
        intro:
            "Build and scale enterprise workloads with flexible and reliable AWS cloud services.",
        categories: [
            {
                label: "Compute & Storage",
                desc: "Scalable infrastructure for applications, workloads, and enterprise data with flexible compute and storage services.",
            },
            {
                label: "Databases",
                desc: "Managed database solutions designed for reliable, scalable, and high-performance enterprise applications.",
            },
            {
                label: "Networking",
                desc: "Secure connectivity, traffic management, and networking services across cloud environments and enterprise systems.",
            },
            {
                label: "Security",
                desc: "Identity, access, encryption, threat detection, and monitoring capabilities to protect AWS workloads.",
            },
            {
                label: "Data & AI",
                desc: "Data analytics, machine learning, and AI services that help enterprises turn data into actionable insights.",
            },
        ],
    },

    {
        name: "Azure",
        logo: azureLogo,
        intro:
            "Modernize enterprise infrastructure and applications with Microsoft Azure's cloud capabilities.",
        categories: [
            {
                label: "Cloud Infrastructure",
                desc: "Flexible compute, storage, networking, and infrastructure services for enterprise workloads.",
            },
            {
                label: "Application Modernization",
                desc: "Modernize existing applications and build scalable, cloud-ready solutions using Azure services.",
            },
            {
                label: "Data & Analytics",
                desc: "Enterprise data platforms, analytics, reporting, and data services for better business insights.",
            },
            {
                label: "Security & Identity",
                desc: "Integrated identity, access management, security, compliance, and threat protection for cloud environments.",
            },
            {
                label: "Hybrid Cloud",
                desc: "Connect Azure cloud environments with existing on-premise infrastructure and enterprise systems.",
            },
        ],
    },
];


export default function CloudPlatformsServices() {
    const [active, setActive] = useState(0);
    const activeTab = TABS[active];

    return (
        <section className="w-full bg-white py-10 sm:py-20 px-6 sm:px-[50px]">
            <div className="max-w-[1300px] mx-auto flex flex-col items-center gap-10 sm:gap-16 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3 text-center"
                >
                    <h2 className="text-black text-2xl font-medium">Cloud Platforms &amp; Services</h2>
                    <p className="text-[#55595E] text-lg font-light max-w-[700px]">
                        Cloud solutions built around the right platform, workload, security requirements, and
                        business objectives.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-10 sm:gap-14 lg:gap-[60px] w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-[95px] w-full">
                        {TABS.map((tab, index) => {
                            const isActive = index === active;
                            return (
                                <button
                                    key={tab.name}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActive(index)}
                                    className={`bg-white border h-[93px] flex items-center justify-center transition-all duration-300 ${isActive
                                        ? "border-black shadow-[2px_4px_20px_0px_rgba(0,0,0,0.25)]"
                                        : "border-black/40 hover:border-black/70"
                                        }`}
                                >
                                    <Image
                                        src={tab.logo}
                                        alt={`${tab.name} logo`}
                                        className="max-h-[60px] sm:max-h-[70px] lg:max-h-[78px] w-auto max-w-[75%] object-contain"
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="flex flex-col gap-4 sm:gap-5"
                        >
                            <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium">{activeTab.intro}</p>
                            {activeTab.categories.map((cat) => (
                                <p key={cat.label} className="text-lg sm:text-xl lg:text-2xl font-light">
                                    <span className="font-medium text-black">{cat.label}:</span>{" "}
                                    <span className="text-[#55595E]">{cat.desc}</span>
                                </p>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

