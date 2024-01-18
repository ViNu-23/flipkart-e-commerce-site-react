import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { PiPackageFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import Order from '../Order/Order';
import Wishlist from '../Wishlist/Wishlist';

export default function Profile() {
  const userDetailsString = localStorage.getItem('userDetails');
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : null;

const[showOrders,setShowOrders]=useState(false);
const[showWishlist,setShowWishList]=useState(false);

  const [name, setName] = useState(userDetails?.name || '');
  const [email, setEmail] = useState(userDetails?.email || '');
  const [phoneNo, setPhoneNo] = useState(userDetails?.phoneno || '');
  const [deliveryAddress, setDeliveryAddress] = useState(
    userDetails?.deliveryAddress || ''
  );
  const [userPassword, setUserPassword] = useState(userDetails?.password || '');

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Save updated details to local storage or send to server
    const updatedDetails = {
      ...userDetails,
      name,
      email,
      phoneno: phoneNo,
      deliveryAddress,
      password: userPassword,
    };

    // Save to local storage
    localStorage.setItem('userDetails', JSON.stringify(updatedDetails));

    // Exit edit mode
    setIsEditing(false);
  };

  useEffect(() => {
  }, [userDetails]);

  //cancel edit option
  const handleCancel = () => {
    // Exit edit mode
    setIsEditing(false);
  };

  // display order and wishlist
  const handleOrders=()=>{
    setShowOrders(true);
    setShowWishList(false)
  }
  const handleWishlist=()=>{
    setShowWishList(true);
    setShowOrders(false);

  }
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'left',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            padding: '20px',
            margin: '80px 20px 30px 20px',
            width: '30rem',
            borderRadius: '10px',
          }}
        >
          <table>
            <thead>
              <tr>
                <th colSpan={2} style={{ textAlign: 'center', fontSize: '20px', paddingBottom: '10px' }}>
                  User Details
                </th>
              </tr>
            </thead>
            <tbody className='user-details'>
              <tr>
                <td className='tds'>Name:</td>
                <td>
                  {isEditing ? (
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                  ) : (
                    <>
                      {name}
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Email:</td>
                <td>
                  {isEditing ? (
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                  ) : (
                    <>
                      {email}
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Phone No:</td>
                <td>
                  {isEditing ? (
                    <input type='text' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                  ) : (
                    <>
                      {phoneNo}
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Delivery address:</td>
                <td>
                  {isEditing ? (
                    <textarea value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                  ) : (
                    <>
                      {deliveryAddress}
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td className='tds'>Change Password: </td>
                <td>
                  {isEditing ? (
                    <input type='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                  ) : (
                    <>
                      {userPassword}
                    </>
                  )}
                </td>
              </tr>
              {isEditing && (
                <tr>
                  <td colSpan={2} style={{ textAlign: 'center', paddingTop: '10px' }}>
                    <button style={{background:'#68D391'}} type="button" className="btn  btn-sm" onClick={handleSave}>Save</button>
                    <button type="button" className="btn  btn-sm" onClick={handleCancel} style={{ marginLeft: '10px',background:'#CBD5E0' }}>Cancel</button>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: '10px', marginTop: '10px' }}>

            <div onClick={handleOrders} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}><PiPackageFill style={{ width: '30px', height: '30px', color: '#2874f0' }} /><div style={{ fontWeight: 'bolder', fontSize: '12px' }}>My Orders</div></div>
            <div onClick={handleWishlist} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}><FaHeart style={{ width: '30px', height: '30px', color: 'red' }} /><div style={{ fontWeight: 'bolder', fontSize: '12px' }}>Wish List</div></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}><HiOutlinePencilAlt style={{ cursor: 'pointer', color: '#2874f0', width: '30px', height: '30px', }} onClick={() => setIsEditing(true)} /><div style={{ fontWeight: 'bolder', fontSize: '12px' }}>Edit</div></div>

          </div>
        </div>
      </div>
      {showOrders&&(
      <Order />
      )}
      {
        showWishlist&&(
          <Wishlist/>
        )
      }
    </>
  );
}
