"use client";

import styles from "./TrustSection.module.css";
import Image from "next/image";
import { Star, Layers, Users, Globe } from "lucide-react";
import { SiGoogleads } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

/* ─────────────────────────────────────────
   Star Icon Component
───────────────────────────────────────── */
function StarIcon() {
  return (
    <Star
      className={styles.starIcon}
      fill="#f5a623"
      color="#f5a623"
      size={13}
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────
   Stats data
───────────────────────────────────────── */
const STATS = [
  {
    id: "stat-experience",
    value: "10+",
    label: "Years of Experience",
    icon: <Layers size={24} strokeWidth={1.5} />,
  },
  {
    id: "stat-clients",
    value: "250+",
    label: "Happy Clients",
    icon: <Users size={24} strokeWidth={1.5} />,
  },
  {
    id: "stat-projects",
    value: "500+",
    label: "Projects Delivered",
    icon: <Globe size={24} strokeWidth={1.5} />,
  },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function TrustSection() {
  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      {/* ── Background Image ── */}
      <div className={styles.bgImageWrap} aria-hidden="true">
        <Image
          src="/trustedbg.png"
          alt="Trusted background"
          fill
          quality={90}
          className={styles.bgImage}
        />
      </div>

      {/* ── Background decorative glows ── */}
      <div className={styles.bgGlowLeft} aria-hidden="true" />
      <div className={styles.bgGlowRight} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>TRUSTED BY BUSINESSES</p>
          <h2 id="trust-heading" className={styles.heading}>
            Recognized.{" "}
            <span className={styles.accent}>Certified.</span>{" "}
            <span className={styles.accent}>Trusted.</span>
          </h2>
          <p className={styles.sub}>
            We partner with global platforms and are trusted by businesses
            <br className={styles.brDesktop} /> for our quality, performance
            and results.
          </p>
        </div>

        {/* ── Certification Cards ── */}
        <div className={styles.cards} role="list">

          {/* Card 1 — Google Ads */}
          <div
            id="card-google-ads"
            className={styles.card}
            role="listitem"
            aria-label="Google Ads Certified Partner"
          >
            {/* Logo block — left column */}
            <div className={styles.cardLogo}>
              <div className={styles.cardLogoIcon} aria-hidden="true">
                <SiGoogleads size={28} color="#4285F4" />
              </div>
            </div>

            {/* Content block — right column */}
            <div className={styles.cardBody}>
              <span className={styles.cardEyebrow}>CERTIFIED PARTNER</span>
              <p className={styles.cardTitle}>Google Ads</p>
              <p className={styles.cardDesc}>Official Google Ads Certified Partner.</p>
            </div>
          </div>

          {/* Card 2 — Google Reviews (featured / wider) */}
          <div
            id="card-google-reviews"
            className={`${styles.card} ${styles.cardFeatured}`}
            role="listitem"
            aria-label="Google Client Reviews, 4.9 out of 5 stars"
          >
            {/* Colorful Google G logo */}
            <div className={styles.cardLogo}>
              <div className={styles.cardLogoIcon} aria-hidden="true">
                <FcGoogle size={32} />
              </div>
            </div>

            <div className={styles.cardBody}>
              <span className={styles.cardEyebrow}>CLIENT REVIEWS</span>
              <div className={styles.ratingRow}>
                <span className={styles.ratingValue}>4.9/5</span>
                <div className={styles.stars} role="img" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <p className={styles.reviewLabel}>120+ Google Reviews</p>
              <p className={styles.reviewSub}>from our happy clients.</p>
            </div>
          </div>

          {/* Card 3 — Clutch */}
          <div
            id="card-clutch"
            className={styles.card}
            role="listitem"
            aria-label="Clutch Verified Reviews, 4.8 out of 5 stars"
          >
            {/* Clutch Logo SVG */}
            <div className={styles.cardLogo}>
              <div className={styles.cardLogoIcon} aria-hidden="true">
                <Image src="/Clutch.svg" alt="Clutch" width={48} height={14} />
              </div>
            </div>

            <div className={styles.cardBody}>
              <span className={styles.cardEyebrow}>VERIFIED REVIEWS</span>
              <div className={styles.ratingRow}>
                <span className={styles.ratingValue}>4.8/5</span>
                <div className={styles.stars} role="img" aria-label="4.8 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <p className={styles.reviewLabel}>20+ Verified Reviews</p>
              <p className={styles.reviewSub}>on Clutch.</p>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ── Stats Row ── */}
        <div className={styles.stats} role="list" aria-label="Key statistics">
          {STATS.map((stat, idx) => (
            <div
              key={stat.id}
              id={stat.id}
              className={styles.statItem}
              role="listitem"
            >
              <div className={styles.statIcon} aria-hidden="true">
                {stat.icon}
              </div>
              <div className={styles.statText}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
              {idx < STATS.length - 1 && (
                <div className={styles.statSeparator} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
