// import React from "react";
import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import dataProducts from '../../DataBase/Data';

export default function Cart() {
  const [cartData, setCartData] = useState({});

  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const storedCartDataString = localStorage.getItem('cartData');
    const initialCartData = storedCartDataString ? JSON.parse(storedCartDataString) : {};
    setCartData(initialCartData);
  }, []);

  const handleDelete = (itemId) => {
    const updatedCartData = { ...cartData };
    delete updatedCartData[itemId];
    setCartData(updatedCartData);

    // Update local storage
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));
  };
  const isCartEmpty=Object.values(cartData).length === 0;

  const subtotal = Object.keys(cartData).reduce((total, itemId) => {
    const { quantity, price } = cartData[itemId];
    return total + quantity * price;
  }, 0);

  const shippingCost = 20.00;
  const totalCost = subtotal + shippingCost;
  return (
    <>
      <Navbar />

{
  (isCartEmpty ?
    <div className="empty">
    <img
      src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
      alt="empty-cart"
      className="empty-cart"
    />
    <span>Your cart is empty!. Add items to it now.</span>
    <Link to="/Product" className="nav-links-rm">
      <button className="w3ba">Shop Now</button>
    </Link>
  </div>:<div className="cart-container">
        <div className="bought-items">
        {Object.keys(cartData).map((itemId) => {
        const { quantity, price } = cartData[itemId];
        const product = dataProducts.find((product) => product.id === parseInt(itemId, 10));

        return (
          <div key={itemId} className="bought-item">
            <div className="product-dtls">
              <img src={product.img} alt={product.title} className="bought-img" />
              <span className="bought-product-title">{product.title}</span>
            </div>
            <div className="qty">{quantity} * {price}</div>
          <div className="price-item">{price*quantity}</div>
            <div>
              <button className="dlt-product" onClick={() => handleDelete(itemId)}>
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
                <div className="form-outline form-white mb-2">
                  <label className="form-label" htmlFor="typeName">
                    Cardholder's Name
                  </label>
                  <input
                    type="text"
                    id="typeName"
                    className="form-control form-control-sm"
                    size="17"
                    placeholder="Cardholder's Name"
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
                <p className="mb-1">Total (Incl. taxes)</p>
                <p className="mb-1">${totalCost}</p>
              </div>

              <div className="pay-btns">
                <button type="button" className="btn btn-pay btn-block btn-md">
                  Pay
                </button>

                <span className="total-dlv">${totalCost}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
      
    </>
  );
}
