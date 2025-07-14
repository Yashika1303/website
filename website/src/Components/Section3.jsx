import GirlImg from "../assets/Section3img.webp";
import styles from "./Section3.module.css";

const Section3 = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>
          We Are Very Experienced In <br />
          Cleaning Services
        </h2>
        <p>
          <a href="#" className={styles.brand}>
            Cleantel
          </a>
          , the premier cleaning company in Sharjah, UAE, takes care of
          everything whilst you relax and take pleasure in knowing that your
          home and office are clean, fresh, and tidy, giving you the free time
          to enjoy the finer things in life with your family and friends.
        </p>
      </div>

      <ul className={styles.features}>
        <li>
          <span className={styles.tick}>✓</span>Trustworthy Cleaning Staff
        </li>
        <li>
          <span className={styles.tick}>✓</span>360º Cleaning Services
        </li>
        <li>
          <span className={styles.tick}>✓</span>Medial Grade UV Sanitization
        </li>
        <li>
          <span className={styles.tick}>✓</span>Book Online
        </li>
        <li>
          <span className={styles.tick}>✓</span>No hidden Cost
        </li>
      </ul>

      <img src={GirlImg} alt="Cleaning professional" className={styles.girl} />
    </div>
  </section>
);

export default Section3;
