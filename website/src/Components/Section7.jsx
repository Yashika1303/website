import React, { useState, useEffect } from "react";
import styles from "./Section7.module.css";

const videos = [
  {
    img: "https://cleantel.me/wp-content/uploads/2024/12/Sofa-Cleaning.png",
    link: "https://www.youtube.com/watch?v=video1",
  },
  {
    img: "https://cleantel.me/wp-content/uploads/2024/12/Steam-Cleaning-Service.png",
    link: "https://www.youtube.com/watch?v=video2",
  },
  {
    img: "https://cleantel.me/wp-content/uploads/2024/12/Mattress-Cleaning.png",
    link: "https://www.youtube.com/watch?v=video3",
  },
  {
    img: "https://cleantel.me/wp-content/uploads/2024/12/Frequently-Dust-Strom.png",
    link: "https://www.youtube.com/watch?v=video4",
  },
];

export default function Section7() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const getVisibleVideos = () => [
    videos[(current + 0) % videos.length],
    videos[(current + 1) % videos.length],
    videos[(current + 2) % videos.length],
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.sparkling}>
            Sparkling <span className={styles.icon}>✦</span>
          </div>
          <div className={styles.cleanSpaces}>Clean Spaces</div>
        </div>
        <div className={styles.videoHeading}>
          Videos of Our Cleaning Services
        </div>
      </div>

      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={prev}>
          ❮
        </button>

        {getVisibleVideos().map((video, index) => {
          let tiltClass = styles.skewCenter;
          if (index === 0) tiltClass = styles.skewLeft;
          if (index === 2) tiltClass = styles.skewRight;

          return (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.videoCard} ${tiltClass}`}
            >
              <img src={video.img} alt="Cleaning video" />
              <div className={styles.playBtn}>▶</div>
            </a>
          );
        })}

        <button className={styles.arrow} onClick={next}>
          ❯
        </button>
      </div>
    </section>
  );
}
