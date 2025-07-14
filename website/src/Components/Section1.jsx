import Cards from "./Cards";
import style from "./Section1.module.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const Section1 = () => {
  const cardData = [
    {
      title: "Cleantel Elite Cleaning Service",
      description:
        "We offer personalized premium cleaning solutions for both residential and commercial properties.",
      image: img1,
    },
    {
      title: "Corporate Contract Cleaning Services",
      description:
        "We provide reliable, efficient, and tailored cleaning solutions to keep your workspace immaculate.",
      image: img2,
    },
    {
      title: "Hourly Cleaning Service Sharjah",
      description:
        "Experience tailored hourly cleaning services in Sharjah, guaranteeing your space remains pristine.",
      image: img3,
    },
    {
      title: "Disinfection Services Sharjah",
      description:
        "Our Cleantel disinfectant experts meet with you individually to identify the most critical areas of your facility.",
      image: img4,
    },
    {
      title: "CEILING GAP VACCUMING",
      description:
        "Enhance your indoor air quality; remove dust and allergens with our ceiling gap vacuuming services.",
      image: img5,
    },
    {
      title: "Outdoor Cleaning Services",
      description:
        "Searching for kitchen cleaning in Dubai? Deep kitchen cleaning services now available in Dubai with Cleantel. Book Your kitchen cleaning Today",
      image: img6,
    },
    {
      title: "Cleantel Elite Cleaning Service",
      description:
        "We offer personalized premium cleaning solutions for both residential and commercial properties.",
      image: img7,
    },
    {
      title: "Corporate Contract Cleaning Services",
      description:
        "We provide reliable, efficient, and tailored cleaning solutions to keep your workspace immaculate.",
      image: img8,
    },
    {
      title: "Hourly Cleaning Service Sharjah",
      description:
        "Experience tailored hourly cleaning services in Sharjah, guaranteeing your space remains pristine.",
      image: img9,
    },
    {
      title: "CURTAIN VACUUMING & STEAM SANITIZATION",
      description:
        "Curtain Vacuuming CURTAIN VACUUMING & STEAM SANITIZATION It is a two-stage process which involves high suction vacuuming and steam sanitization which",
      image: img10,
    },
    {
      title: "Home Cleaning Services",
      description:
        "Avail unmatched cleaning services designed to create a pristine and welcoming living space for you.",
      image: img11,
    },
    {
      title: "KITCHEN CLEANING",
      description:
        "Deep kitchen cleaning  is easier said than done. In order to keep your home hygienic and free from pest, frequent cleaning and steam.",
      image: img12,
    },
  ];

  return (
    <div className={style.section1}>
      <div className={style.heading}>
        Professional Cleaning Services in Sharjah, UAE.
      </div>
      <Cards cardData={cardData} />
    </div>
  );
};

export default Section1;
