import  { useState, useEffect } from 'react';
import { FaHeartCircleXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (itemId) => {
    // Update the wishlist by removing the item with the specified ID
    const updatedWishlist = { ...wishlist };
    delete updatedWishlist[itemId];
    setWishlist(updatedWishlist);

    // Update local storage with the new wishlist
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setAlertMessage('Item removed from wishlist');

    // Clear the alert message after 3 seconds
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{margin:'4px'}}>Wishlist  <FaHeart style={{marginBottom:'2px'}}/> </h2>
      {alertMessage && (
        <div className="alert alert-info" role="alert">
          {alertMessage}
        </div>
      )}
      {Object.keys(wishlist).length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center' }}>
          {Object.values(wishlist).map((item) => (
            <div
              key={item.id}
              style={{
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                margin: '10px',
                padding: '16px',
                width: '140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
                borderRadius:'6px',
                justifyContent:'space-between'
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <div style={{ textAlign: 'center' }}>
                <span>{item.title}</span>
                {/* Add other details as needed */}
              </div>
             <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
             <Link to={`/Product-Info/${item.id}`}>
             <button style={{background:'#EBF8FF'}} type="button" className="btn btn-sm">Buy</button>
             </Link>
              <button style={{background:'#FFF5F5'}} type="button" className="btn btn-sm" onClick={() => removeFromWishlist(item.id)}>
                <FaHeartCircleXmark style={{height:'20px',width:'20px',color:'red'}}/></button>
             </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
