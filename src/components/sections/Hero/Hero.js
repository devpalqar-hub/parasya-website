"use client";

import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

const floatingCards = [
  {
    id: "card-web-dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Custom Web Development",
    desc: "Tailored websites & apps built to perform.",
    position: "topLeft",
  },
  {
    id: "card-branding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Brand Identity",
    desc: "Logos, systems & visual language that stand out.",
    position: "topRight",
  },
  {
    id: "card-marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Performance Marketing",
    desc: "Data-driven campaigns that convert.",
    position: "bottomLeft",
  },
  {
    id: "card-consulting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Business Consulting",
    desc: "Strategic clarity for scalable growth.",
    position: "bottomRight",
  },
];

/* ─────────────────────────────────────────
   Curved bezier paths — from each card to laptop
   viewBox: 0 0 600 700 (matches visual column)
   Laptop screen sits roughly at x:260–560, y:200–460
───────────────────────────────────────── */
const PATHS = {
  // FROM laptop top-center (hidden) → arcs up & left → TO topLeft card
  topLeft:    "M 400 450 C 380 250 250 200 185 233",
  // FROM laptop slightly left of center (hidden) → arcs up & right (bulging left) → TO topRight card
  topRight:   "M 330 450 C 300 250 350 212 405 212",
  // FROM bottomLeft card → INTO laptop
  bottomLeft: "M 185 505 C 230 505 275 460 305 450", 
  // FROM bottomRight card → INTO laptop
  bottomRight:"M 405 535 C 415 535 435 490 440 450",
};

/* Endpoint dots on the laptop edge (hidden behind the opaque laptop image) */
const DOTS = [
  { cx: 400, cy: 450 },  // topLeft line originates here
  { cx: 330, cy: 450 },  // topRight line originates here
  { cx: 305, cy: 450 },
  { cx: 440, cy: 450 },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">

      {/* ── Background ── */}
      <div className={styles.bgGradientLeft} aria-hidden="true" />
      <div className={styles.bgGradientRight} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      {/* ══ Inner layout ══ */}
      <div className={styles.inner}>

        {/* ── LEFT — text ── */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Built to Grow <br /> Designed to Convert
          </h1>
          <p className={styles.desc}>
            From custom web development and brand identity to performance
            marketing and business consulting, one integrated team with
            measurable results.
          </p>
          <div className={styles.ctaWrap}>
            <Link className={styles.cta} href="/contact#contact-form" id="hero-cta-start">
              <span className={styles.ctaText}>Get Started</span>
            </Link>
            <Link className={styles.ctatwo} href="/services" id="hero-cta-services">
              <span className={styles.ctaText}>Our Services</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT — laptop + cards ── */}
        <div className={styles.visual} aria-hidden="true">

          {/* ── Curved connecting lines ── */}
          <svg
            className={styles.lines}
            viewBox="0 0 600 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {/* Glowing red filter for dots */}
              <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Path definitions for animateMotion */}
              <path id="pathTL" d={PATHS.topLeft} />
              <path id="pathTR" d={PATHS.topRight} />
              <path id="pathBL" d={PATHS.bottomLeft} />
              <path id="pathBR" d={PATHS.bottomRight} />
            </defs>

            {/* ── Curved dashed lines ── */}
            {Object.values(PATHS).map((d, i) => (
              <path
                key={i}
                d={d}
                stroke="rgba(220,53,69,0.28)"
                strokeWidth="1"
                strokeDasharray="6 5"
                strokeLinecap="round"
              />
            ))}

            {/* ── Glowing endpoint dots on laptop ── */}
            {DOTS.map((dot, i) => (
              <g key={i}>
                {/* Outer glow ring */}
                <circle cx={dot.cx} cy={dot.cy} r="6" fill="rgba(220,53,69,0.12)" />
                {/* Inner solid dot */}
                <circle cx={dot.cx} cy={dot.cy} r="3" fill="#dc3545" filter="url(#redGlow)" />
              </g>
            ))}

            {/* ── Animated travelling dots ── */}
            {[
              { href: "#pathTL", dur: "2.8s", delay: "0s" },
              { href: "#pathTR", dur: "2.4s", delay: "0.8s" },
              { href: "#pathBL", dur: "3.1s", delay: "1.5s" },
              { href: "#pathBR", dur: "2.6s", delay: "0.4s" },
            ].map((anim, i) => (
              <circle key={i} r="3.5" fill="#dc3545" filter="url(#redGlow)">
                <animateMotion
                  dur={anim.dur}
                  begin={anim.delay}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={anim.href} />
                </animateMotion>
              </circle>
            ))}

            {/* ── Card-side origin dots ── */}
            <circle cx="185" cy="233" r="2.5" fill="rgba(220,53,69,0.5)" />
            <circle cx="405" cy="212" r="2.5" fill="rgba(220,53,69,0.5)" />
            <circle cx="185" cy="505" r="2.5" fill="rgba(220,53,69,0.5)" />
            <circle cx="405" cy="535" r="2.5" fill="rgba(220,53,69,0.5)" />
          </svg>

          {/* ── Laptop image ── */}
          <div className={styles.laptopWrap}>
            <Image
              src="/herobg.png"
              alt="Palqar dashboard — real-time project analytics"
              fill
              priority
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 100vw, 55vw"
              className={styles.laptopImg}
            />
          </div>

          {/* ── Red glow ── */}
          <div className={styles.laptopGlow} aria-hidden="true" />

          {/* ── Floating service cards ── */}
          {floatingCards.map((card) => (
            <div key={card.id} id={card.id} className={`${styles.card} ${styles[card.position]}`}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
