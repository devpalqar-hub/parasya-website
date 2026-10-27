"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ArrowUpRight,
    BarChart2,
    Bike,
    CalendarCheck,
    Check,
    ChevronDown,
    ClipboardList,
    Plus,
    Scale,
    Search,
    Store,
    Tag,
    UserPlus,
    Users,
    Utensils,
    UtensilsCrossed,
} from "lucide-react";
import styles from "./MessMeals.module.css";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const BASE = "/featured-projects/messmeals/";
const LIVE_URL = "https://messmeals.com/"; // TODO: replace with the live MessMeals URL
const PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.messmeals.mess";
const APPLE_URL = "https://apps.apple.com/in/app/messmeals/id6754977891";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const HERO_TAGS = [
    "Customer website",
    "Mess owner landing page",
    "Responsive build",
];

const FACTS = [
    {
        title: "Website and admin app",
        desc: "One platform for customers and mess owners.",
    },
    {
        title: "Daily and monthly plans",
        desc: "Breakfast, lunch and dinner options per mess.",
    },
    {
        title: "Android and iOS",
        desc: "MessMeals Admin is on Google Play and the App Store.",
    },
    {
        title: "Made for Kerala",
        desc: "Local messes and everyday homely food.",
    },
];

const PAINS = [
    {
        icon: Search,
        title: "For people looking for meals",
        items: [
            "Trusted messes were hard to find in one place.",
            "Plans, menus and prices were hard to compare.",
            "Recurring meals meant repeating the same search.",
        ],
    },
    {
        icon: Store,
        title: "For mess owners",
        items: [
            "Customers, wallets and discounts lived in different places.",
            "Menus, plans and deliveries were updated by hand.",
            "Running more than one mess multiplied the work.",
        ],
    },
];

const CUSTOMER_CHECKS = [
    "Discover nearby messes",
    "Compare meal plans and menus",
    "See which messes are verified",
    "Manage your meal plans",
    "Save addresses for faster booking",
];

const OWNER_CHECKS = [
    "List and manage multiple messes",
    "Add and update menus and plans",
    "Manage customers and delivery partners",
    "Track revenue and orders",
    "Handle customer wallets and discounts",
];

const CUSTOMER_STEPS = [
    {
        icon: Search,
        title: "Find a mess",
        desc: "Search by location and browse verified messes nearby.",
    },
    {
        icon: Scale,
        title: "Compare plans and menus",
        desc: "Check meals, prices and reviews side by side.",
    },
    {
        icon: CalendarCheck,
        title: "Pick a meal plan",
        desc: "Choose daily or monthly, one meal or all three.",
    },
    {
        icon: Utensils,
        title: "Enjoy homely meals",
        desc: "Get your meals and manage your plan from your profile.",
    },
];

const OWNER_STEPS = [
    {
        icon: Plus,
        title: "List your mess",
        desc: "Add your mess details and location.",
    },
    {
        icon: ClipboardList,
        title: "Add menus and plans",
        desc: "Create meal plans and set pricing.",
    },
    {
        icon: UserPlus,
        title: "Add customers and partners",
        desc: "Bring customers and delivery partners on board.",
    },
    {
        icon: BarChart2,
        title: "Track deliveries and revenue",
        desc: "Follow orders and see how the business is doing.",
    },
];

const FEATURES = [
    {
        icon: Store,
        title: "Manage multiple messes",
        desc: "Add and manage every mess from a single account.",
    },
    {
        icon: UtensilsCrossed,
        title: "Menus and plans",
        desc: "Create and update menus, set meal plans and pricing.",
    },
    {
        icon: Users,
        title: "Customer management",
        desc: "Add customers, track orders and manage wallets.",
    },
    {
        icon: Bike,
        title: "Delivery partners",
        desc: "Add partners, assign deliveries and filter delivery records.",
    },
    {
        icon: BarChart2,
        title: "Revenue and reports",
        desc: "See earnings, orders and business numbers at a glance.",
    },
    {
        icon: Tag,
        title: "Offers and discounts",
        desc: "Create offers that bring more customers to the table.",
    },
];

const WEB_SCREENS = [
    {
        src: "web-home.png",
        title: "Home and search",
        desc: "Location search with food preference and plan filters.",
    },
    {
        src: "web-listing.png",
        title: "Mess listings",
        desc: "Verified messes with their plans and prices.",
    },
    {
        src: "web-detail.png",
        title: "Mess details",
        desc: "Photo gallery, weekly menu and plan options.",
    },
    {
        src: "web-booking.png",
        title: "Plan booking",
        desc: "A step-by-step booking form with a confirmation page.",
    },
];

const APP_SCREENS = [
    {
        src: "app-dashboard.png",
        title: "Dashboard",
        desc: "Revenue summary and key business numbers.",
    },
    {
        src: "app-menus.png",
        title: "Menus and plans",
        desc: "Meal options for breakfast, lunch and dinner.",
    },
    {
        src: "app-customers.png",
        title: "Customers",
        desc: "Customer details, wallets and transactions.",
    },
    {
        src: "app-deliveries.png",
        title: "Deliveries",
        desc: "Delivery records filtered by status.",
    },
];

const MAIN_SWATCHES = [
    { name: "Primary dark", role: "Deep forest", hex: "#1C3A1C", grow: 4, bg: "#1C3A1C", fg: "#FAFCF9" },
    { name: "Primary", role: "Fresh green", hex: "#55C500", grow: 3, bg: "#55C500", fg: "#101C10" },
    { name: "Secondary dark", role: "Green", hex: "#2E7D32", grow: 3, bg: "#2E7D32", fg: "#FFFFFF" },
    { name: "Secondary", role: "Soft mint", hex: "#EAF7E5", grow: 2, bg: "#EAF7E5", fg: "#1C3A1C" },
];

const MINOR_SWATCHES = [
    { name: "Light background", hex: "#FAFCF9", fg: "#101C10" },
    { name: "Section background", hex: "#F3F6F2", fg: "#101C10" },
    { name: "Main text", hex: "#101C10", fg: "#FAFCF9" },
    { name: "Body text", hex: "#617061", fg: "#FFFFFF" },
    { name: "Border", hex: "#E3EAE1", fg: "#101C10" },
    { name: "Success", hex: "#18864B", fg: "#FFFFFF" },
    { name: "Warning", hex: "#F59E0B", fg: "#101C10" },
    { name: "Error", hex: "#DC3B3B", fg: "#FFFFFF" },
];

const BUILD_NOTES = [
    {
        title: "Next.js App Router",
        desc: "Server-rendered pages with their own titles, descriptions, canonical URLs and Open Graph data.",
        chips: ["Next.js", "React", "CSS Modules"],
    },
    {
        title: "Responsive down to 300px",
        desc: "One breakpoint system across every page, with grids built so they cannot overflow.",
        chips: ["1024", "768", "480", "360", "300"],
    },
    {
        title: "Accessible interactions",
        desc: "Accordions are real buttons with aria-expanded, keyboard support and visible focus.",
        chips: ["aria-expanded", "Keyboard", "Focus states"],
    },
    {
        title: "Built for local search",
        desc: "Questions about mess food and meal plans are marked up as FAQ content so they can appear in search.",
        chips: ["Metadata", "FAQ schema", "Canonical URLs"],
    },
];

const FAQS = [
    {
        q: "What is MessMeals?",
        a: "MessMeals helps customers discover local messes, compare daily and monthly meal plans, and book or enquire about everyday food options near them.",
    },
    {
        q: "How do I find a mess near me?",
        a: "Enter your city or locality in the search area and choose your food preference or meal plan type. Then browse available messes, compare their plans, and open a listing for details.",
    },
    {
        q: "Can I find monthly mess food on MessMeals?",
        a: "Yes, where monthly plans are available. Open a mess listing to check the meals included, price, plan duration and current availability.",
    },
    {
        q: "Does every mess provide delivery?",
        a: "No. Delivery, pickup and service areas depend on the individual mess. Check the listing or contact the mess before booking.",
    },
    {
        q: "Can I manage multiple messes with MessMeals Admin?",
        a: "Yes. You can add and manage multiple messes from a single account, with each mess's customers, plans, menus, orders and deliveries in one place.",
    },
    {
        q: "Is MessMeals Admin available on Android and iPhone?",
        a: "Yes. It can be downloaded from the Google Play Store and the Apple App Store.",
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

function Phone({ src, alt, sizes, priority }) {
    return (
        <div className={styles.phone}>
            <div className={styles.phoneScreen}>
                <Shot src={src} alt={alt} sizes={sizes} priority={priority} />
            </div>
        </div>
    );
}

function Checks({ items }) {
    return (
        <ul className={styles.checks}>
            {items.map((item) => (
                <li key={item}>
                    <span className={styles.checkIcon} aria-hidden="true">
                        <Check size={14} strokeWidth={3} />
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}

function StoreButtons() {
    return (
        <div className={styles.storeBtns}>
            <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBtn}
                aria-label="Get MessMeals Admin on Google Play"
            >
                <img src="/Playstore.svg" alt="" className={styles.storeIcon} />
                <span className={styles.storeText}>
                    <small>Get it on</small>
                    <strong>Google Play</strong>
                </span>
            </a>
            <a
                href={APPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBtn}
                aria-label="Download MessMeals Admin on the App Store"
            >
                <img
                    src="/Apple.svg"
                    alt=""
                    className={styles.storeIcon}
                />
                <span className={styles.storeText}>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                </span>
            </a>
        </div>
    );
}

function Steps({ steps }) {
    return (
        <ol className={styles.steps}>
            {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                    <li key={step.title} className={styles.step}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepIcon} aria-hidden="true">
                                <Icon size={22} />
                            </span>
                            <span className={styles.stepNum}>{i + 1}</span>
                        </div>
                        <h4 className={styles.stepTitle}>{step.title}</h4>
                        <p className={styles.stepDesc}>{step.desc}</p>
                    </li>
                );
            })}
        </ol>
    );
}

function FaqItem({ id, q, a, open, onToggle }) {
    return (
        <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}>
            <h3 className={styles.faqHeading}>
                <button
                    id={`${id}-btn`}
                    className={styles.faqBtn}
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    onClick={onToggle}
                >
                    <span className={styles.faqQuestion}>{q}</span>
                    <ChevronDown
                        size={20}
                        strokeWidth={2.2}
                        className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ""}`}
                        aria-hidden="true"
                    />
                </button>
            </h3>
            <div
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-btn`}
                className={`${styles.faqPanel} ${open ? styles.faqPanelOpen : ""}`}
            >
                <div className={styles.faqPanelInner}>
                    <p className={styles.faqAnswer}>{a}</p>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function MessMeals() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <main className={styles.page}>
            {/* HERO */}
            <section className={styles.hero}>
                <div className={`${styles.inner} ${styles.heroGrid}`}>
                    <div className={styles.heroText}>
                        <div className={styles.badge}>✦ FEATURED CASE STUDY</div>
                        <h1 className={styles.heroTitle}>
                            Homely meals,
                            <span> found and run in one place.</span>
                        </h1>
                        <p className={styles.heroLead}>
                            MessMeals connects people with trusted local messes, and gives
                            mess owners one app to manage menus, customers, deliveries and
                            revenue.
                        </p>
                        <ul className={styles.heroTags}>
                            {HERO_TAGS.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                        <div className={styles.heroActions}>
                            <a href={LIVE_URL} className={styles.btnPrimary}>
                                Visit MessMeals
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </a>
                            <a href="#screens" className={styles.btnGhost}>
                                See the screens
                            </a>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <span className={styles.heroCircle} aria-hidden="true" />
                        <div className={styles.heroBrowser}>
                            <Browser
                                src="hero-web.png"
                                alt="MessMeals website home page"
                                sizes="(max-width: 1024px) 100vw, 600px"
                                priority
                            />
                        </div>
                        <div className={styles.heroPhone}>
                            <Phone
                                src="hero-app.png"
                                alt="MessMeals Admin app dashboard"
                                sizes="200px"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FACTS */}
            <section className={styles.facts}>
                <div className={styles.inner}>
                    <ul className={styles.factsGrid}>
                        {FACTS.map((fact) => (
                            <li key={fact.title} className={styles.fact}>
                                <h2 className={styles.factTitle}>{fact.title}</h2>
                                <p className={styles.factDesc}>{fact.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CHALLENGE */}
            <section className={`${styles.section} ${styles.bgPale}`}>
                <div className={`${styles.inner} ${styles.twoCol}`}>
                    <div className={styles.stickyHead}>
                        <span className={styles.eyebrow}>THE CHALLENGE</span>
                        <h2 className={styles.h2}>
                            Everyday meals were hard to find, and harder to run.
                        </h2>
                        <p className={styles.lead}>
                            Good local messes were spread out, and the people running them
                            were managing everything by hand. The platform had to serve both
                            sides without making either one wait.
                        </p>
                    </div>
                    <div className={styles.painList}>
                        {PAINS.map((pain) => {
                            const Icon = pain.icon;
                            return (
                                <article key={pain.title} className={styles.pain}>
                                    <div className={styles.painHead}>
                                        <span className={styles.painIcon} aria-hidden="true">
                                            <Icon size={22} />
                                        </span>
                                        <h3 className={styles.painTitle}>{pain.title}</h3>
                                    </div>
                                    <ul className={styles.painItems}>
                                        {pain.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TWO PRODUCTS */}
            <section className={`${styles.section} ${styles.bgLight}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>TWO EXPERIENCES</span>
                        <h2 className={styles.h2}>One platform, two experiences.</h2>
                        <p className={styles.lead}>
                            Customers get a website to find and choose meals. Owners get an
                            app to run the business behind them.
                        </p>
                    </div>

                    <div className={styles.product}>
                        <div className={styles.productText}>
                            <h3 className={styles.h3}>The website for customers</h3>
                            <p className={styles.productDesc}>
                                Find meals that feel like home. Search, compare and book from
                                any screen size.
                            </p>
                            <Checks items={CUSTOMER_CHECKS} />
                        </div>
                        <div className={styles.productVisual}>
                            <div className={styles.stage}>
                                <Browser
                                    src="showcase-web.png"
                                    alt="MessMeals mess listing page"
                                    sizes="(max-width: 1024px) 100vw, 560px"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.product} ${styles.productReverse}`}>
                        <div className={styles.productText}>
                            <h3 className={styles.h3}>The app for mess owners</h3>
                            <p className={styles.productDesc}>
                                MessMeals Admin puts the whole mess business in one pocket-size
                                app.
                            </p>
                            <Checks items={OWNER_CHECKS} />
                            <StoreButtons />
                        </div>
                        <div className={styles.productVisual}>
                            <div className={`${styles.stage} ${styles.phonePair}`}>
                                <Phone
                                    src="showcase-app-1.png"
                                    alt="MessMeals Admin dashboard screen"
                                    sizes="(max-width: 768px) 45vw, 240px"
                                />
                                <Phone
                                    src="showcase-app-2.png"
                                    alt="MessMeals Admin customers screen"
                                    sizes="(max-width: 768px) 45vw, 240px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* JOURNEYS */}
            <section className={`${styles.section} ${styles.bgMint}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>HOW IT WORKS</span>
                        <h2 className={styles.h2}>How it works for each side.</h2>
                        <p className={styles.lead}>Four steps each, kept short on purpose.</p>
                    </div>

                    <div className={styles.journey}>
                        <h3 className={styles.journeyTitle}>For customers</h3>
                        <Steps steps={CUSTOMER_STEPS} />
                    </div>

                    <div className={styles.journey}>
                        <h3 className={styles.journeyTitle}>For mess owners</h3>
                        <Steps steps={OWNER_STEPS} />
                    </div>
                </div>
            </section>

            {/* ADMIN FEATURES */}
            <section className={`${styles.section} ${styles.bgLight}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>ADMIN APP</span>
                        <h2 className={styles.h2}>What the admin app handles.</h2>
                        <p className={styles.lead}>
                            Everything an owner needs to manage and grow a mess, without
                            switching tools.
                        </p>
                    </div>
                    <ul className={styles.featureGrid}>
                        {FEATURES.map((f) => {
                            const Icon = f.icon;
                            return (
                                <li key={f.title} className={styles.feature}>
                                    <span className={styles.featureIcon} aria-hidden="true">
                                        <Icon size={22} />
                                    </span>
                                    <div className={styles.featureBody}>
                                        <h3 className={styles.featureTitle}>{f.title}</h3>
                                        <p className={styles.featureDesc}>{f.desc}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* SCREENS */}
            <section id="screens" className={`${styles.section} ${styles.bgPale}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>SCREENS</span>
                        <h2 className={styles.h2}>The screens.</h2>
                        <p className={styles.lead}>
                            The customer website first, then the admin app.
                        </p>
                    </div>

                    <div className={styles.group}>
                        <h3 className={styles.groupTitle}>Website</h3>
                        <div className={styles.webGrid}>
                            {WEB_SCREENS.map((s) => (
                                <figure key={s.src} className={styles.figure}>
                                    <Browser
                                        src={s.src}
                                        alt={s.title}
                                        sizes="(max-width: 768px) 100vw, 580px"
                                    />
                                    <figcaption className={styles.caption}>
                                        <strong>{s.title}</strong>
                                        <span>{s.desc}</span>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>

                    <div className={styles.group}>
                        <h3 className={styles.groupTitle}>Admin app</h3>
                        <div className={styles.appGrid}>
                            {APP_SCREENS.map((s) => (
                                <figure key={s.src} className={styles.figure}>
                                    <Phone
                                        src={s.src}
                                        alt={s.title}
                                        sizes="(max-width: 768px) 45vw, 280px"
                                    />
                                    <figcaption className={styles.caption}>
                                        <strong>{s.title}</strong>
                                        <span>{s.desc}</span>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BRAND */}
            <section className={`${styles.section} ${styles.bgLight}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>BRAND IDENTITY</span>
                        <h2 className={styles.h2}>A brand that tastes of fresh greens.</h2>
                        <p className={styles.lead}>
                            Deep forest for headings and structure, fresh green for the
                            actions that matter, and soft mint for quiet areas.
                        </p>
                    </div>

                    <div className={styles.paletteMain}>
                        {MAIN_SWATCHES.map((s) => (
                            <div
                                key={s.hex}
                                className={styles.swatch}
                                style={{ flexGrow: s.grow, background: s.bg, color: s.fg }}
                            >
                                <strong>{s.name}</strong>
                                <span>{s.role}</span>
                                <code>{s.hex}</code>
                            </div>
                        ))}
                    </div>

                    <div className={styles.paletteMinor}>
                        {MINOR_SWATCHES.map((s) => (
                            <div
                                key={s.hex + s.name}
                                className={styles.chip}
                                style={{ background: s.hex, color: s.fg }}
                            >
                                <strong>{s.name}</strong>
                                <code>{s.hex}</code>
                            </div>
                        ))}
                    </div>

                    <div className={styles.typeRow}>
                        <div className={styles.typeCard}>
                            <p className={styles.typeLabel}>Headings</p>
                            <p className={styles.typeSerif}>Aa</p>
                            <p className={styles.typeSample}>Good food, closer to home.</p>
                            <p className={styles.typeName}>Inter Bold</p>
                        </div>
                        <div className={styles.typeCard}>
                            <p className={styles.typeLabel}>Body and interface</p>
                            <p className={styles.typeSans}>Aa</p>
                            <p className={styles.typeSampleSans}>
                                Compare meal plans, check the weekly menu and pick what fits
                                your day.
                            </p>
                            <p className={styles.typeName}>Inter Regular</p>
                        </div>
                        <div className={`${styles.typeCard} ${styles.uiCard}`}>
                            <p className={styles.typeLabel}>Interface pieces</p>
                            <div className={styles.uiRow}>
                                <span className={styles.uiPrimary}>Explore messes</span>
                                <span className={styles.uiDark}>List your mess</span>
                                <span className={styles.uiMint}>Verified</span>
                                <span className={styles.uiSuccess}>Delivered</span>
                                <span className={styles.uiWarning}>Pending</span>
                                <span className={styles.uiError}>Cancelled</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUILD NOTES */}
            <section className={`${styles.section} ${styles.bgDark}`}>
                <div className={styles.inner}>
                    <div className={styles.sectionHead}>
                        <span className={styles.eyebrow}>UNDER THE HOOD</span>
                        <h2 className={styles.h2}>Under the hood.</h2>
                        <p className={styles.lead}>
                            The decisions that keep the pages fast, findable and usable on
                            any device.
                        </p>
                    </div>
                    <ul className={styles.techGrid}>
                        {BUILD_NOTES.map((n) => (
                            <li key={n.title} className={styles.techItem}>
                                <h3 className={styles.techTitle}>{n.title}</h3>
                                <p className={styles.techDesc}>{n.desc}</p>
                                <ul className={styles.techChips}>
                                    {n.chips.map((c) => (
                                        <li key={c}>{c}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FAQ */}
            <section className={`${styles.section} ${styles.bgLight}`}>
                <div className={`${styles.inner} ${styles.twoCol}`}>
                    <div className={styles.stickyHead}>
                        <span className={styles.eyebrow}>FAQ</span>
                        <h2 className={styles.h2}>Questions people ask.</h2>
                        <p className={styles.lead}>
                            Short answers about finding a mess, choosing a plan and running
                            one with MessMeals Admin.
                        </p>
                    </div>
                    <div className={styles.faqList}>
                        {FAQS.map((item, i) => (
                            <FaqItem
                                key={item.q}
                                id={`mm-faq-${i}`}
                                q={item.q}
                                a={item.a}
                                open={openFaq === i}
                                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={`${styles.inner} ${styles.ctaInner}`}>
                    <div className={styles.ctaText}>
                        <span className={styles.ctaEyebrow}>GET STARTED</span>
                        <h2 className={styles.ctaTitle}>
                            Find a mess near you, or run yours from your phone.
                        </h2>
                        <p className={styles.ctaLead}>
                            Explore the website, or download MessMeals Admin to manage your
                            mess today.
                        </p>
                    </div>
                    <div className={styles.ctaActions}>
                        <a href={LIVE_URL} className={styles.btnDark}>
                            Visit MessMeals
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                        <StoreButtons />
                    </div>
                </div>
            </section>
        </main>
    );
}