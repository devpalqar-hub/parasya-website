"use client";

import { useState, useEffect, useCallback } from "react";
import { Phone, X } from "lucide-react";

/* WhatsApp SVG icon (official brand mark) */
function WhatsAppIcon({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
import styles from "./FloatingContact.module.css";

const PHONE_NUMBER = "+91 99954 98218";
const PHONE_RAW = "919995498218";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Dismiss on Escape
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Close on outside click / tap (mousedown for desktop, touchstart for mobile)
  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e) => {
      if (!e.target.closest("[data-floating-contact]")) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={styles.container}
      role="complementary"
      aria-label="Contact us"
      data-floating-contact
    >
      {/* ── Expandable card ── */}
      <div
        className={`${styles.card}${isOpen ? ` ${styles.cardOpen}` : ""}`}
        role="dialog"
        aria-label="Contact information"
        inert={!isOpen}
      >
        <p className={styles.cardLabel}>Contact Us</p>
        <p className={styles.cardPhone}>{PHONE_NUMBER}</p>

        <div className={styles.cardActions}>
          <a
            id="floating-contact-call-btn"
            href={`tel:+${PHONE_RAW}`}
            className={styles.btnCall}
            aria-label={`Call us at ${PHONE_NUMBER}`}
            tabIndex={isOpen ? 0 : -1}
          >
            <Phone size={14} aria-hidden="true" />
            Call Now
          </a>

          <a
            id="floating-contact-whatsapp-btn"
            href={`https://wa.me/${PHONE_RAW}`}
            className={styles.btnWa}
            aria-label={`Chat on WhatsApp with ${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── Trigger button ── */}
      <button
        id="floating-contact-trigger"
        className={`${styles.trigger}${isOpen ? ` ${styles.triggerOpen}` : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        type="button"
      >
        {/* Pulse rings — hidden when open */}
        <span
          className={`${styles.pulse}${isOpen ? ` ${styles.pulseHidden}` : ""}`}
          aria-hidden="true"
        />
        <span
          className={`${styles.pulse2}${isOpen ? ` ${styles.pulseHidden}` : ""}`}
          aria-hidden="true"
        />

        {/* Icon — rotates between phone and X */}
        <span className={`${styles.iconWrap}${isOpen ? ` ${styles.iconWrapOpen}` : ""}`} aria-hidden="true">
          <span className={`${styles.iconPhone}${isOpen ? ` ${styles.iconHidden}` : ""}`}>
            <Phone size={22} />
          </span>
          <span className={`${styles.iconClose}${isOpen ? ` ${styles.iconVisible}` : ""}`}>
            <X size={22} />
          </span>
        </span>
      </button>
    </div>
  );
}
