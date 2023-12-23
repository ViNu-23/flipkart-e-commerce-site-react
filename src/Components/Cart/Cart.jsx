import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Cart.css'
import { Link } from 'react-router-dom'
export default function Cart() {
  return (
    <>
    <Navbar/>
     <div className='empty'>
      <img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='empty-cart' className='empty-cart'/>
     <span>Your cart is empty!. Add items to it now.</span>
     <Link to="/Product" className="nav-links-rm"> 
     <button className='w3ba'>Shop Now</button>
          </Link>
    
     </div>
     <div className="footer-cart">
          <p>&copy; 2023 Your E-Commerce Store. All Rights Reserved.</p>
        </div>
    </>
  )
}
