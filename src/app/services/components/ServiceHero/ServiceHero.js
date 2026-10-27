import styles from "./ServiceHero.module.css";
import Image from "next/image";

export default function ServiceHero({ data }) {
  return (
    <section className={styles.hero}>

      {/* Background Image */}
      <div className={styles.bg}>
        <Image
          src={data.image}
          alt={data.imageAlt ?? data.title}
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {data.title}
        </h1>
      </div>

    </section>
  );
}