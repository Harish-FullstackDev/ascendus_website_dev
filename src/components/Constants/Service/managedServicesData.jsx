import { ServerCog, ShieldCheck, MonitorSmartphone, Workflow, Headphones, DatabaseZap } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "managedServices");

export const managedServicesData = {
  hero: {
    title: "Managed Services",
    subtitle: "Reliable operations, modern support",
    description: "Ascendus provides managed services that keep your technology environment stable, secure, and continuously optimized so your teams can focus on growth instead of firefighting.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Managed Services", link: "/services/managedServices" }
    ],
    primaryCta: { label: "Talk to an Expert", link: "#contact" },
    secondaryCta: { label: "View Service Scope", link: "#overview" }
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
    title: "Why Managed Services Matter",
    description: "Managed services create operational resilience by combining proactive monitoring, service management, and expert support under one accountable model.",
    image: "/ServicePage/HANA.png",
    whyItMatters: "As environments grow more complex, organizations need predictable support, rapid issue resolution, and better governance without overburdening internal teams.",
    whySST: "We provide an outcome-driven managed services model that brings together support, optimization, and governance to keep your platform healthy and aligned with business priorities.",
    expertise: [
      "24/7 monitoring and incident management",
      "Application and infrastructure support",
      "Service desk and operational governance",
      "Performance tuning and continuous improvement"
    ],
    industries: ["Manufacturing", "Retail", "Healthcare", "Logistics", "Public Sector"],
    technologies: [
      { name: "Operations Support", icon: MonitorSmartphone },
      { name: "Security Operations", icon: ShieldCheck },
      { name: "Platform Management", icon: ServerCog },
      { name: "Automation", icon: Workflow },
      { name: "Service Desk", icon: Headphones }
    ]
  },
  capabilities: {
    title: "Managed Services Capabilities",
    subtitle: "What We Deliver",
    items: [
      { icon: MonitorSmartphone, title: "Application Monitoring", description: "Proactively monitor critical applications and infrastructure for availability, performance, and reliability.", link: "/services/managedServices/application-monitoring", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
      { icon: ShieldCheck, title: "Security & Compliance", description: "Maintain a secure operating environment with continuous oversight, policy alignment, and remediation support.", link: "/services/managedServices/security-compliance", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
      { icon: ServerCog, title: "Platform Administration", description: "Manage day-to-day platform administration, updates, and operational tasks with experienced specialists.", link: "/services/managedServices/platform-administration", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80" },
      { icon: Workflow, title: "Service Automation", description: "Use automation to accelerate repetitive support tasks and reduce response times across operations.", link: "/services/managedServices/service-automation", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
      { icon: Headphones, title: "Support Desk", description: "Provide responsive support for incidents, requests, and service continuity needs across teams and users.", link: "/services/managedServices/support-desk", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80" },
      { icon: DatabaseZap, title: "Operational Optimization", description: "Continuously tune environments to improve resilience, efficiency, and long-term value.", link: "/services/managedServices/operational-optimization", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Outcomes We Help Create",
    items: [
      { value: "99.9%", label: "Service Availability", description: "Keeping platforms reliable and available for business continuity." },
      { value: "50%", label: "Faster Issue Resolution", description: "Shortening response times through proactive monitoring and support." },
      { value: "30%", label: "Reduced Operational Burden", description: "Freeing internal teams to focus on strategic priorities." },
      { value: "24/7", label: "Managed Support", description: "Providing ongoing oversight and support whenever it is needed." }
    ]
  },
  partners: {
    title: "Technology and Support Partners",
    subtitle: "Working with your platform ecosystem",
    items: [
      { name: "Cloud Platforms", icon: ServerCog, link: "/partners/cloud" },
      { name: "Security Teams", icon: ShieldCheck, link: "/partners/security" },
      { name: "Operations Leaders", icon: Workflow, link: "/partners/operations" },
      { name: "Service Desk", icon: Headphones, link: "/partners/service-desk" },
      { name: "Infrastructure Teams", icon: DatabaseZap, link: "/partners/infrastructure" },
      { name: "Application Owners", icon: MonitorSmartphone, link: "/partners/application-owners" }
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
      { question: "Can managed services support existing environments?", answer: "Yes. We can work with your current estate, improve visibility, and modernize support without requiring a full replatforming effort." },
      { question: "Do you provide 24/7 support?", answer: "We can structure support around your operating model, including round-the-clock monitoring and incident response where required." },
      { question: "Is this suitable for hybrid environments?", answer: "Absolutely. Our managed services model is designed to cover cloud, hybrid, and on-premise landscapes with consistent governance." }
    ]
  }
};
