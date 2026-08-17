export const dataIntelligenceSubServices = {
  "data-warehousing": {
    title: "Data Warehousing",
    tagline: "Structuring multi-tier data lakehouses and schemas for high-speed analysis.",
    description: "Consolidate your transaction databases. We design high-speed cloud lakehouses and map ETL pipelines to clean incoming values.",
    urgency: {
      challengeText: "Analyzing customer metrics across disjointed spreadsheets and databases takes hours and yields stale answers.",
      metricHighlight: "90%",
      metricLabel: "faster query speeds achieved by consolidating databases to cloud lakehouses",
      accordion: [
        {
          question: "What is the difference between a database and a warehouse?",
          answer: "Databases handle daily transaction logs, while warehouses store historical records optimized for fast query speeds."
        }
      ]
    },
    essentials: [
      { title: "Lakehouse Architecture", description: "Design cloud storage tiers (bronze, silver, gold) to store raw and cleaned tables." },
      { title: "ETL Pipeline Setup", description: "Configure automated workflows to fetch, clean, and write database records." },
      { title: "Schema Design", description: "Structure data tables (e.g. star schema) to lower query search durations." }
    ],
    offerings: [
      { title: "Snowflake Warehouse Setup", description: "Configure database instances, computing roles, and sizing parameters." },
      { title: "ETL Pipeline Engineering", description: "Write Python and SQL scripts to clean and aggregate transaction records." },
      { title: "Query Speed Optimization", description: "Audit slow database queries, add indexes, and adjust cluster keys." }
    ],
    roi: [
      { metric: "75%", title: "Lower Query Latency", description: "Aggregating values beforehand speeds up dashboard loading." },
      { metric: "100%", title: "Unified Data Portal", description: "All business divisions query from a single verified database repository." },
      { metric: "40%", title: "Lower Storage Expenses", description: "Database compression and cleanup reduce cloud storage bills." }
    ],
    insights: [
      {
        title: "Lakehouse Design Blueprint",
        description: "How to use Apache Iceberg and partition rules to build scalable cloud data platforms.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Retail Database scale",
        description: "Consolidating 4 billing systems to Snowflake to run customer loyalty analytics.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "bi-reporting": {
    title: "Business Intelligence & Reporting",
    tagline: "Building interactive dashboards and report cards to monitor business health.",
    description: "Move from reports on yesterday to dashboard indicators on today. We design Power BI and Tableau dashboards.",
    urgency: {
      challengeText: "Leadership teams steering companies using outdated monthly PDFs miss immediate market changes and drop-off spikes.",
      metricHighlight: "5x",
      metricLabel: "faster operational decision speeds reached by adopting interactive analytics",
      accordion: [
        {
          question: "Can dashboards refresh in real time?",
          answer: "Yes, we connect databases to streaming pipelines to update dashboard graphs automatically as events occur."
        }
      ]
    },
    essentials: [
      { title: "Dashboard Architecture", description: "Design intuitive visual layouts showing critical indicators cleanly." },
      { title: "Metric Aggregations", description: "Write database formulas (DAX, SQL) to summarize raw records." },
      { title: "Role-Based Access Controls", description: "Configure dashboards so users only see authorized metrics." }
    ],
    offerings: [
      { title: "Power BI Dashboard Setup", description: "Build charts showing customer activity, sales margins, and outages." },
      { title: "Database Formulas Design", description: "Write calculations to output correct customer metrics." },
      { title: "Automated Report Dispatch", description: "Configure emails to send PDF dashboard summaries to managers weekly." }
    ],
    roi: [
      { metric: "100%", title: "Operational Visibility", description: "Leadership views sales, inventories, and support queues in real time." },
      { metric: "80%", title: "Fewer Manual Report Audits", description: "Dashboards update automatically, skipping manual spreadsheets compilation." },
      { metric: "20%", title: "Faster Churn Isolation", description: "Visual indicators alert managers when activity rates drop in target regions." }
    ],
    insights: [
      {
        title: "Designing Executive Dashboards",
        description: "Best practices for dashboard styling, metric choices, and user flow pathways.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Sales Dashboard",
        description: "How a retail brand used real-time sales dashboards to redirect marketing budgets.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "data-governance": {
    title: "Data Governance & Quality",
    tagline: "Setting catalog tags, credentials control, and database validation tests.",
    description: "Unify database catalog names and secure user access. We implement catalog registries and policy controls.",
    urgency: {
      challengeText: "Having duplicate customer records and uncatalogued tables causes data compliance failures and bad analytics.",
      metricHighlight: "$15M",
      metricLabel: "is the average annual cost of poor data quality to enterprises",
      accordion: [
        {
          question: "What does data governance cover?",
          answer: "It maps data origins (lineage), tags column contents (catalog), and defines user query authorization rules."
        }
      ]
    },
    essentials: [
      { title: "Metadata Cataloging", description: "Index database tables, columns, and descriptions in a central registry." },
      { title: "Data Lineage Tracking", description: "Visual tracking maps showing where data is captured, cleaned, and stored." },
      { title: "Anonymization Policies", description: "Configure systems to mask sensitive data columns (SSNs, emails)." }
    ],
    offerings: [
      { title: "Data Catalog Integration", description: "Deploy tools to catalog database locations and columns." },
      { title: "Data Profiling Setup", description: "Setup automated checks to flag blank values or duplicate records." },
      { title: "Column Masking Config", description: "Write database rules to hide private columns from non-admin queries." }
    ],
    roi: [
      { metric: "100%", title: "Compliance Readiness", description: "Masking and catalogs satisfy CCPA and GDPR data audits easily." },
      { metric: "50%", title: "Faster Data Discovery", description: "Analysts search the catalog to find verified database tables instantly." },
      { metric: "0", title: "Duplicate Data Inconsistencies", description: "Validation sweeps clean records, resolving analytics conflicts." }
    ],
    insights: [
      {
        title: "Data Governance Reference Guide",
        description: "How to structure metadata roles, lineage graphs, and access control registers.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Compliance Catalog",
        description: "How a banking client indexed 1,500 database tables to satisfy GDPR compliance audits.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
