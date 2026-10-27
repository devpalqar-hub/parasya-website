import Link from "next/link";
import CTASection from "@/components/sections/CTASection/CTASection";
import styles from "./RootServiceFallback.module.css";

export default function RootServiceFallback({ categoryLabel, canonicalPath, entry }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>
            {categoryLabel} Services / {entry.label}
          </p>
          <h1 className={styles.title}>{entry.heroTitle}</h1>
          <p className={styles.description}>{entry.heroDescription}</p>
          <div className={styles.heroActions}>
            <Link href="/contact#contact-form" className={styles.primaryAction}>
              Talk to Palqar
            </Link>
            <Link href={canonicalPath} className={styles.secondaryAction}>
              Review this service brief
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.sections}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h2 className={styles.cardTitle}>What this service covers</h2>
              <ul className={styles.list}>
                {entry.coverage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.card}>
              <h2 className={styles.cardTitle}>Recommended next steps</h2>
              <p className={styles.description}>
                If this service is the right fit, we use a short discovery step to
                scope priorities, confirm technical constraints, and recommend the
                cleanest delivery path before a larger build or campaign begins.
              </p>
            </article>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Why teams explore this service</h2>
            <div className={styles.highlightGrid}>
              {entry.highlights.map((highlight) => (
                <article key={highlight.title} className={styles.highlightCard}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </div>

          {entry.deliverables?.length ? (
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>What you receive</h2>
              <ul className={styles.list}>
                {entry.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {entry.process?.length ? (
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>How we work</h2>
              <ol className={styles.steps}>
                {entry.process.map((step) => (
                  <li key={step.title} className={styles.highlightCard}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Related services</h2>
            <p className={styles.description}>
              Teams evaluating {entry.label.toLowerCase()} often compare adjacent
              service paths before deciding on the right build, scale, or
              experience priority.
            </p>
            <div className={styles.exploreLinks}>
              {entry.exploreLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.exploreLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>Frequently asked questions</h2>
            <ul className={styles.faqList}>
              {entry.faq.map((item) => (
                <li key={item.q}>
                  <span className={styles.faqItemTitle}>{item.q}</span>
                  {item.a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Plan the next step"
        title={`Explore ${entry.label} with a clear delivery plan.`}
        description="We can help you validate scope, align the right service mix, and turn this page into a concrete roadmap for implementation."
        href="/contact#contact-form"
      />
    </main>
  );
}
