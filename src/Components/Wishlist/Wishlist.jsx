import { useState, useEffect } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
    setWishlist(storedWishlist);
  }, []);

  return (
    <div>
      <h2>Wishlist</h2>
      {Object.values(wishlist).map((item) => (
        <div key={item.id} className='wishlist-item'>
          <img src={item.img} alt={item.title} className='wishlist-img' />
          <span className='wishlist-title'>{item.title}</span>
          {/* Add other details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
