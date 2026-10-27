"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BarChart2,
  Check,
  ClipboardList,
  Megaphone,
  Package,
  Palette,
  Receipt,
  Search,
  ShoppingBag,
  ShoppingCart,
  Store,
  Truck,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import styles from "./KingFox.module.css";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const BASE = "/featured-projects/kingfox/";
const LIVE_URL = "https://kingfoxclothing.com/"; // TODO: replace with the live KingFox store URL
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.kingfox.app&hl=en_IN"; // TODO: replace with the KingFox Admin Google Play URL

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const HERO_TAGS = [
  "Storefront",
  "Warehouse admin",
  "Billing setup",
  "Android app",
];

const FACTS = [
  {
    title: "Customer storefront",
    desc: "Shop, customise, check out and track orders.",
  },
  {
    title: "Warehouse admin",
    desc: "One ERP-style panel for stock, sales, finance and HR.",
  },
  {
    title: "Billing setup",
    desc: "A billing setup for the shop counter.",
  },
  {
    title: "KingFox Admin app",
    desc: "Staff and market analytics on Android.",
  },
];

const PAINS = [
  {
    icon: ShoppingBag,
    title: "For shoppers",
    items: [
      "Oversized and streetwear fits were hard to find in one place.",
      "Customising a tee meant leaving the store and sending files back and forth.",
      "Orders, returns and shipping rules were hard to follow.",
    ],
  },
  {
    icon: Store,
    title: "For the business",
    items: [
      "Stock, orders, accounts and staff lived in separate tools.",
      "Online and in-store sales were hard to compare.",
      "Campaigns, coupons and giveaways were managed by hand.",
    ],
  },
];

const STORE_CHECKS = [
  "Product listings, new arrivals and bestsellers",
  "Wishlist, cart and checkout",
  "A design studio to customise products",
  "Sign-in, profile and order tracking",
  "Campaign pages and a WhatsApp support button",
];

const ADMIN_CHECKS = [
  "Products, categories, size charts and orders",
  "Stock, purchases, vendors and inventory analytics",
  "Expenses, accounts and financial reports",
  "Attendance, leaves, payslips and staff performance",
  "Banners, coupons, campaigns and a lucky draw",
];

const SHOPPER_STEPS = [
  {
    icon: Search,
    title: "Browse the drops",
    desc: "Explore collections, new arrivals and bestsellers.",
  },
  {
    icon: Palette,
    title: "Design your own",
    desc: "Select a fit, customise it and place the order.",
  },
  {
    icon: ShoppingCart,
    title: "Check out",
    desc: "Add to cart or wishlist and pay in one flow.",
  },
  {
    icon: Truck,
    title: "Track the order",
    desc: "Follow delivery and manage returns from your profile.",
  },
];

const STAFF_STEPS = [
  {
    icon: Package,
    title: "Stock it",
    desc: "Raise purchases, receive stock and run audits.",
  },
  {
    icon: Receipt,
    title: "Sell and bill",
    desc: "Handle online orders and in-store billing.",
  },
  {
    icon: Wallet,
    title: "Keep the books",
    desc: "Track expenses, accounts and cashflow.",
  },
  {
    icon: BarChart2,
    title: "Read the numbers",
    desc: "Compare branches, sales and categories at a glance.",
  },
];

const MODULES = [
  {
    icon: ClipboardList,
    title: "Catalog and orders",
    desc: "Products, categories, size charts, online and offline orders, custom designs, shipping and reviews.",
  },
  {
    icon: Package,
    title: "Inventory and stock",
    desc: "Stock checks and audits, purchases, purchase returns, vendors and inventory analytics.",
  },
  {
    icon: Wallet,
    title: "Finance and accounting",
    desc: "Expenses, accounts, cashflow, balance sheet, trial balance, profit and loss, loans and costing.",
  },
  {
    icon: UserCog,
    title: "HR and staff",
    desc: "Attendance, leaves, payslips and staff performance.",
  },
  {
    icon: Megaphone,
    title: "Marketing and storefront",
    desc: "Banners, coupons, campaigns, WhatsApp marketing, a lucky draw and contact enquiries.",
  },
  {
    icon: Users,
    title: "Administration",
    desc: "Branches, owners, customers, users and roles.",
  },
];

const STORE_SCREENS = [
  {
    src: "store-home.png",
    title: "Home",
    desc: "A festive hero, graphic collections and a shipping and returns strip.",
  },
  {
    src: "store-collections.png",
    title: "Collections",
    desc: "Jeans, linen pants, oversized tees and shirts in a tiled grid.",
  },
  {
    src: "store-customise.png",
    title: "Design your own tee",
    desc: "Select a fit, customise it and order, in three steps.",
  },
];

const APP_SCREENS = [
  {
    src: "app-login.png",
    title: "Supervisor login",
    desc: "A clean sign-in for supervisors.",
  },
  {
    src: "app-market.png",
    title: "Market analytics",
    desc: "Revenue and branch reach for the last 30 days.",
  },
  {
    src: "app-staff.png",
    title: "Staff analytics",
    desc: "Staff performance and branch comparison.",
  },
];

const MAIN_SWATCHES = [
  {
    name: "Dark brown",
    role: "Top bar",
    hex: "#352C01",
    grow: 4,
    bg: "#352C01",
    fg: "#FFFFFF",
  },
  {
    name: "Gold",
    role: "Highlights and buttons",
    hex: "#DDCA21",
    grow: 3,
    bg: "#DDCA21",
    fg: "#171717",
  },
  {
    name: "Cream",
    role: "Header",
    hex: "#F8EEE4",
    grow: 3,
    bg: "#F8EEE4",
    fg: "#352C01",
  },
  {
    name: "Peach",
    role: "Hover tint",
    hex: "#FBD5AF",
    grow: 2,
    bg: "#FBD5AF",
    fg: "#352C01",
  },
];

const MINOR_SWATCHES = [
  { name: "Page background", hex: "#FFFFFF", fg: "#171717" },
  { name: "Page text", hex: "#171717", fg: "#FFFFFF" },
  { name: "Header text", hex: "#000000", fg: "#FFFFFF" },
];

const FONTS = [
  {
    label: "Headings",
    name: "Space Grotesk",
    sample: "Stay loud. Shine bright.",
    family: '"Space Grotesk", sans-serif',
  },
  {
    label: "Body",
    name: "Plus Jakarta Sans",
    sample:
      "Oversized drops, premium corduroys and streetwear cut for royalty.",
    family: '"Plus Jakarta Sans", sans-serif',
  },
  {
    label: "Display sections",
    name: "Bebas Neue",
    sample: "COLLECTIONS",
    family: '"Bebas Neue", sans-serif',
  },
];

const BUILD_NOTES = [
  {
    title: "Next.js storefront",
    desc: "A customer-facing Next.js site with listings, cart, checkout, accounts and policy pages.",
    chips: ["Next.js", "React", "CSS Modules"],
  },
  {
    title: "Typed admin panel",
    desc: "The warehouse admin is a Next.js and TypeScript app with a page and service layer per module.",
    chips: ["Next.js", "TypeScript", "Role-based users"],
  },
  {
    title: "Ad tracking",
    desc: "A Meta Pixel on the storefront measures ad performance for campaigns.",
    chips: ["Meta Pixel", "Campaign pages"],
  },
  {
    title: "Support where shoppers are",
    desc: "A floating WhatsApp button keeps support one tap away on every page.",
    chips: ["WhatsApp", "Responsive"],
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

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function KingFox() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <div className={styles.badge}>✦ FEATURED CASE STUDY</div>
            <h1 className={styles.heroTitle}>
              Streetwear retail,
              <span> run end to end.</span>
            </h1>
            <p className={styles.heroLead}>
              KingFox is a clothing brand with a storefront for shoppers, a
              warehouse admin for the back office, a billing setup for the
              counter and an Android app for supervisors.
            </p>
            <ul className={styles.heroTags}>
              {HERO_TAGS.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className={styles.heroActions}>
              <a href={LIVE_URL} className={styles.btnPrimary}>
                Visit KingFox
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#screens" className={styles.btnGhost}>
                See the screens
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <span className={styles.heroGlow} aria-hidden="true" />
            <div className={styles.heroBrowser}>
              <Browser
                src="hero-store.webp"
                alt="KingFox storefront home page"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
            <div className={styles.heroPhone}>
              <Phone
                src="hero-app.webp"
                alt="KingFox Admin app market analytics"
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
              A fashion brand needs a shop front and an engine room.
            </h2>
            <p className={styles.lead}>
              Shoppers wanted loud, well-fitted streetwear they could even
              design themselves. The team behind it needed one place to run
              stock, sales, money and people.
            </p>
          </div>
          <div className={styles.painList}>
            {PAINS.map((pain) => {
              const Icon = pain.icon;
              return (
                <article key={pain.title} className={styles.pain}>
                  <div className={styles.painHead}>
                    <span className={styles.iconBox} aria-hidden="true">
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

      {/* PRODUCTS */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>THE PLATFORM</span>
            <h2 className={styles.h2}>One brand, four connected products.</h2>
            <p className={styles.lead}>
              A storefront to sell, an admin to run the business, a billing
              setup for the counter and a mobile app for supervisors.
            </p>
          </div>

          <div className={styles.product}>
            <div className={styles.productText}>
              <h3 className={styles.h3}>The storefront for shoppers</h3>
              <p className={styles.productDesc}>
                Festive drops, graphic collections and a design studio, all in
                one fast site.
              </p>
              <Checks items={STORE_CHECKS} />
            </div>
            <div className={styles.productVisual}>
              <div className={styles.stage}>
                <Browser
                  src="showcase-store.webp"
                  alt="KingFox storefront collections"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>

          <div className={`${styles.product} ${styles.productReverse}`}>
            <div className={styles.productText}>
              <h3 className={styles.h3}>The warehouse admin</h3>
              <p className={styles.productDesc}>
                An ERP-style panel where staff and owners run sales, stock,
                finances and HR from one place.
              </p>
              <Checks items={ADMIN_CHECKS} />
            </div>
            <div className={styles.productVisual}>
              <div className={styles.stage}>
                <Browser
                  src="showcase-admin.webp"
                  alt="KingFox warehouse admin dashboard"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </div>

          <div className={styles.product}>
            <div className={styles.productText}>
              <h3 className={styles.h3}>Billing setup and the Admin app</h3>
              <p className={styles.productDesc}>
                The KingFox billing setup handles billing at the shop. The
                KingFox Admin app gives supervisors staff and market analytics
                on their phone.
              </p>
              <Checks
                items={[
                  "Billing setup for the shop counter",
                  "Supervisor login",
                  "Market analytics and branch reach",
                  "Staff performance and branch comparison",
                ]}
              />
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.storeBtn}
                aria-label="Get KingFox Admin on Google Play"
              >
                <img src="/Playstore.svg" alt="" className={styles.storeIcon} />
                <span className={styles.storeText}>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
            <div className={styles.productVisual}>
              <div className={`${styles.stage} ${styles.phonePair}`}>
                <Phone
                  src="showcase-app-1.png"
                  alt="KingFox Admin market analytics screen"
                  sizes="(max-width: 768px) 45vw, 240px"
                />
                <Phone
                  src="showcase-app-2.png"
                  alt="KingFox Admin staff analytics screen"
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
            <p className={styles.lead}>
              Four steps each, kept short on purpose.
            </p>
          </div>

          <div className={styles.journey}>
            <h3 className={styles.journeyTitle}>For shoppers</h3>
            <Steps steps={SHOPPER_STEPS} />
          </div>

          <div className={styles.journey}>
            <h3 className={styles.journeyTitle}>For staff and owners</h3>
            <Steps steps={STAFF_STEPS} />
          </div>
        </div>
      </section>

      {/* ADMIN MODULES */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>WAREHOUSE ADMIN</span>
            <h2 className={styles.h2}>What the admin panel handles.</h2>
            <p className={styles.lead}>
              Six areas of the business, managed without switching tools.
            </p>
          </div>
          <ul className={styles.moduleGrid}>
            {MODULES.map((m) => {
              const Icon = m.icon;
              return (
                <li key={m.title} className={styles.module}>
                  <span className={styles.iconBox} aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3 className={styles.moduleTitle}>{m.title}</h3>
                  <p className={styles.moduleDesc}>{m.desc}</p>
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
              The storefront first, then the admin dashboard and the app.
            </p>
          </div>

          <div className={styles.group}>
            <h3 className={styles.groupTitle}>Storefront</h3>
            <div className={styles.storeGrid}>
              {STORE_SCREENS.map((s) => (
                <figure key={s.src} className={styles.figure}>
                  <Browser
                    src={s.src}
                    alt={s.title}
                    sizes="(max-width: 768px) 100vw, 380px"
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
            <h3 className={styles.groupTitle}>Warehouse admin</h3>
            <figure className={styles.figure}>
              <Browser
                src="admin-dashboard.png"
                alt="Warehouse admin dashboard analytics"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
              <figcaption className={styles.caption}>
                <strong>Dashboard analytics</strong>
                <span>
                  Revenue, orders, inventory health, branch revenue and sales
                  comparison on one screen.
                </span>
              </figcaption>
            </figure>
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
            <h2 className={styles.h2}>Royal gold on a warm, dark base.</h2>
            <p className={styles.lead}>
              Dark brown for the top bar, gold for the actions that matter, and
              cream and peach for a warm, festive feel.
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
            {FONTS.map((f) => (
              <div key={f.name} className={styles.typeCard}>
                <p className={styles.typeLabel}>{f.label}</p>
                <p className={styles.typeAa} style={{ fontFamily: f.family }}>
                  Aa
                </p>
                <p
                  className={styles.typeSample}
                  style={{ fontFamily: f.family }}
                >
                  {f.sample}
                </p>
                <p className={styles.typeName}>{f.name}</p>
              </div>
            ))}
          </div>

          <div className={styles.uiCard}>
            <p className={styles.typeLabel}>Interface pieces</p>
            <div className={styles.uiRow}>
              <span className={styles.uiGold}>Shop exclusive collection</span>
              <span className={styles.uiBrown}>Login</span>
              <span className={styles.uiCream}>New arrivals</span>
              <span className={styles.uiPeach}>Customize</span>
              <span className={styles.uiInk}>Start designing now</span>
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
              The decisions that keep the store selling and the back office
              running.
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

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`${styles.inner} ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <span className={styles.ctaEyebrow}>GET STARTED</span>
            <h2 className={styles.ctaTitle}>
              Stay loud. Shop the drop, or run the business behind it.
            </h2>
            <p className={styles.ctaLead}>
              Explore the KingFox storefront, or get the KingFox Admin app to
              follow staff and market analytics.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href={LIVE_URL} className={styles.btnDark}>
              Visit KingFox
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeBtn}
              aria-label="Get KingFox Admin on Google Play"
            >
              <img src="/Playstore.svg" alt="" className={styles.storeIcon} />
              <span className={styles.storeText}>
                <small>Get it on</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
