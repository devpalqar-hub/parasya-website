"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./ServicesPreview.module.css";
import {
  LuChevronRight,
  LuCode,
  LuPalette,
  LuTrendingUp,
  LuBot,
  LuTarget,
  LuSearch,
} from "react-icons/lu";
import gsap from "gsap";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SERVICE_PREVIEW_LINKS } from "@/lib/serviceRoutes";

const SERVICES = [
  {
    id: 1,
    icon: LuCode,
    title: "Web & Technology Development",
    description:
      "Build scalable digital products, high-performance websites, and custom platforms engineered for speed and seamless user experience.",
    cta: "Build Your Platform",
    href: SERVICE_PREVIEW_LINKS.webDevelopment,
  },
  {
    id: 2,
    icon: LuPalette,
    title: "Branding & Creative Design",
    description:
      "Craft powerful brand identities with strategic design and storytelling that captures attention and builds trust.",
    cta: "Create Your Brand",
    href: SERVICE_PREVIEW_LINKS.brandingIdentity,
  },
  {
    id: 3,
    icon: LuTrendingUp,
    title: "Performance Marketing & Growth",
    description:
      "Drive measurable growth with SEO, paid campaigns, and data-driven strategies that convert traffic into revenue.",
    cta: "Scale Your Growth",
    href: SERVICE_PREVIEW_LINKS.digitalMarketing,
  },
  {
    id: 4,
    icon: LuBot,
    title: "Technology & Automation",
    description:
      "Automate workflows, optimize operations, and integrate smart systems to accelerate business efficiency.",
    cta: "Automate Your Business",
    href: SERVICE_PREVIEW_LINKS.businessAutomation,
  },
  {
    id: 5,
    icon: LuTarget,
    title: "Business & Growth Strategy",
    description:
      "Unlock opportunities with expert consulting, market insights, and strategies designed for long-term success.",
    cta: "Plan Your Growth",
    href: SERVICE_PREVIEW_LINKS.growthStrategy,
  },
  {
    id: 6,
    icon: LuSearch,
    title: "Not Sure Where to Start?",
    description:
      "Get a free 30-minute audit and discover gaps, missed opportunities, and clear steps to scale your business.",
    cta: "Get Free Audit",
    href: "/contact",
  },
];

export default function ServicesPreview() {
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    Object.values(contentRefs.current).forEach((content) => {
      if (!content) return;

      gsap.set(content, {
        height: 0,
        opacity: 0,
        y: -12,
        willChange: "transform, opacity, height",
      });
    });
  }, []);

  const handleToggle = (serviceId) => {
    const content = contentRefs.current[serviceId];
    if (!content) return;

    if (activeId === serviceId) {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        y: -12,
        duration: 0.35,
        ease: "power2.inOut",
      });
      setActiveId(null);
      return;
    }

    if (activeId && contentRefs.current[activeId]) {
      gsap.to(contentRefs.current[activeId], {
        height: 0,
        opacity: 0,
        y: -12,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }

    gsap.set(content, { height: "auto", opacity: 1, y: 0 });

    gsap.from(content, {
      height: 0,
      opacity: 0,
      y: -12,
      duration: 0.45,
      ease: "power3.out",
    });

    const listItems = content.querySelectorAll("li");
    if (listItems.length > 0) {
      gsap.from(listItems, {
        y: 8,
        opacity: 0,
        stagger: 0.04,
        duration: 0.35,
        ease: "power2.out",
      });
    }

    setActiveId(serviceId);
  };

  return (
    <section className={styles.wrapper} id="services">
      <p className={styles.label}>WHAT WE DO</p>

      <h2 className={styles.heading}>
        Growth, <span className={styles.highlight}>Technology</span> & Marketing
        Solutions
      </h2>

      <div className={styles.list}>
      {SERVICES.map((service) => {
        const Icon = service.icon;
        return (
        <div
          key={service.id}
          className={`${styles.service} ${
            activeId === service.id ? styles.active : ""
          }`}
          onClick={() => handleToggle(service.id)}
        >
          <span className={styles.dot} aria-hidden="true" />
          <div className={styles.header}>
            <span className={styles.iconWrap}>
              <Icon />
            </span>
            <h3>{service.title}</h3>
            <span className={styles.arrow}>
              <LuChevronRight />
            </span>
          </div>

          <div
            ref={(el) => {
              contentRefs.current[service.id] = el;
            }}
            className={styles.content}
          >
            <div className={styles.count}>
              {service.id < 10 ? `0${service.id}` : service.id}
            </div>

            <div className={styles.info}>
              <p className={styles.description}>{service.description}</p>

              <Link href={service.href} className={styles.cta}>
                {service.cta} <IoIosArrowRoundForward size={20} />
              </Link>
            </div>

            <div className={styles.rightPanel}>
              <Link href={service.href} className={styles.ctaButton}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        );
      })}
      </div>
    </section>
  );
}
