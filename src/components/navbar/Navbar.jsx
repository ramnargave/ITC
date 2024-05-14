// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Navbar.css";
import BannerImg from "../../assets/img/training.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={BannerImg} alt="" />

      <nav ref={navRef}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/">
              Services <RiArrowDropDownLine />
            </a>
            <ul id="submenu">
              <li>
                <a href="#">Traning</a>
              </li>
              <li>
                <a href="#">Testing</a>
              </li>
              <li>
                <a href="#">Reasearch & Development</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#/">Products</a>
          </li>
          <li>
            <a href="#/">Category</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
        </ul>

        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn ">
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
