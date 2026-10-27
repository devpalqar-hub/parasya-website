"use client";

import { LogoLoop } from "@/components/ui/LogoLoop";
import TechLogos from "@/components/ui/tech-logos";
import styles from "./TechLoopSection.module.css";

export default function TechLoopSection() {
  const logos = TechLogos();

  return (
    <section className={styles.wrapper} aria-label="Technologies and tools we work with">
      <p className={styles.label}>Technologies &amp; Tools We Use</p>

      <div className={styles.trackWrap}>
        <LogoLoop
          logos={logos}
          speed={55}
          direction="left"
          logoHeight={40}
          gap={48}
          fadeOut
          fadeOutColor="var(--tls-bg, #0b0b0b)"
          pauseOnHover
          ariaLabel="Technologies and tools"
          className={styles.loop}
        />
      </div>
    </section>
  );
}
