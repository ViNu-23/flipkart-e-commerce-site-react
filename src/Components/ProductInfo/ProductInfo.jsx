import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import './ProductInfo.css';
import { useState } from 'react';

const ProductInfo = ({ data }) => {
  const [productCounts, setProductCounts] = useState({});

  const { productId } = useParams();
  const product = data.find(item => item.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }


  function minusOne() {
    setProductCounts(prevCounts => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
    }));
  }
  function plusOne() {
    setProductCounts(prevCounts => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  }
  const productCount = productCounts[productId] || 0;

  const addToCart = () => {
    // Get existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cartData')) || {};

    // Get the existing information for the current product in the cart
    const existingProductInfo = existingCart[productId] || { quantity: 0, price: product.newPrice, img: product.img };

    // Update the existing product information with the current quantity
    const updatedProductInfo = {
      quantity: existingProductInfo.quantity + productCount,
      price: product.newPrice,
    
    };

    // Update the cart data with the updated product information
    const updatedCart = {
      ...existingCart,
      [productId]: updatedProductInfo,
    };

    // Store the updated cart data back to localStorage
    localStorage.setItem('cartData', JSON.stringify(updatedCart));

    // Display a message or perform any other UI update
    alert(`Added ${productCount} ${product.title} to the cart!`);
  };
  
  return (
    <>
      <Navbar />
      <h1>Hello</h1>
      <div className='pro-info'>
        <div className='p-img'>
          <img src={product.img} alt={product.title} className='prod-img' />
          <span className='p-title'>{product.title}</span>
        </div>

        <div className='p-details'>
          <div className='p-star'>
            <div className='stars'>
              <span className='rating'>{product.star}</span>
              <span className='rating'>{product.star}</span>
              <span className='rating'>{product.star}</span>
              <span className='rating'>{product.star}</span>
            </div>
            <div>
              <span className='p-review'>{product.reviews}</span>
            </div>
          </div>
          <div className='price'>
            <span className='previews-price'>{product.prevPrice}</span>
            <span className='new-price'> ${product.newPrice}</span>
          </div>
          <div className='pa-info'>
            <span>Company: {product.company}</span>
            <span>Color: {product.color}</span>
            <span>Category: {product.category}</span>
          </div>
          <div className='count-item'>
            <button onClick={minusOne} className='cart-value'>
              -
            </button>
            {productCount}
            <button onClick={plusOne} className='cart-value'>
              +
            </button>
            
          </div>
          <button style={{padding:'10px 45px'}}
                type='button'
                className='btn btn-dark buy-btn'
                onClick={addToCart}
                
              >
                Add to cart
              </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
