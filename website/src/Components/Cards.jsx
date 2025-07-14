import React, { useState, useEffect } from "react";
import Card from "./Card";
import style from "./Cards.module.css";

const Cards = ({ cardData }) => {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width <= 576) setCardsPerPage(1);
      else if (width <= 992) setCardsPerPage(2);
      else setCardsPerPage(3);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const currentCards = cardData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className={style.wrapper}>
      <div className={style.cardRow}>
        {currentCards.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
      <div className={style.dots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${
              index === currentPage ? style.active : ""
            }`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
