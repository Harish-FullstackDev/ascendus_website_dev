export const customerExperienceSubServices = {
  "customer-portals": {
    title: "Customer Portals & Apps",
    tagline: "Building self-service customer dashboards and mobile applications.",
    description: "Empower your customers. We design portals allowing users to view billing history, track tickets, and adjust configurations.",
    urgency: {
      challengeText: "Requiring customers to call phone lines for basic invoice downloads or status queries blocks call center agents.",
      metricHighlight: "50%",
      metricLabel: "lower call volumes achieved by deploying self-service customer portals",
      accordion: [
        {
          question: "How do you secure customer data in portals?",
          answer: "We deploy multi-factor authentication, database row-level security, and audit trails."
        }
      ]
    },
    essentials: [
      { title: "React Dashboard Build", description: "Design fast web portals showing customer statements and settings." },
      { title: "MFA Authentication Setup", description: "Configure secure logins using OTP, SMS, or authentication apps." },
      { title: "Row-Level Security", description: "Configure databases so users only query their own client records." }
    ],
    offerings: [
      { title: "Customer Portal Development", description: "Build custom billing, settings, and profile web pages." },
      { title: "Mobile App Development", description: "Create iOS and Android apps showing client dashboards." },
      { title: "Stripe Payment Integration", description: "Connect payment gateways to allow self-service invoice settlement." }
    ],
    roi: [
      { metric: "50%", title: "Fewer Customer Support Calls", description: "Self-service options resolve basic status and invoice lookups." },
      { metric: "30%", title: "Faster Invoice Payments", description: "Online credit card payment options speed up customer collections." },
      { metric: "95%", title: "Customer Satisfaction Rate", description: "Users prefer instant portal dashboards over calling support queues." }
    ],
    insights: [
      {
        title: "Customer Portal Security Guide",
        description: "Best practices for row-level database separation and customer file hosting security.",
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Insurer Portal Redesign",
        description: "How Ascendus built an insurance client portal, lowering call center volumes by 50%.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "crm-implementation": {
    title: "CRM Implementation",
    tagline: "Deploying and customizing Salesforce and CRM systems for teams.",
    description: "Align client profiles. We integrate Salesforce, connect billing records, and write sales dashboard metrics.",
    urgency: {
      challengeText: "Operating sales pipelines across disjointed calendars and spreadsheets causes lost leads and slow deals.",
      metricHighlight: "25%",
      metricLabel: "higher sales close rates achieved by teams adopting unified CRM records",
      accordion: [
        {
          question: "Can we connect our CRM to custom websites?",
          answer: "Yes, we write API hooks to push web form leads directly into your CRM pipelines."
        }
      ]
    },
    essentials: [
      { title: "Salesforce Configuration", description: "Configure custom contact pages, sales stages, and dashboard metrics." },
      { title: "Lead Ingestion Pipelines", description: "Connect website forms directly to sales pipeline stages." },
      { title: "Data Migration Audits", description: "Migrate client lists from legacy files without duplicating cards." }
    ],
    offerings: [
      { title: "CRM Customization Build", description: "Create layouts, field categories, and rules matching sales team practices." },
      { title: "Lead Capture Automations", description: "Bots categorize and route incoming contact leads dynamically." },
      { title: "Sales Dashboard Setup", description: "Build Power BI charts showing team closure rates and lead counts." }
    ],
    roi: [
      { metric: "25%", title: "Higher Sales Close Rates", description: "Clean client tracking prevents leads from dropping out of pipelines." },
      { metric: "40%", title: "Fewer Administrative Hours", description: "Automated logging saves sales reps from manually typing contact notes." },
      { metric: "100%", title: "Pipeline Transparency", description: "Leadership views sales forecasts and team activity instantly." }
    ],
    insights: [
      {
        title: "CRM Customization Blueprint",
        description: "How to structure database fields and API hooks to connect website forms to CRMs.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Telecom CRM Peer",
        description: "Consolidating 6 regional telecom billing directories to Salesforce for unified support.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "omnichannel-engagement": {
    title: "Omnichannel Engagement",
    tagline: "Peering chat engines, email alerts, and customer session trackers.",
    description: "Keep user sessions synchronized. We connect mobile app clicks, website inputs, and phone support directories.",
    urgency: {
      challengeText: "Forcing customers to repeat their profiles and issues when switching from chat to call lines causes extreme user frustration.",
      metricHighlight: "90%",
      metricLabel: "customer retention rates reported by brands with omnichannel support systems",
      accordion: [
        {
          question: "What is omnichannel synchronization?",
          answer: "It passes a customer's active web or app logs to support agents automatically when they escalate to voice calls."
        }
      ]
    },
    essentials: [
      { title: "Unified Session Tracking", description: "Log customer interactions across web, mobile, and support queues." },
      { title: "Chatbot Voice Integrations", description: "Peer cognitive chatbots with voice center software engines." },
      { title: "Dynamic Alert Systems", description: "Trigger push notifications or emails based on customer portal clicks." }
    ],
    offerings: [
      { title: "Omnichannel Architecture Design", description: "Design peering networks and database caches to track sessions." },
      { title: "Customer Chat Integration", description: "Deploy chat widgets that sync customer logs with CRM profiles." },
      { title: "Twilio Call Peering Setup", description: "Peer call center gateways to display customer web tickets on call intake." }
    ],
    roi: [
      { metric: "90%", title: "Customer Retention Rates", description: "Intuitive cross-channel flows build client confidence and loyalty." },
      { metric: "40%", title: "Lower Call Resolutions", description: "Agents view caller web activity logs instantly, skipping diagnostic questions." },
      { metric: "0", title: "Dropped Session Lags", description: "Database caches keep user portal sessions active when switching device nodes." }
    ],
    insights: [
      {
        title: "Omnichannel Engine Architectures",
        description: "A technical guide on caching, data streaming, and synchronizing customer profiles across networks.",
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Hotel App Rollout",
        description: "How a hotel fleet automated mobile check-ins and room keys, reducing desk queues by 70%.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
