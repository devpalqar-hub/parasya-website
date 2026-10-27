import Link from "next/link";
import CTASection from "@/components/sections/CTASection/CTASection";
import styles from "@/components/services/RootServiceFallback.module.css";
import { getIndiaService, getIndiaServiceParams } from "@/data/services/in/indiaServices";
import { buildMetadata } from "@/lib/seo";
import { SERVICE_CATEGORY_LABELS } from "@/lib/serviceRoutes";

export const metadata = buildMetadata({
  title: "Digital Services in India | Software, Marketing & Strategy | Palqar",
  description:
    "Palqar, based in Kozhikode, Kerala, delivers software development, cloud and security, branding, digital marketing and growth strategy for businesses across India.",
  path: "/in/services",
  locale: "en_IN",
  languages: {
    "x-default": "/services",
    "en-IN": "/in/services",
  },
});

export default function IndiaServicesPage() {
  const services = getIndiaServiceParams().map(({ category, service }) => ({
    category,
    service,
    entry: getIndiaService(category, service),
  }));

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>India / Services</p>
          <h1 className={styles.title}>Digital Services for Businesses Across India</h1>
          <p className={styles.description}>
            From our Kozhikode, Kerala studio we build software, secure and scale
            platforms, shape brands and run integrated marketing for Indian
            businesses, from startups to established enterprises.
          </p>
        </div>
      </section>

      <section className={styles.sections}>
        <div className={styles.container}>
          <div className={styles.highlightGrid}>
            <article className={styles.highlightCard}>
              <h3>ERP Services</h3>
              <p>
                Custom ERP systems that connect inventory, sales, finance and
                operations.
              </p>
              <Link
                href="/in/services/build/erp-services"
                className={styles.exploreLink}
              >
                ERP Services
              </Link>
            </article>
            {services.map(({ category, service, entry }) => (
              <article key={`${category}/${service}`} className={styles.highlightCard}>
                <h3>{entry.label}</h3>
                <p>
                  {SERVICE_CATEGORY_LABELS[category]} · {entry.heroTitle}
                </p>
                <Link
                  href={`/in/services/${category}/${service}`}
                  className={styles.exploreLink}
                >
                  {entry.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Plan the next step"
        title="Talk to Palqar about your project in India."
        description="Tell us what you want to build or improve and we will recommend the right service mix and a clear first phase."
        href="/contact#contact-form"
      />
    </main>
  );
}
