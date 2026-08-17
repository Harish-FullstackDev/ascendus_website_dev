export const cloudInfrastructureSubServices = {
  "cloud-migration": {
    title: "Cloud Migration",
    tagline: "Moving legacy databases and server workloads to AWS, Azure, or Google Cloud securely.",
    description: "Unshackle from local servers. We manage the secure migration of databases and file systems to high-performance clouds.",
    urgency: {
      challengeText: "Managing local data servers introduces hardware failures, cooling costs, and system security risks.",
      metricHighlight: "99.99%",
      metricLabel: "uptime rates achieved by migrating databases to redundant clouds",
      accordion: [
        {
          question: "How do you prevent data loss during migration?",
          answer: "We set up real-time database replication tunnels and execute strict check-sum validation scans."
        }
      ]
    },
    essentials: [
      { title: "Database Replication", description: "Replicate database records continuously to cloud servers." },
      { title: "Sizing Auditing", description: "Audit legacy compute usages to select the correct cloud instances." },
      { title: "Traffic Peering", description: "Configure secure peering segments to route data securely." }
    ],
    offerings: [
      { title: "SQL to Cloud Migration", description: "Migrate database tables to managed services like AWS RDS or Azure SQL." },
      { title: "Monolith Containerization", description: "Wrap codebases into container configurations to boot anywhere." },
      { title: "Data Storage Transition", description: "Move historical log files to cheap cloud storage buckets." }
    ],
    roi: [
      { metric: "30%", title: "Lower Hosting Expenses", description: "Managed databases scale down resource sizes, cutting overhead bills." },
      { metric: "100%", title: "Redundancy Safety", description: "Database copying across multiple zones prevents data loss risks." },
      { metric: "0", title: "Hardware Maintenance", description: "Cloud providers handle server drives, cooling systems, and power logs." }
    ],
    insights: [
      {
        title: "Enterprise Cloud Migration Blueprint",
        description: "How to migrate 50TB of database records to cloud server pools with zero downtime.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: SQL Server Migration",
        description: "How Ascendus migrated a logistics database to Azure SQL, boosting query speeds by 40%.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "devops-automation": {
    title: "DevOps & Automation",
    tagline: "Structuring automated code builds, testing, and container deployment flows.",
    description: "Speed up engineering delivery. We implement CI/CD pipelines, Terraform settings, and automated testing logs.",
    urgency: {
      challengeText: "Deploying code manually causes build errors, configuration mismatches, and security key leaks.",
      metricHighlight: "65%",
      metricLabel: "faster code release cycles achieved by adopting DevOps pipeline structures",
      accordion: [
        {
          question: "What is Infrastructure as Code (IaC)?",
          answer: "It defines cloud servers, databases, and peering segments using code files (e.g. Terraform) to ensure environments remain identical."
        }
      ]
    },
    essentials: [
      { title: "CI/CD Pipeline Setup", description: "Automate code compilation, testing, and formatting checks on check-in." },
      { title: "Infrastructure as Code", description: "Write Terraform files to provision and update cloud servers cleanly." },
      { title: "Vulnerability Scanning", description: "Integrate static analysis tools to flag security flaws during builds." }
    ],
    offerings: [
      { title: "GitHub Actions Config", description: "Configure automated workflows to build and test applications." },
      { title: "Terraform Environment Build", description: "Write reusable cloud templates for development and production." },
      { title: "Kubernetes Cluster Setup", description: "Configure container clusters with auto-scaling rules." }
    ],
    roi: [
      { metric: "60%", title: "Fewer Build Failures", description: "Automated checks catch code errors before deploy queues start." },
      { metric: "10x", title: "More Frequent Deploys", description: "Deploying updates takes minutes instead of overnight weekend sprints." },
      { metric: "0", title: "Credential Leaks", description: "Storing keys in secure cloud vault managers prevents code exposure." }
    ],
    insights: [
      {
        title: "Scaling Terraform Blueprint",
        description: "Best practices for managing Terraform remote states and backend locks in teams.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Pipeline Overhaul",
        description: "How Ascendus consolidated 14 development pipelines, cutting build lag by 65%.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "hybrid-cloud": {
    title: "Hybrid Cloud Solutions",
    tagline: "Connecting local databases with public clouds to keep data pipelines secure.",
    description: "Unify local and public environments. We connect servers with high-performance public compute lines securely.",
    urgency: {
      challengeText: "Keeping all databases on-premise limits scaling, while moving everything to public clouds violates compliance policies.",
      metricHighlight: "85%",
      metricLabel: "of enterprises operate hybrid cloud models to balance compliance and scale requirements",
      accordion: [
        {
          question: "How do you peer on-premise servers with clouds?",
          answer: "We install dedicated IPsec VPN tunnels, secure transit gateways, and load balancers."
        }
      ]
    },
    essentials: [
      { title: "IPsec VPN Peering", description: "Setup encrypted tunnels connecting local office servers to cloud VPCs." },
      { title: "Load Balancing", description: "Route web traffic dynamically between local databases and cloud compute nodes." },
      { title: "Transit Gateway Config", description: "Connect multiple cloud networks and local paths to a single hub." }
    ],
    offerings: [
      { title: "Hybrid Network Architecture", description: "Design peering segments and firewall routing rules." },
      { title: "Distributed Database Peering", description: "Setup data caches to keep local databases synced with cloud apps." },
      { title: "Direct Connect Integration", description: "Configure high-throughput fiber cables to bypass the public web." }
    ],
    roi: [
      { metric: "100%", title: "Compliance Retention", description: "Sensitive customer records stay on-premise, satisfying regulators." },
      { metric: "2x", title: "Peak Scaling Capacity", description: "Cloud servers scale dynamically during traffic spikes, keeping portals online." },
      { metric: "0", title: "Network Exposure", description: "Private peering segments hide traffic from public internet hackers." }
    ],
    insights: [
      {
        title: "Hybrid Networking Architectures",
        description: "How to configure private VPC peering and routing tables in hybrid cloud environments.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Hybrid Bank Setup",
        description: "Peering local bank database networks with secure Azure portals to run customer apps.",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
