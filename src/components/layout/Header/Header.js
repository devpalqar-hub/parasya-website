"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { HEADER_SERVICE_COLUMNS as SERVICES } from "@/lib/serviceRoutes";

function MegaMenu({ visible, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`${styles.megaMenu} ${visible ? styles.megaMenuVisible : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Services menu"
    >
      <div className={styles.megaInner}>
        {SERVICES.map((col) => (
          <div key={col.category} className={styles.megaCol}>
            <p className={styles.megaCategory}>
              <span className={styles.megaNum}>{col.num}</span>
              {col.category}
            </p>
            <ul className={styles.megaList}>
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.megaItem}>
                    <span className={styles.megaItemArrow}>&rarr;</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const scrollTimer = useRef(null);
  const megaTimer = useRef(null);

  useEffect(() => {
    const idleDelay = 2500;

    const handleScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      const bar = progressRef.current;
      if (bar) {
        bar.style.transform = `scaleX(${pct / 100})`;
        bar.setAttribute("aria-valuenow", String(Math.round(pct)));
      }
      setScrolled(y > 10);
      setVisible(true);

      clearTimeout(scrollTimer.current);
      if (y < 10) return;
      scrollTimer.current = setTimeout(() => {
        if (!isHovering) setVisible(false);
      }, idleDelay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer.current);
    };
  }, [isHovering]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    setVisible(true);
    clearTimeout(scrollTimer.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    scrollTimer.current = setTimeout(() => setVisible(false), 2500);
  }, []);

  const openMega = useCallback(() => {
    clearTimeout(megaTimer.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 220);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesExpanded(false);
  };

  return (
    <>
      <div
        className={styles.progressBar}
        ref={progressRef}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`
          ${styles.wrapper}
          ${!visible ? styles.hidden : ""}
          ${scrolled ? styles.scrolled : ""}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.navbar}>
          <Link href="/" className={styles.logoBox}>
            <Image src="/LOGO.svg" alt="logo" fill className={styles.logoImg} />
          </Link>

          <nav className={styles.links} aria-label="Main navigation">
            <Link href="/" className={styles.navLink}>
              Home
            </Link>

            <div
              className={styles.servicesWrap}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <Link
                href="/services"
                className={`${styles.navLink} ${styles.servicesLink} ${megaOpen ? styles.servicesLinkActive : ""}`}
                onFocus={openMega}
                onBlur={closeMega}
                aria-haspopup="true"
                aria-expanded={megaOpen}
              >
                Services
                <span
                  className={`${styles.chevron} ${megaOpen ? styles.chevronOpen : ""}`}
                />
              </Link>
            </div>
            <Link href="/works" className={styles.navLink}>
              Works
            </Link>
            <Link href="/industries" className={styles.navLink}>
              Industries
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/career" className={styles.navLink}>
              Career
            </Link>
          </nav>

          <Link href="/contact" className={styles.contact}>
            CONTACT US
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <MegaMenu
        visible={megaOpen}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      />

      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        inert={!menuOpen}
      >
        <ul className={styles.drawerLinks}>
          {["Home", "Works", "Industries", "About", "Blog", "Career"].map((label, i) => (
            <li
              key={label}
              className={styles.drawerItem}
              style={{ "--i": i }}
            >
              <Link
                href={`/${label === "Home" ? "" : label.toLowerCase()}`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}

          <li className={styles.drawerItem} style={{ "--i": 6 }}>
            <button
              className={styles.drawerAccordion}
              onClick={() => setServicesExpanded((prev) => !prev)}
              aria-expanded={servicesExpanded}
            >
              Services
              <span
                className={`${styles.drawerChevron} ${servicesExpanded ? styles.drawerChevronOpen : ""}`}
              >
                &#8964;
              </span>
            </button>

            <div
              className={`${styles.drawerSub} ${servicesExpanded ? styles.drawerSubOpen : ""}`}
            >
              {SERVICES.map((col) => (
                <div key={col.category} className={styles.drawerSubGroup}>
                  <p className={styles.drawerSubHeading}>
                    <span className={styles.drawerSubNum}>{col.num}</span>
                    {col.category}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={styles.drawerSubItem}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </li>
        </ul>

        <Link href="/contact" className={styles.drawerContact} onClick={closeMenu}>
          CONTACT US
        </Link>
      </div>
    </>
  );
}
