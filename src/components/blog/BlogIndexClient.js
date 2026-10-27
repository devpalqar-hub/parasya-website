"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/app/blog/Blogs.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function BlogIndexClient({ posts }) {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = "power3.out";

      const headerTl = gsap.timeline({ defaults: { ease, duration: 1 } });
      headerTl
        .from(`.${styles.titleWord}`, {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          duration: 1.1,
        })
        .from(
          `.${styles.headerMeta}`,
          { y: 24, opacity: 0, duration: 0.8 },
          "-=0.6",
        )
        .from(
          `.${styles.headerDivider}`,
          { scaleX: 0, transformOrigin: "left", duration: 0.9 },
          "-=0.5",
        );

      if (posts.length > 0) {
        gsap.from(gridRef.current?.querySelectorAll(`.${styles.cardOuter}`), {
          y: 70,
          opacity: 0,
          duration: 0.85,
          stagger: 0.14,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }

      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      ctaTl
        .from(`.${styles.lets}`, {
          y: 60,
          opacity: 0,
          scale: 0.94,
          duration: 1.1,
          ease: "power4.out",
        })
        .from(
          `.${styles.buttonWrapper}`,
          { y: 24, opacity: 0, duration: 0.7, ease },
          "-=0.5",
        );
    });

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, [posts]);

  const featuredPosts = posts.filter((post) => post.featured);
  const secondaryPosts = posts.filter((post) => !post.featured);

  return (
    <main className={styles.blogPage}>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.headerInner}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              {"Blogs and Insights".split(" ").map((word, index) => (
                <span key={index} className={styles.titleWordWrap}>
                  <span className={styles.titleWord}>{word}</span>
                </span>
              ))}
            </h1>
          </div>

          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              Insights, ideas, and strategies
              <br />
              shaping the future of digital
              <br />
              and business transformation.
            </p>
            <div className={styles.headerCount}>
              <span className={styles.countNumber}>{posts.length}</span>
              <span className={styles.countLabel}>Articles</span>
            </div>
          </div>
        </div>
        <div className={styles.headerDivider} />
      </header>

      <section className={styles.container}>
        {featuredPosts.length > 0 ? (
          <div className={styles.featuredGrid} ref={gridRef}>
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className={`${styles.cardOuter} ${styles.featuredCard}`}
              >
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  <div
                    className={styles.card}
                    style={{ background: post.accentColor || "#dc3545" }}
                  >
                    <div className={styles.arrowBtn} aria-hidden="true">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>

                    <span className={styles.brandTag}>Palqar</span>

                    <div className={styles.cardTitleBlock}>
                      <h2 className={styles.cardTitle}>{post.title}</h2>
                    </div>

                    <div className={styles.authorBlock}>
                      <span className={styles.authorName}>{post.author}</span>
                      <span className={styles.authorRole}>{post.authorRole}</span>
                    </div>

                    <div className={styles.personImageWrapper}>
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.personImage}
                      />
                    </div>
                  </div>

                  <p className={styles.cardTagline}>{post.tagline}</p>
                </Link>
              </article>
            ))}
          </div>
        ) : null}

        {secondaryPosts.length > 0 ? (
          <div className={styles.restGrid}>
            {secondaryPosts.map((post) => (
              <article key={post.slug} className={styles.cardOuter}>
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  <div className={styles.cardSmall}>
                    <div className={styles.smallImageWrapper}>
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.smallImage}
                      />
                      <div className={styles.smallOverlay}>
                        <span className={styles.category}>{post.category}</span>
                      </div>
                    </div>

                    <div className={styles.smallInfo}>
                      <h3 className={styles.smallTitle}>{post.title}</h3>
                      <p className={styles.smallTagline}>{post.excerpt}</p>
                      <div className={styles.smallMeta}>
                        <span className={styles.smallAuthor}>{post.author}</span>
                        <span className={styles.readMoreLink}>
                          Read More <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : null}

        {posts.length === 0 ? (
          <div className={styles.restGrid}>
            <article className={styles.cardOuter}>
              <div className={styles.cardSmall}>
                <div className={styles.smallInfo}>
                  <h2 className={styles.smallTitle}>Editorial insights are being prepared.</h2>
                  <p className={styles.smallTagline}>
                    We are structuring our long-form insights library so future
                    articles are published with stronger SEO, entity clarity, and
                    cleaner internal discoverability.
                  </p>
                </div>
              </div>
            </article>
          </div>
        ) : null}
      </section>

      <section
        className={styles.initiateProject}
        aria-label="Start a project"
        ref={ctaRef}
      >
        <div className={styles.column}>
          <p className={styles.lets}>
            LET&apos;S <span className={styles.talk}>TALK</span>
          </p>
          <Link href="/contact" className={styles.buttonWrapper}>
            <span>START A PROJECT</span>
            <div className={styles.arrowRight} aria-hidden="true">
              <ArrowRight />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
