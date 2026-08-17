import {
    Cpu,
    Bot,
    Workflow,
    Database,
    Clock,
    CheckCircle,
    TrendingUp,
    Zap,
    Layers,
    LineChart,
    ShieldCheck,
    HelpCircle
} from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "intelligentAutomation");

import {
    SiSap,
    SiGooglecloud
} from "react-icons/si";
import { TfiMicrosoft } from "react-icons/tfi";
import { FaAws } from "react-icons/fa";

export const intelligentAutomationData = {
    hero: {
        title: "Intelligent Automation Solutions",
        subtitle: "Accelerate Digital Transformation",
        description: "Ascendus (Ascendus) empowers enterprises with Intelligent Automation solutions that optimize workflows, reduce operational costs, and drive smarter, faster business outcomes.",
        backgroundImage: "/SolutionPage/ConsulationBg.png",
        breadcrumbs: [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
            { label: "Intelligent Automation", link: "/services/intelligentAutomation" }
        ],
        primaryCta: { label: "Talk to an Expert", link: "#contact" },
        secondaryCta: { label: "Get in Touch", link: "#contact" }
    },

    sections: [
        { id: "overview", label: "Overview" },
        { id: "capabilities", label: "Our Capabilities" },
        { id: "metrics", label: "Success Metrics" },
        { id: "partners", label: "Partners" },
        { id: "insights", label: "Related Insights" },
        { id: "faq", label: "FAQ" }
    ],

    overview: {
        title: "What is Intelligent Automation?",
        description: "Intelligent Automation (IA) combines Robotic Process Automation (RPA), Artificial Intelligence (AI), and Machine Learning (ML) to automate complex, end-to-end business operations. By integrating cognitive technologies with execution, Ascendus enables systems to not only perform repetitive tasks but also analyze, learn, and make decisions over time.",
        image: "/ServicePage/HANA.png", // Wireframe image placeholder
        whyItMatters: "Traditional automation only handles rule-based tasks. Intelligent Automation adapts to changing situations, processes unstructured data (like invoices or contracts), and continuously refines its efficiency, creating a hyper-agile digital workforce.",
        whySST: "At Ascendus, we design, deploy, and scale tailor-made automation strategies. We don't just supply tools; we co-create long-term automation roadmaps aligned directly to your commercial KPIs and operational needs.",
        expertise: [
            "End-to-End Process Discovery & Mapping",
            "Custom Cognitive AI & ML integrations",
            "Legacy System Modernization via RPA",
            "24/7 Operations Monitoring & Hypercare Support"
        ],
        industries: [
            "Banking & Finance",
            "Healthcare & Pharma",
            "Logistics & Supply Chain",
            "Retail & E-commerce",
            "Manufacturing"
        ],
        technologies: [
            { name: "UiPath", icon: Bot },
            { name: "Automation Anywhere", icon: Cpu },
            { name: "SAP IA", icon: SiSap },
            { name: "Microsoft Power Automate", icon: TfiMicrosoft },
            { name: "AWS AI Services", icon: FaAws }
        ]
    },

    capabilities: {
        title: "Our Capabilities",
        subtitle: "What We Offer",
        items: [
            {
                icon: Workflow,
                title: "Workflow Automation",
                description: "Automate complex, cross-department workflows, reducing manual hand-offs and streamlining process execution.",
                link: "/services/intelligentAutomation/workflow-automation",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Bot,
                title: "Robotic Process Automation (RPA)",
                description: "Deploy digital workers to handle repetitive, high-volume tasks such as data entry, reconciliation, and form filing.",
                link: "/services/intelligentAutomation/rpa",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Database,
                title: "Document Intelligence",
                description: "Extract, classify, and process unstructured data from invoices, receipts, and emails using advanced OCR & NLP.",
                link: "/services/intelligentAutomation/document-intelligence",
                image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Layers,
                title: "Decision Automation",
                description: "Integrate Machine Learning algorithms to automate operational decisions, underwriting, and risk assessments.",
                link: "/services/intelligentAutomation/decision-automation",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: LineChart,
                title: "Conversational AI",
                description: "Create intelligent, context-aware chatbots and virtual agents to support 24/7 client interactions and queries.",
                link: "/services/intelligentAutomation/conversational-ai",
                image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: ShieldCheck,
                title: "Process Mining & Analytics",
                description: "Analyze event logs to identify operational bottlenecks, predict failure points, and optimize automated pathways.",
                link: "/services/intelligentAutomation/process-mining",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    metrics: {
        title: "Business Impact",
        subtitle: "Success Metrics We Deliver",
        items: [
            {
                value: "40%",
                label: "Reduction in Manual Effort",
                description: "Freeing up valuable talent to focus on high-impact strategic tasks."
            },
            {
                value: "60%",
                label: "Faster Processing Speeds",
                description: "Accelerating execution times and improving overall service responsiveness."
            },
            {
                value: "99.9%",
                label: "Process Accuracy",
                description: "Eliminating human error rates across compliance and entry-heavy tasks."
            },
            {
                value: "24/7",
                label: "Automated Workflows",
                description: "Continuous digital operations working day and night without interruption."
            }
        ]
    },

    partners: {
        title: "Technology & Strategic Partners",
        subtitle: "Leveraging Industry-Leading Automation Ecosystems",
        items: [
            { name: "SAP", icon: SiSap, link: "/partners/sap" },
            { name: "Microsoft", icon: TfiMicrosoft, link: "/partners/microsoft" },
            { name: "UiPath", icon: Bot, link: "/partners/uipath" },
            { name: "AWS", icon: FaAws, link: "/partners/aws" },
            { name: "Google Cloud", icon: SiGooglecloud, link: "/partners/google-cloud" },
            { name: "Automation Anywhere", icon: Cpu, link: "/partners/automation-anywhere" }
        ]
    },

    insights: {
        title: "Related Insights",
        tabs: [
            {
                id: "blogs",
                label: "Blogs",
                items: sstInsights.filter(item => item.category === "blogs").map(item => ({
                    title: item.title,
                    image: item.image,
                    date: item.date,
                    link: `/services/blog/${item.slug}`,
                    description: item.description
                }))
            },
            {
                id: "case-studies",
                label: "Case Studies",
                items: sstInsights.filter(item => item.category === "case-studies").map(item => ({
                    title: item.title,
                    image: item.image,
                    date: item.date,
                    link: `/services/blog/${item.slug}`,
                    description: item.description
                }))
            },
            {
                id: "whitepapers",
                label: "Whitepapers",
                items: sstInsights.filter(item => item.category === "whitepapers").map(item => ({
                    title: item.title,
                    image: item.image,
                    date: item.date,
                    link: `/services/blog/${item.slug}`,
                    description: item.description
                }))
            }
        ]
    },

    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Resolve Common Queries",
        items: [
            {
                question: "How is Intelligent Automation different from standard RPA?",
                answer: "Standard RPA executes simple, predefined, rule-based tasks (e.g., copy-pasting data). Intelligent Automation integrates AI and Machine Learning, allowing the system to handle unstructured data, detect patterns, learn from exceptions, and execute intelligent decision-making."
            },
            {
                question: "How long does it take to deploy an automation project?",
                answer: "A standard pilot program or proof-of-concept (POC) can take 4 to 8 weeks. Larger enterprise-wide integrations with cognitive decision points usually range from 3 to 6 months depending on process complexity."
            },
            {
                question: "Will IA replace our existing legacy software?",
                answer: "No. One of the main advantages of Intelligent Automation and RPA is that they interact with your existing legacy systems through user interfaces or APIs, meaning you do not need to replace or rewrite your core legacy systems."
            },
            {
                question: "How do you ensure security and regulatory compliance?",
                answer: "We build strict role-based access, credential vaulting, complete execution logs, and compliance guards (for GDPR, HIPAA, SOC2) directly into every digital worker's script and system layer."
            }
        ]
    },

    cta: {
        title: "Ready to Transform Your Business?",
        description: "Let's discuss how Ascendus can help accelerate your digital transformation and unlock new layers of productivity.",
        buttonText: "Talk to an Expert"
    }
};

