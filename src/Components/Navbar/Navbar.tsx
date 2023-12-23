import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { React, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };
  const titleClassName = clickCount > 5 ? "glowing-title" : "";
  return (
    <nav className="nav-bar">
      <div className="left-nav-section">
        <Link to="https://github.com/ViNu-23">
          <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png' className="flipkart-logo" />
        </Link>
      </div>

      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar1 ${isMenuOpen ? "rotate-down" : ""}`}></div>
        <div className={`bar2 ${isMenuOpen ? "hidden" : ""}`}></div>
        <div className={`bar3 ${isMenuOpen ? "rotate-up" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="li">
          <Link to="/" className="nav-links-rm">
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="/Product" className="nav-links-rm">
            Product
          </Link>
        </li>
        <li className="li">
          <Link to="/Cart" className="nav-links-rm"> <FaCartShopping className="icon-cart" />
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
