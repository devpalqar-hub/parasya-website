import Image from "next/image";
import Link from "next/link";
import styles from "./wayanad.module.css";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function WayanadTrip() {
  const moments = [
    { 
      src: "/wayanad_resort_hero_1777747068663.png", 
      title: "The Vythiri View",
      large: true 
    },
    { 
      src: "/team_trekking_wayanad_1777747117046.png", 
      title: "Morning Trek"
    },
    { 
      src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop", 
      title: "Growing Together"
    },
    { 
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", 
      title: "Team Dinner"
    }
  ];

  const highlights = [
    {
      title: "Forest Walk",
      text: "A meditative journey through ancient trails, reconnecting with nature's rhythm and finding inspiration in the quiet."
    },
    {
      title: "Campfire Night",
      text: "Deep conversations and storytelling under the starlit Wayanad sky, where the best ideas were shared."
    },
    {
      title: "Poolside Wellness",
      text: "Morning swims and reflection by the infinity pool overlooking the valley, synchronizing our morning energy."
    }
  ];

  return (
    <div className={styles.root}>
      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/wayanad_resort_hero_1777747068663.png"
            alt="Vythiri Village Resort Wayanad"
            fill
            priority
            className={styles.galleryImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <Reveal className={styles.heroContent} y={40}>
          <span className={styles.eyebrow}>Moments Beyond Work</span>
          <h1 className={styles.title}>
            Team Outing at <br /> Vythiri Village, Wayanad
          </h1>
          <p className={styles.subtitle}>
            Building bonds. Creating memories. Growing together. An immersive escape into the heart of Kerala&apos;s lush wilderness.
          </p>
        </Reveal>
      </section>

      <div className={styles.container}>
        {/* ─── Stats ─── */}
        <section className={styles.statsGrid}>
          <Reveal className={styles.statItem}>
            <span className={styles.statValue}>48</span>
            <span className={styles.statLabel}>Hours of Bonding</span>
          </Reveal>
          <Reveal className={styles.statItem} delay={0.1}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Team Alignment</span>
          </Reveal>
        </section>

        {/* ─── Intro ─── */}
        <section className={styles.introSection}>
          <Reveal className={styles.introText}>
            <h2>Nurturing a Culture of Connection</h2>
            <p>
              At Palqar, we believe that the strongest teams aren&apos;t just built in meeting rooms,{" "}
              but in shared laughter, mountain treks, and campfire conversations.{" "}
              Our Wayanad retreat was more than a break—it was an intentional space{" "}
              to synchronize our visions and recharge our collective spirit.
            </p>
          </Reveal>
        </section>

        {/* ─── Gallery ─── */}
        <section className={styles.gallerySection}>
          <Reveal as="h2" className={styles.galleryHeading}>Captured Memories</Reveal>
          <div className={styles.galleryGrid}>
            {moments.map((img, i) => (
              <Reveal
                key={i}
                className={`${styles.galleryItem} ${img.large ? styles.large : ""}`}
                delay={i * 0.1}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes={img.large ? "100vw" : "50vw"}
                  className={styles.galleryImage}
                />
                <div className={styles.caption}>
                  <h4>{img.title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── Highlights ─── */}
        <section className={styles.highlightsSection}>
          <div className={styles.container}>
            <Reveal as="h2" className={styles.galleryHeading}>Experience Highlights</Reveal>
            <div className={styles.highlightsGrid}>
              {highlights.map((item, i) => (
                <Reveal as="article" key={i} className={styles.highlightCard} delay={i * 0.1}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Philosophy ─── */}
        <section className={styles.philosophy}>
          <Reveal as="blockquote">
            &ldquo;Great work happens when great people connect.&rdquo;
            <cite>— The Palqar Philosophy</cite>
          </Reveal>
        </section>

        {/* ─── CTA ─── */}
        <section className={styles.ctaSection}>
          <Reveal>
            <h2>Want to be part of the next one?</h2>
            <p>
              Work with a team that values both professional growth and moments like these.{" "}
              We&apos;re always looking for intentional, driven people.
            </p>
            <Link href="/career" className={styles.ctaButton}>
              JOIN THE TEAM
            </Link>
          </Reveal>
        </section>

        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <Link href="/about" style={{ color: "#5d5f5f", textDecoration: "none", fontWeight: "700", letterSpacing: "0.1em" }}>
            ← BACK TO ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
}
