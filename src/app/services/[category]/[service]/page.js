import { notFound } from "next/navigation";
import { servicesData } from "../../data/serviceData";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ServiceIntro from "../../components/ServiceIntro/ServiceIntro";
import ApproachSection from "../../components/ApproachSection/ApproachSection";
import WorkflowSection from "../../components/WorkflowSection/WorkflowSection";
import ServiceCrossLink from "../../components/ServiceCrossLink/ServiceCrossLink";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import FAQSection from "../../components/FAQSection/FAQSection";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import FAQSchema from "@/components/ui/FAQSchema";
import RootServiceFallback from "@/components/services/RootServiceFallback";
import SchemaScript from "@/components/ui/SchemaScript";
import {
  SERVICE_CATEGORY_LABELS,
  getAllRootServiceParams,
  getRootServiceEntry,
  getRootServicePath,
  isFallbackRootService,
  isIndexableRootService,
  isPublishedRootService,
} from "@/lib/serviceRoutes";
import { buildSchemaGraph, generateServiceSchema, generateWebPageSchema } from "@/lib/jsonLd";
import { getIndiaService } from "@/data/services/in/indiaServices";
import { buildCanonical, buildServiceMetadata, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

function getCanonicalPath(category, service) {
  return getRootServicePath(category, service);
}

function getPublishedServiceContent(category, service) {
  if (!isPublishedRootService(category, service)) {
    return null;
  }

  return servicesData[service] ?? null;
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;
  const entry = getRootServiceEntry(category, service);

  if (!entry) {
    return {
      title: "Service Not Found | Palqar",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = getCanonicalPath(category, service);
  const indiaPath =
    getIndiaService(category, service) && isIndexableRootService(category, service)
      ? `/in/services/${category}/${service}`
      : null;
  const languages = indiaPath
    ? { "x-default": canonicalPath, "en-IN": indiaPath }
    : undefined;

  if (isPublishedRootService(category, service)) {
    const publishedService = getPublishedServiceContent(category, service);

    if (!publishedService) {
      notFound();
    }

    const title = `${publishedService.hero.title} | Palqar`;
    const description =
      publishedService.metaDescription ??
      publishedService.intro.trim().replace(/\s+/g, " ").slice(0, 160);

    return buildServiceMetadata({
      title,
      description,
      path: canonicalPath,
      languages,
      ogImage: {
        url: publishedService.hero.image,
        alt: publishedService.hero.title,
      },
    });
  }

  return buildServiceMetadata({
    title: entry.metaTitle,
    description: entry.metaDescription,
    path: canonicalPath,
    languages,
    // Planned/draft services are thin placeholder pages: keep them reachable
    // for users but out of the index until real content is published.
    noindex: !isIndexableRootService(category, service),
    ogImage: {
      url: entry.heroImage,
      alt: entry.label,
    },
  });
}

export async function generateStaticParams() {
  return getAllRootServiceParams().filter(
    ({ category, service }) =>
      getRootServiceEntry(category, service)?.status !== "dedicated",
  );
}

export default async function ServicePage({ params }) {
  const { category, service } = await params;
  const entry = getRootServiceEntry(category, service);

  if (!entry) {
    notFound();
  }

  const categoryLabel = SERVICE_CATEGORY_LABELS[category] || category;
  const canonicalPath = getCanonicalPath(category, service);
  const canonicalUrl = buildCanonical(canonicalPath);

  if (isFallbackRootService(category, service)) {
    return (
      <>
        <FAQSchema faqs={entry.faq} />

        <BreadcrumbSchema
          items={[
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: categoryLabel, url: `${SITE_URL}/services#${category}` },
            { name: entry.label, url: canonicalUrl },
          ]}
        />

        <RootServiceFallback
          categoryLabel={categoryLabel}
          canonicalPath={canonicalPath}
          entry={entry}
        />
      </>
    );
  }

  const serviceContent = getPublishedServiceContent(category, service);
  if (!serviceContent) {
    notFound();
  }

  const serviceSchema = {
    ...buildSchemaGraph(
      generateWebPageSchema({
        title: `${serviceContent.hero.title} | Palqar`,
        description: serviceContent.metaDescription ??
          serviceContent.intro.trim().replace(/\s+/g, " ").slice(0, 300),
        url: canonicalUrl,
      }),
      generateServiceSchema({
        name: serviceContent.hero.title,
        description: serviceContent.metaDescription ??
          serviceContent.intro.trim().replace(/\s+/g, " ").slice(0, 300),
        url: canonicalUrl,
        category: categoryLabel,
        image: serviceContent.hero.image,
      }),
    ),
  };

  return (
    <>
      <SchemaScript data={serviceSchema} />

      <FAQSchema faqs={serviceContent.faq} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: categoryLabel, url: `${SITE_URL}/services#${category}` },
          { name: serviceContent.hero.title, url: canonicalUrl },
        ]}
      />

      <ServiceHero data={serviceContent.hero} />
      <ServiceIntro text={serviceContent.intro} />
      <ApproachSection cards={serviceContent.approach} />
      <WorkflowSection workflows={serviceContent.workflow} />
      {serviceContent.crossLink ? (
        <ServiceCrossLink data={serviceContent.crossLink} />
      ) : null}
      <WhyChoose items={serviceContent.whyChoose} />
      <FAQSection faq={serviceContent.faq} />
    </>
  );
}
