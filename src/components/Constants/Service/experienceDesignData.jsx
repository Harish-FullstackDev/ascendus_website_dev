import { Palette, Sparkles, Users, Compass, Layers, MonitorPlay } from "lucide-react";
import { insightsData } from "./insightsData";

const sstInsights = insightsData.filter(item => item.service === "experienceDesign");

export const experienceDesignData = {
  hero: {
    title: "Experience Design Services",
    subtitle: "Designing intuitive digital journeys",
    description: "Ascendus helps organizations turn complex products and services into clear, human-centered experiences that increase adoption, trust, and delight across every interaction.",
    backgroundImage: "/SolutionPage/ConsulationBg.png",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", link: "/services" },
      { label: "Experience Design", link: "/services/experienceDesign" }
    ],
    primaryCta: { label: "Talk to an Expert", link: "#contact" },
    secondaryCta: { label: "Explore the Approach", link: "#overview" }
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
    title: "Why Experience Design Matters",
    description: "Great experiences simplify complexity. We help teams shape digital journeys that are purposeful, accessible, and aligned to business goals so users can engage with confidence and ease.",
    image: "/ServicePage/HANA.png",
    whyItMatters: "Customers judge brands by how effortless their experiences feel. Strong design reduces friction, sharpens clarity, and improves conversion across digital products and services.",
    whySST: "At Ascendus, we blend strategy, interaction design, systems thinking, and implementation expertise to make your experience feel thoughtful from the first touchpoint to the last.",
    expertise: [
      "Customer journey mapping",
      "Service design and UX strategy",
      "Wireframes, prototyping, and design systems",
      "Accessibility and content clarity"
    ],
    industries: ["Retail", "Healthcare", "Financial Services", "Manufacturing", "Public Sector"],
    technologies: [
      { name: "Design Systems", icon: Layers },
      { name: "UX Research", icon: Users },
      { name: "Prototyping", icon: MonitorPlay },
      { name: "Service Design", icon: Compass },
      { name: "Visual Design", icon: Palette }
    ]
  },
  capabilities: {
    title: "Experience Design Capabilities",
    subtitle: "What We Deliver",
    items: [
      { icon: Compass, title: "Journey Mapping", description: "Identify friction points and design better end-to-end experiences that align business and user goals.", link: "/services/experienceDesign/journey-mapping", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
      { icon: Users, title: "User Research", description: "Gather insight through interviews, observation, and feedback to shape intuitive decisions.", link: "/services/experienceDesign/user-research", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
      { icon: MonitorPlay, title: "Interaction Design", description: "Create polished interfaces and interactions that feel natural, intuitive, and efficient.", link: "/services/experienceDesign/interaction-design", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
      { icon: Layers, title: "Design Systems", description: "Establish scalable design foundations that keep products consistent and easy to evolve.", link: "/services/experienceDesign/design-systems", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
      { icon: Sparkles, title: "Service Design", description: "Reimagine services and touchpoints to make experiences more connected and seamless.", link: "/services/experienceDesign/service-design", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
      { icon: Palette, title: "Experience Strategy", description: "Turn customer insight into a clear blueprint for experience innovation and growth.", link: "/services/experienceDesign/experience-strategy", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  metrics: {
    title: "Business Impact",
    subtitle: "Outcomes We Help Create",
    items: [
      { value: "35%", label: "Higher UX Adoption", description: "Making products easier to understand and use from the start." },
      { value: "25%", label: "Faster Time to Value", description: "Reducing friction in onboarding and execution journeys." },
      { value: "40%", label: "Lower Support Demand", description: "Creating clearer interfaces and service flows that reduce confusion." },
      { value: "2x", label: "Stronger Customer Engagement", description: "Improving satisfaction across digital and service interactions." }
    ]
  },
  partners: {
    title: "Design and Delivery Partners",
    subtitle: "Collaborating with Product and Brand Teams",
    items: [
      { name: "Product Teams", icon: Users, link: "/partners/product" },
      { name: "Digital Leaders", icon: Compass, link: "/partners/digital" },
      { name: "CX Leaders", icon: Sparkles, link: "/partners/cx" },
      { name: "Brand Teams", icon: Palette, link: "/partners/brand" },
      { name: "Experience Labs", icon: MonitorPlay, link: "/partners/experience-labs" },
      { name: "Innovation Groups", icon: Layers, link: "/partners/innovation" }
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
      { question: "What kinds of experiences do you design?", answer: "We design customer journeys, digital products, service touchpoints, portals, and internal workflows that need clarity and usability." },
      { question: "Do you work with existing teams?", answer: "Yes. We partner with product teams, operations, content, and leadership to improve the experience without disrupting delivery." },
      { question: "How do you measure success?", answer: "We align metrics around adoption, task completion, satisfaction, efficiency, and business outcomes from the outset." }
    ]
  }
};
