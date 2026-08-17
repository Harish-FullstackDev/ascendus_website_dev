import { Monitor, Smartphone, MessageSquare, Shield, HelpCircle, Layers } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "customerExperience");

export const customerExperienceData = {
  hero: {
    title: "Customer Experience",
    subtitle: "Unifying portals, client apps, and support ticketing paths",
    description: "Ascendus designs custom self-service portals, integrates CRM software, and connects chat engines to provide seamless omnichannel support.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Customer Experience", link: "/services/customerExperience" }
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
    title: "Shape Delighter Customer Journeys",
    description: "Forcing customers to repeat profile inputs or call support lines for basic invoicing details causes high user churn. Self-service portals solve customer queries instantly.",
    whyItMatters: "Disjointed client calendars and untracked chat logs lead to lost customer leads and lower brand trust ratings.",
    whySST: "At Ascendus, we connect frontend web portals to legacy database engines, secure customer authentication profiles, and sync Twilio and CRM databases.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80",
    expertise: [
      { title: "Self-Service Portals", description: "Design web dashboards allowing customers to view history logs and invoices." },
      { title: "CRM Unifications", description: "Connect website forms to sales pipelines to automate lead routing." }
    ],
    industries: [
      { name: "Retail & E-commerce Brands" },
      { name: "Insurance & Health Providers" },
      { name: "Hotel & Loyalty Desk Networks" }
    ],
    technologies: [
      { name: "Salesforce CRM Systems" },
      { name: "Stripe & Twilio API Bridges" },
      { name: "React Web & Mobile Apps" }
    ]
  },
  capabilities: {
    title: "Our Capabilities",
    subtitle: "What We Offer",
    items: [
      {
        icon: Monitor,
        title: "Customer Portals & Apps",
        description: "Build custom dashboards allowing self-service invoice downloads and profile updates.",
        link: "/services/customerExperience/customer-portals",
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80",
        glowColor: "orange"
      },
      {
        icon: MessageSquare,
        title: "CRM Implementation",
        description: "Configure Salesforce CRM systems, custom contact fields, and sales dashboards.",
        link: "/services/customerExperience/crm-implementation",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        glowColor: "red"
      },
      {
        icon: Smartphone,
        title: "Omnichannel Engagement",
        description: "Synchronize client web logs and mobile app activities with voice support desks.",
        link: "/services/customerExperience/omnichannel-engagement",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
        glowColor: "blue"
      }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Real Results",
    items: [
      { metric: "50%", title: "Lower Call Volumes", description: "Self-service options resolve basic status and invoice lookups." },
      { metric: "22%", title: "Higher Loyalty Retention", description: "Omnichannel apps keep users engaged and build customer satisfaction." },
      { metric: "30%", title: "Faster Invoice Settlement", description: "Credit card checkout hooks speed up cash collections." }
    ]
  },
  partners: {
    title: "CX Partners",
    subtitle: "Ecosystem Integration",
    items: [
      { name: "Salesforce CRM Platform", icon: Layers, link: "/partners/salesforce" },
      { name: "Stripe Billing Solutions", icon: Shield, link: "/partners/stripe" },
      { name: "Twilio Communications Gateway", icon: HelpCircle, link: "/partners/twilio" }
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
      { question: "How do you secure customer billing profiles in web portals?", answer: "We deploy multi-factor authentication, database row-level security, and audit logs." },
      { question: "Can we connect Salesforce to our custom website forms?", answer: "Yes, we write API integrations to push lead credentials directly into your Salesforce CRM channels." },
      { question: "What is omnichannel support?", answer: "It connects user logs across email, app, and support portals so agents view caller tickets immediately on call intake." }
    ]
  }
};
