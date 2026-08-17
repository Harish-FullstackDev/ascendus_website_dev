export const innovationSubServices = {
  "artificial-intelligence": {
    title: "Artificial Intelligence & Generative AI",
    tagline: "Building neural models and search pipelines to drive cognitive automation.",
    description: "Upgrade your apps with AI. We develop custom RAG architectures, model fine-tuning processes, and predictive data pipelines.",
    urgency: {
      challengeText: "Traditional applications cannot parse unstructured documents or adapt to real-time anomalies, creating operational lag.",
      metricHighlight: "80%",
      metricLabel: "of enterprise files are unstructured, hiding critical operational insights",
      accordion: [
        {
          question: "What is Retrieval-Augmented Generation (RAG)?",
          answer: "RAG connects secure LLMs to private databases, allowing the model to answer queries based on actual enterprise documentation."
        }
      ]
    },
    essentials: [
      { title: "Vector Search Setup", description: "Index internal manuals, reports, and logs in high-performance databases." },
      { title: "Fine-Tuning Models", description: "Train open-weight models on proprietary corporate terminology." },
      { title: "Predictive Analytics", description: "Build regression and classification models to forecast trends." }
    ],
    offerings: [
      { title: "Custom Assistant Design", description: "Design search bots that answer internal queries securely." },
      { title: "NLP Document Processing", description: "Extract values, clauses, and key figures from invoices and contracts." },
      { title: "ML Pipeline Deployment", description: "Build and scale data pipelines to serve predictions via APIs." }
    ],
    roi: [
      { metric: "60%", title: "Faster Document Searches", description: "Employees get instant answers from manuals, skipping manual file reading." },
      { metric: "95%", title: "Data Accuracy Rates", description: "Validation algorithms flag discrepancies before saving to ERPs." },
      { metric: "2x", title: "Developer Throughput", description: "Code generators and automated tooling accelerate engineering tasks." }
    ],
    insights: [
      {
        title: "Enterprise RAG Blueprint",
        description: "How to connect private knowledge bases to open-weight LLMs securely.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Document AI",
        description: "How a law firm automated contract risk screening, cutting review times by 70%.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "intelligent-automation": {
    title: "Intelligent Automation",
    tagline: "Merging RPA processes and cognitive AI to automate business operations.",
    description: "Eliminate repetitive typing, copying, and filing. We build software workers that interact with legacy forms, databases, and apps.",
    urgency: {
      challengeText: "Human operations waste thousands of hours copying data between disjointed systems, increasing errors and delays.",
      metricHighlight: "4.5h",
      metricLabel: "is wasted daily by average office workers on manual copy-paste administrative tasks",
      accordion: [
        {
          question: "How do software workers interact with legacy screens?",
          answer: "We use browser automation and API handlers to read fields and submit forms exactly as a human employee would."
        }
      ]
    },
    essentials: [
      { title: "RPA Task Automation", description: "Deploy software bots to handle daily data entry and log generation tasks." },
      { title: "Process Mining Audits", description: "Scan transaction logs to find workflow delays and system gaps." },
      { title: "API Bridge Development", description: "Create secure webhook integrations between legacy databases and modern SaaS." }
    ],
    offerings: [
      { title: "Invoice Processing Setup", description: "Automate OCR reading, invoice matching, and final payment creation." },
      { title: "HR Contract Automation", description: "Automate account provisioning, email dispatch, and form checks." },
      { title: "Report Generation Flows", description: "Bots collect metrics from multiple portals and compile PDF summaries." }
    ],
    roi: [
      { metric: "80%", title: "Reduction in Processing Time", description: "Bots resolve workflows in seconds, preventing order backlog queues." },
      { metric: "100%", title: "Data Input Accuracy", description: "Bots copy characters exactly, reducing transaction input errors to zero." },
      { metric: "24/7", title: "Operational Coverage", description: "Automated schedules operate overnight, preparing files before shift starts." }
    ],
    insights: [
      {
        title: "Process Mining Guide",
        description: "How to reconstruct business operations and map bottlenecks using ERP log traces.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Claims Intake",
        description: "How an insurance giant slashed processing times by 75% using document automation.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "iot": {
    title: "Internet of Things (IoT)",
    tagline: "Connecting sensors, edge nodes, and central data processing engines.",
    description: "Link physical assets to digital dashboards. We design telemetry streams, secure edge connections, and build alarm dashboards.",
    urgency: {
      challengeText: "Industrial equipment breakdowns occur unexpectedly, leading to expensive downtime and uncoordinated repair visits.",
      metricHighlight: "$20k",
      metricLabel: "per hour is the average cost of unscheduled downtime in manufacturing",
      accordion: [
        {
          question: "What is predictive maintenance in IoT?",
          answer: "We analyze temperature, vibration, and usage logs to predict breakdown risks before hardware failures occur."
        }
      ]
    },
    essentials: [
      { title: "Telemetry Ingestion", description: "Build scalable cloud endpoints to collect billions of sensor records." },
      { title: "Edge Computing Setup", description: "Deploy local filters to catch anomalies directly at the sensor node." },
      { title: "Mutual Cryptographic Auth", description: "Secure hardware devices using unique encrypted key handshakes." }
    ],
    offerings: [
      { title: "Predictive Maintenance Setup", description: "Install sensors and regression models to estimate repair schedules." },
      { title: "Real-Time Alarm Maps", description: "Build web dashboards showing physical device coordinates and health." },
      { title: "Fleet Management Integration", description: "Connect vehicle GPS and temperature sensors to tracking maps." }
    ],
    roi: [
      { metric: "25%", title: "Lower Maintenance Costs", description: "Fixing components before failure prevents compound hardware breakage." },
      { metric: "99%", title: "Endpoint Security Rate", description: "Hardware keys block hijackers from spoofing sensor data streams." },
      { metric: "15%", title: "Improved Asset Lifecycles", description: "Continuous health tracking keeps equipment operating at peak levels." }
    ],
    insights: [
      {
        title: "Securing Edge Networks",
        description: "A framework for managing firmware keys and mutual TLS in large sensor arrays.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "IoT Manufacturing Case Study",
        description: "Deploying active vibration sensors across 40 production lines to prevent breakdowns.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "blockchain": {
    title: "Blockchain Solutions",
    tagline: "Designing decentralized ledgers and automated smart contracts.",
    description: "Establish absolute trust in multi-party operations. We build decentralized supply chain ledgers and secure identity validation systems.",
    urgency: {
      challengeText: "Logistics and financial systems lose track of authentic certificates and chain-of-custody, causing fraud.",
      metricHighlight: "$100B",
      metricLabel: "lost globally annually due to counterfeiting and supply chain tracking gaps",
      accordion: [
        {
          question: "How does blockchain improve supply chain trust?",
          answer: "It writes tracking handoffs to an immutable shared database, so no single vendor can alter transaction histories."
        }
      ]
    },
    essentials: [
      { title: "Immutable Ledger Setup", description: "Deploy shared databases using secure private blockchain protocols." },
      { title: "Smart Contract Design", description: "Automate release of funds or release of customs clearances on target triggers." },
      { title: "Tokenized Assets", description: "Represent physical items or digital clearances using unique records." }
    ],
    offerings: [
      { title: "Tracking Ledger Development", description: "Build web apps to log item handoffs, certifications, and temperatures." },
      { title: "DID Identity System", description: "Implement W3C-compliant decentralized identifiers for faster compliance checks." },
      { title: "Escrow Contract Automation", description: "Develop smart contracts that transfer funds instantly when shipments land." }
    ],
    roi: [
      { metric: "100%", title: "Immutable Audit Trails", description: "Entries are cryptographically locked, preventing transaction forgery." },
      { metric: "50%", title: "Fewer Tracking Disputes", description: "A single shared ledger resolves disagreements between suppliers instantly." },
      { metric: "0", title: "Counterfeit Risk", description: "Encrypted product tokens guarantee the authenticity of delivered items." }
    ],
    insights: [
      {
        title: "Decentralized Identifiers Guide",
        description: "How to use W3C standards to secure enterprise identities without databases.",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Shipping Ledger",
        description: "How a global carrier logged customs milestones, saving 3 days in clearance lags.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "cloud-innovation": {
    title: "Cloud Innovation",
    tagline: "Deploying serverless scripts, container configurations, and edge caching.",
    description: "Modernize legacy database servers. We deploy containerized app architectures and auto-scaling cloud databases.",
    urgency: {
      challengeText: "Legacy databases crash under sudden traffic spikes, causing cart abandonment and lost sales.",
      metricHighlight: "40%",
      metricLabel: "of users abandon an application if it takes more than 3 seconds to load",
      accordion: [
        {
          question: "Why should we containerize our software?",
          answer: "It bundles code with all dependencies, ensuring it boots and runs identically on local computers and cloud servers."
        }
      ]
    },
    essentials: [
      { title: "Containerization", description: "Bundle web applications using Docker to ensure environment replication." },
      { title: "Auto-Scaling Policies", description: "Set clouds to dynamically boot more servers during traffic spikes." },
      { title: "Edge Caching", description: "Store static web page files closer to global user locations to lower lag." }
    ],
    offerings: [
      { title: "Legacy Server Modernization", description: "Split monolithic codebases into isolated serverless functions." },
      { title: "CI/CD Deployment Build", description: "Automate code building, testing, and cloud container deployments." },
      { title: "Multi-Region Cloud Peering", description: "Peer databases across regions to keep user sessions synchronized." }
    ],
    roi: [
      { metric: "70%", title: "Reduction in Page Load Lag", description: "Edge caching serves files instantly, improving user conversion rates." },
      { metric: "35%", title: "Lower Hosting Bills", description: "Auto-scaling scales down server count during low-traffic night hours." },
      { metric: "99.99%", title: "Platform Availability", description: "Multi-region setups keep platforms online even during server failures." }
    ],
    insights: [
      {
        title: "Serverless scaling Blueprint",
        description: "How to manage database connection pools and avoid cold start lags in serverless apps.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Server Migration",
        description: "Migrating an e-commerce platform to serverless container queues, handling 40k peak users.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "consulting": {
    title: "Innovation Consulting",
    tagline: "Evaluating emerging tech and creating roadmaps.",
    description: "Identify value areas in next-gen tech. We review configurations, build sandbox environments, and test proof-of-concepts.",
    urgency: {
      challengeText: "Adopting emerging technologies without structured validation leads to expensive failed pilots and wasted funding.",
      metricHighlight: "70%",
      metricLabel: "of enterprise technology pilots fail to scale beyond initial prototype stages",
      accordion: [
        {
          question: "How do you validate a tech concept before deployment?",
          answer: "We construct lightweight sandbox environments, simulate production traffic, and measure latency and accuracy metrics."
        }
      ]
    },
    essentials: [
      { title: "Emerging Tech Auditing", description: "Evaluate how AI, IoT, or blockchain could improve your margins." },
      { title: "Sandbox Testing", description: "Build isolated lab environments to test third-party APIs and models safely." },
      { title: "POC Development", description: "Build custom lightweight prototypes to validate workflow feasibility." }
    ],
    offerings: [
      { title: "Technology Risk Review", description: "Map compliance risks, licensing bills, and data sovereignty limits." },
      { title: "Sandbox Architecture Setup", description: "Construct isolated environments for developer experimentation." },
      { title: "Adoption Roadmap", description: "Prioritized steps to scale validated prototypes to active production channels." }
    ],
    roi: [
      { metric: "90%", title: "Reduction in Pilot Failures", description: "Structured validation weeds out non-viable systems early." },
      { metric: "50%", title: "Lower Integration Spending", description: "Sandbox learnings prevent structural design mistakes in production." },
      { metric: "100%", title: "Board-Level Clarity", description: "Clear POC performance reports justify technology investments." }
    ],
    insights: [
      {
        title: "Ascendus Sandbox Blueprint",
        description: "How to structure sandbox labs to test APIs and models without exposing private user databases.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Smart Meter POC",
        description: "Building an IoT prototype to validate sensor tracking, preceding a massive rollout.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
