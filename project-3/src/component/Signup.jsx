import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
   
    email: '',
    password: '',
     name: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/post', values);
      localStorage.setItem('token', response.data.id);
      navigate('/'); 
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <div className='signup-container'>
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            onChange={e => setValues({ ...values, name: e.target.value })}
            type='text'
            placeholder='Enter your name'
            name='name'
            value={values.name}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={e => setValues({ ...values, email: e.target.value })}
            type='email'
            placeholder='Enter your email'
            name='email'
            value={values.email}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={e => setValues({ ...values, password: e.target.value })}
            type='password'
            placeholder='Enter your password'
            name='password'
            value={values.password}
            required
          />
        </div>

        {/* <div className='form-group'>
          <input type='checkbox' id='terms' name='terms' required />
          <label htmlFor='terms'>I agree to the terms and policies</label>
        </div> */}

        <button className='signup btn' type='submit'>Sign up</button>
        <Link className='link' to="/login"></Link>
      </form>
    </div>
  );
}

export default Signup;
