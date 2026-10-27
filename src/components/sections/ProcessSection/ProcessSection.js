"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Lightbulb, Code2, BarChart3 } from "lucide-react";
import gsap from "gsap";
import styles from "./ProcessSection.module.css";

const STEPS = [
  {
    title: "Discover",
    description: "We understand your goals, challenges and opportunities.",
    icon: MessageSquare,
  },
  {
    title: "Plan",
    description: "We craft a tailored strategy and roadmap for success.",
    icon: Lightbulb,
  },
  {
    title: "Build",
    description: "Our experts design and develop scalable solutions.",
    icon: Code2,
  },
  {
    title: "Grow",
    description: "We provide continuous support to help your business scale.",
    icon: BarChart3,
  },
];

// Deterministic per-card yaw character so the four panels don't all face the
// same way — left-hand cards lean one way, right-hand cards the other.
const CARD_YAW_BIAS = [-4, 3, -3, 4];

const LAYOUTS = {
  desktop: {
    viewBox: "0 0 1400 315",
    aspectRatio: "1400 / 315",
    mainPath:
      "M -200 180 C 60 180, 140 85, 320 85 C 470 85, 500 158, 660 158 C 810 158, 850 62, 1030 62 C 1180 62, 1220 135, 1420 135 C 1520 135, 1560 113, 1600 113",
    connector: 46,
    decor: {
      bgCurves: [
        "M -200 51 C 200 51, 320 23, 620 23 C 920 23, 1020 62, 1400 62 C 1500 62, 1550 53, 1600 53",
        "M -200 265 C 200 265, 330 304, 660 304 C 960 304, 1060 259, 1400 259 C 1500 259, 1550 270, 1600 270",
        "M -200 124 C 260 107, 460 152, 760 119 C 1010 96, 1160 141, 1600 107",
      ],
      ribbons: [
        "M -200 191 C 80 191, 160 113, 360 113 C 540 113, 560 180, 740 180 C 900 180, 940 96, 1100 96 C 1260 96, 1300 169, 1600 146",
        "M -220 141 C 100 236, 400 259, 700 225 C 950 197, 1150 242, 1620 203",
      ],
      secondary: [
        "M -200 225 C 60 225, 140 146, 320 146 C 470 146, 500 214, 660 214 C 810 214, 850 124, 1030 124 C 1180 124, 1220 191, 1420 191 C 1520 191, 1560 169, 1600 169",
        "M -200 146 C 100 146, 180 214, 380 214 C 560 214, 600 124, 800 124 C 980 124, 1020 203, 1220 203 C 1380 203, 1420 169, 1600 169",
      ],
      foreground:
        "M -120 285 C 150 225, 480 195, 700 195 C 920 195, 1250 225, 1520 285",
      lower:
        "M -160 308 C 100 263, 550 240, 700 240 C 850 240, 1300 263, 1560 308",
      diagLeft: "M -60 315 L 260 23",
      diagRight: "M 1460 23 L 1140 315",
      gridLine: "M 40 265 C 400 281, 900 281, 1360 265",
      dots: [
        [120, 269, 1.6, 0.5], [210, 272, 1.1, 0.35], [320, 277, 2.0, 0.6],
        [430, 279, 1.3, 0.4], [540, 281, 1.7, 0.55], [650, 283, 1.0, 0.3],
        [780, 281, 2.2, 0.65], [900, 280, 1.2, 0.38], [1020, 276, 1.8, 0.5],
        [1140, 274, 1.1, 0.33], [1260, 268, 2.0, 0.58], [1340, 266, 1.4, 0.42],
      ],
    },
  },
  mobile: {
    viewBox: "0 0 900 380",
    aspectRatio: "900 / 380",
    // Wider off-canvas buffer than the desktop layout (proportionally to
    // card width) so a card has room to fully leave the frame before it
    // would otherwise be hard-clipped by the section edge.
    mainPath:
      "M -260 182 C -60 182, 60 91, 190 91 C 300 91, 320 160, 440 160 C 550 160, 580 68, 700 68 C 780 68, 800 129, 900 129 C 1000 129, 1060 114, 1160 114",
    connector: 26,
    decor: {
      bgCurves: [
        "M -260 46 C 100 46, 200 23, 450 23 C 650 23, 750 53, 1160 53",
      ],
      ribbons: [
        "M -260 213 C 40 213, 80 122, 220 122 C 340 122, 360 198, 480 198 C 600 198, 620 106, 740 106 C 840 106, 880 182, 1160 167",
      ],
      secondary: [
        "M -260 228 C 40 228, 90 144, 220 144 C 340 144, 360 213, 480 213 C 600 213, 620 122, 740 122 C 820 122, 840 182, 1160 182",
      ],
      foreground:
        "M -120 340 C 100 290, 320 270, 450 270 C 580 270, 800 290, 1020 340",
      lower: null,
      diagLeft: null,
      diagRight: null,
      gridLine: null,
      dots: [
        [90, 320, 1.2, 0.4], [220, 305, 1.6, 0.5], [340, 295, 1.0, 0.32],
        [460, 293, 1.8, 0.55], [580, 297, 1.1, 0.35], [700, 308, 1.5, 0.45],
        [820, 322, 1.0, 0.3],
      ],
    },
  },
};

const LOOP_DURATION = 22;
const SAMPLE_STEP = 6;
const MAX_YAW = 22;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toDeg(rad) {
  return rad * (180 / Math.PI);
}

export default function ProcessSection() {
  const pathRef = useRef(null);
  const unitRefs = useRef([]);
  const cardRefs = useRef([]);
  const wrapperRef = useRef(null);
  const [layoutKey, setLayoutKey] = useState("desktop");
  const layout = LAYOUTS[layoutKey];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const update = () => setLayoutKey(mq.matches ? "mobile" : "desktop");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return undefined;

    const total = path.getTotalLength();
    const [viewW, viewH] = layout.viewBox.split(" ").slice(2).map(Number);

    const trackSize = { w: 0, h: 0 };
    const measure = () => {
      const el = wrapperRef.current;
      if (!el) return;
      trackSize.w = el.clientWidth;
      trackSize.h = el.clientHeight;
    };
    let onResize = () => {};
    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => { measure(); onResize(); }) : null;
    if (ro && wrapperRef.current) ro.observe(wrapperRef.current);

    const placeUnit = (index, t) => {
      const unitEl = unitRefs.current[index];
      const cardEl = cardRefs.current[index];
      if (!unitEl || !cardEl) return;

      const wrappedT = ((t % 1) + 1) % 1;
      const len = wrappedT * total;

      const prev = path.getPointAtLength(clamp(len - SAMPLE_STEP, 0, total));
      const cur = path.getPointAtLength(len);
      const next = path.getPointAtLength(clamp(len + SAMPLE_STEP, 0, total));

      const angleIn = Math.atan2(cur.y - prev.y, cur.x - prev.x);
      const angleOut = Math.atan2(next.y - cur.y, next.x - cur.x);
      const pathAngleDeg = toDeg((angleIn + angleOut) / 2);

      let curveDeg = toDeg(angleOut - angleIn);
      if (curveDeg > 180) curveDeg -= 360;
      if (curveDeg < -180) curveDeg += 360;

      // --- Primary 3D effect: rotateY (left/right perspective turn). ---
      // Cards on the left half of the track lean inward toward the
      // center, cards on the right half lean the opposite way, plus a
      // small deterministic per-card character and a dynamic component
      // that responds to the track's local curvature as the card travels.
      const positionalYaw = clamp((0.5 - cur.x / viewW) * 34, -17, 17);
      const bias = CARD_YAW_BIAS[index % CARD_YAW_BIAS.length];
      const dynamicYaw = clamp(curveDeg * 0.3, -8, 8);
      const yaw = clamp(positionalYaw + bias + dynamicYaw, -MAX_YAW, MAX_YAW);

      // --- Secondary: rotateZ only carries a small path-following tilt. ---
      const rotateZ = clamp(pathAngleDeg * 0.15, -4, 4);

      // --- rotateX: subtle extra depth on strong curves. ---
      const rotateX = clamp(-Math.abs(Math.sin((angleOut - angleIn) / 2)) * 5 - 1, -6, 0);

      // --- Depth separation + gentle scale breathing. ---
      const depth = (0.5 - cur.y / viewH) * 30 + (MAX_YAW - Math.abs(yaw)) * 0.5;
      const scale = clamp(1 - Math.abs(yaw) / 260, 0.95, 1.02);

      const { w: trackW, h: trackH } = trackSize;
      unitEl.style.transform =
        `translate3d(${((cur.x / viewW) * trackW).toFixed(1)}px, ${((cur.y / viewH) * trackH).toFixed(1)}px, 0)`;
      const z = String(100 + Math.round(depth));
      if (unitEl.style.zIndex !== z) unitEl.style.zIndex = z;

      cardEl.style.transform =
        `translate(-50%, calc(-1 * var(--connector-h) - 100%)) ` +
        `rotateX(${rotateX}deg) rotateY(${yaw}deg) rotateZ(${rotateZ}deg) ` +
        `translateZ(${depth}px) scale(${scale})`;

      const leanRatio = yaw / MAX_YAW;
      cardEl.style.setProperty("--edge-l", (0.14 - leanRatio * 0.12).toFixed(3));
      cardEl.style.setProperty("--edge-r", (0.14 + leanRatio * 0.12).toFixed(3));
      cardEl.style.setProperty("--shadow-x", `${(-leanRatio * 12).toFixed(1)}px`);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const placeStatic = () => STEPS.forEach((_, i) => placeUnit(i, i / STEPS.length + 0.06));
      placeStatic();
      onResize = placeStatic;
      return () => ro && ro.disconnect();
    }

    const tick = (time) => {
      const progress = (time % LOOP_DURATION) / LOOP_DURATION;
      STEPS.forEach((_, i) => placeUnit(i, progress + i / STEPS.length));
    };

    // Only animate while the section is on screen; sampling the SVG path
    // every frame off-screen is the main source of main-thread time.
    const root = wrapperRef.current ?? path;
    tick(gsap.ticker.time); // initial placement while paused
    onResize = () => tick(gsap.ticker.time);
    let running = false;
    const start = () => {
      if (running) return;
      running = true;
      gsap.ticker.add(tick);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      gsap.ticker.remove(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return () => {
        ro && ro.disconnect();
        stop();
      };
    }

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "200px 0px" }
    );
    io.observe(root);
    return () => {
      io.disconnect();
      ro && ro.disconnect();
      stop();
    };
  }, [layout]);

  return (
    <section className={styles.wrapper} aria-labelledby="process-title">
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />

      <div className={styles.header}>
        <h2 id="process-title" className={styles.title}>
          From Ideas to <span className={styles.accent}>Impact</span>
        </h2>
        <p className={styles.subtitle}>
          We combine strategy, technology and creativity to deliver IT
          solutions that drive real business growth.
        </p>
      </div>

      <div
        ref={wrapperRef}
        className={styles.track}
        style={{ aspectRatio: layout.aspectRatio }}
      >
        <svg
          className={styles.svg}
          viewBox={layout.viewBox}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {layout.decor.bgCurves.map((d, i) => (
            <path key={`bg-${i}`} d={d} className={styles.bgCurve} />
          ))}

          {layout.decor.ribbons.map((d, i) => (
            <path key={`ribbon-${i}`} d={d} className={styles.ribbon} />
          ))}

          {layout.decor.diagLeft && (
            <path d={layout.decor.diagLeft} className={styles.diagonal} />
          )}
          {layout.decor.diagRight && (
            <path d={layout.decor.diagRight} className={styles.diagonal} />
          )}

          {layout.decor.secondary.map((d, i) => (
            <path key={`secondary-${i}`} d={d} className={styles.secondaryCurve} />
          ))}

          {/* Primary card track — the ONLY path used for card positioning */}
          <path
            ref={pathRef}
            d={layout.mainPath}
            className={styles.pathGlowLarge}
          />
          <path d={layout.mainPath} className={styles.pathGlowMedium} />
          <path d={layout.mainPath} className={styles.pathCore} />

          {layout.decor.foreground && (
            <>
              <path d={layout.decor.foreground} className={styles.foregroundGlowLarge} />
              <path d={layout.decor.foreground} className={styles.foregroundGlowMedium} />
              <path d={layout.decor.foreground} className={styles.foregroundCore} />
            </>
          )}

          {layout.decor.lower && (
            <path d={layout.decor.lower} className={styles.lowerArc} />
          )}

          {layout.decor.gridLine && (
            <path d={layout.decor.gridLine} className={styles.gridLine} />
          )}

          {layout.decor.dots.map(([cx, cy, r, op], i) => (
            <circle
              key={`dot-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              className={styles.gridDot}
              style={{
                "--dot-op": op,
                animationDelay: `${((i * 0.6) % 4).toFixed(2)}s`,
                animationDuration: `${3.4 + (i % 4) * 0.5}s`,
              }}
            />
          ))}
        </svg>

        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              ref={(el) => (unitRefs.current[index] = el)}
              className={styles.trainUnit}
              style={{ "--connector-h": `${layout.connector}px` }}
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconTile}>
                    <Icon size={16} strokeWidth={2.2} />
                  </span>
                  <span className={styles.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
              <span className={styles.connector} aria-hidden="true" />
              <span className={styles.node} aria-hidden="true" />
            </div>
          );
        })}
      </div>

      <div className={styles.ctaRow}>
        <Link
          href="/contact#contact-form"
          className={styles.cta}
          aria-label="Learn about our process"
        >
          <span>Our Process</span>
          <span className={styles.ctaIcon} aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </div>
    </section>
  );
}
