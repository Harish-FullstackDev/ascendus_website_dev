import { Code, Terminal, Settings, ShieldCheck, Cpu, Layers } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "digitalEngineering");

export const digitalEngineeringData = {
  hero: {
    title: "Digital Engineering",
    subtitle: "Building custom web applications, APIs, and microservice backends",
    description: "Ascendus develops robust, high-throughput software architectures, migrates monolith apps to containers, and peers database networks cleanly.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Digital Engineering", link: "/services/digitalEngineering" }
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
    title: "Scale Your Software Capabilities",
    description: "Standard template applications fail to support customized business workflows. Building custom software using lightweight backend languages secures high scaling potential.",
    whyItMatters: "Outdated monolith servers crash under traffic spikes, are expensive to host, and slow down engineering release cycles.",
    whySST: "At Ascendus, we write clean TypeScript and Go code, automate unit test checks, and containerize codebases to run identically on any cloud network.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    expertise: [
      { title: "Custom Microservices", description: "Write lightweight APIs using Go or Node.js to resolve queries instantly." },
      { title: "Continuous Integrations", description: "Configure automated code checks, security scans, and deploy pipelines." }
    ],
    industries: [
      { name: "Digital SaaS Providers" },
      { name: "Global E-commerce Retailers" },
      { name: "Fintech Platform Operators" }
    ],
    technologies: [
      { name: "React, Next.js, and Node.js" },
      { name: "Go & REST/gRPC Protocols" },
      { name: "Docker & Kubernetes Clusters" }
    ]
  },
  capabilities: {
    title: "Our Capabilities",
    subtitle: "What We Offer",
    items: [
      {
        icon: Code,
        title: "Custom Software Development",
        description: "Develop containerized web dashboards and backend systems optimized for high user counts.",
        link: "/services/digitalEngineering/custom-software",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: Terminal,
        title: "API & Systems Integration",
        description: "Connect Salesforce CRMs, SAP ERPs, and custom databases securely using webhook queues.",
        link: "/services/digitalEngineering/api-integration",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: Settings,
        title: "Legacy Modernization",
        description: "Refactor old servers and migrate monolith routes to microservices with zero downtime.",
        link: "/services/digitalEngineering/legacy-modernization",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Real Results",
    items: [
      { metric: "10x", title: "More Frequent Releases", description: "CI/CD automates deployments, cutting code update times to minutes." },
      { metric: "40%", title: "Lower Hosting bills", description: "Container servers scale capacity dynamically, reducing idle costs." },
      { metric: "0", title: "Migration Downtime", description: "Proxy routing routes user traffic safely during platform migrations." }
    ]
  },
  partners: {
    title: "Technology Partners",
    subtitle: "Ecosystem Integration",
    items: [
      { name: "Docker Container Systems", icon: Cpu, link: "/partners/docker" },
      { name: "GitHub DevOps Workflows", icon: ShieldCheck, link: "/partners/github" },
      { name: "Google Cloud Platform", icon: Layers, link: "/partners/gcp" }
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
      { question: "What is the Strangler Fig pattern?", answer: "We deploy an API proxy to intercept traffic, routing individual routes from old monolith databases to modern containers one at a time." },
      { question: "How do you guarantee code security?", answer: "We integrate security scanning libraries into DevOps build queues to catch bugs and credential leaks on code check-ins." },
      { question: "Do you write automated tests?", answer: "Yes, we write unit test suites and integration tests checking server response validation dynamically." }
    ]
  }
};
