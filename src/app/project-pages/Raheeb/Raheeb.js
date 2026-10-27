import Image from "next/image";
import {
    ArrowUpRight,
    CheckCircle2,
    ClipboardList,
    Clock,
    Heart,
    MapPin,
    Navigation,
    Search,
    Shirt,
    ShoppingBag,
    Smartphone,
    Star,
    Store,
    Truck,
} from "lucide-react";
import styles from "./Raheeb.module.css";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const BASE = "/featured-projects/raheeb/";
const LIVE_URL = "#"; // TODO: live Raheeb storefront URL
const SHOP_APP_URL = "#"; // TODO: Google Play link for "Raheeb - Ecommerce App"
const DELIVERY_APP_URL = "#"; // TODO: Google Play link for "Raheeb DeliveryPartner"

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const TAGS = ["STOREFRONT", "SHOPPING APP", "DELIVERY PARTNER APP"];

const FACTS = [
    { value: "3", label: "PRODUCTS" },
    { value: "2", label: "ANDROID APPS" },
    { value: "12 MB", label: "SHOPPING APP" },
    { value: "10 MB", label: "DELIVERY APP" },
];

const CHALLENGES = [
    {
        num: "01",
        title: "A PREMIUM FEEL",
        desc: "Make an online store feel as refined as the clothes, from the first scroll to the last tap.",
    },
    {
        num: "02",
        title: "EASY DISCOVERY",
        desc: "Help shoppers search, filter and find the right outfit without hunting for it.",
    },
    {
        num: "03",
        title: "RELIABLE DELIVERY",
        desc: "Get every order to the doorstep safely and on time, with a simple tool for the people delivering it.",
    },
];

const PILLARS = [
    {
        icon: Store,
        title: "STOREFRONT",
        outcomes: [
            "Trending styles up front",
            "Browse by category and collection",
            "Product pages with ratings and reviews",
        ],
        platform: "Website",
        result: "A storefront that feels premium",
    },
    {
        icon: Smartphone,
        title: "SHOPPING APP",
        outcomes: [
            "Quick search and filters",
            "Wishlist for saved favourites",
            "Doorstep delivery ordering",
        ],
        platform: "Android app",
        result: "Fashion in your pocket",
    },
    {
        icon: Truck,
        title: "DELIVERY PARTNER APP",
        outcomes: [
            "Real-time order updates",
            "Smart navigation between stops",
            "Quick status updates",
        ],
        platform: "Android app",
        result: "Every package on time",
    },
];

const BRAND_CIRCLES = [
    { hex: "#C17D4A", ring: false },
    { hex: "#171717", ring: true },
    { hex: "#FFFFFF", ring: false },
];

const TILES = [
    { name: "LIGHT COPPER", hex: "#C98A55", fg: "#000000" },
    { name: "MUTED TEXT", hex: "#6B7280", fg: "#FFFFFF" },
    { name: "SURFACE", hex: "#F7F7F7", fg: "#000000" },
    { name: "BORDER", hex: "#E5E5E5", fg: "#000000" },
    { name: "IN STOCK", hex: "#2E7D32", fg: "#FFFFFF" },
    { name: "ERROR", hex: "#E53935", fg: "#FFFFFF" },
    { name: "STAR RATING", hex: "#F5A623", fg: "#000000" },
    { name: "SUCCESS TINT", hex: "#E9F5EA", fg: "#000000" },
    { name: "ERROR TINT", hex: "#FDECEA", fg: "#000000" },
];

const BRAND_NOTES = [
    {
        title: "COPPER FOR ACTION",
        desc: "Buttons, links and highlights share one warm copper accent.",
    },
    {
        title: "WHITE AND SOFT GREY",
        desc: "A white base with light grey surfaces keeps products centre stage.",
    },
    {
        title: "STATUS COLOURS",
        desc: "Green for in stock, red for errors and amber for star ratings.",
    },
    {
        title: "ONE TYPEFACE",
        desc: "Inter in weights 400 to 700 does all of the work.",
    },
];

const WEB_SCREENS = [
    {
        src: "web-home.png",
        title: "HOME",
        desc: "Trending styles and shop by category.",
        wide: true,
    },
    {
        src: "web-collection.png",
        title: "COLLECTION",
        desc: "Search, filter and browse the range.",
    },
    {
        src: "web-product.png",
        title: "PRODUCT PAGE",
        desc: "Fabric details, ratings and reviews.",
    },
];

const SHOP_SCREENS = [
    {
        src: "app-home.png",
        title: "HOME",
        desc: "Trending styles and shop by category.",
    },
    {
        src: "app-products.png",
        title: "PRODUCTS",
        desc: "Quickly search, filter and discover.",
    },
    {
        src: "app-detail.png",
        title: "PRODUCT DETAIL",
        desc: "Quality fabrics, details and reviews.",
    },
    {
        src: "app-wishlist.png",
        title: "WISHLIST",
        desc: "Save, view and buy your favourites.",
    },
];

const DELIVERY_SCREENS = [
    {
        src: "delivery-orders.png",
        title: "ORDERS",
        desc: "Real-time order updates.",
    },
    {
        src: "delivery-detail.png",
        title: "ORDER DETAIL",
        desc: "Everything for the drop in one view.",
    },
    {
        src: "delivery-route.png",
        title: "NAVIGATION",
        desc: "Smart routes between stops.",
    },
    {
        src: "delivery-status.png",
        title: "STATUS",
        desc: "Quick status updates for every delivery.",
    },
];

const WORKFLOW = [
    { icon: Shirt, label: "BROWSE" },
    { icon: Search, label: "SEARCH" },
    { icon: Star, label: "DETAILS" },
    { icon: Heart, label: "FAVOURITES" },
    { icon: ShoppingBag, label: "ORDER" },
    { icon: Truck, label: "DELIVERY" },
];

const SHOP_FEATURES = [
    {
        icon: Shirt,
        title: "TRENDING STYLES",
        desc: "Explore what is trending right now, the moment you open the app.",
    },
    {
        icon: Search,
        title: "SEARCH AND FILTER",
        desc: "Quickly search, filter and discover your perfect outfit.",
    },
    {
        icon: Star,
        title: "BEAUTIFUL IN EVERY DETAIL",
        desc: "Quality fabrics and details, with ratings and reviews from other shoppers.",
    },
    {
        icon: Heart,
        title: "NEVER MISS A FAVOURITE",
        desc: "Quickly save, view and purchase the products you love.",
    },
    {
        icon: Truck,
        title: "DOORSTEP DELIVERY",
        desc: "The latest clothing styles delivered straight to your door.",
    },
    {
        icon: ShoppingBag,
        title: "EASY SHOPPING",
        desc: "Online shopping that is easy, fast and fun.",
    },
];

const DELIVERY_FEATURES = [
    {
        icon: MapPin,
        title: "REAL-TIME TRACKING",
        desc: "Real-time order updates and tracking for every delivery.",
    },
    {
        icon: ClipboardList,
        title: "SIMPLE MANAGEMENT",
        desc: "Manage orders easily, from pickup to drop-off.",
    },
    {
        icon: Navigation,
        title: "SMART NAVIGATION",
        desc: "Efficient routes that save time between stops.",
    },
    {
        icon: CheckCircle2,
        title: "QUICK STATUS UPDATES",
        desc: "Update the status of every delivery in a tap.",
    },
    {
        icon: Smartphone,
        title: "FRIENDLY INTERFACE",
        desc: "A reliable, user-friendly interface made for the road.",
    },
    {
        icon: Clock,
        title: "SAFE AND ON TIME",
        desc: "Every package reaches the customer safely and on time.",
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

function Browser({ src, alt, sizes }) {
    return (
        <div className={styles.browser}>
            <div className={styles.browserBar} aria-hidden="true">
                <i />
                <i />
                <i />
            </div>
            <div className={styles.browserScreen}>
                <Shot src={src} alt={alt} sizes={sizes} />
            </div>
        </div>
    );
}

function Phone({ src, alt, sizes }) {
    return (
        <div className={styles.phone}>
            <div className={styles.phoneScreen}>
                <Shot src={src} alt={alt} sizes={sizes} />
            </div>
        </div>
    );
}

function Features({ items }) {
    return (
        <div className={styles.featureGrid}>
            {items.map((f) => {
                const Icon = f.icon;
                return (
                    <div key={f.title} className={styles.featureCard}>
                        <span className={styles.featureIcon} aria-hidden="true">
                            <Icon size={20} />
                        </span>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                    </div>
                );
            })}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Raheeb() {
    return (
        <main className={styles.page}>
            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.badge}>✦ FEATURED CASE STUDY</div>

                    <h1 className={styles.heroTitle}>
                        A PREMIUM <br />
                        <span className={styles.highlight}>FASHION</span> <br />
                        STOREFRONT
                    </h1>

                    <p className={styles.heroSub}>
                        From the first browse to the doorstep. A fashion and lifestyle
                        store with a storefront, a shopping app and a delivery partner app.
                    </p>

                    <ul className={styles.tags}>
                        {TAGS.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        <a href={LIVE_URL} className={styles.primary}>
                            VIEW LIVE STORE
                            <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                        <a href="#screens" className={styles.secondary}>
                            SEE THE SCREENS
                        </a>
                    </div>
                </div>
            </section>

            {/* FACTS + HERO IMAGE */}
            <section className={styles.results}>
                <div className={styles.inner}>
                    <ul className={styles.stats}>
                        {FACTS.map((f) => (
                            <li key={f.label} className={styles.stat}>
                                <h3>{f.value}</h3>
                                <p>{f.label}</p>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.heroImage}>
                        <Shot
                            src="hero-store.png"
                            alt="Raheeb storefront home page"
                            sizes="(max-width: 1300px) 100vw, 1300px"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* CHALLENGE */}
            <section className={styles.section}>
                <div className={`${styles.inner} ${styles.challenge}`}>
                    <div className={styles.challengeLeft}>
                        <h2 className={styles.h2}>THE CHALLENGE</h2>
                        <p className={styles.body}>
                            Raheeb came with a clear idea: a premium fashion and lifestyle
                            store that is easy to shop and reliable to deliver. That meant
                            more than a website. It needed a storefront, a shopping app and a
                            delivery app that all felt like one brand.
                        </p>
                    </div>
                    <div className={styles.challengeRight}>
                        {CHALLENGES.map((c) => (
                            <div key={c.num} className={styles.card}>
                                <div className={styles.cardTop}>
                                    <span>{c.num}.</span>
                                    <h3>{c.title}</h3>
                                </div>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THREE PILLARS */}
            <section className={styles.section}>
                <div className={styles.inner}>
                    <div className={styles.center}>
                        <h2 className={styles.h2}>THREE PRODUCTS</h2>
                        <div className={styles.line} />
                    </div>
                    <div className={styles.pillarGrid}>
                        {PILLARS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.title} className={styles.pillar}>
                                    <Icon size={28} className={styles.pillarIcon} />
                                    <h3>{p.title}</h3>
                                    <p className={styles.key}>KEY OUTCOMES</p>
                                    <ul className={styles.list}>
                                        {p.outcomes.map((o) => (
                                            <li key={o}>{o}</li>
                                        ))}
                                    </ul>
                                    <div className={styles.divider} />
                                    <div className={styles.bottom}>
                                        <div>
                                            <p className={styles.small}>PLATFORM</p>
                                            <span>{p.platform}</span>
                                        </div>
                                        <div>
                                            <p className={styles.small}>OUTCOME</p>
                                            <span className={styles.accent}>{p.result}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* BRAND IDENTITY */}
            <section className={styles.section}>
                <div className={styles.inner}>
                    <div className={styles.brandHeader}>
                        <div>
                            <h2 className={`${styles.h2} ${styles.h2Big}`}>BRAND IDENTITY</h2>
                            <p className={styles.body}>
                                A warm copper accent on a clean white base. The identity feels
                                premium without feeling cold, and lets the clothes do the
                                talking.
                            </p>
                        </div>
                        <div className={styles.circles}>
                            {BRAND_CIRCLES.map((c) => (
                                <div key={c.hex} className={styles.circleCol}>
                                    <span
                                        className={c.ring ? styles.circleRing : undefined}
                                        style={{ background: c.hex }}
                                    />
                                    <code>{c.hex}</code>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.topGrid}>
                        <div className={styles.imageCard}>
                            <Shot
                                src="brand-1.png"
                                alt="Raheeb brand language"
                                sizes="(max-width: 1024px) 100vw, 860px"
                            />
                        </div>
                        <div className={styles.typeCard}>
                            <p className={styles.small}>CORE TYPOGRAPHY</p>
                            <h3>INTER</h3>
                            <p className={styles.typeSub}>
                                One clean sans-serif, weights 400 to 700, for every screen.
                            </p>
                            <div className={styles.typeSample}>AaBb Cc</div>
                            <p className={styles.typeName}>INTER REGULAR TO BOLD</p>
                        </div>
                    </div>

                    <div className={styles.largeImage}>
                        <Shot
                            src="brand-2.png"
                            alt="Raheeb brand in use"
                            sizes="(max-width: 1300px) 100vw, 1300px"
                        />
                    </div>

                    <div className={styles.bottomGrid}>
                        <div className={styles.smallImage}>
                            <Shot
                                src="brand-3.png"
                                alt="Raheeb logo and packaging"
                                sizes="(max-width: 768px) 100vw, 640px"
                            />
                        </div>
                        <div className={styles.smallImage}>
                            <Shot
                                src="brand-4.png"
                                alt="Raheeb lifestyle imagery"
                                sizes="(max-width: 768px) 100vw, 640px"
                            />
                        </div>
                    </div>

                    <div className={styles.tiles}>
                        {TILES.map((t) => (
                            <div key={t.hex} className={styles.tile}>
                                <span style={{ background: t.hex }} />
                                <strong>{t.name}</strong>
                                <code>{t.hex}</code>
                            </div>
                        ))}
                    </div>

                    <div className={styles.notes}>
                        {BRAND_NOTES.map((n) => (
                            <div key={n.title} className={styles.note}>
                                <h4>{n.title}</h4>
                                <p>{n.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIGITAL ECOSYSTEM */}
            <section id="screens" className={`${styles.section} ${styles.ecosystem}`}>
                <div className={styles.ecoHead}>
                    <div className={styles.eyebrow}>
                        <span className={styles.dot} />
                        FULL PRODUCT SUITE
                    </div>
                    <h2 className={styles.ecoTitle}>
                        THE DIGITAL
                        <br />
                        <span className={styles.highlight}>ECOSYSTEM.</span>
                    </h2>
                    <p className={styles.sub}>
                        From the first browse to the final knock on the door.
                        <br />
                        One brand across the web and two apps.
                    </p>
                </div>

                <div className={styles.inner}>
                    <div className={styles.groupHead}>
                        <h3>01 // STOREFRONT</h3>
                        <p>THE WEBSITE SHOPPERS START ON</p>
                    </div>
                    <div className={styles.webGrid}>
                        {WEB_SCREENS.map((s) => (
                            <figure
                                key={s.src}
                                className={`${styles.figure} ${s.wide ? styles.figureWide : ""}`}
                            >
                                <Browser
                                    src={s.src}
                                    alt={`Raheeb storefront ${s.title.toLowerCase()}`}
                                    sizes="(max-width: 768px) 100vw, 640px"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>{s.title}</strong>
                                    <span>{s.desc}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className={`${styles.groupHead} ${styles.groupGap}`}>
                        <h3>02 // SHOPPING APP</h3>
                        <p>RAHEEB - ECOMMERCE APP</p>
                    </div>
                    <div className={styles.phoneGrid}>
                        {SHOP_SCREENS.map((s) => (
                            <figure key={s.src} className={styles.figure}>
                                <Phone
                                    src={s.src}
                                    alt={`Raheeb shopping app ${s.title.toLowerCase()}`}
                                    sizes="(max-width: 768px) 45vw, 280px"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>{s.title}</strong>
                                    <span>{s.desc}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className={`${styles.groupHead} ${styles.groupGap}`}>
                        <h3>03 // DELIVERY PARTNER APP</h3>
                        <p>RAHEEB DELIVERYPARTNER</p>
                    </div>
                    <div className={styles.phoneGrid}>
                        {DELIVERY_SCREENS.map((s) => (
                            <figure key={s.src} className={styles.figure}>
                                <Phone
                                    src={s.src}
                                    alt={`Raheeb delivery partner app ${s.title.toLowerCase()}`}
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
            </section>

            {/* WORKFLOW */}
            <section className={styles.section}>
                <div className={styles.inner}>
                    <div className={styles.center}>
                        <h2 className={styles.h2}>
                            FROM BROWSE <span className={styles.highlight}>TO</span> DOORSTEP
                        </h2>
                        <p className={styles.sub}>
                            THE JOURNEY OF AN ORDER, IN SIX STEPS.
                        </p>
                    </div>
                    <div className={styles.workflowBox}>
                        <p className={styles.workflowTitle}>THE SHOPPER JOURNEY</p>
                        <ol className={styles.workflow}>
                            {WORKFLOW.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <li key={step.label} className={styles.wStep}>
                                        <span className={styles.wCircle} aria-hidden="true">
                                            <Icon size={22} />
                                        </span>
                                        <span className={styles.wLabel}>{step.label}</span>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className={styles.section}>
                <div className={styles.inner}>
                    <div className={styles.groupHead}>
                        <h3>SHOPPING APP</h3>
                        <p>BUILT FOR BROWSING AND BUYING</p>
                    </div>
                    <Features items={SHOP_FEATURES} />

                    <div className={`${styles.groupHead} ${styles.groupGap}`}>
                        <h3>DELIVERY PARTNER APP</h3>
                        <p>BUILT FOR THE ROAD</p>
                    </div>
                    <Features items={DELIVERY_FEATURES} />
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <span className={styles.ctaCircle} aria-hidden="true" />
                <span className={styles.ctaSquare} aria-hidden="true" />
                <div className={styles.ctaInner}>
                    <h2 className={styles.ctaTitle}>
                        DRESS WELL. <br />
                        DELIVER BETTER.
                    </h2>
                    <p className={styles.ctaSub}>
                        EXPLORE THE STOREFRONT, OR TAKE EITHER APP FOR A SPIN.
                    </p>
                    <div className={styles.ctaActions}>
                        <a href={SHOP_APP_URL} className={styles.primary}>
                            <Smartphone size={16} aria-hidden="true" />
                            SHOPPING APP
                        </a>
                        <a href={DELIVERY_APP_URL} className={styles.secondary}>
                            <Truck size={16} aria-hidden="true" />
                            DELIVERY APP
                        </a>
                    </div>
                    <div className={styles.demo}>
                        <span>NEXT STOP</span>
                        <a href={LIVE_URL}>VISIT THE STORE ↗</a>
                    </div>
                </div>
            </section>
        </main>
    );
}