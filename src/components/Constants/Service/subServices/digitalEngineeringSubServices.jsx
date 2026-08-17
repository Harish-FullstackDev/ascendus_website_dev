export const digitalEngineeringSubServices = {
  "custom-software": {
    title: "Custom Software Development",
    tagline: "Building high-performance, containerized web applications and backend systems.",
    description: "Build custom digital products. We develop modern web frontends, backend APIs, and database structures optimized for load.",
    urgency: {
      challengeText: "Generic off-the-shelf software solutions fail to adapt to custom business rules, forcing awkward manual workarounds.",
      metricHighlight: "99.9%",
      metricLabel: "uptime rates achieved by custom containerized applications",
      accordion: [
        {
          question: "What languages do you write backends in?",
          answer: "We select languages matching performance targets, using Go or Node.js for high-throughput APIs."
        }
      ]
    },
    essentials: [
      { title: "React Frontend Design", description: "Build responsive, fast web interfaces using Next.js or React." },
      { title: "Go Backend Engineering", description: "Develop lightweight APIs that process thousands of queries per second." },
      { title: "Database Configurations", description: "Write efficient schemas using PostgreSQL or MongoDB databases." }
    ],
    offerings: [
      { title: "Web Application Development", description: "Build custom customer portals or SaaS platforms." },
      { title: "High-Performance APIs", description: "Develop backends to coordinate data across apps." },
      { title: "Unit Testing Automation", description: "Write test suites checking code correctness on all check-ins." }
    ],
    roi: [
      { metric: "100%", title: "Custom Logic Fit", description: "Software aligns directly to your company workflows, removing workarounds." },
      { metric: "40%", title: "Lower API Lags", description: "Optimized backend languages resolve queries faster than templates." },
      { metric: "0", title: "License Fees", description: "Owning your custom software code eliminates monthly SaaS subscription costs." }
    ],
    insights: [
      {
        title: "Microservices Architecture Guide",
        description: "How to structure Go backends and manage database connections at scale.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: SaaS Backend Build",
        description: "Rebuilding a retail order database using Go, cutting database overhead by 40%.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "api-integration": {
    title: "API & Systems Integration",
    tagline: "Connecting CRM databases, ERP systems, and web apps securely.",
    description: "Bridge system gaps. We write webhook handlers, peer API servers, and configure automated data synchronization flows.",
    urgency: {
      challengeText: "Leaving customer records trapped in CRMs and billing records in ERPs forces manual typing and introduces errors.",
      metricHighlight: "90%",
      metricLabel: "reduction in manual data entries reached by automating API connections",
      accordion: [
        {
          question: "How do you handle API failure states?",
          answer: "We implement queuing pools and automatic retry schedules to prevent data dropouts."
        }
      ]
    },
    essentials: [
      { title: "API Bridge Development", description: "Write server handlers to route events between CRM and ERP systems." },
      { title: "OAuth Token Validation", description: "Secure API connections using standard key validation policies." },
      { title: "Webhook Queuing Systems", description: "Implement brokers (e.g. RabbitMQ) to buffer traffic spikes." }
    ],
    offerings: [
      { title: "Salesforce ERP Integration", description: "Synchronize client signatures and invoice status automatically." },
      { title: "OAuth Security Setup", description: "Configure key management policies to protect API links." },
      { title: "Webhook Logging Setup", description: "Track API request volumes, response times, and failure codes." }
    ],
    roi: [
      { metric: "100%", title: "Real-Time Sync Rates", description: "Database updates trigger hooks instantly, keeping profiles aligned." },
      { metric: "80%", title: "Fewer Entry Inconsistencies", description: "Automated routing removes human typos and billing duplication risks." },
      { metric: "0", title: "Dropped Webhook Logs", description: "Traffic queuing buffers load peaks, preventing API dropouts." }
    ],
    insights: [
      {
        title: "Securing Enterprise APIs",
        description: "Best practices in OAuth setups, rate limits, and monitoring gateways.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: CRM Peering",
        description: "How Ascendus peered Salesforce with a custom billing system, syncing 10,000 users.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "legacy-modernization": {
    title: "Legacy Modernization",
    tagline: "Migrating old servers to modern microservices with zero downtime.",
    description: "Replace old servers safely. We containerize code, rewrite monolith routes, and manage Strangler Fig migrations.",
    urgency: {
      challengeText: "Operating outdated monolith servers causes system crashes, security gaps, and slows engineering progress.",
      metricHighlight: "50%",
      metricLabel: "lower database hosting costs achieved by refactoring monolith apps to containers",
      accordion: [
        {
          question: "What is the Strangler Fig migration pattern?",
          answer: "We deploy a routing proxy to forward old routes to modern containers one by one until the monolith is replaced."
        }
      ]
    },
    essentials: [
      { title: "Monolith Decoupling", description: "Isolate monolith code directories into clean container configurations." },
      { title: "Routing Proxy Setup", description: "Install routing proxies (e.g. Nginx) to forward user calls safely." },
      { title: "Database Refactoring", description: "Split unified database tables into database lanes for microservices." }
    ],
    offerings: [
      { title: "Strangler Fig Setup", description: "Deploy proxies and migrate server routes to containers incrementally." },
      { title: "Legacy Code Refactoring", description: "Convert legacy code syntax into Go or clean TypeScript." },
      { title: "Environment Rebuild Build", description: "Write Terraform files to provision environments identically." }
    ],
    roi: [
      { metric: "50%", title: "Lower Hosting Bills", description: "Container servers dynamically scale compute, dropping idle costs." },
      { metric: "100%", title: "Zero Migration Downtime", description: "Proxy routing shifts user traffic safely, avoiding outage windows." },
      { metric: "35%", title: "Faster Code Releases", description: "Microservices let development groups deploy updates independently." }
    ],
    insights: [
      {
        title: "Modern Monolith Decoupling",
        description: "A developer guide on splitting database tables and routes during migration.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Monolith Migration",
        description: "Migrating a legacy retail catalog server to Go microservices with zero service lag.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
