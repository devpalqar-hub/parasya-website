"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Link2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/app/blog/[slug]/BlogPost.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPostClient({ post, relatedPosts = [] }) {
  const [activeSection, setActiveSection] = useState(post.toc[0]?.id ?? null);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const heroRef = useRef(null);
  const articleRef = useRef(null);
  const exploreRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scroll = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;

      if (progressRef.current) {
        progressRef.current.style.width = `${(scroll / height) * 100}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = post.toc.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [post.toc]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = "power3.out";

      const heroTl = gsap.timeline({ defaults: { ease, duration: 1 } });
      heroTl
        .from(`.${styles.heroMeta}`, { y: 30, opacity: 0, duration: 0.7 })
        .from(
          `.${styles.heroTitle}`,
          { y: 60, opacity: 0, duration: 1.1 },
          "-=0.4",
        )
        .from(
          `.${styles.heroAuthor}`,
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          `.${styles.heroCard}`,
          { y: 50, opacity: 0, scale: 0.97, duration: 1.1 },
          "-=0.6",
        );

      gsap.utils.toArray(`.${styles.section}`).forEach((element) => {
        gsap.from(element, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray(`.${styles.pullQuote}`).forEach((element) => {
        gsap.from(element, {
          x: -30,
          opacity: 0,
          duration: 1,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      if (relatedPosts.length > 0) {
        gsap.from(`.${styles.exploreHeading}`, {
          y: 50,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: exploreRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        gsap.from(`.${styles.exploreCard}`, {
          y: 60,
          opacity: 0,
          duration: 0.85,
          stagger: 0.15,
          ease,
          immediateRender: false,
          scrollTrigger: {
            trigger: `.${styles.exploreGrid}`,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, [relatedPosts.length]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} ref={progressRef} />
      </div>

      <main>
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroInner}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} />
              <span>All Articles</span>
            </Link>

            <div className={styles.heroMeta}>
              <span className={styles.heroCat}>{post.category}</span>
              <span className={styles.heroDot} aria-hidden="true" />
              <time className={styles.heroDate}>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>

            <h1 className={styles.heroTitle}>{post.title}</h1>
            <p className={styles.heroTagline}>{post.tagline}</p>

            <div className={styles.heroAuthor}>
              <span className={styles.heroAuthorLabel}>Writer</span>
              <div className={styles.heroAuthorRow}>
                <span className={styles.heroAuthorName}>{post.author}</span>
                <Link
                  href="/about"
                  className={styles.linkedinBadge}
                  aria-label="About the author"
                >
                  <Linkedin size={12} fill="#fff" />
                </Link>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div
                className={styles.heroCardInner}
                style={{ background: post.accentColor || "#dc3545" }}
              >
                <span className={styles.heroCardBrand}>Palqar</span>
                <div className={styles.heroCardArrow} aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </div>
                <div className={styles.heroCardTitle}>
                  <h2>{post.title.split("?")[0]}?</h2>
                </div>
                <div className={styles.heroCardAuthor}>
                  <span>{post.author}</span>
                  <span>{post.authorRole}</span>
                </div>
                <div className={styles.heroCardPerson}>
                  <Image
                    src={post.heroImage}
                    alt={`Illustration for ${post.title}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                    className={styles.heroCardPersonImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <article className={styles.articleZone} ref={articleRef}>
          <div className={styles.articleInner}>
            <aside className={styles.sidebar} aria-label="Article navigation">
              <nav className={styles.toc} aria-label="Table of contents">
                <ul className={styles.tocList}>
                  {post.toc.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`${styles.tocItem} ${
                          activeSection === id ? styles.tocActive : ""
                        }`}
                        onClick={(event) => {
                          event.preventDefault();
                          document
                            .getElementById(id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <span className={styles.tocDot} aria-hidden="true" />
                        <span>{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.sidebarDivider} />

              <div className={styles.shareBlock}>
                <p className={styles.shareLabel}>Share this article</p>
                <div className={styles.shareButtons}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      shareUrl,
                    )}`}
                    className={`${styles.shareBtn} ${styles.shareFb}`}
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={14} fill="#fff" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      shareUrl,
                    )}`}
                    className={`${styles.shareBtn} ${styles.shareX}`}
                    aria-label="Share on X"
                  >
                    <Twitter size={14} fill="#fff" />
                  </a>
                  <Link
                    href="/about"
                    className={`${styles.shareBtn} ${styles.shareLi}`}
                    aria-label="Learn more about Palqar"
                  >
                    <Linkedin size={14} fill="#fff" />
                  </Link>
                  <button
                    className={`${styles.shareBtn} ${styles.shareCopy} ${
                      copied ? styles.copied : ""
                    }`}
                    onClick={handleCopy}
                    aria-label="Copy link"
                  >
                    <Link2 size={14} />
                  </button>
                </div>
              </div>
            </aside>

            <div className={styles.body}>
              {post.content.map((section) => (
                <section key={section.id} id={section.id} className={styles.section}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.subheading ? (
                    <p className={styles.sectionSub}>{section.subheading}</p>
                  ) : null}

                  {section.body.map((paragraph) => (
                    <p key={paragraph} className={styles.para}>
                      {paragraph}
                    </p>
                  ))}

                  {section.links?.length ? (
                    <p className={styles.sectionLinks}>
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={styles.sectionLink}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </p>
                  ) : null}

                  {section.pullQuote ? (
                    <blockquote className={styles.pullQuote}>
                      <span className={styles.pullQuoteMark} aria-hidden="true">
                        "
                      </span>
                      {section.pullQuote}
                    </blockquote>
                  ) : null}

                  {section.image ? (
                    <figure className={styles.figure}>
                      <div className={styles.figureImage}>
                        <Image
                          src={section.image}
                          alt={section.imageCaption ?? section.heading}
                          fill
                          sizes="(max-width: 768px) 100vw, 700px"
                          className={styles.figImg}
                        />
                      </div>
                      {section.imageCaption ? (
                        <figcaption className={styles.figCaption}>
                          {section.imageCaption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                </section>
              ))}

              <div className={styles.authorBio}>
                <div className={styles.authorBioImageWrap}>
                  <Image
                    src={post.heroImage}
                    alt={`Illustration for ${post.title}`}
                    fill
                    className={styles.authorBioImage}
                  />
                </div>
                <div className={styles.authorBioText}>
                  <span className={styles.authorBioLabel}>Written by</span>
                  <strong className={styles.authorBioName}>{post.author}</strong>
                  <span className={styles.authorBioRole}>
                    {post.authorRole}, Palqar
                  </span>
                </div>
              </div>

              <div className={styles.shareBlock}>
                <p className={styles.shareLabel}>Continue exploring</p>
                <div className={styles.shareButtons}>
                  <Link href="/services" className={styles.shareBtn}>
                    <ArrowRight size={14} />
                  </Link>
                  <Link href="/projects/zodo" className={styles.shareBtn}>
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link href="/contact" className={styles.shareBtn}>
                    <Linkedin size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 ? (
          <section className={styles.explore} ref={exploreRef} aria-label="More articles">
            <div className={styles.exploreInner}>
              <div className={styles.exploreTop}>
                <h2 className={styles.exploreHeading}>
                  <span>More</span>
                  <span>to Explore</span>
                </h2>
              </div>

              <div className={styles.exploreGrid}>
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className={styles.exploreCard}
                  >
                    <div
                      className={styles.exploreCardInner}
                      style={{ background: relatedPost.accentColor || "#dc3545" }}
                    >
                      <span className={styles.exploreCardBrand}>Palqar</span>
                      <div className={styles.exploreCardArrow} aria-hidden="true">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </div>
                      <div className={styles.exploreCardTitle}>
                        <h3>{relatedPost.title}</h3>
                      </div>
                      <div className={styles.exploreCardAuthor}>
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.authorRole}</span>
                      </div>
                      <div className={styles.exploreCardPerson}>
                        <Image
                          src={relatedPost.heroImage}
                          alt={`Illustration for ${relatedPost.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className={styles.exploreCardPersonImg}
                        />
                      </div>
                    </div>
                    <p className={styles.exploreCardTagline}>{relatedPost.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
