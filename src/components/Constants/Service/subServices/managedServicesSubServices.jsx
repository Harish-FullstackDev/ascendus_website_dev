export const managedServicesSubServices = {
  "application-monitoring": {
    title: "Application Monitoring",
    tagline: "Proactive, round-the-clock systems observation to prevent business downtime.",
    description: "Detect infrastructure and software issues before they impact your users. We install continuous application and server health checks with automated alerting dashboards.",
    urgency: {
      challengeText: "Relying on user complaints to detect system outages leads to lost revenue, bad reviews, and stressed development teams.",
      metricHighlight: "90%",
      metricLabel: "faster incident detection times with automated monitoring systems",
      accordion: [
        {
          question: "How does proactive monitoring prevent downtime?",
          answer: "We track metrics like CPU usage and API speeds, alerting engineers to abnormalities before an outage occurs."
        },
        {
          question: "What platforms do we monitor?",
          answer: "We support cloud databases, custom web apps, integrations, and server environments across AWS, Azure, and Google Cloud."
        },
        {
          question: "Can we track custom business transactions?",
          answer: "Yes. We track transaction flows, ensuring that checkouts and data syncs run successfully."
        }
      ]
    },
    essentials: [
      {
        title: "24/7 Metric Audits",
        description: "Continually check systems response times, memory loads, and data errors."
      },
      {
        title: "Intelligent Alert Thresholds",
        description: "Set alerts based on historical behavior to minimize warning noise and identify real incidents."
      },
      {
        title: "Automated Reporting",
        description: "Provide dashboard reports showing system health and uptime rates for leadership."
      }
    ],
    offerings: [
      {
        title: "Systems Health Dashboards",
        description: "Build consolidated performance views using Datadog, Dynatrace, or cloud logs."
      },
      {
        title: "Synthetic User Checks",
        description: "Script automated checks that test forms, checkouts, and logins every minute."
      },
      {
        title: "Incident Escalation Setup",
        description: "Connect system alerts directly to on-call schedules and support ticketing systems."
      }
    ],
    roi: [
      {
        metric: "99.9%",
        title: "High System Uptime",
        description: "Proactive issue resolution prevents outages and keeps business systems available."
      },
      {
        metric: "50%",
        title: "Shorter Resolution Times",
        description: "Detailed error logs and alert details help engineers find and fix bugs quickly."
      },
      {
        metric: "30%",
        title: "Reduced Operations Load",
        description: "Automated system diagnostics resolve basic checks, saving engineer resources."
      }
    ],
    insights: [
      {
        title: "Building Resilient Cloud Monitoring",
        description: "Best practices for dashboard architecture, alert rules, and logging in hybrid setups.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Reducing E-Commerce Outages",
        description: "How a retail brand cut shopping cart errors by 70% using synthetic transaction monitoring.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "security-compliance": {
    title: "Security & Compliance",
    tagline: "Securing system boundaries and matching strict compliance protocols.",
    description: "Protect client files and keep your systems aligned with safety regulations. We manage continuous policy enforcement, system patches, and access audits to mitigate digital risks.",
    urgency: {
      challengeText: "Systems vulnerabilities and compliance failures result in costly data breaches, legal fines, and lost brand trust.",
      metricHighlight: "100%",
      metricLabel: "adherence to SOC2, GDPR, and ISO security frameworks",
      accordion: [
        {
          question: "How do we secure application environments?",
          answer: "We deploy firewalls, mandate multi-factor authorization, encrypt database files, and run daily vulnerability scans."
        },
        {
          question: "How is compliance managed?",
          answer: "We configure policy compliance tools that automatically audit server setups against standards, flagging deviations."
        },
        {
          question: "Can we support incident response tasks?",
          answer: "Yes. We maintain active monitoring plans and run drill exercises to prepare for potential incidents."
        }
      ]
    },
    essentials: [
      {
        title: "Vulnerability Scanning",
        description: "Run automated daily audits across system packages and firewalls to detect vulnerability risks."
      },
      {
        title: "Compliance Governance",
        description: "Enforce security settings, database access controls, and logging rules automatically."
      },
      {
        title: "Emergency Patching Rules",
        description: "Deploy automated routines to update systems when critical security vulnerabilities are found."
      }
    ],
    offerings: [
      {
        title: "Compliance Assessment",
        description: "Audit current digital environments against SOC2, GDPR, HIPAA, and ISO guidelines."
      },
      {
        title: "Identity & Access Audits",
        description: "Review system access permissions to enforce least-privilege security models."
      },
      {
        title: "Security Operations Support",
        description: "Provide incident monitoring, threat analysis, and firewall configuration services."
      }
    ],
    roi: [
      {
        metric: "0",
        title: "Data Integrity Breaches",
        description: "Continuous compliance and access controls prevent data leaks and malware entries."
      },
      {
        metric: "100%",
        title: "Audit Preparation",
        description: "Continuous tracking and log exports provide clear evidence for compliance auditors."
      },
      {
        metric: "40%",
        title: "Lower Security Workload",
        description: "Automated vulnerability scans save team resources compared to manual audits."
      }
    ],
    insights: [
      {
        title: "Enterprise Compliance in Multi-Cloud setups",
        description: "A framework for configuring, tracking, and maintaining security standards across systems.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Hardening a Financial API",
        description: "How a banking provider matched SOC2 requirements by implementing automated access tokens.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "platform-administration": {
    title: "Platform Administration",
    tagline: "Handling routine platform maintenance, updates, and optimization tasks.",
    description: "Keep core platforms running smoothly. We manage configuration tasks, software updates, data backups, and resource allocation to keep systems healthy.",
    urgency: {
      challengeText: "Neglecting routine platform maintenance leads to database slow-downs, version errors, and data loss.",
      metricHighlight: "50%",
      metricLabel: "lower database query latencies through regular platform optimization",
      accordion: [
        {
          question: "What tasks does platform administration include?",
          answer: "It covers user configuration, license tracking, system updates, backup runs, and storage management."
        },
        {
          question: "How are system updates managed?",
          answer: "We test updates in staging environments first, deploying to production during low-traffic periods to avoid downtime."
        },
        {
          question: "Can we support custom platforms?",
          answer: "Yes. We support custom web apps, databases (SQL, MongoDB), and integrations alongside Salesforce and SAP systems."
        }
      ]
    },
    essentials: [
      {
        title: "Staged System Updates",
        description: "Test, verify, and deploy software updates and security patches to minimize errors."
      },
      {
        title: "Automated Data Backups",
        description: "Run daily data backups with offsite storage and periodic restore tests."
      },
      {
        title: "Configuration Audits",
        description: "Optimize database settings, index rules, and server configurations to maintain speed."
      }
    ],
    offerings: [
      {
        title: "Database Administration",
        description: "Manage database indexing, query optimization, backup setups, and storage scale."
      },
      {
        title: "Cloud Account Maintenance",
        description: "Manage cloud resource allocations, network settings, and user access permissions."
      },
      {
        title: "License & Cost Analysis",
        description: "Audit software licensing costs to remove unused accounts and reduce spending."
      }
    ],
    roi: [
      {
        metric: "100%",
        title: "Backup Reliability",
        description: "Verified backup routines ensure business data can be recovered during emergencies."
      },
      {
        metric: "35%",
        title: "Lower Licensing Costs",
        description: "Auditing active licenses removes unused software seats, lowering operations costs."
      },
      {
        metric: "2x",
        title: "Longer Platform Lifespan",
        description: "Consistent platform updates prevent performance decay and technology debt."
      }
    ],
    insights: [
      {
        title: "Database Maintenance Guide",
        description: "Strategies for index tuning, cost optimization, and query management in modern cloud architectures.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Optimizing Cloud Hosting Costs",
        description: "How a manufacturing company reduced its monthly cloud spend by 30% by cleaning up database assets.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "service-automation": {
    title: "Service Automation",
    tagline: "Automating routine operations tasks to speed up support times.",
    description: "Eliminate manual service request tasks. We build scripts and workflows that automate user creation, software deployments, and system recovery actions.",
    urgency: {
      challengeText: "Forcing IT staff to manually resolve password resets, user creation requests, and server boots slows down operations.",
      metricHighlight: "70%",
      metricLabel: "of common operations tickets resolved instantly via automation scripts",
      accordion: [
        {
          question: "How does operations automation speed up tickets?",
          answer: "We deploy self-service forms that trigger automated scripts to complete the task in seconds, bypassing queues."
        },
        {
          question: "Can we automate server recovery actions?",
          answer: "Yes. Monitoring alerts can trigger recovery scripts to restart crashed services automatically, resolving errors in seconds."
        },
        {
          question: "Is automation safe for security tasks?",
          answer: "Yes. Scripts follow strict validation rules, logging every step to prevent unauthorized system actions."
        }
      ]
    },
    essentials: [
      {
        title: "Infrastructure as Code (IaC)",
        description: "Define cloud infrastructure using configuration code to ensure setup consistency."
      },
      {
        title: "Self-Service Task Triggers",
        description: "Connect support portals to scripts that automate tasks like password resets."
      },
      {
        title: "Automated Error Resolution",
        description: "Configure self-healing scripts that restart services when crash alerts are triggered."
      }
    ],
    offerings: [
      {
        title: "Cloud Task Automation",
        description: "Build automated scripts to manage server scale-ups, resource shut-downs, and cleanups."
      },
      {
        title: "CI/CD Deployment Pipelines",
        description: "Build automated pipelines to test, build, and deploy software updates safely."
      },
      {
        title: "User Management Setup",
        description: "Automate employee onboarding task routes across directory systems."
      }
    ],
    roi: [
      {
        metric: "15s",
        title: "Ticket Resolution Speeds",
        description: "Automated tasks execute in seconds, eliminating manual support queues."
      },
      {
        metric: "45%",
        title: "Lower IT Operations Burden",
        description: "Automating routine tickets frees IT engineers to focus on scaling infrastructure."
      },
      {
        metric: "100%",
        title: "Setup Consistency",
        description: "Infrastructure scripts eliminate manual setup configuration errors."
      }
    ],
    insights: [
      {
        title: "Deploying Self-Healing Infrastructure",
        description: "How monitoring integrations, automated scripts, and cloud configurations resolve system faults.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Automated Developer Environments",
        description: "How a software firm reduced developer environment setup times from 2 days to 5 minutes.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "support-desk": {
    title: "Support Desk",
    tagline: "Delivering responsive support to resolve incidents and requests quickly.",
    description: "Provide your teams with a dependable point of contact. We run responsive support services to resolve software issues, configuration questions, and platform requests.",
    urgency: {
      challengeText: "Leaving user issues unresolved hurts daily operations, increases frustration, and delays business tasks.",
      metricHighlight: "95%",
      metricLabel: "incident response SLA compliance score for critical support tickets",
      accordion: [
        {
          question: "How do we define support priority levels?",
          answer: "We categorize issues by impact (Severity 1 to 4), prioritizing outages to restore business operations immediately."
        },
        {
          question: "What channels does support use?",
          answer: "We support users via web portals, Slack/Teams rooms, email, and scheduled video sessions."
        },
        {
          question: "Do you offer SLA agreements?",
          answer: "Yes. We define clear service level agreements (SLAs) for response and resolution times based on priority."
        }
      ]
    },
    essentials: [
      {
        title: "Multi-Channel Portals",
        description: "Provide easy, consolidated portals for users to submit requests and track progress."
      },
      {
        title: "SLA Response Tracking",
        description: "Log and monitor ticket response speeds to ensure support commitments are met."
      },
      {
        title: "Knowledge Base Libraries",
        description: "Build self-help articles to help users resolve common questions without opening tickets."
      }
    ],
    offerings: [
      {
        title: "IT Support Desk",
        description: "Provide responsive troubleshooting for application errors, configuration queries, and access requests."
      },
      {
        title: "Incident Resolution Support",
        description: "Provide active incident management to track, resolve, and audit system outages."
      },
      {
        title: "Support Desk Setup",
        description: "Help design and configure support desks using Jira, Zendesk, or Freshservice."
      }
    ],
    roi: [
      {
        metric: "1hr",
        title: "Incident Response Target",
        description: "Fast triage and assignment ensure critical bugs are analyzed immediately."
      },
      {
        metric: "40%",
        title: "Fewer Escalated Tickets",
        description: "Knowledge bases help users resolve basic issues independently, reducing support volume."
      },
      {
        metric: "90%",
        title: "Client Satisfaction Score",
        description: "Helpful, responsive assistance resolves system issues and maintains user confidence."
      }
    ],
    insights: [
      {
        title: "Modernizing Support Desks with Knowledge Portals",
        description: "Designing self-service guides, ticket routes, and SLAs to optimize support desk metrics.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Scaling Support in Fast Growth",
        description: "How a medical group managed support tickets during an acquisition phase using a knowledge base.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "operational-optimization": {
    title: "Operational Optimization",
    tagline: "Tuning digital environments to improve resilience, efficiency, and scale.",
    description: "Ensure your systems remain optimized as your business grows. We analyze resource usage, update settings, and tune database indexes to maximize efficiency and reduce hosting costs.",
    urgency: {
      challengeText: "Cloud setups naturally accumulate waste. Without regular optimization, systems slow down and monthly hosting bills increase.",
      metricHighlight: "35%",
      metricLabel: "lower hosting bills through automated resource sizing audits",
      accordion: [
        {
          question: "How do we identify cost leaks in cloud hosting?",
          answer: "We audit database allocations, find unused server capacity, and clean up temporary storage assets."
        },
        {
          question: "What is database query tuning?",
          answer: "We review slow-running database requests, rewrite query logic, and create indexes to speed up results."
        },
        {
          question: "Can optimizations improve system security?",
          answer: "Yes. Optimizing configurations includes removing unused network routes and reinforcing database rules."
        }
      ]
    },
    essentials: [
      {
        title: "Resource Sizing Audits",
        description: "Match database and server allocations with real usage levels to eliminate overspending."
      },
      {
        title: "Query Index Optimization",
        description: "Analyze system transaction logs to tune databases and speed up search queries."
      },
      {
        title: "Configuration Adjustments",
        description: "Tune server parameters, cache sizes, and connection settings to maximize throughput."
      }
    ],
    offerings: [
      {
        title: "Cloud Cost Audit",
        description: "Detailed evaluations of cloud accounts to reduce resource waste and cut hosting costs."
      },
      {
        title: "Database Speed Tuning",
        description: "Review database schemas, create indexes, and tune query settings to improve response times."
      },
      {
        title: "Caching Architecture Setup",
        description: "Deploy CDN networks and in-memory caches to offload servers and speed up page loads."
      }
    ],
    roi: [
      {
        metric: "30%",
        title: "Hosting Cost Reductions",
        description: "Cleaning up unused assets and resizing server instances reduces cloud bills."
      },
      {
        metric: "2x",
        title: "Faster Database Search",
        description: "Tuning query execution speed reduces screen load delays for users."
      },
      {
        metric: "50%",
        title: "Greater System Capacity",
        description: "Optimizing platform settings increases the transaction volume systems can support."
      }
    ],
    insights: [
      {
        title: "Strategies for Scaling Enterprise Infrastructure",
        description: "Auditing cloud instances, tuning databases, and configuring CDNs to optimize cost and performance.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Scaling a Logistics Platform",
        description: "How a carrier optimized database indexing to handle a 400% surge in tracking transactions during peak seasons.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
