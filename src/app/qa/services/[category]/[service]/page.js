import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/serviceTemplate";
import ITSolutionsServiceTemplate from "@/components/services/itSolutionsServiceTemplate";
import SchemaScript from "@/components/ui/SchemaScript";
import {
  buildSchemaGraph,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateWebPageSchema,
} from "@/lib/jsonLd";
import { buildCanonicalServiceMetadata } from "@/lib/serviceRoutes";
import { SITE_URL } from "@/lib/seo";
import { buildErpQaMetadata } from "@/components/services/ErpServicePage";

// ─── Content registry ─────────────────────────────────────────────────────────
const contentRegistry = {
  "digital-marketing": {
    seo: () =>
      import("@/data/services/digitalMarketing/seo").then((m) => ({
        content: m.seoContent,
        meta: m.seoContent.meta,
      })),
    ssm: () =>
      import("@/data/services/digitalMarketing/ssm").then((m) => ({
        content: m.ssmContent,
        meta: m.ssmContent.meta,
      })),
    "email-marketing": () =>
      import("@/data/services/digitalMarketing/email-marketing").then((m) => ({
        content: m.emailMarketingContent,
        meta: m.emailMarketingContent.meta,
      })),
    "reputation-management": () =>
      import("@/data/services/digitalMarketing/reputation-management").then((m) => ({
        content: m.reputationManagementContent,
        meta: m.reputationManagementContent.meta,
      })),
    "influencer-marketing": () =>
      import("@/data/services/digitalMarketing/influencer-marketing").then((m) => ({
        content: m.influencerMarketingContent,
        meta: m.influencerMarketingContent.meta,
      })),
    "performance-marketing": () =>
      import("@/data/services/digitalMarketing/performance-marketing").then((m) => ({
        content: m.performanceMarketingContent,
        meta: m.performanceMarketingContent.meta,
      })),
  },
  "it-solutions": {
    "custom-app-development": () =>
      import("@/data/services/itSolutions/custom-app-development").then((m) => ({
        content: m.customAppDevelopmentContent,
        meta: m.customAppDevelopmentContent.meta,
      })),
    "website-development": () =>
      import("@/data/services/itSolutions/website-development").then((m) => ({
        content: m.websiteDevelopmentContent,
        meta: m.websiteDevelopmentContent.meta,
      })),
    "ecommerce-platforms": () =>
      import("@/data/services/itSolutions/ecommerce-platforms").then((m) => ({
        content: m.ecommerceDevelopmentContent,
        meta: m.ecommerceDevelopmentContent.meta,
      })),
    "erp-services": () =>
      import("@/data/services/itSolutions/erp-services-qa").then((m) => ({
        content: m.erpServicesQaContent,
        meta: m.erpServicesQaContent.meta,
      })),
    "cms-enterprise-solutions": () =>
      import("@/data/services/itSolutions/cms-enterprise-solutions").then((m) => ({
        content: m.cmsDevelopmentContent,
        meta: m.cmsDevelopmentContent.meta,
      })),
    "saas-product-development": () =>
      import("@/data/services/itSolutions/saas-product-development").then((m) => ({
        content: m.saasProductDevelopmentContent,
        meta: m.saasProductDevelopmentContent.meta,
      })),
    "ui-ux-design": () =>
      import("@/data/services/itSolutions/ui-ux-design").then((m) => ({
        content: m.uiUxDesignContent,
        meta: m.uiUxDesignContent.meta,
      })),
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { category: "digital-marketing", service: "seo" },
    { category: "digital-marketing", service: "ssm" },
    { category: "digital-marketing", service: "email-marketing" },
    { category: "digital-marketing", service: "reputation-management" },
    { category: "digital-marketing", service: "influencer-marketing" },
    { category: "digital-marketing", service: "performance-marketing" },
    { category: "it-solutions", service: "custom-app-development" },
    { category: "it-solutions", service: "website-development" },
    { category: "it-solutions", service: "ecommerce-platforms" },
    { category: "it-solutions", service: "erp-services" },
    { category: "it-solutions", service: "cms-enterprise-solutions" },
    { category: "it-solutions", service: "saas-product-development" },
    { category: "it-solutions", service: "ui-ux-design" },
  ];
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;

  const loader = contentRegistry[category]?.[service];
  if (!loader) {
    return {
      title: "Service Not Found | Palqar",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { meta } = await loader();

  if (category === "it-solutions" && service === "erp-services") {
    return buildErpQaMetadata(meta);
  }

  return buildCanonicalServiceMetadata(
    {
      ...meta,
      keywords: meta.keywords,
    },
    `/qa/services/${category}/${service}`,
    "en_QA",
  );
}

export default async function ServicePage({ params }) {
  const { category, service } = await params;

  const loader = contentRegistry[category]?.[service];
  if (!loader) notFound();

  const { content } = await loader();
  const canonicalUrl = `${SITE_URL}/qa/services/${category}/${service}`;
  const schema = buildSchemaGraph(
    generateWebPageSchema({
      title: content.meta.title,
      description: content.meta.description,
      url: canonicalUrl,
    }),
    generateServiceSchema({
      name: content.meta.title,
      description: content.meta.description,
      url: canonicalUrl,
      category: category.replace(/-/g, " "),
      image: content.imageSection?.src,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Services", url: `${SITE_URL}/qa/services` },
      { name: content.meta.title, url: canonicalUrl },
    ]),
  );

  const TemplateComponent = category === "it-solutions" ? ITSolutionsServiceTemplate : ServiceTemplate;

  return (
    <>
      <SchemaScript data={schema} />
      <TemplateComponent
        category={category}
        service={service}
        content={content}
      />
    </>
  );
}
