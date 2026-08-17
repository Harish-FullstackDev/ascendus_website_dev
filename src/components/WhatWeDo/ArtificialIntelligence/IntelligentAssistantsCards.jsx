"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import taskAutomationPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section5_TaskAutomation.jpg";
import workflowOrchestrationPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section5_WorkflowOrchestration.jpg";
import multiAgentPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section5_MultiAgentCollaboration.jpg";
import knowledgeAgentsPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section5_EnterpriseKnowledgeAgents.jpg";
import supportAgentsPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section5_CustomerSupportAgents.jpg";
import processAgentsPhoto from "@/assets/WhatWeDo/Artificial Intelligence/Section5_ProcessAutomationAgents.jpg";

const TABS = [
    {
        title: "Task Automation",
        image: taskAutomationPhoto,
        deliverables: [
            "Business process assessment",
            "ERP readiness evaluation",
            "Gap analysis",
            "Transformation roadmap",
            "Implementation planning",
        ],
        desc: "Improve efficiency through standardized and automated business processes.",
    },
    {
        title: "Workflow Orchestration",
        image: workflowOrchestrationPhoto,
        deliverables: [
            "Process mapping",
            "Trigger & event design",
            "Cross-system integration",
            "Exception handling",
            "Continuous optimization",
        ],
        desc: "Coordinate multi-step workflows across systems and teams without manual handoffs.",
    },
    {
        title: "Multi-Agent Collaboration",
        image: multiAgentPhoto,
        deliverables: [
            "Agent role design",
            "Task delegation logic",
            "Inter-agent communication protocols",
            "Conflict resolution rules",
            "Performance monitoring",
        ],
        desc: "Multiple specialized AI agents working together to solve problems no single model can handle alone.",
    },
    {
        title: "Enterprise Knowledge Agents",
        image: knowledgeAgentsPhoto,
        deliverables: [
            "Knowledge base indexing",
            "Access control mapping",
            "Query intent design",
            "Source citation",
            "Continuous re-indexing",
        ],
        desc: "Give every employee instant, accurate answers pulled directly from your company's own knowledge.",
    },
    {
        title: "Customer Support Agents",
        image: supportAgentsPhoto,
        deliverables: [
            "Intent classification",
            "Escalation rules",
            "Tone & brand guidelines",
            "Ticketing tool integration",
            "Quality monitoring",
        ],
        desc: "Resolve routine support requests instantly while seamlessly escalating complex issues to humans.",
    },
    {
        title: "Process Automation Agents",
        image: processAgentsPhoto,
        deliverables: [
            "Process discovery",
            "Bot design & scripting",
            "Exception & error handling",
            "Audit logging",
            "Continuous improvement",
        ],
        desc: "Autonomous agents that execute repetitive business processes end-to-end, reliably and at scale.",
    },
];

export default function IntelligentAssistantsCards() {
    const [active, setActive] = useState(0);

    return (
        <section className="w-full py-10 sm:py-16 px-4 sm:px-[40px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1153px] mx-auto text-center mb-10 sm:mb-[54px]"
            >
                <h2 className="text-black text-2xl font-medium">Intelligent Assistants</h2>
                <p className="text-black text-base sm:text-lg font-light">Turn Data into Intelligent Decisions</p>
                <p className="text-[#6c6c6c] text-base sm:text-lg font-light">
                    Build machine learning models that analyze historical data, identify patterns, and generate
                    predictive insights to optimize business performance.
                </p>
            </motion.div>

            <div className="w-full overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:h-[432px]">
                    {TABS.map((tab, index) => {
                        const isActive = index === active;
                        const dimTop = index % 2 === 0;

                        return (
                            <button
                                key={tab.title}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`group relative overflow-hidden text-left transition-all duration-700 ease-in-out w-full 
    ${isActive
                                        ? "h-[420px] sm:h-full border border-[#b1b1b1] sm:flex-[2]"
                                        : "h-[180px] sm:h-full sm:flex-1"
                                    }
`}
                            >
                                {isActive ? (
                                    <div className="flex flex-col sm:flex-row h-full">
                                        <div className="relative w-full sm:w-[151px] h-[140px] sm:h-full shrink-0 overflow-hidden">
                                            <Image src={tab.image} alt="" fill className="object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
                                            <p className="absolute top-2 left-2 right-2 text-white text-base font-normal">{tab.title}</p>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between gap-4 p-6 text-[#515151] text-sm">
                                            <div>
                                                <p className="mb-1">Deliverables</p>
                                                <ul className="list-disc pl-5 space-y-0.5">
                                                    {tab.deliverables.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <p>{tab.desc}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Image
                                            src={tab.image}
                                            alt=""
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-b ${dimTop ? "from-transparent to-black/70" : "from-black/70 to-transparent"
                                                }`}
                                        />
                                        <p
                                            className={`absolute left-2 right-2 text-white text-sm sm:text-base font-normal text-center ${dimTop ? "bottom-2" : "top-2"
                                                }`}
                                        >
                                            {tab.title}
                                        </p>
                                    </>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
