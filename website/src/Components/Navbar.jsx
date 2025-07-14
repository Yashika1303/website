import React, { useState } from "react";
import style from "./Navbar.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={style.nav}>
        <div className={style.logo}></div>

        {/* Desktop Menu */}
        <div className={style.opt}>
          <div className={style.other}>
            <a>Home</a>
          </div>
          <div className={style.other}>
            <a>About</a>
          </div>
          <div className={style.other}>
            <a>
              Services <FiArrowUpRight />
            </a>
          </div>
          <div className={style.other}>
            <a>Testimonials</a>
          </div>
          <div className={style.other}>
            <a>Blogs</a>
          </div>
          <div className={style.other}>
            <a>FAQ</a>
          </div>
          <div className={style.other}>
            <a>Careers</a>
          </div>
          <div className={style.other}>
            <a>Contact</a>
          </div>
        </div>

        <div className={style.quote}>Get a Quote</div>

        {/* Hamburger Icon */}
        <div className={style.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={style.mobileMenu}>
          <div>
            <a>Home</a>
          </div>
          <div>
            <a>About</a>
          </div>
          <div>
            <a>
              Services <FiArrowUpRight />
            </a>
          </div>
          <div>
            <a>Testimonials</a>
          </div>
          <div>
            <a>Blogs</a>
          </div>
          <div>
            <a>FAQ</a>
          </div>
          <div>
            <a>Careers</a>
          </div>
          <div>
            <a>Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
