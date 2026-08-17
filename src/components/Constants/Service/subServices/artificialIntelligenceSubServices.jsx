export const artificialIntelligenceSubServices = {
  "predictive-analytics": {
    title: "Predictive Analytics",
    tagline: "Building forecast models and regressions to predict operational changes.",
    description: "Forecast sales, inventory needs, and system anomalies. We train machine learning models on history logs to guide plans.",
    urgency: {
      challengeText: "Managing warehouse stocks or power grids based on historical averages leads to stockouts or expensive wastage.",
      metricHighlight: "20%",
      metricLabel: "lower stockout rates achieved by enterprises using predictive demand models",
      accordion: [
        {
          question: "How do you train predictive models?",
          answer: "We feed clean historical logs (sales, sensor telemetry, weather) into time-series regression frameworks."
        }
      ]
    },
    essentials: [
      { title: "Time-Series Forecasting", description: "Forecast future values (e.g. energy load, item purchases) based on past records." },
      { title: "Anomaly Detection", description: "Identify data points deviating from normal baselines." },
      { title: "Customer Churn Prediction", description: "Map activity logs to estimate cancellation probabilities." }
    ],
    offerings: [
      { title: "Demand Forecasting Model", description: "Train custom neural models to estimate weekly product demand." },
      { title: "Predictive Maintenance Algorithms", description: "Analyze hardware temperature and vibration logs." },
      { title: "Lead Scoring Setup", description: "Score sales leads based on demographic and activity profiles." }
    ],
    roi: [
      { metric: "15%", title: "Reduction in Warehouse Wastage", description: "Accurate forecasting keeps inventory aligned to actual demand." },
      { metric: "90%", title: "System Anomaly Catch Rates", description: "Regression engines catch spikes before server crashes occur." },
      { metric: "30%", title: "Higher Sales Conversions", description: "Sales teams focus efforts on hot leads mapped by algorithms." }
    ],
    insights: [
      {
        title: "Predictive Modeling Playbook",
        description: "How to prepare time-series logs and select regression setups for forecasting.",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Energy Grid Forecast",
        description: "How Ascendus deployed regression models to forecast power grid demands, saving 12% in wastage.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "nlp-solutions": {
    title: "Natural Language Processing",
    tagline: "Extracting facts, classifications, and text data from unstructured documents.",
    description: "Automate reading and sorting text data. We deploy models to read contracts, match invoices, and sort support tickets.",
    urgency: {
      challengeText: "Reviewing thousands of business agreements or support emails manually causes massive processing delays.",
      metricHighlight: "70%",
      metricLabel: "faster document processing achieved by enterprises adopting NLP engines",
      accordion: [
        {
          question: "Can NLP read handwritten documents?",
          answer: "Yes, we integrate intelligent character recognition (ICR) layout engines to read and digitize scans."
        }
      ]
    },
    essentials: [
      { title: "Named Entity Extraction", description: "Find and save names, dates, values, and clauses in text." },
      { title: "Text Classification", description: "Automated sorting of emails or tickets by topic and urgency." },
      { title: "Sentiment Analysis", description: "Audit customer survey feedback to flag unhappy accounts." }
    ],
    offerings: [
      { title: "Contract Risk Analyzer", description: "Extract critical dates, values, and liability clauses automatically." },
      { title: "Support Ticket Router", description: "Read incoming emails and route them to correct service queues." },
      { title: "Invoice Entity Extractor", description: "Read billing entries and line values to match purchase orders." }
    ],
    roi: [
      { metric: "80%", title: "Faster Document Reviews", description: "Models highlight risk clauses, skipping manual reading loops." },
      { metric: "100%", title: "Consistent Classifications", description: "Tickets get categorized objectively, preventing routing confusion." },
      { metric: "0", title: "Missed Urgencies", description: "Sentiment analysis immediately escalates angry client messages." }
    ],
    insights: [
      {
        title: "NLP Document Architectures",
        description: "How to use transformer models to parse values and match records in corporate folders.",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Contract Audit",
        description: "How a real estate client audited 8,000 leases in under 48 hours using NLP.",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  },
  "computer-vision": {
    title: "Computer Vision",
    tagline: "Analyzing image and video feeds in real time for quality and safety checks.",
    description: "Scan visual feeds for objects, counts, and defects. We train neural models to spot assembly errors and check safety.",
    urgency: {
      challengeText: "Manual quality checks on manufacturing lines are slow and miss subtle surface defects, leading to bad shipments.",
      metricHighlight: "99%",
      metricLabel: "detection accuracy reached by neural computer vision inspection models",
      accordion: [
        {
          question: "Can vision models run on-premise for safety?",
          answer: "Yes, we deploy light neural networks to edge hardware (e.g. Nvidia Jetson) to analyze feeds without internet lags."
        }
      ]
    },
    essentials: [
      { title: "Object Detection", description: "Locate and count items, packages, or equipment inside frames." },
      { title: "Image Classification", description: "Sort items by model type, color, or condition." },
      { title: "Defect Segmentation", description: "Flag cracks, scratches, or missing parts on product surfaces." }
    ],
    offerings: [
      { title: "Assembly Line Inspector", description: "Check product build accuracy at 60 frames per second." },
      { title: "Safety Gear Auditor", description: "Flag when workers enter dangerous zones without hardhats or safety vests." },
      { title: "Logistics Package Counter", description: "Count packages on belts and cross-check labels with database bills." }
    ],
    roi: [
      { metric: "99.5%", title: "Defect Catch Rates", description: "Vision systems catch subtle anomalies missed by human eyes." },
      { metric: "3x", title: "Faster Assembly Line Audits", description: "Checking occurs automatically, preventing quality control bottlenecks." },
      { metric: "0", title: "Compliance Fines", description: "Continuous zone checks prevent workplace safety violations." }
    ],
    insights: [
      {
        title: "Vision Model Edge Deployment",
        description: "How to compress and run convolutional neural networks on factory floor devices.",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
        type: "Whitepaper"
      },
      {
        title: "Case Study: Factory Inspection",
        description: "How a machinery plant used computer vision to audit gear quality, cutting returns by 40%.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
        type: "Case Study"
      }
    ]
  }
};
