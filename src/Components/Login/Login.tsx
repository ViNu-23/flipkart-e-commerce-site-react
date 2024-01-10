import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Request OTP');
  const [emailField, setEmailField] = useState(true);
  const [otpField, setOtpField] = useState(false);
  const [passField, setPassField] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  // Move the declaration to the top
  const [userEmail, setUserEmail] = useState('');

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const inputField = () => {
    if (emailField) {
      const userEmailValue = userEmail || (emailInputRef.current && emailInputRef.current.value);

      if (!userEmailValue) {
        toast.error('Please enter your email/phone number');
        return;
      }

      setEmailField(false);
      setOtpField(true);
      setButtonText('Validate OTP');
    } else if (otpField) {
      const otpValue = '4';  // Add the logic to get OTP value from the input field
      if (!otpValue) {
        toast.error('Please enter the OTP');
        return;
      }

      setOtpField(false);
      setPassField(true);
      setButtonText('Sign In');
    } else if (passField) {
      const userPassword = passwordInputRef.current?.value;

      if (!userPassword) {
        toast.error('Please set your password');
        return;
      }

      const userDetails = {
        email: userEmail,
        password: userPassword,
      };

      localStorage.setItem('userDetails', JSON.stringify(userDetails));

      navigate('/Home');
    }
  };

  return (
    <>
    <ToastContainer />
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
         <form action="get">
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
                  autoComplete='on'
                />
                <label htmlFor='floatingPassword'>Set Password</label>
              </div>
            )}
            {emailField && (
              <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled/>

              <span style={{ fontSize: '10px' }}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </span>
              </div>
              
            )}


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
         </form>
        </div>
      </div>
    </>
  );
}
