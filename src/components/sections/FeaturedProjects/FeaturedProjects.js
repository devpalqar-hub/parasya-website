"use client";
import styles from "./FeaturedProjects.module.css";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    slug: "zodo",
    title: "ZodoAI",
    logo: "/featured-projects/zodo/zodo-logo.png",
    logoClass: "zodoLogo",
    logoWidth: 800,
    logoHeight: 600,
    logoFit: "cover",
    logoPosition: "center center",
    heading: "Smarter Healthcare with AI",
    desc: "With ZODO AI, managing your health becomes easier than ever.Schedule consultations quickly and access expert advice in seconds.Stay informed with real-time updates and personalized support.Your journey to better health starts here.",
    bg: "linear-gradient(160deg, #01b18a 0%, #019a7a 40%, #016655 80%, #013d33 100%)",
    media: [
      {
        src: "/featured-projects/zodo/zodoaimockup.png",
        className: "ZodoLaptop",
      },
    ],
  },
  {
    id: 2,
    slug: "cleanmaria",
    title: "CleanMaria",
    logo: "/featured-projects/cleanmaria/logo.svg",
    logoClass: "cleanmariaLogo",
    logoWidth: 215,
    logoHeight: 98,
    logoFit: "contain",
    logoPosition: "left center",
    heading: "Cleaning made effortless.",
    desc: "Book your cleaning in seconds with our easy platform while trusted professionals handle every detail. Enjoy flexible scheduling that fits your routine and relax knowing your home will be left fresh, spotless, and beautifully clean.",
    bg: "linear-gradient(160deg, #0e0e0e 0%, #1a1a1a 45%, #111111 75%, #080808 100%)",
    media: [
      {
        src: "/featured-projects/cleanmaria/cleanmariamockups.png",
        className: "CleanMariaMockup",
      },
    ],
  },
  {
    id: 3,
    slug: "momsmilk",
    title: "MomsMilk",
    logo: "/featured-projects/momsmilk/Logo.svg",
    logoClass: "momsmilkLogo",
    logoWidth: 200,
    logoHeight: 72,
    logoFit: "contain",
    logoPosition: "left center",
    heading: "Care Made Simple for New Moms",
    desc: "Empowering mothers with smart baby tracking and a trusted milk-sharing community. Log feeds, diaper changes, and naps effortlessly while connecting with donors in your area.",
    bg: "linear-gradient(150deg, #fff0e8 0%, #fcd8c4 30%, #f69173 65%, #e06040 100%)",
    textColor: "#3a1a0a",
    media: [
      {
        src: "/featured-projects/momsmilk/momsmilkmockup.png",
        className: "MomsMilkMockup",
      },
    ],
  },
  {
    id: 4,
    slug: "bambinidoulas",
    title: "Bambini Doulas",
    logo: "/featured-projects/bambinidoulas/logo.svg",
    logoClass: "bambiniLogo",
    logoWidth: 240,
    logoHeight: 85,
    logoFit: "contain",
    logoPosition: "left center",
    heading: "Support for Every Stage",
    desc: "Personalized doula support for every stage of your journey.Compassionate professionals guiding you through pregnancy and beyond.Feel confident, supported, and cared for every step of the way.",
    bg: "linear-gradient(145deg, #2a0845 0%, #5a1a9e 35%, #7c2fc5 65%, #08060a 100%)",
    media: [
      {
        src: "/featured-projects/bambinidoulas/bambinimockup.png",
        className: "Bambinilaptop",
      },
    ],
  },
];


export default function FeaturedProjects() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <p className={styles.label}>Featured Projects</p>

        <div className={styles.controls}>
          <div className={styles.recent} aria-hidden="true">
            RECENT PROJECTS
            <div>
              <LuArrowUpRight />
            </div>
          </div>
          <div className={styles.divider}></div>
          <button
            className={styles.navigate}
            type="button"
            aria-label="Scroll featured projects left"
            onClick={() => scroll("left")}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={styles.navigate}
            type="button"
            aria-label="Scroll featured projects right"
            onClick={() => scroll("right")}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className={styles.slider}
        style={{ willChange: "scroll-position" }}
      >
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className={styles.card}
            style={{ background: p.bg }}
          >
            <div
              className={styles.text}
              style={p.textColor ? { color: p.textColor } : {}}
            >
              <Link href={`/projects/${p.slug}`}>
                <Image
                  src={p.logo}
                  alt={`${p.title} logo`}
                  width={p.logoWidth}
                  height={p.logoHeight}
                  className={`${styles.logo} ${styles[p.logoClass]}`}
                  style={{
                    objectFit: p.logoFit,
                    objectPosition: p.logoPosition,
                  }}
                  sizes="(max-width: 768px) 150px, 200px"
                />
                {p.heading && <h3 className={styles.cardHeading}>{p.heading}</h3>}
                <p>{p.desc}</p>
              </Link>
            </div>

            <div className={styles.media}>
              {p.media.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.mediaItem} ${styles[item.className]}`}
                >
                  <Image
                    src={item.src}
                    alt={p.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
