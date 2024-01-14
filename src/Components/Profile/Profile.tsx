import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Profile.css'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BiSolidPackage } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'left',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          padding: '20px',
          margin: '80px 20px',
          width: '30rem',
          borderRadius: '10px'
        }}>
          <table>
            <thead>
              <tr>
                <th colSpan={2} style={{ textAlign: 'center', fontSize: '20px', paddingBottom: '10px' }}>User Details</th>
              </tr>
            </thead>
            <tbody className='user-details'>
              <tr>
                <td className='tds'>Name:</td>
                <td>vijay<HiOutlinePencilAlt style={{ marginLeft: '10px' ,cursor:'pointer',color:'#2874f0'}} /></td>
              </tr>
              <tr>
                <td className='tds'>Email:</td>
                <td>vijayvinu46@gmail.com <HiOutlinePencilAlt style={{ marginLeft: '10px' ,cursor:'pointer',color:'#2874f0'}} /></td>
              </tr>
              <tr>
                <td className='tds'>Phone No:</td>
                <td>9876543210<HiOutlinePencilAlt style={{ marginLeft: '10px',cursor:'pointer',color:'#2874f0' }} /></td>
              </tr>
              <tr>
                <td className='tds'>Delivery address:</td>
                <td>Temporary address Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam id ducimus eum veritatis voluptate delectus eveniet aliquam nobis consequuntur.<HiOutlinePencilAlt style={{ marginLeft: '10px' ,cursor:'pointer',color:'#2874f0'}} /></td>
              </tr>
            </tbody>
          </table>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: '10px',marginTop:'20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',cursor:'pointer' }}><BiSolidPackage style={{ width: '40px', height: '40px', color: '#2874f0' }} /><div style={{ fontWeight: 'bolder', fontSize: '12px' }}>My Orders</div></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',cursor:'pointer'  }}><FaHeart style={{ width: '35px', height: '40px', color: 'red' }} /><div style={{ fontWeight: 'bolder', fontSize: '12px' }}>Wish List</div></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',cursor:'pointer'  }}><RxGithubLogo style={{ width: '35px', height: '40px', color: '#000' }} /><div style={{ fontWeight: 'bolder', fontSize: '12px' }}>About Me</div></div>
          </div>
        </div>

      </div>

    </>
  )
}
