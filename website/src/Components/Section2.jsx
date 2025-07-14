import React from "react";
import image1 from "../assets/section2img-1.webp";
import image2 from "../assets/section2img-2.webp";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.label}>ABOUT US</p>

        <div className={styles.topRow}>
          <h2 className={styles.heading}>
            Elevating Cleanliness <br /> to Perfection
          </h2>
          <p className={styles.description}>
            Cleantel offers Professional Cleaners and the <br />
            Best Biodegradable Cleaning Products.
          </p>
        </div>

        <div className={styles.imagesRow}>
          <img
            src={image1}
            alt="Cleaner"
            className={`${styles.image} ${styles.imageSmall}`}
          />
          <img
            src={image2}
            alt="Cleaning tools"
            className={`${styles.image} ${styles.imageLarge}`}
          />
        </div>

        <div className={styles.cardSection}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Professional & Reliable</h3>
            <p className={styles.cardText}>
              Tellus aliquam faucibus imperdiet eget interdum risus diam neque
              lectus.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Flexible Scheduling</h3>
            <p className={styles.cardText}>
              Tellus aliquam faucibus imperdiet eget interdum risus diam neque
              lectus.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Attention to Detail</h3>
            <p className={styles.cardText}>
              Tellus aliquam faucibus imperdiet eget interdum risus diam neque
              lectus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
