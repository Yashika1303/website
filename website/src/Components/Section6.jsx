import React, { useEffect, useRef, useState } from "react";
import styles from "./Section6.module.css";
import girlImage from "../assets/girlImage.webp";
import { useInView } from "react-intersection-observer";

const Section6 = () => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const end = 44;
      const duration = 1000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * end);
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView]);

  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.imageContainer}>
        <img src={girlImage} alt="Cleaning Lady" className={styles.image} />

        <div className={styles.experienceCard}>
          <div className={styles.star}>✨</div>
          <div className={styles.years}>
            <span className={styles.count}>{count}</span>
            <span className={styles.label}>Years of Experience</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.heading}>Value for Money</h2>
        <p className={styles.subheading}>
          Quality cleaning that fits your budget
        </p>
        <button className={styles.ctaButton}>Book an Appointment</button>
      </div>
    </div>
  );
};

export default Section6;
