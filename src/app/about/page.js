import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./About.module.css";
import Reveal from "@/components/ui/Reveal/Reveal";

// ─── Component ────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className={styles.root}>
      {/* ─── HERO ─── */}
      <section className={styles.aboutHero} aria-label="Hero">
        <div className={styles.container}>
          <h1 className={styles.title}>
            <Reveal as="span" delay={0}>We Don&apos;t Follow</Reveal>
            <Reveal as="span" delay={0.1}>We Create Trends</Reveal>
          </h1>

          <Reveal className={styles.heroImageWrapper} delay={0.4} y={40}>
            <Image
              src="/about/about-team.webp"
              alt="The Palqar team gathered in our studio"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1099px"
              className={styles.image}
            />
          </Reveal>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section
        className={styles.philosophySection}
        aria-labelledby="philosophy-heading"
      >
        <div className={styles.philosophyContainer}>
          <Reveal className={styles.philosophyLabel} aria-hidden="true">
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Philosophy</span>
          </Reveal>

          <Reveal as="h2" id="philosophy-heading" className={styles.philosophyHeading} delay={0.1}>
            We don&apos;t just take orders. We challenge assumptions, unearth
            insights, and craft strategic roadmaps that align with your ultimate
            business objectives. Logic meets magic.
          </Reveal>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section
        className={styles.missionSection}
        aria-labelledby="mission-heading"
      >
        <div className={styles.missionContainer}>
          <Reveal className={styles.missionLabel} aria-hidden="true">
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Our Goals</span>
          </Reveal>

          <Reveal as="h2" id="mission-heading" className={styles.missionHeading} delay={0.1}>
            THE MISSION
          </Reveal>

          <div className={styles.missionGrid}>
            {[
              { num: "01", title: "Defy Ordinary", text: "We refuse to build what has already been built. Every project is an opportunity to push the boundaries of digital design." },
              { num: "02", title: "Drive Impact", text: "Beautiful pixels mean nothing without business results. We engineer experiences that convert, engage, and retain." },
              { num: "03", title: "Empower Visionaries", text: "We partner with founders and leaders who have the courage to disrupt their industries." }
            ].map((card, i) => (
              <Reveal as="article" key={i} className={styles.missionCard} delay={i * 0.1}>
                <span className={styles.cardNumber} aria-hidden="true">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROADMAP ─── */}
      <section
        className={styles.roadmapSection}
        aria-labelledby="roadmap-heading"
      >
        <div className={styles.roadmapContainer}>
          <Reveal className={styles.roadmapLabel} aria-hidden="true">
            <span className={styles.labelLine}></span>
            <span className={styles.labelText}>Roadmap</span>
          </Reveal>

          <ol className={styles.timeline} aria-label="Company timeline">
            {[
              { year: "2023", title: "The Inception", text: "Founded in a small studio with a massive vision to disrupt the digital agency model." },
              { year: "2024", title: "Global Reach", text: "Expanded our team across 12 timezones, partnering with Fortune 500s and startups." },
              { year: "2025", title: "The Innovation Lab", text: "Launched our internal R&D division focusing on spatial computing and AI interfaces." },
              { year: "2026", title: "The Future", text: "Redefining the standard for digital experiences worldwide. The journey has just begun." }
            ].map((item, i) => (
              <Reveal as="li" key={i} className={styles.timelineItem} delay={i * 0.1}>
                <div className={styles.timelineMarker} aria-hidden="true"></div>
                <div className={styles.timelineContent}>
                  <time className={styles.timelineYear} dateTime={item.year}>{item.year}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section
        className={styles.teamSection}
        aria-labelledby="team-heading"
      >
        <div className={styles.teamContainer}>
          <Reveal as="span" className={styles.teamIntro}>Meet Our</Reveal>
          <Reveal as="h2" id="team-heading" className={styles.teamHeading} delay={0.1}>
            Leadership Team
          </Reveal>

          <div className={styles.teamGrid}>
            {[
              { src: "/whysection/murali.png", name: "Murali", role: "Founder" },
              { src: "/whysection/image1.png", name: "Rishan", role: "Chief Executive Officer" },
              { src: "/whysection/anandhu.png", name: "Anandhu", role: "Team Lead" },
              { src: "/whysection/reema.png", name: "Reema", role: "Associate Team Lead" }
            ].map(({ src, name, role }, i) => (
              <Reveal as="article" key={name} className={styles.teamCard} delay={i * 0.1}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={src}
                    alt={`${name} — ${role} at Palqar`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.teamImage}
                  />
                </div>
                <h3>{name}</h3>
                <p>{role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section
        className={styles.storiesSection}
        aria-labelledby="stories-heading"
      >
        <div className={styles.storiesContainer}>
          <Reveal as="h2" id="stories-heading" className={styles.storiesHeading}>
            Stories <br /> From Palqar
          </Reveal>

          <div className={styles.storiesGrid}>
            {[
              { src: "/about/story-1.jpg", category: "Outings", title: "Team Celebration", slug: "wayanad-trip" },
              { src: "/about/story-2.jpg", category: "Events", title: "Team Building" },
              { src: "/about/story-3.jpg", category: "Life at Palqar", title: "Our Culture" },
              { src: "/about/story-4.jpg", category: "Collaboration", title: "Innovation Sessions" }
            ].map(({ src, category, title, slug }, i) => (
              <Reveal as="article" key={title} className={styles.storyCard} delay={i * 0.1}>
                <Link href={slug ? `/about/${slug}` : "#"} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className={styles.storyImageWrapper}>
                    <Image
                      src={src}
                      alt={`${title} - ${category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={styles.storyImage}
                    />
                  </div>
                  <span className={styles.storyCategory}>{category}</span>
                  <h3 className={styles.storyTitle}>{title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className={styles.initiateProject}
        aria-label="Start a project with Palqar"
      >
        <div className={styles.column}>
          <Reveal as="p" className={styles.lets}>
            LET&apos;S <span className={styles.talk}>TALK</span>
          </Reveal>
          <Reveal className={styles.buttonWrapper} delay={0.1}>
            <button aria-label="Start a project with Palqar">
              START A PROJECT
            </button>
            <div className={styles.arrowRight} aria-hidden="true">
              <ArrowRight />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
