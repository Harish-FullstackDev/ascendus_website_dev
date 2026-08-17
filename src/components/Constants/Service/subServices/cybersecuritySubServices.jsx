export const cybersecuritySubServices = {
  "risk-assessment": {
    title: "Cyber Risk Assessment",
    tagline: "Pinpointing security vulnerabilities and alignment to build robust compliance roadmaps.",
    description: "Assess your security posture from the outside in. We evaluate internal infrastructure, identity policies, cloud configurations, and compliance readiness.",
    urgency: {
      challengeText: "Most organizations lack real-time visibility into active vulnerabilities, exposing them to catastrophic data breaches and regulatory fines.",
      metricHighlight: "60%",
      metricLabel: "of small-to-medium businesses fold within 6 months of a major cyber breach",
      accordion: [
        {
          question: "What does a cyber risk assessment cover?",
          answer: "We perform network scans, review identity and access controls, audit cloud configurations, and evaluate compliance against standards like ISO 27001."
        },
        {
          question: "How often should assessments be performed?",
          answer: "We recommend at least an annual comprehensive audit, supplemented by quarterly scans and active configuration monitoring."
        }
      ]
    },
    essentials: [
      { title: "Vulnerability Scanning", description: "Detect unpatched software, weak credentials, and open ports." },
      { title: "Compliance Gap Analysis", description: "Audit controls against frameworks like SOC 2, HIPAA, or ISO 27001." },
      { title: "Threat Modeling", description: "Simulate attacks on your highest-value digital infrastructure assets." }
    ],
    offerings: [
      { title: "Internal Security Audit", description: "Review internal policies, developer keys, and access logs." },
      { title: "External Penetration Testing", description: "Ethical hacking simulation to discover active entry gates." },
      { title: "Risk Mitigation Roadmap", description: "Clear prioritized remediation lists for engineering teams." }
    ],
    roi: [
      { metric: "90%", title: "Reduction in Attack Surface", description: "Closing open ports and fixing configurations cuts entry vectors." },
      { metric: "100%", title: "Audit Preparedness", description: "Clear gap mappings ensure compliance reviews pass first time." },
      { metric: "0", title: "Unscheduled Outages", description: "Preventing ransomware and breaches keeps services fully active." }
    ],
    insights: [
      {
        title: "Enterprise Cybersecurity Playbook",
        description: "A framework for aligning security investments directly with commercial risk levels.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Financial Trust",
        description: "How a credit union passed CCPA audits and closed cloud network gaps.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "identity-access-management": {
    title: "Identity & Access Management",
    tagline: "Deploying Zero Trust authentication and credential controls across systems.",
    description: "Control who has access to what, when, and from where. We implement SSO, MFA, Privileged Access Management, and Zero Trust validation engines.",
    urgency: {
      challengeText: "Compromised credentials remain the number one initial access vector in modern enterprise breaches.",
      metricHighlight: "81%",
      metricLabel: "of hacking-related breaches leverage weak or stolen passwords",
      accordion: [
        {
          question: "What is Privileged Access Management (PAM)?",
          answer: "PAM isolates and monitors administrative accounts, requiring temporary token grants and recording all sessions."
        },
        {
          question: "Can we integrate SSO with legacy databases?",
          answer: "Yes, we build secure API gateways and identity proxies to hook legacy databases into modern providers."
        }
      ]
    },
    essentials: [
      { title: "Multi-Factor Authentication", description: "Implement secure FIDO2 hardware keys and push-based notifications." },
      { title: "Single Sign-On (SSO)", description: "Unify account access under secure portals like Okta or Azure AD." },
      { title: "Zero Trust Policies", description: "Continuously evaluate user context, location, and device health." }
    ],
    offerings: [
      { title: "Directory Integration", description: "Synchronize database directories with cloud identity providers." },
      { title: "Privileged Access Vaulting", description: "Secure high-value administrative credentials in encrypted vaults." },
      { title: "Access Auditing & Logs", description: "Detailed tracking reports to satisfy regulatory auditors." }
    ],
    roi: [
      { metric: "50%", title: "Fewer Helpdesk Tickets", description: "SSO eliminates daily password reset requests for employees." },
      { metric: "99%", title: "Phishing Prevention", description: "Hardware-bound MFA blocks automated login hijack attempts." },
      { metric: "1", title: "Unified Portal", description: "A single secure dashboard for employee application access." }
    ],
    insights: [
      {
        title: "Modern Identity Frameworks",
        description: "Implementing Zero Trust access controls without slowing down developer velocity.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "SSO Scale Case Study",
        description: "Deploying single sign-on to 25,000 employees at an international logistics provider.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "cloud-security": {
    title: "Cloud Security",
    tagline: "Securing multi-cloud architectures, configurations, and API gateways.",
    description: "Lock down your cloud database, compute instances, and API servers. We deploy posture management and workload protection tools.",
    urgency: {
      challengeText: "Misconfigured cloud storage buckets and open network keys expose billions of records to public searches daily.",
      metricHighlight: "99%",
      metricLabel: "of cloud security failures will be the customer's fault through 2027",
      accordion: [
        {
          question: "What is Cloud Security Posture Management (CSPM)?",
          answer: "CSPM scans cloud environments in real time to catch database misconfigurations and policy violations."
        }
      ]
    },
    essentials: [
      { title: "Workload Protection", description: "Isolate containers, serverless scripts, and virtual machine files." },
      { title: "Identity Governance", description: "Limit machine roles and programmatic keys to strict least-privilege." },
      { title: "Configuration Scanning", description: "Automated auditing of storage access, firewalls, and Peering links." }
    ],
    offerings: [
      { title: "Cloud Security Auditing", description: "Analyze AWS, Azure, and Google Cloud environments against CIS benchmarks." },
      { title: "Posture Management Setup", description: "Deploy tools to monitor configurations and trigger auto-remediation." },
      { title: "API Gateway Lockdown", description: "Implement rate limiting, token validation, and web application firewalls." }
    ],
    roi: [
      { metric: "100%", title: "Real-Time Compliance", description: "Continuous posture scans ensure environment changes stay compliant." },
      { metric: "90%", title: "Faster Incident Isolation", description: "Unified logs and telemetry speed up active threat hunting." },
      { metric: "0", title: "Data Exposure Incidents", description: "Strict storage policies block public access to backend data." }
    ],
    insights: [
      {
        title: "Cloud Posture Guide",
        description: "A framework for configuring least-privilege roles in AWS and Azure environments.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Cloud Scale",
        description: "How a fintech SaaS client automated compliance scans across 300 cloud servers.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "network-security": {
    title: "Network Security",
    tagline: "Protecting data transfers, peering tunnels, and microsegments.",
    description: "Defend your network perimeter and internal lanes. We install next-generation firewalls, VPN gateways, and secure peering segments.",
    urgency: {
      challengeText: "Flat networks allow attackers to move laterally from a single compromised endpoint to core financial databases.",
      metricHighlight: "70%",
      metricLabel: "of modern cyber attacks involve lateral movement within internal networks",
      accordion: [
        {
          question: "How does microsegmentation prevent attacks?",
          answer: "It splits networks into isolated zones, requiring active authorization to pass traffic from one node to another."
        }
      ]
    },
    essentials: [
      { title: "Microsegmentation", description: "Split network lanes to prevent lateral movement of malware." },
      { title: "Next-Gen Firewalls", description: "Deploy deep packet inspection, IPS, and application-level filtering." },
      { title: "Secure Peering", description: "Configure IPsec tunnels, SD-WAN networks, and private cloud links." }
    ],
    offerings: [
      { title: "Perimeter Defense Audit", description: "Review public ingress, egress paths, and load balancing configurations." },
      { title: "Zero Trust WAN Setup", description: "Implement remote access tools to replace standard unmonitored VPNs." },
      { title: "Intrusion Detection Setup", description: "Deploy active signature scanning and traffic anomaly detectors." }
    ],
    roi: [
      { metric: "85%", title: "Threat Containment", description: "Microsegments isolate infections to a single device node." },
      { metric: "99%", title: "Secure Remote Access", description: "Encrypted links protect offsite data transfers from interception." },
      { metric: "24/7", title: "Active Mitigation", description: "Automated firewalls block network scanning attempts instantly." }
    ],
    insights: [
      {
        title: "Modern Network Segmentation",
        description: "Using software-defined networking to split corporate databases from public workspaces.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: WAN Restructure",
        description: "Consolidating VPN portals across 8 regional offices into a single secure gateway.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "security-operations": {
    title: "Security Operations Center (SOC)",
    tagline: "Providing continuous monitoring, detection, and incident response.",
    description: "Track threats around the clock. We deploy SIEM engines, aggregate security event logs, and manage threat response workflows.",
    urgency: {
      challengeText: "Without continuous monitoring, breaches go unnoticed for months, increasing cleanup costs and brand damage.",
      metricHighlight: "277",
      metricLabel: "days is the average duration to identify and contain a data breach",
      accordion: [
        {
          question: "What does the 24/7 SOC do when a threat occurs?",
          answer: "We isolate the affected server, block compromised user accounts, analyze payloads, and deploy containment patches."
        }
      ]
    },
    essentials: [
      { title: "SIEM Log Aggregation", description: "Collect and index telemetry events from endpoints, servers, and clouds." },
      { title: "Anomaly Detection", description: "Analyze behaviors to flag suspicious admin activities or massive downloads." },
      { title: "24/7 Analyst Support", description: "Dedicated operations center engineers validating alerts and threats." }
    ],
    offerings: [
      { title: "SOC Integration Setup", description: "Deploy agent sensors and hook logs into centralized monitoring systems." },
      { title: "Playbook Development", description: "Draft response frameworks for database breaches or phishing incidents." },
      { title: "Threat Hunt Campaigns", description: "Proactive scans to look for stealthy compromises inside active networks." }
    ],
    roi: [
      { metric: "15m", title: "Mean Time to Detect", description: "Real-time alerts find threats before lateral spreads occur." },
      { metric: "60%", title: "Reduction in Costs", description: "Early detection limits business downtime and containment complexity." },
      { metric: "0", title: "False Alarm Fatigue", description: "Analyst sorting ensures engineers only address high-severity tickets." }
    ],
    insights: [
      {
        title: "SIEM Scaling Blueprint",
        description: "How to filter noise and map alert priorities in massive log aggregation platforms.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Incident Response Case Study",
        description: "How Ascendus' SOC isolated a credential injection attack in under 12 minutes for a client.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "grc": {
    title: "Governance, Risk & Compliance",
    tagline: "Meeting regulatory compliance standards and building policies.",
    description: "Structure policies to pass audits and satisfy commercial clients. We manage gaps, document controls, and compile compliance audit reports.",
    urgency: {
      challengeText: "Failing compliance audits causes commercial blocks, contract breaches, and significant regulatory penalties.",
      metricHighlight: "$5.8M",
      metricLabel: "is the average corporate cost of non-compliance across industries",
      accordion: [
        {
          question: "How do you help us prepare for a SOC 2 audit?",
          answer: "We check your current settings against trust criteria, design needed policies, collect evidence, and assist auditors."
        }
      ]
    },
    essentials: [
      { title: "Policy Design", description: "Draft data retention, network usage, encryption, and offboarding rules." },
      { title: "Controls Mapping", description: "Align standard business processes with compliance requirements." },
      { title: "Evidence Collection", description: "Collect configurations, system logs, and approvals for auditor review." }
    ],
    offerings: [
      { title: "Compliance Gap Auditing", description: "Evaluate controls against SOC 2, ISO 27001, HIPAA, or CCPA criteria." },
      { title: "Risk Register Creation", description: "Identify, quantify, and map remediation tasks for strategic risks." },
      { title: "Auditor Facilitation", description: "Manage communication and package evidence files to speed up audits." }
    ],
    roi: [
      { metric: "100%", title: "Audit Success Rates", description: "Detailed checklists and policy registers guarantee clean reports." },
      { metric: "30%", title: "Faster Deal Closures", description: "Providing SOC 2 reports instantly resolves security reviews from clients." },
      { metric: "0", title: "Compliance Fines", description: "Correctly configured controls prevent CCPA, HIPAA, or GDPR violations." }
    ],
    insights: [
      {
        title: "Compliance Mapping Blueprint",
        description: "How to reuse security evidence files across SOC 2, HIPAA, and ISO 27001 audit tracks.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: GRC Speedup",
        description: "How a digital health SaaS client secured HIPAA validation in under 90 days.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
