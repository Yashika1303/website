import { FiArrowUpRight } from "react-icons/fi";
const Card = ({ title, description, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
        width: "430px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: "16px",
        margin: "1rem",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          backgroundColor: "#d70c00",
          color: "#ffffff",
          padding: "1.5rem",
          borderRadius: "12px",
          width: "80%",
          maxWidth: "400px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",

          alignItems: "flex-start",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <h5
          style={{
            fontSize: "20px",
            marginBottom: "1.3rem",
            textAlign: "left",
          }}
        >
          {title}
        </h5>
        <p
          style={{
            fontSize: "16px",
            paddingBottom: "1rem",
            textAlign: "left",
          }}
        >
          {description}
        </p>
        <a
          href="#"
          style={{
            backgroundColor: "#d70c00",
            color: "#ffffff",
            border: "2px solid #ffffff",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            alignSelf: "flex-start",
          }}
        >
          Book Now <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
};
export default Card;
