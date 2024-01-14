import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import data from "../../DataBase/Data";

const RecomendationProducts = data;

const ProductInfo = ({ data }) => {
  const [productCounts, setProductCounts] = useState({});
  const [alertMessage, setAlertMessage] = useState(null);
  const [checkout, setCheckout] = useState(false);
  const { productId } = useParams();
  const product = data.find((item) => item.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  function minusOne() {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
    }));
  }
  function plusOne() {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  }
  const productCount = productCounts[productId] || 1;

  const addToCart = () => {
    setCheckout(true);
    // Get the existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cartData")) || {};

    // Get the existing information for the current product in the cart
    const existingProductInfo = existingCart[productId] || {
      quantity: 0,
      price: product.newPrice,
      img: product.img,
    };

    // Update the existing product information with the current quantity
    const updatedProductInfo = {
      quantity: existingProductInfo.quantity + productCount,
      price: product.newPrice,
      img: product.img,
    };

    // Check if the product count is greater than zero before adding to the cart
    if (productCount > 0) {
      // Update the cart data with the updated product information
      const updatedCart = {
        ...existingCart,
        [productId]: updatedProductInfo,
      };

      // Store the updated cart data back to localStorage
      localStorage.setItem("cartData", JSON.stringify(updatedCart));

      // Display a success message
      setAlertMessage({
        severity: "success",
        message: `Added ${productCount} ${product.title} to the cart!`,
      });

      // Clear the alert message after 3 seconds
      setTimeout(() => {
        setAlertMessage(null);
      }, 2500);
    }
  };

  return (
    <>
      <Navbar />

      <div className="pro-info" style={{ marginTop: "30px" }}>
        {alertMessage && (
          <Stack sx={{ width: "100%" }} spacing={2} marginBottom={"20px"}>
            <Alert severity={alertMessage.severity}>
              {alertMessage.message}
            </Alert>
          </Stack>
        )}

        <div className="p-img">
          <img src={product.img} alt={product.title} className="prod-img" />
          <span className="p-title">{product.title}</span>
        </div>

        <div className="p-details">
          <div className="p-star">
            <div className="stars">
              <span className="rating">{product.star}</span>
              <span className="rating">{product.star}</span>
              <span className="rating">{product.star}</span>
              <span className="rating">{product.star}</span>
            </div>
            <div>
              <span className="p-review">{product.reviews}</span>
            </div>
          </div>
          <div className="price">
            <span className="previews-price">{product.prevPrice}</span>
            <span className="new-price"> ${product.newPrice}</span>
          </div>
          <div className="pa-info">
            {/* product company name */}
            <span>Company: {product.company}</span>
            <span>Color: {product.color}</span>
            <span>Category: {product.category}</span>
          </div>
          <div className="count-item">
            <button onClick={minusOne} className="cart-value">
              -
            </button>
            {productCount}
            <button onClick={plusOne} className="cart-value">
              +
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <button
              style={{ padding: "10px 25px" }}
              type="button"
              className="btn btn-dark buy-btn"
              onClick={addToCart}
            >
              Add to cart
            </button>
            {checkout && (
              <Link to={"/cart"}>
                <button
                  style={{ padding: "10px 25px" }}
                  type="button"
                  className="btn btn-dark buy-btn"
                >
                  Check Out
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="more-32">
        <Link to={"/product"}>
          <button
            type="button"
            className="btn btn-dark buy-btn re4"
            style={{
              backgroundColor: "#2874f0",
              border: "none",
            }}
          >
            <span style={{ fontSize: "large" }}>Return to Products</span>{" "}
            <FaCircleChevronRight
              style={{
                fontSize: "large",
                marginBottom: "6px",
                marginLeft: "4px",
              }}
            />
          </button>
        </Link>
      </div>
      <h5
        style={{
          margin: "10px 20px",
        }}
      >
        You might be interested in {product.company}
      </h5>
      <div
        className="recByBrand"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {RecomendationProducts.filter(
          (item) =>
            item.company === product.company && item.title !== product.title
        ).map((item, index) => (
          <div key={index} className="items-N" style={{width:'170px'}}>
            <img src={item.img} alt={item.title} className="products-img"  style={{width:'75px',marginTop:'8px'}}/>
            <span className="product-title" style={{fontSize:'12px',textAlign:'justify'}}>{item.title}</span>
            <div className="star">
              <div className="stars">
                <span className="rating">{item.star}</span>
                <span className="rating">{item.star}</span>
                <span className="rating">{item.star}</span>
                <span className="rating">{item.star}</span>
              </div>
              <div>
                <span className="review">{item.reviews}</span>
              </div>
            </div>
            <div className="price">
              <span className="previews-price">{item.prevPrice}</span>
              <span className="new-price"> ${item.newPrice}</span>
            </div>

            <Link to={`/Product-Info/${item.id}`}>
              <button type="button" className="btn btn-dark buy-btn">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductInfo;
