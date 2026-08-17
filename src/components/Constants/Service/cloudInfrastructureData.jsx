import { Cloud, Layers, Terminal, Shield, RefreshCw, Cpu } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "cloudInfrastructure");

export const cloudInfrastructureData = {
  hero: {
    title: "Cloud & Infrastructure",
    subtitle: "Scaling computing nodes, pipelines, and peering networks",
    description: "Ascendus provisions secure multi-region clouds, designs automated DevOps pipelines, and peers on-premise networks with public clusters.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Cloud & Infrastructure", link: "/services/cloudInfrastructure" }
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
    title: "Sustaining High Availability Platforms",
    description: "Modern enterprise systems require scalable cloud clusters, auto-scaling parameters, and secure transit gateways to protect databases.",
    whyItMatters: "Manual server adjustments and untracked API credentials create platform outages and introduce code security exposures.",
    whySST: "At Ascendus, we write Infrastructure as Code templates, automate code building pipelines, and configure secure private networks to shield client assets.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    expertise: [
      { title: "Infrastructure as Code", description: "Write reusable Terraform files to scale compute setups cleanly." },
      { title: "Redundant Peering Links", description: "Configure private IPsec VPN tunnels to peer databases." }
    ],
    industries: [
      { name: "SaaS Software Vendors" },
      { name: "Retail & Multi-site POS Fleets" },
      { name: "Global Financial Services" }
    ],
    technologies: [
      { name: "Terraform & Ansible" },
      { name: "Kubernetes (EKS, GKE)" },
      { name: "AWS, Azure, and Google Cloud" }
    ]
  },
  capabilities: {
    title: "Our Capabilities",
    subtitle: "What We Offer",
    items: [
      {
        icon: Cloud,
        title: "Cloud Migration",
        description: "Replicate local databases and virtual machines to cloud nodes with zero database downtime.",
        link: "/services/cloudInfrastructure/cloud-migration",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        glowColor: "blue"
      },
      {
        icon: Terminal,
        title: "DevOps & Automation",
        description: "Automate code checks, database backups, and environment deployments using CI/CD.",
        link: "/services/cloudInfrastructure/devops-automation",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=600&q=80",
        glowColor: "purple"
      },
      {
        icon: Layers,
        title: "Hybrid Cloud Solutions",
        description: "Peer local banking servers with public cloud portals using secure VPN tunnels.",
        link: "/services/cloudInfrastructure/hybrid-cloud",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        glowColor: "green"
      }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Real Results",
    items: [
      { metric: "65%", title: "Faster Deploys", description: "CI/CD automates validation, skipping manual release tasks." },
      { metric: "30%", title: "Hosting Bill Cuts", description: "Auto-scaling rules drop idle server capacities overnight." },
      { metric: "99.99%", title: "Uptime Guarantees", description: "Multi-region configurations maintain portal availability." }
    ]
  },
  partners: {
    title: "Infrastructure Partners",
    subtitle: "Ecosystem Integration",
    items: [
      { name: "Amazon Web Services", icon: Cloud, link: "/partners/aws" },
      { name: "HashiCorp Terraform", icon: Terminal, link: "/partners/hashicorp" },
      { name: "Azure Cloud Solutions", icon: Shield, link: "/partners/azure" }
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
      { question: "What is Infrastructure as Code (IaC)?", answer: "It allows engineers to configuration and deploy servers using code files, ensuring testing and production configurations remain identical." },
      { question: "How do you help us optimize monthly cloud hosting bills?", answer: "We scan computing nodes, configure auto-scaling rules, and purge unattached disks to cut idle spending." },
      { question: "Can you help us build container networks?", answer: "Yes, we set up and manage Kubernetes clusters (AWS EKS or Azure AKS) and configure ingress controllers." }
    ]
  }
};
