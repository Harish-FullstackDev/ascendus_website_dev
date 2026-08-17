import { Database, LineChart, ShieldCheck, Settings, Layers } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "dataIntelligence");

export const dataIntelligenceData = {
  hero: {
    title: "Data & Intelligence",
    subtitle: "Consolidating databases and compiling real-time business dashboards",
    description: "Ascendus structures high-performance data lakehouses, creates ETL pipelines, and designs Power BI databases to support smart business steering.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Data & Intelligence", link: "/services/dataIntelligence" }
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
    title: "Make Decisions Based on Real-Time Data",
    description: "Steering companies using monthly spreadsheets or disjointed databases causes delay. Unifying records in cloud lakehouses reveals immediate operational trends.",
    whyItMatters: "Bad data quality and uncatalogued tables create inaccurate business reports and lead to strategic errors.",
    whySST: "At Ascendus, we design clean data models, build automated ETL cleaning pipelines, and setup secure data catalogs to protect database access.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    expertise: [
      { title: "Lakehouse Implementations", description: "Design cloud storage schemas using Snowflake or Databricks databases." },
      { title: "Power BI Dashboards", description: "Write formulas to compile sales and operations indicators in real time." }
    ],
    industries: [
      { name: "Digital Telecommunication Networks" },
      { name: "Retail & E-commerce Operations" },
      { name: "Global Investment Portfolios" }
    ],
    technologies: [
      { name: "Snowflake & Databricks" },
      { name: "Apache Spark & Kafka" },
      { name: "Power BI & Tableau" }
    ]
  },
  capabilities: {
    title: "Our Capabilities",
    subtitle: "What We Offer",
    items: [
      {
        icon: Database,
        title: "Data Warehousing",
        description: "Build cloud storage lakehouses and configure pipelines to clean database records.",
        link: "/services/dataIntelligence/data-warehousing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: LineChart,
        title: "Business Intelligence & Reporting",
        description: "Create interactive visual dashboards that refresh automatically as transactions occur.",
        link: "/services/dataIntelligence/bi-reporting",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: ShieldCheck,
        title: "Data Governance & Quality",
        description: "Set metadata catalogs, track lineages, and mask sensitive customer data columns.",
        link: "/services/dataIntelligence/data-governance",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Real Results",
    items: [
      { metric: "90%", title: "Faster Query Speeds", description: "Lakehouse schemas resolve dense lookups in seconds." },
      { metric: "80%", title: "Fewer Manual Reports", description: "Automated aggregation flows replace spreadsheet tasks." },
      { metric: "5x", title: "Faster Strategic Decisions", description: "Real-time dashboards show operational spikes instantly." }
    ]
  },
  partners: {
    title: "Data Partners",
    subtitle: "Ecosystem Integration",
    items: [
      { name: "Snowflake Platform", icon: Database, link: "/partners/snowflake" },
      { name: "Databricks Unified Analytics", icon: Layers, link: "/partners/databricks" },
      { name: "Microsoft Power BI", icon: Settings, link: "/partners/powerbi" }
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
      { question: "What is a data lakehouse?", answer: "It combines the structure and data management features of a data warehouse with the low-cost object storage of a data lake." },
      { question: "How do you ensure data security in Snowflake?", answer: "We enforce role-based access rules, configure column-level masking, and encrypt data pools both in transit and at rest." },
      { question: "Can Power BI dashboards handle real-time streaming?", answer: "Yes, we connect Power BI to event routers (like Kafka) to update graphs dynamically as transactions occur." }
    ]
  }
};
