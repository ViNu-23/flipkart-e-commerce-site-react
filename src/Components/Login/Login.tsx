import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Request OTP');
  const [emailField, setEmailField] = useState(true);
  const [otpField, setOtpField] = useState(false);
  const [passField, setPassField] = useState(false);

  // Move the declaration to the top
  const [userEmail, setUserEmail] = useState('');

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const inputField = () => {
    if (emailField === true) {
      setEmailField(false);
      setOtpField(true);
      setButtonText('Validate OTP');
    } else if (otpField === true) {
      setOtpField(false);
      setPassField(true);
      setButtonText('Sign In');
    }

    if (passField === true) {
      // Use stored email if available
      const userEmailValue = userEmail || (emailInputRef.current && emailInputRef.current.value);

      const userPassword = passwordInputRef.current?.value;

      // Save user details to local storage
      const userDetails = {
        email: userEmailValue,
        password: userPassword,
      };

      localStorage.setItem('userDetails', JSON.stringify(userDetails));

      // Redirect to '/Home'
      navigate('/Home');
    }
  };

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className='login-container'
          style={{
            display: 'flex',
          }}
        >
          <div
            className='login-img'
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#2874f0',
              color: '#fff',
              padding: '30px',
              width: '330px',
            }}
          >
            <span
              style={{
                marginBottom: '18px',
                fontWeight: 'bold',
                fontSize: '25px',
              }}
            >
              Login
            </span>
            <span>
              Get access to your Orders, Wishlist and Recommendations
            </span>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='https://www.bingocycles.com/images/login_img.png'
                alt='login-img'
                style={{
                  width: '60%',
                  marginTop: '150px',
                }}
              />
            </div>
          </div>
          <div
            className='login-form'
            style={{
              width: '380px',
              padding: '20px',
            }}
          >
            {emailField && (
              <div className='form-floating mb-3' style={{ marginTop: '20px' }}>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                  ref={emailInputRef}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <label htmlFor='floatingInput'>
                  Email Address / Phone Number
                </label>
              </div>
            )}

            {otpField && (
              <div className='form-floating mb-3'>
                <input
                  type='number'
                  className='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label htmlFor='floatingInput'>Enter OTP</label>
              </div>
            )}

            {passField && (
              <div className='form-floating mb-3'>
                <input
                  type='password'
                  className='form-control'
                  id='floatingPassword'
                  placeholder='Password'
                  ref={passwordInputRef}
                />
                <label htmlFor='floatingPassword'>Set Password</label>
              </div>
            )}

            <span style={{ fontSize: '10px' }}>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </span>

            <div
              className='d-grid gap-2 mb-3'
              style={{ marginTop: '10px' }}
            >
              <button
                className='btn '
                type='button'
                style={{
                  backgroundColor: '#fb641b',
                  color: '#fff',
                  padding: '10px 30px',
                }}
                onClick={inputField}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
