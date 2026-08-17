import {
    ShieldCheck,
    Lock,
    Server,
    Network,
    Database,
    Eye,
    AlertTriangle,
    CheckCircle,
    Globe,
    Fingerprint,
    FileCheck,
    HelpCircle
} from "lucide-react";

import {
    SiSap,
    SiGooglecloud
} from "react-icons/si";
import { TfiMicrosoft } from "react-icons/tfi";
import { FaAws } from "react-icons/fa";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "Cybersecurity");

export const cybersecurityData = {
    hero: {
        title: "Cybersecurity & Digital Trust",
        subtitle: "Secure Your Digital Enterprise",
        description:
            "Ascendus (Ascendus) helps organizations strengthen cyber resilience with comprehensive security solutions that protect critical assets, ensure compliance, and build lasting digital trust.",
        backgroundImage: "/SolutionPage/ConsulationBg.png",
        breadcrumbs: [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
            { label: "Cybersecurity & Digital Trust", link: "/services/Cybersecurity" }
        ],
        primaryCta: { label: "Talk to a Security Expert", link: "#contact" },
        secondaryCta: { label: "Request a Security Assessment", link: "#contact" }
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
        title: "What is Cybersecurity & Digital Trust?",
        description:
            "Cybersecurity & Digital Trust is the practice of protecting digital assets, applications, networks, cloud environments, and sensitive information against evolving cyber threats while ensuring compliance, resilience, and customer confidence.",

        image: "/ServicePage/HANA.png",

        whyItMatters:
            "As cyber threats continue to evolve, organizations need proactive security strategies that go beyond traditional defenses. Digital Trust ensures secure access, resilient infrastructure, regulatory compliance, and uninterrupted business operations.",

        whySST:
            "At Ascendus, we provide end-to-end cybersecurity services—from strategy and assessment to implementation and continuous monitoring—helping organizations build secure, resilient, and compliant digital ecosystems.",

        expertise: [
            "Cybersecurity Strategy & Risk Assessment",
            "Identity & Access Management (IAM)",
            "Cloud & Infrastructure Security",
            "24/7 Security Monitoring & Incident Response"
        ],

        industries: [
            "Banking & Financial Services",
            "Healthcare & Life Sciences",
            "Manufacturing",
            "Retail & E-commerce",
            "Government & Public Sector"
        ],

        technologies: [
            { name: "Microsoft Security", icon: TfiMicrosoft },
            { name: "AWS Security", icon: FaAws },
            { name: "Google Cloud Security", icon: SiGooglecloud },
            { name: "SAP Security", icon: SiSap }
        ]
    },

    capabilities: {
        title: "Our Capabilities",
        subtitle: "Comprehensive Security Services",

        items: [
            {
                icon: ShieldCheck,
                title: "Cyber Risk Assessment",
                description:
                    "Identify vulnerabilities, evaluate cyber risks, and develop security roadmaps aligned with business objectives.",
                link: "/services/Cybersecurity/risk-assessment",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Lock,
                title: "Identity & Access Management",
                description:
                    "Implement secure authentication, privileged access management, and Zero Trust identity controls.",
                link: "/services/Cybersecurity/identity-access-management",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Globe,
                title: "Cloud Security",
                description:
                    "Secure multi-cloud environments with governance, workload protection, compliance monitoring, and cloud-native security controls.",
                link: "/services/Cybersecurity/cloud-security",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Network,
                title: "Network Security",
                description:
                    "Protect enterprise networks with next-generation firewalls, segmentation, intrusion detection, and secure connectivity.",
                link: "/services/Cybersecurity/network-security",
                image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Eye,
                title: "Security Operations Center (SOC)",
                description:
                    "Continuous threat monitoring, incident detection, and rapid response through 24/7 managed security operations.",
                link: "/services/Cybersecurity/security-operations",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: FileCheck,
                title: "Governance, Risk & Compliance",
                description:
                    "Ensure compliance with industry regulations and standards including ISO 27001, GDPR, HIPAA, SOC 2, and NIST.",
                link: "/services/Cybersecurity/grc",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    metrics: {
        title: "Business Impact",
        subtitle: "Security Outcomes That Matter",

        items: [
            {
                value: "99.9%",
                label: "Threat Detection Accuracy",
                description:
                    "Advanced monitoring helps identify threats before they impact business operations."
            },
            {
                value: "60%",
                label: "Reduced Security Incidents",
                description:
                    "Strengthening defenses significantly lowers successful cyberattacks."
            },
            {
                value: "24/7",
                label: "Continuous Security Monitoring",
                description:
                    "Round-the-clock monitoring ensures rapid threat detection and response."
            },
            {
                value: "100%",
                label: "Compliance-Focused Approach",
                description:
                    "Security solutions aligned with industry standards and regulatory requirements."
            }
        ]
    },

    partners: {
        title: "Technology & Strategic Partners",
        subtitle: "Delivering Security with Industry Leaders",

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
                question: "What cybersecurity services does Ascendus provide?",
                answer:
                    "We provide cybersecurity consulting, cloud security, identity and access management, security operations, vulnerability assessments, governance, risk management, compliance, and incident response services."
            },
            {
                question: "Can Ascendus help secure our cloud infrastructure?",
                answer:
                    "Yes. We secure AWS, Microsoft Azure, Google Cloud, and hybrid environments using cloud-native security controls, continuous monitoring, and compliance best practices."
            },
            {
                question: "How do you ensure regulatory compliance?",
                answer:
                    "We align security programs with global standards such as ISO 27001, GDPR, HIPAA, SOC 2, and NIST to help organizations meet compliance requirements."
            },
            {
                question: "Do you provide continuous security monitoring?",
                answer:
                    "Yes. Our managed Security Operations Center (SOC) provides 24/7 monitoring, threat detection, incident response, and proactive security management."
            }
        ]
    },

    cta: {
        title: "Ready to Strengthen Your Cybersecurity?",
        description:
            "Partner with Ascendus to protect your business, reduce cyber risks, and build lasting digital trust.",
        buttonText: "Talk to a Security Expert"
    }
};