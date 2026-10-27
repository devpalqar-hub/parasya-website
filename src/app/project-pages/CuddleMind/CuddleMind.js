"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Apple,
    ArrowUpRight,
    BadgeCheck,
    Bell,
    CalendarCheck,
    Lock,
    MessageCircle,
    Play,
    Smile,
    Video,
} from "lucide-react";
import styles from "./CuddleMind.module.css";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const BASE = "/featured-projects/cuddlemind/";
const LIVE_URL = "#"; // TODO: replace with the live CuddleMind landing page URL
const APPLE_URL = "https://apps.apple.com/us/app/cuddle-mind/id6747766229";
const PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.cuddlemind.cuddle_mind";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const HERO_CHIPS = ["Secure chat", "Video consultations", "Easy booking"];

const MOODS = [
    { id: "happy", emoji: "😊", label: "Happy" },
    { id: "calm", emoji: "😌", label: "Calm" },
    { id: "sad", emoji: "😢", label: "Sad" },
    { id: "anxious", emoji: "😰", label: "Anxious" },
    { id: "stressed", emoji: "😤", label: "Stressed" },
];

const STEPS = [
    {
        icon: Smile,
        title: "Check in",
        desc: "Tell the app how you are feeling today.",
    },
    {
        icon: CalendarCheck,
        title: "Book your consultant",
        desc: "Pick a qualified professional and a time that suits you.",
    },
    {
        icon: Video,
        title: "Talk it through",
        desc: "Meet by secure chat or a video consultation.",
    },
    {
        icon: MessageCircle,
        title: "Keep the support going",
        desc: "Find upcoming bookings and past chats whenever you need them.",
    },
];

const FEATURES = [
    {
        icon: MessageCircle,
        title: "Secure chat",
        desc: "Talk, share and heal in a private conversation with a professional.",
    },
    {
        icon: Video,
        title: "Video consultations",
        desc: "Face-to-face sessions from wherever you feel comfortable.",
    },
    {
        icon: BadgeCheck,
        title: "Qualified professionals",
        desc: "Trusted mental health professionals, ready when you are.",
    },
    {
        icon: CalendarCheck,
        title: "Easy booking",
        desc: "Book a consultation at a time that works best for you.",
    },
    {
        icon: Lock,
        title: "Confidential",
        desc: "Private communication, so you can speak openly.",
    },
    {
        icon: Smile,
        title: "Mood check-in",
        desc: "A daily moment to notice how you feel, with a daily affirmation.",
    },
];

const APP_SCREENS = [
    {
        src: "app-home.png",
        title: "Home",
        desc: "Mood check-in, daily affirmation and quick actions.",
    },
    {
        src: "app-bookings.png",
        title: "Bookings",
        desc: "Upcoming consultations at a glance.",
    },
    {
        src: "app-chat.png",
        title: "Chat history",
        desc: "Pick up past conversations where you left off.",
    },
    {
        src: "app-account.png",
        title: "Account",
        desc: "Your profile and account details.",
    },
];

const WEB_SCREENS = [
    {
        src: "web-download.png",
        title: "Download section",
        desc: "A phone mockup, floating labels and store buttons.",
    },
    {
        src: "web-team.png",
        title: "Professionals and stories",
        desc: "Polaroid-style profiles and client testimonials.",
    },
];

const BUILD_NOTES = [
    {
        title: "Hand-drawn motion",
        desc: "The doodle circle, arrow and underline draw themselves in on load.",
    },
    {
        title: "Scroll-driven wave",
        desc: "The wavy divider slides sideways as the page scrolls.",
    },
    {
        title: "Count-up numbers",
        desc: "Impact figures count up when they scroll into view.",
    },
    {
        title: "Store links where they matter",
        desc: "App Store and Google Play buttons sit beside the phone, with a dark card on mobile.",
    },
];

const BUILD_CHIPS = [
    "React",
    "TypeScript",
    "Framer Motion",
    "CSS Modules",
    "Responsive to 320px",
];

const SWATCHES = [
    { name: "Sky", hex: "#169DD2", fg: "#FFFFFF" },
    { name: "Bright sky", hex: "#6FCFEF", fg: "#000000" },
    { name: "Sun", hex: "#FCB03D", fg: "#000000" },
    { name: "Deep sun", hex: "#FCA623", fg: "#000000" },
    { name: "Leaf", hex: "#4FA86E", fg: "#000000" },
    { name: "Mint", hex: "#7AC3A4", fg: "#000000" },
    { name: "Ink", hex: "#000000", fg: "#FFFFFF" },
    { name: "Paper", hex: "#FEFEF9", fg: "#000000" },
    { name: "Pale sky", hex: "#F2F9FC", fg: "#000000" },
];

const RULES = [
    {
        title: "Thick outline",
        desc: "Every card is drawn with a 3px black line.",
        cls: "ruleOutline",
    },
    {
        title: "Hard shadow",
        desc: "An offset black shadow with no blur.",
        cls: "ruleShadow",
    },
    {
        title: "A little tilt",
        desc: "Cards sit slightly off-level, like pinned paper.",
        cls: "ruleTilt",
    },
    {
        title: "Tape",
        desc: "A strip of sun-yellow tape holds key cards in place.",
        cls: "ruleTape",
    },
];

/* ------------------------------------------------------------------ */
/* Small components                                                    */
/* ------------------------------------------------------------------ */

function Shot({ src, alt, sizes, priority = false }) {
    return (
        <div className={styles.shot}>
            <span className={styles.shotHint}>{src}</span>
            <Image
                src={`${BASE}${src}`}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                className={styles.shotImg}
            />
        </div>
    );
}

function Phone({ src, alt, sizes, priority }) {
    return (
        <div className={styles.phone}>
            <div className={styles.phoneScreen}>
                <Shot src={src} alt={alt} sizes={sizes} priority={priority} />
            </div>
        </div>
    );
}

function Browser({ src, alt, sizes, priority }) {
    return (
        <div className={styles.browser}>
            <div className={styles.browserBar} aria-hidden="true">
                <i />
                <i />
                <i />
            </div>
            <div className={styles.browserScreen}>
                <Shot src={src} alt={alt} sizes={sizes} priority={priority} />
            </div>
        </div>
    );
}

function StoreButtons() {
    return (
        <>
            <a
                href={APPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnDark}
            >
                <Apple size={20} aria-hidden="true" />
                App Store
            </a>
            <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnDark}
            >
                <Play size={20} aria-hidden="true" />
                Google Play
            </a>
        </>
    );
}

function MoodDemo() {
    const [mood, setMood] = useState(null);
    const picked = MOODS.find((m) => m.id === mood);

    return (
        <div className={styles.live}>
            <div className={styles.liveTop}>
                <div>
                    <p className={styles.liveHi}>Hi James!</p>
                    <p className={styles.liveSub}>May you always be in a good condition</p>
                </div>
                <span className={styles.liveBell} aria-hidden="true">
                    <Bell size={16} />
                </span>
            </div>

            <p className={styles.liveLabel} id="cm-mood-label">
                How you are feeling today
            </p>
            <div
                className={styles.moods}
                role="group"
                aria-labelledby="cm-mood-label"
            >
                {MOODS.map((m) => (
                    <button
                        key={m.id}
                        type="button"
                        aria-pressed={mood === m.id}
                        className={`${styles.mood} ${mood === m.id ? styles.moodOn : ""}`}
                        onClick={() => setMood(mood === m.id ? null : m.id)}
                    >
                        <span className={styles.moodEmoji} aria-hidden="true">
                            {m.emoji}
                        </span>
                        {m.label}
                    </button>
                ))}
            </div>

            <p className={styles.liveStatus} aria-live="polite">
                {picked
                    ? `Feeling ${picked.label.toLowerCase()} today? Choose how you want to be supported.`
                    : "Tap a mood to try it."}
            </p>

            <p className={styles.liveLabel}>I want to...</p>
            <div className={styles.liveActions}>
                <div className={`${styles.actionCard} ${styles.actionBlue}`}>
                    <span className={styles.actionIcon} aria-hidden="true">
                        <CalendarCheck size={16} />
                    </span>
                    <p className={styles.actionTitle}>Talk to a specialist</p>
                    <p className={styles.actionDesc}>at a time that works best for you.</p>
                </div>
                <div className={`${styles.actionCard} ${styles.actionPeach}`}>
                    <span className={styles.actionIcon} aria-hidden="true">
                        <MessageCircle size={16} />
                    </span>
                    <p className={styles.actionTitle}>Talk with us</p>
                    <p className={styles.actionDesc}>no pressure, just support at your pace.</p>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CuddleMind() {
    return (
        <main className={styles.page}>
            {/* HERO */}
            <section className={styles.hero}>
                <div className={`${styles.inner} ${styles.heroGrid}`}>
                    <div className={styles.heroText}>
                        <div className={styles.badge}>✦ FEATURED CASE STUDY</div>
                        <h1 className={styles.heroTitle}>
                            Your mental wellness,
                            <span className={styles.mark}>one tap away.</span>
                        </h1>
                        <p className={styles.heroLead}>
                            CuddleMind connects you with trusted, qualified mental health
                            professionals through secure chat and video consultations.
                        </p>
                        <ul className={styles.heroChips}>
                            {HERO_CHIPS.map((chip) => (
                                <li key={chip}>{chip}</li>
                            ))}
                        </ul>
                        <div className={styles.heroActions}>
                            <StoreButtons />
                            <a href="#screens" className={styles.btnLight}>
                                See the screens
                            </a>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.paper}>
                            <div className={styles.heroPhone}>
                                <Phone
                                    src="hero-app.png"
                                    alt="CuddleMind app home screen"
                                    sizes="(max-width: 768px) 70vw, 320px"
                                    priority
                                />
                            </div>
                        </div>
                        <span className={`${styles.sticker} ${styles.stickerSky}`}>
                            Chat and video
                        </span>
                        <span className={`${styles.sticker} ${styles.stickerMint}`}>
                            Private and secure
                        </span>
                        <span className={`${styles.sticker} ${styles.stickerSun}`}>
                            Easy booking
                        </span>
                    </div>
                </div>
            </section>

            {/* WAVE */}
            <div className={styles.wave} aria-hidden="true">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0 60 Q 60 30, 120 60 T 240 60 Q 300 90, 360 60 T 480 60 Q 540 30, 600 60 T 720 60 Q 780 90, 840 60 T 960 60 Q 1020 30, 1080 60 T 1200 60 Q 1260 90, 1320 60 T 1440 60"
                        fill="none"
                        stroke="#169DD2"
                        strokeOpacity="0.55"
                        strokeWidth="4"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            </div>

            {/* ABOUT */}
            <section className={`${styles.section} ${styles.bgPaper}`}>
                <div className={styles.aboutCard}>
                    <svg
                        className={styles.aboutIcon}
                        viewBox="0 0 160 160"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            cx="90"
                            cy="80"
                            r="62"
                            transform="translate(4 8) rotate(-6 90 80)"
                            stroke="#169DD2"
                            strokeOpacity="0.7"
                            strokeWidth="3"
                        />
                        <circle cx="70" cy="80" r="62" stroke="#169DD2" strokeWidth="3" />
                        <path
                            d="M80 92 C80 92, 55 72, 55 56 C55 46, 62 40, 70 40 C75 40, 78 43, 80 46 C82 43, 85 40, 90 40 C98 40, 105 46, 105 56 C105 72, 80 92, 80 92 Z"
                            transform="translate(6 15) rotate(-8 80 80)"
                            stroke="#169DD2"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className={styles.aboutBody}>
                        <span className={styles.eyebrow}>ABOUT THIS PRODUCT</span>
                        <h2 className={styles.h2}>What CuddleMind is</h2>
                        <p className={styles.aboutText}>
                            CuddleMind is a mental wellness app designed to support your
                            emotional well-being. Whether you are dealing with stress,
                            anxiety, relationship concerns or personal challenges, it gives
                            you a safe, private and convenient space to seek guidance, with
                            professional support anytime.
                        </p>
                        <ul className={styles.notes}>
                            <li>
                                <strong>The product</strong> is the mobile app, on Android and
                                iOS.
                            </li>
                            <li>
                                <strong>The website</strong> is a landing page that points
                                people to the app.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* MOOD CHECK-IN */}
            <section className={`${styles.section} ${styles.bgPale}`}>
                <div className={`${styles.inner} ${styles.moodGrid}`}>
                    <div className={styles.moodText}>
                        <span className={styles.eyebrow}>MOOD CHECK-IN</span>
                        <h2 className={styles.h2}>It starts with a simple check-in.</h2>
                        <p className={styles.lead}>
                            The home screen asks how you are feeling today, then offers two
                            ways forward: book a specialist, or talk with the support team.
                        </p>
                        <p className={styles.hint}>Try it. Tap a mood on the screen.</p>
                    </div>
                    <div className={styles.moodVisual}>
                        <MoodDemo />
                    </div>
                </div>
            </section>

            {/* JOURNEY */}
            <section className={`${styles.section} ${styles.bgPaper}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>THE JOURNEY</span>
                        <h2 className={styles.h2}>From feeling to first session.</h2>
                        <p className={styles.lead}>
                            Four steps, kept short so reaching out never feels like a project.
                        </p>
                    </div>
                    <ol className={styles.steps}>
                        {STEPS.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <li key={step.title} className={styles.step}>
                                    <div className={styles.stepTop}>
                                        <span className={styles.stepNum}>{i + 1}</span>
                                        <span className={styles.stepIcon} aria-hidden="true">
                                            <Icon size={24} />
                                        </span>
                                    </div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* FEATURES */}
            <section className={`${styles.section} ${styles.bgLeaf}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>KEY FEATURES</span>
                        <h2 className={styles.h2}>What the app gives you.</h2>
                        <p className={styles.lead}>
                            A private place to get support, with the people and tools to make
                            it easy.
                        </p>
                    </div>
                    <ul className={styles.featureGrid}>
                        {FEATURES.map((f) => {
                            const Icon = f.icon;
                            return (
                                <li key={f.title} className={styles.feature}>
                                    <span className={styles.featureIcon} aria-hidden="true">
                                        <Icon size={26} />
                                    </span>
                                    <h3 className={styles.featureTitle}>{f.title}</h3>
                                    <p className={styles.featureDesc}>{f.desc}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* APP SCREENS */}
            <section id="screens" className={`${styles.section} ${styles.bgPaper}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>APP SCREENS</span>
                        <h2 className={styles.h2}>The app screens.</h2>
                        <p className={styles.lead}>
                            Calm colours, big touch targets and one clear action on each
                            screen.
                        </p>
                    </div>
                    <div className={styles.appGrid}>
                        {APP_SCREENS.map((s) => (
                            <figure key={s.src} className={styles.figure}>
                                <Phone
                                    src={s.src}
                                    alt={`CuddleMind ${s.title} screen`}
                                    sizes="(max-width: 768px) 45vw, 260px"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>{s.title}</strong>
                                    <span>{s.desc}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* LANDING PAGE */}
            <section className={`${styles.section} ${styles.bgPale}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>LANDING PAGE</span>
                        <h2 className={styles.h2}>The landing page sends people to the app.</h2>
                        <p className={styles.lead}>
                            It carries the same hand-drawn personality as the app and keeps
                            the download buttons close at every scroll.
                        </p>
                    </div>

                    <figure className={styles.figure}>
                        <Browser
                            src="web-hero.png"
                            alt="CuddleMind landing page hero"
                            sizes="(max-width: 1200px) 100vw, 1100px"
                        />
                        <figcaption className={styles.caption}>
                            <strong>Hero</strong>
                            <span>A tilted headline card, a floating portrait and a wavy divider.</span>
                        </figcaption>
                    </figure>

                    <div className={styles.webRow}>
                        {WEB_SCREENS.map((s) => (
                            <figure key={s.src} className={styles.figure}>
                                <Browser
                                    src={s.src}
                                    alt={s.title}
                                    sizes="(max-width: 768px) 100vw, 540px"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>{s.title}</strong>
                                    <span>{s.desc}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <ul className={styles.buildGrid}>
                        {BUILD_NOTES.map((n) => (
                            <li key={n.title} className={styles.buildItem}>
                                <h3 className={styles.buildTitle}>{n.title}</h3>
                                <p className={styles.buildDesc}>{n.desc}</p>
                            </li>
                        ))}
                    </ul>

                    <ul className={styles.chips}>
                        {BUILD_CHIPS.map((c) => (
                            <li key={c}>{c}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* BRAND */}
            <section className={`${styles.section} ${styles.bgPaper}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>BRAND IDENTITY</span>
                        <h2 className={styles.h2}>A brand drawn by hand.</h2>
                        <p className={styles.lead}>
                            Sky blue for trust, sun yellow for warmth and leaf green for
                            growth, all held together by a black pen line.
                        </p>
                    </div>

                    <div className={styles.swatches}>
                        {SWATCHES.map((s) => (
                            <div
                                key={s.hex}
                                className={styles.swatch}
                                style={{ background: s.hex, color: s.fg }}
                            >
                                <strong>{s.name}</strong>
                                <code>{s.hex}</code>
                            </div>
                        ))}
                    </div>

                    <div className={styles.brandBottom}>
                        <div className={styles.typeCard}>
                            <p className={styles.typeLabel}>Typeface</p>
                            <p className={styles.typeAa}>Aa</p>
                            <p className={styles.typeSample}>Mental health support in your pocket.</p>
                            <p className={styles.typeName}>Inter, heavy for headings and medium for body</p>
                        </div>
                        <div className={styles.rules}>
                            {RULES.map((r) => (
                                <div key={r.title} className={`${styles.rule} ${styles[r.cls]}`}>
                                    {r.cls === "ruleTape" && (
                                        <i className={styles.tape} aria-hidden="true" />
                                    )}
                                    <h3 className={styles.ruleTitle}>{r.title}</h3>
                                    <p className={styles.ruleDesc}>{r.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaCard}>
                    <span className={styles.ctaEyebrow}>DOWNLOAD NOW</span>
                    <h2 className={styles.ctaTitle}>
                        Mental health support in your pocket.
                    </h2>
                    <p className={styles.ctaLead}>
                        Download CuddleMind for free, or visit the landing page to see
                        how it all comes together.
                    </p>
                    <div className={styles.ctaActions}>
                        <StoreButtons />
                        <a href={LIVE_URL} className={styles.btnLight}>
                            Visit the landing page
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}