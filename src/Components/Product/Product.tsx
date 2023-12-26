import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Product.css';
import data from '../../DataBase/Data';
import { Link } from 'react-router-dom';
export default function Product() {

  const dataProducts = data;
  // const [productCounts, setProductCounts] = useState({});
  const [searchBrand, setSearchBrand] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredProducts = dataProducts.filter((item) => {
    const brandNameFilter = item.title.toLowerCase().includes(searchBrand.toLowerCase());
    const brandFilter = item.company.toLowerCase().includes(selectedBrand.toLowerCase());
    const colorFilter = selectedColor ? item.color.toLowerCase() === selectedColor.toLowerCase() : true;
    const categoryFilter = selectedCategory ? item.category.toLowerCase() === selectedCategory.toLowerCase() : true;

    return brandNameFilter && colorFilter && categoryFilter && brandFilter;
  });

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedCategory('');
    setSearchBrand('');
    setSelectedBrand('');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedColor('');
    setSearchBrand('');
    setSelectedBrand('');
  };

  const handleSearchChange = (value) => {
    setSearchBrand(value);
    setSelectedColor('');
    setSelectedCategory('');
    setSelectedBrand('');
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
    setSelectedColor('');
    setSelectedCategory('');
    setSearchBrand('');
  };

  // function minusOne(productId) {
  //   setProductCounts((prevCounts) => ({
  //     ...prevCounts,
  //     [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
  //   }));
  // }

  // function plusOne(productId) {
  //   setProductCounts((prevCounts) => ({
  //     ...prevCounts,
  //     [productId]: (prevCounts[productId] || 0) + 1,
  //   }));
  // }
  // const addToCart = (itemId) => {
  //   const updatedCounts = { ...productCounts };
  //   const product = dataProducts.find((product) => product.id === itemId);

  //   if (updatedCounts[itemId] > 0) {
  //     alert(`${product?.title} Added to Cart`)
  //     // Update local storage
  //     const cartData = JSON.parse(localStorage.getItem('cartData')) || {};
  //     cartData[itemId] = {
  //       quantity: updatedCounts[itemId],
  //       price: dataProducts.find((product) => product.id === itemId).newPrice,
  //     };
  //     localStorage.setItem('cartData', JSON.stringify(cartData));

  //   } else {
  //     alert(`Please select a quantity greater than 0.`)

  //   }
  // };
  return (
    <>
      <Navbar />
      <div className='store'>
        <div className='sort-item'>
          <span className='sort-menu'>Sort Menu</span>
          <div className='sort-brand'>
            <span className='sort-title'>Name</span>
            <form>
              <div className="input-group search">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Search'
                  value={searchBrand}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className='sort-brand'>
            <span className='sort-title'>Color</span>
            <form action='post'>
              <ul className='cate'>
                <li>
                  <input
                    type='radio'
                    name='color'
                    value='white'
                    id='white'
                    checked={selectedColor === 'white'}
                    onChange={() => handleColorChange('white')}
                  />
                  White
                </li>
                <li>
                  <input
                    type='radio'
                    name='color'
                    value='red'
                    id='red'
                    checked={selectedColor === 'red'}
                    onChange={() => handleColorChange('red')}
                  />
                  Red
                </li>
                <li>
                  <input
                    type='radio'
                    name='color'
                    value='green'
                    id='green'
                    checked={selectedColor === 'green'}
                    onChange={() => handleColorChange('green')}
                  />
                  Green
                </li>
                <li>
                  <input
                    type='radio'
                    name='color'
                    value='black'
                    id='black'
                    checked={selectedColor === 'black'}
                    onChange={() => handleColorChange('black')}
                  />
                  Black
                </li>
              </ul>
            </form>
          </div>
          <div className='sort-brand'>
            <span className='sort-title'>Category</span>
            <form action='post'>
              <ul className='cate'>
                <li>
                  <input
                    type='radio'
                    name='category'
                    value='flat'
                    id='flats'
                    checked={selectedCategory === 'flats'}
                    onChange={() => handleCategoryChange('flats')}
                  /> Flats
                </li>
                <li>
                  <input
                    type='radio'
                    name='category'
                    value='heels'
                    id='heels'
                    checked={selectedCategory === 'heels'}
                    onChange={() => handleCategoryChange('heels')}
                  />
                  Heels
                </li>
                <li>
                  <input
                    type='radio'
                    name='category'
                    value='sneakers'
                    id='sneakers'
                    checked={selectedCategory === 'sneakers'}
                    onChange={() => handleCategoryChange('sneakers')}
                  />
                  Sneakers
                </li>
                <li>
                  <input
                    type='radio'
                    name='category'
                    value='sandals'
                    id='sandals'
                    checked={selectedCategory === 'sandals'}
                    onChange={() => handleCategoryChange('sandals')}
                  />
                  Sandals
                </li>
              </ul>
            </form>

          </div>
          <div className='sort-brand'>
            <span className='sort-title'>Brand</span>
            <form>
              <select
                className='form-select'
                aria-label='brands'
                value={selectedBrand}
                onChange={(e) => handleBrandChange(e.target.value)}
              >
                <option value=''>Select Brand</option>
                <option value='nike'>Nike</option>
                <option value='adidas'>Adidas</option>
                <option value='vans'>Vans</option>
                <option value='puma'>Puma</option>
              </select>
            </form>
          </div>
        </div>
        <div className='products-store'>
          {filteredProducts.map((item, index) => (
            <div key={index} className='items-N'>
              <img src={item.img} alt={item.title} className='products-img' />
              <span className='product-title'>{item.title}</span>
              <div className='star'>
                <div className='stars'>
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

              {/* <div className='count-item'>
                <button onClick={() => minusOne(item.id)} className='cart-value'>
                  -
                </button>
                {productCounts[item.id] || 0}
                <button onClick={() => plusOne(item.id)} className='cart-value'>
                  +
                </button>
              </div> */}
            <Link  to={`/Product-Info/${item.id}`}>

              <button
                type='button'
                className='btn btn-dark buy-btn'
                // onClick={() => {
                //   addToCart(item.id);
                // }}
              >
                Buy Now
              </button>
</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
