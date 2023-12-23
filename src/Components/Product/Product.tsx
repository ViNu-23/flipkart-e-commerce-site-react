import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Product.css';
import data from '../../DataBase/Data';
import { Button } from '@chakra-ui/react';

export default function Product() {
  const dataProducts = data;
  const [productCounts, setProductCounts] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);

  function buyNow(productId) {
  }

  function minusOne(productId) {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
    }));
  }

  function plusOne(productId) {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  }

  return (
    <>
      <Navbar />
      <div className='store'>
        <div className='sort-item'>
          <span className='sort-menu'>Sort Menu</span>
          <div className='sort-brand'>
            <span className='sort-title'>Brands</span>
            <form>
              <div className="input-group search">
                <input type="text" className="form-control " placeholder='Search Brand' />

              </div>
            </form>
          </div>

          <div className='sort-brand'>
            <span className='sort-title'>Brands</span>
            <form>
              <ul className='cate' >
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Adidas</li>
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Nike</li>
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Puma</li>
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Reebok</li>
              </ul>
            </form>
          </div>
          <div className='sort-brand'>
            <span className='sort-title'>Brands</span>
            <form>
              <ul className='cate' >
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Adidas</li>
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Nike</li>
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Puma</li>
                <li><input type="radio" name="brand" aria-label="Radio button for following text input" /> Reebok</li>
              </ul>
            </form>
          </div>
          <div className='sort-brand'>
            <span className='sort-title'>Price</span>
            <form>
              <ul className='cate' >
                <li><input type="range" className="form-range" min="0" max="3" step="1" id="customRange3" /></li>
              </ul>
            </form>
          </div>
        </div>
        <div className='products-store'>
          {dataProducts.map((item, index) => (
            <div key={index} id={item.id} className='items-N'>
              <img src={item.img} alt={item.title} className='products-img' />
              <span className='product-title'>{item.title}</span>
              <div className='star'>
                <div>
                  <span className='rating'>{item.star}</span>
                  <span className='rating'>{item.star}</span>
                  <span className='rating'>{item.star}</span>
                  <span className='rating'>{item.star}</span>
                </div>
                <div>
                  <span className='review'>{item.reviews}</span>
                </div>
              </div>
              <div className='price'>
                <span className='previews-price'>{item.prevPrice}</span>
                <span className='new-price'> ${item.newPrice}</span>
              </div>

              <div className='count-item'>
                <Button onClick={() => minusOne(item.id)} className='cart-value'>
                  -
                </Button>
                {productCounts[item.id] || 0}
                <Button onClick={() => plusOne(item.id)} className='cart-value'>
                  +
                </Button>
              </div>

              <button
                type='button'
                className='btn btn-dark buy-btn'
                onClick={() => buyNow(item.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
