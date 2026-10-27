import { SITE_URL, absoluteUrl } from "@/lib/seo";

const ORG_NAME = "Palqar";
// Square brand mark (512x512) for the Organization logo; the poster is only a
// social/preview image.
const ORG_LOGO = absoluteUrl("/logo-square.png");
const ORG_IMAGE = absoluteUrl("/hero-poster.webp");

// Shared by the Organization and LocalBusiness nodes so the two never drift.
const ORG_DESCRIPTION =
  "Palqar helps ambitious businesses grow through web development, branding, performance marketing, automation, and consulting.";

const ORG_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "2nd floor, STS Arcade, Balan K Nair Rd, near Bramakumari",
  addressLocality: "Kozhikode",
  addressRegion: "Kerala",
  postalCode: "673001",
  addressCountry: "IN",
};

const ORG_SAME_AS = [
  "https://linkedin.com/company/palqar",
  "https://instagram.com/palqar",
  "https://x.com/palqar",
  "https://youtube.com/@palqar",
];

const ORG_AREA_SERVED = [
  { "@type": "Country", name: "India" },
  { "@type": "Country", name: "Qatar" },
  { "@type": "Country", name: "United States" },
];

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: ORG_LOGO,
      width: 512,
      height: 512,
    },
    description: ORG_DESCRIPTION,
    email: "info@palqar.com",
    telephone: "+919995498218",
    address: ORG_ADDRESS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919995498218",
        contactType: "sales",
        email: "info@palqar.com",
        availableLanguage: ["English", "Hindi", "Malayalam"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+919995498218",
        contactType: "customer service",
        email: "hr@palqar.com",
        availableLanguage: ["English", "Hindi", "Malayalam"],
      },
    ],
    sameAs: ORG_SAME_AS,
    areaServed: ORG_AREA_SERVED,
    foundingDate: "2023",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: ORG_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function generateWebPageSchema({ title, description, url }) {
  return {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function generateCollectionPageSchema({ title, description, url }) {
  return {
    "@type": "CollectionPage",
    "@id": `${url}/#collection`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1].url}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema({ name, description, url, category, image }) {
  return {
    "@type": "Service",
    "@id": `${url}/#service`,
    name,
    description,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "United States" },
    ],
    ...(category ? { category } : {}),
    ...(image ? { image: absoluteUrl(image) } : {}),
  };
}

export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: ORG_NAME,
    image: ORG_IMAGE,
    url: SITE_URL,
    telephone: "+919995498218",
    email: "info@palqar.com",
    description: ORG_DESCRIPTION,
    address: ORG_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.2653,
      longitude: 75.7829,
    },
    areaServed: ORG_AREA_SERVED,
    sameAs: ORG_SAME_AS,
  };
}

export function generateItemListSchema(items, name, description) {
  return {
    "@type": "ItemList",
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { url: item.url } : {}),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function generateArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = "Palqar Team",
  section,
}) {
  return {
    "@type": "Article",
    "@id": `${url}/#article`,
    headline,
    description,
    url,
    image: absoluteUrl(image || "/hero-poster.png"),
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(section ? { articleSection: section } : {}),
    mainEntityOfPage: { "@id": `${url}/#webpage` },
  };
}

export function generateCreativeWorkSchema({
  name,
  description,
  url,
  image,
  client,
  category,
}) {
  return {
    "@type": "CreativeWork",
    "@id": `${url}/#creativework`,
    name,
    description,
    url,
    image: absoluteUrl(image || "/hero-poster.png"),
    creator: { "@id": `${SITE_URL}/#organization` },
    ...(client
      ? {
          about: {
            "@type": "Organization",
            name: client,
          },
        }
      : {}),
    ...(category ? { genre: category } : {}),
  };
}

export function buildSchemaGraph(...schemas) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.filter(Boolean),
  };
}
