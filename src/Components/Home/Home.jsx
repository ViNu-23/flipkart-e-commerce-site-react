import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaCircleChevronRight } from "react-icons/fa6";
import data from "../../DataBase/Data";
import { Link } from "react-router-dom";
import { FaShopLock } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  const imageLinks = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a05f4b3d67f2b16c.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a787505b979e7579.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/830b0b3bff28e292.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3a78fc043a9f7531.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d96318f16c153aa.jpeg?q=20",
  ];
  const dataDisplay = data.slice(0, 4);
  const dataDisplayTwo = data.slice(12, 20);
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
            className="d-block w-100 custom-img"
            src={imageLink}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>

      <h2>
        Recommended <FaCircleChevronRight className="left-arrow" />
      </h2>
      <div className="items-container">
        {dataDisplay.map((item, index) => (
          <div key={index} id={item.id} className="items-home">
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
              <button type="button" className="btn btn-dark button59">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <h2>
        New Products <FaCircleChevronRight className="left-arrow" />
      </h2>
      <div className="items-container" style={{justifyContent:'space-evenly'}}>
        {dataDisplayTwo.map((item, index) => (
          <div key={index} id={item.id} className="items-home" style={{margin:'5px'}}>
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
              <button type="button" className="btn btn-dark button59">
                Know More
              </button>
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
                <FaFacebookSquare style={{height:'18px',width:'18px',marginRight:'5px'}} /> Facebook
              </li>
              <li>
                <BsTwitterX style={{height:'16px',width:'16px',marginRight:'5px'}}/> Twitter
              </li>
              <li>
                <SiInstagram style={{height:'16px',width:'16px',marginRight:'5px'}}/> Instagram
              </li>
            </ul>
          </div>
        </div>
        

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #fff',padding: '15px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <FaShopLock style={{ color: '#FFC200' }} />
    <span style={{ marginLeft: '5px' }}>Become a Seller</span>
  </div>

  <div className="c4gehN" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <RiAdvertisementFill style={{ color: '#FFC200' }} />
    <span style={{ marginLeft: '5px' }}>Advertise</span>
  </div>

  <div className="c4gehN" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <FaGift style={{ color: '#FFC200' }} />
    <span style={{ marginLeft: '5px' }}>Gift Cards</span>
  </div>

  <div className="c4gehN" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <IoMdHelpCircle style={{ color: '#FFC200' }} />
    <span style={{ marginLeft: '5px' }}>Help Center</span>
  </div>
</div>



        <div style={{display:'flex',justifyContent:'center',width:'100%',padding:'10px'}}>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
              alt="Payment methods"
              style={{width:'100%'}}
            />
          </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your E-Commerce Store. All Rights Reserved. Build with ❤️ by <Link style={{textDecoration:'none',color:'#FFC200'}} to={"https://github.com/ViNu-23"}>ViNu23</Link></p>
        </div>
      </footer>
    </>
  );
}
