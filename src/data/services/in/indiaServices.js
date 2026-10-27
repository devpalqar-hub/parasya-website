// India service pages, served at /in/services/<category>/<service>.
// Content is adapted from Palqar's partner company, Koncepts Lab
// (konceptslab.com), and rewritten under the Palqar name. Each entry follows
// the shape rendered by RootServiceFallback.

const inPath = (category, service) => `/in/services/${category}/${service}`;

export const INDIA_LOCALE = "en_IN";

export const indiaServices = {
  "build/enterprise-management-solutions": {
    label: "Enterprise Management Solutions",
    metaTitle: "Enterprise Management Solutions for Indian Businesses | Palqar",
    metaDescription:
      "Palqar builds custom ERP, CRM, POS and supply chain systems for Indian businesses, connecting departments, automating manual work and giving leaders real-time visibility.",
    heroTitle: "Scalable Enterprise Systems That Power Business Growth in India",
    heroDescription:
      "Modern enterprises need agility, real-time visibility and efficiency across every function. We build enterprise management systems that connect departments, automate manual processes and surface actionable insights on secure, cloud-ready architecture.",
    coverage: [
      "Retail POS with ERP integration: real-time inventory sync, sales tracking and order management with centralised multi-location reporting.",
      "Omnichannel CRM with marketing automation: lead pipelines, sales automation, ticketing workflows and third-party integrations.",
      "End-to-end service workflow automation: job tracking, technician assignment, parts inventory and complete service histories.",
      "Supply chain visibility and fleet optimisation: real-time inventory tracking, GPS-enabled fleet management and route optimisation.",
    ],
    highlights: [
      {
        title: "Custom-Built for You",
        description:
          "No templates. Enterprise solutions are tailored around your operations, whether built from scratch or extending platforms such as SAP, Zoho, Oracle, Odoo and Tally.",
      },
      {
        title: "Cross-Platform Expertise",
        description:
          "Laravel, Vue.js/Nuxt and Flutter builds with GCP, AWS and Azure integrations.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Systems designed to support enterprise-wide, multi-branch operations as you grow.",
      },
      {
        title: "Enterprise Security",
        description:
          "Multi-level authentication, encryption and compliance standards across every module.",
      },
    ],
    process: [
      {
        title: "Needs First",
        description:
          "Every system is shaped around your business workflows, industry goals and operational requirements.",
      },
      {
        title: "Integrated Architecture",
        description:
          "Unified data models connect finance, HR, operations, sales, POS, service centres, warehouse and supply chain modules.",
      },
      {
        title: "Automation Focused",
        description:
          "An automation-first approach removes repetitive tasks and reduces human error across functions.",
      },
      {
        title: "Scalable by Design",
        description:
          "Cloud-ready infrastructure supports growth, multi-location operations and evolving needs.",
      },
    ],
    faq: [
      {
        q: "What is the difference between Enterprise Management Solutions and ERP Services?",
        a: "ERP Services is the focused work of building, extending or integrating an ERP for core operations such as inventory, finance and HR. Enterprise Management Solutions is the broader programme of connected systems around it, including POS, CRM, service workflows and supply chain tools.",
      },
      {
        q: "Do you build custom enterprise systems or customise existing ones?",
        a: "Both. We build from scratch or extend platforms such as SAP, Zoho, Oracle, Odoo and Tally.",
      },
      {
        q: "Are these solutions cloud-based or on-premises?",
        a: "We offer cloud, hybrid and on-premises deployments based on your compliance and business needs.",
      },
      {
        q: "Can you integrate with the third-party tools we already use?",
        a: "Yes. Integration with ERP, CRM, HR tools, finance systems and custom APIs is part of our core offering.",
      },
      {
        q: "How long does it take to develop an enterprise solution?",
        a: "Typically 8 to 16 weeks, depending on scope, number of modules and integration complexity.",
      },
    ],
    exploreLinks: [
      { label: "ERP Services", href: inPath("build", "erp-services") },
      {
        label: "Custom Application Development",
        href: inPath("build", "custom-application-development"),
      },
      {
        label: "Enterprise eCommerce Platform",
        href: inPath("scale", "enterprise-ecommerce-platform"),
      },
    ],
  },

  "build/website-cms-solutions": {
    label: "Website & CMS Solutions",
    metaTitle: "Website & CMS Development Services in India | Palqar",
    metaDescription:
      "Palqar builds corporate websites, custom CMS platforms, Shopify stores and website migrations for businesses across India, with SEO-ready code and fast performance.",
    heroTitle: "Website and CMS Development That Gives You Full Control of Your Content",
    heroDescription:
      "Your website is your brand's first impression, sales engine and communication hub. We build custom websites and content management systems that combine strong UI/UX, high performance and enterprise reliability, from corporate sites to headless CMS architecture.",
    coverage: [
      "Corporate and marketing websites: responsive, SEO-optimised and designed around clarity and conversion.",
      "CMS development on WordPress, Strapi or custom headless systems, with role-based access, approval workflows and multilingual support.",
      "Shopify development: custom themes, mobile-first layouts and checkout flows with Indian gateways such as Razorpay, Paytm and PhonePe.",
      "Website revamp and migration: UI/UX improvements, technical SEO, clean code restructuring and CMS migration.",
    ],
    highlights: [
      {
        title: "Tech + Design Expertise",
        description: "UI/UX and development teams work together for seamless delivery.",
      },
      {
        title: "CMS Agnostic",
        description:
          "We pick WordPress, Strapi or a custom headless CMS based on the scalability you need.",
      },
      {
        title: "SEO-Ready Code",
        description: "Clean architecture built for faster ranking and strong performance.",
      },
      {
        title: "Future-Proof Builds",
        description: "Modular, API-first architecture for easy integrations and upgrades.",
      },
    ],
    process: [
      {
        title: "Design That Performs",
        description:
          "Every website balances aesthetics, usability, speed and accessibility.",
      },
      {
        title: "CMS Flexibility",
        description:
          "Your team publishes and updates content through intuitive, role-based workflows.",
      },
      {
        title: "Performance Focus",
        description:
          "Optimised for SEO, Core Web Vitals, mobile responsiveness and fast load times.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built on modern frameworks such as Laravel, Vue.js, Nuxt and headless CMS platforms.",
      },
    ],
    faq: [
      {
        q: "Which CMS platforms do you work with?",
        a: "WordPress, Strapi and custom headless CMS platforms, chosen to suit your scalability needs.",
      },
      {
        q: "Can you migrate our existing website to a new CMS?",
        a: "Yes. We manage full CMS migrations covering content, redirects, SEO and performance tuning with minimal downtime.",
      },
      {
        q: "Do you provide website maintenance after launch?",
        a: "Yes. We offer continuous updates, technical support and security monitoring.",
      },
      {
        q: "How long does it take to develop a new website?",
        a: "Most websites are delivered within 6 to 10 weeks, depending on UI/UX complexity and CMS features.",
      },
    ],
    exploreLinks: [
      {
        label: "Design & Experience",
        href: inPath("experience", "design-experience"),
      },
      {
        label: "Enterprise eCommerce Platform",
        href: inPath("scale", "enterprise-ecommerce-platform"),
      },
      {
        label: "Custom Application Development",
        href: inPath("build", "custom-application-development"),
      },
    ],
  },

  "build/custom-application-development": {
    label: "Custom Application Development",
    metaTitle: "Custom Application Development Services in India | Palqar",
    metaDescription:
      "Palqar designs and builds custom web and mobile applications, workflow automation and API integrations for Indian businesses that have outgrown off-the-shelf software.",
    heroTitle: "Custom Application Development Built Around How Your Business Works",
    heroDescription:
      "Every business has unique processes and goals that off-the-shelf software cannot fully support. We craft scalable, secure and high-performing applications that fit your organisation, from web platforms to mobile apps and system integrations.",
    coverage: [
      "Web application development: PWAs, internal management systems, custom dashboards and admin panels built API-first.",
      "Mobile application development: cross-platform iOS and Android apps built with Flutter on API-driven backends.",
      "Workflow automation: logic-based triggers, notifications and process flows that remove repetitive manual work.",
      "System integration and API development: RESTful and GraphQL APIs connecting legacy systems with modern platforms.",
    ],
    highlights: [
      {
        title: "Custom Builds",
        description: "Every solution is developed from scratch, never from templates.",
      },
      {
        title: "Full Ownership",
        description:
          "We handle everything from UX to backend to post-launch support.",
      },
      {
        title: "Enterprise Security",
        description: "Built with strong data protection and compliance standards.",
      },
      {
        title: "Industry Expertise",
        description:
          "Experience across eCommerce, healthcare, finance and manufacturing.",
      },
    ],
    process: [
      {
        title: "Discovery & Strategy",
        description:
          "We understand your workflows, goals and challenges before writing a line of code.",
      },
      {
        title: "User-Centric Design",
        description:
          "UI/UX that keeps the application intuitive and efficient for every user.",
      },
      {
        title: "Agile Development",
        description: "Iterative sprints for faster delivery and continuous feedback.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to handle growing data, users and business complexity.",
      },
    ],
    faq: [
      {
        q: "What technologies do you use for application development?",
        a: "We work with React, Next.js, Node.js, Laravel and Flutter, deployed on cloud platforms such as AWS, GCP and Azure.",
      },
      {
        q: "Can you develop both web and mobile versions of the same app?",
        a: "Yes. We design and develop web, iOS and Android versions with shared architecture where possible.",
      },
      {
        q: "Do you provide post-launch maintenance?",
        a: "Yes. We offer ongoing support, performance monitoring, security checks and feature enhancements.",
      },
      {
        q: "How do you ensure application security?",
        a: "Through encrypted data storage, authentication layers, role-based access, secure APIs, penetration testing and sound deployment practices.",
      },
    ],
    exploreLinks: [
      {
        label: "Enterprise Management Solutions",
        href: inPath("build", "enterprise-management-solutions"),
      },
      { label: "SaaS Solutions", href: inPath("scale", "saas-solutions") },
      {
        label: "Design & Experience",
        href: inPath("experience", "design-experience"),
      },
    ],
  },

  "scale/enterprise-ecommerce-platform": {
    label: "Enterprise eCommerce Platform",
    metaTitle: "Enterprise eCommerce Platform Development in India | Palqar",
    metaDescription:
      "Palqar develops enterprise eCommerce platforms for Indian and global retail: headless commerce, mobile apps, inventory and order management built for scale.",
    heroTitle: "Scalable eCommerce Experiences That Drive Revenue",
    heroDescription:
      "Modern eCommerce needs robust infrastructure, seamless integrations and exceptional user experiences across every touchpoint. We build fully integrated enterprise platforms that handle high traffic, complex inventories and multi-channel sales.",
    coverage: [
      "Custom eCommerce development: headless architecture, advanced catalogues, smart search, multi-vendor marketplaces and subscription commerce.",
      "Mobile commerce: Flutter apps for iOS and Android with mobile-optimised checkout, in-app purchases and push notifications.",
      "Headless and API-first commerce: decoupled front end and back end with PWA capabilities for app-like performance.",
      "Inventory and order management: real-time stock sync, automated fulfilment and integrations with warehouse, 3PL and shipping partners.",
    ],
    highlights: [
      {
        title: "Enterprise-Grade Architecture",
        description:
          "Built to handle large catalogues, high traffic volumes and complex business rules.",
      },
      {
        title: "Omnichannel Sync",
        description:
          "A unified experience across web, mobile, marketplaces and retail POS.",
      },
      {
        title: "Performance Optimised",
        description: "Fast load times, SEO-ready code and cloud-native scalability.",
      },
      {
        title: "Global Commerce Capabilities",
        description:
          "Multi-currency, multi-language, tax compliance and international shipping.",
      },
    ],
    process: [
      {
        title: "Customer-Centric Design",
        description:
          "Experiences crafted around user behaviour, conversion optimisation and seamless checkout.",
      },
      {
        title: "Omnichannel Architecture",
        description:
          "Unified commerce across web, mobile apps, marketplaces, social commerce and physical retail.",
      },
      {
        title: "Performance First",
        description:
          "Optimised for speed, SEO, Core Web Vitals and peak traffic during sale events.",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Cloud-native architecture on GCP, AWS or Azure for auto-scaling and global reach.",
      },
    ],
    faq: [
      {
        q: "Do you build custom eCommerce platforms or use Shopify?",
        a: "Both. We build custom solutions with Laravel and Vue.js/Nuxt, or develop on Shopify and WooCommerce depending on your scalability needs.",
      },
      {
        q: "Can you integrate with our existing ERP and inventory systems?",
        a: "Yes. We integrate eCommerce platforms with ERPs, CRMs, warehouse management systems and logistics providers.",
      },
      {
        q: "How do you handle high traffic and scalability?",
        a: "We build on cloud-native infrastructure with auto-scaling, load balancing, CDN integration and performance optimisation.",
      },
      {
        q: "Do you support international eCommerce?",
        a: "Yes. We implement multi-currency, multi-language, international shipping, tax calculation and compliance for global commerce.",
      },
    ],
    exploreLinks: [
      {
        label: "Website & CMS Solutions",
        href: inPath("build", "website-cms-solutions"),
      },
      {
        label: "Enterprise Management Solutions",
        href: inPath("build", "enterprise-management-solutions"),
      },
      { label: "ERP Services", href: inPath("build", "erp-services") },
    ],
  },

  "scale/saas-solutions": {
    label: "SaaS Solutions",
    metaTitle: "SaaS Solutions and Product Development in India | Palqar",
    metaDescription:
      "Palqar develops scalable SaaS solutions for Indian businesses: CRM, invoicing, HR and payroll, and inventory platforms with fast deployment and API-first integration.",
    heroTitle: "Launch Faster With Scalable SaaS Solutions",
    heroDescription:
      "Software-as-a-Service gives businesses flexibility, scalability and cost-efficiency without the burden of complex infrastructure. We develop SaaS solutions for teams that need quick deployment, seamless integrations and enterprise-grade reliability.",
    coverage: [
      "CRM SaaS: omnichannel tracking, sales pipeline management with visual boards, lead capture and automated follow-ups.",
      "E-invoicing solutions: compliant invoice, credit note and debit note issuance that works alongside existing ERP and accounting tools.",
      "HR and payroll suites: employee onboarding, attendance, leave and salary processing with a self-service portal.",
      "Inventory and billing systems: real-time stock tracking, multi-warehouse support and e-commerce and POS integration.",
    ],
    highlights: [
      {
        title: "Quick Deployment",
        description: "Launch quickly with minimal setup and onboarding support.",
      },
      {
        title: "Scalable Pricing",
        description:
          "Subscription plans that adapt to your business size and needs.",
      },
      {
        title: "Seamless Integrations",
        description:
          "API-first architecture connects with your ERPs, CRMs, payment gateways and third-party tools.",
      },
      {
        title: "Enterprise-Grade Security",
        description:
          "Encryption, role-based access and compliance standards built in.",
      },
    ],
    faq: [
      {
        q: "Can we customise the SaaS products to our needs?",
        a: "Yes. Customisation options include branding, additional modules and workflow adjustments based on your requirements.",
      },
      {
        q: "How does pricing work?",
        a: "Tiered subscription plans based on users, features and usage. Contact us for detailed pricing.",
      },
      {
        q: "Is my data secure on SaaS platforms?",
        a: "Yes. We follow enterprise-grade security protocols including encryption, regular backups and compliance with international data protection standards.",
      },
      {
        q: "Can you integrate SaaS products with our existing systems?",
        a: "Yes. They are built API-first for integration with ERPs, CRMs, payment gateways and third-party tools.",
      },
    ],
    exploreLinks: [
      {
        label: "Custom Application Development",
        href: inPath("build", "custom-application-development"),
      },
      {
        label: "Advanced Technology Solutions",
        href: inPath("scale", "advanced-technology-solutions"),
      },
      {
        label: "Cybersecurity Solutions",
        href: inPath("scale", "cybersecurity-solutions"),
      },
    ],
  },

  "scale/advanced-technology-solutions": {
    label: "Advanced Technology Solutions",
    metaTitle: "Advanced Technology Solutions: AI, Data, Cloud | Palqar India",
    metaDescription:
      "Palqar delivers AI and machine learning, data and analytics, cloud services and cybersecurity for Indian businesses that want a technology edge.",
    heroTitle: "Future-Proof Your Business With Advanced Technology",
    heroDescription:
      "Staying ahead in a fast-changing digital landscape takes innovation, intelligence and resilience. We deliver AI, data, cloud and security solutions that change how businesses operate, compete and grow.",
    coverage: [
      "AI and machine learning: predictive analytics, personalisation, fraud detection, NLP chatbots, computer vision and custom models.",
      "Data and analytics: ETL pipelines, BI dashboards, big data processing and scalable data warehouses on AWS, GCP and Azure.",
      "Cloud services: cloud-native hosting, migration, DevOps automation and multi-cloud or hybrid infrastructure management.",
      "Cybersecurity: penetration testing, threat monitoring, vulnerability assessments and compliance audits.",
    ],
    highlights: [
      {
        title: "Comprehensive Expertise",
        description:
          "End-to-end solutions across the advanced technology domains.",
      },
      {
        title: "Enterprise-Ready",
        description: "Built for scale, security and long-term reliability.",
      },
      {
        title: "Cross-Industry Experience",
        description:
          "Solutions deployed across finance, healthcare, retail and manufacturing.",
      },
      {
        title: "Innovation Focus",
        description:
          "Current technologies applied to give you a competitive edge.",
      },
    ],
    process: [
      {
        title: "Innovation-Driven",
        description: "The latest technologies applied to complex business challenges.",
      },
      {
        title: "Enterprise-Grade",
        description: "Reliability, security and scalability across every solution.",
      },
      {
        title: "Integration-Ready",
        description: "Connects with your existing systems and workflows.",
      },
      {
        title: "Continuous Evolution",
        description: "Technology that adapts and grows with your business.",
      },
    ],
    faq: [
      {
        q: "What industries do you serve with advanced technology solutions?",
        a: "Finance, healthcare, retail, manufacturing, logistics and more, with solutions tailored to industry-specific needs.",
      },
      {
        q: "Can you integrate AI and analytics with our existing systems?",
        a: "Yes. Solutions are built with integration in mind and work with CRMs, ERPs and enterprise platforms.",
      },
      {
        q: "How do you ensure data security and compliance?",
        a: "Through encryption, access controls, regular audits, penetration testing and adherence to industry compliance standards.",
      },
      {
        q: "Do you provide ongoing support?",
        a: "Yes. We offer continuous monitoring, optimisation, updates and dedicated support.",
      },
    ],
    exploreLinks: [
      {
        label: "Cybersecurity Solutions",
        href: inPath("scale", "cybersecurity-solutions"),
      },
      { label: "SaaS Solutions", href: inPath("scale", "saas-solutions") },
      {
        label: "Enterprise Management Solutions",
        href: inPath("build", "enterprise-management-solutions"),
      },
    ],
  },

  "scale/cybersecurity-solutions": {
    label: "Cybersecurity Solutions",
    metaTitle: "Cybersecurity Solutions for Businesses in India | Palqar",
    metaDescription:
      "Palqar provides security assessments, application and infrastructure security, ISO 27001-aligned governance and managed monitoring for growing Indian businesses.",
    heroTitle: "Enterprise-Grade Cybersecurity That Protects Growth, Compliance and Trust",
    heroDescription:
      "Cybersecurity should never be reactive or fragmented. We deliver outcome-driven security, from rapid exposure assessments and audits to long-term managed security and governance, designed for SMEs and regulated enterprises.",
    coverage: [
      "Security assessment and risk visibility: structured assessments that identify assets, vulnerabilities and real business risk, with a prioritised roadmap.",
      "Application, infrastructure and identity security: protection across web, mobile, API, network and email environments.",
      "Compliance, governance and security architecture: audit-ready frameworks aligned with ISO 27001 and industry regulations.",
      "Managed security, monitoring and incident readiness: ongoing monitoring, vulnerability management, phishing defence and incident preparedness.",
    ],
    highlights: [
      {
        title: "Business-First, Scalable Security",
        description:
          "Security that enables growth and scales from SME to enterprise.",
      },
      {
        title: "Regulatory Awareness",
        description:
          "Experience with local and regional compliance requirements, including ISO 27001.",
      },
      {
        title: "Productised, Outcome-Driven Offerings",
        description: "Clear, measurable offerings built to deliver results.",
      },
      {
        title: "Start Small, Scale Later",
        description:
          "A tiered structure lets you begin with an assessment and grow into managed security.",
      },
    ],
    process: [
      {
        title: "Needs First",
        description:
          "Every engagement starts with your business model, exposure surface and regulatory requirements.",
      },
      {
        title: "Risk Aware",
        description:
          "Focus goes to the risks that truly affect operations, compliance and reputation.",
      },
      {
        title: "Business Aligned",
        description: "Security designed to enable growth and speed, not add friction.",
      },
      {
        title: "Outcome Focused",
        description:
          "Measurable improvements in security posture, visibility and resilience.",
      },
    ],
    faq: [
      {
        q: "Is this suitable for small businesses?",
        a: "Yes. Entry offerings and bundles are designed for SMEs and startups.",
      },
      {
        q: "Do you support compliance requirements?",
        a: "Yes. We support ISO 27001 and industry-specific compliance needs.",
      },
      {
        q: "Is this a one-time service or ongoing?",
        a: "Both. We offer audits, projects, retainers and managed security services.",
      },
      {
        q: "Can we start small and scale later?",
        a: "Yes. The tiered structure is built so you can begin with an assessment and expand.",
      },
    ],
    exploreLinks: [
      {
        label: "Advanced Technology Solutions",
        href: inPath("scale", "advanced-technology-solutions"),
      },
      { label: "SaaS Solutions", href: inPath("scale", "saas-solutions") },
      {
        label: "Enterprise Management Solutions",
        href: inPath("build", "enterprise-management-solutions"),
      },
    ],
  },

  "scale/digital-marketing": {
    label: "Digital Marketing",
    metaTitle: "360° Digital Marketing Services in India | Palqar",
    metaDescription:
      "Palqar plans and runs integrated digital and offline marketing for Indian brands: performance ads, influencer campaigns, SEO, outdoor and event marketing with unified reporting.",
    heroTitle: "360° Marketing That Covers Every Touchpoint",
    heroDescription:
      "A single-channel campaign is no longer enough. We create holistic campaigns that unify online and offline marketing, so your brand voice stays consistent across social, search, print, outdoor and events.",
    coverage: [
      "Digital marketing: performance ads on Meta, Google and LinkedIn, influencer collaborations, social campaigns, SEO and SEM.",
      "Offline marketing: print ads, outdoor branding such as billboards and hoardings, transit ads and theatre commercials.",
      "Experiential and event marketing: event activations, exhibitions and 360° creative direction for launches.",
      "Integrated campaign management: centralised strategy, unified creative direction and measurement across all touchpoints.",
    ],
    highlights: [
      {
        title: "Unified Expertise",
        description: "Digital and offline marketing handled together.",
      },
      {
        title: "Proven Impact",
        description:
          "Campaigns executed for FMCG, real estate, healthcare, retail and tech brands.",
      },
      {
        title: "End-to-End Execution",
        description: "From media planning to creative production.",
      },
      {
        title: "Consolidated Reporting",
        description: "One dashboard tracks results from every touchpoint.",
      },
    ],
    process: [
      {
        title: "Integrated Strategy",
        description: "One message carried consistently across multiple channels.",
      },
      {
        title: "Cross-Platform Execution",
        description: "Digital, print, outdoor and events delivered together.",
      },
      {
        title: "Data-Driven Decisions",
        description: "Insights used to optimise spend across touchpoints.",
      },
      {
        title: "Customer Journey Mapping",
        description: "Seamless experiences from awareness to conversion.",
      },
    ],
    faq: [
      {
        q: "What industries benefit most from 360° marketing?",
        a: "Real estate, healthcare, FMCG, retail, education and lifestyle tend to see the strongest results.",
      },
      {
        q: "Do you handle both creative and media planning?",
        a: "Yes. We design the campaigns and work with media vendors for execution.",
      },
      {
        q: "Can you integrate influencer campaigns into a 360° rollout?",
        a: "Yes. Influencers are an essential part of an integrated strategy.",
      },
      {
        q: "How do you measure ROI across different channels?",
        a: "Through consolidated dashboards that track results from every touchpoint.",
      },
    ],
    exploreLinks: [
      {
        label: "Branding & Identity",
        href: inPath("experience", "branding-identity"),
      },
      {
        label: "Growth Strategy",
        href: inPath("scale", "growth-strategy"),
      },
      {
        label: "Website & CMS Solutions",
        href: inPath("build", "website-cms-solutions"),
      },
    ],
  },

  "scale/growth-strategy": {
    label: "Growth Strategy",
    metaTitle: "Business & Growth Strategy Consulting in India | Palqar",
    metaDescription:
      "Palqar helps Indian businesses refine their business model, plan market expansion, build go-to-market strategy and sharpen competitive positioning.",
    heroTitle: "Strategies That Build Stronger, Smarter and More Scalable Businesses",
    heroDescription:
      "A thriving business is built on clarity, direction and strategic foresight, not guesswork. We partner with companies to refine business models, uncover opportunities and strengthen market position through market intelligence and competitive analysis.",
    coverage: [
      "Business model development: revenue streams, cost structures and value delivery designed to scale sustainably.",
      "Growth strategy and market expansion: new markets, products and partnerships weighed against risk and long-term advantage.",
      "Go-to-market strategy: positioning, channel selection, messaging, pricing and distribution for new products or brand lines.",
      "Competitive analysis and positioning: your landscape, category shifts and a differentiated space customers recognise.",
    ],
    highlights: [
      {
        title: "Insight-Driven",
        description: "Strategies grounded in real data and market intelligence.",
      },
      {
        title: "Complete Alignment",
        description:
          "Your business model, operations and market plan move in one direction.",
      },
      {
        title: "Future-Ready",
        description:
          "Roadmaps built to scale and adapt as the business grows.",
      },
      {
        title: "Fully Collaborative",
        description: "Strategies co-created to fit your goals and capabilities.",
      },
    ],
    process: [
      {
        title: "Insight-Led Discovery",
        description:
          "A deep look at your business landscape, operations and market realities.",
      },
      {
        title: "Growth-Focused Strategy Design",
        description:
          "Plans built with scalability, market potential and profitability in mind.",
      },
      {
        title: "Data & Competitor-Driven Decisions",
        description:
          "Analytical and competitive insight shapes positioning and direction.",
      },
      {
        title: "Roadmaps That Deliver",
        description: "Clear, actionable steps from idea to execution.",
      },
    ],
    faq: [
      {
        q: "Do you work with startups or only established businesses?",
        a: "Both, from early-stage strategy building to enterprise-level transformation.",
      },
      {
        q: "How long does a strategy project take?",
        a: "Most business strategy engagements take 4 to 10 weeks, depending on scope.",
      },
      {
        q: "What do we need to begin?",
        a: "Your goals, key challenges and existing business information. We guide you through the rest.",
      },
      {
        q: "Can you support implementation after the strategy is created?",
        a: "Yes. We assist with execution, team alignment and rollout if needed.",
      },
    ],
    exploreLinks: [
      {
        label: "Digital Marketing",
        href: inPath("scale", "digital-marketing"),
      },
      {
        label: "Branding & Identity",
        href: inPath("experience", "branding-identity"),
      },
      {
        label: "Enterprise Management Solutions",
        href: inPath("build", "enterprise-management-solutions"),
      },
    ],
  },

  "experience/design-experience": {
    label: "Design & Experience",
    metaTitle: "UI/UX Design and Testing Services in India | Palqar",
    metaDescription:
      "Palqar designs interactive UI/UX, experience maps and design systems, backed by QA and testing, for web and mobile products built in India.",
    heroTitle: "Digital Experiences That Engage, Inform and Convert",
    heroDescription:
      "Design is about meaningful experiences, not just visuals. We blend creativity with technology to deliver UI/UX that is intuitive, interactive and aligned with user behaviour, validated by robust testing.",
    coverage: [
      "Animated and interactive UI/UX: web and mobile design with prototypes, micro-interactions and conversion-focused layouts.",
      "Quality assurance and testing: manual, automated, performance, cross-browser, cross-device, load and regression testing.",
      "Experience mapping and UX architecture: journey mapping, personas, information architecture and UX audits.",
      "Design systems and visual language: reusable components and style guides for consistency across products.",
    ],
    highlights: [
      {
        title: "Experience-Driven Design",
        description: "UI/UX built around psychology, behaviour and engagement.",
      },
      {
        title: "Performance-Ready",
        description: "Designs validated through rigorous testing and optimisation.",
      },
      {
        title: "Future-Proof Systems",
        description: "Reusable design systems that scale with your product.",
      },
      {
        title: "Cross-Industry Expertise",
        description:
          "Design and testing experience across eCommerce, healthcare, fintech, retail and SaaS.",
      },
    ],
    process: [
      {
        title: "Human-Centred Design",
        description:
          "Interfaces crafted around user behaviour, accessibility and real-world use.",
      },
      {
        title: "Interaction-First Thinking",
        description:
          "Motion and micro-interactions that improve usability and brand personality.",
      },
      {
        title: "Unified Design Systems",
        description:
          "Style guides and reusable components for consistent design.",
      },
      {
        title: "Quality at the Core",
        description:
          "Testing across browsers, devices and environments before launch.",
      },
    ],
    faq: [
      {
        q: "Do you only design UI/UX for web platforms?",
        a: "No. We design for web, mobile apps, dashboards, kiosks, SaaS platforms and enterprise software.",
      },
      {
        q: "Can you create interactive prototypes before development?",
        a: "Yes. High-fidelity prototypes validate flows and interactions before coding begins.",
      },
      {
        q: "Do you offer ongoing UI/UX improvements?",
        a: "Yes. We provide continuous design optimisation based on analytics and user feedback.",
      },
      {
        q: "How do you ensure quality across devices?",
        a: "Through manual and automated testing, cross-device validation and performance benchmarking.",
      },
    ],
    exploreLinks: [
      {
        label: "Branding & Identity",
        href: inPath("experience", "branding-identity"),
      },
      {
        label: "Website & CMS Solutions",
        href: inPath("build", "website-cms-solutions"),
      },
      {
        label: "Custom Application Development",
        href: inPath("build", "custom-application-development"),
      },
    ],
  },

  "experience/branding-identity": {
    label: "Branding & Identity",
    metaTitle: "Branding & Identity Services in India | Palqar",
    metaDescription:
      "Palqar builds brand strategy, logo and visual identity, messaging and rebranding for startups and established Indian businesses, with guidelines you can use everywhere.",
    heroTitle: "Branding and Identity for Modern, Scalable Brands",
    heroDescription:
      "Branding is more than a logo. It is how people see, remember and rely on your company. We build a clear brand system for new companies entering the market and established businesses ready to grow.",
    coverage: [
      "Brand strategy and positioning: a clear purpose, market position and value proposition that sets you apart.",
      "Logo design and visual identity: a recognisable logo and visual system used consistently across platforms.",
      "Brand voice and messaging: tone, messaging and communication guidelines for every customer touchpoint.",
      "Rebranding: a new identity that keeps the equity and recognition of your previous brand.",
    ],
    highlights: [
      {
        title: "Strategy-First Branding",
        description: "Every creative decision is guided by research and purpose.",
      },
      {
        title: "Collaborative Execution",
        description:
          "We work closely with your team to stay aligned with business goals.",
      },
      {
        title: "Cross-Industry Experience",
        description: "Adaptable branding across multiple sectors.",
      },
      {
        title: "Scalable Brand Systems",
        description: "Identities that grow with your business.",
      },
    ],
    deliverables: [
      "Brand strategy and positioning",
      "Logo and visual identity system",
      "Brand voice and messaging guide",
      "Logo files in common formats",
      "Brand guidelines for consistent use",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "We study your industry, competitors and audience to find opportunities for differentiation.",
      },
      {
        title: "Strategy & Concept",
        description:
          "We outline the direction and initial visual and messaging concepts for your brand.",
      },
      {
        title: "Design & Delivery",
        description:
          "We develop and finalise all assets, including brand guidelines, ready for launch.",
      },
    ],
    faq: [
      {
        q: "Can you help new companies build their branding and marketing strategy?",
        a: "Yes. We help young businesses build a clear identity that supports early growth and visibility.",
      },
      {
        q: "Do you design both digital and traditional marketing materials?",
        a: "Yes. Brands are built to work across digital and print channels.",
      },
      {
        q: "Will I receive my logo files and brand guidelines?",
        a: "Yes. Logos are delivered in the most common formats, along with brand guidelines.",
      },
      {
        q: "Do you provide brand guidelines?",
        a: "Yes, so you can keep the same look, feel and message wherever your brand appears.",
      },
    ],
    exploreLinks: [
      {
        label: "Design & Experience",
        href: inPath("experience", "design-experience"),
      },
      {
        label: "Digital Marketing",
        href: inPath("scale", "digital-marketing"),
      },
      {
        label: "Growth Strategy",
        href: inPath("scale", "growth-strategy"),
      },
    ],
  },
};

export function getIndiaService(category, service) {
  return indiaServices[`${category}/${service}`] ?? null;
}

export function getIndiaServiceParams() {
  return Object.keys(indiaServices).map((key) => {
    const [category, service] = key.split("/");
    return { category, service };
  });
}
