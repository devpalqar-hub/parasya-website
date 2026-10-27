// Content for /services/build/erp-services.
// Only capabilities already stated elsewhere on palqar.com are listed here
// (enterprise-management-solutions page, KingFox case study).

export const erpServicesContent = {
  path: "/services/build/erp-services",
  meta: {
    title: "ERP Services & Custom ERP Solutions | Palqar",
    description:
      "Palqar designs, builds, integrates and supports ERP systems for growing businesses in India, Qatar and the USA. Discuss your ERP requirements with our team.",
  },
  hero: {
    eyebrow: "Build / ERP Services",
    title: "ERP Services and Custom ERP Solutions for Growing Businesses",
    description:
      "We build, extend and integrate ERP systems that bring inventory, sales, finance and operations into one place, so your team works from the same information.",
    image: "/services/code/enterprise-management-solutions/enterprise-hero.webp",
    imageAlt:
      "Enterprise resource planning dashboard concept for a custom ERP system built by Palqar",
    tags: ["Custom ERP", "ERP integration", "Workflow automation", "Reporting"],
  },
  proof: {
    badge: "Delivered and running successfully",
    title: "ERP delivered for KingFox",
    desc: "A custom ERP covering stock, sales, finance and HR for the KingFox retail operation, live and running successfully in production.",
    href: "/projects/kingfox",
    linkLabel: "Read the KingFox case study",
  },
  answer: {
    heading: "What are ERP services?",
    lead:
      "ERP services are the consulting, development, implementation, integration and support work needed to run a business on one connected enterprise resource planning (ERP) system instead of separate spreadsheets and tools.",
    body: [
      "An ERP system joins core functions such as inventory, sales, purchasing, finance, HR and reporting around a shared data model. That removes duplicate entry and gives managers one version of the numbers.",
      "ERP services suit businesses that have outgrown disconnected tools: retailers running several outlets, warehouse and stock-heavy operations, and service companies coordinating teams and jobs. If your people re-key the same data into several systems, an ERP review is a sensible first step.",
    ],
  },
  services: [
    {
      title: "ERP consulting and requirements discovery",
      desc: "We map how your teams actually work, where data is duplicated, and which processes should live in an ERP before any build decision is made.",
    },
    {
      title: "Custom ERP development",
      desc: "Purpose-built ERP modules around your workflows, from stock and billing to finance and HR panels, built on stacks such as Laravel, Vue and Nuxt.",
    },
    {
      title: "Extending existing ERP platforms",
      desc: "Where an off-the-shelf platform already fits, we extend it with the missing workflows, dashboards and screens rather than rebuilding from scratch.",
    },
    {
      title: "ERP integration",
      desc: "Connect your ERP with POS, CRM, ecommerce, HR and finance tools and custom APIs so data moves between systems without manual re-entry.",
    },
    {
      title: "Workflow automation and reporting",
      desc: "Automate approvals, job assignment and notifications, and build dashboards that show stock, sales and operations across locations.",
    },
    {
      title: "Support and continuous improvement",
      desc: "After launch we keep the system secure, fix issues and add modules as your processes change.",
    },
  ],
  benefits: [
    {
      title: "One source of truth",
      desc: "Departments work from the same records instead of reconciling separate files.",
    },
    {
      title: "Clearer operational visibility",
      desc: "Dashboards and reports pull from live data across sales, stock and finance.",
    },
    {
      title: "Better inventory control",
      desc: "Stock movements are recorded where they happen, including across multiple locations.",
    },
    {
      title: "Streamlined workflows",
      desc: "Approvals, assignments and hand-offs follow defined steps rather than chat messages.",
    },
    {
      title: "Less manual data entry",
      desc: "Integrations and automation reduce repeated typing and the errors that come with it.",
    },
    {
      title: "Consistent reporting",
      desc: "Everyone uses the same definitions, which makes month-end and planning conversations simpler.",
    },
  ],
  useCases: [
    {
      title: "Retail and multi-location businesses",
      problem:
        "Sales at the counter, stock in the back and reports at head office live in different tools.",
      solution:
        "A POS connected to the ERP syncs inventory, sales and orders in real time, with centralised reporting across locations.",
    },
    {
      title: "Warehouse and inventory-heavy operations",
      problem:
        "Stock, billing, finance and staff records are tracked separately, so owners lack a current picture.",
      solution:
        "One admin panel for stock, sales, finance and HR, the same approach behind the ERP we delivered for KingFox, which is now running in production.",
      link: { label: "Read the KingFox case study", href: "/projects/kingfox" },
    },
    {
      title: "Service and maintenance businesses",
      problem:
        "Jobs, technicians and spare parts are coordinated by phone and spreadsheet.",
      solution:
        "Workflow automation tracks jobs, assigns technicians, manages parts inventory and keeps a full service history.",
    },
  ],
  whyChoose: [
    {
      title: "Built around your workflow",
      desc: "We build custom ERP systems or extend platforms you already use, depending on what fits your business.",
    },
    {
      title: "Proven in production",
      desc: "We delivered the ERP behind KingFox's stock, sales, finance and HR operations, and it is running successfully today.",
    },
    {
      title: "Modern, scalable stack",
      desc: "Laravel, Vue, Nuxt, AWS and GCP, with cloud, hybrid or on-premises deployment based on your needs.",
    },
    {
      title: "Product and design under one roof",
      desc: "The same team handles UX, development and growth, so internal tools are usable, not just functional.",
    },
  ],
  process: [
    { title: "Discover", desc: "Requirements workshops with the teams who will use the system." },
    { title: "Analyse", desc: "Map current processes, data sources and pain points." },
    { title: "Plan", desc: "Define modules, integrations, data migration and phasing." },
    { title: "Build", desc: "Configure or develop the system in reviewable increments." },
    { title: "Integrate and migrate", desc: "Connect existing tools and move data with validation." },
    { title: "Test and train", desc: "Test against real scenarios and train your team before go-live." },
    { title: "Launch and improve", desc: "Go live with support, then iterate based on usage." },
  ],
  technology: {
    intro:
      "Technology is chosen after discovery. The stack and platforms below are those Palqar already lists on its enterprise solutions page; we do not claim reseller or certified-partner status for any third-party ERP vendor.",
    items: [
      "Laravel",
      "Vue.js",
      "Nuxt",
      "AWS",
      "Google Cloud",
      "Odoo, Zoho, SAP, Oracle, Tally (extension and integration)",
      "REST APIs and custom integrations",
    ],
  },
  faq: [
    {
      q: "What does an ERP service provider actually do?",
      a: "An ERP service provider helps you plan, build or configure, integrate and support an ERP system. Palqar handles requirements discovery, custom development or extension of existing platforms, integrations, migration, training and ongoing support.",
    },
    {
      q: "Should we build a custom ERP or customise an existing one?",
      a: "It depends on how unusual your processes are. If an existing platform covers most of your workflows, extending it is usually quicker; if your operations are distinctive, a custom build avoids bending the business around the software. We assess both during discovery.",
    },
    {
      q: "How much does ERP implementation cost?",
      a: "ERP cost depends on the number of modules, users, integrations, customisation and data migration, so there is no honest single figure. After a short discovery session we provide a scoped estimate for your requirements.",
    },
    {
      q: "How long does ERP implementation take?",
      a: "Timelines depend on scope, integrations and how much data must be migrated. Phasing the rollout, starting with the highest-value modules, usually shortens time to first use. We give a phased timeline once requirements are clear.",
    },
    {
      q: "Can an ERP integrate with our existing business systems?",
      a: "Yes. Integration with POS, CRM, HR tools, finance systems and custom APIs is part of our delivery, subject to the other system exposing an API or export.",
    },
    {
      q: "Is ERP suitable for small and medium businesses?",
      a: "Yes, when the business has outgrown spreadsheets and separate tools. A phased ERP that starts with a few core modules keeps cost and disruption manageable for SMEs.",
    },
    {
      q: "What is the difference between ERP and accounting software?",
      a: "Accounting software manages finances, while ERP connects finance with inventory, sales, purchasing, HR and operations in one system. Many businesses start with accounting tools and move to ERP when processes need to be joined up.",
    },
  ],
  cta: {
    eyebrow: "Discuss your ERP project",
    title: "Tell us how your business runs today.",
    description:
      "Share your current tools, pain points and goals. We will suggest whether to build, extend or integrate, and outline a sensible first phase.",
    label: "Discuss Your ERP Requirements",
  },
  related: [
    {
      label: "Enterprise Management Solutions",
      desc: "The broader programme of connected systems around your ERP: POS, CRM, service workflows and supply chain visibility.",
      href: "/services/build/enterprise-management-solutions",
    },
    {
      label: "Custom Application Development",
      desc: "Web and mobile applications built around your operations.",
      href: "/services/build/custom-application-development",
    },
    {
      label: "Business Automation",
      desc: "Remove manual bottlenecks with automated workflows.",
      href: "/services/build/business-automation",
    },
    {
      label: "KingFox case study",
      desc: "A live ERP for stock, sales, finance and HR.",
      href: "/projects/kingfox",
    },
  ],
};

// Region variants. Each region has its own URL, canonical and hreflang entry.
export const erpRegions = {
  global: {
    path: "/services/build/erp-services",
    locale: "en_US",
    hreflang: "x-default",
    meta: erpServicesContent.meta,
    hero: {},
    answerExtra: null,
    faqExtra: [],
  },
  in: {
    path: "/in/services/build/erp-services",
    locale: "en_IN",
    hreflang: "en-IN",
    meta: {
      title: "ERP Services in India | Custom ERP Solutions | Palqar",
      description:
        "Palqar, based in Kozhikode, Kerala, builds, integrates and supports custom ERP systems for businesses across India. Discuss your ERP requirements.",
    },
    hero: {
      eyebrow: "India / ERP Services",
      title: "ERP Services and Custom ERP Solutions for Businesses in India",
      description:
        "From our Kozhikode, Kerala studio we build, extend and integrate ERP systems that connect inventory, sales, finance and operations for Indian businesses.",
    },
    answerExtra:
      "Many Indian SMEs run on a mix of Tally, spreadsheets and billing tools. We can extend or integrate platforms you already use, or build custom modules where they fall short, and work with your team in person from our Kozhikode office or remotely.",
    faqExtra: [
      {
        q: "Do you provide ERP services for businesses in India?",
        a: "Yes. Palqar is based in Kozhikode, Kerala, and delivers ERP consulting, custom development, integration and support for businesses across India.",
      },
    ],
  },
  usa: {
    path: "/usa/services/build/erp-services",
    locale: "en_US",
    hreflang: "en-US",
    meta: {
      title: "ERP Services in the USA | Custom ERP Development | Palqar",
      description:
        "Palqar delivers custom ERP development, integration and support for US businesses, with scoped phases and clear communication. Discuss your ERP needs.",
    },
    hero: {
      eyebrow: "USA / ERP Services",
      title: "Custom ERP Development and ERP Services for US Businesses",
      description:
        "We design, build and integrate ERP systems that unify inventory, sales, finance and operations, delivered remotely in clearly scoped phases.",
    },
    answerExtra:
      "For US businesses, a common starting point is replacing spreadsheet-driven operations or connecting an existing ERP with POS, ecommerce and CRM tools. We deliver remotely, begin with the highest-value module and expand once it is in use.",
    faqExtra: [
      {
        q: "Can you deliver ERP projects for US businesses remotely?",
        a: "Yes. Palqar works with clients remotely through discovery sessions, regular demos and scoped phases, so US teams can review progress without an on-site presence.",
      },
    ],
  },
};
