import { buildServiceMetadata, SITE_URL } from "@/lib/seo";

export const SERVICE_CATEGORY_LABELS = {
  build: "Build",
  scale: "Scale",
  experience: "Experience",
};

export const getRootServicePath = (category, service) =>
  `/services/${category}/${service}`;

export const getRootServiceUrl = (category, service) =>
  `${SITE_URL}${getRootServicePath(category, service)}`;

export const getQaDigitalMarketingPath = (service) =>
  `/qa/services/digital-marketing/${service}`;

export const ROOT_SERVICE_REGISTRY = {
  build: {
    "erp-services": {
      label: "ERP Services",
      status: "dedicated", // served by src/app/services/build/erp-services/page.js
    },
    "enterprise-management-solutions": {
      label: "Enterprise Management Solutions",
      status: "published",
    },
    "website-cms-solutions": {
      label: "Website & CMS Solutions",
      status: "published",
    },
    "custom-application-development": {
      label: "Custom Application Development",
      status: "published",
    },
    "web-development": {
      label: "Web Development",
      status: "live",
      metaTitle: "Web Development Services for High-Performance Websites | Palqar",
      metaDescription:
        "Palqar designs and develops high-performance websites, web applications, and conversion-ready digital platforms built for speed, scalability, and search visibility.",
      heroTitle: "Web Development Services Built for Speed, Scale, and Search Visibility",
      heroDescription:
        "We help teams launch reliable websites and web platforms with clear architecture, strong technical SEO foundations, and a roadmap that keeps future growth manageable.",
      heroImage: "/services/code/website-cms-solutions/hero.webp",
      coverage: [
        "Marketing websites that load quickly and support long-term organic growth.",
        "Custom web applications that bring together product, operations, and customer journeys.",
        "Scalable front-end systems that are easier to extend without introducing routing or content debt.",
      ],
      highlights: [
        {
          title: "Architecture First",
          description:
            "We define the route structure, content model, and performance constraints before implementation grows costly.",
        },
        {
          title: "SEO Ready Delivery",
          description:
            "Every project is planned around crawlability, metadata coverage, and clean internal linking from day one.",
        },
        {
          title: "Built to Evolve",
          description:
            "The end result is a platform your team can expand without fragile page templates or duplicated routing logic.",
        },
      ],
      faq: [
        {
          q: "Can Palqar help if our current website structure is messy?",
          a: "Yes. We regularly stabilize information architecture, route structures, and page templates before moving into broader redesign work.",
        },
        {
          q: "Do you build marketing sites, product sites, and custom web apps?",
          a: "Yes. Our web development work covers marketing websites, conversion-focused service sites, and more complex custom application builds.",
        },
        {
          q: "What should we do if we are not sure which build path fits us?",
          a: "The safest next step is a short discovery session so we can map business goals to the right platform, content, and technical stack.",
        },
        {
          q: "What kinds of products can Palqar build?",
          a: "We build marketing websites, web and mobile apps, internal tools, API platforms and custom software, including products that use AI features.",
        },
        {
          q: "Is support available after launch?",
          a: "Yes. Many clients continue with us for enhancements, fixes and new features once the product is live.",
        },
      ],
      deliverables: [
        "Product strategy and prioritised roadmap",
        "UI/UX design system and key screens",
        "Working MVP or full production build",
        "Technical architecture documentation",
        "Sprint reports and delivery notes",
        "Launch plan covering release and early support",
      ],
      process: [
        {
          title: "Plan",
          description:
            "Agree goals, priorities and scope so the first release targets what matters most.",
        },
        {
          title: "Design",
          description:
            "Shape the user experience and a reusable design system before build begins.",
        },
        {
          title: "Build",
          description:
            "Develop in short iterations with regular reviews so direction can change early.",
        },
        {
          title: "Launch",
          description:
            "Release, monitor and plan the next round of improvements.",
        },
      ],
      exploreLinks: [
        {
          label: "Website & CMS Solutions",
          href: getRootServicePath("build", "website-cms-solutions"),
        },
        {
          label: "Custom Application Development",
          href: getRootServicePath("build", "custom-application-development"),
        },
        {
          label: "Enterprise Management Solutions",
          href: getRootServicePath("build", "enterprise-management-solutions"),
        },
      ],
    },
    "business-automation": {
      label: "Business Automation",
      status: "live",
      metaTitle: "Business Automation Services for Operational Efficiency | Palqar",
      metaDescription:
        "Palqar designs business automation systems that remove manual bottlenecks, improve reporting, and connect teams through reliable workflows and custom software.",
      heroTitle: "Business Automation That Removes Bottlenecks and Improves Operational Clarity",
      heroDescription:
        "We design automation systems around the way your team actually works, so approvals, reporting, follow-ups, and service workflows become faster and easier to manage.",
      heroImage:
        "/services/code/enterprise-management-solutions/workflow3.webp",
      coverage: [
        "Workflow automation for internal teams, service operations, and customer handoffs.",
        "Admin systems that reduce repeated manual work across sales, support, finance, and delivery.",
        "Custom automation planning for businesses that have outgrown disconnected tools and spreadsheets.",
      ],
      highlights: [
        {
          title: "Process Mapping",
          description:
            "We identify which repetitive tasks are worth automating and where approvals, reporting, or notifications create friction.",
        },
        {
          title: "System Integration",
          description:
            "Automation works best when it connects with the systems you already use instead of forcing teams into one more isolated tool.",
        },
        {
          title: "Operational Reliability",
          description:
            "The goal is not flashy automation. The goal is cleaner execution, fewer errors, and more predictable delivery.",
        },
      ],
      faq: [
        {
          q: "What kinds of businesses benefit from automation services?",
          a: "Any business with repeated approvals, lead handoffs, reporting delays, or manual follow-up work can usually gain efficiency from automation.",
        },
        {
          q: "Do you only automate existing software tools?",
          a: "No. We can automate inside existing tools, connect systems together, or build custom interfaces when off-the-shelf workflows are too limiting.",
        },
        {
          q: "Will automation replace our team workflow entirely?",
          a: "Not usually. The better approach is to automate the repeated low-value tasks while keeping the parts that still need human judgment.",
        },
        {
          q: "Do we have to replace the tools we already use?",
          a: "Usually not. Most automation work connects the tools you already have through integrations, and we only recommend replacing one when it cannot support what you need.",
        },
        {
          q: "Which businesses benefit most from automation?",
          a: "Teams with many disconnected tools, heavy manual data entry, and decisions made on out-of-date numbers tend to see the clearest gains.",
        },
      ],
      deliverables: [
        "Automation readiness audit and opportunity register",
        "Systems architecture map showing how tools connect",
        "API and middleware integrations between existing tools",
        "Deployed automated and AI-assisted workflows",
        "Operations dashboard running on live data",
        "Prioritised improvement roadmap",
      ],
      process: [
        {
          title: "Audit",
          description:
            "Review current systems, workflows and manual work to find where automation pays off.",
        },
        {
          title: "Connect",
          description:
            "Integrate tools and data sources so information stops living in silos.",
        },
        {
          title: "Automate",
          description:
            "Deploy workflows and AI-assisted steps for repetitive, rules-based work.",
        },
        {
          title: "Optimise",
          description:
            "Measure results and keep refining as the business changes.",
        },
      ],
      exploreLinks: [
        {
          label: "Enterprise Management Solutions",
          href: getRootServicePath("build", "enterprise-management-solutions"),
        },
        {
          label: "Custom Application Development",
          href: getRootServicePath("build", "custom-application-development"),
        },
        {
          label: "Web Development",
          href: getRootServicePath("build", "web-development"),
        },
      ],
    },
  },
  scale: {
    "enterprise-ecommerce-platform": {
      label: "Enterprise eCommerce Platform",
      status: "published",
    },
    "saas-solutions": {
      label: "SaaS Solutions",
      status: "published",
    },
    "advanced-technology-solutions": {
      label: "Advanced Technology Solutions",
      status: "published",
    },
    "cybersecurity-solutions": {
      label: "Cybersecurity Solutions",
      status: "planned",
      metaTitle: "Cybersecurity Solutions for Growing Digital Operations | Palqar",
      metaDescription:
        "Palqar helps businesses strengthen digital operations with practical cybersecurity planning, secure workflows, and risk-aware technical implementation.",
      heroTitle: "Cybersecurity Solutions That Protect Growth Without Slowing Execution",
      heroDescription:
        "We help teams improve security posture around websites, platforms, workflows, and internal systems so growth does not create avoidable exposure.",
      heroImage: "/services/code/advanced-technology-solutions/hero.webp",
      coverage: [
        "Security-aware delivery planning for websites, SaaS products, and internal systems.",
        "Audit support around access control, deployment hygiene, workflow risk, and platform hardening.",
        "Practical guidance for businesses that need stronger security without unnecessary complexity.",
      ],
      highlights: [
        {
          title: "Security by Design",
          description:
            "We account for access, data flow, and system exposure before security issues become expensive launch blockers.",
        },
        {
          title: "Platform Hardening",
          description:
            "A safer deployment footprint starts with clearer permissions, cleaner environments, and better operational controls.",
        },
        {
          title: "Risk Reduction",
          description:
            "The aim is to reduce real business risk around customer data, admin access, and service continuity.",
        },
      ],
      faq: [
        {
          q: "Do you handle cybersecurity only for large enterprise systems?",
          a: "No. Smaller service businesses and product teams often need security planning even more because one weak workflow can create outsized operational risk.",
        },
        {
          q: "Can cybersecurity support be combined with development work?",
          a: "Yes. Security is most effective when it is considered alongside architecture, deployment, automation, and platform growth decisions.",
        },
        {
          q: "Is this the same as a formal compliance engagement?",
          a: "Not by default. We focus first on practical security improvements, then help scope compliance-related work when it becomes necessary.",
        },
      ],
      exploreLinks: [
        {
          label: "Advanced Technology Solutions",
          href: getRootServicePath("scale", "advanced-technology-solutions"),
        },
        {
          label: "SaaS Solutions",
          href: getRootServicePath("scale", "saas-solutions"),
        },
        {
          label: "Business Automation",
          href: getRootServicePath("build", "business-automation"),
        },
      ],
    },
    "digital-marketing": {
      label: "Digital Marketing",
      status: "planned",
      metaTitle: "Digital Marketing Services Focused on Search, Demand, and Conversion | Palqar",
      metaDescription:
        "Palqar plans digital marketing systems around SEO, paid acquisition, content, and conversion strategy so growth efforts stay measurable and sustainable.",
      heroTitle: "Digital Marketing Services Aligned to Search Visibility, Demand Capture, and Revenue Growth",
      heroDescription:
        "We build growth programs that connect search, campaigns, content, and conversion journeys instead of treating them as separate channels with separate goals.",
      heroImage: "/services/code/design-experience/img2.webp",
      coverage: [
        "Technical and content SEO for long-term organic visibility.",
        "Performance marketing planning tied to landing pages, measurement, and pipeline quality.",
        "Lifecycle and retention thinking that turns campaign traffic into repeatable growth.",
      ],
      highlights: [
        {
          title: "Channel Alignment",
          description:
            "SEO, paid media, landing pages, and messaging perform better when planned as one growth system.",
        },
        {
          title: "Conversion Focus",
          description:
            "We prioritize measurable movement from impression to click to lead, not vanity activity across disconnected platforms.",
        },
        {
          title: "Technical Foundation",
          description:
            "Stronger performance comes from good routing, page speed, indexing health, and clean content architecture.",
        },
      ],
      faq: [
        {
          q: "Do you offer one-off marketing campaigns or ongoing growth support?",
          a: "Both are possible, but the best results usually come from a structured engagement where search, paid traffic, and conversion paths are managed together.",
        },
        {
          q: "Can Palqar work with an existing internal marketing team?",
          a: "Yes. We often support in-house teams with strategy, technical SEO, landing page improvements, and channel-specific execution.",
        },
        {
          q: "Which marketing services are already available right now?",
          a: "Our existing pages already cover SEO, social media marketing, email marketing, influencer marketing, performance marketing, and reputation management.",
        },
      ],
      exploreLinks: [
        {
          label: "SEO Services",
          href: getQaDigitalMarketingPath("seo"),
        },
        {
          label: "Performance Marketing",
          href: getQaDigitalMarketingPath("performance-marketing"),
        },
        {
          label: "Email Marketing",
          href: getQaDigitalMarketingPath("email-marketing"),
        },
      ],
    },
    "growth-strategy": {
      label: "Growth Strategy",
      status: "live",
      metaTitle: "Growth Strategy Services for Expansion-Ready Businesses | Palqar",
      metaDescription:
        "Palqar helps businesses build clearer growth strategies across positioning, channel planning, digital operations, and conversion pathways.",
      heroTitle: "Growth Strategy Services for Teams That Need Clearer Direction Before Scaling",
      heroDescription:
        "We help teams turn scattered ideas into a sharper growth plan, with clearer priorities across positioning, digital operations, offers, and conversion paths.",
      heroImage: "/services/code/advanced-technology-solutions/img1.webp",
      coverage: [
        "Growth planning across positioning, digital experience, channel mix, and offer clarity.",
        "Advisory support for businesses preparing to restructure service pages, demand generation, or go-to-market execution.",
        "Roadmaps that connect business goals with realistic content, platform, and performance priorities.",
      ],
      highlights: [
        {
          title: "Priority Mapping",
          description:
            "We surface which technical, content, and commercial issues deserve attention first so growth does not stall under competing priorities.",
        },
        {
          title: "Cross-Team Alignment",
          description:
            "Good strategy helps leadership, marketing, design, and development teams move in the same direction.",
        },
        {
          title: "Execution Clarity",
          description:
            "The outcome is a plan that can actually be implemented, measured, and improved without guesswork.",
        },
      ],
      faq: [
        {
          q: "Is growth strategy different from digital marketing?",
          a: "Yes. Marketing is one execution layer. Growth strategy defines the broader priorities around offers, positioning, site architecture, channel choice, and conversion flow.",
        },
        {
          q: "Do you only work with startups on strategy engagements?",
          a: "No. We also support established businesses that need clearer structure before scaling web, product, or marketing investment.",
        },
        {
          q: "Can strategy work lead into design or development execution?",
          a: "Yes. Strategy often becomes the foundation for service page restructuring, website builds, automation work, or campaign planning.",
        },
        {
          q: "What is the difference between validation and market research?",
          a: "Market research describes a market, while validation tests whether your specific product or offer has a viable position in it, using evidence such as customer conversations and competitor analysis.",
        },
        {
          q: "How do we know if we are ready to scale?",
          a: "A business is usually ready when revenue is repeatable, the product is validated, and the underlying systems can handle more volume. We review these before recommending a growth plan.",
        },
      ],
      deliverables: [
        "Competitive map and customer insight summary",
        "Product-market fit and opportunity assessment",
        "Go-to-market and market-expansion plan",
        "KPI framework and analytics dashboard",
        "Technical and operational readiness review",
        "Ongoing strategic advisory option",
      ],
      process: [
        {
          title: "Assess",
          description:
            "Identify what is limiting growth today: market, product, systems or operations.",
        },
        {
          title: "Validate",
          description:
            "Test demand and positioning against evidence before committing budget.",
        },
        {
          title: "Strengthen",
          description:
            "Improve the systems, measurement and operations that growth will lean on.",
        },
        {
          title: "Expand",
          description:
            "Enter new segments or markets with a plan and clear success measures.",
        },
      ],
      exploreLinks: [
        {
          label: "Digital Marketing",
          href: getRootServicePath("scale", "digital-marketing"),
        },
        {
          label: "Advanced Technology Solutions",
          href: getRootServicePath("scale", "advanced-technology-solutions"),
        },
        {
          label: "Contact Palqar",
          href: "/contact#contact-form",
        },
      ],
    },
  },
  experience: {
    "design-experience": {
      label: "Design & Experience",
      status: "published",
    },
    "branding-identity": {
      label: "Branding & Identity",
      status: "planned",
      metaTitle: "Branding and Identity Services for Distinctive Growth | Palqar",
      metaDescription:
        "Palqar helps businesses shape stronger brands through identity systems, positioning clarity, and creative direction that supports long-term growth.",
      heroTitle: "Branding and Identity Services That Make Digital Growth Easier to Recognize and Trust",
      heroDescription:
        "We help businesses clarify how they look, sound, and show up across digital touchpoints so every campaign, website, and customer interaction feels more consistent.",
      heroImage: "/services/code/design-experience/hero.webp",
      coverage: [
        "Brand identity systems designed to support websites, campaigns, sales material, and future product growth.",
        "Positioning and creative direction work for teams that need stronger consistency across touchpoints.",
        "Messaging and visual alignment that helps design choices reinforce trust instead of creating confusion.",
      ],
      highlights: [
        {
          title: "Identity with Use Cases",
          description:
            "Brand systems work better when they are designed for real websites, campaigns, and operational needs, not just presentation decks.",
        },
        {
          title: "Consistency at Scale",
          description:
            "Clear brand rules make content, design, and performance work easier to execute without constant reinvention.",
        },
        {
          title: "Creative Direction",
          description:
            "We focus on brand choices that support business growth, not aesthetics in isolation.",
        },
      ],
      faq: [
        {
          q: "Can branding work be combined with website or campaign execution?",
          a: "Yes. Branding is often most effective when it is translated directly into the website, landing pages, ad creative, and supporting content system.",
        },
        {
          q: "Do you only work on full rebrands?",
          a: "No. Some teams need a full identity reset, while others need targeted brand clarification and consistency improvements.",
        },
        {
          q: "Is branding relevant if we mainly care about leads and conversion?",
          a: "Yes. Clear branding improves trust, message consistency, and landing page coherence, which all directly affect conversion quality.",
        },
      ],
      exploreLinks: [
        {
          label: "Design & Experience",
          href: getRootServicePath("experience", "design-experience"),
        },
        {
          label: "Digital Marketing",
          href: getRootServicePath("scale", "digital-marketing"),
        },
        {
          label: "Growth Strategy",
          href: getRootServicePath("scale", "growth-strategy"),
        },
      ],
    },
  },
};

export const QA_DIGITAL_MARKETING_LINKS = {
  seo: {
    label: "SEO",
    href: getQaDigitalMarketingPath("seo"),
  },
  ssm: {
    label: "Social Media Marketing",
    href: getQaDigitalMarketingPath("ssm"),
  },
  "email-marketing": {
    label: "Email Marketing",
    href: getQaDigitalMarketingPath("email-marketing"),
  },
  "reputation-management": {
    label: "Reputation Management",
    href: getQaDigitalMarketingPath("reputation-management"),
  },
  "influencer-marketing": {
    label: "Influencer Marketing",
    href: getQaDigitalMarketingPath("influencer-marketing"),
  },
  "performance-marketing": {
    label: "Performance Marketing",
    href: getQaDigitalMarketingPath("performance-marketing"),
  },
};

export const HEADER_SERVICE_COLUMNS = [
  {
    category: "Code",
    num: "01",
    items: [
      {
        label: "ERP Services",
        href: getRootServicePath("build", "erp-services"),
      },
      {
        label: "Enterprise Management Solutions",
        href: getRootServicePath("build", "enterprise-management-solutions"),
      },
      {
        label: "Website & CMS Solutions",
        href: getRootServicePath("build", "website-cms-solutions"),
      },
      {
        label: "Custom Application Development",
        href: getRootServicePath("build", "custom-application-development"),
      },
      {
        label: "Enterprise eCommerce Platform",
        href: getRootServicePath("scale", "enterprise-ecommerce-platform"),
      },
      {
        label: "SaaS Solutions",
        href: getRootServicePath("scale", "saas-solutions"),
      },
      {
        label: "Advanced Technology Solutions",
        href: getRootServicePath("scale", "advanced-technology-solutions"),
      },
      {
        label: "Design & Experience",
        href: getRootServicePath("experience", "design-experience"),
      },
      {
        label: "Cybersecurity Solutions",
        href: getRootServicePath("scale", "cybersecurity-solutions"),
      },
    ],
  },
  {
    category: "Creativity",
    num: "02",
    items: [
      {
        label: "Branding & Identity",
        href: getRootServicePath("experience", "branding-identity"),
      },
      {
        label: "Advertising & Communication",
        href: getRootServicePath("scale", "digital-marketing"),
      },
    ],
  },
  {
    category: "Conversion",
    num: "03",
    items: [
      {
        label: "Performance Marketing",
        href: QA_DIGITAL_MARKETING_LINKS["performance-marketing"].href,
      },
      {
        label: "Influencer Marketing",
        href: QA_DIGITAL_MARKETING_LINKS["influencer-marketing"].href,
      },
      {
        label: "SEO",
        href: QA_DIGITAL_MARKETING_LINKS.seo.href,
      },
      {
        label: "Marketing Automation",
        href: getRootServicePath("build", "business-automation"),
      },
    ],
  },
  {
    category: "Consulting",
    num: "04",
    items: [
      {
        label: "Business & Corporate Strategy",
        href: getRootServicePath("scale", "growth-strategy"),
      },
    ],
  },
];

export const SERVICE_PREVIEW_LINKS = {
  webDevelopment: getRootServicePath("build", "web-development"),
  brandingIdentity: getRootServicePath("experience", "branding-identity"),
  digitalMarketing: getRootServicePath("scale", "digital-marketing"),
  businessAutomation: getRootServicePath("build", "business-automation"),
  growthStrategy: getRootServicePath("scale", "growth-strategy"),
};

export const FOOTER_SOLUTION_LINKS = [
  QA_DIGITAL_MARKETING_LINKS.seo,
  QA_DIGITAL_MARKETING_LINKS.ssm,
  QA_DIGITAL_MARKETING_LINKS["email-marketing"],
  QA_DIGITAL_MARKETING_LINKS["reputation-management"],
  QA_DIGITAL_MARKETING_LINKS["influencer-marketing"],
  {
    label: "Web Development",
    href: getRootServicePath("build", "web-development"),
  },
  {
    label: "Brand Strategy",
    href: getRootServicePath("experience", "branding-identity"),
  },
  QA_DIGITAL_MARKETING_LINKS["performance-marketing"],
  {
    label: "Business Automation",
    href: getRootServicePath("build", "business-automation"),
  },
];

export function getRootServiceEntry(category, service) {
  return ROOT_SERVICE_REGISTRY[category]?.[service] ?? null;
}

export function getAllRootServiceParams() {
  return Object.entries(ROOT_SERVICE_REGISTRY).flatMap(([category, services]) =>
    Object.keys(services).map((service) => ({ category, service })),
  );
}

export function getRootServiceStatus(category, service) {
  return getRootServiceEntry(category, service)?.status ?? null;
}

export function isPublishedRootService(category, service) {
  return getRootServiceStatus(category, service) === "published";
}

// Rendered with the lightweight RootServiceFallback template. "live" entries
// use that template but are fully indexable; "planned"/"draft" are placeholders.
export function isFallbackRootService(category, service) {
  const status = getRootServiceStatus(category, service);

  return status === "planned" || status === "draft" || status === "live";
}

export function isIndexableRootService(category, service) {
  const status = getRootServiceStatus(category, service);

  return status !== "planned" && status !== "draft";
}

export const LEGACY_QA_MARKETING_PATHS = {
  seo: "/seo",
  ssm: "/ssm",
  "email-marketing": "/email-marketing",
  "reputation-management": "/reputation-management",
  "influencer-marketing": "/influencer-marketing",
  "performance-marketing": "/performance-marketing",
};

export function buildCanonicalServiceMetadata(meta, canonicalPath, locale = "en_US") {
  return buildServiceMetadata({
    title: meta.title,
    description: meta.description,
    path: canonicalPath,
    keywords: meta.keywords,
    locale,
  });
}
