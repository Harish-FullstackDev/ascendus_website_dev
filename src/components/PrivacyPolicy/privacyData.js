export const sections = [
  "Summary",
  "How We Use Your Data",
  "How We Share Your Data",
  "How We Keep Information Secure",
  "How Long We Keep Information",
  "Your Rights",
  "PrivacyPolicyCommitment",
  "How To Contact Us",
  "Changes To This Policy",
];

export const sectionContent = {
  Summary: {
    title: "Summary of Our Privacy Policy",
    paragraphs: [
      "This summary covers the Ascendus website, client portals, and every product, application, and service we deliver, including our SAP consulting and implementation engagements and our custom application development and ERP/CRM integration work. The detailed Privacy Policy that follows carries the same structure as this summary and forms the actual policy that governs how we handle personal data.",
      "Our privacy commitment: Ascendus does not sell your personal data to third parties for advertising, and we do not monetize your data by showing you other people's advertisements. As a technology services provider trusted with sensitive client systems and business data, we treat confidentiality and data protection as core to how we operate not as an afterthought. This policy explains what information we collect, how we use it, who can access it, and the choices available to you.",
    ],
  },

  "How We Use Your Data": {
    title: "How do We Use Your Personal Data",
    paragraphs: [
      "The following section describes how Ascendus collects and uses personal information:",
      { text: "To Provide Access to Our Website and Client Portals", heading: true },
      "Ascendus may collect personal information through its website, client portals, and digital platforms to facilitate access, enhance user experience, maintain security, and support the delivery of its services.",
      "Visitors can generally access the public website without providing personal information. However, certain technical information may be collected automatically by Ascendus or its analytics service providers, including:",
      {
        bullets: [
          "IP address",
          "Browser type and operating system",
          "Pages visited and navigation patterns",
          "Device and network information",
          "Language and regional settings",
        ],
      },
      "This information is used to analyze website performance, improve functionality and content, enhance user experience, and protect our websites, applications, and client-facing platforms from security threats.",
      "When accessing authenticated environments, such as client portals, project workspaces, support ticketing systems, or SAP, ERP, and other enterprise platforms managed by Ascendus, additional information such as usernames, login credentials, and access logs may be collected to authenticate users, administer accounts, and maintain the security and integrity of our systems.",
      "Ascendus also uses cookies and similar technologies to support essential website functionality, enhance performance, and understand user interactions. Cookie preferences can be managed through your browser settings.",
      { text: "Responding to Enquiries, Support Requests, and Project Communications", heading: true },
      "Ascendus processes personal information to respond to enquiries, manage support requests, and communicate throughout client engagements. Depending on the nature of your interaction, we may collect:",
      {
        bullets: [
          "Name, job title, company, and contact details",
          "Information relating to your enquiry or business requirements",
          "The content of communications, support requests, and any files you choose to share",
        ],
      },
      "This information is used to respond to your requests, provide support, and maintain effective communication. You may update your communication preferences or opt out of marketing communications at any time.",
      { text: "Delivering SAP, ERP, CRM, and Application Development Services", heading: true },
      "To deliver consulting, implementation, migration, integration, managed services, and application development, Ascendus may process information contained within client systems, including configuration, master, test, or transactional data.",
      "When processing such information, Ascendus:",
      {
        bullets: [
          "Acts on behalf of the client in accordance with contractual obligations.",
          "Limits access to authorized personnel with a legitimate business need.",
          "Processes information only for the agreed scope of services.",
          "Does not use client data for its own marketing or unrelated business purposes.",
        ],
      },
      { text: "Administering Events, Webinars, and Training", heading: true },
      "Ascendus may collect your name, company, job title, email address, and, where applicable, your image or voice when you participate in events, webinars, or training sessions. This information is used to manage registrations, facilitate participation, and share relevant follow-up materials.",
      { text: "Promoting Our Services", heading: true },
      "Ascendus may use business contact information to share updates about its services, events, and technology solutions where permitted by applicable law. You may opt out of marketing communications at any time using the unsubscribe link in our emails or by contacting us directly.",
    ],
  },

  "How We Share Your Data": {
    title: "How We Share Personal Information",
    paragraphs: [
      "Ascendus does not sell personal information. Personal information is shared only where necessary to deliver our services, comply with legal obligations, or support legitimate business operations, and is protected by appropriate contractual and security measures.",
      { text: "Third-Party Service Providers", heading: true },
      "Ascendus may share personal information with trusted service providers that support our business operations, including cloud hosting, IT infrastructure, analytics, and technical support. These providers are authorized to process personal information only on our behalf and are required to maintain appropriate security and confidentiality standards.",
      { text: "Sub-processors for Client Engagements", heading: true },
      "Where client engagements require the involvement of approved sub-processors, such as implementation partners or hosting providers, Ascendus ensures that appropriate contractual obligations are in place to protect personal information and comply with applicable data protection requirements.",
      { text: "International Data Transfers", heading: true },
      "Personal information may be transferred to or accessed from countries where Ascendus, its affiliates, or its service providers operate. Where such transfers occur, appropriate safeguards are implemented in accordance with applicable data protection laws to ensure the protection of personal information.",
    ],
  },

  "How We Keep Information Secure": {
    title: "How We Keep Personal Information Secure",
    paragraphs: [
      "Ascendus implements appropriate technical, organizational, and administrative safeguards to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
      "Security measures include access controls, the principle of least privilege, system monitoring, and confidentiality obligations for employees, contractors, and authorized third parties. These controls are designed to safeguard both our systems and the client environments we manage.",
      "Ascendus maintains incident response procedures to address security incidents promptly and will notify affected individuals and relevant regulatory authorities of personal data breaches where required by applicable law.",
    ],
  },

  "How Long We Keep Information": {
    title: "How Long We Keep Personal Information",
    paragraphs: [
      "Ascendus retains personal information only for as long as necessary to fulfil the purposes for which it was collected, comply with legal and contractual obligations, resolve disputes, and enforce our agreements. Client project data is retained in accordance with the applicable contractual terms and is securely returned or deleted at the end of an engagement, unless a longer retention period is required by law or agreed with the client.",
    ],
  },

  "Your Rights": {
    title: "Your Rights",
    paragraphs: [
      "Subject to applicable data protection laws, you may have the right to access, correct, update, delete, or restrict the processing of your personal information, object to certain processing activities, withdraw consent where applicable, or request data portability. Requests may be submitted using the contact details provided below.",
    ],
  },

  PrivacyPolicyCommitment: {
    title: "Privacy Policy Commitment",
    paragraphs: [
      "Ascendus is committed to protecting personal information and maintaining transparency in how we handle it. Read our full commitment below.",
      { text: "View Our Privacy Policy Commitment", href: "/legal/privacyCommitment" },
    ],
  },

  "How To Contact Us": {
    title: "How to Contact Us",
    paragraphs: [
      {
        parts: [
          "For questions, requests, or concerns regarding this Privacy Policy or the processing of your personal information, please contact Ascendus at ",
          { text: "legal@ascendus.tech", href: "mailto:legal@ascendus.tech" },
          " or through the Contact Us section of our website.",
        ],
      },
    ],
  },

  "Changes To This Policy": {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "Ascendus may update this Privacy Policy from time to time to reflect changes in applicable laws, technology, business operations, or privacy practices. The latest version will be made available on our website, and material changes will be communicated where appropriate.",
    ],
  },
};
