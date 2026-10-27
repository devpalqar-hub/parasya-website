import { getRootServicePath } from "@/lib/serviceRoutes";

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
];

export const serviceNavigation = [
  {
    title: "Build",
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
    ],
  },
  {
    title: "Scale",
    items: [
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
    ],
  },
  {
    title: "Experience",
    items: [
      {
        label: "Design & Experience",
        href: getRootServicePath("experience", "design-experience"),
      },
      {
        label: "View All Services",
        href: "/services",
      },
      {
        label: "Talk to Palqar",
        href: "/contact#contact-form",
      },
    ],
  },
];

export const footerLinkGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Blog", href: "/blog" },
      { label: "Career", href: "/career" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
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
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Home", href: "/" },
      { label: "Featured Work", href: "/#featured-projects" },
      { label: "Client Trust", href: "/#client-trust" },
      { label: "Contact Form", href: "/contact#contact-form" },
      { label: "Sitemap", href: "/sitemap.xml" },
      { label: "Robots", href: "/robots.txt" },
    ],
  },
];

export const footerContactDetails = [
  {
    label: "Email",
    value: "info@palqar.com",
    href: "mailto:info@palqar.com",
  },
  {
    label: "Sales",
    value: "+91 99954 98218",
    href: "tel:+919995498218",
  },
  {
    label: "Location",
    value: "Kozhikode, Kerala, India",
    href: "/contact",
  },
];

export const trustLogos = [
  {
    src: "/featured-projects/zodo/zodo-logo.png",
    alt: "ZodoAI",
  },
  {
    src: "/featured-projects/cleanmaria/logo.svg",
    alt: "CleanMaria",
  },
  {
    src: "/featured-projects/bambinidoulas/logo.svg",
    alt: "Bambini Doulas",
  },
  {
    src: "/featured-projects/creeklogo.svg",
    alt: "Creek Wearable",
  },
  {
    src: "/featured-projects/vivodynelogo.svg",
    alt: "Vivodyne",
  },
  {
    src: "/featured-projects/lovethesaleslogo.svg",
    alt: "Love the Sales",
  },
  {
    src: "/greychem.png",
    alt: "GreyChem",
  },
  {
    src: "/urbanstar.png",
    alt: "UrbanStar",
  },
];

export const reviews = [
  // Add verified reviews here when available.
];
