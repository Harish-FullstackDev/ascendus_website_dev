import { Layers, Settings, RefreshCw, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "enterpriseTransformation");

export const enterpriseTransformationData = {
  hero: {
    title: "Enterprise Transformation",
    subtitle: "Modernizing corporate logic, systems, and structures",
    description: "Ascendus helps organizations navigate technological shifts, streamline operational workflows, and deploy digital roadmaps that scale.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Enterprise Transformation", link: "/services/enterpriseTransformation" }
    ],
    primaryCta: { label: "Consult an Expert", link: "#contact" },
    secondaryCta: { label: "View Capabilities", link: "#capabilities" }
  },
  sections: [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "metrics", label: "Impact Metrics" },
    { id: "partners", label: "Partners" },
    { id: "insights", label: "Insights" },
    { id: "faq", label: "FAQ" }
  ],
  overview: {
    title: "Succeed in the Digital Age",
    description: "Digital transformation is more than installing new software. It is about restructuring business operations, removing data gaps, and training teams to operate with high efficiency.",
    whyItMatters: "Without structured roadmaps and process auditing, digital investments turn into expensive software subscriptions that fail to increase margins.",
    whySST: "At Ascendus, we combine process engineering, custom software building, and certified project governance to ensure transformations deliver measurable commercial results.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
    expertise: [
      { title: "Transformation Blueprints", description: "Design multi-year timelines detailing software deployments and investment gates." },
      { title: "Governance Structures", description: "Establish PMO frameworks to keep project phases on track." }
    ],
    industries: [
      { name: "Manufacturing & Supply Chain" },
      { name: "Logistics & Fleet Operations" },
      { name: "Retail & E-commerce" }
    ],
    technologies: [
      { name: "Process Mining Portals" },
      { name: "Enterprise Resource Planning (ERP)" },
      { name: "Custom Workflow Engines" }
    ]
  },
  capabilities: {
    title: "Our Capabilities",
    subtitle: "What We Offer",
    items: [
      {
        icon: Layers,
        title: "Digital Strategy & Roadmap",
        description: "Assess legacy codebases and document gap mappings to build prioritized implementation timelines.",
        link: "/services/enterpriseTransformation/digital-strategy",
        image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: Settings,
        title: "Business Process Optimization",
        description: "Audit workflows to isolate manual delays, redundant approvals, and system boundaries.",
        link: "/services/enterpriseTransformation/process-optimization",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: RefreshCw,
        title: "Organizational Change Management",
        description: "Structure employee onboarding, video training modules, and software usage analytics to keep adoption rates high.",
        link: "/services/enterpriseTransformation/change-management",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Real Results",
    items: [
      { metric: "45%", title: "Operational Speed", description: "Slashing processing times by removing redundant workflow approvals." },
      { metric: "30%", title: "Cost Reductions", description: "Consolidating software subscriptions and legacy licenses." },
      { metric: "90%+", title: "User Adoption Rates", description: "Structured training ensures software systems are utilized properly." }
    ]
  },
  partners: {
    title: "Strategic Partners",
    subtitle: "Ecosystem Integration",
    items: [
      { name: "SAP Cloud Platform", icon: Settings, link: "/partners/sap" },
      { name: "Microsoft Enterprise Solutions", icon: ShieldCheck, link: "/partners/microsoft" },
      { name: "AWS Cloud Infrastructure", icon: Layers, link: "/partners/aws" }
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
      { question: "How long does a digital transformation roadmap take?", answer: "Assessments and roadmap drafting take 4 to 8 weeks, while full system rollouts are structured across 6 to 18 months." },
      { question: "How do you coordinate with our internal IT team?", answer: "We partner with your existing engineers, providing templates, code audits, and project guidelines to build trust." },
      { question: "What is process mining?", answer: "Process mining scans legacy log databases to chart actual transaction routes and bottlenecks objectively." }
    ]
  }
};
