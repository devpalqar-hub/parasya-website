import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ServiceCrossLink.module.css";

// Side-by-side "this service vs. its closest sibling" block. Used where two
// service pages could be confused (and compete for the same queries).
export default function ServiceCrossLink({ data }) {
  const { heading, intro, current, other } = data;

  return (
    <section className={styles.section} aria-labelledby="cross-link-heading">
      <div className={styles.container}>
        <h2 id="cross-link-heading" className={styles.title}>
          {heading}
        </h2>
        <p className={styles.intro}>{intro}</p>

        <div className={styles.grid}>
          <article className={styles.card}>
            <span className={styles.tag}>This page</span>
            <h3>{current.label}</h3>
            <p>{current.summary}</p>
            <p className={styles.choose}>
              <strong>Choose this when:</strong> {current.chooseWhen}
            </p>
          </article>

          <article className={`${styles.card} ${styles.cardOther}`}>
            <span className={styles.tag}>Related service</span>
            <h3>{other.label}</h3>
            <p>{other.summary}</p>
            <p className={styles.choose}>
              <strong>Choose this when:</strong> {other.chooseWhen}
            </p>
            <Link href={other.href} className={styles.link}>
              {other.linkLabel} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
