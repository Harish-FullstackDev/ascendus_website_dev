import {
    Briefcase,
    Compass,
    TrendingUp,
    Target,
    ShieldCheck,
    Network,
    Users,
    HelpCircle
} from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "businessAdvisory");


export const businessAdvisoryData = {
    hero: {
        title: "Business Advisory Services",
        subtitle: "Strategic Guidance for Growth and Transformation",
        description: "Ascendus (Ascendus) helps organizations turn ambition into action with business advisory services that strengthen strategy, operations, and execution across every stage of growth.",
        backgroundImage: "/SolutionPage/ConsulationBg.png",
        breadcrumbs: [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
            { label: "Business Advisory", link: "/services/businessAdvisory" }
        ],
        primaryCta: { label: "Talk to an Expert", link: "#contact" },
        secondaryCta: { label: "Schedule a Consultation", link: "#contact" }
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
        title: "Why Business Advisory Matters",
        description: "Business advisory bridges the gap between strategy and execution. We help leaders make smarter decisions, improve operating models, and accelerate transformation with practical insights rooted in real-world delivery experience.",
        image: "/ServicePage/HANA.png",
        whyItMatters: "Organizations often face complexity from growth, change, market pressure, and technology adoption. Business advisory provides the clarity, structure, and decision support needed to navigate these moments with confidence.",
        whySST: "At Ascendus, we combine strategic thinking with implementation expertise. Our advisors work closely with leadership teams to shape priorities, uncover opportunities, and create measurable action plans that move the business forward.",
        expertise: [
            "Strategic planning and business case development",
            "Operating model and process optimization",
            "Transformation roadmap and program governance",
            "Leadership alignment and change enablement"
        ],
        industries: [
            "Manufacturing",
            "Retail & Consumer Goods",
            "Healthcare",
            "Financial Services",
            "Energy & Utilities"
        ],
        technologies: [
            { name: "Strategy & PMO", icon: Briefcase },
            { name: "Transformation Design", icon: Compass },
            { name: "Growth Planning", icon: TrendingUp },
            { name: "Decision Support", icon: Target },
            { name: "Governance & Risk", icon: ShieldCheck }
        ]
    },

    capabilities: {
        title: "Our Capabilities",
        subtitle: "What We Deliver",
        items: [
            {
                icon: Briefcase,
                title: "Strategic Planning",
                description: "Build resilient growth strategies grounded in market insight, commercial priorities, and operational realities.",
                link: "/services/businessAdvisory/strategic-planning",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Compass,
                title: "Transformation Advisory",
                description: "Shape transformation roadmaps that connect technology initiatives, business outcomes, and delivery governance.",
                link: "/services/businessAdvisory/transformation-advisory",
                image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: TrendingUp,
                title: "Performance Optimization",
                description: "Identify opportunities to improve efficiency, profitability, and customer experience through better operating models.",
                link: "/services/businessAdvisory/performance-optimization",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Target,
                title: "Business Case Development",
                description: "Create compelling investment cases and value realization frameworks that support executive decision-making.",
                link: "/services/businessAdvisory/business-case-development",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Network,
                title: "Stakeholder Alignment",
                description: "Align leadership, teams, and partners around shared goals to improve adoption and execution quality.",
                link: "/services/businessAdvisory/stakeholder-alignment",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            },
            {
                icon: Users,
                title: "Change Enablement",
                description: "Guide organizations through change with practical adoption strategies, training, and leadership support.",
                link: "/services/businessAdvisory/change-enablement",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },


    metrics: {
        title: "Business Impact",
        subtitle: "Outcomes We Help Deliver",
        items: [
            {
                value: "30%",
                label: "Improved Operating Efficiency",
                description: "Refining processes and priorities to reduce waste and accelerate execution."
            },
            {
                value: "25%",
                label: "Faster Decision Cycles",
                description: "Enabling leadership teams to move from analysis to action with greater confidence."
            },
            {
                value: "4x",
                label: "Stronger Transformation Readiness",
                description: "Improving readiness for change through structured planning and governance."
            },
            {
                value: "100%",
                label: "Executive Alignment",
                description: "Ensuring clear ownership, accountability, and measurable goals across initiatives."
            }
        ]
    },

    partners: {
        title: "Advisory Partners & Ecosystem",
        subtitle: "Collaborating with Business and Technology Leaders",
        items: [
            { name: "Strategy Leaders", icon: Briefcase, link: "/partners/strategy" },
            { name: "Transformation Offices", icon: Compass, link: "/partners/transformation" },
            { name: "Innovation Teams", icon: TrendingUp, link: "/partners/innovation" },
            { name: "Risk & Compliance", icon: ShieldCheck, link: "/partners/risk" },
            { name: "Enterprise Networks", icon: Network, link: "/partners/networks" },
            { name: "Leadership Teams", icon: Users, link: "/partners/leadership" }
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
        subtitle: "FAQ",
        items: [
            {
                question: "What does a business advisory engagement include?",
                answer: "Engagements typically include discovery workshops, strategic analysis, roadmap design, governance support, and practical implementation guidance tailored to your business context."
            },
            {
                question: "Who should engage Ascendus for business advisory?",
                answer: "We work with executive teams, transformation leaders, business unit heads, and organizations preparing for scale, change, or modernization."
            },
            {
                question: "Can advisory services support technology-led initiatives?",
                answer: "Yes. Our advisory approach connects business priorities with technology execution so transformation programs remain aligned, measurable, and sustainable."
            },
            {
                question: "How quickly can we start?",
                answer: "We can begin with a focused discovery session and define a tailored advisory plan based on your priorities, maturity, and timeline."
            }
        ]
    }
};
