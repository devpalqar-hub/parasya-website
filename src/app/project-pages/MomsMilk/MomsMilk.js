"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  Droplets,
  Globe2,
  HeartPulse,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import styles from "./MomsMilk.module.css";

const imagePath = "/projects/momsmilk/";

const pillars = [
  [
    Droplets,
    "IDENTITY DESIGN",
    ["GLOBAL BRAND SYSTEM", "ASSET LIBRARIES", "CARE FOUNDATIONS"],
  ],
  [
    BarChart3,
    "GROWTH ENGINE",
    ["VETTING PIPELINES", "NODE EXPANSION", "USER VELOCITY"],
  ],
  [
    Bot,
    "OPS AUTOMATION",
    ["SMART SCHEDULING", "ENCRYPTED FLOWS", "AUTOMATED VETTING"],
  ],
];

const modules = [
  [
    "momsmilk-nurture-center.png",
    "Nourishing Every Baby",
    "A caring platform designed to support babies with safe sharing and daily care tracking.",
    "MODULE 01",
    "NURTURE CENTER",
  ],
  [
    "momsmilk-donor-network.png",
    "Connect with Milk Donors",
    "Find trusted breast milk donors nearby and build a safe, supportive connection.",
    "MODULE 02",
    "DONOR NETWORK",
  ],
  [
    "momsmilk-encrypted-chat.png",
    "Chat & Manage Profiles",
    "Communicate securely with donors and manage multiple baby profiles in one place.",
    "MODULE 03",
    "ENCRYPTED CHAT",
  ],
  [
    "momsmilk-reports.png",
    "Track Baby's Daily Care",
    "Log feeding, diaper changes, and sleep to understand your baby's routine better.",
    "MODULE 04",
    "SMART REPORTS",
  ],
];

const engineCards = [
  ["◎", "QUALITY MATRIX"],
  ["ϟ", "DONOR VELOCITY"],
  ["♢", "SAFETY INDEX"],
  ["▥", "MARKET VOLUME"],
  ["◉", "NODE ANALYTICS"],
  ["⌕", "SMART SEARCH"],
  ["⚙", "OPS AUTOMATION"],
  ["♙", "SECURE LEDGER"],
];

export default function MomsMilk() {
  const pageRef = useRef(null);

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll(`.${styles.reveal}`);
    if (!sections?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add(styles.visible));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page} ref={pageRef}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            <Sparkles size={10} /> FEATURED CASE STUDY
          </p>
          <h1>
            REBRANDING A<br />
            <span>MOTHERHOOD</span>
            <br />
            ECOSYSTEM
          </h1>
          <p className={styles.lead}>
            From a local tracking app to a pharma-grade premium powerhouse. We
            architected the brand, the tools, and the trust-engine.
          </p>
          <div className={styles.actions}>
            <Link href="#ecosystem" className={styles.primary}>
              VIEW LIVE PLATFORM <ArrowUpRight size={14} />
            </Link>
            <a href="#process" className={styles.secondary}>
              OUR PROCESS
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.overview} ${styles.reveal}`}>
        <div className={styles.stats}>
          {[
            ["4.9/5", "CLIENT RATING"],
            ["12k+", "TOTAL NODES"],
            ["98%", "RETENTION"],
            ["12.4x", "GROWTH"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className={styles.heroImage}>
          <Image
            src={`${imagePath}momsmilk-hero.jpg`}
            alt="Mother holding a sleeping baby"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 820px"
          />
        </div>
      </section>

      <section className={`${styles.challenge} ${styles.reveal}`}>
        <div>
          <p className={styles.eyebrow}>THE VISUAL CHALLENGE</p>
          <h2>
            FRAGMENTED CARE
            <br />
            <i>IN A GLOBAL</i>
            <br />
            CONTEXT.
          </h2>
        </div>
        <div className={styles.challengeCopy}>
          <p>
            “From a local service to a tech-enabled premium powerhouse. We built
            the brand, the tools, and the growth engine.”
          </p>
          <ul>
            <li>DECENTRALIZED DONOR HUBS</li>
            <li>NON-STANDARDIZED VERIFICATION</li>
            <li>TRUST DEFICIT IN DIGITAL CARE</li>
            <li>COMPLEX INTERNATIONAL OPS</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.pillars} ${styles.reveal}`} id="process">
        <p className={styles.eyebrow}>THREE PILLARS</p>
        <div className={styles.pillarGrid}>
          {pillars.map(([Icon, title, lines]) => (
            <article key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              {lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.identity} ${styles.reveal}`}>
        <div className={styles.identityHeading}>
          <div>
            <p className={styles.eyebrow}>BRAND IDENTITY</p>
            <h2>
              SYSTEMIC
              <br />
              <span>WARMTH.</span>
            </h2>
          </div>
          <div className={styles.swatches}>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className={styles.identityGrid}>
          <article className={styles.typeCard}>
            <p>TYPOGRAPHY / 01</p>
            <strong>
              INTER
              <br />
              BLACK
            </strong>
            <b>AaBbCc</b>
            <small>
              PRECISION ENGINEERED FOR HIGH-VISIBILITY CARE ENVIRONMENTS.
            </small>
          </article>
          <Image
            src={`${imagePath}momsmilk-metaphor.jpg`}
            alt="Motherhood brand imagery"
            width={390}
            height={215}
            className={styles.metaphor}
          />
          <Image
            src={`${imagePath}momsmilk-nursery.jpg`}
            alt="Warm nursery interior"
            width={390}
            height={300}
            className={styles.nursery}
          />
          <Image
            src={`${imagePath}momsmilk-brand-story.jpg`}
            alt="MomsMilk brand story"
            width={390}
            height={390}
            className={styles.story}
          />
          <div className={styles.sanctuary}>
            <ArrowUpRight />
            <b>
              THE
              <br />
              ELECTRIC
              <br />
              SANCTUARY
            </b>
          </div>
        </div>
      </section>

      <section className={`${styles.engine} ${styles.reveal}`}>
        <div className={styles.engineTop}>
          <div>
            <p className={styles.eyebrow}>ENGINE OF SCALE</p>
            <h2>
              MARKET
              <br />
              <span>ENGINE.</span>
            </h2>
          </div>
          <div>
            <p>
              We designed a proprietary node-based system that allows for
              localized care hubs to operate under a global pharma-grade
              standard. Efficiency meets safety at scale.
            </p>
            <ul>
              <li>REAL-TIME NODE MONITORING</li>
              <li>AUTOMATED KYC PIPELINES</li>
              <li>IMMUTABLE VETTING LEDGERS</li>
              <li>DYNAMIC VOLUME BALANCING</li>
            </ul>
          </div>
        </div>
        <div className={styles.engineGrid}>
          {engineCards.map(([icon, label]) => (
            <article key={label}>
              <b>{icon}</b>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${styles.ecosystem} ${styles.reveal}`}
        id="ecosystem"
      >
        <p className={styles.eyebrow}>THE DIGITAL ECOSYSTEM</p>
        <h2>
          INTEGRATED
          <br />
          <span>CARE.</span>
        </h2>
        <div className={styles.moduleGrid}>
          {modules.map(([image, title, description, number, label]) => (
            <article key={label}>
              <div className={styles.moduleScreen}>
                <Image
                  src={`${imagePath}${image}`}
                  alt={title}
                  fill
                  sizes="(max-width: 700px) 50vw, 230px"
                />
              </div>
              {/* <div className={styles.moduleText}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div> */}
              <small>{number}</small>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.interface} ${styles.reveal}`}>
        <p className={styles.eyebrow}>PLATFORM INTERFACE</p>
        <h2>
          OPERATIONAL
          <br />
          <span>VERITY.</span>
        </h2>
        <div className={styles.dashboard}>
          <aside>
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} />
            ))}
          </aside>
          <div className={styles.dashboardMain}>
            <div className={styles.miniStats}>
              {[
                ["ACTIVE NODES", "24"],
                ["VETTING PIPELINE", "128"],
                ["NODE SUPPLY", "84%"],
                ["GROWTH VELOCITY", "12.4x"],
              ].map(([label, value]) => (
                <div key={label}>
                  <small>{label}</small>
                  <b>{value}</b>
                </div>
              ))}
            </div>
            <div className={styles.chart}>
              <p>VERIFIED GLOBAL CARE ACTIVITY</p>
              <span>•••</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.software} ${styles.reveal}`}>
        <p className={styles.eyebrow}>SOFTWARE &amp; AUTOMATION</p>
        <h2>
          THE BRAIN
          <br />
          <span>BEHIND THE CARE.</span>
        </h2>
        <div className={styles.iconRow}>
          {[
            Search,
            ShieldCheck,
            Activity,
            BarChart3,
            MessageSquare,
            UsersRound,
            Bot,
            Globe2,
          ].map((Icon, i) => (
            <Icon key={i} size={19} />
          ))}
        </div>
        <div className={styles.softwareCards}>
          {[
            [
              "SMART ANALYSIS",
              "PREDICTIVE CARE PATTERNS",
              "Analyzing trends to forecast milestones and future care needs for every family node.",
            ],
            [
              "KYC ENGINE",
              "AUTOMATED DONOR VETTING",
              "Pharma-grade background checks and medical history verification integrated at source.",
            ],
            [
              "SYNC OPS",
              "REAL-TIME NODE BALANCING",
              "Balancing supply and demand across global hubs to ensure life-saving access everywhere.",
            ],
          ].map(([tag, title, copy]) => (
            <article key={tag}>
              <small>{tag}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.numbers} ${styles.reveal}`}>
        <p className={styles.eyebrow}>THE NUMBERS</p>
        <div>
          {[
            ["4.9/5", "CLIENT RATING"],
            ["12k+", "TOTAL NODES"],
            ["98%", "RETENTION"],
            ["300%", "GROWTH YOY"],
            ["100%", "SAFETY RECORD"],
            ["12.4x", "GROWTH VELOCITY"],
          ].map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.quote} ${styles.reveal}`}>
        <blockquote>
          “MomsMilk has redefined how we think about community-driven
          healthcare. It&apos;s not just an app; it&apos;s a global
          infrastructure for the most critical stage of human development.”
        </blockquote>
        <div className={styles.avatar} />
        <strong>SARAH J. MITCHELL</strong>
        <span>CHIEF HEALTH OFFICER</span>
      </section>
    </main>
  );
}
