import Reveal from "@/components/ui/Reveal/Reveal";
import Image from "next/image";
import styles from "./Showcase.module.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Showcase() {
  const images = [
    "https://images.unsplash.com/photo-1546664619-59fa16307fcb?w=600&q=80",
    "https://images.unsplash.com/photo-1642164734745-8f0be579d917?w=600&q=80",
    "https://images.unsplash.com/photo-1591535769142-60e951663676?w=600&q=80",
    "https://images.pexels.com/photos/29304327/pexels-photo-29304327.jpeg?auto=compress&w=600",
    "https://images.unsplash.com/photo-1546664619-59fa16307fcb?w=600&q=80",
    "https://images.unsplash.com/photo-1642164734745-8f0be579d917?w=600&q=80",
    "https://images.unsplash.com/photo-1591535769142-60e951663676?w=600&q=80",
    "https://images.pexels.com/photos/29304327/pexels-photo-29304327.jpeg?auto=compress&w=600",
  ];

  // Double the images for infinite marquee effect
  const marqueeImages = [...images, ...images];

  return (
    <section className={styles.showcase}>
      <div className={styles.header}>
        <Reveal as="h1" y={20} duration={0.8}>
          Let's Build What's Next
        </Reveal>
        <Reveal as="p" y={20} duration={0.8} delay={0.1}>
          Whether you're launching a new idea or scaling an existing product, we
          design and develop solutions that move your business forward —
          strategically, creatively, and efficiently.
        </Reveal>
        
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <Reveal className={styles.ctaWrapper} y={20} duration={0.6} delay={0.2}>
            <div className={styles.arrowRight}>
              <ArrowRight size={18} />
            </div>
            <span className={styles.cta}>Start Your Project</span>
          </Reveal>
        </Link>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.sliderRow}>
          {marqueeImages.map((src, i) => (
            <div key={i} className={styles.card}>
              <Image
                src={src}
                alt={`Palqar featured project ${i + 1}`}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 900px) 200px, 280px"
                style={{ objectFit: "cover" }}
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
