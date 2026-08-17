import {
    Factory,
    Settings,
    Cpu,
    Truck,
    Wrench,
    Activity,
    AlertTriangle,
    ShieldAlert,
    Gauge,
    Layers,
    Boxes,
    HelpCircle
} from "lucide-react";

import {
    SiSap,
    SiSiemens,
    SiRockwellautomation,
    SiSchneiderelectric
} from "react-icons/si";
import { TfiMicrosoft } from "react-icons/tfi";
import { FaAws } from "react-icons/fa";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "Manufacturing");

export const manufacturingData = {
    hero: {
        title: "Smart Manufacturing & Industry 4.0",
        subtitle: "Digitalize Your Factory Floor",
        description:
            "Ascendus (Ascendus) helps industrial organizations accelerate digitalization, optimize shop-floor operations, and secure production assets with resilient Industry 4.0 solutions.",
        backgroundImage: "/SolutionPage/ManufacturingBg.png",
        breadcrumbs: [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
            { label: "Smart Manufacturing", link: "/services/manufacturing" }
        ],
        primaryCta: { label: "Talk to a Manufacturing Expert", link: "#contact" },
        secondaryCta: { label: "Request a Digital Maturity Assessment", link: "#contact" }
    },

    sections: [
        { id: "overview", label: "Overview" },
        { id: "metrics", label: "Operational Impact" },
        { id: "capabilities", label: "Our Capabilities" },
        { id: "partners", label: "Partners" },
        { id: "insights", label: "Related Insights" },
        { id: "faq", label: "FAQ" }
    ],

    overview: {
        title: "What is Smart Manufacturing & Industry 4.0?",
        description:
            "Smart Manufacturing is the convergence of traditional industrial processes with advanced digital technologies—including IoT, cloud computing, automation, and real-time data analytics—to build highly agile, self-optimizing production ecosystems.",

        image: "/ServicePage/SmartFactory.png",

        whyItMatters:
            "Volatile supply chains, rising energy costs, and legacy machinery create severe production bottlenecks. Digital transformation gives plant operators full visibility to prevent unexpected downtime, lower waste, and maintain strict quality standards.",

        whySST:
            "Ascendus bridges the gap between Operational Technology (OT) on the factory floor and enterprise Information Technology (IT). We deploy end-to-end industrial solutions that transform siloed machine data into real-time operational intelligence.",

        expertise: [
            "Industrial IoT (IIoT) & Sensor Integration",
            "Predictive Maintenance & Asset Lifecycle Management",
            "Manufacturing Execution Systems (MES) Alignment",
            "OT Cybersecurity & Network Micro-segmentation"
        ],

        industries: [
            "Automotive & Aerospace",
            "Industrial Machinery & Equipment",
            "Consumer Packaged Goods (CPG)",
            "Pharmaceuticals & Medical Devices",
            "Chemicals, Energy & Utilities"
        ],

        technologies: [
            { name: "SAP Digital Manufacturing", icon: SiSap },
            { name: "Siemens MindSphere", icon: SiSiemens },
            { name: "AWS IoT Core", icon: FaAws },
            { name: "Microsoft Azure IoT", icon: TfiMicrosoft },
            { name: "Schneider Electric EcoStruxure", icon: SiSchneiderelectric }
        ]
    },

    capabilities: {
        title: "Our Capabilities",
        subtitle: "Comprehensive Industrial Digitalization Services",

        items: [
            {
                icon: Cpu,
                title: "Industrial IoT & Connectivity",
                description:
                    "Connect legacy equipment and modern PLC systems using industrial protocols to capture edge data securely.",
                link: "/services/manufacturing/iiot-connectivity"
            },
            {
                icon: Wrench,
                title: "Predictive Maintenance",
                description:
                    "Deploy machine learning algorithms to monitor equipment vibration and temperature, predicting failures before they occur.",
                link: "/services/manufacturing/predictive-maintenance"
            },
            {
                icon: Factory,
                title: "MES & Operations Tracking",
                description:
                    "Implement Manufacturing Execution Systems to track work-in-progress, optimize scheduling, and gain real-time visibility.",
                link: "/services/manufacturing/mes-systems"
            },
            {
                icon: Truck,
                title: "Supply Chain & Logistics Sync",
                description:
                    "Integrate raw material inventories and logistics tracking directly with factory production schedules.",
                link: "/services/manufacturing/supply-chain"
            },
            {
                icon: ShieldAlert,
                title: "OT Infrastructure Security",
                description:
                    "Isolate and safeguard critical manufacturing infrastructure from cyber threats without disrupting active production lines.",
                link: "/services/manufacturing/ot-security"
            },
            {
                icon: Gauge,
                title: "OEE & Performance Analytics",
                description:
                    "Build automated dashboards calculating Overall Equipment Effectiveness to pinpoint root causes of performance losses.",
                link: "/services/manufacturing/oee-analytics"
            }
        ]
    },

    metrics: {
        title: "Operational Impact",
        subtitle: "Production Outcomes That Matter",

        items: [
            {
                value: "30%",
                label: "Reduction in Downtime",
                description:
                    "Predictive alerts allow maintenance crews to service machinery during planned structural windows."
            },
            {
                value: "+18%",
                label: "OEE Improvement",
                description:
                    "Optimizing cycle times and minimizing line micro-stoppages significantly boosts equipment yield."
            },
            {
                value: "100%",
                label: "End-to-End Traceability",
                description:
                    "Complete digital lineage tracking helps factories easily meet regulatory compliance and handling standards."
            },
            {
                value: "-22%",
                label: "Lower Scrap & Material Waste",
                description:
                    "Automated closed-loop quality inspections detect manufacturing anomalies instantly to stop bad batches."
            }
        ]
    },

    partners: {
        title: "Technology & Strategic Partners",
        subtitle: "Building Smart Factories with Global Leaders",

        items: [
            { name: "Siemens", icon: SiSiemens, link: "/partners/siemens" },
            { name: "SAP", icon: SiSap, link: "/partners/sap" },
            { name: "AWS Industrial", icon: FaAws, link: "/partners/aws" },
            { name: "Microsoft Cloud for Manufacturing", icon: TfiMicrosoft, link: "/partners/microsoft" },
            { name: "Schneider Electric", icon: SiSchneiderelectric, link: "/partners/schneider" }
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
                question: "How do you connect legacy production equipment to the cloud?",
                answer:
                    "We deploy industrial edge gateways equipped with protocol converters. This allows us to safely ingest older serial or PLC protocols (like Modbus or Profinet) and securely package them into MQTT or OPC UA data streams for cloud parsing."
            },
            {
                question: "What is your approach to OT and shop-floor cybersecurity?",
                answer:
                    "We strictly align with the ISA/IEC 62443 standard. We leverage network micro-segmentation, zero-trust industrial switches, and continuous behavior monitoring to ensure that an IT breach cannot cross over and compromise physical production environments."
            },
            {
                question: "Can these solutions integrate with our existing ERP systems?",
                answer:
                    "Absolutely. True digitalization requires syncing shop-floor reality with enterprise finance. We specialize in building reliable, bidirectional APIs between production floor MES systems and core ERP platforms like SAP or Microsoft Dynamics."
            },
            {
                question: "What is the typical timeline for an initial smart manufacturing pilot?",
                answer:
                    "A targeted Proof of Value (PoV) focusing on an individual high-value assembly line or critical machine asset typically takes 6 to 8 weeks from hardware sensor installation to live dashboard data visualization."
            }
        ]
    },

    cta: {
        title: "Ready to Industrialize Your Digital Edge?",
        description:
            "Partner with Ascendus to increase your OEE, implement predictive analytics, and future-proof your manufacturing facilities.",
        buttonText: "Talk to a Manufacturing Expert"
    }
};