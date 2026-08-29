// Static data for the Case Studies page.
// Schema intentionally mirrors the Supabase blogs shape for rendering compatibility.

export const caseStudiesData = [
  {
    id: 1,
    slug: "fintech-ux-wireframing-accelerator",
    title: "How Ascendus Slashed a FinTech Client's Development Rework by 60% Through UX-First Wireframing",
    type: "Case Study",
    category: "Financial Technology",
    summary:
      "A fast-growing FinTech startup engaged Ascendus to bring structure to a product that had stalled in development. By introducing a disciplined, UX-first wireframing process before any code was written, the team eliminated the root cause of scope creep and expensive late-stage rework.",
    cover_image: "/ServicePage/software-delivery-team.jpg",
    publish_date: "2026-08-15",
    author: "Ascendus Product Engineering Team",
    metaLine: "Financial Technology · 10-week engagement",
    tags: ["UX Design", "Wireframing", "Product Engineering", "FinTech", "Agile"],
    highlights: [
      { label: "Development Rework", value: "-60%" },
      { label: "Time to Prototype", value: "3 weeks" },
      { label: "Stakeholder Approval Rounds", value: "1 (vs. 6 previously)" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "The client had been building a personal finance management app for nearly eight months. Despite a capable development team and a clear product vision at the executive level, the project had delivered only 40% of its planned feature set and was burning through sprint capacity fixing features that had already shipped. Stakeholder reviews were exposing structural navigation problems that required reworking screens that had taken weeks to build.\n\nWhen Ascendus was brought in, the root diagnosis was immediate: the team had moved from brief requirements documents directly into code, skipping the wireframing and user flow design phase entirely. Every misaligned assumption about user behaviour was coded, tested, and released before it was caught.",
      },
      {
        heading: "The Approach",
        content:
          "Ascendus introduced a four-stage wireframing methodology before any new feature entered development.\n\nFirst, we ran a one-week discovery sprint to define the target users, their core jobs-to-be-done, and the critical user flows that the app needed to serve. This gave us a shared vocabulary between product, design, and engineering.\n\nSecond, the team produced low-fidelity paper and whiteboard sketches of every key screen. These were reviewed and iterated in two days—a process that would have taken six weeks if done with coded interfaces.\n\nThird, we built mid-fidelity digital wireframes in Figma, capturing layout, navigation hierarchy, and interaction patterns without investing time in visual design. These were tested with five representative users to identify friction points before any development decision was committed.\n\nFinally, the approved wireframes became the single source of truth for sprint planning. Every story was scoped against the wireframe. Developers knew exactly what they were building before the sprint began.",
      },
      {
        heading: "The Results",
        content:
          "The first feature set built under the new process shipped with zero structural rework requests from stakeholders—a first for the project. Development velocity increased by 35% because engineers were no longer context-switching to respond to design changes mid-sprint.\n\nOver the ten-week engagement, the client reduced development rework by 60% compared to the previous eight-month average. The wireframing investment—three weeks of designer and product time—saved an estimated fourteen weeks of engineering rework. Time to prototype dropped from an informal, unpredictable process to a repeatable three-week cycle.",
      },
      {
        heading: "Key Lessons",
        content:
          "The engagement reinforced a principle that Ascendus applies across every product engagement: the cost of fixing a problem scales exponentially with how late in the development cycle it is discovered. A structure problem caught on a paper sketch costs thirty minutes. The same problem caught after a sprint of coding costs days.\n\nWireframing is not a design luxury—it is the most cost-efficient quality gate available to any software team. For FinTech clients in particular, where regulatory requirements demand precise UI behaviour and user trust depends on clear, intuitive interfaces, a UX-first wireframing process is not optional. It is the foundation that everything else is built on.",
      },
    ],
  },
  {
    id: 2,
    slug: "healthcare-mobile-security-architecture",
    title: "Securing a Healthcare Mobile Platform: Ascendus Implements Zero-Compromise Security Architecture",
    type: "Case Study",
    category: "Healthcare & Life Sciences",
    summary:
      "A regional healthcare provider needed to launch a patient-facing mobile application that handled sensitive medical records and prescription data. Ascendus designed and implemented an end-to-end mobile security architecture that ensured regulatory compliance, protected patient data, and passed a third-party penetration test with zero critical findings.",
    cover_image: "/ServicePage/HANA.png",
    publish_date: "2026-07-28",
    author: "Ascendus Cybersecurity & Mobile Engineering Team",
    metaLine: "Healthcare & Life Sciences · 14-week engagement",
    tags: ["Mobile Security", "Healthcare", "Compliance", "Encryption", "Penetration Testing"],
    highlights: [
      { label: "Critical Pen Test Findings", value: "0" },
      { label: "Security Vulnerabilities Remediated", value: "23" },
      { label: "Compliance Frameworks Met", value: "HIPAA + ISO 27001" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "The client, a regional healthcare network operating across four states, had developed a patient portal mobile application that allowed users to view lab results, manage prescriptions, and communicate with clinical staff. Before launch, an internal review flagged significant security gaps: data was being stored unencrypted in local device storage, API tokens were embedded in the application binary, session management had no timeout enforcement, and the app requested twelve device permissions—most of which were unnecessary for its core functionality.\n\nA failed internal security review delayed the launch by three months. Ascendus was engaged to design and implement a production-ready security architecture and bring the application to a state where it could pass independent third-party penetration testing.",
      },
      {
        heading: "The Security Architecture",
        content:
          "Ascendus structured the remediation programme around five pillars:\n\n1. Data Encryption and Secure Storage: All patient data persisted on-device was encrypted using AES-256 via the platform's secure enclave APIs. Keychain (iOS) and Android Keystore were used for credential storage, replacing the plain-text SharedPreferences implementation.\n\n2. Secure API Communication: The hardcoded API tokens were replaced with a short-lived JWT authentication flow backed by OAuth 2.0. All API calls were enforced over TLS 1.3 with certificate pinning to prevent man-in-the-middle interception.\n\n3. Code Obfuscation and Tamper Detection: ProGuard and R8 were applied to the Android build. Runtime integrity checks were added to detect rooted or jailbroken devices and warn users before sensitive operations were performed.\n\n4. Principle of Least Privilege: The permission manifest was reduced from twelve to four permissions—camera (for document upload), biometric authentication, push notifications, and secure storage—with clear user-facing rationale for each.\n\n5. Continuous Security Testing: SAST scanning was integrated into the CI/CD pipeline using a static analysis tool configured with OWASP Mobile Top 10 rules. Every pull request was gated on a clean scan result before merging.",
      },
      {
        heading: "The Results",
        content:
          "The application passed independent third-party penetration testing with zero critical or high-severity findings—a result the testing firm noted was uncommon for healthcare mobile apps at first engagement. Twenty-three pre-existing vulnerabilities identified in the initial assessment were fully remediated.\n\nThe application was granted approval to handle Protected Health Information under HIPAA, and the security architecture was also independently verified against ISO 27001 controls. The client launched on schedule and has had no security incidents in the six months since deployment.",
      },
      {
        heading: "Why Security Cannot Be an Afterthought",
        content:
          "The cost of the remediation programme—fourteen weeks of specialist effort—was approximately four times what a Secure by Design approach from the project's inception would have cost. This is the consistent pattern Ascendus observes across healthcare and financial services mobile projects: security bolted on at the end requires expensive architectural changes, not just configuration updates.\n\nFor any application that touches sensitive personal data, our recommendation is to embed security requirements into the product definition phase, run SAST from the first sprint, and treat penetration testing as a confirmation step—not a discovery step. The goal is to reach the pen test already knowing what the testers will find, because your process has already found and fixed it.",
      },
    ],
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudiesData.find((item) => item.slug === slug) || null;
