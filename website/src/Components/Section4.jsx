import React, { useRef, useEffect } from "react";
import styles from "./Section4.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaCheckCircle } from "react-icons/fa";

import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Bency Fernandes",
    date: "2024‑12‑01",
    avatar: "https://i.pravatar.cc/120?img=65",
    comment:
      "I had a great experience with this cleaning service! Salauddin, Suman and Sajjid were professional, thorough, and efficient.",
  },
  {
    name: "Athulya A",
    date: "2024‑11‑23",
    avatar: "https://i.pravatar.cc/120?img=47",
    comment:
      "Awesome service. We had our kitchen cleaned today by Mr. Shiva and Mr. Wahidullah. Both did a wonderful job and were very polite.",
  },
  {
    name: "Renju Raveendran",
    date: "2024‑11‑21",
    avatar: "https://i.pravatar.cc/120?img=12",
    comment:
      "James, Sajad, Mojib have done a good job. They were punctual and worked with dedication. Highly recommended.",
  },
  {
    name: "Naim Suthar",
    date: "2024‑11‑20",
    avatar: "https://i.pravatar.cc/120?img=31",
    comment:
      "Professional, helpful and good quality. Booked 2‑BHK deep cleaning just 1 day prior. Their booking process was smooth and customer support was responsive.",
  },
  {
    name: "Suresh G",
    date: "2024‑11‑19",
    avatar: "https://i.pravatar.cc/120?img=65",
    comment: "Salauddin James hidauellah",
  },
  {
    name: "Lijo Mammen",
    date: "2024‑11‑15",
    avatar: "https://i.pravatar.cc/120?img=47",
    comment:
      "Highly recommend cleaning service. Great cleaning Service received from Mr. Salauddin, Mr. James and Mr. Sumal. Thanks to Mr. Riyaz also.",
  },
];

const Section4 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const enableLoop = reviews.length > 1;

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [reviews.length]);

  return (
    <section
      id="section4"
      className={`${styles.testimonialSection} ${styles.section}`}
    >
      <div className={styles.headerRow}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.title}>
            <span>What clients say about</span>
            <br />
            <span>our cleaning services!</span>
          </h2>
          <p className={styles.subtitle}>
            They are satisfied with our services
          </p>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <button ref={prevRef} className={`${styles.navBtn} ${styles.prevBtn}`}>
          <FaChevronLeft />
        </button>
        <button ref={nextRef} className={`${styles.navBtn} ${styles.nextBtn}`}>
          <FaChevronRight />
        </button>

        <div className={`${styles.fade} ${styles.fadeLeft}`} />
        <div className={`${styles.fade} ${styles.fadeRight}`} />

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={enableLoop}
          speed={600}
          spaceBetween={24}
          slidesPerView={Math.min(4, reviews.length)}
          slidesPerGroup={1}
          breakpoints={{
            1024: { slidesPerView: Math.min(4, reviews.length) },
            768: { slidesPerView: Math.min(2, reviews.length) },
            0: { slidesPerView: 1 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className={styles.swiper}
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <article className={`${styles.card} ${styles.cardHover}`}>
                <header className={styles.cardHeader}>
                  <img src={r.avatar} alt={r.name} className={styles.avatar} />
                  <div>
                    <h3 className={styles.reviewer}>{r.name}</h3>
                    <time className={styles.date}>{r.date}</time>
                  </div>
                </header>

                <div className={styles.starsRow}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <FaStar key={j} />
                    ))}
                  </div>
                  <FaCheckCircle className={styles.tickIcon} />
                </div>

                <p className={styles.comment}>{r.comment}</p>
                <button className={styles.readMore}>Read more</button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section4;
