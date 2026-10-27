"use client";

import styles from "./works.module.css";
import Image from "next/image";
import Link from "next/link";

const KINGFOX_PLAY_URL = "#"; // TODO: replace with the KingFox Admin Google Play URL

const PROJECTS = [
  {
    id: 1,
    slug: "zodo",
    title: "ZodoAI",
    tagline: "Smarter Healthcare with AI",
    logo: "/featured-projects/zodo/zodo-logo.png",
    logoWidth: 800,
    logoHeight: 600,
    mockup: "/featured-projects/zodo/zodowork.png",
    accent: "#01b18a",
    accentSoft: "rgba(1,177,138,0.12)",
    accentBorder: "rgba(1,177,138,0.3)",
    bg: "linear-gradient(145deg, #03221c 0%, #05352b 50%, #021a15 100%)",
    cardStyle: "glassTeal",
    desc: "AI-powered platform enabling patients to schedule consultations instantly, access expert advice in seconds, and stay informed with real-time health updates.",
  },
  {
    id: 2,
    slug: "cleanmaria",
    title: "CleanMaria",
    tagline: "Cleaning made effortless.",
    logo: "/featured-projects/cleanmaria/logo.svg",
    logoWidth: 215,
    logoHeight: 98,
    mockup: "/featured-projects/cleanmaria/cleanmariawork.png",
    accent: "#e8e8e8",
    accentSoft: "rgba(255,255,255,0.06)",
    accentBorder: "rgba(255,255,255,0.18)",
    bg: "linear-gradient(145deg, #0a0a0a 0%, #161616 50%, #080808 100%)",
    cardStyle: "glassDark",
    desc: "Book professional cleaners in seconds. Trusted professionals handle every detail while flexible scheduling fits seamlessly into your daily routine.",
  },
  {
    id: 3,
    slug: "momsmilk",
    title: "MomsMilk",
    tagline: "Care made simple for new moms.",
    logo: "/featured-projects/momsmilk/Logo.svg",
    logoWidth: 200,
    logoHeight: 72,
    mockup: "/featured-projects/momsmilk/momsmilkwork.png",
    accent: "#e06040",
    accentSoft: "rgba(224,96,64,0.12)",
    accentBorder: "rgba(224,96,64,0.3)",
    bg: "linear-gradient(150deg, #fff0e8 0%, #fcd8c4 30%, #f69173 65%, #e06040 100%)",
    cardStyle: "glassWarm",
    desc: "Empowering mothers with smart baby tracking and a trusted milk-sharing community. Log feeds, diaper changes, and naps effortlessly.",
  },
  {
    id: 4,
    slug: "bambinidoulas",
    title: "Bambini Doulas",
    tagline: "Support for every stage of your journey.",
    logo: "/featured-projects/bambinidoulas/logo.svg",
    logoWidth: 240,
    logoHeight: 85,
    mockup: "/featured-projects/bambinidoulas/bamniniwork.png",
    accent: "#a855f7",
    accentSoft: "rgba(168,85,247,0.10)",
    accentBorder: "rgba(168,85,247,0.3)",
    bg: "linear-gradient(145deg, #130520 0%, #2a0845 50%, #0e0318 100%)",
    cardStyle: "glassPurple",
    desc: "Personalized doula support for every stage. Compassionate professionals guide you through pregnancy and beyond with confidence.",
  },
  {
    id: 5,
    slug: "kingfox",
    title: "KingFox",
    tagline: "A complete retail ecosystem.",
    logo: "/featured-projects/kingfox/logo.png",
    logoWidth: 150,
    logoHeight: 50,
    mockup: "/featured-projects/kingfox/kingfoxwork.png",
    desc: "Experience seamless retail. We crafted a premium end-to-end e-commerce ecosystem, integrating a sleek consumer storefront, a companion mobile app, a powerful administrative dashboard, and a custom billing POS.",
  },
  {
    id: 6,
    slug: "cuddlemind",
    title: "CuddleMind",
    tagline: "Your mental health journey starts here.",
    logo: "/featured-projects/cuddlemind/logo.png",
    logoWidth: 160,
    logoHeight: 50,
    mockup: "/featured-projects/cuddlemind/cuddlework.png",
    desc: "A mental wellness app designed to support your emotional well-being. Connect with qualified professionals through secure chat and video consultations.",
  },
  {
    id: 7,
    slug: "raheeb",
    title: "Raheeb",
    tagline: "Elegance meets doorstep delivery.",
    logo: "/featured-projects/raheeb/logo.png",
    logoWidth: 150,
    logoHeight: 50,
    mockup: "/featured-projects/raheeb/raheebwork.png",
    desc: "A premium fashion e-commerce experience paired with a reliable delivery partner app and administrative portal.",
  },
  {
    id: 8,
    slug: "messmeals",
    title: "MessMeals",
    tagline: "Homely meals, seamless operations.",
    logo: "/featured-projects/messmeals/logo.png",
    logoWidth: 150,
    logoHeight: 50,
    mockup: "/featured-projects/messmeals/messmealswork.png",
    desc: "A powerful management platform providing a complete overview of business performance, orders, partners, and deliveries.",
  },
];



export default function WorksClient() {
  return (
    <main className={styles.main}>
      {/* ════════════════ HERO ════════════════ */}
      <section className={styles.hero} aria-label="Works hero">

        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.blobRed} />

          <div className={styles.gridLines} />
        </div>

        <div className={styles.heroInner}>

          <div className={styles.heroLeft}>
            <span className={styles.heroPill}>Our Works</span>
            <h1 className={styles.heroTitle}>
              Projects that
              <br />
              <span className={styles.heroHighlight}>define brands</span>
              <br />
              and move markets.
            </h1>
            <p className={styles.heroDesc}>
              Every pixel purposeful. Every interaction intentional. We don't just
              build products — we craft digital experiences that grow businesses
              and delight users.
            </p>

            {/* <div className={styles.heroStats} aria-label="Key statistics">
              {STATS.map((s, i) => (
                <div key={i} className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{s.value}</span>
                  <span className={styles.heroStatLabel}>{s.label}</span>
                </div>
              ))}
            </div> */}

            <Link href="/contact#contact-form" className={styles.heroCta} id="works-hero-cta">
              Start Your Project
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <div className={styles.stackScene}>

              <svg
                className={styles.stackSvg}
                viewBox="-40 0 620 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M 118 72 C 10 150 20 300 80 390"
                  stroke="rgba(220,53,69,0.22)"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  d="M 118 72 C 160 72 220 100 268 128"
                  stroke="rgba(220,53,69,0.55)"
                  strokeWidth="1"
                  fill="none"
                />
                <line x1="94" y1="52" x2="94" y2="72" stroke="rgba(220,53,69,0.35)" strokeWidth="1" />
                <circle cx="268" cy="128" r="3.5" fill="#dc3545" />
                <circle cx="268" cy="128" r="7" fill="rgba(220,53,69,0.15)" />
                <text x="94" y="42" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter,DM Sans,sans-serif" letterSpacing="1.8" textAnchor="middle">IDEAS</text>
                <text x="94" y="54" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter,DM Sans,sans-serif" letterSpacing="1.8" textAnchor="middle">STRATEGY</text>
                <circle cx="118" cy="72" r="3" fill="#dc3545" />
                <circle cx="118" cy="72" r="6" fill="rgba(220,53,69,0.12)" />

                <path
                  d="M 358 232 C 385 218 408 200 432 190"
                  stroke="rgba(220,53,69,0.55)"
                  strokeWidth="1"
                  fill="none"
                />
                <line x1="448" y1="188" x2="448" y2="202" stroke="rgba(220,53,69,0.35)" strokeWidth="1" />
                <circle cx="358" cy="232" r="3.5" fill="#dc3545" />
                <circle cx="358" cy="232" r="7" fill="rgba(220,53,69,0.15)" />
                <text x="488" y="190" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter,DM Sans,sans-serif" letterSpacing="1.8" textAnchor="middle">DESIGN</text>
                <text x="488" y="203" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter,DM Sans,sans-serif" letterSpacing="1.8" textAnchor="middle">DEVELOPMENT</text>
                <circle cx="432" cy="190" r="3" fill="#dc3545" />
                <circle cx="432" cy="190" r="6" fill="rgba(220,53,69,0.12)" />

                <path
                  d="M 368 338 C 395 338 418 352 444 358"
                  stroke="rgba(220,53,69,0.55)"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="368" cy="338" r="3.5" fill="#dc3545" />
                <circle cx="368" cy="338" r="7" fill="rgba(220,53,69,0.15)" />
                <text x="480" y="362" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter,DM Sans,sans-serif" letterSpacing="1.8" textAnchor="middle">GROWTH</text>
                <circle cx="444" cy="358" r="3" fill="#dc3545" />
                <circle cx="444" cy="358" r="6" fill="rgba(220,53,69,0.12)" />
                <circle cx="80" cy="390" r="3.5" fill="#dc3545" />
                <circle cx="80" cy="390" r="7" fill="rgba(220,53,69,0.12)" />
              </svg>

              <div className={styles.panelStack}>
                <div className={`${styles.panel} ${styles.panelBack}`} />
                <div className={`${styles.panel} ${styles.panelMid}`} />
                <div className={`${styles.panel} ${styles.panelFront}`}>
                  <div className={styles.panelGlow} />
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className={styles.gridSection} aria-label="Project showcase">
        <div className={styles.grid} role="list">
          <article className={`${styles.card} ${styles.cardZodo}`} role="listitem">
            <Link href="/projects/zodo" className={styles.cardLink} aria-label="View ZodoAI case study">
              <div className={styles.zodoInner}>
                <div className={styles.zodoText}>
                  <div>
                    <Image
                      src={PROJECTS[0].logo}
                      alt="ZodoAI logo"
                      width={200}
                      height={56}
                      className={styles.zodoLogo}
                      style={{ objectFit: "cover", borderRadius: "12px" }}
                    />
                    <h3 className={styles.cardTitle}>{PROJECTS[0].tagline}</h3>
                    <p className={styles.cardDesc}>{PROJECTS[0].desc}</p>
                  </div>
                  <div className={styles.viewBtn} style={{ color: "#01b18a" }}>
                    View Case Study
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={styles.zodoMockupWrap}>
                  <div className={styles.zodoGlow} />
                  <Image
                    src={PROJECTS[0].mockup}
                    alt="ZodoAI platform mockup"
                    fill
                    className={styles.zodoMockupImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.zodoBorderBar} />
            </Link>
          </article>

          <article className={`${styles.card} ${styles.cardClean}`} role="listitem">
            <Link href="/projects/cleanmaria" className={styles.cardLink} aria-label="View CleanMaria case study">
              <div className={styles.cleanBgWrap}>
                <Image
                  src={PROJECTS[1].mockup}
                  alt="CleanMaria mockup"
                  fill
                  className={styles.cleanBgImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className={styles.cleanGradientOverlay} />
              </div>

              <div className={styles.cleanContent}>
                <Image
                  src={PROJECTS[1].logo}
                  alt="CleanMaria logo"
                  width={180}
                  height={60}
                  className={styles.cleanLogo}
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
                <h3 className={styles.cardTitle} style={{ color: "#fff" }}>{PROJECTS[1].tagline}</h3>
                <p className={styles.cardDesc} style={{ color: "rgba(255,255,255,0.7)" }}>{PROJECTS[1].desc}</p>
                <div className={styles.viewBtn} style={{ color: "#fff" }}>
                  View Case Study
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>

          {/* ── CARD 3: MomsMilk — Centered island layout ── */}
          <article className={`${styles.card} ${styles.cardMoms}`} role="listitem">
            <Link href="/projects/momsmilk" className={styles.cardLink} aria-label="View MomsMilk case study">
              <div className={styles.momsOverlay} />

              {/* Centered Text Content */}
              <div className={styles.momsContent}>
                <Image
                  src={PROJECTS[2].logo}
                  alt="MomsMilk logo"
                  width={160}
                  height={52}
                  className={styles.momsLogo}
                  style={{ objectFit: "contain", margin: "0 auto" }}
                />
                <h3 className={styles.cardTitle} style={{ color: "#3a1a0a", textAlign: "center", marginTop: "16px" }}>{PROJECTS[2].tagline}</h3>
                <p className={styles.cardDesc} style={{ color: "rgba(58,26,10,0.75)", textAlign: "center" }}>{PROJECTS[2].desc}</p>
                <div className={styles.momsViewBtn}>
                  View Case Study
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="#3a1a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Island Mockup */}
              <div className={styles.momsIsland}>
                <Image
                  src={PROJECTS[2].mockup}
                  alt="MomsMilk app mockup"
                  fill
                  className={styles.momsMockupImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </Link>
          </article>

          <article className={`${styles.card} ${styles.cardBambini}`} role="listitem">
            <Link href="/projects/bambinidoulas" className={styles.cardLink} aria-label="View Bambini Doulas case study">
              <div className={styles.bambiniMockupTop}>
                <div className={styles.bambiniGlow} />
                <Image
                  src={PROJECTS[3].mockup}
                  alt="Bambini Doulas mockup"
                  fill
                  className={styles.bambiniMockupImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className={styles.bambiniMaskTop} />
              </div>

              <div className={styles.bambiniContent}>
                <Image
                  src={PROJECTS[3].logo}
                  alt="Bambini Doulas logo"
                  width={200}
                  height={70}
                  className={styles.bambiniLogo}
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
                <div className={styles.bambiniQuote}>
                  &ldquo;Every mother deserves compassionate support.&rdquo;
                </div>
                <h3 className={styles.cardTitle} style={{ color: "#f0e8ff" }}>{PROJECTS[3].tagline}</h3>
                <p className={styles.cardDesc} style={{ color: "rgba(240,232,255,0.6)" }}>{PROJECTS[3].desc}</p>
                <div className={styles.viewBtn} style={{ color: "#c084fc", marginTop: "20px" }}>
                  View Case Study
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="#c084fc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>

          {/* ── CARD 5: KingFox — Overlapping tilted panel layout ── */}
          <article className={`${styles.card} ${styles.cardKingfox}`} role="listitem">
            <Link href="/projects/kingfox" className={styles.cardLink} aria-label="View KingFox case study">
              <div className={styles.kingfoxInner}>

                <div className={styles.kingfoxText}>
                  <Image
                    src={PROJECTS[4].logo}
                    alt="KingFox logo"
                    width={150}
                    height={50}
                    className={styles.kingfoxLogo}
                    style={{ objectFit: "contain", objectPosition: "left center" }}
                  />
                  <h3 className={styles.cardTitle} style={{ color: "#111", marginTop: "16px" }}>{PROJECTS[4].tagline}</h3>
                  <p className={styles.cardDesc} style={{ color: "rgba(0,0,0,0.7)", marginTop: "12px" }}>{PROJECTS[4].desc}</p>

                  <div className={styles.viewBtn} style={{ color: "#111", marginTop: "32px" }}>
                    View Case Study
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className={styles.kingfoxMockupWrap}>
                  <div className={styles.kingfoxGlow} />
                  <div className={styles.kingfoxPanel}>
                    <Image
                      src={PROJECTS[4].mockup}
                      alt="KingFox ecosystem mockup"
                      fill
                      className={styles.kingfoxMockupImg}
                      sizes="(max-width: 992px) 100vw, 60vw"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </Link>
            <a
              href={KINGFOX_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.kingfoxPlayBtn}
              aria-label="Get KingFox Admin on Google Play"
            >
              <img src="/featured-projects/kingfox/Playstore.svg" alt="" className={styles.kingfoxPlayIcon} />
              <span className={styles.kingfoxPlayText}>
                <small>Get it on</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </article>

          {/* ── CARD 6: CuddleMind — Centered image-panel layout ── */}
          <article className={`${styles.card} ${styles.cardCuddle}`} role="listitem">
            <Link href="/projects/cuddlemind" className={styles.cardLink} aria-label="View CuddleMind case study">
              <div className={styles.cuddleGlowBg} aria-hidden="true" />

              <div className={styles.cuddleCenter}>
                <span className={styles.cuddleLogoBadge}>
                  <Image
                    src={PROJECTS[5].logo}
                    alt="CuddleMind logo"
                    width={130}
                    height={40}
                    className={styles.cuddleLogo}
                    style={{ objectFit: "contain" }}
                  />
                </span>
                <h3 className={styles.cardTitle} style={{ textAlign: "center" }}>{PROJECTS[5].tagline}</h3>
                <p className={styles.cardDesc} style={{ textAlign: "center" }}>{PROJECTS[5].desc}</p>

                <div className={styles.cuddleImagePanel}>
                  <Image
                    src={PROJECTS[5].mockup}
                    alt="CuddleMind app mockup"
                    fill
                    className={styles.cuddleMockupImg}
                    sizes="(max-width: 768px) 100vw, 360px"
                    loading="lazy"
                  />
                </div>

                <div className={styles.viewBtn} style={{ margin: "20px auto 40px" }}>
                  View Case Study
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>

          {/* ── CARD 7: Raheeb — Tilted framed image, left side ── */}
          <article className={`${styles.card} ${styles.cardRaheeb}`} role="listitem">
            <Link href="/projects/raheeb" className={styles.cardLink} aria-label="View Raheeb case study">
              <div className={styles.raheebInner}>

                <div className={styles.raheebFrame}>
                  <div className={styles.raheebFrameInner}>
                    <Image
                      src={PROJECTS[6].mockup}
                      alt="Raheeb mockup"
                      fill
                      className={styles.raheebMockupImg}
                      sizes="(max-width: 992px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={styles.raheebText}>
                  <Image
                    src={PROJECTS[6].logo}
                    alt="Raheeb logo"
                    width={150}
                    height={50}
                    className={styles.raheebLogo}
                    style={{ objectFit: "contain", objectPosition: "left center" }}
                  />
                  <h3 className={styles.cardTitle} style={{ color: "#111" }}>{PROJECTS[6].tagline}</h3>
                  <p className={styles.cardDesc} style={{ color: "rgba(0,0,0,0.6)" }}>{PROJECTS[6].desc}</p>

                  <div className={styles.viewBtn} style={{ color: "#111" }}>
                    View Case Study
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

              </div>
            </Link>
          </article>

          {/* ── CARD 8: MessMeals — Organic blob mockup layout ── */}
          <article className={`${styles.card} ${styles.cardMessMeals}`} role="listitem">
            <Link href="/projects/messmeals" className={styles.cardLink} aria-label="View MessMeals case study">
              <div className={styles.messMealsInner}>

                <div className={styles.messMealsText}>
                  <Image
                    src={PROJECTS[7].logo}
                    alt="MessMeals logo"
                    width={150}
                    height={50}
                    className={styles.messMealsLogo}
                    style={{ objectFit: "contain", objectPosition: "left center" }}
                  />
                  <h3 className={styles.cardTitle} style={{ marginTop: "16px" }}>{PROJECTS[7].tagline}</h3>
                  <p className={styles.cardDesc}>{PROJECTS[7].desc}</p>

                  <div className={styles.viewBtn} style={{ marginTop: "32px" }}>
                    View Case Study
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className={styles.messMealsMockupWrap}>
                  <div className={styles.messMealsBlob} />
                  <div className={styles.messMealsBlobFrame}>
                    <Image
                      src={PROJECTS[7].mockup}
                      alt="MessMeals mockup"
                      fill
                      className={styles.messMealsMockupImg}
                      sizes="(max-width: 992px) 100vw, 55vw"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </Link>
          </article>

        </div>
      </section>

      <section className={styles.ctaBand} aria-label="Start a project">
        <div className={styles.ctaBandBg} aria-hidden="true" />
        <div className={styles.ctaBandContent}>
          <p className={styles.ctaBandPill}>Ready to Build?</p>
          <h2 className={styles.ctaBandTitle}>Your project could be next.</h2>
          <p className={styles.ctaBandDesc}>
            Let&apos;s turn your vision into a product people love.
          </p>
          <Link href="/contact#contact-form" className={styles.ctaBandBtn} id="works-cta-band-btn">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
