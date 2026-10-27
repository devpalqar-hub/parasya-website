import styles from "./DownloadCTASection.module.css";
import Image from "next/image";
import { Apple, Play } from "lucide-react";

export default function DownloadCTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.left}>
          <span>BOOK HOSPITAL APPOINTMENTS IN 2 MINUTES</span>

          <h2>
            Download Zodo <br /> AI Now
          </h2>

          <div className={styles.buttons}>
            <button>
              <Apple size={18} /> App Store
            </button>

            <button>
              <Play size={18} /> Google Play
            </button>
          </div>
        </div>

        {/* QR */}

        <div className={styles.qr}>
          <Image
            src="/featured-projects/zodo/qrcode.png"
            alt="Scan to download Zodo AI"
            width={140}
            height={140}
            className={styles.qrImage}
          />
        </div>
      </div>
    </section>
  );
}
