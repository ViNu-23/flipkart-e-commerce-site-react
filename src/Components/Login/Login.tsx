import React from 'react'
import './Login.css';

export default function Login() {
    return (
        <>
           <div style={{
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
            }}>
           <div className='login-container' style={{
                display: 'flex',
            }}>
                <div className='login-img' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#2874f0',
                    color: '#fff',
                    padding: '30px',
                    width: '330px'
                       }}>
                    <span style={{
                        marginBottom: '18px',
                        fontWeight: 'bold',
                        fontSize: '25px'
                          }}> 
                          Login
                     </span>
                    <span >Get access to your Orders, Wishlist and Recommendations</span>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                           }}>
                        <img src='https://www.bingocycles.com/images/login_img.png' alt='login-img' style={{
                        width: '60%',
                        marginTop: '150px'
                        }} />
                    </div>
                </div>
                <div className='login-form' style={{
                    width: '380px',
                    padding: '20px',
                       }}>
                    <div className="form-floating mb-3" style={{marginTop:'20px'}}>
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email Address / Phone Number</label>
                    </div>
                    {/* <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Enter OTP</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Set Password</label>
                    </div> */}
                    <span style={{fontSize:'10px'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</span>
                    <div className="d-grid gap-2 mb-3" style={{marginTop:'10px'}}>
                        <button className="btn " type="button" style={{backgroundColor:'#fb641b',color:'#fff',padding:'10px 30px'}}>Request OTP</button>
                    </div>
                </div>


            </div>
           </div>
        </>
    )
}
