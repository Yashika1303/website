import React from "react";
import styles from "./Section5.module.css";

import img1 from "../assets/section5img1.webp";
import img2 from "../assets/section5img2.webp";
import img3 from "../assets/section5img3.webp";
import img4 from "../assets/section5img4.webp";
import img5 from "../assets/section5img5.webp";
import img6 from "../assets/section5img6.webp";
import img7 from "../assets/section5img7.webp";
import img8 from "../assets/section5img8.webp";
import img9 from "../assets/section5img9.webp";
import img10 from "../assets/section5img10.webp";

const clientLogos = [
  { src: img1, alt: "img1" },
  { src: img2, alt: "img2" },
  { src: img3, alt: "img3" },
  { src: img4, alt: "img4" },
  { src: img5, alt: "img5" },
  { src: img6, alt: "img6" },
  { src: img7, alt: "img7" },
  { src: img8, alt: "img8" },
  { src: img9, alt: "img9" },
  { src: img10, alt: "img10" },
];

const Component5 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Clients</h2>
      <p className={styles.subtitle}>
        Properties of Companies we keep Pristine, On Time, Every Time.
      </p>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div className={styles.slide} key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component5;
