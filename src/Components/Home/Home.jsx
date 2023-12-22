import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import data from "../../DataBase/Data";

import { Link } from "react-router-dom";

export default function Home() {
  const imageLinks = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a05f4b3d67f2b16c.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a787505b979e7579.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/830b0b3bff28e292.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3a78fc043a9f7531.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d96318f16c153aa.jpeg?q=20",
  ];
  const dataDisplay = data.slice(0, 12);
  return (
    <>
      <Navbar />
      <div className="category">
        <div className="category-items">
          <img
            alt="Grocery"
            src="https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
          ></img>
          <p>Grocery</p>
        </div>
        <div className="category-items">
          <img
            alt="Mobiles"
            src="https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
          ></img>
          <p>Mobiles</p>
        </div>
        <div className="category-items">
          <img
            alt="Fashion"
            src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100"
          ></img>
          <p>Fashion</p>
        </div>
        <div className="category-items">
          <img
            alt="Electronics"
            src="https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100"
          ></img>
          <p>Electronics</p>
        </div>
        <div className="category-items">
          <img
            alt="Furniture"
            src="https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100"
          ></img>
          <p>Furniture</p>
        </div>
        <div className="category-items">
          <img
            alt="Appliances"
            src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100"
          ></img>
          <p>Appliances</p>
        </div>
        <div className="category-items">
          <img
            alt="Travel"
            src="https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100"
          ></img>
          <p>Travel</p>
        </div>

        <div className="category-items">
          <img
            alt="Two Wheelers"
            src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100"
          ></img>
          <p>Two Wheelers</p>
        </div>
        <div className="category-items">
          <img
            alt="Beauty, Toys &amp; More"
            src="https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100"
          ></img>
          <p>Toys</p>
        </div>
      </div>

      <Carousel indicators={false} className="carousel">
        {imageLinks.map((imageLink, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imageLink}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <h2>New Products</h2>
      <div className="items-container">
        {dataDisplay.map((item, index) => (
          <div key={index} id={item.id} className="items-home">
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
                
             <button type="button" className="btn btn-dark button59">Know More</button>
            </Link>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
              <li>Kids' Clothing</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Help & Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect with Us</h4>
            <ul>
              <li>
                <FaFacebook /> Facebook
              </li>
              <li>
                <BsTwitterX /> Twitter
              </li>
              <li>
                <SiInstagram /> Instagram
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-two">
          <div className="footer-content">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              alt="Become a Seller"
              width="13"
              height="12"
            />

            <span>Become a Seller</span>
          </div>

          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
              alt="Advertise"
              width="14"
              height="14"
            />

            <span>Advertise</span>
          </div>

          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              alt="Gift Cards"
              width="13"
              height="13"
            />
            <span>Gift Cards</span>
          </div>

          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              alt="Help Center"
              width="13"
              height="13"
            />
            <span>Help Center</span>
          </div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt="Payment methods"
            className="payment"
          />
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your E-Commerce Store. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
