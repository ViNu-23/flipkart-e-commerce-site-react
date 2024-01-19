// import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import dataProducts from "../../DataBase/Data";

export default function Cart() {
  const [cartData, setCartData] = useState({});

  //input validation for card details
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const storedCartDataString = localStorage.getItem("cartData");
    const initialCartData = storedCartDataString
      ? JSON.parse(storedCartDataString)
      : {};
    setCartData(initialCartData);
  }, []);

  const handleDelete = (itemId) => {
    const updatedCartData = { ...cartData };
    delete updatedCartData[itemId];
    setCartData(updatedCartData);

    // Update local storage
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  };
  const isCartEmpty = Object.values(cartData).length === 0;

  const subtotal = Object.keys(cartData).reduce((total, itemId) => {
    const { quantity, price } = cartData[itemId];
    return total + quantity * price;
  }, 0);

  const shippingCost = 20.0;
  const totalCost = subtotal + shippingCost;

  const handlePay = () => {
    if (!cardholderName || !cardNumber || !expirationDate || !cvv) {
      setErrorMessage("Please fill in all fields");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

     // Validate card number (Simple check for 16 digits):
     if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage("Invalid card number");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

    // Validate expiration date (simple check for the format MM/YYYY):
    if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(expirationDate)) {
      setErrorMessage("Invalid expiration date. Please use MM/YYYY format");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

    // Validate CVV (simple check for 3 digits):
    if (!/^\d{3}$/.test(cvv)) {
      setErrorMessage("Invalid CVV. It should be a 3-digit number");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
    }

    // If everything is 👌, proceed with the payment logic:
    setSuccessMessage("Order Placed Successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);

    // Create an 'orders' array in local storage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Create a new order object with the required details
    const newOrder = {
      items: cartData,
      subtotal,
      shippingCost,
      totalCost,
      timestamp: new Date().toISOString().split('T')[0],
    };

// Add the new order to the orders array
orders.push(newOrder);

// Update the local storage with the updated orders array
localStorage.setItem('orders', JSON.stringify(orders));

// Clear the cart data after successful payment
localStorage.removeItem('cartData');
setCartData({});

// Clear the success message after 2 seconds
setTimeout(() => {
  setSuccessMessage("");
}, 6000);

// Clear input fields
setCardholderName("");
setCardNumber("");
setExpirationDate("");
setCVV("");

};

return (
    <>
      <Navbar />
      
      {isCartEmpty ? (
        <div className="empty">
          {successMessage&&(
                    <div className="alert alert-success mt-2" role="alert">
                    {successMessage}
                  </div>
                  )}
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="empty-cart"
            className="empty-cart"
          />
          <span>Your cart is empty!. Add items to it now.</span>
          <Link to="/Product" className="nav-links-rm">
            <button className="w3ba">Shop Now</button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="bought-items">
            {Object.keys(cartData).map((itemId) => {
              const { quantity, price } = cartData[itemId];
              const product = dataProducts.find(
                (product) => product.id === parseInt(itemId, 10)
              );

              return (
                <div key={itemId} className="bought-item">
                  <div className="product-dtls">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="bought-img"
                    />
                    <span className="bought-product-title">
                      {product.title}
                    </span>
                  </div>
                  <div className="qty">
                    {quantity} X ${price}
                  </div>
                  <div className="price-item">${price * quantity}</div>
                  <div>
                    <button
                      className="dlt-product"
                      onClick={() => handleDelete(itemId)}
                    >
                      <FaTrashAlt className="trash" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-5 checkout">
            <div className="card bg-primary text-white rounded-2 needsadow">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0 dts">Card details</h4>
                </div>

                <p className="card-type mb-1">Card type</p>
                <img
                  src="https://freepngimg.com/thumb/credit_card/25744-3-credit-card-visa-and-master-card-clipart.png"
                  alt="cards"
                  className="cards"
                />

                <form className="mt-2" autoComplete="off">
                  {errorMessage && (
                    <div className="alert alert-danger mt-2" role="alert">
                      {errorMessage}
                    </div>
                  )}
                 
                  <div className="form-outline form-white mb-2">
                    <label className="form-label" htmlFor="typeName">
                      Card holders Name
                    </label>
                    <input
                      type="text"
                      id="typeName"
                      className="form-control form-control-sm"
                      size="17"
                      placeholder="Cardholder's Name"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                    />
                  </div>

                  <div className="form-outline form-white mb-2">
                    <label className="form-label" htmlFor="">
                      Card Number
                    </label>
                    <input
                      type="number"
                      id="card-number"
                      className="form-control form-control-sm"
                      size="17"
                      placeholder="1234 5678 9012 3457"
                      minLength="19"
                      maxLength="19"
                      autoComplete="off"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>

                  <div className="row mb-2">
                    <div className="col-md-6">
                      <div className="form-outline form-white">
                        <label className="form-label" htmlFor="typeExp">
                          Expiration
                        </label>
                        <input
                          type="date"
                          id="typeExp"
                          className="form-control form-control-sm"
                          placeholder="MM/YYYY"
                          size="7"
                          minLength="7"
                          maxLength="7"
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-outline form-white">
                        <label className="form-label">CVV</label>
                        <input
                          type="number"
                          id="password"
                          className="form-control form-control-sm"
                          placeholder="&#9679;&#9679;&#9679;"
                          size="1"
                          minLength="3"
                          maxLength="3"
                          autoComplete="off"
                          value={cvv}
                          onChange={(e) => setCVV(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <hr className="my-2" />

                <div className="d-flex justify-content-between">
                  <p className="mb-1">Subtotal</p>
                  <p className="mb-1 total">${subtotal}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-1">Shipping</p>
                  <p className="mb-1">${shippingCost}</p>
                </div>

                <div className="d-flex justify-content-between mb-1">
                  <p className="mb-1">Grand Total (Incl. taxes)</p>
                  <p className="mb-1">${totalCost}</p>
                </div>

                <div className="pay-btns" onClick={handlePay}>
                  <button
                    type="button"
                    className="btn btn-pay btn-block btn-md"
                  >
                    Pay
                  </button>
                  <span className="total-dlv">${totalCost}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
