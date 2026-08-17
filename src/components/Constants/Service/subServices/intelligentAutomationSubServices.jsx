export const intelligentAutomationSubServices = {
  "workflow-automation": {
    title: "Workflow Automation",
    tagline: "Connecting departments and applications into seamless, autonomous operations.",
    description: "Eliminate administrative delays and manual handoffs. We orchestrate cross-system business workflows that keep data flowing and tasks moving without human bottlenecks.",
    urgency: {
      challengeText: "Most business friction occurs when data travels between departments, resulting in keying errors, slow approvals, and lost transactions.",
      metricHighlight: "50%",
      metricLabel: "faster process cycle times with automated workflow triggers",
      accordion: [
        {
          question: "How do automated workflows solve cross-system friction?",
          answer: "We deploy connectors and business rules engines that automatically move data and tasks between CRM, ERP, and communication tools, removing human delay."
        },
        {
          question: "What is the role of automated logic in approvals?",
          answer: "Instead of waiting in inboxes, approval requests are routed based on role, threshold, and urgency, with automated reminders and secondary escalation rules."
        },
        {
          question: "How do we identify automation opportunities?",
          answer: "We audit your service processes, mapping out inputs, processing steps, and handoffs to build a high-ROI automation sequence."
        }
      ]
    },
    essentials: [
      {
        title: "Process Orchestration",
        description: "Unify legacy software, web forms, and team messaging platforms under one automated workflow flow."
      },
      {
        title: "Intelligent Trigger Rules",
        description: "Establish events (e.g., contract sign-off) that automatically kick off dependent jobs, system updates, and alerts."
      },
      {
        title: "Exceptions Management",
        description: "Design automated paths that flag processing errors to human operators without pausing the entire process."
      }
    ],
    offerings: [
      {
        title: "Multi-System Orchestration",
        description: "Connect APIs, databases, and user interfaces to move data between departments in real time."
      },
      {
        title: "Escalation & Approvals Setup",
        description: "Build custom approval routing flows with strict threshold configurations and automated notifications."
      },
      {
        title: "Process State Tracking",
        description: "Implement unified process monitors that track the status of active requests and workflow states."
      }
    ],
    roi: [
      {
        metric: "60%",
        title: "Shorter Cycle Durations",
        description: "Tasks move immediately between systems, bypassing employee email inboxes and manual wait times."
      },
      {
        metric: "100%",
        title: "Data Audit Accuracy",
        description: "Automated logging tracks every system action, creating clean, search-ready compliance trails."
      },
      {
        metric: "40%",
        title: "Reduced Admin Overhead",
        description: "Teams spend less time verifying request states and copying data between systems."
      }
    ],
    insights: [
      {
        title: "Enterprise Workflow Orchestration Guide",
        description: "How to connect legacy applications with modern web platforms to build unified operational loops.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Streamlining Logistics Approvals",
        description: "How a distributor cut invoice approval duration from 12 days to 3 hours using workflow automation.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "rpa": {
    title: "Robotic Process Automation (RPA)",
    tagline: "Deploying digital workers to execute high-volume, repetitive operations at scale.",
    description: "Free your human workforce from data entry and copy-paste chores. Our RPA bots interface with legacy systems exactly like a human user, completing routine tasks in seconds with zero errors.",
    urgency: {
      challengeText: "Forcing employees to spend hours copying data between screens degrades morale, increases error rates, and caps processing capacity.",
      metricHighlight: "99.9%",
      metricLabel: "processing accuracy across keying and form-filling bots",
      accordion: [
        {
          question: "Can RPA work with legacy software that has no API?",
          answer: "Yes. RPA bots execute actions directly through the user interface (UI), clicking buttons and typing values just like an employee."
        },
        {
          question: "How do we prevent bots from breaking during updates?",
          answer: "We design resilient bots that rely on underlying application elements and object identifiers rather than coordinates, minimizing maintenance needs."
        },
        {
          question: "What is the timeline for an RPA pilot?",
          answer: "A standard pilot focusing on a high-volume, rule-based process can be designed, tested, and deployed in 4 to 6 weeks."
        }
      ]
    },
    essentials: [
      {
        title: "UI-Level Automation",
        description: "Interact with enterprise systems (SAP, Salesforce, Excel, portals) exactly like a human operator."
      },
      {
        title: "Rule-Based Logic Engines",
        description: "Configure clear, decision-tree rules that dictate bot actions for a wide variety of data inputs."
      },
      {
        title: "Centralized Bot Governance",
        description: "Deploy security controls, resource scheduling, and performance monitoring for your digital workforce."
      }
    ],
    offerings: [
      {
        title: "Digital Workforce Deployment",
        description: "Configure and run RPA bots (UiPath, Automation Anywhere) to manage high-volume back-office work."
      },
      {
        title: "Process Feasibility Audits",
        description: "Evaluate operational procedures to determine which tasks are best suited for robotic automation."
      },
      {
        title: "Bot Maintenance & Hypercare",
        description: "Provide active bot maintenance, system updates, and processing error resolution services."
      }
    ],
    roi: [
      {
        metric: "10x",
        title: "Faster Task Execution",
        description: "Bots enter data, run reports, and process files in fractions of the time required by humans."
      },
      {
        metric: "0%",
        title: "Data Input Error Rate",
        description: "Eliminating typo errors, missing attachments, and transcription faults in data workflows."
      },
      {
        metric: "24/7",
        title: "Uninterrupted Processing",
        description: "Bots operate continuously through nights and weekends, eliminating backlogs."
      }
    ],
    insights: [
      {
        title: "RPA Resiliency Frameworks",
        description: "Best practices for designing, scripting, and auditing bots to minimize maintenance overhead.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Automated Payroll Reconciliation",
        description: "How an enterprise client used bots to cross-verify weekly time sheets across 8,000 workers.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "document-intelligence": {
    title: "Document Intelligence",
    tagline: "Converting unstructured papers and emails into clean, structured business data.",
    description: "Stop reading and keying invoices, purchase orders, and PDF contracts manually. We build cognitive document models that extract, classify, and validate document text automatically.",
    urgency: {
      challengeText: "Unstructured files block automation because standard tools cannot understand text hidden inside PDFs, images, and email bodies.",
      metricHighlight: "85%",
      metricLabel: "reduction in manual document indexing and extraction time",
      accordion: [
        {
          question: "How does OCR differ from document intelligence?",
          answer: "OCR only reads characters; document intelligence understands context. It uses NLP to identify terms like 'Total Balance' regardless of document layout."
        },
        {
          question: "Can it handle handwriting and skewed scans?",
          answer: "Yes. Advanced cognitive models are trained on thousands of document variations, allowing them to read handwriting and low-quality scans."
        },
        {
          question: "How is data accuracy verified?",
          answer: "We establish confidence thresholds. If the AI model returns a low confidence score, the document is sent to an operator for review."
        }
      ]
    },
    essentials: [
      {
        title: "Cognitive Text Extraction",
        description: "Use Machine Learning and Natural Language Processing to extract tabular and key-value data."
      },
      {
        title: "Automatic Classification",
        description: "Analyze incoming files to sort invoices, contracts, receipts, and certificates into correct channels."
      },
      {
        title: "Validation Checklists",
        description: "Cross-verify extracted text against system databases (e.g., matching invoice totals to purchase orders)."
      }
    ],
    offerings: [
      {
        title: "Invoice Processing Setup",
        description: "Build automated receipt and invoice processing routes that feed directly into accounting ledgers."
      },
      {
        title: "Contract Text Mining",
        description: "Extract terms, dates, and contract clauses from legacy PDFs to populate compliance databases."
      },
      {
        title: "Customer Intake Processing",
        description: "Automate verification of scanned ID cards, applications, and utility bills during client onboarding."
      }
    ],
    roi: [
      {
        metric: "75%",
        title: "Faster Document Cycles",
        description: "Data is extracted and verified instantly upon document arrival, accelerating response times."
      },
      {
        metric: "90%",
        title: "Touchless Processing Rates",
        description: "Most incoming documents are processed, verified, and updated without any human intervention."
      },
      {
        metric: "50%",
        title: "Operational Cost Reduction",
        description: "Substantially cuts hours spent manually auditing, labeling, and typing document details."
      }
    ],
    insights: [
      {
        title: "NLP and the Future of Back-Office Work",
        description: "How machine learning models read, classify, and validate structured details from unstructured business files.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Automated Intake at Scale",
        description: "How a medical group processed 40,000 monthly patient referral letters automatically using AI.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "decision-automation": {
    title: "Decision Automation",
    tagline: "Embedding intelligent algorithms to automate complex, operational choices.",
    description: "Move beyond static rule sheets. We integrate predictive machine learning and operational rules engines to automate loan underwriting, pricing adjustments, and fraud assessments instantly.",
    urgency: {
      challengeText: "Forcing customers to wait days for underwriting review or manual verification drives them directly to faster competitors.",
      metricHighlight: "15x",
      metricLabel: "accelerated speed from application intake to final contract approval",
      accordion: [
        {
          question: "How do algorithms make complex business decisions?",
          answer: "We capture historical decision patterns, build predictive models, and combine them with strict risk policies to make instant choices."
        },
        {
          question: "How do we audit automated decisions for compliance?",
          answer: "Every automated decision outputs an audit report detailing the exact data inputs, rule matches, and model weights used, satisfying auditors."
        },
        {
          question: "Can business users adjust decision policies?",
          answer: "Yes. We deploy intuitive decision tables that allow risk teams to adjust parameters (e.g. interest rates) without writing code."
        }
      ]
    },
    essentials: [
      {
        title: "Predictive Scorecards",
        description: "Build machine learning models that calculate risk levels based on customer history and market data."
      },
      {
        title: "Business Rules Engines",
        description: "Implement central rule sheets that enforce policy limits, compliance requirements, and pricing models."
      },
      {
        title: "Explainable AI Logs",
        description: "Maintain transparent logs that detail the mathematical rationale behind every automated decision."
      }
    ],
    offerings: [
      {
        title: "Instant Credit Underwriting",
        description: "Automate loan and credit risk evaluations, enabling immediate customer approval choices."
      },
      {
        title: "Dynamic Price Optimization",
        description: "Deploy automated pricing engines that respond in real time to inventory levels and competitor rates."
      },
      {
        title: "Automated Fraud Detection",
        description: "Implement continuous transaction monitoring systems that flag suspicious activities instantly."
      }
    ],
    roi: [
      {
        metric: "50%",
        title: "Lower Underwriting Costs",
        description: "Routine choices are automated, allowing analysts to focus on high-risk exceptions."
      },
      {
        metric: "80%",
        title: "Immediate Approval Rates",
        description: "Customers receive decisions instantly, increasing sales conversion and retention."
      },
      {
        metric: "25%",
        title: "Risk Mitigation",
        description: "Consistent algorithmic enforcement prevents policy deviations and reduces bad-debt ratios."
      }
    ],
    insights: [
      {
        title: "The Governance of Algorithmic Decisions",
        description: "Establishing compliance protocols, audit lines, and bias controls in automated rules engines.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Algorithmic Underwriting in FinTech",
        description: "How a digital lender processed $50M in micro-loans with a 1.2% default rate using automated scoring.",
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "conversational-ai": {
    title: "Conversational AI",
    tagline: "Deploying context-aware virtual assistants to deliver instant client support.",
    description: "Provide dependable support every hour of the day. We build advanced conversational systems that resolve client questions, process orders, and handle account updates without phone queues.",
    urgency: {
      challengeText: "Long customer support hold times and rigid, unhelpful menu bots lower satisfaction and increase service center costs.",
      metricHighlight: "65%",
      metricLabel: "of standard support queries resolved without agent intervention",
      accordion: [
        {
          question: "How do conversational agents handle complex queries?",
          answer: "We connect virtual assistants to CRM and database systems, allowing them to provide personalized help based on account history."
        },
        {
          question: "What happens when the virtual assistant gets stuck?",
          answer: "The assistant automatically transfers the conversation, transcript, and customer details to a live agent for a smooth handoff."
        },
        {
          question: "Can conversational AI support multiple languages?",
          answer: "Yes. Our systems automatically detect language preferences, translating and responding in over 40 languages."
        }
      ]
    },
    essentials: [
      {
        title: "Natural Language Processing (NLP)",
        description: "Understand user intents, sentiment, and details from conversational text and voice inputs."
      },
      {
        title: "Core Database Integration",
        description: "Link assistants to systems of record to fetch order status, reset passwords, and update profiles."
      },
      {
        title: "Agent Handoff Systems",
        description: "Create direct routing rules that connect complex customer issues to the correct support team."
      }
    ],
    offerings: [
      {
        title: "Customer Support Chatbots",
        description: "Build and deploy smart chatbots on websites, portals, and messaging apps to answer common FAQs."
      },
      {
        title: "Voice Assistant Deployment",
        description: "Implement interactive voice response (IVR) phone agents that resolve queries using voice recognition."
      },
      {
        title: "Internal Helpdesk Assistants",
        description: "Create employee support bots that answer HR questions and reset software passwords."
      }
    ],
    roi: [
      {
        metric: "70%",
        title: "Query Resolution Speed",
        description: "Customers receive instant answers, bypassing telephone queues and ticketing delays."
      },
      {
        metric: "40%",
        title: "Reduced Support Center Costs",
        description: "Automating routine queries reduces contact volume and agent resource requirements."
      },
      {
        metric: "90%",
        title: "User Satisfaction Score",
        description: "Empowering users with immediate, context-aware answers improves overall support satisfaction."
      }
    ],
    insights: [
      {
        title: "Building Conversational Interfaces That Scale",
        description: "Designing dialog models, fallback strategies, and CRM integrations for enterprise virtual assistants.",
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Conversational Support in Telecom",
        description: "How a mobile operator managed a 300% spike in customer queries without expanding support headcount.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "process-mining": {
    title: "Process Mining & Analytics",
    tagline: "Using software event logs to visual and optimize operational workflows.",
    description: "Stop guessing where process delays occur. We analyze systems logs to generate visual maps of your workflows, highlighting bottlenecks, deviations, and automation opportunities.",
    urgency: {
      challengeText: "Managers often build optimizations based on idealized process charts, missing real-world deviations and compliance gaps.",
      metricHighlight: "30%",
      metricLabel: "average reduction in process bottlenecks through log analytics",
      accordion: [
        {
          question: "What is process mining and how does it work?",
          answer: "Process mining software extracts event timestamps from systems (ERP, CRM) to reconstruct the exact path every transaction took."
        },
        {
          question: "How does it support automation programs?",
          answer: "It highlights repetitive, high-frequency paths that are ideal for automation, and calculates the exact ROI of automating them."
        },
        {
          question: "Can it verify process compliance?",
          answer: "Yes. The tool automatically cross-checks transaction paths against standard guidelines, flagging any compliance violations."
        }
      ]
    },
    reserves: [
      {
        title: "Log Reconstruction",
        description: "Aggregate system data (timestamps, user IDs, case IDs) to construct visual workflow diagrams."
      },
      {
        title: "Bottleneck Identification",
        description: "Pinpoint tasks that cause long delays and calculate their financial impact on operations."
      },
      {
        title: "Conformance Auditing",
        description: "Identify unauthorized workflow shortcuts, skip-steps, and compliance violations."
      }
    ],
    offerings: [
      {
        title: "Process Map Discovery",
        description: "Build complete visual process models of procurement, sales, or ticketing operations."
      },
      {
        title: "Automation ROI Assessment",
        description: "Analyze transaction data to isolate tasks where automation yields the largest time and cost savings."
      },
      {
        title: "Operational Compliance Audits",
        description: "Continuous monitoring of system logs to flag process anomalies and risk deviations."
      }
    ],
    roi: [
      {
        metric: "3x",
        title: "Strategy Accuracy",
        description: "Building automation roadmaps on actual logs rather than assumptions prevents integration failures."
      },
      {
        metric: "25%",
        title: "Reduction in Process Waste",
        description: "Eliminating redundant verification cycles and duplicate steps in common workflows."
      },
      {
        metric: "100%",
        title: "Process Transparency",
        description: "Real-time visibility into process paths, cycle times, and throughput variables."
      }
    ],
    insights: [
      {
        title: "Process Mining: Data-Driven Performance",
        description: "How event logs help enterprise organizations discover bottlenecks, deviations, and cost leaks.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Optimizing Accounts Payable",
        description: "How a manufacturing company identified and removed invoice review loops, reducing cycle times by 40%.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
