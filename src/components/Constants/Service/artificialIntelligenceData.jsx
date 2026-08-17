import { Brain, Sparkles, MessageSquareCode, ShieldAlert, Cpu, Eye } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "artificialIntelligence");

export const artificialIntelligenceData = {
  hero: {
    title: "Artificial Intelligence",
    subtitle: "Deploying predictive algorithms and neural models securely",
    description: "Ascendus develops high-fidelity machine learning systems, secure private LLM portals, and RAG knowledge bases to automate cognitive work.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Artificial Intelligence", link: "/services/artificialIntelligence" }
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
    title: "Unlocking Cognitive Scaling",
    description: "AI is moving past simple prompt tools. Modern companies use private vector stores, automated agents, and visual classification systems to optimize margins.",
    whyItMatters: "Standard template models run on public clouds, risking sensitive database exposures and violating enterprise compliance parameters.",
    whySST: "We deploy secure, containerized models on private clouds, fine-tune models on proprietary documents, and match neural systems to clean APIs.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    expertise: [
      { title: "RAG Knowledge Bases", description: "Connect secure LLMs to private databases to serve instant manual and log searches." },
      { title: "Visual Quality Checks", description: "Deploy lightweight convolutional models to inspect assembly line defects." }
    ],
    industries: [
      { name: "Banking & Financial Services" },
      { name: "Industrial Manufacturing" },
      { name: "Digital Health Providers" }
    ],
    technologies: [
      { name: "Vector Databases (Pinecone, pgvector)" },
      { name: "Open LLM Models (Llama, Mistral)" },
      { name: "Python ML (PyTorch, TensorFlow)" }
    ]
  },
  capabilities: {
    title: "Our Capabilities",
    subtitle: "What We Offer",
    items: [
      {
        icon: Brain,
        title: "Predictive Analytics",
        description: "Train time-series regression models to forecast week-over-week inventory and sales trends.",
        link: "/services/artificialIntelligence/predictive-analytics",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: MessageSquareCode,
        title: "Natural Language Processing",
        description: "Build entity extraction models to search leases, bills, and route helpdesk tickets.",
        link: "/services/artificialIntelligence/nlp-solutions",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80"
      },
      {
        icon: Eye,
        title: "Computer Vision",
        description: "Deploy camera feed analysis systems to check item quality and workplace safety wear.",
        link: "/services/artificialIntelligence/computer-vision",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Real Results",
    items: [
      { metric: "60%", title: "Reduction in Document Search Times", description: "Vector search serves instant query answers, skipping manual reviews." },
      { metric: "99.5%", title: "Quality Check Accuracy", description: "Computer vision catches deformities missed by floor inspectors." },
      { metric: "12%", title: "Wastage Cost Cuts", description: "Predictive models align supplies to warehouse demand spikes." }
    ]
  },
  partners: {
    title: "AI Ecosystem Partners",
    subtitle: "Seamless Integration",
    items: [
      { name: "Nvidia AI Enterprise", icon: Cpu, link: "/partners/nvidia" },
      { name: "Hugging Face Models", icon: Sparkles, link: "/partners/huggingface" },
      { name: "AWS Bedrock Platform", icon: ShieldAlert, link: "/partners/aws" }
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
      { question: "How do you protect our private database records?", answer: "We deploy open-weight models inside your cloud perimeter, ensuring data never transits public model APIs." },
      { question: "What is the difference between RAG and fine-tuning?", answer: "RAG connects models to external folders to read documents, while fine-tuning alters neural weights directly to learn custom dialects." },
      { question: "Can AI run on factory floor hardware without internet?", answer: "Yes, we write compressed models compiled to run on Nvidia Jetson devices without internet connections." }
    ]
  }
};
