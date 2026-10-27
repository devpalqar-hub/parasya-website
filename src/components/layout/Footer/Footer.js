"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FOOTER_SOLUTION_LINKS } from "@/lib/serviceRoutes";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/industries" },
  { label: "Our Insights", href: "/blog" },
  { label: "Get in Touch", href: "/contact" },
  { label: "Careers", href: "/career" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/palqar" },
  { label: "Instagram", href: "https://instagram.com/palqar" },
  { label: "Twitter (X)", href: "https://x.com/palqar" },
  { label: "Youtube", href: "https://youtube.com/@palqar" },
];

const utilityLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const marqueeItems = [
  "Web Development",
  "Branding",
  "Performance Marketing",
  "Business Consulting",
  "Digital Growth",
];

export default function Footer() {
  const router = useRouter();
  const [times, setTimes] = useState({ qa: "", usa: "", in: "" });
  const [inView, setInView] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const format = (timeZone) =>
        now.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          timeZone,
        });

      setTimes({
        qa: format("Asia/Qatar"),
        usa: format("America/New_York"),
        in: format("Asia/Kolkata"),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const regions = [
    { id: "qa", name: "Qatar", time: times.qa, path: "/qa/services" },
    { id: "usa", name: "USA", time: times.usa, path: "/usa/services" },
    { id: "in", name: "India", time: times.in, path: "/in/services" },
  ];

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${inView ? styles.inView : ""}`}
    >
      {/* ── Services ticker ── */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((set) => (
            <div className={styles.marqueeSet} key={set}>
              {marqueeItems.map((item) => (
                <span className={styles.marqueeItem} key={`${set}-${item}`}>
                  {item}
                  <i className={styles.marqueeDot} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {/* ── CTA ── */}
        <div className={`${styles.cta} ${styles.reveal}`}>
          <div className={styles.ctaText}>
            <p className={styles.eyebrow}>Have a project in mind?</p>
            <h2 className={styles.ctaHeading}>
              Let&apos;s build something <span>remarkable.</span>
            </h2>
          </div>

          <Link href="/contact" className={styles.ctaButton}>
            <span>Start a project</span>
            <span className={styles.ctaArrow}>
              <ArrowUpRight size={22} />
            </span>
          </Link>
        </div>

        <a href="mailto:info@palqar.com" className={`${styles.email} ${styles.reveal}`}>
          info@palqar.com
        </a>

        <div className={styles.divider} />

        {/* ── Columns ── */}
        <div className={`${styles.topSection} ${styles.reveal}`}>
          <div className={styles.left}>
            <Link href="/" className={styles.brand} aria-label="Palqar home">
              <Image
                src="/LOGO.svg"
                alt=""
                width={48}
                height={48}
                className={styles.logoImg}
              />
              <span className={styles.brandName}>Palqar</span>
            </Link>
            <p className={styles.tagline}>
              Precision-engineered digital growth and transformation.
            </p>
            <div className={styles.emailBox}>
              <input
                type="email"
                placeholder="Subscribe to our newsletter..."
                className={styles.input}
              />
              <button
                className={styles.button}
                onClick={() => router.push("/contact")}
              >
                Join Now
              </button>
            </div>
          </div>

          <div className={styles.linksGroup}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linkList}>
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Solutions</h3>
              <ul className={styles.linkList}>
                {FOOTER_SOLUTION_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Connect</h3>
              <ul className={styles.linkList}>
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.regionWrapper}>
            <h3 className={styles.columnTitle}>Offices</h3>
            <div className={styles.pillsContainer}>
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={styles.regionPill}
                  onClick={() => router.push(region.path)}
                >
                  <span className={styles.regionName}>{region.name}</span>
                  <span className={styles.regionTime}>{region.time}</span>
                </button>
              ))}
            </div>
            <div className={styles.availability}>
              <span className={styles.pulseDot} />
              <span>Available for new projects</span>
            </div>
          </div>
        </div>

        {/* ── Large branding ── */}
        <div className={styles.brandSection}>
          <Image
            src="/LOGO-02.png"
            alt="Palqar Digital Growth Agency"
            width={1400}
            height={1200}
            className={styles.bigLogo}
            loading="lazy"
          />
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottomBar}>
          <span>(c) 2026 Palqar | Kerala | Doha | California</span>
          <div className={styles.bottomLinks}>
            {utilityLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
