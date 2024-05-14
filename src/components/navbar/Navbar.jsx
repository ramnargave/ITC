// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./Navbar.css";
import logo from '../../assets/img/logo.png'
// import BannerImg from "../../assets/img/training.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="" />

      <nav ref={navRef}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
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
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/history">History</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
