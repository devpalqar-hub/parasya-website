import { notFound } from "next/navigation";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import FAQSchema from "@/components/ui/FAQSchema";
import RootServiceFallback from "@/components/services/RootServiceFallback";
import SchemaScript from "@/components/ui/SchemaScript";
import {
  INDIA_LOCALE,
  getIndiaService,
  getIndiaServiceParams,
} from "@/data/services/in/indiaServices";
import { buildSchemaGraph, generateServiceSchema, generateWebPageSchema } from "@/lib/jsonLd";
import { buildCanonical, buildServiceMetadata, SITE_URL } from "@/lib/seo";
import {
  SERVICE_CATEGORY_LABELS,
  getRootServicePath,
  isIndexableRootService,
} from "@/lib/serviceRoutes";

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndiaServiceParams();
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;
  const entry = getIndiaService(category, service);

  if (!entry) {
    return { title: "Service Not Found | Palqar", robots: { index: false, follow: false } };
  }

  return buildServiceMetadata({
    title: entry.metaTitle,
    description: entry.metaDescription,
    path: `/in/services/${category}/${service}`,
    locale: INDIA_LOCALE,
    // Only cluster with the global page when that page is itself indexable.
    languages: isIndexableRootService(category, service)
      ? {
          "x-default": getRootServicePath(category, service),
          "en-IN": `/in/services/${category}/${service}`,
        }
      : undefined,
  });
}

export default async function IndiaServicePage({ params }) {
  const { category, service } = await params;
  const entry = getIndiaService(category, service);

  if (!entry) notFound();

  const path = `/in/services/${category}/${service}`;
  const url = buildCanonical(path);
  const categoryLabel = SERVICE_CATEGORY_LABELS[category] || category;

  const schema = buildSchemaGraph(
    generateWebPageSchema({
      title: entry.metaTitle,
      description: entry.metaDescription,
      url,
    }),
    generateServiceSchema({
      name: entry.label,
      description: entry.metaDescription,
      url,
      category: categoryLabel,
    }),
  );

  return (
    <>
      <SchemaScript data={schema} />
      <FAQSchema faqs={entry.faq} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/in/services` },
          { name: entry.label, url },
        ]}
      />
      <RootServiceFallback
        categoryLabel={`India · ${categoryLabel}`}
        canonicalPath={path}
        entry={entry}
      />
    </>
  );
}
