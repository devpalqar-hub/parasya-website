
import Link from "next/link";
import styles from "./services.module.css";
import Reveal from "@/components/ui/Reveal/Reveal";

export default function ServicesClient({ services }) {
  return (
    <section className={styles.listSection}>
      {services.map((service, index) => (
        <Reveal 
          key={index} 
          className={styles.listItem}
          y={50}
          duration={0.8}
        >
          <div className={styles.itemLeft}>
            <span className={styles.cardNum}>({service.num})</span>
            <div className={styles.itemTextContent}>
              <h2 className={styles.title}>{service.title}</h2>
              <p className={styles.desc}>{service.desc}</p>
            </div>
          </div>
          
          <div className={styles.itemRight}>
            <ul className={styles.list}>
              {service.items.map((item, i) => (
                <li key={i} className={styles.listItemInner}>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <Link href={item.path}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>

            <Link href={service.link} className={styles.exploreLink}>
              {service.linkText} →
            </Link>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
