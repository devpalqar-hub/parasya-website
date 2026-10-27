import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import FAQSection from "@/app/services/components/FAQSection/FAQSection";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import BreadcrumbSchema from "@/components/ui/BreadcrumbSchema";
import FAQSchema from "@/components/ui/FAQSchema";
import SchemaScript from "@/components/ui/SchemaScript";
import { erpServicesContent, erpRegions } from "@/data/services/itSolutions/erp-services";
import {
  buildSchemaGraph,
  generateServiceSchema,
  generateWebPageSchema,
} from "@/lib/jsonLd";
import { buildCanonical, buildMetadata, SITE_URL } from "@/lib/seo";
import styles from "./ErpServicePage.module.css";

const base = erpServicesContent;

// hreflang cluster shared by the India, USA, Qatar and default ERP pages.
const ERP_LANGUAGES = {
  "x-default": erpRegions.global.path,
  "en-IN": erpRegions.in.path,
  "en-US": erpRegions.usa.path,
  "en-QA": "/qa/services/it-solutions/erp-services",
};

export function buildErpMetadata(regionKey = "global") {
  const region = erpRegions[regionKey];

  return buildMetadata({
    title: region.meta.title,
    description: region.meta.description,
    path: region.path,
    locale: region.locale,
    languages: ERP_LANGUAGES,
    keywords: [
      "ERP services",
      "ERP solutions",
      "custom ERP development",
      "ERP implementation",
      "ERP integration",
    ],
    ogImage: { url: base.hero.image, alt: base.hero.imageAlt },
  });
}

export function buildErpQaMetadata(meta) {
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    path: "/qa/services/it-solutions/erp-services",
    locale: "en_QA",
    languages: ERP_LANGUAGES,
    ogImage: { url: base.hero.image, alt: base.hero.imageAlt },
  });
}

export default function ErpServicePage({ regionKey = "global" }) {
  const region = erpRegions[regionKey];
  const hero = { ...base.hero, ...region.hero };
  const faq = [...region.faqExtra, ...base.faq];
  const url = buildCanonical(region.path);

  const schema = buildSchemaGraph(
    generateWebPageSchema({
      title: region.meta.title,
      description: region.meta.description,
      url,
    }),
    generateServiceSchema({
      name: "ERP Services",
      description: region.meta.description,
      url,
      category: "Build",
      image: base.hero.image,
    }),
  );

  return (
    <main className={styles.page}>
      <SchemaScript data={schema} />
      <FAQSchema faqs={faq} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "Build", url: `${SITE_URL}/services#build` },
          { name: "ERP Services", url },
        ]}
      />

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
            <span aria-current="page">ERP Services</span>
          </nav>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.h1}>{hero.title}</h1>
          <p className={styles.heroText}>{hero.description}</p>
          <div className={styles.actions}>
            <CTAButton href="/contact#contact-form">Discuss Your ERP Requirements</CTAButton>
            <a href="#erp-services" className={styles.secondary}>
              Explore ERP services <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <Link href={base.proof.href} className={styles.badge}>
            <BadgeCheck size={22} aria-hidden="true" />
            <span>
              <strong>{base.proof.title}</strong>
              <small>{base.proof.badge}</small>
            </span>
          </Link>
          <ul className={styles.tags}>
            {hero.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="what-is-erp">
        <div className={styles.narrow}>
          <h2 id="what-is-erp" className={styles.h2}>{base.answer.heading}</h2>
          <p className={styles.lead}>{base.answer.lead}</p>
          {[...base.answer.body, region.answerExtra].filter(Boolean).map((p) => (
            <p key={p} className={styles.body}>{p}</p>
          ))}
        </div>
      </section>

      <section className={styles.sectionTight} aria-labelledby="proof-h">
        <div className={styles.proof}>
          <BadgeCheck size={40} aria-hidden="true" />
          <div>
            <p className={styles.eyebrow}>{base.proof.badge}</p>
            <h2 id="proof-h" className={styles.h3big}>{base.proof.title}</h2>
            <p className={styles.body}>{base.proof.desc}</p>
            <Link href={base.proof.href} className={styles.inline}>
              {base.proof.linkLabel} <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="erp-services" className={styles.section} aria-labelledby="erp-services-h">
        <div className={styles.wide}>
          <h2 id="erp-services-h" className={styles.h2}>ERP services we provide</h2>
          <div className={styles.grid3}>
            {base.services.map((s, i) => (
              <article key={s.title} className={styles.card}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="benefits-h">
        <div className={styles.wide}>
          <h2 id="benefits-h" className={styles.h2}>Practical benefits of an ERP system</h2>
          <p className={styles.sub}>
            Results vary with scope and adoption. These are the outcomes ERP systems are designed to support.
          </p>
          <div className={styles.grid3}>
            {base.benefits.map((b) => (
              <article key={b.title} className={styles.cardFlat}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="usecases-h">
        <div className={styles.wide}>
          <h2 id="usecases-h" className={styles.h2}>Where ERP solutions help most</h2>
          <div className={styles.grid3}>
            {base.useCases.map((u) => (
              <article key={u.title} className={styles.card}>
                <h3>{u.title}</h3>
                <p><strong>The problem:</strong> {u.problem}</p>
                <p><strong>The approach:</strong> {u.solution}</p>
                {u.link && (
                  <Link href={u.link.href} className={styles.inline}>
                    {u.link.label} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="why-h">
        <div className={styles.wide}>
          <h2 id="why-h" className={styles.h2}>Why work with Palqar on ERP</h2>
          <div className={styles.grid4}>
            {base.whyChoose.map((w) => (
              <article key={w.title} className={styles.cardCenter}>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="process-h">
        <div className={styles.wide}>
          <h2 id="process-h" className={styles.h2}>Our ERP implementation process</h2>
          <ol className={styles.steps}>
            {base.process.map((p, i) => (
              <li key={p.title}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="tech-h">
        <div className={styles.narrow}>
          <h2 id="tech-h" className={styles.h2}>Technology and integrations</h2>
          <p className={styles.body}>{base.technology.intro}</p>
          <ul className={styles.pills}>
            {base.technology.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection faq={faq} />

      <section className={styles.section} aria-labelledby="erp-cta">
        <div className={styles.cta}>
          <p className={styles.eyebrow}>{base.cta.eyebrow}</p>
          <h2 id="erp-cta" className={styles.h2}>{base.cta.title}</h2>
          <p className={styles.body}>{base.cta.description}</p>
          <CTAButton href="/contact#contact-form">{base.cta.label}</CTAButton>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="related-h">
        <div className={styles.wide}>
          <h2 id="related-h" className={styles.h3big}>Related services and work</h2>
          <div className={styles.grid4}>
            {base.related.map((r) => (
              <Link key={r.href} href={r.href} className={styles.relatedCard}>
                <h3>{r.label}</h3>
                <p>{r.desc}</p>
              </Link>
            ))}
          </div>
          <p className={styles.regions}>
            Regional pages:{" "}
            <Link href={erpRegions.in.path}>ERP services in India</Link>,{" "}
            <Link href="/qa/services/it-solutions/erp-services">ERP services in Qatar</Link>,{" "}
            <Link href={erpRegions.usa.path}>ERP services in the USA</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
