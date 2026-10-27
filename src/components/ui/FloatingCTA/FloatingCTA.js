"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, Briefcase, Mail, ArrowUpRight } from "lucide-react";
import styles from "./FloatingCTA.module.css";

const TRAY_LINKS = [
  {
    href: "/contact#contact-form",
    label: "Start a Project",
    icon: ArrowUpRight,
  },
  {
    href: "/contact",
    label: "Get in Touch",
    icon: Mail,
  },
  {
    href: "/services",
    label: "Our Services",
    icon: Briefcase,
  },
];

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const trayRef = useRef(null);
  const btnRef = useRef(null);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  // Show pill only after user scrolls 120px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };

    const handleClick = (e) => {
      if (
        !trayRef.current?.contains(e.target) &&
        !btnRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <>
      {/* Expandable tray */}
      <nav
        ref={trayRef}
        className={`${styles.tray}${open ? ` ${styles.trayOpen}` : ""}`}
        aria-label="Quick navigation"
        inert={!open}
      >
        {TRAY_LINKS.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={styles.trayItem}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span className={styles.trayIcon} aria-hidden="true">
                <Icon size={14} />
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Floating pill — only rendered after scroll */}
      <div
        className={`${styles.pill}${visible ? ` ${styles.pillVisible}` : ""}`}
        role="complementary"
        aria-label="Quick actions"
        inert={!visible}
      >
        {/* CTA text area */}
        <Link
          href="/contact#contact-form"
          className={styles.ctaArea}
          aria-label="Start a project with Palqar"
        >
          <span className={styles.ctaDot} aria-hidden="true" />
          Tell us about your needs
        </Link>

        {/* Divider */}
        <span className={styles.divider} aria-hidden="true" />

        {/* Menu button */}
        <button
          ref={btnRef}
          className={styles.menuBtn}
          onClick={toggle}
          aria-label={open ? "Close quick menu" : "Open quick menu"}
          aria-expanded={open}
          aria-controls="floating-cta-tray"
          type="button"
        >
          <span
            className={`${styles.iconWrap}${open ? ` ${styles.iconWrapOpen}` : ""}`}
            aria-hidden="true"
          >
            {open ? <X size={17} strokeWidth={2} /> : <Menu size={17} strokeWidth={2} />}
          </span>
        </button>
      </div>
    </>
  );
}
