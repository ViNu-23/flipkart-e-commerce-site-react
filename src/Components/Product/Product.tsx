import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Product.css';
import data from '../../DataBase/Data';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
export default function Product() {

  const dataProducts = data;
  const [searchBrand, setSearchBrand] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [wishList, setWishList] = useState({});
  const [alertMessages, setAlertMessages] = useState({});

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

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
    setWishList(storedWishlist);
  }, []);

  const handleWishlist = (item) => {
    const itemId = item.id;
 
    setWishList((prevWishlist) => {
      const updatedWishlist = { ...prevWishlist };
  
      // Toggle item in the wishlist
      if (!updatedWishlist[itemId]) {
        updatedWishlist[itemId] = { ...item };
      } else {
        delete updatedWishlist[itemId];
      }
  
      // Update local storage with the new wishlist
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  
      return updatedWishlist;
    });
  
    setAlertMessages((prevMessages) => ({
      ...prevMessages,
      [itemId]: !wishList[itemId] ? 'Item added to wishlist' : 'Item removed from wishlist',
      
    }));
  
    // Clear the alert message after 3 seconds
    setTimeout(() => {
      setAlertMessages((prevMessages) => {
        const updatedMessages = { ...prevMessages };
        delete updatedMessages[itemId];
        return updatedMessages;
      });
    }, 3000);
  };
  
  
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

              <div style={{display:'flex',justifyContent:'space-evenly',width:'100%',alignItems:'center'}}>
              <Link to={`/Product-Info/${item.id}`}>
                <button
                  type='button'
                  className='btn btn-dark buy-btn'
                >
                  Buy Now
                </button>
              </Link>
              <button
              onClick={() => handleWishlist(item)}
              className='wishlist-heart'
                  type='button'
                  style={{border:'none',background:'none',cursor:'pointer'}}
                >
                  <FaHeart style={{height:'22px',width:'22px',color: wishList[item.id] ? 'red' : ''}}/>
                </button>
              </div>
              {alertMessages[item.id] && (
            <div style={{ textAlign: 'center', marginTop: '5px',fontSize:'smaller' }}>{alertMessages[item.id]}</div>
          )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
