
import Reveal from "@/components/ui/Reveal/Reveal";
import Image from "next/image";
import styles from "./Industries.module.css";

export default function IndustriesClient({ industriesData }) {
    return (
        <div className={styles.listContainer}>
            {industriesData.map((industry) => (
                <Reveal
                    key={industry.id}
                    className={styles.listItem}
                    y={50}
                    duration={0.8}
                >
                        {/* LEFT */}
                        <div className={styles.itemLeft}>
                            <span className={styles.itemNumber}>({industry.id})</span>

                            <div className={styles.itemTextContent}>
                                <h2 className={styles.itemTitle}>{industry.title}</h2>
                                <p className={styles.itemDescription}>
                                    {industry.description}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className={styles.itemRight}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={industry.image}
                                    alt={industry.alt}
                                    fill
                                    quality={70}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                </Reveal>
            ))}
        </div>
    );
}