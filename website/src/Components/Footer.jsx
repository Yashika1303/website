import React from "react";
import styles from "./Footer.module.css";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import logo from "../assets/Logo.png";
import dac from "../assets/dac.webp";
import ionic from "../assets/ionic.webp";
import remuve from "../assets/remuve.webp";
import serviceprovider from "../assets/serviceprovider.webp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <img src={logo} alt="Cleantel Logo" className={styles.logo} />
          <p className={styles.desc}>
            We have over 40 years of commercial cleaning experience. The name
            Cleantel was coined from ‘Clean Telephone’ since this was the
            initial service provided by the company.
          </p>
          <div className={styles.socialIcons}>
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaWhatsapp />
          </div>
        </div>

        <div className={styles.column}>
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>FAQ</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li>Disinfection Services Dubai</li>
            <li>Surface Sanitization Dubai</li>
            <li>Home Sanitization Dubai</li>
            <li>Move In Move Out Cleaning Dubai</li>
            <li>Ceiling Gap Vacuuming Dubai</li>
            <li>Sofa Cleaning Services in Dubai</li>
            <li>Mattress Cleaning Dubai</li>
            <li>KITCHEN CLEANING DUBAI</li>
            <li>Cleaning Services Dubai</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact</h4>
          <address>
            G1, Bldg 139, Ibrahim Moham-med <br />
            Al Midfa Street - Al Manakh -<br />
            Sharjah, United Arab Emirates
          </address>
          <p>M: +971 50 646 9260</p>
          <p>E: info@cleantel.me</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.certifications}>
          <img src={dac} alt="DAC" style={{ width: "73px", height: "69px" }} />
          <img
            src={ionic}
            alt="Ionic"
            style={{ width: "83px", height: "39px" }}
          />
          <img
            src={remuve}
            alt="Remuve"
            style={{ width: "90px", height: "33px" }}
          />
          <img
            src={serviceprovider}
            alt="Approved Service"
            style={{ width: "68px", height: "67px" }}
          />
        </div>
        <p className={styles.copy}>
          Copyright © 2025 Cleantel cleaning services | Powered by Cleantel
          cleaning services
        </p>
      </div>
    </footer>
  );
}
