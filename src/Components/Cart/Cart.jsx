import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

import { FaTrashAlt } from "react-icons/fa";
export default function Cart() {
  return (
    <>
      <Navbar />

      {/* <div className="empty">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="empty-cart"
          className="empty-cart"
        />
        <span>Your cart is empty!. Add items to it now.</span>
        <Link to="/Product" className="nav-links-rm">
          <button className="w3ba">Shop Now</button>
        </Link>
      </div> */}
      <div className="cart-container">
        <div className="bought-items">
          <div className="bought-item">
            <div className="product-dtls">
              <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="bought-img" className="bought-img" />
              <span className="bought-product-title">temp</span>
            </div>
            <div className="qty">34</div>
            <div className="price-item">8746</div>
            <div><button className="dlt-product"><FaTrashAlt className="trash"/></button></div>
          </div>
          <div className="bought-item">
            <div className="product-dtls">
              <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="bought-img" className="bought-img" />
              <span className="bought-product-title">temp</span>
            </div>
            <div className="qty">34</div>
            <div className="price-item">8746</div>
            <div><button className="dlt-product"><FaTrashAlt className="trash"/></button></div>
          </div>
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
                  <label className="form-label" htmlFor="typeText">
                    Card Number
                  </label>
                  <input
                    type="numeric"
                    id="card-number"
                    className="form-control form-control-sm"
                    size="17"
                    placeholder="1234 5678 9012 3457"
                    minLength="19"
                    maxLength="19"
                    autoComplete=""
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
                        type="password"
                        id="password-txt"
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
                <p className="mb-1 total">$4798.00</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="mb-1">Shipping</p>
                <p className="mb-1">$20.00</p>
              </div>

              <div className="d-flex justify-content-between mb-1">
                <p className="mb-1">Total (Incl. taxes)</p>
                <p className="mb-1">$4818.00</p>
              </div>

              <div className="pay-btns">
                <button type="button" className="btn btn-pay btn-block btn-md">
                  Pay
                </button>

                <span className="total-dlv"> $4818.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
