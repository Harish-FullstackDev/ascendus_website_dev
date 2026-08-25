"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import automationMonitoringIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/Section_AutomationMonitoring.svg";
import exceptionManagementIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/Section_ExceptionManagement.svg";
import automationGovernanceIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/Section_AutomationGovernance.svg";
import continuousOptimizationIcon from "@/assets/WhatWeDo/Intelligent Automation/icons/Section_ContinuousOptimization.svg";

const ITEMS = [
    {
        icon: automationMonitoringIcon,
        title: "Automation Monitoring",
        desc: "We monitor automated processes to identify failures, delays, and performance issues.",
    },
    {
        icon: exceptionManagementIcon,
        title: "Exception Management",
        desc: "We design automated workflows to route exceptions to the appropriate teams.",
    },
    {
        icon: automationGovernanceIcon,
        title: "Automation Governance",
        desc: "We establish standards for ownership, access, monitoring, and lifecycle management.",
    },
    {
        icon: continuousOptimizationIcon,
        title: "Continuous Optimization",
        desc: "We review automation performance and refine processes as business requirements change.",
    },
];

export default function AutomationOperationsControl() {
    return (
        <section className="w-full pt-10 sm:pt-8 pb-10 sm:pb-16 px-6 sm:px-[64px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 w-full lg:flex-1"
            >
                <h2 className="text-[#2E3033] text-[28px] font-medium">Automation Operations &amp; Control</h2>
                <p className="text-[#55595E] text-lg font-light">
                    Capabilities that keep enterprise automation reliable, measurable, and manageable at scale.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 w-full lg:flex-1">
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                        className="flex flex-col gap-6"
                    >
                        <Image src={item.icon} alt="" width={48} height={48} />
                        <p className="text-[#2E3033] text-xl sm:text-2xl font-light">{item.title}</p>
                        <p className="text-[#55595E] text-base sm:text-lg font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

