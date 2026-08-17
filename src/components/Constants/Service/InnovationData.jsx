import {
    Lightbulb,
    Cpu,
    Brain,
    Bot,
    Sparkles,
    Cloud,
    Network,
    Blocks,
    Rocket,
    Workflow,
    LineChart,
    ShieldCheck
} from "lucide-react";

import {
    SiSap,
    SiGooglecloud
} from "react-icons/si";
import { TfiMicrosoft } from "react-icons/tfi";
import { FaAws } from "react-icons/fa";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "Innovation");

export const innovationData = {
    hero: {
        title: "Innovation & Emerging Technologies",
        subtitle: "Accelerate Innovation. Transform the Future.",
        description:
            "Ascendus (Ascendus) helps organizations unlock new business opportunities through emerging technologies, enabling innovation, agility, and sustainable digital transformation.",
        backgroundImage: "/SolutionPage/ConsulationBg.png",
        breadcrumbs: [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
            { label: "Innovation & Emerging Technologies", link: "/services/Innovation" }
        ],
        primaryCta: { label: "Talk to an Innovation Expert", link: "#contact" },
        secondaryCta: { label: "Start Your Innovation Journey", link: "#contact" }
    },

    sections: [
        { id: "overview", label: "Overview" },
        { id: "metrics", label: "Success Metrics" },
        { id: "capabilities", label: "Our Capabilities" },
        { id: "partners", label: "Partners" },
        { id: "insights", label: "Related Insights" },
        { id: "faq", label: "FAQ" }
    ],

    overview: {
        title: "What are Innovation & Emerging Technologies?",
        description:
            "Innovation & Emerging Technologies combine next-generation digital capabilities—including Artificial Intelligence, Generative AI, IoT, Cloud, Blockchain, Automation, and Data Intelligence—to help businesses create new value, improve customer experiences, and stay ahead in a rapidly evolving market.",

        image: "/ServicePage/HANA.png",

        whyItMatters:
            "Organizations that embrace emerging technologies can innovate faster, optimize operations, unlock new revenue streams, and respond quickly to changing customer expectations and market dynamics.",

        whySST:
            "At Ascendus, we help enterprises identify, validate, and implement innovative technology solutions that align with strategic business goals while minimizing implementation risks and maximizing long-term value.",

        expertise: [
            "AI & Generative AI Solutions",
            "Internet of Things (IoT)",
            "Blockchain & Distributed Ledger Solutions",
            "Innovation Strategy & Digital Transformation"
        ],

        industries: [
            "Banking & Financial Services",
            "Healthcare & Life Sciences",
            "Manufacturing",
            "Retail & Consumer Goods",
            "Energy & Utilities"
        ],

        technologies: [
            { name: "Microsoft", icon: TfiMicrosoft },
            { name: "AWS", icon: FaAws },
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "SAP", icon: SiSap }
        ]
    },

    capabilities: {
        title: "Our Capabilities",
        subtitle: "Driving the Next Generation of Innovation",

        items: [
            {
                icon: Brain,
                title: "Artificial Intelligence & Generative AI",
                description:
                    "Build intelligent applications powered by AI, machine learning, and generative AI to automate decisions and enhance customer experiences.",
                link: "/services/Innovation/artificial-intelligence",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Bot,
                title: "Intelligent Automation",
                description:
                    "Combine AI and automation technologies to streamline workflows, improve efficiency, and reduce operational costs.",
                link: "/services/Innovation/intelligent-automation",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Network,
                title: "Internet of Things (IoT)",
                description:
                    "Connect devices, collect real-time data, and enable intelligent operations across industrial and enterprise environments.",
                link: "/services/Innovation/iot",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Blocks,
                title: "Blockchain Solutions",
                description:
                    "Develop secure, transparent, and decentralized solutions for digital identity, supply chain, and financial ecosystems.",
                link: "/services/Innovation/blockchain",
                image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Cloud,
                title: "Cloud Innovation",
                description:
                    "Leverage cloud-native technologies to modernize applications, improve scalability, and accelerate digital innovation.",
                link: "/services/Innovation/cloud-innovation",
                image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Rocket,
                title: "Innovation Consulting",
                description:
                    "Identify emerging technology opportunities, validate use cases, and create roadmaps for successful enterprise innovation.",
                link: "/services/Innovation/consulting",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    metrics: {
        title: "Business Impact",
        subtitle: "Innovation That Delivers Results",

        items: [
            {
                value: "50%",
                label: "Faster Innovation Cycles",
                description:
                    "Accelerate idea validation and product development with emerging technologies."
            },
            {
                value: "35%",
                label: "Improved Operational Efficiency",
                description:
                    "Optimize business processes through intelligent technologies and automation."
            },
            {
                value: "2X",
                label: "Business Agility",
                description:
                    "Respond more quickly to market changes and evolving customer expectations."
            },
            {
                value: "24/7",
                label: "Connected Digital Operations",
                description:
                    "Enable always-on digital experiences powered by intelligent systems."
            }
        ]
    },

    partners: {
        title: "Technology & Strategic Partners",
        subtitle: "Partnering with Global Technology Leaders",

        items: [
            { name: "Microsoft", icon: TfiMicrosoft, link: "/partners/microsoft" },
            { name: "AWS", icon: FaAws, link: "/partners/aws" },
            { name: "Google Cloud", icon: SiGooglecloud, link: "/partners/google-cloud" },
            { name: "SAP", icon: SiSap, link: "/partners/sap" }
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
                question: "What emerging technologies does Ascendus specialize in?",
                answer:
                    "We specialize in Artificial Intelligence, Generative AI, IoT, Blockchain, Intelligent Automation, Cloud Innovation, and Digital Transformation consulting."
            },
            {
                question: "How do you help organizations adopt emerging technologies?",
                answer:
                    "We assess business needs, identify high-value use cases, develop implementation roadmaps, and deliver scalable solutions that maximize business outcomes."
            },
            {
                question: "Can emerging technologies integrate with our existing systems?",
                answer:
                    "Yes. Our solutions are designed to integrate seamlessly with existing enterprise applications, cloud platforms, and business processes."
            },
            {
                question: "How do you ensure innovation delivers business value?",
                answer:
                    "We focus on measurable business outcomes through rapid prototyping, proof-of-concepts, scalable implementations, and continuous optimization aligned with your strategic objectives."
            }
        ]
    },

    cta: {
        title: "Ready to Drive Innovation?",
        description:
            "Partner with Ascendus to harness emerging technologies, accelerate innovation, and build future-ready digital experiences.",
        buttonText: "Talk to an Innovation Expert"
    }
};