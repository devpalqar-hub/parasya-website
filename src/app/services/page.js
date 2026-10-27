import ServicesAccordion from "@/components/sections/Services/ServicesAccordion";
import SchemaScript from "@/components/ui/SchemaScript";
import {
  buildSchemaGraph,
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateItemListSchema,
} from "@/lib/jsonLd";
import { buildCanonical, buildMetadata } from "@/lib/seo";
import {
  getAllRootServiceParams,
  getRootServiceEntry,
  getRootServiceUrl,
} from "@/lib/serviceRoutes";
import styles from "./Services.module.css";

export const metadata = buildMetadata({
  title: "Our Services | Web Development, Marketing & Design | Palqar",
  description:
    "Explore Palqar's full range of services: enterprise web development, CMS solutions, eCommerce platforms, SaaS products, performance marketing, branding, and UI/UX design.",
  path: "/services",
  languages: {
    "x-default": "/services",
    "en-IN": "/in/services",
  },
});

export default function ServicesPage() {
  const url = buildCanonical("/services");
  const services = getAllRootServiceParams().map(({ category, service }) => {
    const entry = getRootServiceEntry(category, service);
    return {
      name: entry?.label || service,
      url: getRootServiceUrl(category, service),
    };
  });

  const servicesListSchema = buildSchemaGraph(
    generateCollectionPageSchema({
      title: "Palqar Services",
      description:
        "Full range of digital services offered by Palqar across build, scale, and experience categories.",
      url,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: buildCanonical("/") },
      { name: "Services", url },
    ]),
    generateItemListSchema(
      services,
      "Palqar Services",
      "Full range of digital services offered by Palqar.",
    ),
  );

  return (
    <main>
      <SchemaScript data={servicesListSchema} />
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <span
            className={`${styles.title} ${styles.build} ${styles.slideLeft}`}
          >
            Build.
          </span>
          <span
            className={`${styles.title} ${styles.design} ${styles.slideUp}`}
          >
            Design.
          </span>
          <span
            className={`${styles.title} ${styles.grow} ${styles.slideRight}`}
          >
            Grow.
          </span>
        </div>
        <p className={styles.descPara}>
          From &apos;meh&apos; to memorable that&apos;s our creative side hustle
        </p>
      </div>
      <ServicesAccordion />
    </main>
  );
}
