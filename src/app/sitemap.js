import { getIndiaServiceParams } from "@/data/services/in/indiaServices";
import { blogPosts } from "@/data/blogPosts";
import { projectEntries } from "@/data/projectEntries";
import { INDIA_SERVICES_DATE, pageLastModified, projectsLastModified, SERVICE_FALLBACK_DATE } from "@/data/sitemapDates";
import { SITE_URL } from "@/lib/seo";
import { getAllRootServiceParams, getQaDigitalMarketingPath, getRootServicePath, isIndexableRootService } from "@/lib/serviceRoutes";

const qaServiceSlugs = [
  "seo",
  "ssm",
  "email-marketing",
  "reputation-management",
  "influencer-marketing",
  "performance-marketing",
];

// Regional ERP service pages (not part of the root service registry).
const regionalErpPaths = [
  "/in/services/build/erp-services",
  "/usa/services/build/erp-services",
  "/qa/services/it-solutions/erp-services",
];

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/wayanad-trip", priority: 0.4, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/career", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/qa/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

function mapRoute(path, priority, changeFrequency, lastModified) {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified ?? pageLastModified[path] ?? (path.startsWith("/in/") ? INDIA_SERVICES_DATE : SERVICE_FALLBACK_DATE)),
    priority,
    changeFrequency,
  };
}

export default function sitemap() {
  const rootServices = getAllRootServiceParams()
    .filter(({ category, service }) => isIndexableRootService(category, service))
    .map(({ category, service }) =>
    mapRoute(getRootServicePath(category, service), 0.8, "monthly"),
  );

  const qaServices = qaServiceSlugs.map((service) =>
    mapRoute(getQaDigitalMarketingPath(service), 0.7, "monthly"),
  );

  const regionalErp = regionalErpPaths.map((path) =>
    mapRoute(path, 0.7, "monthly"),
  );

  const indiaServices = [
    "/in/services",
    ...getIndiaServiceParams().map(
      ({ category, service }) => `/in/services/${category}/${service}`,
    ),
  ].map((path) => mapRoute(path, 0.7, "monthly"));

  const blogRoutes = blogPosts.map((post) =>
    mapRoute(`/blog/${post.slug}`, 0.6, "monthly", post.updatedAt || post.publishedAt),
  );

  const projectRoutes = projectEntries
    .filter((entry) => entry.indexable)
    .map((entry) => mapRoute(`/projects/${entry.slug}`, 0.7, "monthly", projectsLastModified));

  return [
    ...staticRoutes.map((route) =>
      mapRoute(route.path, route.priority, route.changeFrequency),
    ),
    ...rootServices,
    ...qaServices,
    ...regionalErp,
    ...indiaServices,
    ...blogRoutes,
    ...projectRoutes,
  ];
}
