import style from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.content}>
        <div style={{ color: "#d70c00", fontSize: "16px", fontWeight: "500" }}>
          Quality cleaning at a fair price.
        </div>
        <div className={style.heading}>
          <div>Pristine Cleaning</div>
          <div>Services Since 1980</div>
        </div>
        <div style={{ height: "30px", marginTop: "0.5%" }}>
          <span
            style={{
              backgroundColor: "#a9a2a2ff",
              width: "500px",
              fontSize: "16px",
              paddingTop: "0.2%",
              paddingBottom: "0.2%",
            }}
          >
            Revitalize Your Space with Our Expert cleaning Services
          </span>
        </div>

        <div className={style.btn}>
          <a>Book an Appointment</a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
