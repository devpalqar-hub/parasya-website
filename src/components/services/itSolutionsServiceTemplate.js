"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./itSolutionsServiceTemplate.module.css";
import {
  SiReact,
  SiNodedotjs,
  SiWordpress,
  SiWebflow,
  SiNextdotjs,
  SiTailwindcss,
  SiCloudflare,
  SiPhp,
  SiMysql,

} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techIconMap = {
    WordPress: SiWordpress,
    Webflow: SiWebflow,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  PHP: SiPhp,
  "Tailwind CSS": SiTailwindcss,
  CloudFlare: SiCloudflare,
  MySQL: SiMysql,
  AWS: FaAws,
  
  
  
};

const getTechIcon = (techName) => {
  const normalizedName = techName.trim();
  return techIconMap[normalizedName] || null;
};

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem} data-open={open}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={styles.faqIcon} aria-hidden="true">
          {open ? "-" : "+"}
        </span>
      </button>
      <div className={styles.faqAnswer} inert={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function ITSolutionsServiceTemplate({ category, service, content }) {
  const readableCategory = category.replace(/-/g, " ");
  const readableService = service.replace(/-/g, " ");
  const imageHeadingId = `${service}-image-heading`;
  const {
    hero,
    problemSolution,
    services,
    whyChoosePalqar,
    imageSection,
    process,
    techStack,
    results,
    faqs,
    finalCTA,
  } = content;

  useEffect(() => {
    // Set up reveal animations after component mounts
    const els = document.querySelectorAll('.reveal:not(.visible)');
    
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'));
      return;
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => io.observe(el));

    return () => {
      els.forEach(el => io.unobserve(el));
    };
  }, []);

  return (
    <>
      <main className={styles.root} id="main-content">
        {/* Hero Section */}
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroInner}`}>
            <p className={`${styles.eyebrow} reveal visible`}>
              {readableCategory} / {service.replace(/-/g, " ")}
            </p>
            <h1 className={`${styles.heading} reveal visible reveal-delay-1`}>
              {hero.title}
            </h1>
            <p className={`${styles.subheading} reveal visible reveal-delay-2`}>
              {hero.subtitle}
            </p>
            <Link
              href="/contact"
              className={`${styles.heroCta} reveal visible reveal-delay-3`}
            >
              {hero.cta}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Problem & Solution Section */}
        {problemSolution ? (
          <section className={styles.ps} aria-label="Challenges and solutions">
            <div className={styles.container}>
              <div className={`${styles.psHeader} reveal`}>
                <p className={styles.eyebrow}>The Challenge</p>
                <h2 className={styles.heading}>{problemSolution.title}</h2>
              </div>
              {problemSolution.problems ? (
                <div className={`${styles.psGrid} reveal reveal-delay-1`}>
                  <div className={styles.psCol}>
                    <p className={styles.psColTitle}>Common Problems</p>
                    <ul className={styles.psList}>
                      {problemSolution.problems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.psCol}>
                    <p className={styles.psColTitle}>Our Solutions</p>
                    <ul className={styles.psList}>
                      {problemSolution.solutions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className={`${styles.psDescription} reveal reveal-delay-1`}>
                  <p>{problemSolution.description}</p>
                </div>
              )}
            </div>
          </section>
        ) : null}

        {/* What's Included / Services Section */}
        {services ? (
          <section className={styles.services} aria-label={`Our ${readableService} services`}>
            <div className={styles.container}>
              <div className={styles.servicesHeader}>
                <p className={`${styles.eyebrow} reveal`}>{readableCategory}</p>
                <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                  {services.title}
                </h2>
                {services.subtitle && (
                  <p
                    className={`${styles.subheading} reveal reveal-delay-2 ${styles.marginTop16}`}
                  >
                    {services.subtitle}
                  </p>
                )}
              </div>
              <div className={`${styles.servicesGrid} reveal reveal-delay-1`}>
                {services.items.map((item, i) => (
                  <article className={styles.serviceCard} key={i}>
                    <p className={styles.serviceNum}>0{i + 1}</p>
                    <h3 className={styles.serviceTitle}>{item.title}</h3>
                    <p className={styles.serviceDesc}>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Image Section */}
        {imageSection ? (
          <section
            className={styles.imageSection}
            aria-labelledby={imageHeadingId}
          >
            <div className={styles.container}>
              <div className={styles.imageSectionGrid}>
                <div className={`${styles.imageSectionContent} reveal`}>
                  {imageSection.eyebrow && (
                    <p className={styles.eyebrow}>{imageSection.eyebrow}</p>
                  )}
                  <h2 id={imageHeadingId} className={styles.imageSectionTitle}>
                    {imageSection.title}
                  </h2>
                  <p className={styles.imageSectionDescription}>
                    {imageSection.description}
                  </p>
                </div>

                <figure className={`${styles.imageFigure} reveal reveal-delay-1`}>
                  <div className={styles.imageFrame}>
                    <Image
                      src={imageSection.src}
                      alt={imageSection.alt || `${readableService} service illustration`}
                      fill
                      className={styles.imageMedia}
                      sizes="(max-width: 768px) 100vw, 48vw"
                    />
                  </div>
                  {imageSection.caption && (
                    <figcaption className={styles.imageCaption}>
                      {imageSection.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            </div>
          </section>
        ) : null}

        {/* Why Choose Palqar Section */}
        {whyChoosePalqar ? (
          <section className={styles.whyChoose} aria-label="Why choose Palqar">
            <div className={styles.container}>
              <div className={styles.whyChooseHeader}>
                <p className={`${styles.eyebrow} reveal`}>Expertise</p>
                <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                  {whyChoosePalqar.title}
                </h2>
              </div>
              <div className={`${styles.whyChooseGrid} reveal reveal-delay-1`}>
                {whyChoosePalqar.items.map((item, i) => (
                  <div className={styles.whyChooseCard} key={i}>
                    <h3 className={styles.whyChooseTitle}>{item.title}</h3>
                    <p className={styles.whyChooseDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Process Section */}
        {process ? (
          <section className={styles.process} aria-label="Our process">
            <div className={styles.container}>
              <div className={styles.processHeader}>
                <p className={`${styles.eyebrow} reveal`}>How We Work</p>
                <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                  {process.title}
                </h2>
                {process.subtitle && (
                  <p
                    className={`${styles.subheading} reveal reveal-delay-2 ${styles.marginTop16}`}
                  >
                    {process.subtitle}
                  </p>
                )}
              </div>
              <div className={styles.processSteps} role="list">
                {process.steps.map((step, i) => (
                  <div
                    className={`${styles.processStep} reveal`}
                    style={{ transitionDelay: `${i * 0.08}s` }}
                    key={i}
                    role="listitem"
                  >
                    <div className={styles.stepDot} aria-hidden="true">
                      0{i + 1}
                    </div>
                    <p className={styles.stepLabel}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Tech Stack Section */}
        {techStack ? (
          <section className={styles.techStack} aria-label="Technology stack">
            <div className={styles.container}>
              <div className={styles.techStackGrid}>
                <div className={styles.techStackContent}>
                  <div className={styles.techStackHeader}>
                    <p className={`${styles.eyebrow} reveal`}>Technology</p>
                    <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                      {techStack.title}
                    </h2>
                  </div>
                  <p className={`${styles.techStackDescription} reveal reveal-delay-2`}>
                    {techStack.description}
                  </p>
                  <div className={`${styles.techStackIcons} reveal reveal-delay-3`}>
                    {techStack.items && Array.isArray(techStack.items) ? (
                      techStack.items.map((tech, i) => {
                        const IconComponent = getTechIcon(tech.name || tech);
                        return (
                        //   <div
                        //     key={i}
                        //     className={styles.techIconItem}
                        //     title={tech.name || tech}
                        //   >
                        //     {IconComponent ? (
                        //       <IconComponent className={styles.techIcon} />
                        //     ) : null}
                        //   </div>
                          <div className={styles.techCard}>
                            <div className={styles.techCardIcon}>
                                {IconComponent && <IconComponent className={styles.techIcon} />}
                            </div>

                            <div className={styles.techCardContent}>
                                <h4>{tech.name || tech}</h4>
                                <p>{tech.description}</p>
                            </div>
                         </div>
                        );
                      })
                    ) : null}
                  </div>
                </div>
                <div className={styles.techStackIllustration}>
                  <Image
                    src="/techstackbg.png"
                    alt="Technology stack illustration with code and tech icons"
                    width={400}
                    height={400}
                    className={styles.techStackImage}
                  />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Results Section */}
        {results ? (
          <section className={styles.results} aria-label="Results and benefits">
            <div className={styles.container}>
              <div className={styles.resultsHeader}>
                <p className={`${styles.eyebrow} reveal`}>What You Get</p>
                <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                  {Array.isArray(results)
                    ? "Key Benefits"
                    : results.title || "Key Benefits"}
                </h2>
              </div>
              <div className={styles.resultsList} role="list">
                {(Array.isArray(results) ? results : results.items || []).map(
                  (item, i) => (
                    <div
                      className={`${styles.resultPill} reveal`}
                      style={{ transitionDelay: `${i * 0.07}s` }}
                      key={i}
                      role="listitem"
                    >
                      <span className={styles.resultCheck} aria-hidden="true">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6.2 4.5 8.7 10 3.2"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        ) : null}

        {/* FAQ Section */}
        {faqs && faqs.length > 0 ? (
          <section className={styles.faq} aria-label="Frequently asked questions">
            <div className={styles.container}>
              <div className={styles.faqHeader}>
                <p className={`${styles.eyebrow} reveal`}>FAQ</p>
                <h2 className={`${styles.heading} reveal reveal-delay-1`}>
                    {faqs.title || (
                  <>
                    Common Questions About <em>{readableService.toUpperCase()} in Qatar</em>
                  </>
                )}
                </h2>
              </div>
              <div className={`${styles.faqList} reveal reveal-delay-1`}>
                {(Array.isArray(faqs) ? faqs : faqs.items || []).map(
                  (item, i) => (
                    <FAQItem key={i} q={item.q} a={item.a} />
                  )
                )}
              </div>
            </div>
          </section>
        ) : null}

        {/* Final CTA Section */}
        {finalCTA ? (
          <section className={styles.finalCta} aria-label="Call to action">
            <div className={styles.container}>
              <div className={`${styles.finalCtaContent} reveal`}>
                <h2 className={styles.finalCtaTitle}>{finalCTA.title}</h2>
                <p className={styles.finalCtaSubtitle}>{finalCTA.subtitle}</p>
                <Link href="/contact" className={styles.finalCtaButton}>
                  {finalCTA.cta}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
