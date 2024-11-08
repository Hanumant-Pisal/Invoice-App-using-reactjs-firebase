import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        localStorage.setItem('cName',user.displayName)
        localStorage.setItem('photoURL',user.photoURL)
        localStorage.setItem('email', user.email)

        




        navigate('/dashboard'); // Redirect to dashboard
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='login-wrapper'>
      <div className='login-container'>
        <div className='login-boxes login-left'></div>
        <div className='login-boxes login-right'>
          <h2 className='login-heading'>Login</h2>
          <form onSubmit={submitHandler}>
            <input
              required
              onChange={(e) => { setEmail(e.target.value); }}
              className='login-input'
              type='text'
              placeholder='Email'
            />
            <input
              required
              onChange={(e) => { setPassword(e.target.value); }}
              className='login-input'
              type='password'
              placeholder='Password'
            />
            <input className='login-input login-btn' type='submit' />
          </form>
          <Link to='/register' className='register-link'>Create an Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
